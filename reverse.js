//recursive function which accepts a string and returns a new string in reverse

function reverse(str) {
    if (str.length == 1)
        return str[0];

    let len = str.length;
    return str[len - 1] + reverse(str.slice(0, len - 1));
}