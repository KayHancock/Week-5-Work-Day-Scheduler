//Var Setup
var currentDay = document.getElementById("currentDay");
var date = moment().format("MMM Do, YYYY, hh:mm");
var hour = moment().format("H");
var parsedHour = parseInt(hour);
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("8");


//Functions
function checkTime8 () {
    if (parsedHour === 8) {
        eight.classList.add("present");
    }
    if (parsedHour > 8) {
        eight.classList.add("past");
    }
    if (parsedHour < 8) {
        eight.classList.add("future");
    }
}

function checkTime9 () {
    if (parsedHour === 9) {
        nine.classList.add("present");
    }
    if (parsedHour > 9) {
        nine.classList.add("past");
    }
    if (parsedHour < 9) {
        nine.classList.add("future");
    }
}

function checkTime10 () {
    if (parsedHour === 10) {
        ten.classList.add("present");
    }
    if (parsedHour > 10) {
        ten.classList.add("past");
    }
    if (parsedHour < 10) {
        ten.classList.add("future");
    }
}

function checkTime11 () {
    if (parsedHour === 11) {
        eleven.classList.add("present");
    }
    if (parsedHour > 11) {
        eleven.classList.add("past");
    }
    if (parsedHour < 11) {
        eleven.classList.add("future");
    }
}
function checkTime12 () {
    if (parsedHour === 12) {
        twelve.classList.add("present");
    }
    if (parsedHour > 12) {
        twelve.classList.add("past");
    }
    if (parsedHour < 12) {
        twelve.classList.add("future");
    }
}
function checkTime1 () {
    if (parsedHour === 13) {
        one.classList.add("present");
    }
    if (parsedHour > 13) {
        one.classList.add("past");
    }
    if (parsedHour < 13) {
        one.classList.add("future");
    }
}
function checkTime2 () {
    if (parsedHour === 14) {
        two.classList.add("present");
    }
    if (parsedHour > 14) {
        two.classList.add("past");
    }
    if (parsedHour < 14) {
        two.classList.add("future");
    }
}
function checkTime3 () {
    if (parsedHour === 15) {
        three.classList.add("present");
    }
    if (parsedHour > 15) {
        three.classList.add("past");
    }
    if (parsedHour < 15) {
        three.classList.add("future");
    }
}
function checkTime4 () {
    if (parsedHour === 16) {
        four.classList.add("present");
    }
    if (parsedHour > 16) {
        four.classList.add("past");
    }
    if (parsedHour < 16) {
        four.classList.add("future");
    }
}
function checkTime5 () {
    if (parsedHour === 17) {
        five.classList.add("present");
    }
    if (parsedHour > 17) {
        five.classList.add("past");
    }
    if (parsedHour < 17) {
        five.classList.add("future");
    }
}


currentDay.textContent = "Current day: " + date;

checkTime8 ();
checkTime9 ();
checkTime10 ();
checkTime11 ();
checkTime12 ();
checkTime1 ();
checkTime2 ();
checkTime3 ();
checkTime4 ();
checkTime5 ();


