var cups = document.querySelectorAll('.cups .cup-small')
var percenWater = document.querySelector('#percen')
var liters = document.querySelector('#liters')
const step = 1.0 / cups.length
cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        if (idx < cups.length - 1) {
            var percen = (idx + 1) * step
            percenWater.style.height = percen * 100 + '%'
            percenWater.textContent = percen * 100 + '%'
            liters.textContent = 2 - percen * 2 + 'L'
            document.querySelector('.remained').style.display = 'flex'
        } else {
            var percen = (idx + 1) * step
            percenWater.style.height = percen * 100 + '%'
            percenWater.textContent = percen * 100 + '%'
            document.querySelector('.remained').style.height = 0
        }
        for (let i = 0; i <= idx; i++) {
            cups[i].classList.add('active')
        }
        for (let i = idx + 1; i < cups.length; i++) {
            cups[i].classList.remove('active')
        }
    })
})
