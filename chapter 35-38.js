// ASSIGNMENT - FUNCTIONS

// Question 1 Write a function that displays current date & time in your browser.
// answer:
// function timeAndDate(){
//     let date = new Date();
//     document.write(date)
// }
// timeAndDate()

// Question 2 Write a function that takes first & last name and then it
// greets the user using his full name.
// answer:
// function greet(){
//     let firstName = prompt("enter your first name");
//     let lastName = prompt("enter your last name");
//     let greet = "hello! ";
//     let fullName = greet + firstName + " " + lastName
//     return fullName
// }
// alert(greet());

// Question 3  Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
// answer:
// function sum(){
//     let num1 = +prompt("enter a number");
//     let num2 = +prompt("enter another number");
//     let total = num1 + num2
//     alert("the sum of " + num1 + " and " + num2 + " is " + total)
// }
// sum()

// Question 4 Write a function that takes three arguments num1, num2 & operator & compute the desired
// operation. Return and show the desired result in your browser
// answer:
// function operation(num1, operator, num2){
//     if(operator == "+"){
//         let answer = num1 + num2;
//         alert(answer)
//     }

//     else if(operator == "-"){
//         let answer = num1 - num2;
//         alert(answer)
//     }

//     else if(operator == "*"){
//         let answer = num1 * num2;
//         alert(answer)
//     }

//     else if(operator == "/"){
//         let answer = num1 / num2;
//         alert(answer)
//     }

//     else{
//         alert("Try another operator!")
//     }
// }

// let firstNum = +prompt("enter first number");
// let secondNum = +prompt("enter second number");
// let sign = prompt("enter an operator");
// operation(firstNum, sign, secondNum);

// Question 5 Write a function that squares its argument.
// answer:
// function square(number){
//     let squaring = number * number;
//     alert(squaring)
// }

// let userInput = +prompt("enter a number to get its squared value");
// square(userInput);

// Question 6 Write a function that computes factorial of a number.


// Question 7 Write a function that take start and end number as inputs
// & display counting in your browser.
// answer:
// function loop(startnum, endNum){
// for(i=startnum; i<=endNum; i++){
//     document.write(i + "<br />")
// }
// }
// let firstNum = +prompt("its a counting! enter a start number")
// let lastNum = +prompt("its a counting! enter a last number")
// loop(firstNum, lastNum)

// Question 8 Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// Question 9 Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// answer:
// function area(width, height){
//     areaRectangle = width * height
//     document.write(areaRectangle)
// }
// let width = +prompt("enter width of rectangle");
// let height = +prompt("enter height of rectangle");
// area(width, height)

// Question 10 Write a JavaScript function that checks whether a passed string is palindrome or not?


// Question 11 Write a JavaScript function that accepts a string as a parameter and converts the 
// first letter of each word of the string in upper case.
// answer:
// function titleCase(word){
// for(i=0; i<word.length; i++){
//     document.write(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     break;
// }
// }
// let userInput = prompt("enter a word to be capitalize");
// titleCase(userInput);

// Question 12 Write a JavaScript function that accepts a string as a parameter and find the longest
// word within the string. 
// answer:
// function string(statement) {
//     let split = statement.split(" ");
//     let sample = split[0].length;
//     for (i = 0; i < split.length; i++) {
//         if (sample < split[i].length) {
//             sample = split[i]
//         } 
//     }
//     document.write(sample);
// }

// let word = prompt("enter a line to get its longest word");
// string(word);

// Question 13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .


// Question 14 Create 2 functions that calculate properties of a circle, using
// the definitions here.