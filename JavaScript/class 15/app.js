var firebaseConfig = {
  apiKey: "AIzaSyArYdnLGjvWvqStxPm9rrBoAgSs874wVHE",         
  authDomain: "stopwatch786-19657.firebaseapp.com",
  databaseURL: "https://stopwatch786-19657-default-rtdb.firebaseio.com", 
  projectId: "stopwatch786-19657",
  storageBucket: "stopwatch786-19657.firebasestorage.app",
  messagingSenderId: "259932942806",
  appId: "1:259932942806:web:4f054d874d5ae2f0fe7477",
  measurementId: "G-J38G84PRL0",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var db = firebase.database();

function saveData() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var city = document.getElementById("city").value;

  var userObj = {
    user_name: name,
    user_city: city,
    user_age: age,
  };

  console.log(userObj);

  // save Data on database

  // set()

  firebase.database()
  .ref("users")
  .set(userObj);


  // push()


  firebase.database().ref("users").push(userObj);
}

// data get from database


function getDataFromDatabase() {
  firebase
    .database()
    .ref("users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();


// data remove from database


function deleteDataFromDatabase() {
  firebase.database().ref("users/-Oc6K1DGxPPdqSyzU62O").remove();
}

deleteDataFromDatabase();

// data edit from database

function editDataFromDatabase() {
  firebase.database().ref("users/-Oc6Jz-1L94iuhB3l0wU").set({
    user_name: "Muhammad Faraz",
    user_age: 23,
    user_city: "lahore",
  });
}

editDataFromDatabase();



// substring()

var str = "Hello javascript";

console.log(str.substring(0, 5));

// split()

var str = "Hello javascript";

var splitted_word = str.split(" ");

// join()

console.log(splitted_word.join(" "));

console.log(splitted_word.join(" "));

// includes()

var str = "Hello javascript";

console.log(str.includes("ze"));

// startswith()

var str = "Hello javascript";

console.log(str.startsWith("H"));

// endswith()

console.log(str.endsWith("ipb"));

var arr = [1, 2, 3, 4, 5, 6];

console.log(arr.reverse());



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

function search() {
  var input = document.getElementById("inp");

  var arr = [];

  for (var i = 0; i < country_list.length; i++) {
    if (country_list[i].includes(input.value)) {
      arr.push(country_list[i]);
    }
  }
  console.log(arr);
}










