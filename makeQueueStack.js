var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //the size
  var size = 0;
  var first = 0;
  var endOfQueue = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[endOfQueue] = value;
    endOfQueue++;
    size++;
  };

  someInstance.dequeue = function(){
    var firstItem = storage[first];
    delete storage[first];

    // if size is anything but zero
    // reduce size by 1
    // increase the first index
    if(size !== 0) {
      size--;
      first++;
    } else {
      endOfQueue = 0;
    }

    return firstItem;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};


var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value){
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.pop = function(){
    // save the lastItem as value of the last item you added
    // to the storage
    var lastItem = storage[stackSize];  
    // Delete the last thing we added
    delete storage[stackSize];

    // reduce the stackSize by 1
    stackSize--;

    // return the deleted valuea
    // ex. 'mason'
    return lastItem;
  };

  someInstance.size = function(){
    if(stackSize < 0) {
      stackSize = 0;
    }
    return stackSize;
  };

  return someInstance;
};
