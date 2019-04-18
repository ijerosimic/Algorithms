//given an array of strings, capitalize the first letter of each string in the array

function capitalizeFirst(arr) {
    if (arr.length === 1)
        return arr[0][0].toUpperCase() + arr[0].substring(1);

    let capitalized = [arr[0][0].toUpperCase() + arr[0].substring(1)];
    return capitalized.concat(capitalizeFirst(arr.slice(1)));
}