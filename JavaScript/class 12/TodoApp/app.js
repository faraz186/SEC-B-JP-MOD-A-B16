var userInput = document.getElementById("todoInput");

function addTodo() {
  if (userInput.value === "") {
    alert("Empty Input");
  } else {
    var todoList = document.getElementById("list");
    var liElement = document.createElement("li");
    var liText = document.createTextNode(userInput.value);
    liElement.appendChild(liText);
    todoList.appendChild(liElement);

    // delete button

    var delBtnElement = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");

    delBtnElement.appendChild(delBtnText);

    delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");

    liElement.appendChild(delBtnElement);

    delBtnElement.style.backgroundColor = "cyan";
    delBtnElement.style.boxShadow = "0 0 20px cyan";

    // Edit button

    var editBtnElement = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");

    editBtnElement.appendChild(editBtnText);

    editBtnElement.setAttribute("onclick", "editSingleItem(this)");

    editBtnElement.style.backgroundColor = "yellow";
    editBtnElement.style.boxShadow = "0 0 20px yellow";

    liElement.appendChild(editBtnElement);

    userInput.value = "";
  }
  console.log(liElement);
}

function deleteAll() {
  var list = document.getElementById("list");

  list.innerHTML = "";
}

function deleteSingleItem(btn) {
  btn.parentNode.remove();
}

function editSingleItem(btn) {
  var updatedValue = prompt("enter updated Value");

  btn.parentNode.childNodes[0].data = updatedValue;
}


// CRUD Operation


// C = create
// R = read
// U = update
// D = delete