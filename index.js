// console.log("hello world");

const answerElement = document.getElementById("answer");

answerElement.innerText = "No";

// api key:
// 4aa684b4b966ef5ad0eb51136c4fb8ed

// setup api stuff:

const lat = 45.5587087
const lon = -74.0415125
const key = "4aa684b4b966ef5ad0eb51136c4fb8ed"
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
console.log(weatherUrl)



axios.get(weatherUrl)
    .then(function ({data}) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  }); 
