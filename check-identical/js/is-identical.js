const firstArray = ['Apple', 'Mango', 'Banana', 'Watermelon']
const secondArray = ['Apple', 'Mango', 'Banana', 'Watermelon', 'f']

function isArrayIdentical(arr1, arr2) {
    if(arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }
    return false
}

isArrayIdentical(firstArray, secondArray)
