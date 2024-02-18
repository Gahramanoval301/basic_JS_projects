function sum(a, b) {
    return a + b;
}

function myFunction(input) {
    if (input) {
        return true
    }
    else {
        throw new Error('The value is not equal to 10')
    }
}
module.exports = myFunction