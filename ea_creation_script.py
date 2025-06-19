import arcpy
import os
# --- SCRIPT SETUP ---
# Set workspace
workspace = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
arcpy.env.workspace = workspace
arcpy.env.overwriteOutput = True

# Input building points layer
building_points = "okay_google_open_buildings_sud_haiti_reprojected"

# First, let's make sure we have the BuildCount field
# (or we could use any numeric field that equals 1 for each building)
existing_fields = [f.name for f in arcpy.ListFields(building_points)]
if "BuildCount" not in existing_fields:
    print("Adding BuildCount field...")
    arcpy.AddField_management(building_points, "BuildCount", "SHORT")
    arcpy.CalculateField_management(building_points, "BuildCount", "1", "PYTHON3")

# Process both target sizes
target_sizes = [375, 750]

for target_size in target_sizes:
    print(f"\n{'='*60}")
    print(f"Creating Enumeration Areas with {target_size} buildings per zone")
    print(f"{'='*60}")
    
    # Define output feature class
    output_zones = os.path.join(workspace, f"okay_buildings_bbz_{target_size}_v2")
    
    # Define the zone building criteria string. Format: "field_name target_value weight"
    # This tells the tool to aim for a SUM of 'BuildCount' equal to the target_size.
    zone_criteria = f"BuildCount {target_size} 1"
    
    print(f"Zone criteria: {zone_criteria}")
    print("Running Build Balanced Zones...")
    print("This may take several minutes for large datasets...")
    
    try:
        # Run Build Balanced Zones following your working example's syntax
        arcpy.stats.BuildBalancedZones(
            in_features=building_points,
            output_features=output_zones,
            zone_creation_method="ATTRIBUTE_TARGET",
            number_of_zones=None,  # Not needed for ATTRIBUTE_TARGET method
            zone_building_criteria_target=zone_criteria,
            zone_building_criteria=None,
            spatial_constraints="TRIMMED_DELAUNAY_TRIANGULATION",
            weights_matrix_file=None,
            zone_characteristics="COMPACTNESS",
            attribute_to_consider=None,
            distance_to_consider=None,
            categorial_variable=None,
            proportion_method="",
            population_size=150,
            number_generations=100,
            mutation_factor=0.1,
            output_convergence_table=None
        )
        
        print(f"Successfully created zones: {output_zones}")
        
        # Now let's validate the results
        print("\nValidating zone sizes...")
        
        # The output will have a ZONE_ID field and statistics about each zone
        # Let's check how many zones were created and their characteristics
        zone_count = int(arcpy.GetCount_management(output_zones)[0])
        print(f"Total zones created: {zone_count}")
        
        # The Build Balanced Zones tool adds fields showing the sum of each criteria
        # In our case, it should add a field showing the BuildCount sum per zone
        fields = [f.name for f in arcpy.ListFields(output_zones)]
        print(f"\nFields in output: {', '.join(fields)}")
        
        # Look for the sum field (it might be named something like "SUM_BuildCount")
        sum_field = None
        for field in fields:
            if "BuildCount" in field and "SUM" in field.upper():
                sum_field = field
                break
        
        if sum_field:
            print(f"\nChecking building counts using field: {sum_field}")
            
            # Analyze the distribution of buildings per zone
            with arcpy.da.SearchCursor(output_zones, [sum_field, "ZONE_ID"]) as cursor:
                counts = []
                within_tolerance = 0
                outside_tolerance = 0
                
                for row in cursor:
                    building_count = row[0]
                    zone_id = row[1]
                    counts.append(building_count)
                    
                    # Check if within our ±15 tolerance
                    if target_size - 15 <= building_count <= target_size + 15:
                        within_tolerance += 1
                    else:
                        outside_tolerance += 1
                
                if counts:
                    print(f"\nZone Statistics:")
                    print(f"  Zones within tolerance ({target_size}±15): {within_tolerance}")
                    print(f"  Zones outside tolerance: {outside_tolerance}")
                    print(f"  Minimum buildings per zone: {min(counts)}")
                    print(f"  Maximum buildings per zone: {max(counts)}")
                    print(f"  Average buildings per zone: {sum(counts)/len(counts):.1f}")
        
    except Exception as e:
        print(f"\nError occurred: {str(e)}")
        print("\nTroubleshooting suggestion:")
        print("If the error persists, try adjusting the spatial_constraints parameter.")
        print("For point data, you can also try 'CONTIGUITY_EDGES_CORNERS' with a ")
        print("preliminary step to create Thiessen polygons from your points.")

print(f"\n{'='*60}")
print("Process complete!")
print(f"{'='*60}")