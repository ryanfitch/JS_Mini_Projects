$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "imperial"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  $.getJSON(weatherAPI, data, showWeather);
});