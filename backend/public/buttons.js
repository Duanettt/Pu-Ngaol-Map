// javascript for buttons for map.

const buttonAttractionMap = {
    'waterfalls': 'waterfalls',
    'resorts': 'resorts',
    'cities': 'cities',
    'villages': 'villages'
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

    const attractionsChosen = attractions[type];
    attractionsChosen.forEach(attraction => {
        console.log("clicked");
        const marker = new mapboxgl.Marker()
            .setLngLat(attraction.coordinates)
            // .setPopup(new mapboxgl.Popup().setHTML(`<h3>${attraction.name}</h3><button onclick="getDirections([${startPoint[0]}, ${startPoint[1]}], [${attraction.coordinates[0]}, ${attraction.coordinates[1]}])">Get Directions</button>`))
            .addTo(map);
            marker.getElement().addEventListener('click', () => {
                map.flyTo({
                    center: attraction.coordinates, // Zoom to the marker's coordinates
                    zoom: 14, // Optionally set zoom level
                    essential: true // Mark this animation as essential
                })
            })
        markers.push(marker);
    })
}

const attractions = {
    "waterfalls": [
        { "name": "Bou Sra Waterfall", "coordinates": [107.41905000514737, 12.566371365724208] },
        { "name": "Sen Monorom Waterfall", "coordinates": [107.15999187675561, 12.44196460536908] },
        { "name": "Chey Throm Waterfall", "coordinates": [107.31283812578681, 12.409776294388223] }
    ],
    "views": [
        { "name": "Galaxy Vilal Views", "coordinates": [107.19403278552062, 12.379376916935598] },
        { "name": "Hill Top Viewpoint (Senmonorom)", "coordinates": [107.17460442137013, 12.479885863560298] }
    ],
    "cities": [
        { "name": "Senmonorom", "coordinates": [107.1886636739581, 12.45593654560085] },
        { "name": "Memang", "coordinates": [106.93056963200377, 12.58124792751373] },
        { "name": "Preah Mas", "coordinates": [106.87650189946538, 12.615344821897907] },
        { "name": "Pech Chreada", "coordinates": [107.43273530831118, 12.538633147384203] },
        { "name": "Rolung", "coordinates": [107.23874174079788, 12.484750625131454] }
    ],
    "villages": [
        { "name": "Loa Ka", "coordinates": [107.16595428934033, 12.498974995141836] },
        { "name": "Pou Long Village", "coordinates": [107.16360733183421, 12.41260107160771] },
        { "name": "Putang Village", "coordinates": [107.16360733183421, 12.41260107160771] },
        { "name": "New Life Putrom Chas Village", "coordinates": [107.16360733183421, 12.41260107160771] }
    ],
    "roads": [
        { "name": "Pou Chry Roads", "coordinates": [107.16360733183421, 12.41260107160771] }
    ],
    "resorts": [
        { "name": "Sea Forest Resort", "coordinates": [107.1822133128262, 12.49646050112961] },
        { "name": "Mount View Resort", "coordinates": [107.18370979918154, 12.420227563126161] },
        { "name": "Oromis Resort", "coordinates": [107.1850210049003, 12.412398845415694] },
        { "name": "Elephant Hill Resorts", "coordinates": [107.18479952979231, 12.446950112056044] },
        { "name": "Rottanak Resort", "coordinates": [107.2041040114953, 12.38073569949617] }
    ]
};
