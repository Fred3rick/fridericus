/* Change color on refresh */
$(document).ready(function() {
  var colors = ["#4285F4", "#EA4335", "#34A853", "#F9AB00"];
  var rand = Math.floor(Math.random() * colors.length);
  $('.footer').css("border-color", colors[rand]);
  $('.contact__button').css("background-color", colors[rand]);
  $('.works__cta').css("background-color", colors[rand]);
  $('.bar').css("background-color", colors[rand]);
  $('.progress-bar').css("background-color", colors[rand]);
  $('.my__resume').css("background-color", colors[rand]);
  $('.btn-warning').css("background-color", colors[rand]);
});

/*Greet
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Buongiorno';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Buon pomeriggio';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Buonasera';
document.getElementById('myGreet').innerHTML = greet;*/

/*Real-Time clock
function clock() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);*/

/*Date of today
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("today");
out.innerHTML = day + "/" + month + "/" + year;*/
