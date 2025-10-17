var firebaseConfig = {
  apiKey: "AIzaSyDSEOL0MPjrwsUado3buv67kjE8F9OGfec",
  authDomain: "faraz-resume.firebaseapp.com",
  databaseURL: "https://faraz-resume-default-rtdb.firebaseio.com",
  projectId: "faraz-resume",
  storageBucket: "faraz-resume.firebasestorage.app",
  messagingSenderId: "318781664476",
  appId: "1:318781664476:web:e6fe8d781610a228e59819",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

function signup() {
  try {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    auth
      .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
      .then(function (response) {
        console.log(response);

        response.user
          .sendEmailVerification()
          .then(function () {
            console.log("email verification sent...");
          })
          .catch(function (error) {
            console.log(error);
          });

        Swal.fire({
          title: "Signup Successfully...",
          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);

        Swal.fire({
          title: error,
          icon: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function login() {
  try {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    auth
      .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
      .then(function (response) {
        console.log(response);
        Swal.fire({
          title: "Login Successfully...",
          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          title: error.code,
          icon: "error",
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function LoginwithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
