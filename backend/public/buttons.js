// javascript for buttons for map.

const waterfallButton = document.getElementById('waterfalls');
waterfallButton.addEventListener('click', showMarkers('waterfalls'))

button.addEventListener('click', showMarkers);


function showMarkers(event, type)
{
    const attractionsChosen = attractions[type];
    attractionsChosen.forEach(attraction => {
        const marker = new mapboxgl.Marker()
            .setLngLat(place.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${place.name}</h3><button onclick="getDirections([${startPoint[0]}, ${startPoint[1]}], [${place.coordinates[0]}, ${place.coordinates[1]}])">Get Directions</button>`))
            .addTo(map);
        markers.push(marker);
    })
}

function removeMarker()
{
    markers.forEach(marker => {
        marker.remove();
    })
}

