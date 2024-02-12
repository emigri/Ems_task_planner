// * Display the current day at the top of the calender when a user opens the planner.

$("#currentDay").text(dayjs().format("DD MMM YYYY [at] h:mm:ss a"));
setInterval(function () {
  $("#currentDay").text(dayjs().format("DD MMM YYYY [at] h:mm:ss a"));
}, 1000);

 
// * Present timeblocks for standard business hours when the user scrolls down.

var businessHours = [
  {time: "9 AM",
    event: ""},
  {time: "10 AM",
    event: ""},
  {time: "11 AM",
    event: ""},
  {time: "12 PM",
    event: ""},
  {time: "1 PM",
    event: ""},
  {time: "2 PM",
    event: ""}, 
  {time: "3 PM",
    event: ""},
  {time: "4 PM",
    event: ""},
  {time: "5 PM",
    event: ""},    
]


// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

businessHours.forEach(function(businessHour,i) {
  currentHour = businessHour.time;

})

// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// ![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)
