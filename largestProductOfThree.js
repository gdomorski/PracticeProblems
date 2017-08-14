// takes in an array
// finds the highest multiple of any three numbers in the array
// return the sum of those
// [1,2,3,4,5,6,7,-8,-9] <- return the sum of 7*-8*-9;
// [7,6,5,4,3,2,1,-8,-9]
const largestProductOfThree = array => {
  //sort the array
  let newArr = array.sort((a,b) => b-a;);
 
  let highest = newArr.slice(0, 2);
  // multiply the first 3 numbers
  let firstThree = highest.reduce((a,b) => return a*b);
  //we must multiply the last two digits in the array, in case they are negative. Two negative numbers equal a positive
  let lastThree = array[0] * array[array.length - 2] * array[array.length - 1];
  return (firstThree > lastThree) ? firstThree : lastThree;
  
};
