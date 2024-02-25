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

businessHours.forEach(function(businessHour, i) {
  var timeblocks = 
  // create HTML timeblocks and append to HTML file
'<div class="time-block" id="'+ i +'">' +
'<div class = "row input-group">' +
  '<div class="col input-group hour">' + businessHour.time +'</div>' +
    '<textarea class="form-control activity-' + i + ' ' + blockColour(businessHour.time) +'"  type="text"></textarea>' +
      '<div class="col input-group">' +
        '<button class="saveBtn btn-block" type="submit">' +
          '<i class="fa-solid fa-floppy-disk"></i>' +
        '</button>' +
      '</div>' +
  '</div>'+  
'</div>' 
$(".container").append(timeblocks);

})

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

function blockColour(time) {

  var eventTime = parseInt(time.split(' ')[0]);
  var currentHour = parseInt(dayjs().format('H'));

    if (currentHour < eventTime){
      return "future";
    } else if (currentHour > eventTime){
      return "past";
    } else {
      return "present";
    }

    }

//For each button that is clicked, update event key of businesshours obj

  $(".saveBtn").each(function(i) {
    $(this).click(function(){
        var text = $("textArea").eq(i).val();
        businessHours[i].event = text
        
        var savedPlans = businessHours.filter(function (plan){
          return plan.event !== "";
        }) // filtered obj to only show plans that have been saved 

      if (savedPlans == ""){
      alert ("Please write a plan")} 
      else {
      alert ("This has been saved");
      localStorage.setItem('timeActivity', JSON.stringify(savedPlans));
      }

      console.log(localStorage)

    })
  })