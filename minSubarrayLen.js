// function which accepts 2 params
// array of positive ints and int
// function should return the min len of contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the fnc
// if there isnt one, return 0

// ([2,3,1,2,4,3], 7)          2 -> 4,3
// ([2,1,6,5,4], 9)            2 -> 6,5
// ([5,1,12,22,8,9,17], 11)    1 -> 12
// ([3,1,7,11,2,9,8,21,50,33,19], 52)
// ([6,1,4,3,16,22,7,8,9,10], 55)  5 
// ([1,4,16,22,5,7,8,9,10], 39)  3

// if arr len === 0 return 0
// check if arr[i] is greater than int, if yes, return 1
// else add to sum and continue
// keep looping until sum >= int

// when sum is >= int,
// check if sum - arr[0] is valid
// if it is keep going until invalid

// when invalid, check if the next number after window is greater than first in window
// if yes, remove first, add next
// check if still valid
// if is valid, continue with removing until invalid

//coninue until invalid
// return counter

function minSubArrayLen(arr, int) {
    if (arr.length === 0)
        return 0;

    if (arr[0] >= int)
        return 1;

    let sum = 0;
    let counter = 0;
    let i = 0;

    while (sum < int) {
        //   console.log('arr[i]: ' + arr[i]);

        sum += arr[i];
        i++;
        //   console.log('sum: ' + sum);
        //   console.log('i: ' + i);
    }

    if (arr[i] > arr[counter]) {
        sum = sum + arr[i] - arr[counter];
        i++;
        counter++;
    }

    if (sum - arr[i] >= int) {
        counter++;
        sum -= arr[i];
    }

    if (sum - arr[counter] >= int) {
        counter++;
        sum -= arr[counter];
    }

    return counter;

    console.log('arr[i]: ' + arr[i]);
    console.log('sum: ' + sum);
    console.log('i: ' + i);
    console.log('counter: ' + counter);
}

// ([1,4,16,22,5,7,8,9,10], 39)