//Here is an example of how to count letters in a string with the reduce callback


var letter = 'c';
var arr = ['a','a','b','c', 'c', 'c', 'd','e','f','g'];


arr.reduce(function(total,item) { 
    
    if(item === letter){
        total += 1;
    }
    return total;
   
}, 0)   
