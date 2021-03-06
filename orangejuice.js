//Vasya loves orange juice very much. That's why any food and drink in his kitchen necessarily contains orange juice. There are some drinks in his fridge, the volume fraction of orange juice in these drinks equals to some percent.

//Lets say there are 3 drinks:

//Drink №1 contains 50% of orange juice 
//Drink №2 contains 100% of orange juice 
//Drink №3 contains 50% of orange juice
//One day Vasya decided to make himself an orange cocktail. He took equal proportions of each of these drinks and mixed them. Then he wondered, how much orange juice the cocktail has.

//Print the volume fraction in percent of orange juice in Vasya's cocktail.

function orangeFraction(fractions){
  fractions = fractions.split(" ");
  var numberArr = [];
  var total = 0;
  var average = 0;
  
  for(var i = 0; i < fractions.length; i++){
    numberArr.push(Number(fractions[i]));
  }
  
  total = numberArr.reduce(function(a,b){return a+b});
  average = total / fractions.length;
  
  return Math.round(average * 10000) / 10000;
  
  
}
