// recursive function which accepts an array of arrays and returns a new array with all values flattened

function recursiveFlatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(recursiveFlatten(val)) : acc.concat(val),[]); 
}

