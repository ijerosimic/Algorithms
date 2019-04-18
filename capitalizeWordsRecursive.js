// write a recursive function called capitalizeWords
// given an array of words, return a new array containing each word capitalized

function capitalizeWordsRecursive(arr) {
    if (arr.length === 1)
        return arr[0].toUpperCase();

    return [arr[0].toUpperCase()].concat(capitalizeWordsRecursive(arr.slice(1)));
}