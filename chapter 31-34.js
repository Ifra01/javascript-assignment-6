// CHAPTER 31-34 - DATE METHODS;

// Question 1 Write a program that displays current date and time in
// your browser.
// answer:
// let date = new Date();
// document.write(date);

// Question 2 Write a program that alerts the current month in words.
// For example December.
// answer:
// let months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// let date = new Date;
// let month = date.getMonth();
// document.write("Current month: " + months[month]);

// Question 3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// answer:
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let date = new Date();
// let day = date.getDay();
// document.write("Current day: " + days[day]);

// Question 4 Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// answer:
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let date = new Date();
// let day = date.getDay();
// if (days[day] == "Sun" || days[day] == "Sat") {
//     alert("It’s Fun day")
// }
// else {
//     alert("it's working day")
// }

// Question 5 Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// answer:
// let date = new Date();
// if(date < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last fifteen days of the month")
// }

// Question 6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// let date = new Date();
// let minutes_Midnight_1Jan_1970 = date.getTime();
// document.write("Current date: " + date + "<br />" + "Elapsed minutes since January 1, 1970: " + minutes_Midnight_1Jan_1970 + "<br />")
// document.write("Elapsed milliseconds since January 1, 1970: " + (minutes_Midnight_1Jan_1970)*(60*1000))

// Question 7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// answer:
// let date = new Date();
// let hour = date.getHours();
// if(hour < 13){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM") 
// }

// Question 8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// answer:
// let laterDate = new Date("31 December 2024");
// document.write(laterDate);

// Question 9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// answer:
// let date = new Date();
// let RamadanTimings = new Date("18 June 2015");
// let differenceInMilliseconds = date - RamadanTimings;
// let conversion = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
// document.write(conversion + " days have passed since 1st Ramadan 2015")

// Question 10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// answer:
// let date = new Date("1 January 2015");
// let referenceData = new Date();
// let difference = referenceData - date;
// let conversion = Math.floor(difference / 1000);
// document.write("On reference data: " + referenceData + "<br />" + conversion + " seconds had passed since beginning of 2015")

// Question 11 Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// answer:
// let date = new Date();
// let hours = date.getHours();
// let anHourBefore = hours - 1;
// document.write("Current date: " + date )
// date.setHours(anHourBefore);
// document.write("<br />" + "1 hour ago, it was " + date)

// Question 12 Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// answer:
// let date = new Date();
// let years = date.getFullYear();
// let aCenturyBefore = years - 100;
// document.write("Current date: " + date )
// date.setFullYear(aCenturyBefore);
// document.write("<br />" + "100 years ago, it was " + date)

// Question 13 Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// answer:
// let userAge = +prompt("enter your age");
// let date = new Date();
// let year = date.getFullYear();
// let difference = year - userAge;
// document.write("Your age is " + userAge + "<br />" + "Your birth year is " + difference)

// Question 14 Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// answer:
// let date = new Date();
// let months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// let month = date.getMonth();
// // (a)
// let customerName = "Haneen Yousuf";
// // (b)
// let currentMonth = months[month];
// // (c)
// let noOfUnits = 410;
// // (d)
// let chargesPerUnit = 16;
// // (e)
// let netAmountPayable = noOfUnits * chargesPerUnit;
// // (f)
// let latePaymentSurcharge = 350;
// // (g)
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer name: " + customerName + "<br />");
// document.write("Current month: " + currentMonth + "<br />");
// document.write("Number of units: " + noOfUnits + "<br />");
// document.write("Charges per unit: " + chargesPerUnit + "<br />");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br />");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br />");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br />");

// X   ------------------------    X    ------------------------    X    --------------------------    X