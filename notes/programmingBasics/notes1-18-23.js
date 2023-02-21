//Review
//print odd numbers 1-255
for (i = 1; i <= 255; i+=2) {
  console.log('odd numbers:', i)
}

for(let i =1; 1 <==255; 1++){
  if(i % 2 !=0) {
    // console.log('odd numbers:', 1)
  }
}

you can duplicate var but you cant duplicate let ex--
var melissaOtherVar = "I am a test."
var melissaOtherVar = "This is an updated string later in the code"

let melissaOtherVar= "I am a test for let."
let melissaOtherVar= "I am a second test but would error out because let cant have duplicated variables"

//Global variables should be avoided. This is a variable that is not in a loop, etc. 
//(let shown below is not global bc it is in a loop)
for(let i =1; 1 <==255; 1++){
  if(i % 2 !=0) {
    // console.log('odd numbers:', 1)
  }
}
//let shown below is global and could change
let hello = "Good Morning Jarrell"

// Below is an instance in which you want a variable to be global bc the sum would need to be 
// able to change and not stay at 0

let sum = 0

for(let i = 0; i < 200; i++) {
  if(i % 2) ==0) {
      sum = sum + 1
  } else {
    sum = sum - 1
  }
}

/ Arrays
// let arr = [This is an Array, list of data]
// let obj = {"name": "Melissa"} //This is an object if it is in curly brackets// this in python is called a dictionary. they contain name of something/ definition

// //Arrays can contain different data types

// let mixedArr = ["Melissa", "is", "feeling", "old", "over", 40]
// console.log(mixedArr)

// // push - adding to the end of the array
// // pop- remove the last item of the array
// // shift - removes the 1st item of the array
// // unshift - adds to the beginning of the array
// // splice - add/ replaces at a specific index


let animals = ["Dog", "Cat", "Bird"]
console.log("**1:", animals)

// Add new animal to the array
animals.push("Turle")
console.log("**2:", animals)

length- how many items
index- it's position in the list/ array

Back ticks are better for sentences