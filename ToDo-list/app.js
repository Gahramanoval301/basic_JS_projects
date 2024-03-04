const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; //add icon
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked'); //if your target element is li then toggle it 
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); //if your target element is span then delete that list 
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', JSON.stringify(listContainer.innerHTML));
}
function showTask() {
    listContainer.innerHTML = JSON.parse(localStorage.getItem('data'));
}
showTask();