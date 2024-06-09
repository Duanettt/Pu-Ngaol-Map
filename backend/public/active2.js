document.addEventListener('DOMContentLoaded', (event) => 
{
    const home = document.getElementById('navigation');
    home.addEventListener('click', homeClickable);
    
});

function homeClickable() {
    window.location.href = 'explore.html'; // Replace 'newpage.html' with the URL you want to navigate to
}
