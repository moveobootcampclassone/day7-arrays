//Array

const bestMovies = ["The Matrix", "The Godfather", "The Dark Knight", "Seven"];
console.log(bestMovies, "at the beginning");
//Basics

const firstMovie = bestMovies[0];
// console.log(bestMovies);
// "hello" + "word"
// console.log(bestMovies[0], bestMovies[2]);

// console.log("the first letter of the first movie: ", firstMovie[0]); // same as bestMovies[0][0]

// const mixArry = [1, "cat", true];

//Push

// console.log("Before Push: ", bestMovies);
// bestMovies.push("Seven");
// console.log("After Push: ", bestMovies);
// ["dsf","Fsdf","Fsdf","The Dark Knight"]
//Pop

// const lastMovieUsingPop = bestMovies.pop();
// console.log("After Pop: , bestMovies", bestMovies);
// console.log("After Pop: last", lastMovieUsingPop);

//Shift

// bestMovies.shift();
// const deletedFirstMovie = bestMovies.shift();
// console.log("Deleted first movie: ", deletedFirstMovie);
// console.log("After Deleting first movie: ", bestMovies);

//unshift

// const newArray = bestMovies.unshift("New First Element");
// console.log("New first movie: ", bestMovies);

//length

// console.log(bestMovies.length); // return length of the array in number
// const arrayLength = bestMovies.length;
// const lastMovieWithError = bestMovies[arrayLength];
// console.log("last movie with error", lastMovieWithError); // why is it undefine?

// // lets try to understand

// console.log("array length", bestMovies.length);

// //why is it working?

// const lastMovie = bestMovies[bestMovies.length - 1];
// console.log("Last movie: ", lastMovie);
// we can use bestMovies.at(-1) to find the last value
// but if we need the last index we will use
// bestMovies.length - 1

//includes

// console.log(bestMovies.includes("לשחרר את שולי"));

// console.log(
//   bestMovies.includes("לשחרר את שולי") &&
//     bestMovies.push("לשחרר את שולי")
// );
// console.log(bestMovies);

// console.log(
//   bestMovies.includes("The Matrix") &&
//     bestMovies.push("The Matrix")
// );
// console.log(bestMovies);

//Concat

// const numbersArray = [1, 2, 3];
// let concatArrays = bestMovies.concat(numbersArray);
// console.log(concatArrays);
// console.log(bestMovies);

//reverse
// let reverseArray = bestMovies.reverse();
// bestMovies.reverse();
// console.log(bestMovies);
//CHanges the original array

//indexOf
// const theMatrix = bestMovies[0];
// console.log(theMatrix);
// let index = theMatrix.indexOf("The");
// console.log(index);
// index = theMatrix.indexOf("M");
// console.log(index);
// index = theMatrix.indexOf("Messi");
// console.log(index);

//slice
//  ["The Matrix", "The Godfather", "The Dark Knight","Seven"];
let slice = bestMovies.slice(1);
// console.log(slice);
// console.log(bestMovies);

slice = bestMovies.slice(1, 3);
// indexes: [bestMovies[1],bestMovies[2]]
//Output: ["The Godfather", "The Dark Knight"]
// console.log(slice);
// console.log(bestMovies, "bestMovies");

// let allButTheLastElement = bestMovies.slice(0, bestMovies.length - 1);
// console.log(allButTheLastElement);
// console.log(bestMovies);

//splice

let a = ["red", "yellow", "blue", "green"];
console.log(a);
// a.splice(0);
// let splice = a.splice(0, 1);
// console.log(splice, "splice");
// console.log(a, "a");

// console.log(a);
// let splice = a.splice(1, 2);
// console.log(splice, "splice");
// console.log(a, "a");

// console.log(bestMovies);
let splice = a.splice(0, 3, "white", "purple");
console.log(splice, "spice");
console.log(a, "a");

// Spreading

// console.log(bestMovies);
// const copyOfArray = bestMovies;
// copyOfArray.shift();

// console.log(copyOfArray); // [ 'The Godfather', 'The Dark Knight' ]
// console.log(bestMovies); // [ 'The Godfather', 'The Dark Knight' ]

//Both changed!
// you changed the copyOfArray but bestMovies also been changed.

// const goodCopyOfArray = [...bestMovies];
// goodCopyOfArray.shift();
// console.log(goodCopyOfArray); // [ 'The Godfather', 'The Dark Knight' ]
// console.log(bestMovies); // [ 'The Matrix', 'The Godfather', 'The Dark Knight' ] - didn't changed!
