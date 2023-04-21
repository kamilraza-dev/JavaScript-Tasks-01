var familyMembers = +prompt("Enter no. of Family Members: ");
var fitrahMethod = prompt("Choose Fitrah Method i.e. Wheat(320), Maize(800), Dates(2800), Ajwa Dates(10400), Raisin(6400)");
console.log(fitrahMethod);
if(fitrahMethod === ("Wheat" || "wheat")){
    alert("Your Fitrah Amount is: " + (familyMembers * 320));
}
else if(fitrahMethod === ("Maize" || "maize")){
    alert("Your Fitrah Amount is: " + (familyMembers * 800));
}
else if(fitrahMethod === ("Dates" || "dates")){
    alert("Your Fitrah Amount is: " + (familyMembers * 2800));
}
else if(fitrahMethod === ("Ajwa Dates" || "ajwa dates")){
    alert("Your Fitrah Amount is: " + (familyMembers * 10400));
}
else if(fitrahMethod === ("Raisin" || "raisin")){
    alert("Your Fitrah Amount is: " + (familyMembers * 6400));
}
else {
    alert("Invalid Method");
}