/*
	Robert Propheter

	Chapters 21-30 

21 - Changing Case
22 - Measuring Length and extracing parts
23 - Finding segments
24 - Finding a character at a location
25 - Replacing characters
26 - Roudnding numbers
27 - Generating random numbers
28 - Converting strings to integers and decimals
29 - Converting strings to numbers, numbers to strings
30 - Controlling the length of decimals
*/

// Getting the element ID and adding the event listener
document.getElementById("demonstrate").addEventListener("click", demonstrate);

// Setting the demonstrate function
function demonstrate() {
	
	// ==========  Chapter 21  ==========
	
	var userState = prompt("Welcome to CourtSide! \n\nWhat state are you in?");
	if(userState == ""){
		userState = prompt("Please enter the state you are located in.", "North Carolina");
	}
	var userCity = prompt("What city in "+userState+" are you in?");
	if(userCity == ""){
		userCity = prompt("Please enter the city you are located in.", "Charlotte");
	}
	// Creating an array for current avaible states
	var states = ["north carolina", "south carolina", "georgia"];	
	// Creating an array for current citys in avaible states
	var cities = ["charlotte", "raleigh", "rock hill", "columbia", "atlanta", "columbus"];
	
	// Using changing case to see if the user's location matches availability
	//State
	var checkStateLocation = userState.toLowerCase();
	var stateMatch = false;
	for(var i=0; i<states.length; i++){
		if(checkStateLocation == states[i]){
			stateMatch = true;
		}
	}
	// City
	var checkCityLocation = userCity.toLowerCase();
	var cityMatch = false;
	for(var i=0; i<cities.length; i++){
		if(checkCityLocation == cities[i]){
			cityMatch = true;
		}
	}
	if(stateMatch==true && cityMatch==true){
		alert("CourtSide is located in your area! \n\nNavigate to our \"Contact Us\" page for more info!");
	} else {
		alert("Unfortunately, CourtSide isn't currently available in "+userCity+", "+userState+".");
	}
	
	// ==========  Chapters 22-25, 28, 29  ==========
	
	var bday = prompt("Enter your birthday in the following format:  MM/DD/YYYY", "09/21/1982", "09/21/1982");
	
	// Checking bday length to ensure proper birthday format
	var numChars = bday.length;
	numChars = parseInt(numChars);
	
	if(numChars!==10){
		var numCharCheck = false;
	}
	// Checking bday format
	for(var i=0; i<bday.length; i++){
		if(bday.charAt(2) !== "/" && bday.charAt(5) !== "/"){
			var formatCheck = false;
		}
	}
	// Setting a date to work with if user inputs bad birth date
	if (numCharCheck == false && formatCheck == false){
		alert("You didn't enter a birthday in the correct format, so for training purposes we are going to use 09/21/1982.")
		bday =  "09/21/1982";
	}
		
	// Checking months of user's actual input
	var month = bday.substring(0,2);
	var month = parseInt(month);
	if (month < 1 || month > 12){
		var badMonth = "You didn't enter a valid month.";
		aler(badMonth);
	}
	
	//checking days of user's actual input
	var day = bday.substring(3,5);
	var day = parseInt(day);
	if (day < 1 || day > 31){
		var badDay = "You didn't enter a valid day.";
		alert(badDay);
	}
	
	// checking years of user's actual input
	var year = bday.substring(6);
	var year = parseInt(year);
	if (year < 1920){
		var zombieYear = "You are either a zombie or lying about your birth year.";
		alert(zombieYear);
	} else if (year > 2010){
		var futureYear = "You're either a really smart kid or from the future, becuase your birth year doesn't add up.";
		alert(futureYear);
	}
	
	// Creating a months object
	var monthObj = {
		01: "January",
		02: "Febuary",
		03: "March",
		04: "April",
		05: "May",
		06: "June",
		07: "July",
		08: "August",
		09: "September",
		10: "October",
		11: "November",
		12: "December"	
	};

	var newBday =  monthObj[month] + " " + day + "," + year;
	alert("Your birthday in another format is: " + newBday);

	// ==========  Chapters 26, 27, 30  ==========

	var donation = prompt("Enter an amount of money to donate to our cause.\n\nEnter 0.00 for a random donation.", "25.00");
	donation = parseFloat(donation);
	
	// Generating a random donation if user equest
	var randomDonation = Math.random();
	randomDonation = (randomDonation * 100) + 1;
	var newDonation = randomDonation.toFixed(2);
		
	if (donation < 0){
		alert("Since you don't want to donate, we will generate a random amount!");
		alert("Thank you for your donation of $"+newDonation);
	} else if (donation == 0){
		alert("Thank you for your donation of $"+newDonation);
	} else if (donation >= 1){
		alert("Thank you for your donation of $"+donation.toFixed(2));
	}
	
	
} //End of Function
