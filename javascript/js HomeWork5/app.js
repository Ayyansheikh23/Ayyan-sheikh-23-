// var name = prompt("Enter your name:");
// alert("Hello " + name + "! Welcome!");




// var num = prompt("Enter a number for multiplication table:");

// if (num === "" || num === null) {
//     num = 5;
// } else {
//     num = Number(num);
// }

// document.write("<h2>Multiplication Table of " + num + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }



// var city = prompt("Enter your city name:");

// if (city !== null && city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome!");
// }



// var gender = prompt("Enter your gender (male/female):");

// if (gender !== null) {
//     gender = gender.toLowerCase();

//     if (gender === "male") {
//         alert("Good Morning Sir");
//     } else if (gender === "female") {
//         alert("Good Morning Ma’am");
//     } else {
//         alert("Invalid input");
//     }
// }



// var color = prompt("Enter traffic signal color (red, yellow, green):");

// if (color !== null) {
//     color = color.toLowerCase();

//     if (color === "red") {
//         alert("Vehicles must stop");
//     }
//     else if (color === "yellow") {
//         alert("Vehicles should get ready to move");
//     }
//     else if (color === "green") {
//         alert("Vehicles can move now");
//     }
//     else {
//         alert("Invalid color");
//     }
// }



// var fuel = prompt("Enter remaining fuel in litres:");

// fuel = Number(fuel);

// if (fuel < 1.5) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Fuel level is okay");
// }



// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;

// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if (c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }



// // Take input from user
// var marks1 = Number(prompt("Enter marks obtained in Subject 1:"));
// var marks2 = Number(prompt("Enter marks obtained in Subject 2:"));
// var marks3 = Number(prompt("Enter marks obtained in Subject 3:"));
// var totalMarks = Number(prompt("Enter total marks:"));

// // Calculate total obtained marks
// var obtainedMarks = marks1 + marks2 + marks3;

// // Calculate percentage
// var percentage = (obtainedMarks / totalMarks) * 100;

// // Show percentage
// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// // Compute grade
// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need improvement";
// } else if (percentage >= 50) {
//     grade = "C";
//     remarks = "Fair";
// } else {
//     grade = "F";
//     remarks = "Fail";
// }

// // Display grade and remarks
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");



// // Input from user
// var item1 = prompt("Enter name of Item 1:");
// var item2 = prompt("Enter name of Item 2:");

// var price1 = Number(prompt("Enter price of " + item1 + " in PKR:"));
// var price2 = Number(prompt("Enter price of " + item2 + " in PKR:"));

// var quantity1 = Number(prompt("Enter quantity of " + item1 + ":"));
// var quantity2 = Number(prompt("Enter quantity of " + item2 + ":"));

// var shippingCharges = Number(prompt("Enter shipping charges in PKR:"));

// // Calculate total cost
// var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

// // Check for discount
// var discount = 0;
// if (totalCost > 2000) {
//     discount = totalCost * 0.10; // 10% discount
//     totalCost = totalCost - discount;
// }

// // Display receipt
// document.write("<h2>Shopping Cart Receipt</h2>");
// document.write("Item 1: " + item1 + "<br>");
// document.write("Price of " + item1 + ": " + price1 + " PKR<br>");
// document.write("Quantity of " + item1 + ": " + quantity1 + "<br><br>");

// document.write("Item 2: " + item2 + "<br>");
// document.write("Price of " + item2 + ": " + price2 + " PKR<br>");
// document.write("Quantity of " + item2 + ": " + quantity2 + "<br><br>");

// document.write("Shipping Charges: " + shippingCharges + " PKR<br>");

// if (discount > 0) {
//     document.write("Discount Applied: " + discount.toFixed(2) + " PKR<br>");
// }

// document.write("<h3>Total Cost: " + totalCost.toFixed(2) + " PKR</h3>");



// // Store secret number (1 to 10)
// var secretNumber = 7; // You can change this number

// // Ask user to guess
// var guess = Number(prompt("Guess the secret number (1 to 10):"));

// // Check the guess
// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, try again!");
// }



// // Take input from user
// var number = Number(prompt("Enter a number:"));

// // Check divisibility by 3
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }



// // Take input for team names
// var teamA = prompt("Enter name of Team A:");
// var teamB = prompt("Enter name of Team B:");

// // Take input for total scores
// var scoreA = Number(prompt("Enter total score of " + teamA + ":"));
// var scoreB = Number(prompt("Enter total score of " + teamB + ":"));

// // Determine winner
// if (scoreA > scoreB) {
//     alert(teamA + " has won the game!");
// } else if (scoreB > scoreA) {
//     alert(teamB + " has won the game!");
// } else {
//     alert("The game is a tie!");
// }




// // Declare variables
// var myString = "Hello World";
// var myNumber = 42;
// var myBoolean = true;

// // Check types and respond
// if (typeof myString === "string") {
//     alert("myString is a string");
// }

// if (typeof myNumber === "number") {
//     alert("myNumber is a number");
// }

// if (typeof myBoolean === "boolean") {
//     alert("myBoolean is a boolean");
// }



// // Take input from user
// var number = Number(prompt("Enter a number:"));

// // Check if number is even or odd
// if (number % 2 === 0) {
//     alert(number + " is an even number");
// } else {
//     alert(number + " is an odd number");
// }



// // Take temperature input from user
// var temperature = Number(prompt("Enter the current temperature in °C:"));

// // Check temperature and display message
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's very cold outside!");
// }



// // Take input from user
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Compute result based on operation
// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation!");
// }

// // Show result if operation is valid
// if (result !== undefined) {
//     alert("The result of " + num1 + " " + operation + " " + num2 + " = " + result);
// }



// // Take input from user
// var day = prompt("Enter day name:");

// // Convert input to lowercase for case-insensitive comparison
// day = day.toLowerCase();

// // Check the day and display message
// if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
//     alert("It's a week day");
// } else if (day === "saturday") {
//     alert("It's weekend");
// } else if (day === "sunday") {
//     alert("Yay! It's a holiday");
// } else {
//     alert("Invalid day name");
// }


// // Take input from user
// var score = Number(prompt("Enter your score:"));

// // Check if passed or not
// if (score > 50) {
//     alert("You are passed");
// } else {
//     alert("Try again!");
// }


// // Take input from user
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));

// // Compare the numbers
// if (num1 > num2) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (num2 > num1) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//     alert("Both numbers are equal.");
// }


// // Take language code input from user
// var lang = prompt("Enter language code (e.g. 'en', 'es', 'de'):");

// // Convert input to lowercase
// lang = lang ? lang.toLowerCase() : "en"; // default to English if input is empty

// // Determine translation
// var greeting;

// if (lang === "es") { // Spanish
//     greeting = "¡Hola, Mundo!";
// } else if (lang === "de") { // German
//     greeting = "Hallo, Welt!";
// } else if (lang === "fr") { // French
//     greeting = "Bonjour, le monde!";
// } else { // default to English
//     greeting = "Hello, World!";
// }

// // Display greeting
// alert(greeting);



// // Take input from user
// var number = Number(prompt("Enter a number:"));

// // Check if number is positive, negative, or zero
// if (number > 0) {
//     alert(number + " is a positive number");
// } else if (number < 0) {
//     alert(number + " is a negative number");
// } else {
//     alert("The number is zero");
// }


// Take inputs from user
var noun = prompt("Enter a noun:");
var number = Number(prompt("Enter a number:"));

// Determine plural form
var output;

if (number === 1) {
    output = number + " " + noun;
} else {
    // Simple pluralization by adding "s"
    output = number + " " + noun + "s";
}

// Show result
alert(output);
