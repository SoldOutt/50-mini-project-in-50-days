var btnClick1 = document.querySelector('button#button-click1')
btnClick1.addEventListener('click', (e) => {
    var circles = document.querySelectorAll('.circle')
    circles.forEach((item) => item.remove())
    console.log(e)
    var inX = e.layerX
    var inY = e.layerY
    var circle = document.createElement('span')
    console.log(inX + ' ' + inY)
    circle.classList.add('circle')
    circle.style.top = inY + 'px'
    circle.style.left = inX + 'px'
    circle.style.transform = 'translate(-50%,-50%)'
    btnClick1.append(circle)
    setTimeout(() => {
        circle.remove()
    }, 300)
})
