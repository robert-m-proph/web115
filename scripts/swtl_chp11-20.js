/* 
	Robert Propheter
	
	Chapters 11-20

11 - Comparison operators
12 - If...else and else if statements
13 - Testing sets of conditions
14 - If statements nested
15 - Arrays
16 - Arrays: Adding and removing elements
17 - Arrays: Removing and inserting elements
18 - For loops
19 - For loops: Flags, Booleans, length, and loopus interruptus
20 - For loops nested
*/

// Getting the element ID and adding the event listener
document.getElementById("demonstrate").addEventListener("click", demonstrate);

// Setting the demonstrate function
function demonstrate() {
	
	// ==========  Chapters 11-15  ==========
	
	var products = ["Lessons", "Clinics", "Contact Us"];
	var choice = prompt("Have you looked at what services we provide?");
	// Using if else-if statements to display the correct response by comparing user input
	if(choice == "no" || choice == "No"){
		alert("Please view the CourtSide homepage for more info!!");
	} else if(choice == "yes" || choice == "Yes"){
		var productChoice = prompt("Great! Was it "+products[0]+" or "+products[1]+"?");
		if(productChoice == products[0] || productChoice == products[1]){
			alert("Awesome! Thank You!");
		} else{
			alert("Your choice was not recongized. Please visit the CourtSide homepage for more information!");
		}
	} else{
			alert("You didn't anwser.");
	}
	
	// ==========  Chapters 16-20  ==========
	
	// Creating a nested array with client info
	var clientList = [["Robert",31],["Elijah",10],["Logan",16]];
	
	// Using for loop to count the roster
	var currentRoster = 0;
	for(var i=0; i<clientList.length; i++){
		currentRoster++;
	}
	
	// Displaying the roster list with current roster members
	alert("Here is a list of our current \"New Client Roster\" : \n"+
	"\nName      Age"+
	"\n----------------"+
	"\n"+clientList[0][0]+"      "+clientList[0][1]+
	"\n"+clientList[1][0]+"        "+clientList[1][1]+
	"\n"+clientList[2][0]+"       "+clientList[2][1]+
	"\n\nCurrent Roster: "+currentRoster);
	
	// Getting user info to current roster array
	var name = prompt("Enter your name.");
	if(name==""){
		name = prompt("Please enter your name.");
	}
	var age = prompt("Enter your age.");
	if(age==""){
		age = prompt("Enter your age.");
	}
	age = parseInt(age); // Parsing string into an int
	
	// Adding user info to client list
	clientList.push([name,age]);
	alert(clientList[3][0]+", your name and age ("+clientList[3][1]+") has been added to the current New Client Roster!");
	
	// Using for loop to count the updated roster
	var currentRoster = 0;
	for(var i=0; i<clientList.length; i++){
		currentRoster++;
	}
	// Displaying the updated roster number
	alert("After adding you to the roster, there are now currently "+currentRoster+
	" clients on the roster!");
	
	// Counting everything in the array with nested for loops
	var nameCount=0;
	var ageCount=0;
	for(var i=0; i<clientList.length; i++){
		nameCount++;
		for(var j=1; j<clientList[i].length; j++){
			ageCount++;
		}
	}
	var allInfo = nameCount + ageCount;
	alert("There is "+allInfo+" pieces of information in the New Client Roster.");
}//End of Function

























