    // // Take first and last name from user
    // var firstName = prompt("Enter your first name:");
    // var lastName = prompt("Enter your last name:");

    // // Merge into fullName
    // var fullName = firstName + " " + lastName;

    // // Greet the user
    // alert("Hello, " + fullName + "! Welcome!");


    //  // Take user input
    // var mobileModel = prompt("Enter your favorite mobile phone model:");

    // // Find the length of the input
    // var lengthOfModel = mobileModel.length;

    // // Display the result in the browser
    // document.write("Your favorite mobile phone is: " + mobileModel + "<br>");
    // document.write("Length of the input: " + lengthOfModel + " characters");


    //    var word = "Pakistani";
    // var index = word.indexOf("n");

    // document.write("Word: " + word + "<br>");
    // document.write("Index of letter 'n': " + index);

    // var word = "Hello World";
    // var lastIndex = word.lastIndexOf("l");

    // document.write("Word: " + word + "<br>");
    // document.write("Last index of letter 'l': " + lastIndex);



    //     var word = "Pakistani";
    // var charAtIndex3 = word.charAt(3);

    // document.write("Word: " + word + "<br>");
    // document.write("Character at index 3: " + charAtIndex3);

    //  // Take first and last name from user
    // var firstName = prompt("Enter your first name:");
    // var lastName = prompt("Enter your last name:");

    // // Merge using concat() method
    // var fullName = firstName.concat(" ", lastName);

    // // Greet the user
    // alert("Hello, " + fullName + "! Welcome!");


    //   var city = "Hyderabad";

    // // Replace "Hyder" with "Islam"
    // var newCity = city.replace("Hyder", "Islam");

    // document.write("Original city: " + city + "<br>");
    // document.write("After replacement: " + newCity);

    // var message = "Ali and Sami are best friends. They play cricket and football together.";

    // // Replace all occurrences of "and" with "&" using regular expression with global flag
    // var newMessage = message.replace(/and/g, "&");

    // document.write("Original message: <br>" + message + "<br><br>");
    // document.write("After replacement: <br>" + newMessage);


    //  var str = "472";

    // // Convert string to number
    // var num = Number(str);

    // document.write("Value: " + str + "<br>");
    // document.write("Type: " + typeof(str) + "<br><br>");

    // document.write("Value after conversion: " + num + "<br>");
    // document.write("Type after conversion: " + typeof(num));


    // // Take URL input from user
    // var url = prompt("Enter a URL (e.g., www.facebook.com or www.yahoo.com):");

    // // Remove "www." if it exists
    // var domain = url;

    // if (domain.startsWith("www.")) {
    //     domain = domain.slice(4); // Remove first 4 characters
    // }

    // // Remove ".com" or any extension
    // var dotIndex = domain.indexOf(".");
    // if (dotIndex !== -1) {
    //     domain = domain.slice(0, dotIndex);
    // }

    // document.write("URL entered: " + url + "<br>");
    // document.write("Extracted domain name: " + domain);

     // Take input from user
    // var userInput = prompt("Enter any text:");

    // // Convert to uppercase
    // var upperCaseInput = userInput.toUpperCase();

    // document.write("Original input: " + userInput + "<br>");
    // document.write("In capital letters: " + upperCaseInput);

    //  // Take input from user
    // var userInput = prompt("Enter any text:");

    // // Convert to lowercase
    // var lowerCaseInput = userInput.toLowerCase();

    // document.write("Original input: " + userInput + "<br>");
    // document.write("In small letters: " + lowerCaseInput);


    //    // Take input from user
    // var userInput = prompt("Enter any text:");

    // // Convert to title case
    // function toTitleCase(str) {
    //     return str.toLowerCase().split(" ").map(function(word) {
    //         return word.charAt(0).toUpperCase() + word.slice(1);
    //     }).join(" ");
    // }

    // var titleCaseInput = toTitleCase(userInput);

    // document.write("Original input: " + userInput + "<br>");
    // document.write("In title case: " + titleCaseInput);


//    var num = 35.36;

//     // Convert number to string
//     var str = num.toString();

//     // Remove the dot
//     var result = str.replace(".", "");

//     document.write("Original number: " + num + "<br>");
//     document.write("After removing dot: " + result);



//      var a = "3";
//     var b = "3";

//     // Convert strings to numbers before adding
//     var x = Number(a) + Number(b);

//     document.write("Value of a: " + a + "<br>");
//     document.write("Value of b: " + b + "<br>");
//     document.write("Value of x (a + b): " + x);



//  var a = "3";
//     var b = "3";

//     // Subtract b from a
//     var y = a - b;

//     document.write("Value of a: " + a + "<br>");
//     document.write("Value of b: " + b + "<br>");
//     document.write("Value of y (a - b): " + y);





//    var username = prompt("Enter your username:");

// // Function to check for invalid characters
// function isValidUsername(name) {
//     for (var i = 0; i < name.length; i++) {
//         var code = name.charCodeAt(i);
//         if (code === 33 || code === 44 || code === 46 || code === 64) {
//             return false; // Invalid character found
//         }
//     }
//     return true; // No invalid characters
// }

// // Keep prompting until a valid username is entered
// while (!isValidUsername(username)) {
//     username = prompt("Invalid username! Please enter a valid username (no @ . , !):");
// }

// document.write("Your valid username is: " + username);


    var str = "Pakistan";
    var vowels = "aeiouAEIOU";
    var vowelCount = 0;
    var consonantCount = 0;

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) { // Check if it's a letter
            consonantCount++;
        }
    }

    document.write("String: " + str + "<br>");
    document.write("Number of vowels: " + vowelCount + "<br>");
    document.write("Number of consonants: " + consonantCount);