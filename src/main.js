import {puppy} from './backend.js';
import $ from 'jquery';

// $("document").ready(function() {
//   puppy.energyLevel = 20;
//   puppy.lowerEnergy();
//   const energyInterval = setInterval(() => {
//     if (puppy.energyLevel === 0) {
//       clearInterval(energyInterval);
//     }
//     console.log(puppy.energyLevel);
//     $(".container").text(puppy.energyLevel);
//   }, 1000);
// });
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=Portland, Oregon&appid=cb5141bf70e77c59608b697663010229`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
