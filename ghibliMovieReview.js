document.addEventListener("DOMContentLoaded", () => {
    
    let select = document.querySelector(".select")
    let form = document.querySelector(".form")
    let review = document.querySelector("#review")
    let revList = document.querySelector(".revList")
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
            option.value = movie.title
            select.appendChild(option)
        })
    }

    select.addEventListener("change", (select) => {
        title.innerText = ""
        release.innerText = ""
        description.innerText = ""
        console.log(select)
        movieInfo(select.value)
    })

    const movieInfo = async (selection) => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let movieContent = res.data
            movieContent.forEach(movie => {
                if(movie.title === selection){
                    title.innerText = movie.title
                    release.innerText = movie.release_date
                    description.innerText = movie.description
                  
                }
            debugger
            })
        }catch(err) {
            console.log(err)
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let li = document.createElement("li")
        li.innerText = review.value
        revList.appendChild(li)
        form.reset()
    })




})