// // ASSESSMENT 3: Coding practical questions with Jest

// const { returnStatement } = require("@babel/types")
// const { it, expect } = require("@jest/globals")
// const { typeOf } = require("react-is")
// const { describe } = require("yargs")

// // Please read all questions thoroughly
// // Pseudo coding is HIGHLY recommended
// // If you get stuck, please leave comments to help us understand your thought process

// // Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function


// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
// I Need to creata a function called fibinachiFunc
//My func needs to take in a (number)
//Return and array of the length containing the numbers of the Fibonacci.
//I need a for loop to go through every array and add the first num to the next one and so on

describe("fibinachiFunc", () =>{

    it("returns an array of numbers in fibinachi", () =>{
        expect(fibinachiFunc(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibinachiFunc(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.
// const fibinachiFunc = (num) =>{
//     let array = [0, 1]
//     for(let i = 2; i<n + 1; i++){
//         array.push(array[1-2] + array[i -1])
//     }
//     return array[n]
// }
const fibinachiFunc = (num) =>{
if(num==1)
return 0;
if (num == 2)
return 1;
return fibonacci(num - 1) + fibonacci(num - 2);
}



// // Example input: 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// // Example input: 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]










// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// // I need to create a finction called sortedOddNums
// //My func needs to take in an array 
// //and return an array with only odd numbers 
// //I need to use a method called sort() to sort through the nums and put them in order
// //here I need to use a filter() because it will ititare my array and it will give me a diffrent outcome

describe("sortedOddNums", () =>{

    it("returns only sorted odd numbers", () =>{
        expect(sortedOddNums( fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortedOddNums( fullArr2)).toEqual([-823, 7, 23])
    })
})


// a) Create a test with expect statements for each of the variables provided.


// Create a function 
//that takes in an array 
//and returns a new array 
        //of only odd numbers 
            //sorted from least to greatest.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const sortedOddNums =(array) =>{
    //filter() new variable filteredArray =array.filter() look up filter syntax
    let filteredArray = array.filter((value , index) => {
           if(typeof value === "number" && value % 2 !== 0){
        return value
        }
    })
    //sort() new  variable sortedFilterdArray = filteredArray.sort() look up sort syntax
    let sortedFilterdArray = filteredArray.sort((a,b)=> a-b)

    //return sortedFilterdArray 
return sortedFilterdArray;
}
console.log(sortedOddNums(fullArr1));

// // Expected output: [-9, 7, 9, 199]

 var  fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]




// // b) Create the function that makes the test pass.





// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.
describe("sumOfArray ", () =>{

    it("returns only sorted odd numbers", () =>{
        expect(sumOfArray ( numbersToAdd1)).toEqual([2, 4, 45, 9])
        expect(sumOfArray ( numbersToAdd2)).toEqual([0, 7, -8, 12])
        expect(sumOfArray ( numbersToAdd3)).toEqual([])
    })
})
 var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

 var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

 var numbersToAdd3 = []
// // Expected output: []



//Create a function called sumOfArray
   //that takes in an array witch means parameter (array)
        //and returns an array of the accumulating sum. 
            //An empty array should return an empty array.
            //I found a method called .reduce() but the issue is that it is giving me the sum of all the numbers

// // b) Create the function that makes the test pass.
const sumOfArray = (array) =>{
 //I need to take in a sum of array 
for(let i= 0; i<array.length; i++)


return array
}
console.log(sumOfArray ())