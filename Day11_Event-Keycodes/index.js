var htmls = `<div class="keycode">
<div class="eventkey">a</div>
<div class="eventkeycode">65</div>
<div class="eventcode">KeyA</div>
</div>`
var container = document.querySelector('.container')
window.addEventListener('keydown', function (e) {
    console.log(e)
    container.innerHTML = `<div class="keycode">
    <div class="eventkey">${e.key === ' ' ? 'Space' : e.key}</div>
    <div class="eventkeycode">${e.keyCode}</div>
    <div class="eventcode">${e.code}</div>
    </div>`
})
