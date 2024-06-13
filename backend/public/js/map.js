mapboxgl.accessToken = 'pk.eyJ1IjoiZHVhbmV0dCIsImEiOiJjbHgzdzFhdmIwYmcyMmpzY2c4OHBpYjJxIn0.2tv15ppX42Ja-_PNP9hNmA';

const southwest = [105, 10]; // Lower left corner coordinates
const northeast = [110, 15]; // Upper right corner coordinates

// Create a bounds object using the coordinates
const bounds = [[southwest[0], southwest[1]], [northeast[0], northeast[1]]];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [106.936143, 12.578579],
    maxBounds: bounds,
    zoom: 10
});

let markers = [];

// const attractions = 
// {
//     "waterfalls": 
//     [
//         {
//             "name": "Kulén Waterfalls",
//             "coordinates": [104.1324, 13.5589]
//         },
//         {
//             "name": "Bou Sra Waterfall",
//             "coordinates": [107.3017, 13.5453]
//         },
//         {
//             "name": "Sen Monorom Waterfall",
//             "coordinates": [107.2124, 12.4568]
//         }
//     ],

// }


// GeoJSON data for the wildlife sanctuaries


// Function to get directions from the starting point to the sanctuary

// Identify our coordinates.
// function createDraggableMarker(sanctuary) {
//     const marker = new mapboxgl.Marker({
//         draggable: true
//     })
//     .setLngLat(sanctuary.coordinates)
//     .setPopup(new mapboxgl.Popup().setHTML(`<h3>${sanctuary.name}</h3><p>${sanctuary.description}</p>`))
//     .addTo(map);

//     marker.on('dragend', function() {
//         const lngLat = marker.getLngLat();
//         sanctuary.coordinates = [lngLat.lng, lngLat.lat];
//         console.log(`New coordinates for ${sanctuary.name}: ${sanctuary.coordinates}`);
//         // Here you can save the new coordinates to a backend or local storage
//     });
// }
// // Add markers for each sanctuary
// for (const category in attractions) {
//     attractions[category].forEach(sanctuary => {
//         createDraggableMarker(sanctuary);
//     });
// }
// // Function to get directions from user's location to the sanctuary



// Create a bounds object using the coordinates

map.setMinZoom(9.5)
