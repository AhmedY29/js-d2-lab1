let characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

// Map 1 Get array of all names only
console.log("===============Get array of all names only==============");
let numbers = characters.map((currentValue) => {
  return currentValue[0];
});

console.log(numbers);

// Map 2 Get array of all heights only
console.log("============Get array of all heights only====================");
let heights = characters.map((currentValue) => {
  return currentValue.find((e) => {
    return e > 90;
  });
});

console.log(heights);

// Reduce

console.log(
  "===========Get total height of all characters=================================="
);
let totalHeights = heights.reduce((sum, e) => {
  return sum + e;
}, 0);
console.log(totalHeights);

// Filter height less than 200
console.log(
  "==================Filter height less than 200==========================="
);
let lessHeight = heights.filter((e) => {
  return e < 200;
});
console.log(lessHeight);

console.log(
  "==================Filter Get all male characters==========================="
);
let maleGender = characters.filter((e) => {
  return e.find((el) => el == "male");
});

console.log(maleGender);

// Sort
console.log("================Sort by height=============================");

let sortHeights = heights.slice().sort((a, b) => b - a);

console.log(sortHeights);

console.log("================Sort by mass=============================");

let mass = characters.slice().sort((a, b) => b[3] - a[3]);

console.log(mass);

// Every
// Does every character have mass more than 40?
console.log(
  "==================Does every character have mass more than 40==========================="
);
let massMoreThanForty = mass.every((e) => {
  return e > 40;
});

console.log(massMoreThanForty);

// Is every character shorter than 200?
console.log(
  "==================Is every character shorter than 200?==========================="
);

let shorterThanTwoHundred = heights.every((e) => {
  return e < 200;
});

console.log(shorterThanTwoHundred);

// Some
console.log(
  "=====================Is there at least one character with blue eyes?========================"
);

let blueEyes = characters.some((e) => e.find((element) => element == "blue"));

console.log(blueEyes);

console.log(
  "===============Is there at least one character taller than 210?=============================="
);

let taller = characters.some((e) => e.find((element) => element > 210));

console.log(taller);
