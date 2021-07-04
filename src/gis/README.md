# Geo Data

This folder is dedicated to store all gis data concerning the Shahnahme.

Every file should be a GeoJson file and is expected to have the `.geojson` file extension.

## Geometry Types

Maps on this repo use [Leaflet.js](https://leafletjs.com/) and support all the geometry types outlined in the [geoJSON spec](https://datatracker.ietf.org/doc/html/rfc7946) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection).

## Previewing the geoJSON file

To preview a geoJSON file, install the [VSCode Map Preview](https://github.com/jumpinjackie/vscode-map-preview) VS Code extension.

Once the extension is installed, open the command palette and type `Map Preview`.

## Troubleshooting the geoJSON file

If you're having trouble rendering geoJSON files, ensure you have a valid geoJSON file by running it through a [geoJSON linter](https://geojsonlint.com/). If your points aren't appearing where you'd expect (e.g., in the middle of the ocean), it's likely that the data is in a projection which is currently unsupported

## Additional Resources

[Mapping geoJSON files on GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github)
