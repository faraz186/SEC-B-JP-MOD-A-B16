var heading = document.getElementById("heading");  
                        
var heading = document.childNodes[0].childNodes[1];

console.log(heading.nodeType);

var divElement = document.getElementById("main");

console.log(divElement.firstChild);

console.log(divElement.lastChild);

console.log(divElement.childNodes[3]);

var pElement = document.getElementById("para");

console.log(h1Element.parentElement);

console.log(pElement.nodeName);



var allParas = document.getElementsByTagName("p");

for (var i = 0; i < allParas.length; i++) {
  console.log(allParas[i]);
}

// without DOM

var link = document.getElementById("link");

link.href = "https://www.google.com";

// with DOM

var link = document.getElementById("link");

link.setAttribute("href", "https://www.google.com");

var link = document.getElementById("link");

link.setAttribute("class", "anchor");

console.log(link.attributes[0].nodeValue);

console.log(link.getAttribute("id"));

console.log(link.hasAttribute("id"));

var h1Element = document.createElement("h1");

var h1Text = document.createTextNode("Hello world");

var divElement = document.getElementById("container");

h1Element.appendChild(h1Text);

divElement.appendChild(h1Element);

console.log(h1Element);

// open tag
// content
// closing tag

var pElement = document.createElement("p");

var pText = document.createTextNode("lorem ipsum dolor");

pElement.appendChild(pText);

console.log(pElement);

console.log(pText);

var divElement = document.getElementById("container");

divElement.appendChild(pElement);

console.log(pElement);


























