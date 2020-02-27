var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var start = 0;
var level = 0;

$(document).keypress(function() {
  if(!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = 1;
  }
});

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function() {
  // Store the id of the button that got clicked
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  // Passing in the index of the last answer in the user's sequence
  checkAnswer(userClickedPattern.length-1);
});

// The color sequence the program generates
function nextSequence(){
  // Reset array for the next level
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Use jQuery to select the button with the same "id" as the randomChosenColour
  // Use jQuery to animate a flash to the button selected
  $("#" + randomChosenColour).fadeOut(500).fadeIn(500);

  playSound(randomChosenColour);
}

function checkAnswer(order) {
  if(userClickedPattern[order] == gamePattern[order]) {
    console.log("Success!");
    // Check whether the user finishes he/her sequence and call nextSequence()
    if(userClickedPattern.length == gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        }, 1000);
    }
  }
  else {
    console.log("Wrong!");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function playSound(name) {
  // Use Javascript to play the sound for the button colour selected
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  // remove the pressed class after 200 milliseconds
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  gamePattern = [];
  start = 0;
  level = 0;
}
