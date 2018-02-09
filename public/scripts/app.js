/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  console.log("ready!");

  document.addEventListener("dblclick", (event) => {
    console.log(event);
  });

  $("form").submit(function (event) {
    event.preventDefault();
  });

  function createTweetElement(tweet) {
    $("body").after("Test");
  }

  createTweetElement("Testing");

  $.ajax({
    url: "http://localhost:8080/tweets",
    method: "GET"
  }).done(function (serverData) {
    postTweets(serverData);
  });

  function postTweets (tweets) {
    tweets.forEach(function(tweet) {
      $('#timeline').append(`<article class="tltweet">
      <header class="user">
        <img class="avi" src="${tweet.user.avatars.small}">
        <h2 class="username">${tweet.user.name}</h2>
        <span class="atname">${tweet.user.handle}<span>
      </header>
     <div class="tlbody">${tweet.content.text}</div>
     <div class="tlfooter">${tweet.created_at}
     <div class="icons">
     <i class="fa fa-flag" aria-hidden="true"></i>
     <i class="fa fa-retweet" aria-hidden="true"></i>
     <i class="fa fa-heart" aria-hidden="true"></i> 
     </div>    
     </div>
     

    </article>`)
    });
  }
  
  

});


