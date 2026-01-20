/// 1.1

// let message = prompt("enter a message");
// for (let i = 1; i <= 6; i++) {
//   document.write("<h" + i + ">" + message + "</h" + i + ">");
// }

///1.2

// let num;
// let sum = 0;
// do {
//   num = Number(prompt("Enter a number"));
//   sum += num;
// } while (num !== 0 && sum <= 100);
// console.log(sum);

//1.3

// remainder(10, 4, 5);
// function remainder(x, y, z) {
//   if (x % y == 0 && x % z == 0) {
//     console.log(x + " is divisible by both " + y + " and " + z);
//   } else if (x % y == 0) {
//     console.log(x + " is divisible by " + y);
//   } else if (x % z == 0) {
//     console.log(x + " is divisible by " + z);
//   }
// }

// 1.4

// let x, y, z;

// do {
//   x = prompt("Enter number x");
// } while (x === null || x === "" || isNaN(Number(x)));

// x = Number(x);

// do {
//   y = prompt("Enter number y");
// } while (y === null || y === "" || isNaN(Number(y)));

// y = Number(y);

// do {
//   z = prompt('Enter "no" or "odd" or "even"');
// } while (z === null || z === "" || (z !== "no" && z !== "odd" && z !== "even"));

// let sum = 0;

// rangeDisplay(x, y, z);

// function rangeDisplay(x, y, z) {
//   for (let i = x; i <= y; i++) {
//     if (z === "no") {
//       console.log(i);
//       sum += i;
//     }

//     if (z === "odd" && i % 2 !== 0) {
//       console.log(i);
//       sum += i;
//     }

//     if (z === "even" && i % 2 == 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
// }
// console.log("sum is= " + sum);
