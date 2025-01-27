var firstName = prompt("Enter your first name. ");
var lastName = prompt("Enter your last name. ");
var birthYear = prompt("Enter your birth year. ");

var yearNow = new Date().getFullYear();
var age = parseInt(yearNow - birthYear);

document.getElementById("outputTwo").innerHTML = "Hello, " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";