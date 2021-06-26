var btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    var circles = document.querySelectorAll('.circle')
    circles.forEach((item) => item.remove())
    console.log(e)
    var ox = e.clientX
    var oy = e.clientY
    var buttonTop = e.target.offsetTop
    var buttonLeft = e.target.offsetLeft
    var inX = ox - buttonLeft
    var inY = oy - buttonTop
    var circle = document.createElement('span')
    console.log(inX + ' ' + inY)
    circle.classList.add('circle')
    circle.style.top = inY + 'px'
    circle.style.left = inX + 'px'
    circle.style.transform = 'translate(-50%,-50%)'
    btn.append(circle)
})
