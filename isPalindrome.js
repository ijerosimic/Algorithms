// recursive function which returns true if the string passed to it is a palindrome (reads the same forward and backward)
// otherwise it returns false

function isPalindrome(str) {
    let len = str.length;
    if (len === 1)
        return true;

    if (str[0] === str[len - 1])
        return isPalindrome(str.slice(1, len - 1));

    return false;
}