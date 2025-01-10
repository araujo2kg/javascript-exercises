const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        let currentYear = new Date().getFullYear();
        let oldestAge =
            (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        let currentAge =
            (current.yearOfDeath || currentYear) - current.yearOfBirth;

        return oldestAge > currentAge ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
