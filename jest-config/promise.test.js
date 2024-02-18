const fetchPromise = require('./promise')

// test('the data is peanut butter', () => {
//     fetchPromise().then((data) => {
//         expect(data).toBe('peanut butter')
//     })
// })

// async/await test
test('the data is peanut butter with async', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter')
})