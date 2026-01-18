//  for (let i = 1; i <= 5; i++) {
//         document.write("Hello World<br>");
//     }


//  for (let i = 1; i <= 10; i++) {
//         document.write(i + "<br>");
//  }

    // var tableNumber = +prompt("Enter table number:");
    // var tableLength = +prompt("Enter table length:");

    // for (var i = 1; i <= tableLength; i++) {
    //     document.write(
    //         tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>"
    //     );
    // }


    //  var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

    // for (var i = 0; i < A.length; i++) {
    //     document.write(A[i] + "<br>");
    // }

    //   var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    // for (var i = 0; i < fruits.length; i++) {
    //     document.write(fruits[i] + "<br>");
    // }

    //  var N = +prompt("Enter number of items:");
    // var items = [];

    // for (var i = 0; i < N; i++) {
    //     items[i] = prompt("Enter item " + (i + 1) + ":");
    // }

    // document.write("<h3>Array Items:</h3>");

    // for (var i = 0; i < items.length; i++) {
    //     document.write(items[i] + "<br>");
    // }

    // // a. Counting
    // document.write("<b>Counting:</b><br>");
    // for (var i = 1; i <= 15; i++) {
    //     document.write(i + ", ");
    // }

    // document.write("<br><br>");

    // // b. Reverse Counting
    // document.write("<b>Reverse counting:</b><br>");
    // for (var i = 10; i >= 1; i--) {
    //     document.write(i + ", ");
    // }

    // document.write("<br><br>");

    // // c. Even Numbers
    // document.write("<b>Even:</b><br>");
    // for (var i = 0; i <= 20; i += 2) {
    //     document.write(i + ", ");
    // }

    // document.write("<br><br>");

    // // d. Odd Numbers
    // document.write("<b>Odd:</b><br>");
    // for (var i = 1; i < 20; i += 2) {
    //     document.write(i + ", ");
    // }

    // document.write("<br><br>");

    // // e. Series
    // document.write("<b>Series:</b><br>");
    // for (var i = 2; i <= 20; i += 2) {
    //     document.write(i + "k, ");
    // }


    //  var A = ["cake", "apple pie", "cookie", "chips", "patties"];

    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

    // var found = false;

    // for (var i = 0; i < A.length; i++) {
    //     if (A[i] === userInput) {
    //         found = true;
    //         break;
    //     }
    // }

    // if (found) {
    //     alert(userInput + " is available in our bakery.");
    // } else {
    //     alert("We are sorry. " + userInput + " is not available in our bakery.");
    // }

    
    
    //  var A = [24, 53, 78, 91, 12];
    // var smallest = A[0];

    // for (var i = 1; i < A.length; i++) {
    //     if (A[i] < smallest) {
    //         smallest = A[i];
    //     }
    // }

    // document.write("Array items: " + A + "<br>");
    // document.write("The smallest number is: " + smallest);


    //   var A = [24, 53, 78, 91, 12];
    // var largest = A[0];
    // var smallest = A[0];

    // for (var i = 1; i < A.length; i++) {
    //     if (A[i] > largest) {
    //         largest = A[i];
    //     }
    //     if (A[i] < smallest) {
    //         smallest = A[i];
    //     }
    // }

    // document.write("Array items: " + A + "<br>");
    // document.write("The largest number is: " + largest + "<br>");
    // document.write("The smallest number is: " + smallest);


    //  document.write("<b>Multiples of 5 from 1 to 100:</b><br>");

    // for (var i = 1; i <= 100; i++) {
    //     if (i % 5 === 0) {
    //         document.write(i + ", ");
    //     }
    // }

    //  var students = ["Ali", "Sami", "Taha", "Inam"];
    // var scores = [58, 73, 89, 90];

    // for (var i = 0; i < students.length; i++) {
    //     document.write("Score of " + students[i] + " is " + scores[i] + ".<br>");
    // }

    //  var scores = [12, 45, 3, 22, 34, 50];

    // // Take stop value from the user
    // var stopValue = +prompt("Enter stop value:");

    // document.write("<b>Numbers from array up to stop value:</b><br>");

    // for (var i = 0; i < scores.length; i++) {
    //     document.write(scores[i] + ", ");
    //     if (scores[i] === stopValue) {
    //         break; // stop when stopValue is reached
    //     }
    // }

    // var A = [ [1,2,3], [4,5,6], [7,8,9] ];

    // for (var i = 0; i < A.length; i++) {          // Outer loop for rows
    //     for (var j = 0; j < A[i].length; j++) {   // Inner loop for columns
    //         document.write(A[i][j] + " ");
    //     }
    //     document.write("<br>"); // New line after each row
    // }


     var lines = +prompt("Enter number of lines for the pattern:");

    document.write("<b>Pattern:</b><br>");

    for (var i = 1; i <= lines; i++) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }