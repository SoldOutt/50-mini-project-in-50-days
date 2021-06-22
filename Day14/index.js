var btn = document.querySelector('.container button')
var container = document.querySelector('.container')
btn.addEventListener('click', () => {
    container.classList.toggle('active')
})
