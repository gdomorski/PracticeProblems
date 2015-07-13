//Made a counting cards function for fun, from my interest in blackjack

function cardCounter(arr){
    
    //create an array of all the cards that subtract one from the counter
    var minusOne = [10, 'J', 'Q', 'K', "A"];
    //create an array of all the cards that add one from the counter
    var plusOne = [1,2,3,4,5,6];
    //set the count to zero
    var count = 0;
    
    //loop through the array
    for(var i = 0; i < arr.length; i++){
        //if it is in the plush one deck
        if(plusOne.indexOf(arr[i]) !== -1){
        //add to the count
        count++;
        //or else if it is in the minus one deck
        }else if(minusOne.indexOf(arr[i]) != -1){
        //subtract from the count
        count--;   
        }
    }
    
    //return the count
    return count;
}


cardCounter([2,6,7,8,'A','K',3,'J']);


