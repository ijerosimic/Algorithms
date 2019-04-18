// function that acceps a sorted array and value
// create a left pointer at the start of the array, and a right pointer at the end of the array
// while the left pointer comes before the right pointer loop
// find a middle
// if you find a value, return index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if the value doesnt exist return -1


// [1,2,3,4,5,6,7,8] 6

function binarySearch(arr, val) {
    let left = arr[0];
    let right = arr[arr.length - 1];
    let middleIndex = Math.floor((right - left) / 2);

   if (middleIndex > val)
   {
       left = middleIndex;
       middleIndex = Math.floor((right - left) / 2);

       console.log(middleIndex);
       console.log(left);
   }
   if (middleIndex < val)
   {
       right = middleIndex;
       middleIndex = Math.floor((right - left) / 2);

       console.log(middleIndex);
       console.log(right);
   }
   if(middleIndex === val)
        return middleIndex;
}