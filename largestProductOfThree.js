// takes in an array
// finds the highest multiple of any three numbers in the array
// return the sum of those
// [1,2,3,4,5,6,7,-8,-9] <- return the sum of 7*-8*-9;
// [7,6,5,4,3,2,1,-8,-9]
var largestProductOfThree = function(array) {
  //sort the array
  var newArr = array.sort(function(a,b){return b-a;});
 
  var highest = newArr.slice(0, 2);
  // multiply the first 3 numbers
  var firstThree = highest.reduce(function(a,b){return a*b;});
  //we must multiply the last two digits in the array, in case they are negative. Two negative numbers equal a positive
  var lastThree = array[0] * array[array.length - 2] * array[array.length - 1];
 
  if(firstThree > lastThree){
    return firstThree;
  } else {
    return lastThree;
  }
  
};
