var btn = document.querySelector('button')
var body = document.querySelector('body')
var hourEl = document.querySelector('.hour')
var minuteEl = document.querySelector('.minute')
var secondEl = document.querySelector('.second')
var timeClock = document.querySelector('.time')
var date = document.querySelector('.date')
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

    var day = days[time.getDay()]
    var month = months[time.getMonth()]
    var daten = time.getDate()
    // console.log(date)
    var step = 360 / 60

    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        second * step
    }deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        minute * step
    }deg)`
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hour * step}deg)`
    timeClock.innerHTML = `${hour}:${minute} ${
        time.getHours() > 12 ? 'PM' : 'AM'
    }`

    date.innerHTML = ` ${day},${month} <span class="circle">${daten}</span>`

    setTimeout(setClock, 1000)
}
setClock()
