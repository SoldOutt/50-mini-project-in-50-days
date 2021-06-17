var btn = document.querySelectorAll('.box .question i')
btn.forEach((item) => {
    item.addEventListener('click', function () {
        item.parentElement.parentElement.classList.toggle('active')
    })
})
