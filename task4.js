var userName = prompt("Enter Your Name to Capitalize:");
var firstWord = userName.slice(0, 1);
var lastWords = userName.slice(1);
var capitalWord = firstWord.toUpperCase();
var lowercaseWords = lastWords.toLowerCase();

alert(capitalWord + lowercaseWords);