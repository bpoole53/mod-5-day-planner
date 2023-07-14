var planner = $('#planner');
let hours = new Array(13);
let timeOfDay = "AM";
var currentDate = document.getElementById('current-date');
let input = 1;
let saveMessage = document.getElementById('save-message');

currentDate.textContent = dayjs();
//have x be the time of day, i.e. 9am or 1pm or whatever.  Then have timeOfDay switch to "PM" after noon
for (x = 9; x < hours.length; x++) {
    if (x === 12) {
        timeOfDay = "PM"
    }
    if (x < 10) {
        planner.append(`<div class='rows'>
                            <div class='days'>
                                <p id="day${x}${timeOfDay}">&nbsp&nbsp${x}${timeOfDay}</p>
                            </div>
                            <div class='input'>    
                                <p id="input${input}">Input Text</p>
                            </div>
                            <div class='buttons'>
                                <button id="button${input}">&#x1F4BE;</p>
                            </div>
                        </div>`);
    }else{    
    planner.append(`<div class='rows'>
                        <div class='days'>
                            <p id="day${x}${timeOfDay}">${x}${timeOfDay}</p>
                        </div>
                        <div class='input'>    
                            <p id="input${input}">Input Text</p>
                        </div>
                        <div class='buttons'>
                            <button id="button${input}" type="submit">&#x1F4BE;</p>
                        </div>
                    </div>`);
                    input++;
     }                
    if (x === 12) {
        x = 0
        hours = new Array(6);
    }
}

console.log(this);
console.log(hours.length);
console.log(currentDate);
