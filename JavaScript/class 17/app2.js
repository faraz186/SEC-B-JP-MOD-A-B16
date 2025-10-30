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

var getData = localStorage.getItem("username");

var h3Element = document.getElementById("getName");  

h3Element.innerHTML = "Name: " + getData;

function signout() {
  localStorage.clear();
  window.location.href = "login.html";
}






























