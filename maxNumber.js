function maxNumber(array){

    array = array.sort(function(a,b){return a-b});    
    return array[array.length-1];
}
