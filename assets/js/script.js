var planner = $('#planner');
let hours = new Array(13);
let timeOfDay = "AM";

//have x be the time of day, i.e. 9am or 1pm or whatever.  Then have timeOfDay switch to "PM" after noon
for (x = 9; x < hours.length; x++) {
    if (x === 12) {
        timeOfDay = "PM"
    }
    planner.append(`<p>${x}${timeOfDay}</p>`)
    if (x === 12) {
        x = 0
        hours = new Array(6);
    }
}

console.log(this);
console.log(hours.length);
