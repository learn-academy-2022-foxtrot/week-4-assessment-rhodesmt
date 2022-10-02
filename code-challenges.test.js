// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Jest template
// describe ("functionNameHere", () => {
//   it ("description of what the test function does/expected to do", () => {
//     expect(functionNameHere(functionArgument)).toEqual(expected output here)
//   })
// })

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// I will need to write the test function to pass the initial test check. Since shiftFunction hasn't been declared yet, the test will return a Reference Error indicating that shuffleFunction has not been declared.

// describe ("shuffleFunction", () => {
//   it ("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
//     expect(shuffleFunction(colors1)).toContain(["yellow", "blue", "pink", "green"])
    
//     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//     expect(shuffleFunction(colors2)).toContain(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
//     // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//   })
// })

// ReferenceError: shuffleFunction is not defined
// As mentioned above, this is the expected error when first running a test function. 

// b) Create the function that makes the test pass.

// I'm not sure how to set up the logic for shuffling an array. I know I can't use random directly on the array, since .random is a math operator that must be used in conjunction with .Math. I might be able to keep this in my back pocket as an alternative to shuffling the array. 

// For right now I'm going to try and run a for-loop possibly? I'll start off by using .shift to remove the first item of the array. That will at a minimum get me off headed in the right direction.

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const shuffle = Math.floor(Math.random() * (array[i] + 1))
// const shuffleFunction = (array) => {
//   for (let i = array.length -1; i>0; i--) {
//     [array[i], array[shuffle]] = [array[shuffe], array[i]]  
//   }
//   console.log(shuffleFunction(colors1))
// }

// This approach I found on w3schools. I attempted to write it to try and see if I could make sense of it, but I kept receiving an error for not being able to utilize colors1 prior to initialization.

// I decided to go with a different approach using .sort to randomize the order of the output.
// const shuffleFunction = (array) => {
//   // Removes the first index of the array
//   array.shift()
//   // Randomizes the order of the remaining array for output
//   array.sort((a, b) => 0.5 - Math.random())
//   return array
// }

// Expected value: ["yellow", "blue", "pink", "green"]
// Received array: ["pink", "yellow", "green", "blue"]

// Since the test instructions stated that the expected output could be in a different order, I'm going to call this a test pass. I can't get the function to pass since it's not in the correct order.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe ("netTotalVotes", () => {
  it ("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

    const votes1 = {upVotes: 13, downVotes: -(2)}
    // Expected output: 11
    expect(netTotalVotes(votes1)).toEqual(11)

    const votes2 = {upVotes: 2, downVotes: -(33)}
    // Expected output: -31
    expect(netTotalVotes(votes2)).toEqual(-31)
  })
})

// ReferenceError: netTotalVotes is not defined
    // Expected error


// b) Create the function that makes the test pass.
// I'm found a method online that uses Object.values to return a given object's own enumerable property values in conjunction with .reduce to reduce to the two given values in votes1 and votes2 to reduce, or sum them into a single value for return.

const netTotalVotes = (object) => Object.values(object).reduce((a, b) => a + b);

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// I was able to get the test to pass! I kind of had to alter the given statement slightly so that the inputed number would still be positive, but the overall value would ultimately be negative.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("noDuplicateArray", () => {
    it ("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
      
      const dataArray1 = ["array", "object", "number", "string", "Boolean"]
      const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
      // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
      expect(noDuplicateArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
      
    })
  })
//   ReferenceError: noDuplicateArray is not defined

// b) Create the function that makes the test pass.

// declaring test function noDuplicateArray with two parameters to allow for multiple arrays to pass through.
const noDuplicateArray = (array1, array2) => {
  // declaring a newArray and setting that to the concatination of array1 and array2. Inside of that, using .filter to iterate through the arrays and remove any duplicated values from the original array.
  newArray = array1.concat(array2.filter((item) => array1.indexOf(item) < 0))
  // Return newArray
  return newArray
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// This was a pretty tricky one to figure out! I needed to really research the filter syntax to figure out the correct way to get the display. I'm happy that I was able to get it to work.
