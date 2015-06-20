//Made a counting cards function for fun, from my interest in blackjack

function cardCounter(arr){
    
    var minusOne = [10, 'J', 'Q', 'K', "A"];
    var plusOne = [1,2,3,4,5,6];
    var count = 0;
    
    for(var i = 0; i < arr.length; i++){
        if(plusOne.indexOf(arr[i]) !== -1){
         count++;
         console.log(count);
        }else if(minusOne.indexOf(arr[i]) != -1){
         count--;   
        }
    }
    return count;
}


cardCounter([2,6,7,8,'A','K',3,'J']);


