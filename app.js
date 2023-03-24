// dark / light  mode
const night = document.querySelector("#night")
const sun = document.querySelector("#sun")

// select api
const btn = document.querySelector("#btn")
const form = document.querySelector("form")
const input = document.querySelector("input")



// user
const ism = document.querySelector("#user-name")
const post = document.querySelector("#post")
const follower = document.querySelector("#follower")
const following = document.querySelector("#following")
const bio = document.querySelector("#bio")
const cauntriy = document.querySelector("#location")
const twitter = document.querySelector("#twitter")
const gitUrl = document.querySelector("#gitUrl")
const company = document.querySelector("#company")
const created = document.querySelector(".main-span-3")
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const avatar = document.querySelector("#user")

// dark / light  mode 
sun.classList.toggle("hidden")
document.querySelector("#btn").addEventListener("click" , (e)=> {
    document.querySelector("body").classList.toggle("dark")

    sun.classList.toggle("hidden");
    night.classList.toggle("hidden")
})



// select user api



form.addEventListener("submit" , (e)=> {
    e.preventDefault()
    const inputVal = input.value
    console.log(inputVal);
    input.value = ""
    
    async function take() {
        const manzil = await  fetch(`https://api.github.com/users/${inputVal}`)
        const data = await manzil.json()
        ism.textContent = data.name
        post.textContent = data.public_repos
        follower.textContent = data.followers
        following.textContent = data.following
        bio.textContent = data.bio
        cauntriy.textContent = data.location
        twitter.textContent = data.twitter_username
        gitUrl.textContent = data.url
        company.textContent = data.company
        created.textContent = data.created_at
        console.log(data);
    }
    take()
})