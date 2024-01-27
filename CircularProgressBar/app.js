const number = document.getElementById('number')
let counter = 0;

const value = +prompt('Enter a number: ')
const circle = document.querySelector('circle')
const intervalTime = 2000/value
console.log(intervalTime);
setInterval(() => {
    if (counter === value) {
        clearInterval();
    } else {
        counter += 1
        number.innerHTML = counter + '%'
    }
}, intervalTime);

const strokeDashOffSet = 472 - (472 * value / 100)
console.log(strokeDashOffSet);
circle.animate([
    // key frames
    { strokeDashoffset: strokeDashOffSet },
], {
    // sync options
    duration: 2000,
    easing: 'ease-in-out',
    fill: 'forwards'
});
