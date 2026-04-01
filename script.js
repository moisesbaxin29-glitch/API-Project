let data;
let button = document.querySelector(".button");
let output = document.querySelector(".output");
let dropdown = document.querySelector(".dropdown");
let choice;
fetch("https://yesno.wtf/api")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

console.log("data")
document.querySelector("form").addEventListener('submit', function(e){
  e.preventDefault();
  console.log("clicked");
choice = dropdown.value;


output.innerHTML = data.answer;
  });

  });