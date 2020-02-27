/*
	Robert Propheter  2/10/2020

	This script will grab the user's input from the form that is displayed
	on fizzbuzz0.html. It will then greet the user by thier name by collecting the
	field values. By using DOM manipulation, the page greeting will change and 
	will also output a fizzbuzz type display.
*/

function displayFizzBuzzContent(){
	// Getting the names from the form
	var firstName = document.getElementById("firstname").value;
	var middleInitial = document.getElementById("middleinitial").value;
	var lastName = document.getElementById("lastname").value;
	var newGreeting = "Welcome to CourtSide's FizzBuzz 0 - Part 1, " + firstName + " " + middleInitial + ". " + lastName + "!";
	
	document.getElementById("greeting").innerHTML = newGreeting;
	
	var newText = "";
	var twoWords = "CourtSide Basketball";
	var fizzDemo = document.getElementById("fizzbuzz");
	for(i = 1; i < 126; i++){
		newText += i  + ". " + twoWords + "<br>";
	}
	fizzDemo.innerHTML = newText;

}// End of function