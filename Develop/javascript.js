// Create Calendar/Planner
console.log(moment().format("dddd, MMMM Do YYYY h:mm HH"));
var currDay = moment().format("dddd, MMMM Do YYYY h:mm HH");
console.log(currDay);
var currHour = parseInt(currDay.split(" ")[4].split(":")[0]);
console.log("Current hour: " + currHour);


   var timeArray = [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];  
  // ELEMENT FOR LOOP
  for (var i = 0; i < 9; i++) {
    var div1 = $("<div>");
    div1.attr("class", "input-group time-block");

    var div2 = $("<div>");
    div2.attr("class", "input-group-prepend hour");

    var span = $("<span>");
    span.attr("class", "input-group-text");
    span.attr("id", "time");

    var textArea = $("<textarea>");
    if (timeArray[i] < currHour) {
      // PAST TIME
      textArea.attr("class", "form-control description past");
      console.log(textArea.attr("class", "form-control description past"));
    }
    // PRESENT TIME
    if (currHour == timeArray[i]) {
      textArea.attr("class", "form-control description present");
      console.log(textArea.attr("class", "form-control description present"));
    }
    // FUTURE TIME
    if (timeArray[i] > currHour) {
      textArea.attr("class", "form-control description future");
      console.log(textArea.attr("class", "form-control description future"));
    }
    }
    textArea.attr("class", "form-control row description past");
    textArea.attr("aria-label", "With textarea");
    textArea.attr("id", timeArray[i]);

    var div3 = $("<div>");
    div3.attr("class", "input-group-append").value;

    var btn = $("<button>");
    btn.attr("class", "btn btn-outline-secondary saveBtn");
    btn.attr("type", "button");
    btn.text("Save");
    // Append divs:
    div2.append(span);
    div3.append(btn);
    div1.append(div2);
    div1.append(textArea);
    div1.append(div3);
    // AM or PM
    if (timeArray[i] <= 12) {
      if (timeArray[i] == 12) {
        span.text(timeArray[i] + "PM");
      } else {
        span.text(timeArray[i] + "AM");
      }
    } else {
      span.text(timeArray[i] - 12 + "PM");
    }
    $(".container").append(div1);
  }
//   DISPLAY DATE HEADER
  var displayDay = moment().format("MMM Do");
  console.log(displayDay)
  $("#currentDay").append(displayDay);
// *******THIS CODE IS WORKING, WILL DISPLAY TEXT AREA IN LOCALSTORAGE BUT NOT GOING THROUGH EACH BUTTON
$("button").on("click", function () {
  var info = $(this).parent("div").prev().val();
  console.log(info);
  console.log($(this).parent("div").prev().attr("id"));
  localStorage.setItem($(this).parent("div").prev().attr("id"), info);
});

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
console.log(timeArray[i] - currHour);



