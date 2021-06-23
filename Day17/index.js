const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa5ae274a108db26900b9cf047e169b2'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'
const SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=aa5ae274a108db26900b9cf047e169b2&query='
var container = document.querySelector('.container')
var form = document.querySelector('form')
var inputMovie = document.querySelector('form input')
function addMovie(data) {
    var htmls = `<div class="movie">
    <div class="bxImg"><img src="${IMG_PATH}${data.backdrop_path}" alt="Anh phim"></div>
    <div class="movieTitle">
        <p>${data.title}</p>
        <span>${data.vote_average}</span>
    </div>
    <div class="overview">
        <h4>${data.title}</h4>
        <p>${data.overview}</p>
    </div>
</div>`
    return htmls
}
getMovie(API_URL)
async function getMovie(url) {
    var response = await fetch(url)
    var data = await response.json()
    console.log(data.results)
    var htmls = data.results.map((item) => addMovie(item))
    container.innerHTML = htmls.join('')
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    val = inputMovie.value
    console.log(val)
    if (val !== '') {
        getMovie(`${SEARCH_URL}${val}`)
        inputMovie.value = ''
    } else {
        return
    }
})
