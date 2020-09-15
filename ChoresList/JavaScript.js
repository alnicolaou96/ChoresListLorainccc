
//field house chores display
function fhDropdown() {
    document.getElementById("fhDropdown").style.display = "block";//opens dropdown
}

function fhFirstChores() {
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot
}
function fhSecondChores() {
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot
}
function fhThirdChores() {
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot
}
function fhFourthChores() {
    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "3:30am-7:30pm";//changes dropdown button to time slot
}

//fitness center chores display
function fcDropdown() {
    document.getElementById("fcDropdown").style.display = "block";//opens dropdown
}

function fcFirstChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot
}
function fcSecondChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot
}
function fcThirdChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot
}
function fcFourthChores() {
    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "3:30pm-7:30pm";//changes dropdown button to time slot
}

//equipment room aid chore display
function eraDropdown() {
    document.getElementById("eraDropdown").style.display = "block";//opens dropdown
}

function eraFirstChores() {
    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "8am-12pm";//changes dropdown button to time slot
}
function eraSecondChores() {
    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "12pm-3pm";//changes dropdown button to time slot
}
function eraThirdChores() {
    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "3pm-5pm";//changes dropdown button to time slot
}