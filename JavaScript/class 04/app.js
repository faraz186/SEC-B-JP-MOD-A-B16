var prog_lan = prompt("Enter programming language");
                         
if (prog_lan === "js") {
  var exp = +prompt("Enter your experience");
  if (exp >= 2) {
    console.log("you are hire");
  } else {
    console.log("your experience is not enough");
  }
} else {
  console.log("js is needed");
}


// var city1 = "karachi";
// var city2 = "lahore";
// var city3 = "quetta";
// var city4 = "multan";
// var city5 = "islamabad";

// array

// // an array is a technique that you store single variable

// // with multiple values


var cities = ["karachi","lahore","islamabad","multan","peshawar"]

console.log(cities);



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers);



// //              0        1         2           3
var cities = ["karachi", "lahore", "multan", "peshawar"];

console.log(cities[1], cities[3]);

var arr = ["faraz",400,true,undefined];

console.log(arr);



var arr = [];

arr[0] = "FARAZ";

arr[1] = false;

arr[10] = "farooq";

console.log(arr[5]);



var arr = [];

arr[0] = "hamza";

arr[1] = true;

arr[5] = "farooq";

console.log(arr);

// array methods

// pop()

var cities = ["lahore", "karachi", "multan"];

cities.pop();
cities.pop();

console.log(cities);

// push()

var cities = ["lahore", "karachi", "multan"];

cities.push("islamabad", "quetta");

console.log(cities);

// shift()

var cities = ["lahore", "karachi", "multan"];

cities.shift();

console.log(cities);

// unshift()

var cities = ["lahore", "karachi", "multan"];

cities.unshift("peshawar");

console.log(cities);



// splice()

var cities = ["lahore", "karachi", "multan", "quetta"];

cities.splice(1, 2, "peshawar", "islamabad");

// cities.splice(3, 0, "islamabad");

// console.log(cities);

cities.splice(1, 2);

cities.splice(1, 0, "islamabad", "peshawar");

console.log(cities);



// slice()

var cities = ["lahore", "karachi", "multan", "quetta"];

var copy = cities.slice(0);

console.log(copy);

























