var url = 'https://api.github.com/users/'
async function getUser(user) {
    var res = await fetch(url + user)
    var data = await res.json()
    console.log(data)
    return data
}
async function getRepos(link) {
    var res = await fetch(link)
    var data = await res.json()
    console.log(data)
    data = data.map(function (x) {
        return `<a href = "${x.html_url}">${x.name}</a>`
    })
    console.log(data.join(''))
    return data.join('')
}
function elm(user) {
    if (!user.name) {
        return 'Không có tài khoản này!!'
    }
    return `<div class="bxImg">
    <img src="${user.avatar_url}" alt="">
</div>
<div class="data">
    <h4>${user.name}</h4>
    <p class="des">${
        user.bio ? user.bio : 'Không có trích dẫn về người này'
    }</p>
    <div class="folow">
        <div class="follower"><span id="follower">${
            user.followers
        }</span> Follower</div>
        <div class="following"><span id="following">${
            user.following
        }</span> Following</div>
        <div class="repos"><span id="repos">${
            user.public_repos
        }</span> Repos</div>
    </div>
    <div class="repository">
        ${user.repository}
    </div>
</div>`
}
var form = document.querySelector('form')
var inp = document.querySelector('input')
var card = document.querySelector('.card')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    name = inp.value
    var data = await getUser(name)
    console.log(data)
    data.repository = await getRepos(data.repos_url)
    console.log(data)
    card.innerHTML = elm(data)
})
getUser('SoldOutt')
