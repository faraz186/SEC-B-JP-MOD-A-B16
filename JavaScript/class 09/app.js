function submit() {
  var input = document.getElementById("inp");     

  console.log(input.value);
}

var h2Element = document.getElementById("heading");
var pElement = document.getElementById("para");
var aElement = document.getElementById("link");

console.log(h2Element.innerHTML);
console.log(pElement.innerHTML);
console.log(aElement.innerHTML);

// diff between innerHTML / innerText

var divElement = document.getElementById("main");

console.log(divElement);

divElement.innerText = "<h1>Hello WOrld</h1>";

function completePara() {
  var pElement = document.getElementById("para");
  var aElement = document.getElementById("link");

  if (aElement.innerHTML === "Read more") {
    pElement.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt repellendus vel possimus cum aliquid tempore deleniti cumque molestias delectus.";
    aElement.innerHTML = "Read less";
  } else {
    pElement.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    aElement.innerHTML = "Read more";
  }
}

function makeInvisible(element) {
  element.className = "img";
  console.log(element);
}

var link = document.getElementById("link");

link.innerText = "Google";
link.href = "https://www.google.com";
link.target = "_blank";

console.log(link);

var para = document.getElementById("para");

para.style.color = "red";
para.style.backgroundColor = "black";
para.style.borderRadius = "5px";
para.style.padding = "6px";
para.style.boxShadow = "0 0 10px red";

var num = 2

document.getElementById()

var allParas = document.getElementsByTagName("p");

for (var i = 0; i < allParas.length; i++) {
  console.log(allParas[i]);

  allParas[i].style.color = "blue";
}

var allParas = document.getElementsByClassName("element");

console.log(allParas);

for (var i = 0; i < allParas.length; i++) {
  console.log(allParas[i]);

  allParas[i].style.color = "blue";
}

// setInterval()

var interval;

function timer() {
  console.log("faraz ");
}

interval = setInterval(timer, 1000);


function stop() {
  clearInterval(interval);
}


// setTimeout()

function greet() {

  document.write
  ("<h2>Welcome user</h2>");
}

setTimeout(greet, 3000);





