const getTheTitles = function (books) {
    return books.reduce((array, currentBook) => {
        array.push(currentBook.title);
        return array;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
