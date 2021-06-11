var btn = document.querySelector('.input_form button')
var inp = document.querySelector('.input_form input')
btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active')
    inp.focus()
})
