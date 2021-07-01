var bxImg = document.querySelector('.bxImg')
bxImg.addEventListener('dblclick', (e) => {
    console.log(e)
    var layerX = e.layerX
    var layerY = e.layerY
    console.log(layerX + ' ' + layerY)
    var heart = document.createElement('i')
    heart.className = 'fas fa-heart'
    heart.style.top = layerY + 'px'
    heart.style.left = layerX + 'px'
    bxImg.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 1000)
})
