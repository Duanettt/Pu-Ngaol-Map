
// javascript for buttons for map.
const startPoint = [106.936143, 12.578579];

const startingMarker = new mapboxgl.Marker(
    {
        color: '#FF0000'
    })
.setLngLat(startPoint)
.addTo(map);

const buttonAttractionMap = {
    'waterfalls': 'waterfalls',
    'resorts': 'resorts',
    'cities': 'cities',
    'villages': 'villages',
    'views': 'views',
    'sanctuaries': 'sanctuaries'
};

// Add event listeners for all buttons
for (const buttonId in buttonAttractionMap) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => attractionsClickable(buttonAttractionMap[buttonId]));
    
}


function attractionsClickable(type)
{
    // remove each marker.
    markers.forEach(marker => marker.remove());

    markers = []; 


    // access our properties typeof
    const attractionsChosen = attractions.features.filter(feature => feature.properties.typeof === type);
    attractionsChosen.forEach(attraction => 
        {
        const coordinates = attraction.geometry.coordinates;
        const properties = attraction.properties;

        console.log("Debugging test.")

        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(new mapboxgl.Popup()
            .setHTML(`<h3>${properties.name}</h3>
                <img src= "${properties.img || ''}" style="max-width: 100%; height: auto;"></img>
                <p>${properties.description || ''}</p>
                <button onclick="getDirections([${startPoint}], [${coordinates}])">Get Directions</button>`))
            .addTo(map);
        
        marker.getElement().addEventListener('click', () => {
            map.flyTo({
                center: coordinates, // Zoom to the marker's coordinates
                zoom: 14, // Optionally set zoom level
                essential: true // Mark this animation as essential
            });
        });
    // const attractionsChosen = attractions[type];
    // attractionsChosen.forEach(attraction => {
    //     console.log("clicked");
    //     const marker = new mapboxgl.Marker()
    //         .setLngLat(attraction.coordinates)
    //         .setPopup(new mapboxgl.Popup()
    //         .setHTML(`<h3>${attraction.name}</h3>
    //             <img src= "${attraction.img}" style="max-width: 100%; height: auto;"></img>
    //             <p>Description of the attraction/location goes here.</p>
    //             <button onclick="getDirections(${startPoint}, ${attraction.coordinates})">Get Directions</button>`))
    //         .addTo(map);
    //         marker.getElement().addEventListener('click', () => {
    //             map.flyTo({
    //                 center: attraction.coordinates, // Zoom to the marker's coordinates
    //                 zoom: 14, // Optionally set zoom level
    //                 essential: true // Mark this animation as essential
    //             })
    //         })
        markers.push(marker);
    })
}


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



const attractions = {
    "type": "FeatureCollection",
    "features": [
        // Adding waterfalls
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.41905000514737, 12.566371365724208]
            },
            "properties": {
                "typeof": "waterfalls",
                "name": "Bou Sra Waterfall",
                "description": "Bou Sra Waterfall",
                "img": "bou-sra-waterfall.png"

            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.15999187675561, 12.44196460536908]
            },
            "properties": {
                "typeof": "waterfalls",
                "name": "Sen Monorom Waterfall",
                "description": "Sen Monorom Waterfall"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.31283812578681, 12.409776294388223]
            },
            "properties": {
                "typeof": "waterfalls",
                "name": "Chey Throm Waterfall",
                "description": "Chey Throm Waterfall"
            }
        },
        // Adding views
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.19403278552062, 12.379376916935598]
            },
            "properties": {
                "typeof": "views",
                "name": "Galaxy Vilal Views",
                "description": "Galaxy Vilal Views"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.17460442137013, 12.479885863560298]
            },
            "properties": {
                "typeof": "views",
                "name": "Hill Top Viewpoint (Senmonorom)",
                "description": "Hill Top Viewpoint (Senmonorom)"
            }
        },
        // Adding cities
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.1886636739581, 12.45593654560085]
            },
            "properties": {
                "typeof": "cities",
                "name": "Senmonorom",
                "description": "Senmonorom"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [106.93056963200377, 12.58124792751373]
            },
            "properties": {
                "typeof": "cities",
                "name": "Memang",
                "description": "Memang"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [106.87650189946538, 12.615344821897907]
            },
            "properties": {
                "typeof": "cities",
                "name": "Preah Mas",
                "description": "Preah Mas"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.43273530831118, 12.538633147384203]
            },
            "properties": {
                "typeof": "cities",
                "name": "Pech Chreada",
                "description": "Pech Chreada"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.23874174079788, 12.484750625131454]
            },
            "properties": {
                "typeof": "cities",
                "name": "Rolung",
                "description": "Rolung"
            }
        },
        // Adding villages
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.16595428934033, 12.498974995141836]
            },
            "properties": {
                "typeof": "villages",
                "name": "Loa Ka",
                "description": "Loa Ka"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.16360733183421, 12.41260107160771]
            },
            "properties": {
                "typeof": "villages",
                "name": "Pou Long Village",
                "description": "Pou Long Village"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.16360733183421, 12.41260107160771]
            },
            "properties": {
                "typeof": "villages",
                "name": "Putang Village",
                "description": "Putang Village"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.16360733183421, 12.41260107160771]
            },
            "properties": {
                "typeof": "villages",
                "name": "New Life Putrom Chas Village",
                "description": "New Life Putrom Chas Village"
            }
        },
        // Adding resorts
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.1822133128262, 12.49646050112961]
            },
            "properties": {
                "typeof": "resorts",
                "name": "Sea Forest Resort",
                "description": "Sea Forest Resort"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.18370979918154, 12.420227563126161]
            },
            "properties": {
                "typeof": "resorts",
                "name": "Mount View Resort",
                "description": "Mount View Resort"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.1850210049003, 12.412398845415694]
            },
            "properties": {
                "typeof": "resorts",
                "name": "Oromis Resort",
                "description": "Oromis Resort"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.18479952979231, 12.446950112056044]
            },
            "properties": {
                "typeof": "resorts",
                "name": "Elephant Hill Resorts",
                "description": "Elephant Hill Resorts"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.2041040114953, 12.38073569949617]
            },
            "properties": {
                "typeof": "resorts",
                "name": "Rottanak Resort",
                "description": "Rottanak Resort"
            }
        },
        // Adding sanctuaries as point features
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [106.8371332977722, 12.33449926329547]
            },
            "properties": {
                "typeof": "sanctuaries",
                "name": "Keo Seima Wildlife Sanctuary",
                "description": "Keo Seima Wildlife Sanctuary"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [106.85165930679568, 12.71353609026339]
            },
            "properties": {
                "typeof": "sanctuaries",
                "name": "Phnom Prech Wildlife Sanctuary",
                "description": "Phnom Prech Wildlife Sanctuary"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.29025452052542, 13.002788058432174]
            },
            "properties": {
                "typeof": "sanctuaries",
                "name": "Srey Pok Wildlife Sanctuary",
                "description": "Srey Pok Wildlife Sanctuary"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [107.49515839805804, 12.47051819805354]
            },
            "properties": {
                "typeof": "sanctuaries",
                "name": "Phnom Nam Lyr Sanctuary",
                "description": "Phnom Nam Lyr Sanctuary"
            }
        }
    ]
};


