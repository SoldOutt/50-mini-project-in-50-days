var animationItems = document.querySelectorAll('.animation')
var components = document.querySelectorAll('.nav-menu ul li')
components.forEach((x) => {
    x.addEventListener('click', () => {
        var component = x.getAttribute('data-link')
        if (x.querySelector('.nav-menu__child')) {
            x.querySelector('.nav-menu__child').classList.toggle('active')
        }
        console.log(component)
        if (!component) {
            return
        }
        var componentActive = document.querySelector('.nav-menu ul li.active')
        componentActive.classList.remove('active')
        x.classList.add('active')
        document.querySelectorAll('.main>.container-fluid').forEach((x) => {
            console.log(x.id + component)
            if (component == x.id) {
                document
                    .querySelector('.main>.container-fluid.active')
                    .classList.remove('active')
                x.classList.add('active')
            }
        })
    })
})
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

//header
var btnSearch = document.querySelector('.header .header-search button')
var inputSearch = document.querySelector('.header .header-search input')
btnSearch.addEventListener('click', function () {
    inputSearch.classList.toggle('active')
})
