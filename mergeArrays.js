const mergeArray = (arr1, arr2) => {
    let res = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length ||
        j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    return res;
}

console.log(mergeArray([1, 10, 50], [2, 14, 99, 100]))