import arcpy
import os

# --- SCRIPT SETUP ---
# Purpose: This script uses the Build Balanced Zones tool to group a large number of
# building points into zones of a specified size. The primary goal is to
# make the number of points in each zone as equal as possible (homogeneous).
# --------------------------------------------------------------------------------

# Set the workspace to your project geodatabase where the data resides and output will be saved.
workspace = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
arcpy.env.workspace = workspace
arcpy.env.overwriteOutput = (
    True  # Allows the script to overwrite old outputs for easier re-running.
)

# Define the input layer containing all the building points to be clustered.
building_points = "okay_google_open_buildings_sud_haiti_reprojected"

print(f"Workspace set to: {workspace}")
if not arcpy.Exists(building_points):
    print(f"ERROR: Cannot find the building points layer: {building_points}")
    exit()

# --- DATA PREPARATION ---
# The Build Balanced Zones tool needs a numeric field where each feature has a value
# of 1. It sums this field to determine the number of points in a zone.
print("Verifying 'BuildCount' field...")
existing_fields = [f.name for f in arcpy.ListFields(building_points)]
if "BuildCount" not in existing_fields:
    print("Adding and calculating 'BuildCount' field...")
    arcpy.AddField_management(building_points, "BuildCount", "SHORT")
    arcpy.CalculateField_management(building_points, "BuildCount", "1", "PYTHON3")
else:
    print("'BuildCount' field already exists.")

# --- PROCESSING LOOP ---
# This loop will run the process for each target size you want to create.
target_sizes = [375, 750]

for target_size in target_sizes:
    print(f"\n{'='*60}")
    print(f"Clustering points for target size: {target_size} buildings per zone")
    print(f"{'='*60}")

    # --- PARAMETER DEFINITION FOR BuildBalancedZones ---

    # Define a unique name for the output feature class.
    # This output will be a POINT feature class, where each point has a new 'ZONE_ID' field.
    output_clustered_points = f"EA_Zone_Point_Clusters_{target_size}_v2"

    # Zone Building Criteria (The primary "Requirement"):
    # This string tells the tool its main goal. Format: "field_name target_value weight".
    # We are giving the 'BuildCount' target a high weight (e.g., 20) to force the
    # algorithm to prioritize hitting this number above all else.
    target_weight = 20
    zone_criteria = f"BuildCount {target_size} {target_weight}"

    # Zone Selection Criteria (The secondary "Preference"):
    # This parameter acts as a tie-breaker. When the tool finds multiple valid solutions,
    # it will prefer the one that best satisfies this characteristic.
    # "EQUAL_NUMBER_OF_FEATURES" strongly reinforces our main goal of homogeneity.
    zone_characteristic_preference = "EQUAL_NUMBER_OF_FEATURES"

    # Genetic Algorithm Tuning Parameters:
    # These control the search for an optimal solution. Higher numbers mean a more
    # exhaustive search, which takes longer but can yield better, more homogeneous results.
    pop_size = 150  # Number of potential solutions to evaluate in each generation (default is 100).
    num_gens = (
        100  # Number of times the algorithm evolves the solutions (default is 50).
    )

    print("Executing Build Balanced Zones with the following settings:")
    print(f"  - Output Feature Class: {output_clustered_points}")
    print(f"  - Zone Building Criteria (Requirement): '{zone_criteria}'")
    print(f"  - Zone Characteristic (Preference): '{zone_characteristic_preference}'")
    print(
        f"  - Genetic Algorithm: Population Size = {pop_size}, Generations = {num_gens}"
    )
    print("\nThis may take several minutes...")

    try:
        # --- EXECUTE THE TOOL ---
        # This is the core step that performs the clustering. It assigns a ZONE_ID
        # to each point in the output feature class.
        arcpy.stats.BuildBalancedZones(
            in_features=building_points,
            output_features=output_clustered_points,
            zone_creation_method="ATTRIBUTE_TARGET",
            zone_building_criteria_target=zone_criteria,
            zone_characteristics=zone_characteristic_preference,
            population_size=pop_size,
            number_generations=num_gens,
            mutation_factor=0.1,  # A standard value for introducing variation.
        )
        print(
            f"\nSUCCESS: Point clustering completed. Output layer is '{output_clustered_points}'."
        )

    except arcpy.ExecuteError:
        print(f"\nERROR during BuildBalancedZones for target {target_size}.")
        print(arcpy.GetMessages())  # Prints the specific tool error message.
        continue  # Skips to the next target size if this one fails.
    except Exception as e:
        print(f"\nAn unexpected script error occurred: {str(e)}")
        continue

print(f"\n{'='*60}")
print("PROCESS COMPLETE: Point clustering has finished.")
print("Next, please manually inspect the results in ArcGIS Pro.")
print(f"{'='*60}")

# --- GUIDANCE FOR MANUAL VALIDATION ---
print("\n--- How to Manually Validate Your Results in ArcGIS Pro ---\n")
print("1. Add the newly created point layers to your map:")
print("   - EA_Zone_Point_Clusters_375_v2")
print("   - EA_Zone_Point_Clusters_750_v2")
print("\n2. Use the 'Summarize' tool to count points per ZONE_ID:")
print(
    "   a. In the 'Contents' pane, right-click on a new layer (e.g., 'EA_Zone_Point_Clusters_375_v2')."
)
print("   b. Click 'Summarize'. A new window will open.")
print("   c. For 'Field(s) to Summarize', check the box next to 'ZONE_ID'.")
print(
    "   d. For 'Statistic(s)', check the box for 'Count' under 'OBJECTID (or other unique ID)'."
)
print("   e. Give the 'Output Table' a clear name (e.g., 'Summary_375_v2').")
print("   f. Click 'Run'.")
print("\n3. Analyze the Summary Table:")
print("   a. Open the new summary table.")
print(
    "   b. Look at the 'Count of OBJECTID' column. This shows the number of buildings in each zone."
)
print(
    "   c. Right-click the 'Count of OBJECTID' field header and choose 'Sort Ascending' or 'Sort Descending'."
)
print("   d. This will immediately show you the minimum and maximum zone sizes.")
print(
    "   e. Calculate the difference (Max - Min) to see if the homogeneity is acceptable."
)
print(
    "\nIf the results are good, we can add the polygon creation step back into the script."
)
