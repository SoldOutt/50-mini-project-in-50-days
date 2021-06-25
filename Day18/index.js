var btn = document.querySelector('button')
var body = document.querySelector('body')
var hourEl = document.querySelector('.hour')
var minuteEl = document.querySelector('.minute')
var secondEl = document.querySelector('.second')
var timeClock = document.querySelector('.time')
// console.log(second)
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
btn.addEventListener('click', () => {
    body.classList.toggle('dark')
})

function setClock() {
    var time = new Date()
    console.log({ time })
    var hour = time.getHours() % 12
    var minute = time.getMinutes()
    var second = time.getSeconds()
    console.log(hour + ':' + minute + ':' + second)
    secondEl.style.transform = `rotateZ(20deg);`
}
setClock()
var interval = setInterval(() => {}, 1000)
