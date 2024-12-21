let api_key = "bf3d5b3f53d6ca686c3e19b2a5245697"
let page = 1
let search_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`
let api_url = () => `https://api.themoviedb.org/3/discover/movie?api_key=bf3d5b3f53d6ca686c3e19b2a5245697&page= ${page}`

async function getmovies(url){
    let res = await fetch(url)
    let data = await res.json()
    showData(data.results)
    
    
}


function showData(movies){
    let filmElement = document.getElementById('filmElement')
    filmElement.innerHTML = '';
    movies.forEach(film => {
        let {title, release_date, backdrop_path} = film
        let CardFilm = document.createElement('div')
        CardFilm.classList.add('cardfilm') // menambahkan class

        CardFilm.innerHTML = 
        `<img src="https://image.tmdb.org/t/p/w1280/${backdrop_path}">
            <div class="detail">
                <h5 class="movieTitle"> ${title} </h5>
                <p class="movieDate"> ${release_date} </p>
                
            </div>
        `
        filmElement.append(CardFilm)
    })
}



let next = document.getElementById('next')
let prev = document.getElementById('prev')
let current = document.getElementById('current')

function nextpage(){
    // if(page > )
    page += 1
    getmovies(api_url())
    current.innerHTML = page
}

function prevpage(){
    if(page > 1){
        page -= 1
        getmovies(api_url())
        current.innerHTML = page

    }
}

next.addEventListener('click', ()  => {
    nextpage()
})

prev.addEventListener('click', () => {
    prevpage()
})


current.innerHTML = page
getmovies(api_url())

let formsearch = document.getElementById('formsearch');
let search = document.getElementById('search');

formsearch.addEventListener('submit', (event) => {
    event.preventDefault()
    getmovies(search_api + search.value)
    search.value = ''
})