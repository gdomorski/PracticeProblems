var arr = [1,3,2];

function insertionSort(array){
    var i, j, k, val;
    //loop through the array, starting from the second number in the list
    //the first number will be in the sorted section
    for(var i = 1; i < array.length; ++i){
        j = i;
        val = arr[j];
        k = j - 1;
        while(j && arr[k] > val){
            arr[j--] = arr[k--];
            arr[j] = val;
        }
    }
    return array;
  }

insertionSort(arr);
