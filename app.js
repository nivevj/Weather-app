const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

//query selector
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async(city) => {
    weather.innerHTML = `<h3> Fetching... <h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h3> No such city found <h3>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h3>${data.main.temp} ℃</h3>
            <h3> ${data.weather[0].main} </h3>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)