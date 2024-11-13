const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || number1 < 0) return "ERROR";
    if (!Number.isInteger(number2) || number2 < 0) return "ERROR";

    let sum = 0;
    let start = (number1 < number2) ? number1 : number2;
    let end = (number1 > number2) ? number1 : number2;

    for (start; start <= end; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
