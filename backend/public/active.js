document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('images');
    image.addEventListener('click', imageClickable);
});

function imageClickable() {
    window.location.href = 'newpage.html'; // Replace 'newpage.html' with the URL you want to navigate to
}