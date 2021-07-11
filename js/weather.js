'user strict';



const info01 = document.querySelector(".weather");
const info02 = document.querySelector(".city p:first-child");
const info03 = document.querySelector(".city p:last-child");
const API_KEY = "89978848d38b3a5c3e52661450108058";

const weatherIcon = { 
    '01' : 'fas fa-sun', 
    '02' : 'fas fa-cloud-sun', 
    '03' : 'fas fa-cloud', 
    '04' : 'fas fa-cloud', 
    '09' : 'fas fa-cloud', 
    '10' : 'fas fa-cloud', 
    '11' : 'fas fa-poo-storm', 
    '13' : 'far fa-snowflake', 
    '50' : 'fas fa-smog' 
};


function onGeoOk(position){
    
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = data.name;
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon.substr(0,2);
        const temp = Math.floor(parseInt(data.main.temp));
        console.log(weatherIcon[icon]);
    
        info01.innerHTML =  '<i class="'+weatherIcon[icon]+'"/>';
        info02.innerText =  `${temp}º`;
        info03.innerText =  `${city}`;
    }); 
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);