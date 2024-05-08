
let loginform = document.querySelector('.login');

document.querySelector('#login-btn').onclick = () =>{
loginform.classList.toggle('active');
navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}