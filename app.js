let picture = [
    "dog1.jpg",
    "dog2.jpg",
    "dog3.jpg",
    "dog4.jpg",
    "dog5.jpg",

]

let currentIndex = 0; 
const slideImage = document.getElementById('slideImage');
let intervalId = null;

function changeSlide(direction){
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = picture.length - 1;
    } else if (currentIndex >= picture.length) {
        currentIndex = 0;
    }

    slideImage.src = picture[currentIndex];
}

function toggleInterval() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            changeSlide(1);
        }, 3000);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
}

document.querySelector('.start').addEventListener('click', toggleInterval)