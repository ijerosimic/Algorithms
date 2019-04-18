// write a recursive function called someRecursive which accepts an array and a callback
// the function returns true if a single value in the array returns true when passed to the callback
// otherwise returns false

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
    if (arr.length === 1)
        return callback(arr[0]);

    if (callback(arr[0]))
        return true;

    return someRecursive(arr.slice(1), callback);
}