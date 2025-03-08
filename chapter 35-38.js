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
// answer:
// function calculatingFactorial() {
// let num = +prompt("enter a number")
//     let value = 1;
//     if(num == 0 || num == 1){
//         document.write("no factorial is required")
//     }
//     else{
//         for (let i = num; i >= 1; i--) {
//             value = value * i
//         }
//     }
// document.write(value)
// }
// calculatingFactorial()

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
// answer:
// let userInput1 = +prompt("enter base of right angle triangle")
// let userInput2 = +prompt("enter perpendicular of right angle triangle")
// function calculatingHypotenuse(base,perpendicular){
//     function calulatingSquare(number){
//     return number*number
//     }
//     let baseSquare = calulatingSquare(base);
//     let perpendicularSquare = calulatingSquare(perpendicular);
//     return baseSquare + perpendicularSquare
// }
// let hypotenuse = calculatingHypotenuse(userInput1, userInput2)
// document.write(hypotenuse);

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
// answer:
// let word = prompt("enter any word to check whether if its palindrome or not");
// function checkingPalindromeSequence(word){
// let change = word.split("").reverse().join("");
// if(change == word){
//     document.write(word + " is a palindrome word")
// }
// else{
//     document.write(word + " is not a palindrome word")
// }
// }
// checkingPalindromeSequence(word)

// Question 11 Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// answer:
// let userInput = prompt("enter a word to be capitalize");
// let answer = [];
// function titleCase(word) {
//     let spliting = word.split(" ");
//     for (let i = 0; i < spliting.length; i++) {
//         answer.push(spliting[i][0].toUpperCase() + spliting[i].slice(1).toLowerCase());
//     }
// }
// titleCase(userInput);
// document.write(answer.join(" "));

// Question 12 Write a JavaScript function that accepts a string as a parameter and find the longest
// word within the string.
// answer:
// function string(statement) {
//     let spliting = statement.split(" ");
//     let sample = spliting[0].length;
//     for (i = 0; i < spliting.length; i++) {
//         if (sample < spliting[i].length) {
//             sample = spliting[i]
//         }
//     }
//     return sample;
// }

// let word = prompt("enter a line to get its longest word");
// let result = string(word);
// document.write("given input: " + word + "<br />" + "expected output: " + result)

// Question 13 Write a JavaScript function that accepts two arguments, a string and a letter and the function 
// will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .
// answer:
// function repeat(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// }
// let string = "JSResourceS.com";
// let letter = "o";
// let result = repeat(string, letter);
// document.write("the number of occurences of letter " + letter + " is " + result)

// Question 14 Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// answer:
// function calcCircumference(radius){
//     let circumference = 2*3.142*radius;
//     return circumference;
// }
// function calcArea(radius){
//     let area = 3.142*(radius*radius)
//     return area;
// }
// let radius = +prompt("enter radius of a circle to calculate its circumference and area")
// let area = calcArea(radius);
// let circumference = calcCircumference(radius);
// document.write("The circumference of a circle is: " + circumference + "<br />" + "The area of a circle is: " + area)

// ---- X ----------------- X ------------------ X ------------------ X ----