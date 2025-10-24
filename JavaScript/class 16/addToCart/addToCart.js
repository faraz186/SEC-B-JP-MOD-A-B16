var firebaseConfig = {
  apiKey: "AIzaSyBy6VhxVg31U833ivNWu1nOJQK6aBNnnyc",
  authDomain: "add-to-cart-46231.firebaseapp.com",
  databaseURL: "https://add-to-cart-46231-default-rtdb.firebaseio.com",
  projectId: "add-to-cart-46231",
  storageBucket: "add-to-cart-46231.firebasestorage.app",
  messagingSenderId: "433655776517",
  appId: "1:433655776517:web:a9ed924b47640dd878236c",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var arr = [];

var counter = document.getElementById("counter");

counter.style.backgroundColor = "red";
counter.style.color = "white";
counter.style.padding = "6px 10px";
counter.style.borderRadius = "50%";
counter.style.fontWeight = "bold";

function addProduct(img, title, desc) {
  // create object

  var product_obj = {
    product_img: img,
    product_title: title,
    product_desc: desc,
  };

  arr.push(product_obj);

  counter.innerHTML = arr.length;

  //   save Data from database

  firebase.database().ref("products").push(product_obj);
}

// get data from database

firebase
  .database()
  .ref("products")
  .on("child_added", function (data) {
    var product_image = data.val().product_img;
    var product_title = data.val().product_title;
    var product_desc = data.val().product_desc;

    var table = document.getElementById("display-data");

    table.innerHTML += `<thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><img class='w-25 h-25' src=${product_image}/></td>
      <td>${product_title}</td>
      <td>${product_desc}</td>
 
    </tr>
  </tbody>
  `;
  });
