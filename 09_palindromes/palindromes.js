const palindromes = function (string) {
    const alphaString = toAlpha(string);

    let j = 0;
    for (let i = alphaString.length - 1; i >= 0; i--) {
        if (alphaString[i] != alphaString[j]) return false;
        j++;
    }
    return true;
};

const isLetter = function (char) {
    return char.toLowerCase() != char.toUpperCase();
};

const isNumber = function (char) {
    return !isNaN(parseInt(char));
};

const toAlpha = function (string) {
    return string
        .split("")
        .filter((char) => isLetter(char) || isNumber(char))
        .join("")
        .toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
