const namesArray = ['Ann', 'David', 'Mary', 'Stephanie', 'Mark', 'Boris']

function showNamesStartingWithLetter(arr, letter) {
    arr.forEach((word) => {
        if (letter.toLowerCase() === word[0].toLowerCase()) {
            console.log(word)
        }
    })
}
showNamesStartingWithLetter(namesArray, 'm')
