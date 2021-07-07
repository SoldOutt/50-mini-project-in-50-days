var navItem = document.querySelectorAll('.nav ul li')
var imgs = document.querySelectorAll('img')
navItem.forEach((x, idx) => {
    x.addEventListener('click', function () {
        var navActive = document.querySelector('.nav ul li.active')
        var imgShow = document.querySelector('img.show')
        navActive.classList.remove('active')
        imgShow.classList.remove('show')
        x.classList.add('active')
        imgs[idx].classList.add('show')
    })
})
