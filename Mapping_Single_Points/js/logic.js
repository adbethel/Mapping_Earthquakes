//Add a marker to the map for Los Angeles, California,
let marker = L.marker([34.0552, -118.2437]).addTo(map);
//Create the map object with a center and zoom level
let map = L.map("mapid").setView([34.0052, -118.2437], 14);
// Add a marker to the map for Los Angeles, Californai,
L.circleMarker([34.0552, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'