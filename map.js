mapboxgl.accessToken = 'pk.eyJ1IjoiZHVhbmV0dCIsImEiOiJjbHdxaHBpOXgwMjByMmlyMXZ5aDdubWRtIn0.Ys2ee53EZnwkWUtsaXgpSg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', // Use a Mapbox style
    center: [106.936143, 12.578579], // Center the map on Pu Ngaol
    zoom: 12 // Set an initial zoom level
});



// Define the bounds for Pu Ngaol
var bounds = [
    [106.915, 12.558], // Southwest coordinates
    [106.957, 12.595]  // Northeast coordinates
];


// Create a new marker.
const marker = new mapboxgl.Marker({
    color: "#FFFFFF",
    draggable: true
})
    .setLngLat([106.936143, 12.578579])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>Tester</h1>"))
    .addTo(map);
// Set marker options.

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


// Set the maximum bounds for the map
map.setMaxBounds(bounds);