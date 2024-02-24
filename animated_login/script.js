const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.toggle('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}