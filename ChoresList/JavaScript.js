var eraCurrentShift;
var fcCurrentShift;
var fhCurrentShift;//current shift selected

var dayOfWeek;//variable to store day of week from api



//will change task text based on current day and selected shift
function chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift) {
    var fcTask1 = document.getElementById("fcTask1");
    var fcTask2 = document.getElementById("fcTask2");
    var fcTask3 = document.getElementById("fcTask3");

    var fhTask1 = document.getElementById("fcTask1");
    var fhTask2 = document.getElementById("fcTask2");
    var fhTask3 = document.getElementById("fcTask3");

    var eraTask1 = document.getElementById("eraTask1");
    var eraTask2 = document.getElementById("eraTask2");
    var eraTask3 = document.getElementById("eraTask3");
    var eraTask4 = document.getElementById("eraTask4");
    var eraTask5 = document.getElementById("eraTask5");



    switch (dayOfWeek) {
        case 1:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
        case 2:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
        case 3:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
        case 4:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
        case 5:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
        case 6:
            switch (eraCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;

}
    
}

//field house chores display
function fhDropdown() {
    document.getElementById("fhDropdown").style.display = "block";//opens dropdown
}

function fhFirstChores() {//first shift chores
    fhCurrentShift = 1;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "first shift 1";
    document.getElementById("fhTask2").innerHTML = "first shift 2";
    document.getElementById("fhTask3").innerHTML = "first shift 3";
}
function fhSecondChores() {//second shift chores
    fhCurrentShift = 2;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "second shift 1";
    document.getElementById("fhTask2").innerHTML = "second shift 2";
    document.getElementById("fhTask3").innerHTML = "second shift 3";
}
function fhThirdChores() {//third shift chores
    fhCurrentShift = 3;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "third shift 1";
    document.getElementById("fhTask2").innerHTML = "third shift 2";
    document.getElementById("fhTask3").innerHTML = "third shift 3";
}
function fhFourthChores() {//fourth shift chores
    fhCurrentShift=4

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "3:30am-7:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "fourth shift 1";
    document.getElementById("fhTask2").innerHTML = "fourth shift 2";
    document.getElementById("fhTask3").innerHTML = "fourth shift 3";
}

//fitness center chores display
function fcDropdown() {
    document.getElementById("fcDropdown").style.display = "block";//opens dropdown
}

function fcFirstChores() {
    fcCurrentShift = 1;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "first shift 1";
    document.getElementById("fcTask2").innerHTML = "first shift 2";
    document.getElementById("fcTask3").innerHTML = "first shift 3";
}
function fcSecondChores() {
    fcCurrentShift = 2;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "second shift 1";
    document.getElementById("fcTask2").innerHTML = "second shift 2";
    document.getElementById("fcTask3").innerHTML = "second shift 3";
}
function fcThirdChores() {
    fcCurrentShift = 3;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "third shift 1";
    document.getElementById("fcTask2").innerHTML = "third shift 2";
    document.getElementById("fcTask3").innerHTML = "third shift 3";
}
function fcFourthChores() {
    fcCurrentShift = 4;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "3:30pm-7:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "fourth shift 1";
    document.getElementById("fcTask2").innerHTML = "fourth shift 2";
    document.getElementById("fcTask3").innerHTML = "fourth shift 3";
}

//equipment room aid chore display
function eraDropdown() {
    document.getElementById("eraDropdown").style.display = "block";//opens dropdown

    for (var i = 0; i < 5; i++) {
        if ((i + 1) % 2 === 1) {//changes every other task text color for equipment room aid
            document.getElementById("eraTask" + (i + 1)).style.color = "rgb(251, 255, 173)";
        }
    }

    for (var j = 0; j < 3; j++) {
        if ((j + 1) % 2 === 0) {//changes every other task text color for fitness center
            document.getElementById("fcTask" + (j + 1)).style.color = "rgb(251, 255, 173)";
        }
    }

    for (var k = 0; k < 3; k++) {
        if ((k + 1) % 2 === 0) {//changes every other task text color for fieldhouse
            document.getElementById("fhTask" + (k + 1)).style.color = "rgb(251, 255, 173)";
        }
    }
}

function eraFirstChores() {
    eraCurrentShift = 1;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "8am-12pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("eraTask1").innerHTML = "first shift 1";
    document.getElementById("eraTask2").innerHTML = "first shift 2";
    document.getElementById("eraTask3").innerHTML = "first shift 3";
    document.getElementById("eraTask4").innerHTML = "first shift 4";
    document.getElementById("eraTask5").innerHTML = "first shift 5";
}
function eraSecondChores() {
    eraCurrentShift = 2;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "12pm-3pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("eraTask1").innerHTML = "second shift 1";
    document.getElementById("eraTask2").innerHTML = "second shift 2";
    document.getElementById("eraTask3").innerHTML = "second shift 3";
    document.getElementById("eraTask4").innerHTML = "second shift 4";
    document.getElementById("eraTask5").innerHTML = "second shift 5";

}
function eraThirdChores() {
    eraCurrentShift = 3;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "3pm-5pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("eraTask1").innerHTML = "third shift 1";
    document.getElementById("eraTask2").innerHTML = "third shift 2";
    document.getElementById("eraTask3").innerHTML = "third shift 3";
    document.getElementById("eraTask4").innerHTML = "third shift 4";
    document.getElementById("eraTask5").innerHTML = "third shift 5";
}



//time api
    fetch("https://world-time2.p.rapidapi.com/timezone/America/New_York", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "world-time2.p.rapidapi.com",
            "x-rapidapi-key": "22f633b01amsh6be91bad6480fe2p14d4bdjsn2dd25817685a"
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            dayOfWeek = data.day_of_week;
        })
        .catch(err => {
            console.log(err);
        });

window.onload = function () {// executes code when window loads
    setTimeout(function () {// executes code with a given delay


        var day = document.getElementById("footer");

        switch (dayOfWeek) {//changes the footer inner html based on day
            case 0:
                day.innerHTML = "Sunday";
                break;
            case 1:
                day.innerHTML = "Monday";
                break;
            case 2:
                day.innerHTML = "Tuesday";
                break;
            case 3:
                day.innerHTML = "Wednesday";
                break;
            case 4:
                day.innerHTML = "Thursday";
                break;
            case 5:
                day.innerHTML = "Friday";
                break;
            case 6:
                day.innerHTML = "Saturday";
                break;
        }
    }, 1000);//amount of milliseconds function is delayed
}