//---01
// let studentsGrades = [60, 100, 10, 15, 85];
// console.log(studentsGrades.sort((a, b) => b - a));
// console.log(studentsGrades.find((g) => g >= 100));
// console.log(studentsGrades.filter((g) => g <= 60));

//---03
// alert("Welcome to my site");
// let userName = prompt("Enter your name");
// document.write("welcome " + userName);

//---04
// let userEmail = prompt("Enter your email");
// console.log(userEmail.includes("@"));

//---05
// const stringRegex = /^[A-Za-z\s]+$/;
// const birthYearRegex = /^\d+$/;
// do {
//   var userName = prompt("Enter your name");
// } while (!stringRegex.test(userName));
// do {
//   var userBirthYear = prompt("Enter your birth year");
// } while (
//   !birthYearRegex.test(userBirthYear) ||
//   Number(userBirthYear) >= 2010
// );
// let age = 2026 - userBirthYear;
// document.writeln("Name: " + userName + "<br/>");
// document.writeln("Birth year: " + userBirthYear + "<br/>");
// document.writeln("Age: " + age);

//---06
// const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;
// const fullNameRegex = /^[\p{L}]{3,}(?:\s[\p{L}]{3,})*$/u;
// do {
//   var userName = prompt("Enter your full name");
// } while (!fullNameRegex.test(userName));
// do {
//   var userEmail = prompt("Enter your email");
// } while (!emailRegex.test(userEmail));

//?String , data and RegExp Objects

//---1.1
// const stringRegex = /^[A-Za-z\s]+$/;
// const singleCharRegex = /^[A-Za-z]$/;
// do {
//   var input = prompt("enter any word");
// } while (!stringRegex.test(input));
// do {
//   var singleChar = prompt("Enter one Letter your need to count");
// } while (!singleCharRegex.test(singleChar));
// let isLetterCases = confirm();
// let textToCheck = isLetterCases ? input : input.toLowerCase();
// let charToCheck = isLetterCases ? singleChar : singleChar.toLowerCase();
// let count = 0;
// for (let i = 0; i < textToCheck.length; i++) {
//   if (textToCheck[i] === charToCheck) {
//     count++;
//   }
// }
// console.log(
//   "The letter " + singleChar + " appears " + count + " times in the text.",
// );

//---1.2
// let inputString = prompt("Enter a string to check if it's a palindrome:");
// let isCaseSensitive = confirm("Do you want to consider case sensitivity?");
// if (!isCaseSensitive) {
//   inputString = inputString.toLowerCase();
// }
// let processedString = inputString.replace(/\s+/g, "");
// let reversedString = processedString.split("").reverse().join("");
// if (processedString === reversedString) {
//   console.log(inputString + " is a palindrome.");
// } else {
//   console.log(inputString + " is not a palindrome.");
// }

//---1.3
// function largestWord(str) {
//   let words = str.split(" ");
//   let maxWord = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > maxWord.length) {
//       maxWord = words[i];
//     }
//   }
//   return maxWord;
// }
// let input = "this is a javascript string demo";
// console.log(largestWord(input));
