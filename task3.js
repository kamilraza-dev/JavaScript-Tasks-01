var secretNumber = 7;
var userInput = +prompt("Guess The Number b/w (1 - 10) :");

if(userInput === secretNumber){ 
    alert("Congratulations! You guessed the secret number");
}
else if(userInput > secretNumber){
    alert("You Guess Higher");
}
else if(userInput < secretNumber){
    alert("You Guess Lower");
}
else{
    alert("Invalid Guess");
}