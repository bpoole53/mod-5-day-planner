var planner = $('#planner');
let hours = new Array(13);
let timeOfDay = "AM";
var currentDate = document.getElementById('current-date');
let input = 1;

currentDate.textContent = dayjs()
//have x be the time of day, i.e. 9am or 1pm or whatever.  Then have timeOfDay switch to "PM" after noon
for (x = 9; x < hours.length; x++) {
    if (x === 12) {
        timeOfDay = "PM"
    }
    planner.append(`<div class='rows'>
                        <p id="day${x}${timeOfDay}">${x}${timeOfDay}</p>
                        <p id="input${input}">Input Text</p>
                        <p id="button${input}">Save Button</p>
                    </div>`);
                    input++;
    if (x === 12) {
        x = 0
        hours = new Array(6);
    }
}

console.log(this);
console.log(hours.length);
console.log(currentDate);
console.log(string);
