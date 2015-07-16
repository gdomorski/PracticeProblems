function largestPairSum(numbers){

var answer = 0;
var firstTotal = 0;
var secondTotal = 0;

  if(numbers.length === 2){
    answer = numbers.reduce(function(a,b){return a+b});
    return answer;
  } else {
    numbers = numbers.sort(function(a,b){return a-b});
  }
  
console.log(numbers);
  
  firstTotal = numbers[0] + numbers[1];
  secondTotal = numbers[numbers.length - 1] + numbers[numbers.length - 2];
  
  
  if(firstTotal > secondTotal){
    return firstTotal;
  }else{
    return secondTotal;
  }
  
  
}
