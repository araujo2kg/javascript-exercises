const removeFromArray = function(baseArray, ...toRemove) {
    const newArray = baseArray.filter((element) => {
        return !toRemove.includes(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
