//declare a function call binary search that takes an array and target
function binarySearch(arr, target){

//find the largest index in the arr
var highestIndex = arr.length - 1;
//find the middle index;
var middleIndex = Math.floor(highestIndex/2);

    
    //if there is nothing in the array
    if(arr.length === 0){
        //return -1
        return -1;
    }
    
    //if the target is equal to the value
    if(target === arr[middleIndex]){
        //return the index
        return middleIndex;
    //if it is greater than the value
    } else if(target > arr[middleIndex]){
        //get everything from the middle index to the end
        arr = arr.slice(middleIndex);
    //if it is equal or greater than, it must be less than
    } else {
    	//get everything from the beginning of the array to the middle index;
        arr = arr.slice(0, middleIndex);
    }
    
    //call binarySearch again
    binarySearch(arr, target);
   
}
    
    
