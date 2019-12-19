document.addEventListener("DOMContentLoaded", () => {
    
    let select = document.querySelector(".select")
    let form = document.querySelector(".form")
    let revList = document.querySelector(".revList")
    let  title = document.querySelector("#title")
    let release = document.querySelector("#release")
    let description = document.querySelector("#description")
    
    const fetchData = async () => {
        try {
            let res = await axios.get("https://ghibliapi.herokuapp.com/films")
            let data = res.data
            popMovie(data)
        } catch(err){
            console.log(err)
        }
    }
    fetchData()

    const popMovie = (data) => {
        data.forEach(movie =>)
    }



})