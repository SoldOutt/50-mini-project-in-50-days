var counters = document.querySelectorAll('.counter div')
counters.forEach((counter) => {
    counter.textContent = '0'
    const updateCounter = () => {
        var target = counter.getAttribute('data-target')
        var step = target / 200
        var sum = +counter.textContent
        if (sum < target) {
            counter.textContent = `${Math.ceil(sum + step)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.textContent = target
        }
    }
    updateCounter()
})
