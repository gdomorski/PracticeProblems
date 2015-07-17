var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function mergeSort(arr){
 
    //if the array only has one element, return it
    if (arr.length < 2)
        return arr;
 
    //get the middle value
    var middle = parseInt(arr.length / 2);
    //get all the values to the left of the middle
    var left   = arr.slice(0, middle);
    //get all the values to the right of the middle
    var right  = arr.slice(middle, arr.length);

    

    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
    //create a result array which will have the sorted values
    var result = [];
 
    //while the left side and right side have a length
    while (left.length && right.length) {
        //if the left side is less than or equal to the right side
        if (left[0] <= right[0]) {
            //push the values to the result from the left side.
            result.push(left.shift());
        } else {
            //or else...push in the values from right side;
            result.push(right.shift());
        }
    }
 
    //while the left side has a length, push it in the result value;
    while (left.length)
        result.push(left.shift());
 
    //the right side has a lengt, push it in the result value;
    while (right.length)
        result.push(right.shift());
 
    //return the result.
    return result;
}
 
console.log(mergeSort(a));
