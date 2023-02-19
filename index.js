const tracker = document.getElementById("tracker");
const themeBtn = document.getElementById("theme");
const themeIcon = document.getElementById("theme-icon");

let password = document.getElementById("password");
let confirm = document.getElementById("confirm");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    tracker.animate({
    top: `${clientY}px`,
    left: `${clientX}px`
    }, { duration: 3000, fill: "forwards"});
}

const root = document.documentElement;
root.className = "dark";

themeBtn.onclick = () => {
    if (themeIcon.textContent == "light_mode") {
        themeIcon.textContent = "dark_mode";
        root.className = "light";
    } else {
        themeIcon.textContent = "light_mode";
        root.className = "dark";
    }
};

function setTheme() {
    
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

function validatePassword(){
  if(password.value != confirm.value) {
    confirm.setCustomValidity("Passwords Don't Match");
  } else {
    confirm.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm.onkeyup = validatePassword;