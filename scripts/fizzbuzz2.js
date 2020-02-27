/*
	Robert Propheter  2/10/2020

	This script will grab the user's input from the form that is displayed
	on fizzbuzz1.html. The script will retrieve the two words the user put into 
	the form and then create the Fizz Buzz. For ever number divisible by 3, the user's
	first word will be displayed. If the number is divisible by 5, the second word will display.
	If the number is divisible by both numbers, both words will display. If the number is 
	neither divisible by 3, 5, or both, just the number will be displayed.
*/

function checkDivision(firstNumber, divisorNumber){
	var evenlyDivisible = false;
	if(firstNumber % divisorNumber === 0){
		evenlyDivisible = true;
	}
	return evenlyDivisible;
}// End of checkDivision()

function displayOutput(){
	var fizzDemo = document.getElementById("fizzbuzz");
	var firstNumber = document.getElementById("firstnumber").value;
	var divisorNumber = document.getElementById("divisor").value;
	if(checkDivision(firstNumber, divisorNumber) == true){
		fizzDemo.innerHTML = firstNumber + " is divided by " + divisorNumber + " evenly.";
	} else {
		fizzDemo.innerHTML = firstNumber + " is NOT divided by " + divisorNumber + " evenly.";
	}
}// End of displayOutput()

function resetDiv(){
	document.getElementById("fizzbuzz").innerHTML = "";
}