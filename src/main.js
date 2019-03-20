// import {APIcall} from './backend.js';
// import $ from 'jquery';
//
//
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//
//     const newAPIcall = new APIcall(city);
//     const returnData = newAPIcall.getData();
//         returnData.then(function(response) {
//           let body = JSON.parse(response);
//           $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//           $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//         }, function(error) {
//           $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//         });
//
//
//   });
// });

import {UserData} from './backend.js';
import './sass/styles.scss';
import $ from 'jquery';

$(document).ready(function() {
  $('.userForm').submit(function(event) {
    event.preventDefault();
    const userNumber = $('#selectedNumber').val();
    const userGender = $('#gender').val();

    const users = new UserData(userNumber, userGender);
    const userData = users.getData();
    userData.then(function(response) {
      const userDataObject = JSON.parse(response);
      console.log(userDataObject);
    userDataObject.results.sort(function(a,b){
      if(a.name.last > b.name.last){
        return 1;
      }
      if(a.name.last < b.name.last){
        return -1;
      }
      return 0;
    });
    $('.results').text("")
      userDataObject.results.forEach(function(user){
        $('.results').append(`
          <div id="${user.name.first+user.name.last}" class="user">
            <h3>${user.name.first+" "+user.name.last}</h3>
            <img src='${user.picture.large}'>
            <div class="additionalInfo">
              <p>Cell: ${user.cell}</p>
              <p>Email: ${user.email}</p>
            </div>
          </div>`);
      });
      $(".user").click(function(){
        $(this).toggleClass('selected')
      });
    })
  })



})
