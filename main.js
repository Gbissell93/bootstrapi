//HTML elements dog app
const dogBtn = document.querySelector('#dog-btn')
const dogContent = document.querySelector('#dog-stuff');
const dogImg = document.querySelector('#dog-img');
console.log(dogBtn)
//event listeners
dogBtn.addEventListener('click', getDog)

//Fetch funtions
function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((rawData) => {
            return rawData.json();
        })
        .then((data) => {
            console.log('data',data.message)
            dogImg.src = data.message
    })
}
 
//HTML weather app
const weatherBtn = document.querySelector('#weather-btn');
const weatherInput = document.querySelector('#weather-input');
const weatherResults = document.querySelector('#weather');

//event listener
weatherBtn.addEventListener('click', getWeather);

//weather function
function cTOf(celcius) {
return celcius * 1.8 + 32
}

function getWeather() {
    fetch(`https://goweather.herokuapp.com/weather/${weatherInput.value}`)
        .then((rawData) => {
            return rawData.json();
        })
        .then((data) => {
            console.log(data)
            weatherResults.innerHTML = 
            `<li id="cur-weather" class="card-body">
            <h1> ${weatherInput.value}</h1>
            <div>Current temp ${data.temperature}</div>
            <div>current wind speed ${data.wind}</div> 
            <div> conditions are ${data.description}</div>
            </li>`
        })
}