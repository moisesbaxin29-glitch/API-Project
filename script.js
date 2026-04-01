if (Math)




let math = document.querySelector(".Math")

fetch("https://yesno.wtf/api")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
console.log(data)

output.innerHTML = data.answer;
});
