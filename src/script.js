var second = document.getElementById("sec");
var minute = document.getElementById("min");
var mili = document.getElementById("milisec");
var startBtn = document.getElementById("start");

var timeInterval;

function start() {

    // Disabling START btn after 1st Click.
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "grey";


    //All calculations are stored in "timerInterval".
    //Here "setInterval" is used and 1 seconds is set.
    timeInterval = setInterval(function () {
        var secCount = parseInt(second.innerHTML);
        var minCount = parseInt(minute.innerHTML);
        var miliCount = parseInt(mili.innerHTML);

        //With the help of 'innerHTML' all the information is displayed in the webpage
        //The condition here is that when the value of time is less than 10 then a 0 will be added before that time.

        // for miliseconds
        mili.innerHTML = miliCount++ < 9 ? "0" + miliCount.toString() : miliCount;

        if (miliCount > 99) {
            //For seconds
            
            second.innerHTML = secCount++ < 9 ? "0" + secCount.toString() : secCount;
            mili.innerHTML = 0;
        }



        //This if condition does 2 things:
        //1. Increase the minute counter
        //2. Reset the second counter
        if (secCount > 59) {
            //For seconds
            minute.innerHTML = minCount++ < 9 ? "0" + minCount.toString() : minCount;
            second.innerHTML = 0;
        }

    }, 10);

}



function stop() {
    // Enabling START btn after clicking on STOP.
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#6C4AB6";


    // clearing the time Interval.
    clearInterval(timeInterval);
}

function reset() {
    // Enabling START btn after clicking on STOP.
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#6C4AB6";

    //Resting the minute and sec to 00;
    second.innerHTML = "00";
    minute.innerHTML = "00";
    mili.innerHTML = "00";
    clearInterval(timeInterval);

}