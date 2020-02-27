/*
	Robert Propheter

	Chapters 1-10 

1 - Alerts
2 - Variable for Strings
3 - Variable for Numbers
4 - Variable names legal and illegal
5 - Math expressions: Familiar operators
6 - Math expressions: Unfamiliar operators
7 - Math expressions: Eliminating ambiguity
8 - Concatenating text strings
9 - Prompts
10 - If statements
*/


// Getting the element ID and adding the event listener
document.getElementById("demonstrate").addEventListener("click", demonstrate);

// Setting the demonstrate function
function demonstrate() {
	// Chapters 1,2,9
	var name = prompt("What's your name?", "Bob Saget");
	alert("Welcome to CourtSide "+name+"!");	
	// Chapters 3,8,9,10
	var age = prompt("How old are you "+name+"?");
	if(age==""){
		prompt("Please enter your age.",25);
	}
	age = parseInt(age);
	// Chapter 4 covers illegal and legal variable names
	// Chapter 5-9
	var minAge = 10;
	var maxAge = 40;
	var avgAge = (maxAge + minAge)/2;
	alert("Our minimum age of clients:  "+minAge+"."+
		"\nOur maximum age of clients:  "+maxAge+"."+
		"\nOur average age of clients:     "+avgAge+".");
	// Chapter 10
	if(age<minAge || age>maxAge){
		alert("You are out of our normal client's age group.");
	} else{
		alert("You are "+age+", which is in our normal client's age group!");
	}
}//End of Function