
// getting userinputs



var searchbtn = document.getElementById('searchbtn');


// fetching weather data from openweather platform


searchbtn.addEventListener('click',getdata = () => {
//  --------------------making varibles for each value--------------------

      var temp = document.getElementById('temp');

      var Humidity = document.getElementById('Humidity');

      var Windspeed = document.getElementById('Windspeed');

      var cityname = document.getElementById('cityname');
      
      var searchinput = document.getElementById('searchinput');

      // ------------end----------------------------------

      // ---------------fetching each data from poenweather api and assigning the name of the city -----------------
      var searchvalue = searchinput.value;
      cityname.style.display='block';
      cityname.textContent = searchvalue;
      searchinput.value ='';
      var url1 = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=f2605f6d8563023180ca1825555cfd00&units=metric`;
      
      fetch(url1)
      .then(Response => Response.json())
      .then(data => {
            temp.innerHTML = data.main.temp +"<sup>o</sup>c";
            Windspeed.innerHTML = data.wind.speed +" m/s";
            Humidity.innerHTML = data.main.humidity + "%";
            console.log(data);
      })
      .catch(error => console.error(error));





});

// -----------------------end -----------------------------------------------------------------

// handling enter key event

document.addEventListener('keydown',() =>{
      var searchvalue1 = searchinput.value;
      var keypressed = event.key;
      if (searchvalue1 != "" && keypressed ==="Enter") {
            getdata();
      }
});