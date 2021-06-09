var buttonPrev = document.querySelector('#prev')
var buttonNext = document.querySelector('#next')
var circle = document.querySelectorAll('.circle')
var progress = document.querySelector('#progress')
console.log(circle)
var circleActive = 1
buttonNext.addEventListener('click', function () {
    circleActive++
    progress.style.width = (circleActive - 1) * (100.0 / 3) + '%'
    if (circleActive == circle.length) {
        buttonNext.disabled = true
    }
    buttonPrev.disabled = false
    update()
})
buttonPrev.addEventListener('click', function () {
    circleActive--
    progress.style.width = (circleActive - 1) * (100.0 / 3) + '%'
    if (circleActive == 1) {
        buttonPrev.disabled = true
    }
    buttonNext.disabled = false
    update()
})
function update() {
    circle.forEach((item, index) => {
        console.log(index)
        if (index < circleActive) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}
