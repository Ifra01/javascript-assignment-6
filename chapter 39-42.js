// ASSIGNMENT - CHAPTER 39-42 - FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE LOOPS 

// Question 1 Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// answer:
// function power(base, exponent) {
//     let response = base ** exponent;
//     return response
// }

// let a = +prompt("enter a number to be a base");
// let b = +prompt("enter a number to be an exponent");
// let result = power(a,b);
// document.write(a + "<sup>" + b + "</sup>" + " is equal to " + result);

// Question 2 Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
// answer:
// let userYear = prompt("enter the year");
// switch (userYear) {
//     case "2012":
//         alert("Leap year")
//         break;
//     case "2016":
//         alert("Leap year")
//         break;
//     case "2020":
//         alert("Leap year")
//         break;
//     default:
//         alert("not a leap year")
// }

// Question 3 If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// answer:
// function area(s1, s2, s3) {
//     let S = calculatingS(s1, s2, s3);
//     let area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }
// function calculatingS(a, b, c) {
//     let find = (a + b + c) / 2
//     return find
// }
// let a = +prompt('enter length of first side of triangle');
// let b = +prompt('enter length of second side of triangle');
// let c = +prompt('enter length of third side of triangle');
// let result = area(a, b, c)
// document.write('The area of triangle is '+ result)

// Question 4 Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// answer:

// function mainFunction() {
//     let englishMarks = +prompt("enter your marks in subject 1");
//     let urduMarks = +prompt("enter your marks in subject 2");
//     let mathsMarks = +prompt("enter your marks in subject 3");
//     let totalMarks = +prompt("enter total marks");
//     let averageValue = averageMarks(englishMarks, urduMarks, mathsMarks);
//     let percentValue = percentage(englishMarks, urduMarks, mathsMarks, totalMarks);
//     document.write("The average marks are " + averageValue);
//     document.write("<br />" + "Percentage: " + percentValue);
// }
// function averageMarks(a, b, c) {
//     let average = (a + b + c) / 3;
//     average = average.toFixed(2);
//     return average;
// }
// function percentage(a, b, c, totalMarks) {
//     let percent = ((a + b + c) / totalMarks) * 100;
//     percent = percent.toFixed(2);
//     return percent;
// }
// mainFunction();


// Question 5 You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
// answer:
// function findingIndex(string,userValue){
//     let indexing;
//     for(let i=0;i<string.length;i++){
//         if(string[i] === userValue){
//             indexing = i;
//             break;
//         }
//     }
//     return indexing;
// }

// let string = "I'm ifra jamal";
// let userInput = prompt("enter a character to get its index number");
// let IndexNum = findingIndex(string,userInput);
// document.write("The index number of " + userInput + " is " + IndexNum)

// Question 6 Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
// answer:

// let userInput = prompt("enter a line less than 25 character long")
// function vowelElimination() {
//     let removingChar = "";
//     for (let i = 0; i < userInput.length; i++) {
//         if (userInput[i] == "a" || userInput[i] == "A" || userInput[i] == "e" || userInput[i] == "E" || userInput[i] == "I" || userInput[i] == "i" || userInput[i] == "O" || userInput[i] == "o" || userInput[i] == "U" || userInput[i] == "u") {
//             continue
//         }
//         else {
//             removingChar = removingChar + userInput[i]
//         }
//     }
//     return removingChar;
// }

// let result = vowelElimination();
// document.write("Before: " + userInput + "<br />" + "After: " + result)

// Question 7 Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
// answer:
// let str = "Pleases read this application and give me gratuity";
// let count = 0;
// let character = [];
// function findingVowel(string) {
//     for (let i = 0; i < string.length; i++) {
//         let firstChar = string[i];
//         let secondChar = string[i + 1];
//         if (checkingVowel(firstChar) && checkingVowel(secondChar)) {
//             count++;
//             character.push(firstChar + secondChar);
//         }
//     }

// }
// findingVowel(str)
// function checkingVowel(char) {
//     switch (char) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true;
//         default:
//             return false;
//     }
// }

// document.write("the number of occurences are: " + count + "<br />" + "letters are: " +character)

// Question 8 The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// answer:
// let distance = +prompt("enter the distance in KM to convert in lower units");
// inMeters(distance)
// inFeet(distance)
// inInches(distance)
// inCentimeters(distance)
// function inMeters(dist) {
//     let meterDistance = dist * 1000;
//     document.write("The distance from A to B is: " + meterDistance)
// }

// function inFeet(dist){
//     let feetDistance = dist * 3281;
//     document.write("<br />" + "The distance from A to B is: " + feetDistance)
// }

// function inInches(dist){
//     let inchesDistance = dist * 39370;
//     document.write("<br />" + "The distance from A to B is: " + inchesDistance)
// }

// function inCentimeters(dist){
//     let centimetersDistance = dist * 100000;
//     document.write("<br />" + "The distance from A to B is: " + centimetersDistance)
// }

// Question 9 Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
// answer:
// let workingHours = +prompt("enter your working hours");
// let extraPayPerHour = 12
// let overTime;
// let overTimePay;

// if (workingHours > 40) {
//     overTime = workingHours - 40;
//     overTimePay = overTime * extraPayPerHour;
//     alert("your overtime pay of " + overTime + " hours is " + overTimePay)
// }
// else {
//     alert("you need to work more to get overtime pay")
// }

// Question 10 A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer
// answer:
// let amount = +prompt("Enter amount to Withdraw")
// let hundredNotes = parseInt(amount / 100)
// let fiftyNotes = parseInt((amount % 100) / 50)
// let tenNotes = parseInt((((amount % 100) % 50) / 10))

// document.write("Entered amount: " + amount + "<br />");
// document.write("You will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.")

// X ---------------- X ----------------- X ---------------------X ---