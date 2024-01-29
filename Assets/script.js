// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
    // Get the current date using Day.js
    var currentDate = dayjs().format('MMM DD, YYYY');
  
    // Display the current date in the header
    $('.header-date').text(currentDate);
  
    // Loop through each time-block
    $(".time-block").each(function() {
      // Gets the id of the current time-block
      var timeBlockId = $(this).attr("id");
  
      // Get the user input from localStorage using the id as the key
      var userInput = localStorage.getItem(timeBlockId);
  
      // Set the value of the textarea element in the current time-block
      $(this).find("textarea").val(userInput);
      // Get the current hour
  
      // Get the block hour from the timeBlockId
      var blockHour = parseInt(timeBlockId.split("-")[1]);
      var currentHour = dayjs().hour()
  
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  
    $(".saveBtn").on("click", function() {
      var timeBlockId = $(this).parent(".time-block").attr("id");
  
      // Save user input in local storage using the id as a key
      var userInput = $(this).siblings("textarea").val();
      localStorage.setItem(timeBlockId, userInput);
      
    });
  });
  