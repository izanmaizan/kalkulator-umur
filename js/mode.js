//untuk mengatur mode light dan dark pada tampilan
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('change-mode');
});