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

function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(name, email, password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log(response);

      var user_uid = response.user.uid;

      var user_obj = {
        user_name: name,
      };

      //   data save on database

      firebase
        .database()
        .ref("manage_users/" + user_uid)
        .set(user_obj);

      setTimeout(function () {
        window.location.href = "./login.html";
      }, 3000);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log(response);

      var user_uid = response.user.uid;

      firebase
        .database()
        .ref("manage_users/" + user_uid)
        .on("child_added", function (data) {
          console.log(data.val());
          localStorage.setItem("username", data.val());
        });

      setTimeout(function () {
        window.location.href = "home.html";
      }, 3000);
    })
    .catch(function (err) {
      console.log(err);
    });
}


