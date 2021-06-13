var boxs = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxs)
checkboxs()
function checkboxs() {
    boxs.forEach((box) => {
        var boxTop = box.getBoundingClientRect().top
        if (boxTop < window.innerHeight - box.clientHeight && boxTop > 0) {
            box.classList.add('show')
        } else if (boxTop < -box.clientHeight || boxTop > window.innerHeight) {
            box.classList.remove('show')
        }
    })
}
