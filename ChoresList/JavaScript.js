
//field house chores display
function fhDropdown() {
    document.getElementById("fhDropdown").style.display = "block";//opens dropdown
}

function fhFirstChores() {//first shift chores
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "first shift 1";
    document.getElementById("fhTask2").innerHTML = "first shift 2";
    document.getElementById("fhTask3").innerHTML = "first shift 3";
}
function fhSecondChores() {//second shift chores
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "second shift 1";
    document.getElementById("fhTask2").innerHTML = "second shift 2";
    document.getElementById("fhTask3").innerHTML = "second shift 3";
}
function fhThirdChores() {//third shift chores
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fhTask1").innerHTML = "third shift 1";
    document.getElementById("fhTask2").innerHTML = "third shift 2";
    document.getElementById("fhTask3").innerHTML = "third shift 3";
}
function fhFourthChores() {//fourth shift chores
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
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "first shift 1";
    document.getElementById("fcTask2").innerHTML = "first shift 2";
    document.getElementById("fcTask3").innerHTML = "first shift 3";
}
function fcSecondChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "second shift 1";
    document.getElementById("fcTask2").innerHTML = "second shift 2";
    document.getElementById("fcTask3").innerHTML = "second shift 3";
}
function fcThirdChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("fcTask1").innerHTML = "third shift 1";
    document.getElementById("fcTask2").innerHTML = "third shift 2";
    document.getElementById("fcTask3").innerHTML = "third shift 3";
}
function fcFourthChores() {
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
    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "3pm-5pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    document.getElementById("eraTask1").innerHTML = "third shift 1";
    document.getElementById("eraTask2").innerHTML = "third shift 2";
    document.getElementById("eraTask3").innerHTML = "third shift 3";
    document.getElementById("eraTask4").innerHTML = "third shift 4";
    document.getElementById("eraTask5").innerHTML = "third shift 5";
}