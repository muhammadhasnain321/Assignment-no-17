// Chapter 4
document.write("<br> <br> <h1>Chapter 4</h1><br>")

// q 1

// var sir = Faraz, x = hello, y = true; 


//  q 2

// legal Variable Name
 var userName , user1 , $price , _myNumber , user_name

//  un  legal Variable Name 

// var 1user , @ user , my-var , friend name , "class ..

// // q 3

var heading = "<h1>Rule for meaning JS variable</h1>";
var n = "numbers";
var doller = "$";
var exm = "$my_1stVariable";
var letter = "letter";
var $ = "$name,_name or name";
var sen = "sensitive";
var key = "keywords";

document.write(heading + "<br> Variable names can only contain , " + n +" " + doller + " and_. For example: " + exm  + "<br> Variable must begin with a letter." + doller + "or_. For example : " + $ + "<br>Variable names are case " + sen + "<br> Variable names should not be JS " + key);



// chapter 5
document.write("<br> <br> <h1>Chapter 5</h1><br>")
// q1

var num1 = 3 ;
var num2 = 5 ;
var sum = num1 + num2 ;
var subtraction = num1 - num2 ;
var multiplication = num1 * num2 ;
var division = num1 / num2 ;
var modulus = num1 % num2 ;




document.write(" sum of " + num1 + " " + "and " + num2 + " " + "is " + sum)
// q 2

document.write("<br>"+ num1 + "-" + num2 + "=" + subtraction + "<br>"+ num1 + "*" + num2 + "=" + multiplication + "<br>"+ num1 + "/" + num2 + "=" + division + "<br>"+ num1 + "%" + num2 + "=" + modulus) 

//  q3
// a
var variable

// b
document.write("<br><br> Value after variable declaration is: " + variable + "<br>");

// c
variable = 5
// d
document.write("Initial value: " + variable + "<br>");
// e
variable++
// f
document.write("Value after increment is: " + variable + "<br>");
// g
variable +=7
// h
document.write("Value after addition is: " + variable + "<br>");
// i
variable--
// j
document.write("Value after decrement is: " + variable-- + "<br>");

// k
var reminder = variable % 1;
// i
document.write("The remainder is: " + reminder + "<br>");


// q4
var ticketPrice = 600
var totalCost = ticketPrice * 5

document.write("<br> q4) The cost of buying 5 tickets to a movie is " + totalCost + " PKR." + "<br><br>");

// q 5
var table = 4

document.write("q5) Table of 4")
document.write("<br>" + table + "x 1 =" + table*1)
document.write("<br>" + table + "x 2 =" + table*2)
document.write("<br>" + table + "x 3 =" + table*3)
document.write("<br>" + table + "x 4 =" + table*4)
document.write("<br>" + table + "x 5 =" + table*5)
document.write("<br>" + table + "x 6 =" + table*6)
document.write("<br>" + table + "x 7 =" + table*7)
document.write("<br>" + table + "x 8 =" + table*8)
document.write("<br>" + table + "x 9 =" + table*9)
document.write("<br>" + table + "x 10 =" + table*10 + "<br>")
document.write("<br>")

// q 6
// a
var celsius = 25;
// b
var fahrenheit = (celsius * 9/5) + 32;
document.write(+ celsius + "<sup>o</sup>C is " + fahrenheit + "<sup>o</sup>F <br>");

// c
var fahrenheit = 70;   
var celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "<sup>o</sup>F is " + celsius + "<sup>o</sup>C <br><br>");

// q 7
// a
var priceOfItem1 = 650;
// b
var priceOfItem2 = 100;
// c
var orderedQuantityOfItem1 = 3;
// d
var orderedQuantityOfItem2 = 7;
// e
var shippingCharges = 100;

var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
document.write("<h1>Shopping Chart</h1>")
document.write( 
    "Price of item 1: " + priceOfItem1 +  "<br>"
    +"Quantity of item 1 is 3 <br>"
    + "Price of item 2: " + priceOfItem2  + "<br>"
    +"Quantity of item 2 is 7 <br>"
    + "Shipping Charges: " + shippingCharges + "<br>"
    + "<strong>Total Cost of your order is: " + totalCost + "</strong>");

// Q8

var totalMarks = 980; 
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br><h1>Mark sheet</h1>Total marks: " + totalMarks + "<br> Marks obtained: " + marksObtained + "<br>"
    + "Parcentage: " + percentage + "%")  
    
// Q9

var usDollars = 10;
var saudiRiyals = 25;
var dollarRate = 104.80;
var riyalRate = 28;
var totalInPkr = (saudiRiyals * riyalRate) + (usDollars * dollarRate);



document.write("<h1>Currency in PKR</h1>Total Currency in <b>PKR</b> : " + totalInPkr)
// q10

var number = 10 , result =((number + 5) * 10 / 2);
document.write("<br><br>Result: " + result);


// Q11
// a.
var currentYear = 2016;
// b. 
var birthYear = 1992; 

// c. 
var age1 = currentYear - birthYear; 
var age2 = age1 - 1;
document.write("<br><br>Current Year: "+currentYear+"<br>Birth Year: " + birthYear +"<br>Your Age is "  + age1  );

// Q12
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<br><br>Radius of a circle: "+ radius+"<br>The circumference is: " + circumference + "<br>The area is: " + area);

// Q13
// a.
var favoriteSnack = "chocolate chip ";
var currentAge = 15;
// c. 
var maxAge = 65; 
// d.
var amountPerDay = 3; 
// e. 
var totalNeeded = (maxAge - currentAge) * (amountPerDay * 365);
document.write("<br><h1>The Lifetime supply calculator</h1>Favourite Snack: "+favoriteSnack +"<br>current age: "+ currentAge + "<br>Estimated Maximum Age: "+ maxAge + "<br>Amount of snacks per day" + "<br>You will need " + totalNeeded + " " + " to last you until the ripe old age of " + maxAge )
 

// chapter no 6 to 9
// Q1
var a = 10
document.write( "<br><br> Results "+"<br>The value of a is: " + a 
+"<br><br>The value of ++a is: " + ++a 
+"<br>Now the value of a is: " + +a
+"<br><br>The value of a++ is: " + a++
+"<br>Now the value of a is: " + a
+"<br><br>The value of --a is: " + --a
+"<br>Now the value of a is: " + a
+"<br><br>The value of a-- is: " + a--
+"<br>Now the value of a is: " + a);

// Q2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br>a is "+ 2 + "<br>b is "+ 1 + "<br>result is "+ result)

// Q3

var user_name = "suleman"
document.write("<br><br>Salaam, " + user_name + "!")

// Q4

//Q5
var number = +prompt("Enter table number..");
document.write(
"<h1>Table</h1>"+  number +"x 1 =" +number * 1 + "<br>" + number +"x 2 =" +number * 2 + "<br>" + number + "x 3 =" + number * 3 + "<br>" + number + "x 4 =" + number * 4 + "<br>" + number +"x 5 =" +number * 5 + "<br>" +number +"x 6 =" +number * 6 +"<br>" +number +"x 7 =" +number * 7 +"<br>" +number +"x 8 =" +number * 8 +"<br>" +number +"x 9 =" +number * 9 +"<br>" +number +"x 10 =" +number * 10 +"<br>");

// Q6

var totalMarksPerSubject = 100;
var marks1 = 54;
var marks2 = 54;
var marks3 = 48;
var totalObtained = marks1 + marks2 + marks3;
var totalMaximum = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalMaximum) * 100;
document.write("<br><table>"+"<tr><th>subject</th><th> total Marks</th><th> obtained Marks</th><th> precentage</th></tr>" + "<tr><td>English</td><td>"+totalMarksPerSubject+"</td><td>"+marks1+"</td><td>"+54+"%"+"</td></tr>"+  "<tr><td>Maths</td><td>"+totalMarksPerSubject+"</td><td>"+marks2+"</td><td>"+54+"%"+"</td></tr>" +  "<tr><td>Urdu</td><td>"+totalMarksPerSubject+"</td><td>"+marks3+"</td><td>"+48+"%"+"</td></tr>"
+  "<tr><td> </td><th>"+300+"</th><th>"+totalObtained+"</th><th>"+percentage+"%"+"</th></tr>"+"</table>")
   
//chapter no 6 (Math Expression II)
// Q1
var x1 = x1+1 
x1++;

//Q2
var x1 = 100;
x1--;
document.write("<br>x = "+x1)

// Q3
var x1 = 50;
var y1 = ++x1;
document.write("<br>y = "+ y1 )
// Q4
var y1 = 50;
var z1 = --y1;
document.write("<br>z = " + z1)

// Q5
var num1 = 5;
var newNum;
newNum = num1--;

// Q6
var num2 = 5;
var originalNum;
originalNum = num2++;

// Q7
var number$ = 5;
number$++;
document.write("<br><br> " +number$);

// Chapter 7 (Math Expression III)
// Q1
var calculatedNum = 2 + (2 * 6);
document.write("<br><br>" +calculatedNum );

// Q2
var calculatedNum1 = (2 + 2) * 6;
document.write("<br><br>"+calculatedNum1);

// Q3
var calculatedNum2 = (2 + 2) * (4 + 2);
document.write("<br><br>"+ calculatedNum2);

// Q4
var calculatedNum3 = ((2 + 2) * 4) + 2;
document.write("<br><br>"+ calculatedNum3)

// Q5
//  2 + 2 * 4 + 10   result (56) 
var cost = (2 + 2) * ( 4 + 10 );
document.write("<br><br>" + cost)

// Q6
//  2 + 2 * 4 + 10 result (20)
var units = 2 + (2 *  4) + 10 ;
document.write("<br><br>" + units)

// Q7 
//  4/2*4 result (5)
var pressure = 4 / (2*4)
document.write("<br><br>" + pressure)



//Chapter 8 (Concatenating Text Strings)

// Q1
var num3 = "2" +"2";
document .write("<br><br>" + num3)

// Q2
var message = ("Hello," + "Dolly");
alert(message);

// Q3
alert("33" + 3);

// Q4
var part1 = "Pakistan ";
var part2 = "Zindabad";
alert(part1 + part2);

// Q5
var myname = "suleman" + 786

// Q6

var string1 = "Hello, ";
var string2 = "World!";
var concatenatedString = string1 + string2;
alert(concatenatedString);



// Chapter 9 (Prompts)

// Q1
var firstName = prompt("Enter first name");

// Q2
var country = prompt("Country?", "China");

// Q3
var yourName = prompt("Enter Your Name");

// Q4
var userInput = prompt("Please enter your favorite color", "Blue");

// Q5
var promptMessage = "What is your favorite movie?";
var defaultResponse = "Inception";
var userFavoriteMovie = prompt(promptMessage, defaultResponse);


// Q6
var promptMessage = "What is your favorite book?";
var defaultResponse = "Harry Potter";
var userResponse = prompt(promptMessage, defaultResponse);
alert(userResponse);