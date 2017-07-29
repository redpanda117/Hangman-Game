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

//get things to show on html
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
    
    images(randomWord);
}

function images(randomWord){
   var hint = $("<img>");     
    if(randomWord === "mercury"){
    hint.attr("src", "assets/images/Mercury.jpg");
    hint.addClass("hintPicture");    
        $("#hint").append(hint);
        console.log("mercury img");
}else if(randomWord === "venus"){
hint.attr("src", "assets/images/venus.jpg");
$("#hint").append(hint);
    hint.addClass("hintPicture");
    console.log("venus img");
}else if(randomWord === "earth"){
    hint.attr("src", "assets/images/earth.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("earth img");
}else if(randomWord === "mars"){
    hint.attr("src", "assets/images/mars.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("mars img");
}else if(randomWord === "jupiter"){
    hint.attr("src", "assets/images/jupiter.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("jupiter img");
}else if(randomWord === "saturn"){
    hint.attr("src", "assets/images/saturn.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("saturn img");
}else if(randomWord === "uranus"){
    hint.attr("src", "assets/images/uranus.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("uranus img");
}else{
    hint.attr("src", "assets/images/neptune.jpg");
    hint.addClass("hintPicture");
    $("#hint").append(hint);
    console.log("neptune img");
}
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
    
    $("#hint").empty();
    Start();
    
  }
     
  
  else if (numGuesses === 0) {
    
    lost++;

    txtloser.innerHTML = lost;

    $("#hint").empty();
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
    console.log("repeated letter");
  }
  else if(lettersOnly.indexOf(letterGuessed) !== -1){
    checkLetters(letterGuessed);
    console.log("YEP it's a letter")
  }

  roundComplete();
};