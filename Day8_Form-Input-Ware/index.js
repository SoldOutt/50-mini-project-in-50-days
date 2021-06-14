var labels = document.querySelectorAll('.group_input label')
labels.forEach((label) => {
    console.log(1)
    label.innerHTML = label.innerText
        .split('')
        .map(
            (letter, index) =>
                `<span style="transition-delay: ${
                    index * 50
                }ms">${letter}</span>`
        )
        .join('')
})
