import arcpy
import os
import time

# --- SCRIPT SETUP ---
# Purpose: This script automates finding the optimal parameters for the Build Balanced
#          Zones tool. It iterates through various configurations, analyzes each result
#          based on both zone size spread and algorithmic fitness score, and reports
#          the best combination found.
# Version: 4.0 - Uses the exact, user-confirmed field names from the convergence table.
# --------------------------------------------------------------------------------

print(
    "Starting Build Balanced Zones Optimization Script (v4 - with Confirmed Field Names)..."
)

# --- USER-CONFIGURABLE PARAMETERS ---
workspace = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
building_points = "okay_google_open_buildings_sud_haiti_reprojected"
target_size_to_optimize = 375
weight_options = [50, 100, 150]
pop_size_options = [150, 200]
gen_options = [150, 200]
zone_characteristic_options = ["EQUAL_NUMBER_OF_FEATURES", "NONE"]

# --- SCRIPT INITIALIZATION ---
arcpy.env.workspace = workspace
arcpy.env.overwriteOutput = True

if not arcpy.Exists(building_points):
    print(f"ERROR: Input data not found. Exiting.")
    exit()

if arcpy.CheckExtension("Spatial") != "Available":
    print("ERROR: Spatial Statistics extension is not available. Exiting.")
    exit()
arcpy.CheckOutExtension("Spatial")
print("Spatial Statistics extension is available.")

print("Verifying 'BuildCount' field...")
if "BuildCount" not in [f.name for f in arcpy.ListFields(building_points)]:
    arcpy.AddField_management(building_points, "BuildCount", "SHORT")
    arcpy.CalculateField_management(building_points, "BuildCount", "1", "PYTHON3")

# --- OPTIMIZATION LOOP ---
run_history = []
best_run = {
    "spread": float("inf"),
    "fitness_score": float("inf"),
    "params": None,
    "output_name": None,
}
iteration_count = 1
total_iterations = (
    len(weight_options)
    * len(pop_size_options)
    * len(gen_options)
    * len(zone_characteristic_options)
)

print(f"\nStarting optimization for target size: {target_size_to_optimize}")
print(f"Total configurations to test: {total_iterations}")

start_time = time.time()

for weight in weight_options:
    for pop_size in pop_size_options:
        for num_gens in gen_options:
            for zone_char in zone_characteristic_options:
                print(f"\n--- [Iteration {iteration_count}/{total_iterations}] ---")
                current_params = {
                    "weight": weight,
                    "pop_size": pop_size,
                    "num_gens": num_gens,
                    "zone_char": zone_char,
                }
                print(f"Testing with: {current_params}")

                temp_cluster_output = f"temp_iter_{iteration_count}_clusters"
                temp_summary_table = f"temp_iter_{iteration_count}_summary"
                temp_convergence_table = f"temp_iter_{iteration_count}_convergence"

                try:
                    # 1. RUN THE TOOL
                    zone_criteria = f"BuildCount {target_size_to_optimize} {weight}"
                    arcpy.stats.BuildBalancedZones(
                        in_features=building_points,
                        output_features=temp_cluster_output,
                        zone_creation_method="ATTRIBUTE_TARGET",
                        zone_building_criteria_target=zone_criteria,
                        zone_characteristics=zone_char,
                        population_size=pop_size,
                        number_generations=num_gens,
                        output_convergence_table=temp_convergence_table,
                    )

                    # 2. ANALYZE SPREAD
                    arcpy.analysis.Statistics(
                        in_table=temp_cluster_output,
                        out_table=temp_summary_table,
                        statistics_fields=[["OBJECTID", "COUNT"]],
                        case_field="ZONE_ID",
                    )
                    counts = [
                        row[0]
                        for row in arcpy.da.SearchCursor(
                            temp_summary_table, ["COUNT_OBJECTID"]
                        )
                    ]
                    if not counts:
                        print("  -> Result: No zones created. Skipping.")
                        continue
                    spread = max(counts) - min(counts)

                    # 3. ANALYZE FITNESS SCORE (using the now-confirmed field name)
                    final_fitness_score = float("nan")
                    if arcpy.Exists(temp_convergence_table):
                        # The definitive field name for Total Fitness, confirmed from your output.
                        fitness_field_name = "TOTAL_FIT"
                        with arcpy.da.SearchCursor(
                            temp_convergence_table,
                            [fitness_field_name],
                            sql_clause=(None, "ORDER BY GENERATION DESC"),
                        ) as cursor:
                            last_gen_row = next(cursor, None)
                            if last_gen_row:
                                final_fitness_score = last_gen_row[0]

                    print(
                        f"  -> Result: Spread = {spread}, Fitness Score = {final_fitness_score:.4f}"
                    )

                    # 4. TRACK THE BEST RESULT
                    is_new_best = False
                    if spread < best_run["spread"]:
                        is_new_best = True
                        print("  >>> NEW BEST RESULT FOUND! (Improved Spread) <<<")
                    elif (
                        spread == best_run["spread"]
                        and final_fitness_score < best_run["fitness_score"]
                    ):
                        is_new_best = True
                        print(
                            "  >>> NEW BEST RESULT FOUND! (Same Spread, Better Fitness Score) <<<"
                        )

                    if is_new_best:
                        best_run.update(
                            {
                                "spread": spread,
                                "fitness_score": final_fitness_score,
                                "params": current_params,
                                "output_name": f"OPTIMIZED_CLUSTERS_{target_size_to_optimize}",
                            }
                        )
                        print(f"  -> Saving this result as '{best_run['output_name']}'")
                        if arcpy.Exists(best_run["output_name"]):
                            arcpy.management.Delete(best_run["output_name"])
                        arcpy.management.CopyFeatures(
                            temp_cluster_output, best_run["output_name"]
                        )

                except arcpy.ExecuteError as e:
                    print(
                        f"  -> ERROR: BuildBalancedZones failed for this configuration."
                    )
                    print(arcpy.GetMessages(2))
                except Exception as e:
                    print(f"  -> An unexpected script error occurred: {e}")

                finally:
                    for item in [
                        temp_cluster_output,
                        temp_summary_table,
                        temp_convergence_table,
                    ]:
                        if arcpy.Exists(item):
                            arcpy.management.Delete(item)

                iteration_count += 1

# --- FINAL REPORT ---
end_time = time.time()
total_time_mins = (end_time - start_time) / 60

print(f"\n\n{'='*60}")
print("OPTIMIZATION PROCESS COMPLETE")
print(f"{'='*60}")
print(f"Total time elapsed: {total_time_mins:.2f} minutes")

if best_run["params"]:
    print("\n--- BEST OVERALL RESULT ---")
    print(f"Lowest Spread (Max-Min): {best_run['spread']}")
    print(f"Best Fitness Score at that Spread: {best_run['fitness_score']:.4f}")
    print("\nOptimal Parameters:")
    for key, value in best_run["params"].items():
        print(f"  - {key}: {value}")
    print(f"\nThe best point cluster output has been saved as:")
    print(f"  -> {best_run['output_name']}")
else:
    print(
        "\nNo successful runs were completed. Please check tool parameters and error messages."
    )
