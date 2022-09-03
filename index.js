

buttonColours=["red","blue","green","yellow"];

gamePattern =[];

var userClickedPattern = [];


var started = false

var level = 0








document.getElementById('play-btn').addEventListener("click", function() {

  nextSequence();


});








function nextSequence(){
  
    level +=1;
    document.getElementById('level-title').innerHTML='Level '+level;

    let randomNumber = Math.floor(Math.random()*4)
    // Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber



    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour) 
    // add new colour to gamePattern
    

    // document.getElementById("red").classList.add('image');
    // setTimeout(function(){document.getElementById("red").classList.remove('image');}, 1000);
    
    document.getElementById(randomChosenColour).classList.add('fade');
    setTimeout(function(){document.getElementById(randomChosenColour).classList.remove('fade');}, 230);
    // var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    // audio.play();

    playSound(randomChosenColour);
    // return audio

    
    console.log('game: '+gamePattern+ ', the latest: '+gamePattern[gamePattern.length-1])



}



// console.log(nextSequence())


document.getElementById('blue').addEventListener("click", function(){

    userChosenColour = 'blue'
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)
    document.getElementById('blue').classList.add('pressed');
    setTimeout(function(){document.getElementById('blue').classList.remove('pressed');}, 100);

    console.log('user: '+userClickedPattern+', the latest: '+userClickedPattern[userClickedPattern.length-1])

    if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = []

      }

    } else {

      console.log("wrong");
      failTransition();

    }


  });


document.getElementById('red').addEventListener("click", function(){

    userChosenColour = 'red'
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)
    document.getElementById('red').classList.add('pressed');
    setTimeout(function(){document.getElementById('red').classList.remove('pressed');}, 100);

    
    console.log('user: '+userClickedPattern+', the latest: '+userClickedPattern[userClickedPattern.length-1])


    if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]) {

      console.log("success");


      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = []

      }

    } else {

      console.log("wrong");
      failTransition();

    }



  });
document.getElementById('green').addEventListener("click", function(){

    userChosenColour = 'green'
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)
    document.getElementById('green').classList.add('pressed');
    setTimeout(function(){document.getElementById('green').classList.remove('pressed');}, 100);

    console.log('user: '+userClickedPattern+', the latest: '+userClickedPattern[userClickedPattern.length-1])



    if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]) {

      console.log("success");


      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = []

      }

    } else {

      console.log("wrong");
      failTransition();

    }


  });

document.getElementById('yellow').addEventListener("click", function(){
    
    userChosenColour = 'yellow'
    userClickedPattern.push(userChosenColour);

    document.getElementById('yellow').classList.add('pressed');
    setTimeout(function(){document.getElementById('yellow').classList.remove('pressed');}, 100);

    console.log('user: '+userClickedPattern+', the latest: '+userClickedPattern[userClickedPattern.length-1])


    if (gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]) {

      console.log("success");



      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
        userClickedPattern = []

      }

    } else {

      console.log("wrong");
      failTransition();

      

    }



  });

function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
    
}

function failTransition(){
  
      document.body.className = "game-over";
      setTimeout(function(){document.body.className = "body"}, 100)
      document.getElementById('level-title').innerHTML='Game Over!';
      playSound('wrong')
      document.getElementById('play-btn').innerHTML='Refresh page to restart.';
}