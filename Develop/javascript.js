// Create Calendar/Planner
console.log(moment().format("dddd, MMMM Do YYYY h:mm HH"));
var currDay = moment().format("dddd, MMMM Do YYYY h:mm HH");
console.log(currDay);
var currHour = parseInt(currDay.split(" ")[4].split(":")[0]);
console.log("Current hour: " + currHour);
var getList = localStorage.getItem("To-do-list")
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
  var userArray = ["", "", "", "", "", "", "", "", "",];
  //   Create elements on page
  for (var i = 0; i < 9; i++) {
    var div1 = $("<div>");
    div1.attr("class", "input-group time-block");
    var div2 = $("<div>");
    div2.attr("class", "input-group-prepend hour");
    var span = $("<span>");
    span.attr("class", "input-group-text");
    span.attr("id", "time");
    var textArea = $("<textarea>");
    textArea.attr("class", "form-control row description past");
    textArea.attr("aria-label", "With textarea");
    textArea.attr("id", `${i}`);
    var div3 = $("<div>");
    div3.attr("class", "input-group-append").value;
    var btn = $("<button>");
    btn.attr("class", "btn btn-outline-secondary saveBtn");
    btn.attr("type", "button");
    btn.attr("id", `${i}`);
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
    localStorage.setItem("userArray", JSON.stringifY(userArray));
  });
// var futureTime = currHour +;
// console.log(futureTime + "time");
// **********
  //   Time blocks change depending on current time - NOT WORKING
  function futureBlockColor() {
    var futureTime = currHour + 1 
  //   var futureColor = $("textarea").css("background-color", "green")
    console.log(futureTime + "time");
    for (var i = futureTime; i > currHour;  ) {
        var futureColor = $("textarea").css("background-color", "green")
      textarea.classList.add(futureColor);
      }
  }
  futureBlockColor();

