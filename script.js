//Var Setup
var currentDay = document.getElementById("currentDay");
var date = moment().format("MMM Do, YYYY, hh:mm");


currentDay.textContent = "Current day: " + date;


