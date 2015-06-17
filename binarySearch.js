//declare a function call binary search that takes an array and target
function binarySearch(arr, target){
    var result = -1;
    
    // recursive subroutine
    function subRoutine(array, index) {
        // set index equal to the currentIndex or 0
        index = index || 0;
        
        // break case
        // [1]
        if(array.length === 1) {
            // check if our target is in the array
            if(array[0] === target) {
                // set the result index
                result = index;
                // kill the subroutine
                return;
            } else {
                return;
            }
        }
        
        // find the middle of the arr
        var middle = Math.floor(array.length / 2);
        // check to see if arr[middleIndex] === target
        if(array[middle] === target) {
            // add the middle to the current index
            index += middle;
            // 
            result = index;
            return;
        } else if(array[middle] > target) {
            var firstHalf = array.slice(0, middle);
            subRoutine(firstHalf);
        } else {
            var lastHalf = array.slice(middle);
            index += middle;
            subRoutine(lastHalf, index);
        }
    }
   
   
   // call subroutine on our array for the first time   
   subRoutine(arr);
   // return the result after subroutine is finished running
   return result;
}

var x = binarySearch([1,2,3,4,5,6,7,8,9], 0);
console.log(x);

// Arr.indexOf by default uses what type of time complexity?
// linear