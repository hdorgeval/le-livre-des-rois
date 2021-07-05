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

## Linking a geoJSON file to a Tag or to an Episode

To automatically add a Map to a Tag page or to an Episode page, add the `frontmatter` metadata `geo-data: <filename>` within the `frontmatter` section of the corresponding Markdown file.

For example:

`src/tags/amol.md`:

```txt
---
date: ''
thumbnail: 'https://source.unsplash.com/K2s_YE031CA'
image: '7BhTfoKsheQ.jpeg'
source: https://github.com/farikarimi/shahnameh-gis
tags: [Amol]
order: '01'
geo-data: 'amol.geojson'
---

# Amol

Cité du Mazenderan
```

## Additional Resources

- [Mapping geoJSON files on GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github)

- [Leaflet Providers Preview](https://leaflet-extras.github.io/leaflet-providers/preview/)

- [farikarimi / shahnameh-gis-data](https://github.com/farikarimi/shahnameh-gis-data)
