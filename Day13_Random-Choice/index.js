var choices = document.querySelector('textarea')
var choice = document.querySelector('.choice')
choices.addEventListener('keyup', function (e) {
    if (e.code == 'Enter') {
        choices.value = ''
        randomChoise()
        return
    }
    val = e.target.value
    ArrChoice = val.split(',')
    var htmls = ArrChoice.map(function (item, idx) {
        var x = `<span>${item}</span>`
        return x
    }).join('')
    choice.innerHTML = htmls
})
function randomChoise() {
    times = 30
    var interval = setInterval(function () {
        var randomTag = randomchoice()
        randomTag.classList.add('active')
        setTimeout(() => {
            randomTag.classList.remove('active')
        }, 100)
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            var randomTag = randomchoice()
            randomTag.classList.add('active')
        }, 100)
    }, times * 100)
}
function randomchoice() {
    var listChoise = document.querySelectorAll('.choice span')
    // console.log(listChoise)
    return listChoise[Math.floor(Math.random() * listChoise.length)]
}
