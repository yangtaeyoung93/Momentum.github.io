'user strict';

const todo_form = document.getElementById("todo_form");
const todoInput = document.querySelector("#todo_form input");
const todos = document.querySelector(".todoList");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY ,JSON.stringify(toDos));
}
function deleteTodo(e){
    const li = e.target.parentElement;
    toDos = toDos.filter(x => x.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
    li.remove();
}
function writeToDoList(todoObj){
    const todo = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = todoObj.text;
    todo.id = todoObj.id;
    const btn = document.createElement("a");
    btn.id = "ttt";
    btn.innerText = "❌";
    btn.addEventListener("click",deleteTodo);
    todo.appendChild(text);
    todo.appendChild(btn);
    todos.appendChild(todo);
    
}

function submitTodo(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    const todoObj = {
        id : Date.now(),
        text : newTodo
    }
    toDos.push(todoObj);
    todoInput.value = "";
    writeToDoList(todoObj);
    saveToDos();
}

const saveTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos!==null){
    const parseTodos = JSON.parse(saveTodos);
    toDos = parseTodos;
    parseTodos.forEach(writeToDoList);
}



todo_form.addEventListener("submit",submitTodo);