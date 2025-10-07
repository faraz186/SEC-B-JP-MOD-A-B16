var userInput = document.getElementById("todoInput");

function addTodo() {
  //   console.log(userInput.value);
  if (userInput.value === "") {
    alert("Empty Input");
  } else {
    var todoList = document.getElementById("list");
    var liElement = document.createElement("li");
    var liText = document.createTextNode(userInput.value);
    liElement.appendChild(liText);
    todoList.appendChild(liElement);
    userInput.value = "";
  }
  //   console.log(liElement);

//   CRUD Operation
}
