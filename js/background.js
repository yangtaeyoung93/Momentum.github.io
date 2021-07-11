'user strict';

const body = document.body;

const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

function getbackgroundImg(){
    const imgsrc = Math.floor(Math.random() * 5);
    body.style.backgroundImage = `url(img/${imgsrc}.jpg)`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "100%";
}
getbackgroundImg();