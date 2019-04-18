// takes in 2 strings
// checks whether the chars in the first string form a subsequence of the chars in the second string
// ie checks if the chars in the first string appear somewhere in the second string without their order changing

// ('sing', 'sting')
// ('hello', 'hello world') 
// ('abc', 'abracadabra')
// ('abc', 'oacb')

// start with the first char of the first string
// find the first char in the second string
// if it doesnt exist, return false
// else find the indexOf char
// for the remaining chars in the first string, find their indices,
// starting at the index + 1 of the leading char
// if not all of them exist, or if the are not in ascending order, return false
// if you find them all in the ascending order, return true

function isSubsequence(str1, str2) {
    let i = 0;
    for (let char of str1) {
        const index = str2.indexOf(char, i);
        if (index === -1)
            return false;
        i++;
    }

    return true;
}
