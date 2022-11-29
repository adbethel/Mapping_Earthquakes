// We create the map object with options
let map = L.map("mapid").setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the linke
let line = [
    [33.9416, -118.4085],
    [37.6214, -122.3790]
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];
L.polyline(line,{
    color: "yellow"
    style: "satellite-streets-v11"
}).addTo(map);