// given an array of ints and a number, find the maximum sum of a subarray,
// with the length equal to the int parameter
// subarray must consist of consecutive elements from the original array


//([100, 200, 300, 400], 2) 700
//([1, 4, 2, 10, 23, 3, 1, 0, 20], 3) 39      len 9


// sum first x in the array, this is both temp and max
// for the rest of the array
// deduct first in x, add next one
// this is temp
// if temp > max, update max = temp
// return max

function maxSubarraySum(arr, num) {
    if (arr.length < num)
        return null;

    let temp = 0;
    let max = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;
    for (let i = 0; i < arr.length - num; i++) {
        temp = temp - arr[i] + arr[num + i];
        max = Math.max(temp, max);
    }

    return max;
}


// num 3
// i 0,1,2,3,4,5,6