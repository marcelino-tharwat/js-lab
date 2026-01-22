// ---1.1
// var radius = prompt("Enter the radius of the circle");
// radius = Number(radius);
// var area = Math.PI * radius * radius;
// alert("The area of the circle is: " + area);

// ---1.2
// var number = prompt("Enter a number to calculate its square root");
// number = Number(number);
// var squareRoot = Math.sqrt(number);
// alert("The square root of " + number + " is: " + squareRoot);

// ---1.3
// var angle = prompt("Enter an angle");
// angle = Number(angle);
// var radian = angle * (Math.PI / 180);
// var cosValue = Math.cos(radian);
// cosValue = cosValue.toFixed(2);
// alert("cos " + angle + " is " + cosValue);

// ---2
// function printOddNumbers(start, end) {
//   for (var i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// printOddNumbers(1, 10);

// ---3
// var tips = [
//   "Always use semicolons to end your statements.",
//   "Use === instead of == for comparison.",
//   "JavaScript is case sensitive.",
//   "Use let and const instead of var when possible.",
//   "Always validate user input.",
//   "Use comments to explain your code.",
//   "Practice writing functions to organize your code.",
//   "Use console.log() to debug your code.",
//   "JavaScript runs from top to bottom.",
//   "Always give meaningful variable names.",
// ];
// var randomIndex = Math.floor(Math.random() * tips.length);
// alert("Tip of the Day:\n" + tips[randomIndex]);

// ---4
// function calculateSimpleExpression() {
//   var input = prompt("Enter a simple math expression (e.g. 3+5, 10*2)");
//   var operator;
//   if (input.includes("+")) operator = "+";
//   else if (input.includes("-")) operator = "-";
//   else if (input.includes("*")) operator = "*";
//   else if (input.includes("/")) operator = "/";
//   else {
//     alert("Invalid expression!");
//     return;
//   }
//   var numbers = input.split(operator).map(Number);
//   var num1 = numbers[0];
//   var num2 = numbers[1];
//   var result;
//   if (operator === "+") result = num1 + num2;
//   else if (operator === "-") result = num1 - num2;
//   else if (operator === "*") result = num1 * num2;
//   else if (operator === "/") result = num1 / num2;
//   alert("You entered: " + input + ", and the result is: " + result);
// }

// ---5
// var students = [
//   { Name: "Marcelino", Degree: 95 },
//   { Name: "Kero", Degree: 85 },
//   { Name: "Ahmed", Degree: 55 },
//   { Name: "Omar", Degree: 70 },
//   { Name: "Laila", Degree: 92 },
// ];
// var topStudent = students.find(
//   (student) => student.Degree >= 90 && student.Degree <= 100,
// );
// console.log("Student with degree between 90 and 100:", topStudent.Name);
// var failedStudents = students.filter((student) => student.Degree < 60);
// failedStudents.forEach((student) =>
//   console.log("Students with degree less than 60: " + student.Name),
// );
// students.push({ Name: "Hassan", Degree: 78 });
// console.log("After adding Hassan:");
// for (var index in students) {
//   console.log(students[index]);
// }
// students.pop();
// console.log("After removing last student:");
// for (var student of students) {
//   console.log(student);
// }
// students.sort((a, b) => a.Name.localeCompare(b.Name));
// console.log("After sorting by Name:");
// console.log(students);
// students.splice(
//   2,
//   0,
//   { Name: "Tamer", Degree: 88 },
//   { Name: "Nada", Degree: 90 },
// );
// console.log("After adding Tamer and Nada:");
// console.table(students);
// students.splice(3, 1);
// console.log("After removing 1 student after third element:");
// console.table(students);
