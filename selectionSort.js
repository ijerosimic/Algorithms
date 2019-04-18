const swapper = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[y] < arr[min])
                min = y;
        }
        if (min !== i) swapper(arr, i, min);
    }
    return arr;
}