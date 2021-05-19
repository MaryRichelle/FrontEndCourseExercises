let findTheOldest = function( people) {
    people.sort((a, b) => {
       return a.yearOfBirth - b.yearOfDeath
    })
    return people[0];
}

module.exports = findTheOldest

