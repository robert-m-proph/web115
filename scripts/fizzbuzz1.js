/*
	Robert Propheter  2/10/2020

	This script will grab the user's input from the form that is displayed
	on fizzbuzz1.html. The script will retrieve the two words the user put into 
	the form and then create the Fizz Buzz. For ever number divisible by 3, the user's
	first word will be displayed. If the number is divisible by 5, the second word will display.
	If the number is divisible by both numbers, both words will display. If the number is 
	neither divisible by 3, 5, or both, just the number will be displayed.
*/

function displayFizzBuzzNumbers(){
	// Getting the numbers from the form
	var firstWord = document.getElementById("firstword").value;
	var secondWord = document.getElementById("secondword").value;
	var bothWords = firstWord + " " + secondWord;
	
	var fizzDemo = document.getElementById("fizzbuzz");
	var newText = "";
	
	for(i = 1; i < 141; i++){
		if(i % 3 === 0 && i % 5 === 0){
			newText += i  + ". " + bothWords + " <br>";
		} else if(i % 5 === 0) {
			newText += i  + ". " + secondWord + " <br>";
		} else if(i % 3 === 0) {
			newText += i  + ". " + firstWord + " <br>";		
		} else {
			newText += i  + ".<br>";
		}
	}
	fizzDemo.innerHTML = newText;
}// End of function