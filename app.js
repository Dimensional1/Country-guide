const inputField = document.getElementById("country-input");
const search = document.getElementById("search-btn");
const result = document.getElementById("results")

search.addEventListener("click", ()=>{
let countryName =inputField.value;
console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((response) => response.json())
.then((data) => {
    console.log(data)
    result.innerHTML =
    `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2> ${countryName[0].toUpperCase()+ countryName.slice(1)}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital: </h4>
            <span>${data[0].capital}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents}</span>
        </div>
    </div>
     <div class="wrapper">
        <div class="data-wrapper">
            <h4>Population:</h4>
            <span> ${data[0].population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${
                data[0].currencies[Object.keys(data[0].currencies)].name
              } </span>
        </div>
        <div class="data-wrapper">
            <h4>Currency symbol:</h4>
            <span>${
                data[0].currencies[Object.keys(data[0].currencies)].symbol
             }</span>
        </div>
    </div>
     <div class="wrapper">
        <div class="data-wrapper">
            <h4>Common Languages:</h4>
            <span>
            <span>${Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(", ")}</span>
        </div>
        <div class="data-wrapper">
            <h4>Time zone:</h4>
            <span>${data[0].timezones}</span>
            </div>
            <div class="footer">
            <p>Made with ♥ by a  sleep-deprived, coffee-fueled wizard (K)</p>
        </div>
    </div>
    
    `


})


})