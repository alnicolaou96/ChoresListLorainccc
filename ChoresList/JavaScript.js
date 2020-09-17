var eraCurrentShift;
var fcCurrentShift;
var fhCurrentShift;//current shift selected

var dayOfWeek;//variable to store day of week from api



//will change task text based on current day and selected shift
function chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift) {
    var fcTask1 = document.getElementById("fcTask1");
    var fcTask2 = document.getElementById("fcTask2");
    var fcTask3 = document.getElementById("fcTask3");

    var fhTask1 = document.getElementById("fhTask1");
    var fhTask2 = document.getElementById("fhTask2");
    var fhTask3 = document.getElementById("fhTask3");

    var eraTask1 = document.getElementById("eraTask1");
    var eraTask2 = document.getElementById("eraTask2");
    var eraTask3 = document.getElementById("eraTask3");
    var eraTask4 = document.getElementById("eraTask4");
    var eraTask5 = document.getElementById("eraTask5");



    switch (dayOfWeek) {
        case 1://chores for all era shifts on monday
            switch (eraCurrentShift) {
                case 1:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Start laundry if needed";
                    eraTask4.innerHTML = "Sweep gym and PE 105 with large dust mop. Shop vac after";
                    eraTask5.innerHTML = "Clean all surfaces in PE 102 and 103 after MJs class ends after at 11am";
                    break;
                case 2:
                    eraTask1.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for gymnasium and tear down / set up as appropriate";
                    eraTask3.innerHTML = "Check public restrooms- replace soap or paper towels if needed, empty garbage";    
                    eraTask4.innerHTML = "Start laundry if needed";
                    eraTask5.innerHTML = "";
                    break;
                case 3:
                    eraTask1.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for gymnasium and tear down / set up as appropriate";
                    eraTask3.innerHTML = "Check Kristys bench and the surrounding areas for trash, branches, and straighten the flag/butterfly"
                    eraTask4.innerHTML = "Replace towels in fitness center/spray bottles if needed";
                    eraTask5.innerHTML = "empty garbage in laundry room";
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    fcTask1.innerHTML = "Check track for debris & water/ stock and replace paper towels and cleaning solution on the track";
                    fcTask2.innerHTML = "Make sure each faculty locker rooms have 10 towels plus 10 small brown towels in the women's";
                    fcTask3.innerHTML = "";
                    break;
                case 2:
                    fcTask1.innerHTML = "Clean lemond bikes- wipe down frames, handles, pads, and pins";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 3:
                    fcTask1.innerHTML = "Clean mirrors on locker room side with windex and paper towels";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 4:
                    fcTask1.innerHTML = "Empty towel bin in PE105 and faculty locker rooms";
                    fcTask2.innerHTML = "vacuum dust bunnies on track and in corners";
                    fcTask3.innerHTML = "";
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    fhTask1.innerHTML = "check hallway between 102 and 103 for debris also check field house and gym";
                    fhTask2.innerHTML = "30 towels in 105";
                    fhTask3.innerHTML = "";
                    break;
                case 2:
                    fhTask1.innerHTML = "Tidy welcome desk area- clean up all clutter and put excessive personal items in the mailroom";
                    fhTask2.innerHTML = "Replace roll of paper towels next to the microwave if needed";
                    fhTask3.innerHTML = "";
                    break;
                case 3:
                    fhTask1.innerHTML = "Sweep/vacuum around lifetime fitness machines";
                    fhTask2.innerHTML = "Sweep/vacuum around ellipticals and treadmills";
                    fhTask3.innerHTML = "";
                    break;
                case 4:
                    fhTask1.innerHTML = "Clean the lockers- clean the surfaces and check inside for debris and disinfect";
                    fhTask2.innerHTML = "Wipe down inside and ourside handrails on the track";
                    fhTask3.innerHTML = "Clean stretching mats";
                    break;
            }
            break;
        case 2:
            switch (eraCurrentShift) {
                case 1:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Sweep gym and PE105 with larg dust mop. Shop vac after";
                    eraTask4.innerHTML = "Laundry if needed";
                    eraTask5.innerHTML = "Check kristys bench and surrounding areas for trash, tree branches, and straighten butterfly/flag";
                    break;
                case 2:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Replace towels in fitness center/empty dirty towel bins";
                    eraTask4.innerHTML = "Clean all surfaces in PE102 and 103 after Doug and MJs class ends at 1pm";
                    eraTask5.innerHTML = "Check field house floor for debris and clean up if necessary";
                    break;
                case 3:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Replace towels and spray bottles in the fitness center if needed";
                    eraTask4.innerHTML = "Check public restrooms- replace soap and take out garbage if needed";
                    eraTask5.innerHTML = "Empty towel bin in PE105 and faculty locker rooms if needed";
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    fcTask1.innerHTML = "Check hallway between 102 and 103 for debris";
                    fcTask2.innerHTML = "30 towels in 105";
                    fcTask3.innerHTML = "10 towels in each faculty locker room and 10 small brown towels in the women's";
                    break;
                case 2:
                    fcTask1.innerHTML = "Wipe down and clean free weight area";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 3:
                    fcTask1.innerHTML = "Tidy welcome desk area- get rid of all clutter and move excessive belongings to the mail room";
                    fcTask2.innerHTML = "Wipe down and clean steppers/expresso bikes";
                    fcTask3.innerHTML = "";
                    break;
                case 4:
                    fcTask1.innerHTML = "Wipe down inside and outside handrails on the track";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    fhTask1.innerHTML = "Check track for water- empty garbage";
                    fhTask2.innerHTML = "Check, stock, and replace paper towels and spray bottles on the track";
                    fhTask3.innerHTML = "Wipe down hoist circuit- frames, handles, pins, and seats";
                    break;
                case 2:
                    fhTask1.innerHTML = "Wipe down all 3 stretching mats";
                    fhTask3.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
                case 3:
                    fhTask1.innerHTML = "Wipe down equipment under the stairs";
                    fhTask2.innerHTML = "Continue laundry";
                    fhTask3.innerHTML = "";
                    break;
                case 4:
                    fhTask1.innerHTML = "Wipe down all 3 stretching mats";
                    fhTask2.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
            }
            break;
        case 3:
            switch (eraCurrentShift) {
                case 1:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Replace towels in fitness center and empty dirty towel bins";
                    eraTask4.innerHTML = "Start laundry if needed";
                    eraTask5.innerHTML = "Sweep gym and 105 with large dust mop- vacuum mop when done";
                    break;
                case 2:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Sweep track stairs in fitness center";
                    eraTask4.innerHTML = "Check field house floor for debris";
                    eraTask3.innerHTML = "";
                    break;
                case 3:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Vacuum window sills in the fitness center";
                    eraTask4.innerHTML = "Vacuum under treadmills";
                    eraTask3.innerHTML = "";
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    fcTask1.innerHTML = "Check track for debris and water- empty trash cans";
                    fcTask2.innerHTML = "Check stock and replace paper towels and spray bottles on the track";
                    fcTask3.innerHTML = "Clean stretching mats";
                    break;
                case 2:
                    fcTask1.innerHTML = "Tidy welcome desk area- get rid of clutter and move all excessive personal items to the mail room";
                    fcTask2.innerHTML = "Wipe down ellpticals";
                    fcTask3.innerHTML = "";
                    break;
                case 3:
                    fcTask1.innerHTML = "Check stock and replace track towels and spray bottles";
                    fcTask2.innerHTML = "Clean the lockers- disinfect the surfaces and check inside for debris";
                    fcTask3.innerHTML = "";
                    break;
                case 4:
                    fcTask1.innerHTML = "Empty towel bins to PE105 and faculty locker rooms";
                    fcTask2.innerHTML = "Check kristy's bench for trash, branches, and straigten flag and butterfly";
                    fcTask3.innerHTML = "";
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    fhTask1.innerHTML = "Check hallway between 102 and 103 for debris";
                    fhTask2.innerHTML = "30 towels in PE105";
                    fhTask3.innerHTML = "10 towels in both faculty locker rooms, plus 10 little brown towels for the women's";
                    break;
                case 2:
                    fhTask1.innerHTML = "Wipe down dumbbells and kettlebells";
                    fhTask3.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
                case 3:
                    fhTask1.innerHTML = "Vacuum under treadmills";
                    fhTask2.innerHTML = "Clean Treadmills- wipe down frames, screens, and handles";
                    fhTask3.innerHTML = "";
                    break;
                case 4:
                    fhTask1.innerHTML = "Wipedown Lifetime fitness machins- bases, frames, pads, seats, and pins";
                    fhTask2.innerHTML = "Replace towels and spray bottles in the fitness center";
                    fhTask3.innerHTML = "";
                    break;
            }
            break;
        case 4:
            switch (eraCurrentShift) {
                case 1:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "30 towels in PE105 if needed";
                    eraTask4.innerHTML = "Start laundry";
                    eraTask5.innerHTML = "Dry mop gym and PE105 with large dust mop- vacuum after";
                    break;
                case 2:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Check public restrooms replace paper towels, soap, and trash if needed";
                    eraTask4.innerHTML = "Vacuum around ellipticals, steppers, rowers, expresso bikes";
                    eraTask5.innerHTML = "Clean all surfaces in PE102 and 103 after MJ's and Doug's class is over at 1pm";
                    break;
                case 3:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Check Kristy's bench for trash, branches, and straighten flag and butterfly";
                    eraTask4.innerHTML = "Vacuum outside perimeter of fitness center";
                    eraTask5.innerHTML = "Clean mirrors by the treadmills and ellipticals with windex and papertowels";
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    fcTask1.innerHTML = "Check track for debris and water-empty garbage";
                    fcTask2.innerHTML = "Wipe down lemond bikes";
                    fcTask3.innerHTML = "";
                    break;
                case 2:
                    fcTask1.innerHTML = "Replace towels in fitness center and dirty towel bins";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 3:
                    fcTask1.innerHTML = "Wipe down inside and outside handrails on the track";
                    fcTask2.innerHTML = "vacuum dust bunnies on track and in corners";
                    fcTask3.innerHTML = "";
                    break;
                case 4:
                    fcTask1.innerHTML = "Replace towels and spray bottles in fitness center if needed";
                    fcTask2.innerHTML = "Empty towel bin in PE105 and faculty locker rooms";
                    fcTask3.innerHTML = "";
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    fhTask1.innerHTML = "Check hallway between 102 and 103 for debris";
                    fhTask2.innerHTML = "10 towels in each faculty locker room and 10 small brown towels in women's";
                    fhTask3.innerHTML = "Wipe down rowers, recumbant bikes,stationary bikes, and expresso bikes- frams, seats, and knobs";
                    break;
                case 2:
                    fhTask1.innerHTML = "Wipe down ellipticals and stair steppers";
                    fhTask2.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
                case 3:
                    fhTask1.innerHTML = "Replace towels and spray bottles in the fitness center";
                    fhTask2.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
                case 4:
                    fhTask1.innerHTML = "Clean stretching mats";
                    fhTask2.innerHTML = "";
                    fhTask2.innerHTML = "";
                    break;
            }
            break;
        case 5:
            switch (eraCurrentShift) {
                case 1:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Start laundry if needed";
                    eraTask4.innerHTML = "Clean stretching mats";
                    eraTask5.innerHTML = "Dry mop the gym and PE105-vacuum dry mop";
                    break;
                case 2:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Check Kristy's bench for garbage, branches, and straighten flag and butterfly";
                    eraTask4.innerHTML = "Check and Update first aid kits";
                    eraTask5.innerHTML = "Wipe down cable cross, assisted pull up, and glue/hip machines- frames,pads, and pins";
                    break;
                case 3:
                    eraTask1.innerHTML = "Check facility access list for gymnasium and tear down/set up as appropriate";
                    eraTask2.innerHTML = "Check facility access list for field house and tear down/set up as appropriate";
                    eraTask3.innerHTML = "Continue laundry";
                    eraTask4.innerHTML = "Check public restrooms";
                    eraTask5.innerHTML = "Replace Towels and spray bottles";
                    break;
            }

            switch (fcCurrentShift) {
                case 1:
                    fcTask1.innerHTML = "Check Track for debris and water- empty trash cans";
                    fcTask2.innerHTML = "Check stock and replace paper towels and spraybottles on the track ";
                    fcTask3.innerHTML = "";
                    break;
                case 2:
                    fcTask1.innerHTML = "Wipe down benches and bars in free weight area";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 3:
                    fcTask1.innerHTML = "replace towels in the fitness center and empty dirty towel bins";
                    fcTask2.innerHTML = "";
                    fcTask3.innerHTML = "";
                    break;
                case 4:
                    fcTask1.innerHTML = "Empty towel bins in PE105 and faculty locker rooms";
                    fcTask2.innerHTML = "Wipe out cubbies in fitness center";
                    fcTask3.innerHTML = "";
                    break;
            }

            switch (fhCurrentShift) {
                case 1:
                    fhTask1.innerHTML = "Check hallway between 102 and 10r for debris";
                    fhTask2.innerHTML = "30 towels in 105";
                    fhTask3.innerHTML = "10 towels in facult locker rooms and 10 little brown towels in women's";
                    break;
                case 2:
                    fhTask1.innerHTML = "Wipe down expresso bikes- handles, frames, and pads";
                    fhTask2.innerHTML = "";
                    fhTask3.innerHTML = "";
                    break;
                case 3:
                    fhTask1.innerHTML = "Continue laundry";
                    fhTask2.innerHTML = "Wipe down hoist circuit- handles, frames, pins, and pads";
                    fhTask3.innerHTML = "";
                    break;
                case 4:
                    fhTask1.innerHTML = "Sweep/vacuum around lifetime fitness machines and lemond bikes";
                    fhTask2.innerHTML = "Take lost and found to security";
                    fhTask3.innerHTML = "";
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

    altTextColors();
}

function fhFirstChores() {//first shift chores
    fhCurrentShift = 1;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fhSecondChores() {//second shift chores
    fhCurrentShift = 2;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fhThirdChores() {//third shift chores
    fhCurrentShift = 3;

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fhFourthChores() {//fourth shift chores
    fhCurrentShift=4

    document.getElementById("fhDropdown").style.display = "none";//closes dropdown
    document.getElementById("fhDropdownShift").innerHTML = "3:30am-7:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}

//fitness center chores display
function fcDropdown() {
    document.getElementById("fcDropdown").style.display = "block";//opens dropdown

    altTextColors();
}

function fcFirstChores() {
    fcCurrentShift = 1;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "6:30am-9:30am";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fcSecondChores() {
    fcCurrentShift = 2;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "9:30am-12:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fcThirdChores() {
    fcCurrentShift = 3;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "12:30pm-3:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function fcFourthChores() {
    fcCurrentShift = 4;

    document.getElementById("fcDropdown").style.display = "none";//closes dropdown
    document.getElementById("fcDropdownShift").innerHTML = "3:30pm-7:30pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}

//alternating text colors function
function altTextColors() {
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

//equipment room aid chore display
function eraDropdown() {
    document.getElementById("eraDropdown").style.display = "block";//opens dropdown

    altTextColors();
}

function eraFirstChores() {
    eraCurrentShift = 1;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "8am-12pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
}
function eraSecondChores() {
    eraCurrentShift = 2;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "12pm-3pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);

}
function eraThirdChores() {
    eraCurrentShift = 3;

    document.getElementById("eraDropdown").style.display = "none";//closes dropdown
    document.getElementById("eraDropdownShift").innerHTML = "3pm-5pm";//changes dropdown button to time slot

    //changes chores based on selected shift
    chores(dayOfWeek, eraCurrentShift, fcCurrentShift, fhCurrentShift);
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