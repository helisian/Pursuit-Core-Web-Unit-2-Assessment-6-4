document.addEventListener("DOMContentLoaded", () => {
    
    let select = document.querySelector(".select")
    let form = document.querySelector(".form")
    let reviewSubmission = document.querySelector("#reviewSubmission")
    let reviewList = document.querySelector(".reviewList")
    let title = document.querySelector("#title")
    let release = document.querySelector("#release")
    let description = document.querySelector("#description")
    let movie = document.querySelector(".movie")
    
    const fetchData = async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let data = res.data
            popMovieSelect(data)
        } catch(err){
            console.log(err)
        }
    }
    fetchData()

    const popMovieSelect = (data) => {
        data.forEach(movie => {
            let option = document.createElement("option")
            option.innerText = movie.title
            option.value = movie.url
            select.appendChild(option)
        })
    }

    select.addEventListener("change", (event) => {
        title.innerText = ""
        release.innerText = ""
        description.innerText = ""
        reviewList.innerText = ""
        movieInfo(event.currentTarget.value)
    })

    const movieInfo = async (url) => {
        try {
            let res = await axios.get(url)
            let movieContent = res.data
            title.innerText = movieContent.title
            release.innerText = movieContent.release_date
            description.innerText = movieContent.description
        }catch(err) {
            console.log(err)
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let li = document.createElement("li")
        li.innerText = reviewSubmission.value
        reviewList.appendChild(li)
        form.reset()
    })

})