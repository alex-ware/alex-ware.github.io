/*let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})*/

const themeSwitch = document.getElementById('theme-switch');

const toggleDarkMode = () => {
    document.body.classList.toggle('darkmode');
    localStorage.setItem('darkmode', document.body.classList.contains('darkmode') ? 'active' : null);
};

// Initial check for dark mode
if (localStorage.getItem('darkmode') === 'active') {
    document.body.classList.add('darkmode');
}

themeSwitch.addEventListener('click', toggleDarkMode);

