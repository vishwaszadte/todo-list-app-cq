var leftPane = document.getElementById("leftPane");
var rightPane = document.getElementById("rightPane");
var inputText = document.getElementById("inputText");
var todoList = document.getElementById("todoList");

function addTodo(event) {
    var lsData = localStorage.getItem("todos");
    var keyCode = event.code;
    var value = inputText.value;
    
    if(keyCode == "Enter" && value !== "") {
        event.preventDefault();
        console.log(value);
        if (lsData === null) {
            todos = [];
        } else {
            todos = JSON.parse(lsData);
        }
        todos.push(value);
        localStorage.setItem("todos", JSON.stringify(todos));
        inputText.value = '';
        showTodos();
    }
}

function showTodos() {
    todoList.innerHTML = "";
    var lsData = localStorage.getItem("todos");
    if(lsData == null){
        todos = [];
    }else{
        todos = JSON.parse(lsData); 
    }

    todos.forEach(function(element, index) {
        var todoContainer = document.createElement("div");
        var taskHeading = document.createElement("p");
        var buttons = document.createElement("div");
        var readBtn = document.createElement("button");
        var deleteBtn = document.createElement("button");
        taskHeading.innerText = element;

        todoContainer.appendChild(taskHeading);
        buttons.appendChild(readBtn);
        buttons.appendChild(deleteBtn);
        todoContainer.appendChild(buttons);

        todoContainer.setAttribute("class", "todoContainer"); 

        deleteBtn.setAttribute("class", "deleteBtn");
        readBtn.setAttribute("class", "readBtn");

        readBtn.innerHTML = "Read";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("onClick", `deleteTodo(${index})`);
        todoList.appendChild(todoContainer);
    });
}

function deleteTodo(index) {
    var lsData = localStorage.getItem("todos");
    todos = JSON.parse(lsData);
    todos.splice(index, 1); //delete or remove the li
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodos(); //call the showTasks function
    
}


function main() {
    // displayTodos();
    showTodos();
    inputText.addEventListener("keyup", addTodo);

}

main();