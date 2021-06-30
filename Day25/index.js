const colors = ['red', 'blue', 'green', 'yellow', 'black']
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
]
var btn = document.querySelector('button')
var notifications = document.querySelector('.notifications')
btn.addEventListener('click', () => {
    var mess = document.createElement('div')
    mess.classList.add('message')
    mess.classList.add('box')
    mess.textContent = messages[Math.floor(Math.random() * messages.length)]
    mess.style.color = `${colors[Math.floor(Math.random() * colors.length)]}`
    notifications.appendChild(mess)
    setTimeout(() => {
        mess.remove()
    }, 2000)
})
