var link = document.getElementById("anchor");
       
console.log(link.attributes[1]);

// array

var arr = [10, "faraz", undefined, false, 500];

console.log(arr[3]);

// objects

// key:value pair

var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
};

console.log(obj.age);

console.log(obj["email"]);

var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
};

obj.courses = ["html", "css", "js"];

obj.courses[3] = "php";

console.log(obj);

var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
  address: {
    city: ["karachi", "lahore"],
    zipCode: 1234,
    logitude: 12,
    latitude: 14,
  },
};

console.log(obj.address.city[1]);


var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
};

delete obj.email;

console.log(obj);

var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
};

var response = "city" in obj;

console.log(response);

var obj = {
  name: "faraz",
  email: "faraz@gmail.com",
  age: 25,
  getName: function () {
    console.log(obj.name);
  },
};

obj.getName();

// types of functions

// 1) function declaration

function abc() {
  console.log("hello");
}

abc();

// 2) Annoymous function

var func = function () {
  console.log("hello");
};

func();

// 3) Arrow function

var stdObj1 = {
  stdName: "hamza",
  stdAge: 22,
  stdEmail: "hamza@gmail.com",
  stdGender: "male",
};

var stdObj2 = {
  stdName: "ali",
  stdAge: 22,
  stdEmail: "ali@gmail.com",
  stdGender: "male",
};

// schema,model,blue print

// constructor function

function Student(name, age, email, gender) {
  (this.stdName = name),
    (this.stdAge = age),
    (this.stdEmail = email),
    (this.stdGender = gender);
}

Student.prototype.getGender = function () {
  console.log("female");
};

var obj = new Student("faraz", 25, "faraz@gmail.com", "male");

var obj2 = new Student("hamza", 20, "hamza@gmail.com", "male");

console.log(obj);

console.log(obj2);

// bookName
// bookAuthor
// bookPrice
// bookQuantity







