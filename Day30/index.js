var colors = [
    'red',
    'green',
    'blue',
    'pink',
    'purple',
    'brown',
    'yellow',
    'orange',
]
var boxs = document.querySelectorAll('.box')
boxs.forEach((x) => {
    x.addEventListener('mouseenter', function () {
        x.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)]
    })
    x.addEventListener('mouseleave', function () {
        x.style.backgroundColor = 'rgb(104, 104, 104)'
    })
})
