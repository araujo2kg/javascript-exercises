const add = function (x, y, ...opt) {
    const optional = opt.reduce((total, current) => total + current, 0);
    return x + y + optional;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (args) {
    return args.reduce((total, current) => total + current, 0);
};

const multiply = function (args) {
    return args.reduce((total, current) => (total *= current));
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (x) {
    let fact = 1;
    for (let i = x; i > 0; i--) {
        fact *= i;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
