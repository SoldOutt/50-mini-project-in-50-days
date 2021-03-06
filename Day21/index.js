var canvas = document.querySelector('#canvas')
var sizeEl = document.querySelector('#size')
var prew = document.querySelector('#prew')
var plus = document.querySelector('#plus')
var colorip = document.querySelector('#color')
var clear = document.querySelector('.clear')
size = sizeEl.textContent
var color = 'black'
var ctx = canvas.getContext('2d')
var x,
    y,
    isPress = false
canvas.addEventListener('mousemove', (e) => {
    if (isPress) {
        x2 = e.offsetX
        y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})
canvas.addEventListener('mousedown', (e) => {
    isPress = true
    x = e.offsetX
    y = e.offsetY
    drawCircle(x, y)
})
canvas.addEventListener('mouseup', (e) => {
    isPress = false
    x = undefined
    y = undefined
})
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2) // Outer circle
    ctx.fillStyle = color
    ctx.fill() //Vẽ một hình dạng rắn bằng cách lấp đầy vùng nội dung của đường dẫn.
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1) //chuyen toi vi tri x1,y1
    ctx.lineTo(x2, y2) //vi tri ket thuc la x2,y2
    ctx.strokeStyle = color //màu đường
    ctx.lineWidth = size * 2 //kích thước đường
    ctx.stroke() //vẽ đường
}
plus.addEventListener('click', () => {
    size++
    sizeEl.textContent = size
})
prew.addEventListener('click', () => {
    size--
    sizeEl.textContent = size
})
colorip.addEventListener('change', (e) => {
    color = e.target.value
})
clear.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
