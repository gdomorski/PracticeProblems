function ArrayPairSum(target, collection){

var results = [];

    for(var i = 0; i < collection.length; i++){
        for(var j = i + 1; j < collection.length; j++){
            if(collection[i] + collection[j] === target){
                results.push([collection[i], collection[j]]);   
            }
        }
    }
    return results;
}

ArrayPairSum(10, [3,4,5,6,7]);
ArrayPairSum(8, [3,4,5,4,4]);
