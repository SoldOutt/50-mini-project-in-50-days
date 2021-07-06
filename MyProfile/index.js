var animationItems = document.querySelectorAll('.animation')
const clientHeight = window.innerHeight
console.log(clientHeight)
window.addEventListener('scroll', (e) => {
    animationItems.forEach((x) => {
        if (isStartAnimation(x)) {
            x.style.opacity = 1
            var type = x.getAttribute('data-type')
            if (type == 'to-right') {
                x.style.left = 0 + '%'
            } else if (type == 'to-left') {
                x.style.right = 0 + '%'
            } else if (type == 'to-up') {
                x.style.transform = 'translateY(0px)'
            }
            var delay = x.getAttribute('data-delay')
            x.style.transitionDelay = `${delay ? delay / 1000.0 : 0}s`
        }
    })
})
function isStartAnimation(x) {
    var td = x.getBoundingClientRect()
    if (td.y < clientHeight - (td.height * 3) / 4) {
        return 1
    }
    return 0
}
