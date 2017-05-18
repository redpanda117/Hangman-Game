var wordBank = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];

var abc = [
  "a","b","c","d","e","f","g",
  "h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u",
  "v","w","x","y","z"
];

var txtguess = document.getElementById("guesses-left");
var txtBlank = document.getElementById("word-blanks");
var txtwrong = document.getElementById("wrong-guesses");
var txtwinner = document.getElementById("win-counter");
var txtloser = document.getElementById("loss-counter");

var randomWord = "";
var lettersInRandomWord = [];
var numBlanks = 0;
var filledBlanks = [];
var wrongGuesses = [];
var win = 0;
var lost = 0;
var numGuesses = 7;

function Start() {
 
  numGuesses = 7;

  filledBlanks = [];
  
  wrongGuesses = [];

  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  
  lettersInRandomWord = randomWord.split("");
  
  numBlanks = lettersInRandomWord.length;

  console.log(randomWord);

  
  for (var i = 0; i < numBlanks; i++) {
    filledBlanks.push("_");
  }  
  console.log(filledBlanks);
  
  txtguess.innerHTML = numGuesses;

  txtBlank.innerHTML = filledBlanks.join(" ");

  txtwrong.innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
  var letterInWord = false;
  for (i = 0; i < numBlanks; i++) {
    if (randomWord[i] === letter) {
      letterInWord = true;
    }
  }
  
  if (letterInWord) {
    for (i = 0; i < numBlanks; i++) {
      if (randomWord[i] === letter) {
        filledBlanks[i] = letter;
      }
    }
    console.log(filledBlanks);
  }


  else {
    wrongGuesses.push(letter);
    numGuesses--;
  }
  console.log("Guess Left" + " " +numGuesses);
}

function roundComplete() {

  txtguess.innerHTML = numGuesses;
  
  txtBlank.innerHTML = filledBlanks.join(" ");
  
  txtwrong.innerHTML = wrongGuesses.join(" ");

  
  if (lettersInRandomWord.toString() === filledBlanks.toString()) {
    win++;

    txtwinner.innerHTML = win;
    Start();
  }
     
  
  else if (numGuesses === 0) {
    
    lost++;

    txtloser.innerHTML = lost;

    Start();
  }
    console.log("wins" + " " + win);
    console.log("lose" + " " + lost);
}


Start();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  var lettersOnly = abc;
  var double = wrongGuesses; 

  if (double.indexOf(letterGuessed) !== -1 ){
    alert("You already guess this letter please pick a different letter.");
  }
  else if(lettersOnly.indexOf(letterGuessed)!==-1){
    checkLetters(letterGuessed);
  }

  roundComplete();
};