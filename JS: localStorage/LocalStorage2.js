const addTodoEnter = document.getElementById("newList"); 
const newList = document.getElementById("newList"); 
const todoListContainer = document.getElementById("todoListContainer"); 
const list = document.getElementById("list"); 
 
const todoList = []; 
 
const showTodoList = () => { 
 if(todoList.length){ 
 todoListContainer.innerHTML = ""; 
 for (const todoItemIndex in todoList) { 
 const newTodoItem = document.createElement("li");
 const removeButton = document.createElement("button");  
 newTodoItem.innerHTML = todoList[todoItemIndex]; 
 removeButton.innerHTML = "x"; 
 removeButton.addEventListener("click", () => { 
 removeTodo(todoItemIndex); 
 showTodoList(); 
 saveToLocalStorage(); 
 }); 
 newTodoItem.append(removeButton); 
 todoListContainer.append(newTodoItem); 
 } 
 list.style.display = "none"; 
 todoListContainer.style.display = "block"; 
 } else { 
 list.style.display = "block"; 
 todoListContainer.style.display = "none"; 
 } 
} 
 
const addTodo = (value) => { 
 todoList.push(value); 
} 
 
const removeTodo = (index) => { 
 todoList.splice(index, 1); 
} 
 
const saveToLocalStorage = () => { 
 localStorage.setItem("todoList", JSON.stringify(todoList)); 
} 
 
const getFromLocalStorage = () => { 
 todoList.splice(0, todoList.length, ...JSON.parse(localStorage.getItem("todoList"))); 
} 
 
document.addEventListener("DOMContentLoaded", () => { 
 getFromLocalStorage(); 
 showTodoList(); 
}); 
 
addTodoEnter.addEventListener("keyup", ({key}) => { 
 if(key === "Enter") 
 addTodo(newList.value); 
 showTodoList(); 
 saveToLocalStorage(); 
});