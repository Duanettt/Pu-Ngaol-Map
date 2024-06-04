mapboxgl.accessToken = 'pk.eyJ1IjoiZHVhbmV0dCIsImEiOiJjbHd2OTFvc28wZXVyMm1zYTh2bWp0M3VsIn0.TrqHPVS1AcE3WTrdSaGAIA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [106.936143, 12.578579],
    zoom: 10
});

let markers = [];

// GeoJSON data for the wildlife sanctuaries
const sanctuaries = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [106.79065230856884,12.372716761595328], // Adjusted coordinates to increase size
                    [106.8707240259888,12.37126488424262],
                    [106.88746217181944,12.297334565860893],
                    [106.77753321588744,12.291083297397222]
                ]]
            },
            "properties": {
                "name": "Keo Seima Wildlife Sanctuary",
                "description": "Keo Seima Sanctuary"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [106.79771044582162,12.74915052702292],
                    [106.9114045646806,12.749326446055576],
                    [106.92403055720035,12.663695484682748],
                    [106.79175819101232,12.648853768154567]
                ]]
            },
            "properties": {
                "name": "Phnom Prech Wildlife Sanctuary",
                "description": "Phnom Prech wildlife sanctuary"
            }
        },
        // Add more sanctuaries here
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [107.17370760380788,13.062144467455056],
                    [107.41075744786934,13.072545886873002],
                    [107.42404553978821,12.89809113016156],
                    [107.17275843356492,12.879355128479432]
                ]]
            },
            "properties": {
                "name": "Srey Pok Wildlife Sanctuary",
                "description": "Srey Pok Wildlife Sanctuary"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [107.47441293234283,12.488777315629548],
                    [107.51495777430142,12.489814487702787],
                    [107.5195863997094,12.447385817470291],
                    [107.46829200564537,12.444125590600578]
                ]]
            },
            "properties": {
                "name": "Phnom Nam Lyr Sanctuary",
                "description": "Phnom Nam Lyr Sanctuary"
            }
        },
    ]
};




// Add sanctuaries to the map
map.on('load', function() {
    map.addSource('sanctuaries', {
        'type': 'geojson',
        'data': sanctuaries
    });

    map.addLayer({
        'id': 'sanctuaries-fill',
        'type': 'fill',
        'source': 'sanctuaries',
        'layout': {},
        'paint': {
            'fill-color': '#888888',
            'fill-opacity': 0.1
        }
    });

    map.addLayer({
        'id': 'sanctuaries-outline',
        'type': 'line',
        'source': 'sanctuaries',
        'layout': {},
        'paint': {
            'line-color': '#000000',
            'line-width': 0
        }
    });

    // Get the user's current location
    const startPoint = [106.936143, 12.578579];

    // Add a marker for the starting point
    new mapboxgl.Marker({ color: "#FF0000" })
        .setLngLat(startPoint)
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Starting Point</h1>"))
        .addTo(map);

    // Click event to display information and get directions
    map.on('click', 'sanctuaries-fill', function (e) {
        const coordinates = e.lngLat;
        const { name, description } = e.features[0].properties;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>${name}</h3><p>${description}</p><button onclick="getDirections([${startPoint[0]}, ${startPoint[1]}], [${coordinates.lng}, ${coordinates.lat}])">Get Directions</button>`)
            .addTo(map);
    });

    // Change the cursor to a pointer when over the sanctuaries
    map.on('mouseenter', 'sanctuaries-fill', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back when it leaves the sanctuaries
    map.on('mouseleave', 'sanctuaries-fill', function () {
        map.getCanvas().style.cursor = '';
    });
});

// Function to get directions from the starting point to the sanctuary
async function getDirections(start, end) {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const route = data.routes[0].geometry.coordinates;

        const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route
            }
        };

        // Add route to the map
        if (map.getSource('route')) {
            map.getSource('route').setData(geojson);
        } else {
            map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 1
                }
            });
        }
    } catch (error) {
        console.error('Error fetching directions:', error);
    }
}

// Identify our coordinates.
/* function createDraggableMarker(sanctuary) {
    const marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat(sanctuary.coordinates)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${sanctuary.name}</h3><p>${sanctuary.description}</p>`))
    .addTo(map);

    marker.on('dragend', function() {
        const lngLat = marker.getLngLat();
        sanctuary.coordinates = [lngLat.lng, lngLat.lat];
        console.log(`New coordinates for ${sanctuary.name}: ${sanctuary.coordinates}`);
        // Here you can save the new coordinates to a backend or local storage
    });
}
// Add markers for each sanctuary
sanctuaries.forEach(sanctuary => {
    createDraggableMarker(sanctuary);
}); */

// Function to get directions from user's location to the sanctuary