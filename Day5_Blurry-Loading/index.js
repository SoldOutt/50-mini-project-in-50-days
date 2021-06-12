var bg = document.querySelector('.bg')
var intLoading = document.querySelector('.loading-text')
var int = setInterval(loading, 30)
var load = 0
function loading() {
    load++
    console.log(load)
    if (load > 99) {
        clearInterval(int)
    }
    intLoading.textContent = `${load}%`
    intLoading.style.opacity = (100 - load) / 100.0
    bg.style.filter = `blur(${((100 - load) / 100.0) * 30}px)`
}
