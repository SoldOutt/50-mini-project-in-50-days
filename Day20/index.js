const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)
empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}
function dragEnd(e) {
    console.log(e)
    this.className = 'fill'
}
function dragOver(e) {
    e.preventDefault()
    console.log('drag Over')
}
function dragEnter(e) {
    e.preventDefault()
    console.log('drag Enter')
    this.className += ' hovered'
}
function dragLeave() {
    console.log('drag leave')
    this.className = 'empty'
}
function dragDrop(e) {
    e.preventDefault()
    this.className = 'empty'
    this.append(fill)
}
