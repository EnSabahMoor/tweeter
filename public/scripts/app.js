/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
  console.log( "ready!" );

  document.addEventListener("dblclick", (event) => {
    console.log(event);
  });
  
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("Form Submitted");
  });
  
});


