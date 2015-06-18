function fibonacci(size){
    var arr = [1,1];
    
    for(var i = 0; i < size; i++){
        var val = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(val);
    }
    
    return arr;
    
}

fibonacci(10);