var age = 18;  
alert("My age is: " + age);



var visits = localStorage.getItem("visits");


if (visits === null) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}


localStorage.setItem("visits", visits);


alert("You have visited this site " + visits + " times");

 

 var birthYear = 2005;

    document.write("My birth year is " + birthYear + "<br>");
    document.write("Data type of my declared variable is number");