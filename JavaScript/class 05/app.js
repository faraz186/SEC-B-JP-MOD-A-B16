var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
// slice()

var copy = numbers.slice(1, 7);

// splice()

numbers.splice(6, 4, "faraz");


// unshift

numbers.unshift(51, 1561, 65, 151, 5, 15);


// push()


numbers.push(11, 12, 13, 14, 15);


// pop()

numbers.pop();


// shift()

numbers.shift();


console.log(copy);



var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

console.log(country_list.length);



// what is loops?

// it is an iteration of a process which is used to

// create statement multiple times.



// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// types of loop

// for loop
// while loop
// do-while loop

// for loop

// for(initialization;condition;increment/decrement){

// }

for(var i = 1; i <= 10; i++) {
  console.log("hello world");
}

for (var i = 1; i <= 10; i++) {
  document.write(i, "<br>");
}

for (var i = 10; i >= 1; i--) {
  document.write(i, "<br>");
}



var tableNumber = +prompt("Enter a number");

var tableRange = +prompt("Enter range");

for (var i = 1; i <= tableRange; i++) {
  document.write(tableNumber, " x ", i, "=", tableNumber * i, "<br>");
}


// array with loops


var citiesArr = [
  "karachi",
  "lahore",
  "islamabad",
  "quetta",
  "multan",
  "peshawar",
];

for (var i = 0; i < citiesArr.length; i++) {
  console.log(citiesArr[i]);
}



// flags


var city = prompt("Enter your city name");

var matchFound = "no";

var citiesArr = [
  "karachi",
  "lahore",
  "islamabad",
  "quetta",
  "multan",
  "peshawar",
];

for (var i = 0; i < citiesArr.length; i++) {
  if (city === citiesArr[i]) {
    matchFound = "yes";
    console.log("city found");
  }
}

if (matchFound === "no") {
  console.log("city not found");
}



var name = "Muhammad Faraz";

console.log(name[0]);

console.log(name.slice(9, 14));     // output: faraz 

console.log(name.slice(0, 8));      // output: Muhammad



var cityName = prompt("Enter your city name").toUpperCase();

var cityName = prompt("Enter your city name").toLowerCase();

console.log(cityName);





var city = prompt("Enter your city name");

var firstChar = city.slice(0, 1).toUpperCase();

var remainChars = city.slice(1).toLowerCase();

var combineInput = firstChar + remainChars;

var matchFound = "no";

var citiesArr = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Quetta",
  "Multan",
  "Peshawar",
];

for (var i = 0; i < citiesArr.length; i++) {
  if (combineInput === citiesArr[i]) {
    matchFound = "yes";
    console.log("city found");
  }
}

if (matchFound === "no") {
  console.log("city not found");
}













