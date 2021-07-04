var btnAdd = document.querySelector('.add-note')
var listNote = document.querySelector('.list-note')
window.addEventListener('load', () => {
    var notes = localStorage.getItem('notes')
    notes = JSON.parse(notes)
    notes.forEach((x) => {
        console.log(x)
        var note = createNote(x)
        listNote.appendChild(note)
    })
})
function createNote(text) {
    var note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `<div class="note-control">
                            <button class="btn delete"><i class="far fa-trash-alt"></i></button>
                            <button class="btn edit"><i class="far fa-edit"></i></button>
                        </div>
                        <div class="note-content ${text ? '' : 'hidden'}">
                            ${text ? text : ''}
                        </div>
                        <textarea class="${text ? 'hidden' : ''}">${
        text ? text : ''
    }</textarea>`
    var btnEdit = note.querySelector('.edit')
    var btnDel = note.querySelector('.delete')
    var inputText = note.querySelector('textarea')
    var main = note.querySelector('.note-content')
    btnEdit.addEventListener('click', () => {
        var text = inputText.value
        console.log(text)
        main.textContent = text
        main.classList.toggle('hidden')
        inputText.classList.toggle('hidden')

        //save in localStorage
        var notesText = document.querySelectorAll('textarea')
        var notes = []
        notesText.forEach((x) => {
            if (x.value == '') return
            notes.push(x.value)
        })
        console.log(notes)
        localStorage.setItem('notes', JSON.stringify(notes))
        console.log('local:' + localStorage.getItem('notes'))
    })
    btnDel.addEventListener('click', () => {
        note.remove()
    })
    return note
}
btnAdd.addEventListener('click', () => {
    console.log('1')
    var note = createNote('')
    listNote.append(note)
})
