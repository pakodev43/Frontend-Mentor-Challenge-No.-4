
// Declarations
const navBtnOn = document.getElementById('navBtnOn');
const navBtnOff = document.getElementById('navBtnOff');
const navBar = document.getElementById('navBar');


// Functions
function onNav() {
    navBtnOn.style.display = 'none';
    navBtnOff.style.display = 'initial';
    navBar.classList.add('nav_bar_opened');
}

function offNav() {
    navBtnOff.style.display = 'none';
    navBtnOn.style.display = 'initial';
    navBar.classList.remove('nav_bar_opened');
}


// Calling the functions
navBtnOn.addEventListener("click", onNav);
navBtnOff.addEventListener("click", offNav);