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
                                <form id = "submit${input}">    
                                    <input type="text" id="input${input}" placeholder="Enter Event">
                                </form>    
                            </div>    
                            <div class="buttons">
                                <button form="submit${input}" id="button${input}" type="submit">&#x1F4BE;
                            </div>                   
                        </div>`);
    }else{    
        planner.append(`<div class='rows'>
                            <div class='days'>
                                <p id="day${x}${timeOfDay}">${x}${timeOfDay}</p>
                            </div>
                            <div class='input'>
                                <form id = "submit${input}">    
                                    <input type="text" id="input${input}" placeholder="Enter Event">
                                </form>    
                            </div>    
                            <div class="buttons">
                                <button form="submit${input}" id="button${input}" type="submit">&#x1F4BE;
                            </div>
                        </div>`);
                    input++;
     }                
    if (x === 12) {
        x = 0
        hours = new Array(6);
    }
}

function submitInit() {
    $('#submit1').submit(function(event) {
        event.preventDefault();
        /*localStorage.clear();*/
        let submission = $('#input1').val();

        console.log(submission);

        saveMessage.textContent = "Event added to local storage &#x2714"


  
    
        /*$('#table-form tbody').append(newRow);
 
        showInput();*/
    });
}

function showInput() {
    
}

submitInit();
console.log(this);
console.log(hours.length);
console.log(currentDate);
