var interval;
var imgIndex = 0;
var time = 1500;
var sliderImages = ["../assets/1.jpg", "../assets/2.jpg", "../assets/3.jpg"];
var head = document.getElementById("header");
var mybutton = document.getElementById("topBtn");
var dots = document.getElementsByClassName("slider-nav");

slideShow();


// Control Slide Moving
function moveSlide(index) {
    slider((imgIndex += index));
}

// slider function fuction
function slider(index) {
    new WOW().init();
    if (index < 0) {
        imgIndex = sliderImages.length - 1;
    }
    if (index > sliderImages.length - 1) {
        imgIndex = 0;
    }
    // hide pervous dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute("style", "background-color: none;");
    }
    head.setAttribute(
        "style",
        "background-image: url(" + sliderImages[imgIndex] + ");"
    );
    dots[imgIndex].setAttribute("style", "background-color: #007aff;");
}

// When Hover over the dot should stop interval
function slideShow() {
    interval = setInterval(function () {
        slider(imgIndex);
        imgIndex++;
    }, time);
}

// stop slideShow
function stopSlideshow() {
    clearInterval(interval);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}