let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

//1
console.log("==================Start With A==========================");
let studentsWithA = students.filter((e) => {
  return e[0] == "A" || e[0] == "a";
});

console.log(studentsWithA);

//2
console.log("==================More than 4 letters ==========================");
let moreThanFour = students.filter((e) => {
  return e.length >= 4;
});

console.log(moreThanFour);

//3
console.log("==================Names to Upper Case==========================");
let upperCase = students.map((e) => e.toUpperCase());

console.log(upperCase);

//4
console.log("==================Start With R==========================");
let startWithR = students.filter((e) => {
  return e[0] == "R" || e[0] == "r";
});

console.log(startWithR);

// 5
console.log("=====================Sort Names==========================");

let sortStudent = students.slice().sort();

console.log(sortStudent);

// 6
console.log(
  "=====================Is Omar in Array ?=========================="
);

let omarHere = students.includes("Omar");

console.log(omarHere);

// 6
console.log("=====================length Of Stu==========================");

let lengthOfStu = students.map((e) => e.length);
let totalLen = lengthOfStu.reduce((sum, e) => sum + e);

console.log(totalLen);

// 6
console.log(
  "=====================Is length Of Stu Even?=========================="
);

let evenLen = students.map((e) => e).filter((e) => e.length % 2 == 0);

console.log(evenLen);

// 7
console.log("=====================Reverse Names==========================");

let reverseNames = students.map((e) => e.split("").reverse().join(""));

console.log(reverseNames);

//8
console.log("=====================With Out O==========================");

let withOutO = students.filter((e) => {
  return e[0] !== "o" && e[0] !== "O";
});

console.log(withOutO);

//9

console.log("=====================Add Grades==========================");

let newStudent = students.slice();

newStudent[0] = ["Ali", [85, 90, 78]];
newStudent[1] = ["Sara", [77, 87, 78]];
newStudent[2] = ["Ahmed", [99, 99, 99]];
newStudent[3] = ["Lana", [65, 84, 90]];
newStudent[4] = ["Omar", [92, 90, 88]];
newStudent[5] = ["Noor", [79, 82, 93]];

console.log(newStudent);
