// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Using Arrays        */
/***********************/

// Complete the Following Exercises

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise; these are to make the console output more readable :)
// Accessing an array
// - First, log the word "jumped" to the console by accessing it in the array.
// - Second, log the last word of the array to the console.
// - Your code should return the following:
//     jumped
//     fence
// Write your code here 👇

let sentence = ["The", "dog", "jumped", "over", "the", "fence"];

function kata1() {
    console.log(sentence[2]);
    console.log(sentence[sentence.length - 1]);
}
kata1();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// Adding up numbers
// - Create a statement that adds up every number of the array, assigning the sum to a new variable.
// - Log the sum to the console.
//   You don't need to do anything fancy here, like loops or functions. Just access every index of the array and add up the numbers in one big equation.
// - Your code should output the following:
//     28
// Write your code here 👇

let numbers = [3, 4, 5, 7, 9];

function kata2() {

}
kata2();


// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// Creating an array
// - Create a new array containing the names of five different colors. The array should be named "colors".
// - Log that array to the console.
// - Then log the length of the array to the console (it should print 5).
// Write your code here 👇

function kata3() {

}
kata3();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// Updating an array
// - Add 5 names of people to the "names" array: James, Jean-Luc, Benjamin, Kathryn, Jonathan
// - Log that array to the console.
// - Using the "index" variable, assign a new name to the given index in "names".
// - Then log the modified array to the console.
// Write your code here 👇

let names = []; // Don't modify this line.
let index = 2;

function kata4() {

}
kata4();

// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// Concatenating an array
// - Concatenate the second array to the first array. You will need to assign the result to a new variable.
//   Hint: Using + will NOT work...
// - Then log the new array to the console.
// Write your code here 👇

let firstArray = ["This", "will", "make"];
let secondArray = ["a", "combined", "array."];

function kata5() {

}
kata5();

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise, and remove any extraneous console.log()
// statements from your code.
