const wordsArray = ['Pink','Red', 'Blue','Pink', 'Pink', 'Black', 'White', 'Pink']

function cutDuplicates(arr) {
    const sortedArray = []

    arr.forEach((word) => {
        if (!sortedArray.includes(word)) {
            sortedArray.push(word)
        }
    })
    console.log(sortedArray)
}
cutDuplicates(wordsArray)
