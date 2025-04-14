import arcpy
import requests
import os

# Parent GeoJSON configuration
url_parent = "https://fulcrumapp.io/share/558b2694dc1af9cf5ddf/geojson"
local_parent_file = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\Done\Fulcrum\fulcrum_parent_data.geojson"
gdb = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\pwoje_census_data_collection_bracing_neighbors_geca.gdb"
output_fc_parent = os.path.join(gdb, "fulcrum_parent_data")

# Child (repeatable) GeoJSON configuration
url_child = "https://web.fulcrumapp.com/shares/ef934b79e6d121b0.geojson?child=enfmasyon_endividyel"
local_child_file = r"G:\ADF Haiti\GIS - Documents\_PwojeADF\pwoje_census_data_collection_bracing_neighbors_geca\Done\Fulcrum\local_child_file.geojson"
output_fc_child = os.path.join(gdb, "fulcrum_child_data")

# Spatial Reference (Fulcrum typically uses WGS 1984 -> EPSG 4326)
spatial_ref = arcpy.SpatialReference(4326)

# Delete the existing parent and child feature classes if they exist
for item in [output_fc_parent, output_fc_child]:
    if arcpy.Exists(item):
        arcpy.Delete_management(item)

# -------------------------------
# Download and Convert Parent Data
# -------------------------------
try:
    # Download parent GeoJSON
    response_parent = requests.get(url_parent)
    response_parent.raise_for_status()  # Raise exception if download fails
    with open(local_parent_file, "wb") as f:
        f.write(response_parent.content)
    
    # Convert parent GeoJSON to feature class; explicitly set geometry type to "POINT"
    arcpy.conversion.JSONToFeatures(local_parent_file, output_fc_parent, "POINT")
    
    # Define spatial reference for the parent feature class
    arcpy.DefineProjection_management(output_fc_parent, spatial_ref)
    
    print("Parent dataset created successfully at:", output_fc_parent)
except Exception as e:
    print("An error occurred processing the parent GeoJSON:")
    print(e)

# -------------------------------
# Download and Convert Child Data
# -------------------------------
try:
    # Download child GeoJSON
    response_child = requests.get(url_child)
    response_child.raise_for_status()
    with open(local_child_file, "wb") as f:
        f.write(response_child.content)
    
    # Convert child GeoJSON to feature class; explicitly set geometry type to "POINT"
    arcpy.conversion.JSONToFeatures(local_child_file, output_fc_child, "POINT")
    
    # Define spatial reference for the child feature class
    arcpy.DefineProjection_management(output_fc_child, spatial_ref)
    
    print("Child dataset created successfully at:", output_fc_child)
except Exception as e:
    print("An error occurred processing the child GeoJSON:")
    print(e)



