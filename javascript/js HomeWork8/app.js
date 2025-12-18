// let studentNames = [];

// studentNames.push("Ali");
// studentNames.push("Sara");
// console.log(studentNames); 

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// fruits.push("Grapes");
// console.log(fruits); 


// fruits.push("Grapes", "Pineapple");
// console.log(fruits);



// let flags = [true, false, true, false];

// flags.push(true);
// console.log(flags); 


// let mixedArray = ["Ali", 25, true, "Sara", false, 42];

// console.log(mixedArray[0]); 
// console.log(mixedArray[1]); 
// console.log(mixedArray[2]); 

// mixedArray.push("New Item");
// mixedArray.push(99);
// console.log(mixedArray);


// let mobileNetworks = ["Jazz", "Telenor", "Zong", "Ufone", "Warid"];

// console.log(mobileNetworks[0]); 
// console.log(mobileNetworks[2]); 

// mobileNetworks.push("New Network");
// console.log(mobileNetworks);

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// let list = document.getElementById("qualificationList");


// for (let i = 0; i < qualifications.length; i++) {
//     let listItem = document.createElement("li");
//     listItem.textContent = qualifications[i];
//     list.appendChild(listItem);
// }

// let topMovies = [];

//         // Add movies one by one
//         topMovies.push("Star Wars: The Force Awakens");
//         topMovies.push("Jurassic World");
//         topMovies.push("Avengers: Age of Ultron");
//         topMovies.push("Inside Out");
//         topMovies.push("Furious 7");

//         // Display the movies in the browser
//         let list = document.getElementById("movieList");
//         for (let i = 0; i < topMovies.length; i++) {
//             let listItem = document.createElement("li");
//             listItem.textContent = topMovies[i];
//             list.appendChild(listItem);
//         }

//         // Display the length of the array
//         document.getElementById("arrayLength").textContent = "Total Movies: " + topMovies.length;

// let favoriteCars = ["Toyota", "Honda", "BMW", "Mercedes", "Audi"];


// document.getElementById("firstIndex").textContent = "First Index: 0";
// document.getElementById("firstCar").textContent = "Car at First Index: " + favoriteCars[0];

// let lastIndex = favoriteCars.length - 1;
// document.getElementById("lastIndex").textContent = "Last Index: " + lastIndex;
// document.getElementById("lastCar").textContent = "Car at Last Index: " + favoriteCars[lastIndex];

//  let students = ["Ali", "Sara", "Ahmed"];

// // Array to store scores of students
// let scores = [400, 450, 375];

// // Total marks
// let totalMarks = 500;

// // Get the div to display results
// let resultDiv = document.getElementById("result");

// // Loop through the students and display their scores and percentages
// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     let para = document.createElement("p");
//     para.textContent = "Score of " + students[i] + " is " + scores[i] + 
//                        ". Percentage: " + percentage.toFixed(2) + "%";
//     resultDiv.appendChild(para);
// }


// let colors = ["Red", "Green", "Blue", "Yellow"];
// let displayDiv = document.getElementById("display");

// function showArray(message) {
//     let para = document.createElement("p");
//     para.textContent = message + " [" + colors.join(", ") + "]";
//     displayDiv.appendChild(para);
// }

// // Display initial array
// showArray("Initial array:");

// // a. Add color to the beginning
// let colorToAddBeginning = prompt("Which color do you want to add to the beginning?");
// colors.unshift(colorToAddBeginning);
// showArray("After adding color to the beginning:");

// // b. Add color to the end
// let colorToAddEnd = prompt("Which color do you want to add to the end?");
// colors.push(colorToAddEnd);
// showArray("After adding color to the end:");

// // c. Add two more colors to the beginning
// let firstNewColor = prompt("Enter first color to add to the beginning:");
// let secondNewColor = prompt("Enter second color to add to the beginning:");
// colors.unshift(firstNewColor, secondNewColor);
// showArray("After adding two colors to the beginning:");

// // d. Delete the first color
// colors.shift();
// showArray("After deleting the first color:");

// // e. Delete the last color
// colors.pop();
// showArray("After deleting the last color:");

// // f. Add color at desired index
// let addIndex = parseInt(prompt("At which index do you want to add a color?"));
// let colorAtIndex = prompt("Enter the color to add:");
// colors.splice(addIndex, 0, colorAtIndex);
// showArray(`After adding color at index ${addIndex}:`);

// // g. Delete color(s) at desired index
// let deleteIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
// let deleteCount = parseInt(prompt("How many color(s) do you want to delete?"));
// colors.splice(deleteIndex, deleteCount);
// showArray(`After deleting ${deleteCount} color(s) from index ${deleteIndex}:`);

// let scores = [320, 450, 210, 400, 375];

// // Display original scores
// document.getElementById("originalScores").textContent = "Original Scores: " + scores.join(", ");

// // Sort the array in ascending order
// scores.sort(function (a, b) {
//     return a - b; // numeric ascending sort
// });

// // Display sorted scores
// document.getElementById("sortedScores").textContent = "Sorted Scores (Ascending): " + scores.join(", ");

// var fruits = ["strawberry", "apple", "orange", "banana"];

// // Display original array
// document.getElementById("originalFruits").textContent = "Original Array: " + fruits.join(", ");

// // Sort the array alphabetically
// fruits.sort();

// // Display sorted array
// document.getElementById("sortedFruits").textContent = "Sorted Array: " + fruits.join(", ");

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.getElementById("allCities").textContent = "All Cities: " + cities.join(", ");

// let selectedCities = cities.slice(0, 3);

// document.getElementById("selectedCities").textContent = "Selected Cities: " + selectedCities.join(", ");

// var arr = ["This ", " is ", " my ", " cat"];

// document.getElementById("originalArray").textContent = "Original Array: [" + arr.join(", ") + "]";

// var sentence = arr.join(""); 

// document.getElementById("singleString").textContent = "Single String: " + sentence;

// let fifoArray = [];


// fifoArray.push("First");
// fifoArray.push("Second");
// fifoArray.push("Third");
// fifoArray.push("Fourth");

// document.getElementById("initialArray").textContent = "Initial Array: " + fifoArray.join(", ");


// let output = "";
// while (fifoArray.length > 0) {
//     output += fifoArray.shift() + " ";
// }

// document.getElementById("dequeuedValues").textContent = "Values in FIFO Order: " + output.trim();

// let lifoArray = [];

//         // Store values one by one (using push to add at the end)
//         lifoArray.push("First");
//         lifoArray.push("Second");
//         lifoArray.push("Third");
//         lifoArray.push("Fourth");

//         document.getElementById("initialArray").textContent = "Initial Array: " + lifoArray.join(", ");

//         let output = "";
//         while(lifoArray.length > 0) {
//             output += lifoArray.pop() + " ";
//         }

//         document.getElementById("poppedValues").textContent = "Values in LIFO Order: " + output.trim();


let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');

for (let i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');