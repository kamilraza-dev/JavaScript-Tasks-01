var noOfContact = +prompt("How many contacts you want to add?");
var contactNames = [];
var contactNumbers = [];

for(let i = 1 ; i <= noOfContact; i++){
    contactNames.push(prompt("Enter Contact Name " + i  + ":")); 
    contactNumbers.push(prompt("Enter Contact Number " + i  + ":")); 
}
for(let i = 0 ; i <= (noOfContact-1); i++){
    console.log("Name:" + contactNames[i] + " ; Number: " + contactNumbers[i]);    
}