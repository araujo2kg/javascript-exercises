const fibonacci = function (position) {
    if (position == 0) return 0;
    if (position < 0) return "OOPS";

    // let sequence = [1, 1];
    // for (let i = 1; i < position; i++) {
    //     sequence.push(sequence[i] + sequence[i - 1]);
    // }
    // return sequence[position - 1];

    let previous = 1;
    let secondPrevious = 0;
    for (let i = 2; i <= position; i++) {
        let current = previous + secondPrevious;
        secondPrevious = previous;
        previous = current;
    }

    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
