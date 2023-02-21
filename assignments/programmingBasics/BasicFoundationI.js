// // //Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
let arr01 = []
function ttf() {
  for(var i=1; i<=255; i++)
      arr01.push(i);
   //   console.log(arr01);
      return(arr01);
  }
ttf();

// // //Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// // //You may use a modulus operator for this exercise.
let sum = 0;
function even () {
  for(let i = 1; i <= 1000; i++) {
    if(i % 2==0) {
    sum += i;
    }
  }
 // console.log(sum);
  return(sum);
}
even();

// //Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// //(e.g. 1+3+5+...+4997+4999).
let newSum = 0;
function oddfive() {
  for(let i = 1; i <=5000; i++) {
    if (i % 2 ==1) {
      newSum += i;
    }
  }
  //console.log(newSum);
  return(newSum);
}
oddfive();

// //Iterate an array - Write a function that returns the sum of all the values within an array.
// //(e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
let testArr = [9,8,4,2,2,1,21,24,7];
let newSumTwo = 0;
function it(arr) {
  for(let i = 0; i < arr.length; i++) {
    newSumTwo += arr[i];
  }
 // console.log(newSumTwo);
  return(newSumTwo);
}
it(testArr);

// //Find max - Given an array with multiple values, write a function that returns the 
//maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
let siArr = [7,2,5,6,21,24,78,15];
function maxArr(arr) {
  let max = arr[0];
  for(let i = 1; i <arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
 // console.log(max);
  return(max);
}
maxArr(siArr);

// //Find average - Given an array with multiple values, write a function that returns
// the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
let BirArr= [31, 52, 7, 5, 44, 46, 45, 78, 25];
let avgSum = 0;
function AvgArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    avgSum += arr[i];
  }
  let arrAvg = avgSum / arr.length;
 // console.log(arrAvg);
  return(arrAvg);
}
AvgArr(BirArr)

// //Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
// // (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
let OddArr = [];
function oddfunc() {
  for(let i = 0; i <50; i++) {
    if(i % 2== 1) {
      OddArr.push(i);
    }
  }
 // console.log(OddArr)
  return(OddArr);
}
oddfunc(OddArr)

// //Greater than Y - Given value of Y, write a function that takes an array and returns the number 
// //of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// //(There are two values in the array greater than 3, which are 5, 7).

let yArr= [7, 21, 2, 1, 0, 3, 15, 8];
let yNewArr= [];
let y = 3;
function yFunc(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > y) {
      yNewArr.push(arr[i]);
    }
  }
//  console.log(yNewArr.length);
  return(yNewArr.length);
}
yFunc(yArr);

// //Squares - Given an array with multiple values, write a function that replaces each value
// // in the array with the value squared by itself. 
// //(e.g. [1,5,10,-2] will become [1,25,100,4])
let sqArr = [2,5,7,9,12,20];
function sqFunc (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
 // console.log(arr);
  return(arr);
}
sqFunc(sqArr);

// // Negatives - Given an array with multiple values, write a function that replaces any negative 
// // numbers within the array with the value of 0. When the program is done the array should contain
// //  no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
let noNegArr= [5,90,-4,-20,8,18,-14,-65];
function noNegfunc(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0;
    }
  }
//console.log(arr);
  return(arr);
}
noNegfunc(noNegArr);

// // Max/Min/Avg - Given an array with multiple values, write a function that returns 
// // a new array that only contains the maximum, minimum, and average values of the
// //  original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
let origArr = [30,58,42,37,5,6,15];
let mMAArr = [];
function mMAFunc(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  mMAArr.push(max);
  let min = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i];
    }
  }
  mMAArr.push(min);
  let sumAvg = 0;
  for(let i = 0; i < arr.length; i++) {
    sumAvg += arr[i];
  }
  let Avg = sumAvg / arr.length;
  mMAArr.push(Avg);
// console.log(mMAArr);
  return(mMAArr);
}
mMAFunc(origArr);

// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
let swapArr = [4,-1,15,67,9,29,35];
function swapFunc(arr) {
  var newlastvar = arr[0];
  var newfrstvar = arr[arr.length - 1];
  for(let i = 0; i < arr.length; i++ ) {
    arr[0] = newfrstvar;
    arr[arr.length - 1] = newlastvar
  }
  //console.log(arr);
  return(arr);
  }
swapFunc(swapArr);

//Number to String - Write a function that takes an array of numbers and 
//replaces any negative values within the array with the string 'Dojo'. 
//For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
let NTSArr = [-7,14,-9,18,-2,4,-4,2];
function nTSFunc(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  //console.log(arr);
  return(arr);
}
nTSFunc(NTSArr);
