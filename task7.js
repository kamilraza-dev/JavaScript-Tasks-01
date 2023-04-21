var nationality = prompt("Enter Your Nationality: ");
var gender;
var age;
var maritalStatus;

if(nationality === "Pakistani" || nationality === "pakistani" || nationality === "Indian" || nationality === "indian"){
    
    gender = prompt("Enter Your Gender: ");
    age = prompt("Enter Yur Age: ");
    
    if(gender === "Male" || gender === "male"){
    
        if(age >= "18"){
            alert("You are Eligible to Vote!");
        }
        else{
            alert("Under Age, You are not Eligible to Vote");
        }
    
    }
    
    else if(gender == "Female" || gender === "female"){
        
        if(age >= "18"){
        
            maritalStatus = prompt("Enter Your Marital Status (Married / Unmarried): ");
        
            if(maritalStatus === "Married" || maritalStatus === "married"){
                alert("You are Eligible to Vote!");
            }
            else if(maritalStatus === "Unmarried" || maritalStatus === "unmarried"){
                alert("You are Unmarried, You are not Eligible to Vote");
            }
            else{
                alert("Invalid Marital Status");
            }
        }
        else{
            alert("Under Age, You are not Eligible to Vote");
        }
        
    }
    else{
        alert("Invalid Input For Gender");
    }

} else{
    alert("Notionality Miss Matched, You are not Eligible to Vote");
}