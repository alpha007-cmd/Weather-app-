const apiKey = "62e93688cfa3ce1370042efc8d132e47";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const wheatherIcon = document.querySelector(".wheather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector('.error').style.display = "block";
                document.querySelector('.wheather').style.display = "none";

            }
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML =data.name;
            document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
            document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
            document.querySelector(".wind").innerHTML =data.wind.speed + "Km/h ";

            if(data.weather[0].main == "Clouds"){
            wheatherIcon.src = "img/clouds.png";
            }else if(data.weather[0].main == "Clear"){
                wheatherIcon.src = "img/clear.png";
            }else if(data.weather[0].main == "Drizzle"){
                wheatherIcon.src = "img/drizzle.png";
            }else if(data.weather[0].main == "Rain"){
                wheatherIcon.src = "img/rain.png";
            }else if(data.weather[0].main == "Mist"){
                wheatherIcon.src = "img/mist.png";
            }else if(data.weather[0].main == "Snow"){
                wheatherIcon.src = "img/snow.png";
            }

            document.querySelector('.wheather').style.display = "block";
        }
        
 searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value); 
 })
 searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
