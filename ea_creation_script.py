import arcpy
import os
import sys # Added for sys.exit() on critical errors

# --- Author: "Gemini 2.5 Pro Preview 05-06" --- 
# --- User Adjustable Parameters ---
# Geodatabase workspace path
workspace = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
# Input building points feature class
building_points_fc_name = "okay_google_open_buildings_sud_haiti_reprojected"
# Field to be used for counting (ensure this field has a value of 1 for each building)
count_field = "BuildCount"
# Target sizes for Enumeration Areas
target_ea_sizes = [375, 750]
# Desired tolerance for validation (e.g., 15 means target_size +/- 15)
validation_tolerance_value = 15

# Genetic Algorithm Parameters for BuildBalancedZones (Adjust these to potentially improve results)
ga_population_size = 100  # Number of solutions in each generation (e.g., 50-200)
ga_number_generations = 50 # Number of iterations (e.g., 50-200)
ga_mutation_factor = 0.1   # Likelihood of a random change (e.g., 0.05 - 0.2)

# --- End of User Adjustable Parameters ---

# Set workspace
if not arcpy.Exists(workspace):
    print(f"ERROR: Workspace not found: {workspace}")
    sys.exit()
arcpy.env.workspace = workspace
arcpy.env.overwriteOutput = True
print(f"Workspace set to: {workspace}")

# Construct the full path to the building points feature class
building_points_full_path = os.path.join(workspace, building_points_fc_name)
if not arcpy.Exists(building_points_full_path):
    print(f"ERROR: Building points feature class not found: {building_points_full_path}")
    sys.exit()
print(f"Using building points: {building_points_full_path}")

# Ensure the count_field exists and has a value of 1 for each building
existing_fields = [f.name for f in arcpy.ListFields(building_points_full_path)]
if count_field not in existing_fields:
    print(f"Adding '{count_field}' field...")
    arcpy.AddField_management(building_points_full_path, count_field, "SHORT")
    arcpy.CalculateField_management(building_points_full_path, count_field, "1", "PYTHON3")
    print(f"'{count_field}' field added and populated with 1.")
else:
    # Optional: You might want to ensure it's populated with 1 even if it exists
    print(f"Verifying '{count_field}' is populated with 1...")
    # This can be slow on large datasets, enable if necessary
    # with arcpy.da.UpdateCursor(building_points_full_path, [count_field]) as cursor:
    #     for row in cursor:
    #         if row[0] != 1:
    #             row[0] = 1
    #             cursor.updateRow(row)
    # print(f"'{count_field}' verified.")
    pass


# Process for each target size
for target_size in target_ea_sizes:
    print(f"\n{'='*60}")
    print(f"Creating Enumeration Areas with target {target_size} buildings per zone")
    print(f"Acceptable range for validation: {target_size - validation_tolerance_value} to {target_size + validation_tolerance_value}")
    print(f"Using Genetic Algorithm Parameters: Population={ga_population_size}, Generations={ga_number_generations}, Mutation={ga_mutation_factor}")
    print(f"{'='*60}")

    # Define output feature class name
    output_zones_fc_name = f"EA_BBZ_{target_size}_Pop{ga_population_size}_Gen{ga_number_generations}"
    output_zones_full_path = os.path.join(workspace, output_zones_fc_name)

    # Build the zone building criteria string: "field_name target_value weight"
    zone_criteria_string = f"{count_field} {target_size} 1"

    print(f"Zone criteria string: \"{zone_criteria_string}\"")
    print(f"Output EA feature class: {output_zones_full_path}")
    print("Running Build Balanced Zones...")
    print("(This may take several minutes for large datasets...)")

    try:
        arcpy.stats.BuildBalancedZones(
            in_features=building_points_full_path,
            output_features=output_zones_full_path,
            zone_creation_method="ATTRIBUTE_TARGET",
            number_of_zones=None,  # Not used for ATTRIBUTE_TARGET method
            zone_building_criteria_target=zone_criteria_string,
            # zone_building_criteria=None, # Parameter not needed if target string is set
            spatial_constraints="TRIMMED_DELAUNAY_TRIANGULATION", # Good for points
            # weights_matrix_file=None, # Default
            zone_characteristics="COMPACTNESS", # Aims for more regular shapes
            # attribute_to_consider=None, # Default
            # distance_to_consider=None, # Default
            # categorial_variable=None, # Default
            # proportion_method="", # Default
            population_size=ga_population_size,
            number_generations=ga_number_generations,
            mutation_factor=ga_mutation_factor
            # output_convergence_table=None # Default
        )
        print(f"Successfully created zones: {output_zones_full_path}")

        # --- Validation of Results ---
        print("\nValidating zone sizes...")
        zone_count_total = int(arcpy.GetCount_management(output_zones_full_path)[0])
        print(f"Total zones created: {zone_count_total}")

        # The Build Balanced Zones tool adds fields showing the sum of each criterion.
        # It should add a field like "SUM_<count_field>" (e.g., "SUM_BuildCount").
        output_fields = [f.name for f in arcpy.ListFields(output_zones_full_path)]
        
        sum_field_name = None
        # Try to find the sum field created by the tool
        # Common patterns: "SUM_fieldname", "Total_fieldname", "Actual_fieldname"
        # For "BuildCount", it's typically "SUM_BuildCount"
        potential_sum_field_name = f"SUM_{count_field}" 
        if potential_sum_field_name in output_fields:
            sum_field_name = potential_sum_field_name
        else:
            # Fallback: Look for any field starting with SUM_ or containing the count_field
            for field_name in output_fields:
                if field_name.upper().startswith("SUM_") and count_field.upper() in field_name.upper():
                    sum_field_name = field_name
                    break
            if not sum_field_name: # If still not found, try to find one with "Total"
                 for field_name in output_fields:
                    if field_name.upper().startswith("TOTAL_") and count_field.upper() in field_name.upper():
                        sum_field_name = field_name
                        break


        if sum_field_name:
            print(f"Using field '{sum_field_name}' for building counts per zone.")
            
            building_counts_in_zones = []
            zones_within_tolerance = 0
            zones_outside_tolerance = 0
            
            with arcpy.da.SearchCursor(output_zones_full_path, [sum_field_name, "ZONE_ID"]) as cursor:
                for row in cursor:
                    building_count_in_zone = row[0]
                    # zone_id = row[1] # ZONE_ID is useful if you need to identify specific zones
                    
                    if building_count_in_zone is not None: # Ensure count is not None
                        building_counts_in_zones.append(building_count_in_zone)
                        # Check if within the desired +/- validation_tolerance_value
                        if (target_size - validation_tolerance_value) <= building_count_in_zone <= (target_size + validation_tolerance_value):
                            zones_within_tolerance += 1
                        else:
                            zones_outside_tolerance += 1
                    else:
                        print(f"Warning: Zone (ID: {row[1]}) has a NULL value in '{sum_field_name}'.")


            if building_counts_in_zones:
                print(f"\n--- Validation Statistics for Target {target_size} (Acceptable Range: {target_size - validation_tolerance_value} to {target_size + validation_tolerance_value}) ---")
                print(f"  Zones meeting acceptable range: {zones_within_tolerance} / {zone_count_total} ({zones_within_tolerance/zone_count_total:.2%})")
                print(f"  Zones outside acceptable range: {zones_outside_tolerance} / {zone_count_total} ({zones_outside_tolerance/zone_count_total:.2%})")
                print(f"  Minimum buildings in a zone: {min(building_counts_in_zones)}")
                print(f"  Maximum buildings in a zone: {max(building_counts_in_zones)}")
                print(f"  Average buildings per zone: {sum(building_counts_in_zones)/len(building_counts_in_zones):.1f}")
            else:
                print("Could not retrieve building counts for validation.")
        else:
            print(f"ERROR: Could not find the sum field (e.g., 'SUM_{count_field}') in the output feature class: {output_zones_full_path}")
            print(f"Available fields: {', '.join(output_fields)}")
            print("Please inspect the output feature class manually to identify the correct field for building counts.")

    except arcpy.ExecuteError:
        print(f"\nArcPy ExecuteError in BuildBalancedZones for target {target_size}:")
        print(arcpy.GetMessages(2))
    except Exception as e:
        print(f"\nAn unexpected error occurred for target {target_size}: {str(e)}")
        import traceback
        print("\nFull error traceback:")
        traceback.print_exc()

print(f"\n{'='*60}")
print("Processing complete for all target sizes.")
print(f"{'='*60}")