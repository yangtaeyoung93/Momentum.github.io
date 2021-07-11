'user strict';

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const usesrName = document.getElementById("userName");
const todoDiv = document.querySelector(".todos");
const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function setUserName(name){
   usesrName.innerText= `Hello ${name} !!!!!`;
   loginForm.classList = HIDDEN;
   todoDiv.classList.toggle(HIDDEN);
   usesrName.classList.toggle(HIDDEN);
}

function handleLogin(e){
    e.preventDefault();
    const name = loginInput.value;
    localStorage.setItem(USERNAME_KEY,name);
    const username = localStorage.getItem(USERNAME_KEY);
    setUserName(username);
}

const name = localStorage.getItem(USERNAME_KEY);
if(name !== null){
    setUserName(name);
}


loginForm.addEventListener("submit",handleLogin);