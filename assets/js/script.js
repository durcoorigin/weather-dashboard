// ****** Global Variables ******
var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#user-location");


// ****** Display weather forecast ******
var displayWeather = function(data, uvToday) {

    // ****** Display Today's Weather ******
    
    var cityName = data.city.name;
    var dateToday =  moment(data.list[0].dt_txt).format("MM/DD/YYYY");
    var tempToday =  data.list[0].main.temp;
    var humToday = data.list[0].main.humidity;
    var windToday = data.list[0].wind.speed;
    var getTodayIcon = data.list[0].weather[0].icon;
    let iconToday = document.getElementById('icon');


    document.getElementById("city").innerHTML = cityName;
    document.getElementById("date").innerHTML = dateToday;
    iconToday.setAttribute('src', 'http://openweathermap.org/img/wn/' + getTodayIcon + '@2x.png');
    document.getElementById("temp").innerHTML = tempToday;
    document.getElementById("humidity").innerHTML = humToday;
    document.getElementById("wind").innerHTML = windToday;
    document.getElementById("uvIndex").innerHTML = uvToday;

    // ****** Display Tomorrow's Weather ******

    var dateTomorrow =  moment(data.list[7].dt_txt).format("MM/DD/YYYY");
    var getTomorrowIcon = data.list[7].weather[0].icon;
    let iconTomorrow = document.getElementById('icon1');
    var tempTomorrow =  data.list[7].main.temp;
    var humTomorrow = data.list[7].main.humidity;

    document.getElementById("date1").innerHTML = dateTomorrow;
    iconTomorrow.setAttribute('src', 'http://openweathermap.org/img/wn/' + getTomorrowIcon + '@2x.png');
    document.getElementById("temp1").innerHTML = tempTomorrow;
    document.getElementById("humidity1").innerHTML = humTomorrow;

    // ****** Display Day 2 Weather ******

    var dateDay2 =  moment(data.list[15].dt_txt).format("MM/DD/YYYY");
    var getDay2Icon = data.list[15].weather[0].icon;
    let iconDay2 = document.getElementById('icon2');
    var tempDay2 =  data.list[15].main.temp;
    var humDay2 = data.list[15].main.humidity;

    document.getElementById("date2").innerHTML = dateDay2;
    iconDay2.setAttribute('src', 'http://openweathermap.org/img/wn/' + getDay2Icon + '@2x.png');
    document.getElementById("temp2").innerHTML = tempDay2;
    document.getElementById("humidity2").innerHTML = humDay2;

    // ****** Display Day 3 Weather ******

    var dateDay3 =  moment(data.list[23].dt_txt).format("MM/DD/YYYY");
    var getDay3Icon = data.list[23].weather[0].icon;
    let iconDay3 = document.getElementById('icon3');
    var tempDay3 =  data.list[23].main.temp;
    var humDay3 = data.list[23].main.humidity;

    document.getElementById("date3").innerHTML = dateDay3;
    iconDay3.setAttribute('src', 'http://openweathermap.org/img/wn/' + getDay3Icon + '@2x.png');
    document.getElementById("temp3").innerHTML = tempDay3;
    document.getElementById("humidity3").innerHTML = humDay3;

    // ****** Display Day 4 Weather ******

    var dateDay4 =  moment(data.list[31].dt_txt).format("MM/DD/YYYY");
    var getDay4Icon = data.list[31].weather[0].icon;
    let iconDay4 = document.getElementById('icon4');
    var tempDay4 =  data.list[31].main.temp;
    var humDay4 = data.list[31].main.humidity;

    document.getElementById("date4").innerHTML = dateDay4;
    iconDay4.setAttribute('src', 'http://openweathermap.org/img/wn/' + getDay4Icon + '@2x.png');
    document.getElementById("temp4").innerHTML = tempDay4;
    document.getElementById("humidity4").innerHTML = humDay4;

    // ****** Display Day 5 Weather ******

    var dateDay5 =  moment(data.list[39].dt_txt).format("MM/DD/YYYY");
    var getDay5Icon = data.list[39].weather[0].icon;
    let iconDay5 = document.getElementById('icon5');
    var tempDay5 =  data.list[39].main.temp;
    var humDay5 = data.list[39].main.humidity;

    document.getElementById("date5").innerHTML = dateDay5;
    iconDay5.setAttribute('src', 'http://openweathermap.org/img/wn/' + getDay5Icon + '@2x.png');
    document.getElementById("temp5").innerHTML = tempDay5;
    document.getElementById("humidity5").innerHTML = humDay5;

};

// ****** Get weather information ******
var getUv = function(data) {
    var lat = data.city.coord.lat;
    var long = data.city.coord.lon;

    var getUv = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + long + '&appid=9b044363d4a76eaed9d4e095ae5fa465';
    
	fetch(getUv).then(function(response) {
        response.json().then(function(uvData) {
	
        var uvToday = uvData.value
        displayWeather(data, uvToday);
        });
    });

};

var getWeather = function(weatherLocation) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + weatherLocation + '&units=imperial&appid=9b044363d4a76eaed9d4e095ae5fa465';


    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
	getUv(data);

        });
    });

};



var createHistory = function(weatherLocation) {

    if (weatherLocation) {
        var city = localStorage.setItem("storeHistory", weatherLocation);
        var button = document.createElement("button");
        button.id = "history-btn";
        button.value = localStorage.getItem("storeHistory");
        button.innerHTML = localStorage.getItem("storeHistory");
        document.getElementById("history").appendChild(button);
    }

    getWeather(weatherLocation);
}

// ****** Form Event Handler ******
var formSubmitHandler = function(event) {

    event.preventDefault();
    var weatherLocation = locationInputEl.value.trim();

    if (weatherLocation) {
        locationInputEl.value = "";
    }

    createHistory(weatherLocation);

};



// ****** Event Listeners ******
userFormEl.addEventListener("submit", formSubmitHandler);

