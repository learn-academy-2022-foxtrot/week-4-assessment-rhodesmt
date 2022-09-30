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

// I will need to write the test function to pass the initial test check. Since shiftFunction hasn't been declared yet, the test will return a Reference Error indicating that shiftFunction has not been declared.

describe ("shiftFunction", () => {
  it ("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

    expect(shiftFunction(colors1)).toEqual(["yellow", "blue", "pink", "green"])
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

    expect(shiftFunction(colors2)).toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  })
})

// ReferenceError: shiftFunction is not defined
    // As mentioned above, this is the expected error when first running a test function. 



// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe ("netTotalVotes", () => {
  it ("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

    expect(netTotalVotes(votes1)).toEqual(11)
    const votes1 = {upVotes: 13, downVotes: 2}
    // Expected output: 11

    expect(netTotalVotes(votes2)).toEqual(-31)
    const votes2 = {upVotes: 2, downVotes: 33}
    // Expected output: -31
  })
})

// ReferenceError: netTotalVotes is not defined
    // Expected error


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("noDuplicateArray", () => {
    it ("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
  
      expect(noDuplicateArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
      
    })
  })



// b) Create the function that makes the test pass.
