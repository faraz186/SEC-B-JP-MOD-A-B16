function faraz() {
  console.log("Hello world");           
}

faraz(); // function call


function sum() { 
  var num1 = 10;
  var num2 = 20;

  console.log(num1 + num2);
}

sum();
 

function abc() {
  console.log("function call...");
}

for (var i = 1; i <= 5; i++) {
  abc();
}

function sum(a, b, c) {
  // parameter

  console.log(a + b + c);
}

sum(10, 40); // argument



function greet(message) {
  alert(message);
}

greet("Good evening");


function bio(name) {
  var exp = "hello my name is ",
    name;
  return exp;
}

var getVal = bio("faraz");

console.log(getVal);



var arr = [1, 2, 3, 4, 5];

var copy = arr.slice(1, 4);

console.log(copy);



function sum(num1, num2) {
  var add = num1 + num2;
  return add;
}

var getVAL = sum(2, 10);

console.log(getVAL);



var name; // global variable

function greet() {
  name = "faraz";
  console.log(name);
}

greet();



function greet() {
  var Fullname = "faraz";
  return Fullname;
}

var getVal = greet();

console.log(getVal);



// for loop

for (var i = 1; i <= 2; i++) {
  console.log(i);
}

// while loop

var i = 2;

while (i <= 1) {
  console.log(i);
  i++;
}

// do-while loop

var i = 2;

do {
  console.log(i);
  i++;
} while (i < 1);



function multiplication_table(table, range) {

    // for loop

    for (var i = 1; i <= range; i++) {
      document.write(table, "x", i, "=", tab
le * i, "<br>");
    }

//     // do-while loop

  var i = 1;

  do {
    document.write(table, "x", i, "=", table * i, "<br>");
    i++;
  } while (i <= range);

//     // while loop

    var i = 1;

    while (i <= range) {
      document.write(table, "x", i, "=", table * i, "<br>");
      i++;
    }
}

multiplication_table(
    +prompt("Enter a number"),
     +prompt("Enter a range"));



// if statement


var city = prompt("Enter your city");

if (city === "karachi") {
  console.log("allow");
} else {
  console.log(" not allow");
}



// switch statement

var city = prompt("Enter your city");

switch (city) {
  case "karachi":
    alert("allow");
    break;
  case "lahore":
    alert("allow");
    break;

  case "multan":
    alert("allow");
    break;

  default:
    alert("not allow");
}


/*
var a  = "faraz"

console.log(a);

*/

// function(){
// }


function greet() {
  Swal.fire({
    title: "Good job!",
    text: "Login successfully!",
    icon: "success",
  });
}













