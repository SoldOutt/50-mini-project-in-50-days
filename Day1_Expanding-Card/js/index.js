var listCard = document.querySelectorAll('.card')
listCard.forEach((card) => {
    card.addEventListener('click', () => {
        document.querySelector('.card.active').classList.remove('active')
        card.classList.add('active')
    })
})
