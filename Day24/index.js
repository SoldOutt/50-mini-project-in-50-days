const slideNames = document.querySelectorAll('.slide-name')
const slideImgs = document.querySelectorAll('.slide-img')
const btnUp = document.querySelector('.button-up')
const btnDown = document.querySelector('.button-down')
const slideLeft = document.querySelector('.slide-left')
const slideRight = document.querySelector('.slide-right')
var idl = 0

slideImgs.forEach(function (slideImg, idx) {})

btnUp.addEventListener('click', function (x) {
    idl++
    if (idl == slideNames.length) idl = 0
    slideLeft.style.transform = `translateY(-${idl * 100}%)`
    slideRight.style.transform = `translateY(-${
        (slideImgs.length - idl - 1) * 100
    }%)`
})
btnDown.addEventListener('click', function (x) {
    idl--
    if (idl < 0) idl = slideNames.length - 1
    slideLeft.style.transform = `translateY(-${idl * 100}%)`
    slideRight.style.transform = `translateY(-${
        (slideImgs.length - idl - 1) * 100
    }%)`
})
