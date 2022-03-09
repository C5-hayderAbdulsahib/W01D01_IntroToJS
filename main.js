console.log(arrowTitle);
/* START CODE UNDER THIS LINE */

// partice 1
// Predict the value of the following expressions then try them out in the console

console.log(9 + 1 * 5); // 14
console.log(9 % 2); // 1
console.log((9 / 3) * (10 - 7)); // 9
console.log(21 / 3 + 3 * 9 * 9 + 5); // 255
console.log(36 / 9 + 48 - 10 / 2); // 47

// practice 2
// Figure out the syntax errors in the following variable declarations, and fix them.

/*
const @name = 'John'; ---> the variable name must not start with @
const 'age' = 10; ---> we nust remove the single quote from age
const const = "Constant"; ----> we must not use  a keyword as a variable
const variable 1 = "value"; ------> we must remove the space between the vaiable and the 1
*/

// prctice 3
let color = "red";
let positiveNumber = 5;
let food = "pizza";
let PhoneNumber = "+962 798452429";

//practice 4
// Before trying the following expressions try to predict the outcome.

10 + "10"; // 1010
"10" + "10"; // 1010
10 + 10 + "5"; // 205
"Hello" + 1; // Hello1
"10" + 5 + 5; // 1055
"20" - 10; // 10
"9" - "5"; // 4
"19" - "13" + 17; // 23
"B" + "A" + +"A" + "A"; // BANaNA
5 + 6 + "4" + 9 - 4 - 2; // 1143

//practice 5
// Using string concatenation write an expression that represents your first name, last name, gender, and nationality.
console.log("hayder" + "abdulsahib" + "male" + "Iraqi");

//practice 6
// Write an expression that represents the number of seconds in 30 days.
console.log(30 * 24 * 60 * 60);

//prcatice 7
// Reassign the value of a to make the following expression equal to nine
let a; //it will be a = 29
let b = 3;
let c = 10;

console.log(c - b * c + a);

//practice 8
// Using the variables below write an expression that calculates the total amount for buying two coffee cups.
// // tip and tax amounts are a percentage of the total billed amount
// const tip = 0.1;
// const taxRate = 0.08;
// const coffeeCupPrice = 6;

const tip = 0.1;
const taxRate = 0.08;
const coffeeCupPrice = 6;
let numberOfCups = 2;
let totalPrice = coffeeCupPrice * numberOfCups;
let tipAmount = totalPrice * tip;
let taxAmount = totalPrice * taxRate;
let totalAmount = totalPrice + tipAmount - taxAmount;
console.log(totalAmount);

// practice 9
// Write an expression that represents the average grade of an exam, knowing that in a class of ten students, five of them got 24/30, two of them got 16/30 and the remainder got 29/30.
let totalGradeFor24Mark = 24 * 5;
let totalGradeFor16Mark = 16 * 2;
let totalGradeFor29Mark = 29 * 3;
let averageGradeForWholeClass =
  (totalGradeFor24Mark + totalGradeFor16Mark + totalGradeFor29Mark) / 10;

console.log(averageGradeForWholeClass);

//practice 10
// Write expressions that calculate the area and the perimeter of a rectangle with the length of 10m and width of 5m.

let length = 10;
let width = 5;
let rectangleArea = length * width + "m";
console.log("the rectangle area is: " + rectangleArea);
let rectanglePerimeter = 2 * (length + width) + "m";
console.log("the rectangle perimeter is: " + rectanglePerimeter);

//practice 11
// Write expressions that calculate the diameter and the circumference of a circle with the radius of 5m.

let radius = 5;
let circleDiameter = 2 * radius + "m";
console.log("the circle  diameter is: " + circleDiameter);
let circleCircumference = 2 * 3.14 * radius + "m";
console.log("the circle  circumference is: " + circleCircumference);

// practice 12
// Write an expression that converts 30 degrees celsius to fahrenheit.

let celsiusDegree = 30;
let fahrenheitDegree = celsiusDegree * 1.8 + 32;
console.log("the fahrenheit degree is: " + fahrenheitDegree);
