$(document).ready(function() {

  var weatherAPI = 'https://api.forecast.io/forecast/95d67aff8bae4c7d1f94ff3fe086adfc/37.8267,-122.423';
  var data = {
    q : "Portland,OR",
    units : "imperial"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }
  $.getJSON(weatherAPI, data, showWeather);
});