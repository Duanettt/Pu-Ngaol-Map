var header = document.querySelector("header");
window.addEventListener("scroll", function(){
    var topDiv = document.querySelector("#testing");
    header.classList.toggle("sticky", window.scrollY > 0);
    topDiv.classList.toggle("disappear", window.scrollY > 0);
});
var target = document.querySelector(".target");
var dropdown = document.querySelector(".dropdown");
var targetIcon = document.querySelector("#navIcon");

function showDropdown() {
    dropdown.classList.add("appear");
    targetIcon.classList.remove("fa-angle-down");
    targetIcon.classList.add("fa-angle-up");
    target.classList.add("targeted");
}

function hideDropdown() {
    dropdown.classList.remove("appear");
    targetIcon.classList.remove("fa-angle-up");
    targetIcon.classList.add("fa-angle-down");
    target.classList.remove("targeted");
}


target.addEventListener("mouseenter", showDropdown);
header.addEventListener("mouseleave", function(event) {
    if (!dropdown.contains(event.relatedTarget)) {
        hideDropdown();
    }
});