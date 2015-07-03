//Checking to see if any two numbers in a sorted array equal the largest number, with the least amount of iterations

function twoSum(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while( left !== right ) {
        var sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++
        } else if (sum > target) {
            right--
        }
    }
    return false;
}
