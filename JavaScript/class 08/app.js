function greet() {
  Swal.fire({       
    text: "welcome to our website!! Login here...!",
    icon: "success",
  });
}


function changingStyle(element) {
  element.style.backgroundColor = "lightblue";
  element.style.outline = "none";
  element.style.border = "none";
  element.style.padding = "5px";
  element.style.borderRadius = "5px";
  element.style.margin = "5px";
}


var inputElement = document.getElementById("email");

inputElement.style.color = "red";

var passwordElement = document.getElementById("password");

passwordElement.style.color = "blue";

function submit() {
  if (inputElement.value === "" || passwordElement.value === "") {
    Swal.fire({
      text: "Required fields are missings!",
      icon: "error",
    });
  } else {
    var credentials = inputElement.value + " " + passwordElement.value;
    Swal.fire({
      text: credentials,
      icon: "success",
    });
  }
}

function set() {
  var input = document.getElementById("input");

  input.value = "faraz";
}

var h1Element = document.getElementById("heading");
var pElement = document.getElementById("para");
var anchorElement = document.getElementById("link");


console.log(h1Element.innerHTML);
console.log(pElement.innerHTML);
console.log(anchorElement.innerHTML);

console.log(h1Element.innerText);
console.log(pElement.innerText);
console.log(anchorElement.innerText);







