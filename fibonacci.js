// function which accepts a number and returns the nth number in the fibonacci sequence
// fibonacci sequence is the sequence of whole numbers which starts with double 1s and where every number
// thereafter is equal to the sum of the previous 2 numbers


function fibonacci(num) {
    if (num < 2)
        return 1;

    return 2 +  + fibonacci(num - 1);
}


3 = 1,1,2
5 = 1,1,2,3,5
4 = 1,1,2,3
10 = 1,1,2,3,5,8,13,21,34,55