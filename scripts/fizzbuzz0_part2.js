/*
	Robert Propheter  2/10/2020

	This script will grab the user's input from the form that is displayed
	on fizzbuzz0_part2.html. It will then greet the user by thier name by collecting the
	field values. By using DOM manipulation, the page greeting will change and 
	will also output a fizzbuzz type display.
*/

function displayFizzBuzzContent(){
	// Getting the names from the form
	var firstName = document.getElementById("firstname").value;
	var middleInitial = document.getElementById("middleinitial").value;
	var lastName = document.getElementById("lastname").value;
	var newGreeting = "Welcome to CourtSide's FizzBuzz 0 - Part 2, " + firstName + " " + middleInitial + ". " + lastName + "!";
	
	document.getElementById("greeting").innerHTML = newGreeting;
	
	var twoWords = "CourtSide Basketball";
	var fizzDemo = document.getElementById("fizzbuzz");
	
	var userNumber = prompt("How high do you want to count, " + firstName + "?");
	userNumber = parseInt(userNumber);
	
	for(i = 1; i < userNumber + 1; i++){
		if(i % 2 == 0){
			fizzDemo.innerHTML += i  + ". Even - " + twoWords + " <br>";
		} else {
			fizzDemo.innerHTML += i  + ". Odd - " + twoWords + " <br>";
		}		
	}
}// End of function