"use strict";
class URL_Name {
    constructor(title = URL_Name.getDefaultTitle(), url = URL_Name.getDefaultUrl()) {
        this.title = title,
        this.url = url
    }
    static getDefaultTitle(){
        return '404'
    }
    static getDefaultUrl(){
        return 'https://thirdsun.com/images/404.jpg'
    }
}

const ARR_IMAGES_URL = [
    {
        title: "calm",
        url: "assets/slide1.jpg",
    },
    {
        title: "forest",
        url: "assets/slide2.jpg",
    },
    {
        title: "adventure",
        url: "assets/slide3.jpg",
    },
    {
        title: "alone",
        url: "assets/slide4.jpg",
    },
];

let nothing = new URL_Name('')
let pug = new URL_Name('pug', 'https://i.ytimg.com/vi/19jyEOUwdjE/maxresdefault.jpg')
addImg(nothing)
addImg(pug)


let currentSlide = 0;
const totalSlides = ARR_IMAGES_URL.length;

function changeSlide(forward = true) {
    if (forward) {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    return ARR_IMAGES_URL[currentSlide].url;
}

function createImg(url) {
    const container = document.querySelector(".slider__img-container");
    container.innerHTML = "";

    const newImg = document.createElement("img");
    newImg.src = url;
    newImg.classList.add("fade-in");
    container.appendChild(newImg);
}

const buttons = document.querySelectorAll("#slider_btn");

buttons[0].addEventListener("click", () => createImg(changeSlide(false)));
buttons[1].addEventListener("click", () => createImg(changeSlide(true)));

const style = document.createElement("style");
style.innerHTML = `
    .fade-in {
        opacity: 0.6;
        animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

createImg(ARR_IMAGES_URL[currentSlide].url);


function addImg(el){
    ARR_IMAGES_URL.push(el)
}


















































































































































































































//
function fetchImage() {

    function getRandomImage() {
        return fetch("https://api.nekosapi.com/v3/images/random", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const imageUrl = data.items[0]["image_url"];
                return imageUrl;
            });
    }

    function createImg(url) {
        const container = document.querySelector(".slider__img-container");
        container.innerHTML = "";
    
        const newImg = document.createElement("img");
        newImg.src = url;
        newImg.classList.add("fade-in");
        newImg.classList.add("blur");
        container.appendChild(newImg);
    }

    // Вызов функции с обработкой ошибок
    getRandomImage()
        .then((imageUrl) => {
            createImg(imageUrl);
        })
        .catch((error) => console.error("Error fetching random image:", error));
}

const secret =  document.querySelector('#random-btn')
secret.addEventListener('click', fetchImage)