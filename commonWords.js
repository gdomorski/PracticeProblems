function commonWords(str){
    
    var maxCounter = 0;
    var answer;
    str = str.split(" ");
    
var newObj = {};
    for(var i = 0; i < str.length; i++){
        if(newObj[str[i]] === undefined){
            newObj[str[i]] = 1;
        }else{
            newObj[str[i]]++;
        }
    }
    
    for(var key in newObj){
        if(newObj[key] > maxCounter){
           answer = key; 
           maxCounter = newObj[key];
        }
    }
    
    return answer;
}

commonWords("the, it is, we all, a, an, by, to, you, me, he, she, they, we, how, it, i, are, to, for, of")
