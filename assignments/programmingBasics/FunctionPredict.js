//Predict 1
function greeting(){
      return "Hello";
      console.log("World");
  }
  var word = greeting();
  console.log(word);
  
//Output will be Hello

//Predict 2
function add(num1, num2){
  console.log("Summing Numbers!");
  console.log("num1 is: " + num1);
  console.log("num2 is: " + num2);
  var sum = num1 + num2;
  return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//Output will be--
// Summing Numbers!
// num 1 is: 3
// num 2 is: 5
// Summing Numbers!
// num 1 is: 4
// num 2 is: 7
// 8
// 11
// (8 and 11 are both returned/saved and can be used later)


//Predict 3
function highFive(num){
      for(var i=0; i<num; i++){
          if(i == 5){
              console.log("High Five!");
          }
          else{
              console.log(i);
          }
      }
  }
  
  //This function has not been called so there will be no output.