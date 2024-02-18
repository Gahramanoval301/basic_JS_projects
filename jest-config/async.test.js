// const fetchData = require('./async');
const myRabbit = require('./async');
// import { myRabbit } from './async.js';

// test('the data is peanut butter', () => {
//     function callback(data) {
//         try {
//             expect(data).toBe('peanut butter');
//         } catch (error) {
//             throw new Error('error')
//         }
//     }
//     fetchData(callback);
// })

// callback('rabbit')
test('description', () => {
    function callback(data) {
        try {
            expect(data).toBe('rabbit')
        } catch (error) {
            throw new Error(error)
        }
    }
    myRabbit(callback)

})