const kadaneAlgo = arraySeq => {
    let maxEndingHere = 0,
        maxSoFar = 0,
        arrTracker = [],
        largestSubarray = [];
    
    arraySeq.forEach(val => {
        maxEndingHere = Math.max(0,maxEndingHere + val);
        if (maxEndingHere > 0) {
            arrTracker.push(val);
        } else {
            arrTracker.length = 0;
        }
        
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (maxSoFar === maxEndingHere) {
            largestSubarray = arrayMEHTracker.slice(0);
        }
    });
    
    return {
        array: largestSubarray,
        sum: maxSoFar
    };
}

kadaneAlgo([1,2,3,-4, 2])
