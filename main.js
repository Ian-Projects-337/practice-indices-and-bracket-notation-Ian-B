/*
Tasks
Make sure to write the code for each task using only bracket notation.
Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.
Task 2: Access and log all the elements in the array using bracket notation with
numbers.
Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.
Task 4: Write a loop that prints all the items on the second shelf
*/
// task 1 
let movieList = [
  ["movie1","movie2","movie3",],
  ["movie4","movie5","movie6",],
  ["movie7","movie8","movie9",]
];
// task 2
console.log(movieList[0][0]);
console.log(movieList[0][1]);
console.log(movieList[0][2]);
console.log(movieList[1][0]);
console.log(movieList[1][1]);
console.log(movieList[1][2]);
console.log(movieList[2][0]);
console.log(movieList[2][1]);
console.log(movieList[2][2]);
// task 3
for (let row = 0; row < movieList.length; row++) {
  for (let item = 0; item <movieList[row].length; item++) {
    console.log(movieList[row][item]);
  }
}
// task 4 
for (let i = 0; i < movieList[1].length; i++) {
  console.log(movieList[1][i]);
}
