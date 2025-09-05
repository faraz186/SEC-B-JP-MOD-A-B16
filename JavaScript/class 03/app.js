document.write("<h1><u>Hello <br> JS</u></h1>");
            
document.write("<ul><li>Apple</li><li>Mango</li></ul>");

// is js a case sensitive

var Alert;

console.log(Alert);

// Alert("hello world");



// temperature converter

var celsiusTemp = prompt("Enter celsius temperature");

var FahrenheitTemp = prompt("Enter Fahrenheit temperature");

var convertF = (celsiusTemp * 9) / 5 + 32;

var convertC = ((FahrenheitTemp - 32) * 5) / 9;

console.log("Fahrenheit ", convertF);

console.log("Celsius ", convertC);


// multiplication Table


var userInput = Number(prompt("Enter a number"));

document.write(userInput, " x 1 = ", userInput * 1, "<br>",
    userInput, " x 2 = ", userInput * 2, "<br>",
    userInput, " x 3 = ", userInput * 3, "<br>",
    userInput, " x 4 = ", userInput * 4, "<br>",
    userInput, " x 5 = ", userInput * 5, "<br>",
    userInput, " x 6 = ", userInput * 6, "<br>",
    userInput, " x 7 = ", userInput * 7, "<br>",
    userInput, " x 8 = ", userInput * 8, "<br>",
    userInput, " x 9 = ", userInput * 9, "<br>",
    userInput, " x 10 = ", userInput * 10, "<br>"
);



// if statement

// () parenthesis

// {} block of statement / code

if (false) {
  alert();
}


var userAge = +prompt("Enter your age");

if(userAge >= 18) {
  console.log("you are eligible for CNIC");
} else {
  console.log("you are not eligible for CNIC");
}



var userCity = prompt("Enter your city");

if (userCity === "karachi") {
  console.log("allow");
} else {
  console.log("not allow");
}



var rollno = +prompt("Enter your rollno");

if (rollno !== 12345) {
  console.log("you are  allow");
} else {
  console.log("you are not allow");
}




var a = "10",
  b = 20;

console.log(typeof (a + b));



var userCity = prompt("Enter your city");

if (userCity === "karachi") {
  console.log("allow");
} else if (userCity === "lahore") {
  console.log("allow");
} else if (userCity === "multan") {
  console.log("allow");
} else {
  console.log("not allow");
}


var percentage = +prompt("Enter your percentage");

if (percentage >= 80) {
  console.log("A+ grade");
} else if (percentage >= 70) {
  console.log("A grade");
} else if (percentage >= 60) {
  console.log("B grade");
} else if (percentage >= 50) {
  console.log("C grade");
} else if (percentage >= 40) {
  console.log("D grade");
} else {
  console.log("sorry you are fail..");
}

// digital logic design core

// logical operators two

//    if( L.H.S    &&   R.H.S){

//    }

// and operator &&

// or operator  ||



var weight = +prompt("Enter your weight");

var time = +prompt("Enter your time");

if (weight > 100 || time < 6) {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}



var age = +prompt("Enter your age");

var resident = prompt("Enter your resident");

// if ((age > 10 || age < 55) && resident === "US") {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }

if ((age > 10 || age < 55) && resident === "US") {
  console.log("allow");
} else {
  console.log("not allow");
}


// program


var age = +prompt("Enter your age");

var resident = prompt("Enter your resident");

if (resident === "US") {
  if (age > 65 || age < 21) {
    console.log("allow");
  } else {
    console.log("not allow");
  }
} else {
  console.log("not allow");
}



var prog_lan = prompt("Enter programming language");

if (prog_lan === "js") {
  var city = prompt("Enter your city");
  if (city === "karachi") {
    var exp = +prompt("Enter your experience");
    if (exp > 2) {
      console.log("you are hire..");
    } else {
      console.log("experience lao..");
    }
  } else {
    console.log("karachi ajao foran..");
  }
} else {
  console.log("js seekh kar ao");
}












