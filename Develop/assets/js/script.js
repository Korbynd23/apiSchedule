var timeColor = document.getElementById(".timeColor")
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17] 
var currentTime = moment().format("H")
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, hA'));
var saveBtn = document.querySelectorAll(".saveBtn") 
var msgArea = document.querySelectorAll(".msgArea")
var timeRow = document.getElementById("id")

console.log(msgArea)
console.log(saveBtn)
for (i = 0; i < msgArea.length; i++) {
   var thisHour = hoursArray[i]
   console.log(thisHour + "vs" + currentTime)
   if (thisHour > currentTime) {
      msgArea[i].classList.add("past")
   } else if (thisHour < currentTime) {
      msgArea[i].classList.add("future")
   } else {
   msgArea[i].classList.add("present")
   }
   saveBtn[i].addEventListener('click', function(event) {
      var savedText = event.target.previousElementSibling.value
      console.log(savedText)
      localStorage.setItem(event.target.id, savedText)
   })
   var prevText = localStorage.getItem(hoursArray[i])
   msgArea[i].value = prevText
}

