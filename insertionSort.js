const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                swapper(arr, [i], [j]);
            }
        }
    }

    return arr;
}

const swapper = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

console.log(insertionSort([2, 1, 9, 76, 4]))


3, 5, 4, 1, 2
3, 4, 5, 1, 2
1, 3, 4, 5, 2