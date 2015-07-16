//write a function (add10) that takes in an array and adds 10 to each number, then returns new array. The array may contain stringified nums



function add10(numArray){
 var newArr = [];
 
 for(var i = 0; i < numArray.length; i++){
     if(typeof numArray[i] ==='string'){
        numArray[i] = Number(numArray[i]);
        newArr.push(numArray[i] + 10);
        }else{
        newArr.push(numArray[i] + 10);
        }
     }  
     return newArr;
    
    
}


add10([1,2,'3',4,6]);
