const lists = document.getElementById('map-navigation');
const hamburger = document.getElementById('hamburger');

function toggleClass() {
    lists.classList.toggle('open');
    hamburger.classList.toggle('close');
    xMark.classList.toggle('active');
}

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', toggleClass);

// Get the X mark icon
const xMark = document.querySelector('.fa-solid.fa-xmark');

// Add a click event listener to the X mark icon
xMark.addEventListener('click', toggleClass);
