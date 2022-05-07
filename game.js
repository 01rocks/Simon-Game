var gamePattern = [];
var randomNumber;
var randomChosenColor;
var userClickedPattern = [];
var userChosenColor;
var name;
var level;
level = 0;
var a = 0;

var buttonColors = ["green", "red", "yellow", "blue"];
var no_of_clicks;

function nextSequence() //iska kaam hai ek random se button ka pattern show karna(Dhyan rhe ye sirf ek button ka pattern show karega)
{
  randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut().fadeIn();
  name = randomChosenColor;
  playSound(name);
  $("h1").html("level " + level);
  level = level + 1;
    console.log("level "+level);



  console.log( randomChosenColor + " color dikha");
}

$(".btn").click(function(e) {
  if(level>0)
  {
  userChosenColor = e.target.id;
  console.log(e.target.id + " color click hua");

  userClickedPattern.push(userChosenColor);

  name = userChosenColor;
  playSound(name);
  currentColor = userChosenColor;
  animatePress(currentColor);


    checkAnswer();
  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");

    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 100);


  }


});

function playSound(name) {
  switch (name) {
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();

      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();

      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();

      break;
    default:

  }

}

function animatePress(currentColor) {

  $("." + currentColor).addClass("pressed");

  setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
  }, 100);

}

//start the game


$("body").keypress(function() {
  console.log(event.key);
  if (level === 0) {
    if (event.key === "a" || event.key === "A") {
      console.log("game start ho gya");
      nextSequence();
      



    }
  }
  if (level === 0) {
    if (event.key !== "a" && event.key !== "A") {
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");

      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 100);

    }
  }
});

function checkAnswer() {
  var length = userClickedPattern.length;
  for (var i = 0; i < length; i++) {
    console.log("user clicked pattern array " + userClickedPattern);
    console.log("game pattern array " + gamePattern);
    console.log("value of i"+i);
    if (userClickedPattern[i] !== gamePattern[i]) //user wrong key dbayega to game over ho jayega
    {
      $("h1").html("Game Over");
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      console.log("wrong");
        console.log(i);
        $("body").addClass("game-over");

        setTimeout(() => {
          $("body").removeClass("game-over");
        }, 100);

    }


    if (userClickedPattern[i] === gamePattern[i] && i === (length - 1)) //agar user correct pattern click karega to usko new pattern dikhaya jayega
    {


       if(length===level)
       {
         console.log("user clicked pattern khali ho gya")
         userClickedPattern = [];
         console.log("next sequence call hua");

      setTimeout(nextSequence, 1000);
    }
      console.log("success");
      console.log(i);

    }

  }


}
