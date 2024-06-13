document.addEventListener('DOMContentLoaded', (event) => 
{
    const image = document.getElementById('mapImg');
    image.addEventListener('click', imageClickable);
    
});

function imageClickable() {
    console.log("Debug");
    window.location.href = 'map.html'; // Replace 'newpage.html' with the URL you want to navigate to
}
