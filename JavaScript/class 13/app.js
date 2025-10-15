// objects;
  
var obj = {
  id: 1,
  name: "faraz",
  age: 25,
};

obj.city = "karachi";

delete obj.age;

console.log("email" in obj);


var calc = {
  getSum: function () {
    return a + b;
  },
  getSub: function (a, b) {
    return a - b;
  },
  getMutli: function () {
    return a * b;
  },
  getDiv: function () {
    return a / b;
  },
};

console.log(calc.getSub(10, 50));

console.log(window);


function submit() {
  var input = document.getElementById("inp");

  if (input.value.trim() === "") {
    alert("missing field");
  } else {
    console.log(input.value);
  }
}

function greetWorld() {
  try {
    var greeting = "Hello world!";
    alert(greeting);
  } catch (error) {
    console.warn(error);
  }
}
greetWorld();

var arr = [10,"abc"];

var arrayOfObject = [
  {
    id: 1,
    name: "faraz",
    city: "karachi",
  },
  {
    id: 2,
    name: "ali",
    city: "multan",
  },
  {
    id: 3,
    name: "hamza",
    city: "lahore",
  },
];

console.log(arrayOfObject);


