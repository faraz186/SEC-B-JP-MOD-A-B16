//  password generator program
          
var randomValues = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

var randomValuesLen = randomValues.length;

var randomPassword = "";

for (var i = 1; i <= 10; i++) {
  const randomNumbers = Math.floor(Math.random() * randomValuesLen);

  randomPassword = randomPassword + randomValues[randomNumbers];

}

console.log(randomPassword);


// palindrome program


var word = prompt("Enter a word");

var len = word.length;

var reverse = "";

for (var i = len - 1; i >= 0; i--) {
  reverse = reverse + word[i];
}

if (reverse === word) {
  console.log("its a palindrome word");
} else {
  console.log("its not a palindrome word");
}



// chapter 31 (Date)

var date = new Date();

console.log(date.getTime());


var DayofWeek = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];

console.log(DayofWeek[date.getDay()]);


console.log(date.getHours(), "-", date.getMinutes(), "-", date.getSeconds());


console.log(date.toString().slice(0, 15));



// program to calculate month left in ramadan 2026


var RamadanMilliseconds = new Date("17 Feb 2026").getTime();

var currentMilliseconds = new Date().getTime();

var diff = RamadanMilliseconds - currentMilliseconds;

var month = diff / (1000 * 60 * 60 * 24 * 30);

console.log(month);


// console.log(Math.round(month));


console.log("ramadan milliseconds ", RamadanMilliseconds);

console.log("current milliseconds ", currentMilliseconds);












