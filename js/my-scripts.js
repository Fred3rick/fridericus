/* Change Icon
$(document).ready(function() {
  $(".header__hamburger").click(function() {
    $(this).toggleClass("header__hamburger--active");
  });
}); */

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


});

/* Greeting
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




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio__box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnPortfolio");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
