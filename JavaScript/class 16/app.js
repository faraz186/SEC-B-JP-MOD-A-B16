// local storage
      
// local storage is a temporary database

//  where data is store for a specific time.

localStorage.setItem("name", "faraz");

localStorage.setItem("email", "faraz@gmail.com");

localStorage.setItem("age", 25);

localStorage.setItem("courses", ["AI", "blockchain", "ioT"]);

var obj = {
  id: 1,
  name: "hamza",
  city: "karachi",
};

localStorage.setItem("biodata", JSON.stringify(obj));


// get data from local storage


var getData = localStorage.getItem("email");

var getData1 = localStorage.getItem("biodata");

var getData2 = localStorage.getItem("city");

console.log(getData);

console.log(JSON.parse(getData1));

console.log(getData2);


// data remove from local storage

localStorage.removeItem("courses");

localStorage.clear();






