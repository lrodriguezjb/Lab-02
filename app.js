'use strict';
var counter = 0;
var onlineUser = prompt('What is your name?');
alert('Hello '+ onlineUser + ' welcome to the guessing game!');

function hobbie(){
  var whatIsHobbie = prompt('Do you know if I like to make Music');
  whatIsHobbie = whatIsHobbie.toLowerCase();
  if(whatIsHobbie === 'yes' || whatIsHobbie === 'y') {
    // console.log('Awesome you guessed right!'); //
    alert('Awesome you guessed right!');
    counter++;
  } else {
    // console.log('You Guessed Wrong my hobbie is MUSIC!'); //
    alert('You Guessed Wrong my hobbie is MUSIC!');
  }
}

function language(){
  var otherLanguage = prompt('Other than English do I speak Spanish?');
  otherLanguage = otherLanguage.toLowerCase();
  if(otherLanguage === 'yes' || otherLanguage === 'y') {
    // console.log('Gracias! You are correcto!'); //
    alert('Gracias! You are Correcto!');
    counter++;
  } else {
    // console.log('You Guessed Wrong I speak Spanish'); //
    alert('You Guessed Wrong I Speak Spanish');
  }
}

function codeBreaker(){
  var militaryBranch = prompt('Was I in the Army?');
  militaryBranch = militaryBranch.toLowerCase();
  if(militaryBranch === 'no' || militaryBranch === 'n') {
    // console.log('Hooyah! You are Correct'); //
    alert('Hooyah! You are Correct');
    counter++;
  } else {
    // console.log('You Guessed Wrong I Served in the Navy'); //
    alert('You Guessed Wrong I Served In the Navy');
  }
}

function food(){
  var favoriteFood = prompt('Is Pizza my Favorite?');
  favoriteFood = favoriteFood.toLowerCase();
  if(favoriteFood === 'yes' || favoriteFood === 'y') {
    // console.log('Correct!! Pizza is one of the best things in the world! and my Favorite!'); //
    alert('Correct!! Pizza is one of the best things in the world! and my Favorite!');
    counter++;
  } else {
    // console.log('You Guessed Wrong I actually love Pizza'); //
    alert('You Guessed Wrong I actually love Pizza');
  }
}

function color(){
  var favoriteColor = prompt('Is my Favorite Color Purple?');
  favoriteColor = favoriteColor.toLowerCase();
  if(favoriteColor === 'no' || favoriteColor === 'n') {
    // console.log('Correct! My Favorite Color is Green!'); //
    alert('Correct! My Favorite Color is Green!');
    counter++;
  } else {
    // console.log('You Guessed Wrong! My favorite Color is Green'); //
    alert('You Guessed Wrong! My Favorite Color is Green');
  }
}

function numberGuesser(numberGuess){
  var i = 0;
  while (i <= 3) {
    i++;
    var userAnswer = prompt('Guess a Number');
    userAnswer = parseInt(userAnswer);
    if (userAnswer > numberGuess) {
      alert('Guessed too high');
    }
    else if (userAnswer < numberGuess) {
      alert('Guessed too low');
    }
    else if (userAnswer === numberGuess) {
      alert('Correct!! you Got it right!');
      counter++;
      break;
    }
    if (i === 3) {
      alert('Oops you ran out of tries');
      break;
    }
  }
}

function foodChoice(foodOne,foodTwo,foodThree,foodFour,foodFive,foodSix){
  var f = 0;
  var foodChoice = [foodOne,foodTwo,foodThree,foodFour,foodFive,foodSix];
  while (f <= 6) {
    f++;
    var foodAnswer = prompt('Guess what food from which countries Ive had!');
    if (foodChoice.includes(foodAnswer)){
      alert('Correct!! I Love ' + foodAnswer);
      counter++;
      break;
    } else {
      alert('Not Correct at all');
    }
    if (f === 6) {
      alert('Ooops you ran out of tries! but my favorite foods are ' + foodChoice);
      break;
    }
  }
}

hobbie();
language();
codeBreaker();
food();
color();
numberGuesser(19);
foodChoice('dominican food','indian food','italian food','mexican food','thai food','chinese food');

alert('Your total score of correct answers is: ' + counter);