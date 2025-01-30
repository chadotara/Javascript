var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-warp"); // Corrected selector
var originalImg = document.getElementById("original");
var line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

var rect = imgBox.getBoundingClientRect();
var leftSpace = rect.left + window.pageXOffset; // Accurate page position

let isDragging = false;

// Start dragging
imgBox.addEventListener('mousedown', function(e) {
    isDragging = true;
    updateSlider(e); // Update position immediately on click
});

// Stop dragging
document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Move slider
document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    updateSlider(e);
});

function updateSlider(e) {
    var x = e.pageX - leftSpace;
    x = Math.max(0, Math.min(x, imgBox.offsetWidth)); // Clamp value
    var boxWidth = x + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}