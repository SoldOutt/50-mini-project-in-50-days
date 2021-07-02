var inp = document.querySelectorAll('.text p')
var result = document.querySelector('.result')
var texts = []
inp.forEach(function (x) {
    texts.push(x.textContent)
})
// var txt = 'Xin chao cac ban'
// console.log(txt.length)
var pos = 1,
    ch = 0
function chen(a) {
    if (pos < 0) {
        return
    }
    result.innerHTML = a.slice(0, pos)
    if (ch == 0) {
        pos++
        setTimeout(() => {
            chen(a)
        }, 100)
    } else {
        pos--
        setTimeout(() => {
            chen(a)
        }, 100)
    }
    if (pos > a.length) {
        // ch = 1
        return
    }
}
function sleep(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('x')
        }, x)
    })
}
async function duyet() {
    for (let i = 0; i < texts.length; i++) {
        await chen(texts[i])
        // await sleep(2000)
    }
}
duyet()
