 var repeat = "yes";

  while (repeat.toLowerCase() === "yes") {

    // Menu
    var choice = prompt(
      "Select operation:\n" +
      "1. Addition (+)\n" +
      "2. Subtraction (-)\n" +
      "3. Multiplication (*)\n" +
      "4. Division (/)"
    );

    // Inputs
    var num1 = Number(prompt("Enter first number:"));
    var num2 = Number(prompt("Enter second number:"));

    var result;

    // Menu logic
    if (choice == "1") {
      result = num1 + num2;
      alert("Result: " + result);
    } 
    else if (choice == "2") {
      result = num1 - num2;
      alert("Result: " + result);
    } 
    else if (choice == "3") {
      result = num1 * num2;
      alert("Result: " + result);
    } 
    else if (choice == "4") {
      if (num2 === 0) {
        alert("Division by zero is not allowed");
      } else {
        result = num1 / num2;
        alert("Result: " + result);
      }
    } 
    else {
      alert("Invalid choice");
    }

    // Repeat?
    repeat = prompt("Do you want to perform another task? (Yes/No)");
  }