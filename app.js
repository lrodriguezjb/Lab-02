'use strict';
var onlineUser = prompt('What is your name?');
alert('Hello '+ onlineUser + ' welcome to the guessing game!');

var whatIsHobbie = prompt('Do you know if I like to make Music');
whatIsHobbie = whatIsHobbie.toLowerCase();
if(whatIsHobbie === 'yes' || whatIsHobbie === 'y') {
  // console.log('Awesome you guessed right!'); //
  alert('Awesome you guessed right!');
} else {
  // console.log('You Guessed Wrong my hobbie is MUSIC!'); //
  alert('You Guessed Wrong my hobbie is MUSIC!');
}

var otherLanguage = prompt('Other than English do I speak Spanish?');
otherLanguage = otherLanguage.toLowerCase();
if(otherLanguage === 'yes' || otherLanguage === 'y') {
  // console.log('Gracias! You are correcto!'); //
  alert('Gracias! You are Correcto!');
} else {
  // console.log('You Guessed Wrong I speak Spanish'); //
  alert('You Guessed Wrong I Speak Spanish');
}

var militaryBranch = prompt('Was I in the Army?');
militaryBranch = militaryBranch.toLowerCase();
if(militaryBranch === 'no' || militaryBranch === 'n') {
  // console.log('Hooyah! You are Correct'); //
  alert('Hooyah! You are Correct');
} else {
  // console.log('You Guessed Wrong I Served in the Navy'); //
  alert('You Guessed Wrong I Served In the Navy');
}

var favoriteFood = prompt('Is Pizza my Favorite?');
favoriteFood = favoriteFood.toLowerCase();
if(favoriteFood === 'yes' || favoriteFood === 'y') {
  // console.log('Correct!! Pizza is one of the best things in the world! and my Favorite!'); //
  alert('Correct!! Pizza is one of the best things in the world! and my Favorite!');
} else {
  // console.log('You Guessed Wrong I actually love Pizza'); //
  alert('You Guessed Wrong I actually love Pizza');
}

var favoriteColor = prompt('Is my Favorite Color Purple?'); 
favoriteColor = favoriteColor.toLowerCase();
if(favoriteColor === 'no' || favoriteColor === 'n') {
  // console.log('Correct! My Favorite Color is Green!'); //
  alert('Correct! My Favorite Color is Green!');
} else {
  // console.log('You Guessed Wrong! My favorite Color is Green'); //
  alert('You Guessed Wrong! My Favorite Color is Green');
}

