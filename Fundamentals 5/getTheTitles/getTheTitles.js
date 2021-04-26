const getTheTitles = function( books) {
let solution = books.map(book => {
        return book.title;
    })
    return solution;
}

module.exports = getTheTitles;
