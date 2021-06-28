var nav = document.querySelector('.nav')
console.log(nav.offsetHeight)
window.addEventListener('scroll', (e) => {
    console.log(window.scrollY)
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})
