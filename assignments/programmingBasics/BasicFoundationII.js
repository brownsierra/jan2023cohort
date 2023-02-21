// Biggie Size - Given an array, write a function that changes all positive
// numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) 
// returns that same array, changed to [-1, "big", "big", -5].
let BigSArr = [-2,15,-3,-4,90,45,-6];
function BigSFunc(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      arr[i] = 'big';
    }
  }
  console.log(arr);
  return(arr);
}
BigSFunc(BigSArr);

// Print Low, Return High - Create a function that takes in an array of numbers. 
// The function should print the lowest value in the array, and return the highest value in the array.
let PLRHArr = [-7,5,-25,4,9,81,24,25]

  function PrLwReHi(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(min);
  return(max);
}
PrLwReHi(PLRHArr);

// Print One, Return Another - Build a function that takes in an array of numbers.
// The function should print the second-to-last value in the array, and return the 
// first odd value in the array.
let PORAArr = [2,8,82,5,7,10,25,8]
function pORA(arr) {
  for(let i = 0; i < arr.length; i++) {
  }
  console.log(arr[arr.length-2]);
  for(let i = 0; i < arr.length; i++) {
  if(arr[i] % 2 == 1) {
  //console.log(arr[i]);
      return(arr[i]);
    }
  }
}
pORA(PORAArr);

// Double Vision - Given an array (similar to saying 'takes in an array'), 
// create a function that returns a new array where each value in the original array has been
//  doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
let sglArr = [1,2,3,4,5,6,7];
let dblArr = [];
function dVFunc(arr) {
  for(let i = 0; i < arr.length; i++) {
    dblArr.push(arr[i] * 2);
  }
  return(dblArr)
}
dVFunc(sglArr);

// Count Positives - Given an array of numbers, create a function to replace
// the last value with the number of positive values found in the array.  Example, 
// countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
let CPArr = [7,11,27,15,-16,-13,87,-23];
function CPFunc(arr) {
  let CPSum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
      CPSum += 1;
    }
  }
  arr[arr.length-1] = CPSum;
  console.log(arr)
  return(arr)
}
CPFunc(CPArr);

// Evens and Odds - Create a function that accepts an array. Every time that array 
// has three odd values in a row, print "That's odd!".  Every time the array has three
//  evens in a row, print "Even more so!".
let evod = [1,2,3,4,5,7,9,2,2,3,82,8,4,9,1,7,0,0]
function evFunc(arr) {
  let even = 0;
  let odd = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
      odd++
      even = 0;
      if(odd == 3) {
        console.log('Thats odd!');
      }
    }
    else {
      even ++
      odd = 0;
      if(even == 3) {
        console.log('Even more so!')
      }
    }
  }
}
evFunc(evod)

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element,
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, 
// console.log each array value and return arr.
let arr01 = [4,6,8,24,26,28,9,5];
function iTS(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 != 0 ) {
      arr[i]++
    console.log(arr[i]);
    }
  }
  return(arr)
}
iTS(arr01)

// Previous Lengths - You are passed an array (similar to saying 'takes in an array'
//  or 'given an array') containing strings.  Working within that same array, replace 
//  each string with a number - the length of the string at the previous array index -
//   and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) 
//   should return ["hello", 5, 4]. Hint: Can for loops only go forward?
let pLArr = ["My", "dogs", "name", "is", "Diamond", "Shes", "the", "best"]
function pl(arr) {
    for(var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
pl(pLArr);

// Add Seven - Build a function that accepts an array. Return a new array 
// with all the values of the original, but add 7 to each. Do not alter the
// original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
let addsev = [2,4,17,6,8,10,12,14,16,22];
let newadsev = [];
function Addseven(arr) {
  for(let i = 0; i < arr.length; i++) {
    newadsev.push(arr[i] + 7);
  }
  return(newadsev);
}
Addseven(addsev)

// Reverse Array - Given an array, write a function that reverses its values,
//  in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains
//   values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.
//     (Hint: you'll need to swap values).
let revarr = [2,4,6,8,10,12,14,16,18,20];
function reverseArr(arr) {
    for(var i = 0; i <= ((arr.length-1)/2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return(arr);
}
reverseArr(revarr);


// Outlook: Negative - Given an array, create and return a new one containing 
// all the values of the original array, but make them all negative (not simply 
//   multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
let outneg = [2,4,1,-9,7,45,3,-6,-5];
let newoutneg = [];
function Outlook(arr) {
for(let i = 0; i <arr.length; i++) {
  if(arr[i] < 0) {
    arr[i] = arr[i];
}
else if(arr[i] > 0) {
  arr[i] = arr[i] - (arr[i] * 2);
}
newoutneg.push(arr[i]);
}
console.log(newoutneg);
return(newoutneg)
}
Outlook(outneg);

// Always Hungry - Create a function that accepts an array, and prints "yummy"
//  each time one of the values is equal to "food".  If no array values are "food",
//   then print "I'm hungry" once.
let hunarr = ["plate", "fork", "table", "food", "napkin", "bowl", "food"]
function alwhun(arr) {
  let nofood = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "food") {
      arr[i] = "yummy"
    }
    else if(arr[i] != "food") {
      nofood ++
      if(nofood == arr.length) {
        console.log("I'm hungry")
      }
    }
  }
}
alwhun(hunarr);

// Swap Toward the Center - Given an array, swap the first and 
// last values, third and third-to-last values, etc.  Example: 
// swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into 
// ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) 
// turns the array into [6,2,4,3,5,1].  No need to return the array this time.
let sTCen = [1,2,3,4,5,6,7,8,9]
function swapCenter(arr) {
  for(let i = 0; i < ((arr.length-1)/2); i++) {
    let placehold = 0;
    if(i % 2 != 0) {
      placehold = arr[i]
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i] = placehold
    }
  }
  console.log(sTCen)
}
swapCenter(sTCen);


//Scale the Array - Given an array arr and a number num,
//  multiply all values in the array arr by the number num,
//   and return the changed array arr.  For example, scaleArray([1,2,3], 3) 
//   should return [3,6,9].
let scalearr = [2,4,6,8,10,3,5,7,9,11]
let num = 2;
function Scale(arr) {
  for(let i = 0; i <arr.length; i++) {
    arr[i] = arr[i] * num
//    console.log(arr[i])
  }
  return(arr);
}
Scale(scalearr);
