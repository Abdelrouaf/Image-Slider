let imgs = Array.from(document.getElementsByClassName('imageItem'))

let image = document.getElementsByClassName("imageItem")

let close = document.getElementById("close")
let next = document.getElementById('next')
let prev = document.getElementById("prev")

let indexOfSlide = 0

function showImage(index) {
    imgs.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

showImage(indexOfSlide);

next.addEventListener("click", nextImage);

function nextImage() {
    indexOfSlide++;
    if(indexOfSlide === imgs.length) {
        indexOfSlide = 0
    }
    showImage(indexOfSlide)
}

prev.addEventListener("click", prevImage);

function prevImage() {
    if(indexOfSlide === 0) {
        indexOfSlide = (imgs.length) - 1 
    } else {
        indexOfSlide--;
    }
    showImage(indexOfSlide)
}

function automaticSlider() {
    indexOfSlide++;
    if(indexOfSlide === imgs.length) {
        indexOfSlide = 0
    }
    showImage(indexOfSlide)
}

let index

function continueSlider() {
    index = setInterval(automaticSlider, 3000)
}

function pauseSlider() {
    clearInterval(index)
}

imgs.forEach(img => {
    img.addEventListener("mouseleave", continueSlider);
    img.addEventListener("mouseenter", pauseSlider)
})

continueSlider()