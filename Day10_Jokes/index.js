var joke = document.querySelector('.box p')
var api = 'https://icanhazdadjoke.com/'
var btn = document.querySelector('.box button')
var head = {
    headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
}
async function getJoke() {
    await fetch(api, head)
        .then((response) => response.json())
        .then((data) => (joke.innerHTML = data.joke))
}
btn.addEventListener('click', getJoke)
