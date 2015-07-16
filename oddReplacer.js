//Replace every odd number with the letter 'o'

function oddReplacer(array){
    
var answer = [];

    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 1){
            array[i] = 'o';
            answer.push(array[i]);
        }else{
            answer.push(array[i]);
        }
    }
    return answer;
    
    
}


var nums = [1,2,3,4,5,6,7,8,9];

oddReplacer(nums);
