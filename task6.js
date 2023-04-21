var products = ["Apple", "Nokia", "Samsung", "Vivo", "Infinix", "Oneplus", "Oppo", "LG", "Techno"];
var userInput = +prompt("Enter Index to Remove Product");
var newProducts = products.splice(userInput, 1);
console.log("Removed Item: " + newProducts);
console.log("Remaining Items: " + products + "\n" + "No. of Items Remaining: " + products.length);
