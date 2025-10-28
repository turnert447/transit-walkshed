# Geog 328 Final Project: Seattle Transit Walkshed Analysis

## Abstract
This project will create an interactive web map visualizing walkshed from rapid transit stops in Seattle. Using turf.js for spatial analysis and the Isochrone API, the website will determine and display the population living within walking distance of rapid transit infrastructure. 

The map will integrate GeoJSON data for RapidRide bus lines and Link Light Rail stops with US Census demographic data to perform spatial analysis. The core analysis will calculate the population within a standard 15-minute walkshed (approximately 0.75 miles) from each transit stop, displaying transit accessibility across Seattle. Interactive features will include hover interactions displaying stop-specific statistics and population density visualization within walkshed boundaries. 


### Data Sources
- [Sound Transit Open Transit Data](https://www.soundtransit.org/help-contacts/business-information/open-transit-data-otd/otd-downloads)
- [King County Data](https://gis-kingcounty.opendata.arcgis.com/)
- [Seattle Open Data](https://data.seattle.gov/)
- [US Census Bureau Population Data](https://www.census.gov/geographies/mapping-files.html)

### Data Processing
- Remove duplicate stops
- Standardize stop names
- Pull stops as GeoJSON
- Isolate transit routes as separate GeoJSON
- Convert all coordinates to WGS84/EPSG:4236
- Confine census data to Seattle city limits

### Spatial Analysis
- Perform sjoin operation to join census data to neighborhood basemap
- Perform buffer to define walkshed area around transit layer
- Perform intersection to pull population within walkshed layer

### Map Elements
1. Base Map(Mapbox)
2. Census blocks(Choropleth fill layer)
3. Isochrones (semi-transparent fill layer)
4. Transit Stops (circle layer)
5. Transit Lines (line layer)
6. Labels

### Documentation
- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [Turf.js Documentation](https://turfjs.org/)
- [Isochrone API Guide](https://docs.mapbox.com/api/navigation/isochrone/)


