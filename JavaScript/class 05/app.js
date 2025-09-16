var userInput = prompt("Enter a month");
      
var inputLen = userInput.length;

var shortform;

if (inputLen >= 3) {
  shortform = userInput.slice(0, 3);
}

console.log(shortform);

var str = prompt("Enter a string");

var len = str.length;

for (var i = 0; i < len; i++) {
  if (str.slice(i, i + 1) === "!" && str.slice(i, i + 2) === "  ") {
    alert("! and double space found..");
  }
}

var str = "hello my name is Muhammad faraz";

var findIndex = str.indexOf("faraz");

var replaceText = "farooq";

var remainText = str.slice(0, findIndex);

console.log(remainText + replaceText);

var str =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

var findIndex = str.indexOf("World War II");

var firstText = str.slice(0, findIndex);

var replaceText = "The Second World War";

var remainText = str.slice(61);

console.log(firstText + replaceText + remainText);

var str =
  "The history of science spans the majority of the historical record, with the earliest identifiable predecessors to modern science dating to the Bronze Age in Egypt and Mesopotamia (c.30001200 BCE).";

var findIndex = str.indexOf("science");

var firstText = str.slice(0, findIndex);

var remainText = str.slice(findIndex + 7);

var replaceText = "computer";

console.log(firstText + replaceText + remainText);

// lastIndexOf()

var str = "to be or not to be";

console.log(str.lastIndexOf("be"));

var str =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II";

console.log(str.replace("World War II", "The Second world war"));

console.log(str.replaceAll("World War II", "The Second world war"));

var str = "hurrah we won the match";

console.log(str.slice(0, 3));

console.log(str.charAt(7));

var number = 20.8;

console.log("Floor", Math.floor(number));

console.log("Ceil", Math.ceil(number));

console.log("Round", Math.round(number));

// program head tail

var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.round(Math.random());

if (toss === 0) {
  console.log(headUser, "win the game");
} else {
  console.log(tailUser, "win the game");
}

// dice program

var random = Math.ceil(Math.random() * 6);

console.log(random);

// create program of generating random password

var number = "100";

var convert = parseFloat(number);

console.log(typeof convert);


var num = 50;

console.log(typeof num.toString());

var random = Math.random();

console.log(parseFloat(random.toFixed(5)));






