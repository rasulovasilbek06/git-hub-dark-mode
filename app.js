const night = document.querySelector("#night")
const sun = document.querySelector("#sun")

sun.classList.toggle("hidden")

document.querySelector("#btn").addEventListener("click" , ()=> {
    document.querySelector("body").classList.toggle("dark")
    sun.classList.toggle("hidden");
    night.classList.toggle("hidden")
})