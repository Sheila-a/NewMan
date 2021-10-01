const toggleBtn = document.querySelector('.toggle-btn');
const lists = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    lists.classList.toggle('show')
})