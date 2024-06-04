// javascript for buttons for map.


const waterfallButton = document.getElementById('waterfalls');
waterfallButton.addEventListener('click', () => printStatement('waterfalls'));

let markers = [];

function printStatement(type)
{
    const attractionsChosen = attractions[type];
    attractionsChosen.forEach(attraction => {
        console.log("clicked");
        const marker = new mapboxgl.Marker()
            .setLngLat(attraction.coordinates)
            // .setPopup(new mapboxgl.Popup().setHTML(`<h3>${attraction.name}</h3><button onclick="getDirections([${startPoint[0]}, ${startPoint[1]}], [${attraction.coordinates[0]}, ${attraction.coordinates[1]}])">Get Directions</button>`))
            .addTo(map);
        markers.push(marker);
    })
}

const attractions = {
    "waterfalls": [
        {
            "name": "Kulén Waterfalls",
            "coordinates": [104.1324, 13.5589]
        },
        // Add more waterfalls here
    ],
    "temples": [
        {
            "name": "Preah Ang Thom",
            "coordinates": [104.1308, 13.5653]
        },
        // Add more temples here
    ],
    "viewpoints": [
        {
            "name": "Phnom Kulen Mountain",
            "coordinates": [104.1306, 13.5614]
        },
        // Add more viewpoints here
    ]
};

