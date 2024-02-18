// callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 1000);
}
// module.exports = fetchData;

function myRabbit(callback) {
    return callback('rabbit') //
}
module.exports = myRabbit;