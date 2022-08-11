var timeColor = document.getElementById(".timeColor")

var currentTime = moment()
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, hA'));

var saveBtn = $("#saveBtn");
console.log("")

function timeBlockColor() {
   var hour = moment().hours();
   console.log(hour)

   $(".timeColor").each(function() {
       var currHour = parseInt($(this).attr("id"));

       if (currHour > hour) {
           $(this).addClass("future");
       } else if (currHour === hour) {
           $(this).addClass("present");
       } else {
           $(this).addClass("past");
       }
       console.log(this)
   })
};

timeBlockColor();

// $("#9.description").val(localStorage.getItem("9"));
// $("#10.description").val(localStorage.getItem("10"));
// $("#11.description").val(localStorage.getItem("11"));
// $("#12.description").val(localStorage.getItem("12"));
// $("#13.description").val(localStorage.getItem("13"));
// $("#14.description").val(localStorage.getItem("14"));
// $("#15.description").val(localStorage.getItem("15"));
// $("#16.description").val(localStorage.getItem("16"));
// $("#17.description").val(localStorage.getItem("17"));