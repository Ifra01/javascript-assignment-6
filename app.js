// ASSIGNMENT 6
// CHAPTER 26 - 30 --- MATH METHODS;

// Question 1 Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// answer:
// let userInput = +prompt("enter a positive integer (number can have decimal)");
// let roundOff;
// let floorValue;
// let ceilValue;

// roundOff = Math.round(userInput);
// floorValue = Math.floor(userInput);
// ceilValue = Math.ceil(userInput);

// document.write("number: " + userInput + "<br />" + "round off value: "
//  + roundOff + "<br />" + "floor value: " + floorValue + "<br />" + "ceil value: " + ceilValue );

// Question 2 Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// answer:
// let userInput = +prompt("enter a negative integer (number can have decimal)");
// let roundOff;
// let floorValue;
// let ceilValue;

// roundOff = Math.round(userInput);
// floorValue = Math.floor(userInput);
// ceilValue = Math.ceil(userInput);

// document.write("number: " + userInput + "<br />" + "round off value: "
//  + roundOff + "<br />" + "floor value: " + floorValue + "<br />" + "ceil value: " + ceilValue );

// Question 3 Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// answer:
// let userInput = +prompt("enter a number");
// let absolute = Math.abs(userInput);
// document.write("The absolute value of " + userInput + " is " + absolute);

// Question 4 Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// let math = Math.floor((Math.random()*6)+1);
// document.write("Random dice value: "  + math)

// Question 5 Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// let maths = Math.floor((Math.random()*2)+1);
// if(maths == 1){
//     document.write(maths + "<br />" + "random coin value: Tails")
// }
// else{
//   document.write(maths + "<br />" + "random coin value: Heads")  
// }

// Question 6 Write a program that shows a random number between 1
// and 100 in your browser.
// let random = Math.floor((Math.random()*100)+1);
// document.write("Random number between 1 to 100 is: "  + random);

// Question 7 Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// answer:
// let userWeight = +prompt("enter your weight in kilograms");
// let parse = parseFloat(userWeight).toFixed(1); 
// above, number function can also be used
// document.write("The weight of user is: " + parse)

// Question 8 Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// let secretNum = 6;
// let userInput = +prompt("enter a number between 1 to 10");
// let remarks;
// if (userInput == secretNum) {
//     remarks = "congratulation! you guessed it right."
// }
// else {
//     remarks = "wrong answer! try again."
// }
// document.write(remarks)