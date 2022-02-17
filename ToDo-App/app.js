var todos = []

function init()
{
  var leftPaneDiv = document.createElement("div");
  var rightPaneDiv = document.createElement("div");


  leftPaneDiv.setAttribute("id","leftDiv");
  
  var heading = document.createElement("h1");
  heading.innerHTML = "Task List";
  leftPaneDiv.appendChild(heading);

  var subHeading = document.createElement("h4");
  subHeading.innerHTML = "Add tasks by typing to the right and pressing enter, You may then view the pending below";
  leftPaneDiv.appendChild(subHeading);

  rightPaneDiv.setAttribute("id","rightDiv");

  document.body.appendChild(leftPaneDiv);
  document.body.appendChild(rightPaneDiv);

  var inputTodo = document.createElement("textarea");

  inputTodo.setAttribute("placeholder","I need to...")
  inputTodo.setAttribute("class","textbox")
  inputTodo.setAttribute("id","todoBox")
  rightPaneDiv.appendChild(inputTodo);


  inputTodo.addEventListener("keydown", eventHandler );
}

function eventHandler( event )
{


  var keyCode = event.code;
  var todoBox = document.getElementById("todoBox");

  var value = todoBox.value;

  if(keyCode === "Enter" && value !== "")
  {
    event.preventDefault();
    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var readButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(deleteButton);

    container.setAttribute("class","todoContainer")

    readButton.innerHTML = "[]";
    deleteButton.innerHTML = "x"

    taskHeading.innerHTML = value;

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos) )

    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);

    todoBox.value = "";

  }
}

init();

let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null)
{
  todos = JSON.parse(storedTodos);
}

todos.forEach(function(value)
{

    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var readButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(deleteButton);

    container.setAttribute("class","todoContainer")

    readButton.innerHTML = "[]";
    
    deleteButton.innerHTML = "x";

    taskHeading.innerHTML = value;

})

function deleteItem(x) {
    todos.splice(
      todos.findIndex((item) => item.id == x),
      1
    );
    eventHandler();
  }