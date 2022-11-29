let map = L.map("mapid").setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//Grabbing our GeoJSON data
L.geoJSON(sanFranAirport{
    //we turn each feature into a marker on the map
    onEachFeature:function(feature, layer){
        console.log(feature);
        layer.bindPopup();
    }
}).addTo(map);
