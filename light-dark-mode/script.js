const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light images
function imageMode(theme) {
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function toggleDarkLightMode(theme) {
    nav.style.backgroundColor = theme === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)' ;
    textBox.style.backgroundColor = theme === DARK_THEME  ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = theme === DARK_THEME  ? 'Dark Mode' : 'Light Mode';
    theme === DARK_THEME  ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    theme === DARK_THEME  ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        toggleDarkLightMode(DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        toggleDarkLightMode(LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    } else {
        toggleSwitch.checked = false;
        toggleDarkLightMode(LIGHT_THEME);
    }
}