import arcpy
import os

# --- SCRIPT SETUP ---
# Set workspace to your geodatabase
workspace = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
arcpy.env.workspace = workspace
arcpy.env.overwriteOutput = True

# Input building points layer
building_points = "okay_google_open_buildings_sud_haiti_reprojected"

print(f"Workspace set to: {workspace}")
if not arcpy.Exists(building_points):
    print(f"ERROR: Cannot find the building points layer: {building_points}")
    exit()

# --- DATA PREPARATION ---
# Ensure a 'BuildCount' field exists with a value of 1 for each point.
# This field is used to sum the number of buildings per zone.
print("Verifying 'BuildCount' field...")
existing_fields = [f.name for f in arcpy.ListFields(building_points)]
if "BuildCount" not in existing_fields:
    print("Adding and calculating 'BuildCount' field...")
    arcpy.AddField_management(building_points, "BuildCount", "SHORT")
    arcpy.CalculateField_management(building_points, "BuildCount", "1", "PYTHON3")
else:
    print("'BuildCount' field already exists.")

# --- PROCESSING LOOP ---
# Define the target sizes for the Enumeration Areas
target_sizes = [375, 750]

for target_size in target_sizes:
    print(f"\n{'='*60}")
    print(f"Creating Enumeration Areas with a target of {target_size} buildings")
    print(f"{'='*60}")

    # --- PARAMETER DEFINITION ---
    # Define a unique name for the output feature class
    output_zones = f"EA_Zones_{target_size}_v3"

    # Define the zone building criteria string. Format: "field_name target_value weight"
    # This tells the tool to aim for a SUM of 'BuildCount' equal to the target_size.
    zone_criteria = f"BuildCount {target_size} 1"

    # ** TUNING PARAMETERS FOR FUNCTIONAL TOLERANCE **
    # Increase generations and population size to find a more optimal solution.
    # Default is 100 population, 50 generations. We'll increase them.
    pop_size = 200  # More solutions to test in each generation
    num_gens = 100  # More iterations to refine the solutions

    print(f"Targeting {target_size} buildings per zone.")
    print(f"Tuning parameters: Population Size = {pop_size}, Generations = {num_gens}")
    print("Running Build Balanced Zones... (This may take several minutes)")

    try:
        # --- EXECUTE THE TOOL ---
        # Run Build Balanced Zones using the syntax from your working example.
        arcpy.stats.BuildBalancedZones(
            in_features=building_points,
            output_features=output_zones,
            zone_creation_method="ATTRIBUTE_TARGET",
            number_of_zones=None,
            zone_building_criteria_target=zone_criteria,
            zone_building_criteria=None,
            spatial_constraints="TRIMMED_DELAUNAY_TRIANGULATION",
            weights_matrix_file=None,
            zone_characteristics="COMPACTNESS",
            attribute_to_consider=None,
            distance_to_consider=None,
            categorial_variable=None,
            proportion_method="",
            population_size=pop_size,
            number_generations=num_gens,
            mutation_factor=0.1,
            output_convergence_table=None,
        )

        print(f"Successfully created feature class: {output_zones}")

        # --- VALIDATION STEP ---
        # The script now validates the output against your strict +/- 15 requirement.
        print("\nValidating results against the +/- 15 building tolerance...")

        # Find the summary field created by the tool (e.g., "SUM_BuildCount")
        sum_field = None
        for field in arcpy.ListFields(output_zones):
            if "BuildCount" in field.name and "SUM" in field.name.upper():
                sum_field = field.name
                break

        if not sum_field:
            print("Could not find summary field in output. Validation skipped.")
            continue

        print(f"Using field '{sum_field}' for validation.")

        # Analyze the distribution of buildings per zone
        with arcpy.da.SearchCursor(output_zones, [sum_field, "ZONE_ID"]) as cursor:
            counts = []
            within_tolerance = 0
            outside_tolerance = 0

            for row in cursor:
                building_count = row[0]
                counts.append(building_count)

                # Check if the result is within your desired tolerance
                if (target_size - 15) <= building_count <= (target_size + 15):
                    within_tolerance += 1
                else:
                    outside_tolerance += 1

            if counts:
                print("\n--- Zone Statistics ---")
                print(f"Total zones created: {len(counts)}")
                print(
                    f"Zones WITHIN tolerance ({target_size} +/- 15): {within_tolerance}"
                )
                print(f"Zones OUTSIDE tolerance: {outside_tolerance}")
                print(f"Minimum buildings per zone: {min(counts)}")
                print(f"Maximum buildings per zone: {max(counts)}")
                print(f"Average buildings per zone: {sum(counts)/len(counts):.1f}")

    except arcpy.ExecuteError:
        print(f"\nERROR running Build Balanced Zones for target {target_size}.")
        print(arcpy.GetMessages())
    except Exception as e:
        print(f"\nAn unexpected error occurred: {str(e)}")

print(f"\n{'='*60}")
print("Process complete!")
print(f"{'='*60}")
