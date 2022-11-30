let map = L.map("mapid").setView([30, 30], 2);

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
    //"type":"Feature",
    //"properties":{
        //"id":"3469",
        //"name":"San Francisco International Airport",
        //"city":"San Francisco",
        //"country":"United States",
        //"faa":"SFO",
        //"icao":"KSFO",
        //"alt":"14",
        //"tz-offset":"-8",
        //"dst":"A",
        //"tz":"America/Los_Angeles"},
        //"geometry":{
            //"type":"Point",
            //"coordinates":[-122.375,37.61899948120117]}}
//]};

let streets = L.tileLayer(
    attribution: 
    maxZoon: 18,
    accessToken: API_KEY
);
//we add out "streets" tile layer to the map
streets.addTo(map)

let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

//Grabbing our GeoJSON data
L.geoJSON(airpotyData).then(function(data){
        console.log(data);
        L.geoJson(data).addTo(map);
    }
});
