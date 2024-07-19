let headlines = document.getElementById('headlines')
let business = document.getElementById('business')
let entertainment = document.getElementById('entertainment')
let health = document.getElementById('health')
let science = document.getElementById('science')
let sports = document.getElementById('sports')
let technology = document.getElementById('technology')
let fetchheadlines= async function(){
    let result= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data=await result.json()
    displayheadlines(data.articles);
}
fetchheadlines();
let displayheadlines=(data)=>{
    console.log(data)
    data.forEach(element => {
        let subdiv = document.createElement('div')
            subdiv.style.backgroundImage=`url(${element.urlToImage})`;
            subdiv.innerHTML=`<p>${element.title}</p>`
            headlines.appendChild(subdiv)
    });
}
let fetchbusiness= async function(){
    let result= await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data=await result.json()
    displaybusiness(data.articles)
}
fetchbusiness()
let displaybusiness=(data)=>{
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    //console.log(data)
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML=`<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        business.appendChild(subdiv)
    })
}
let fetchEntertainment = async function(){
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data = await result.json()
    displayEntertainment(data.articles)
}
fetchEntertainment()
let displayEntertainment = (data) => {
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    //console.log(data)
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        entertainment.appendChild(subdiv)
    })
}
let fetchHealth = async function(){
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data = await result.json()
    displayHealth(data.articles)
}
fetchHealth()
let displayHealth = (data) => {
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        health.appendChild(subdiv)
    })
}
let fetchScience = async function(){
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data = await result.json()
    displayScience(data.articles)
}
fetchScience()
let displayScience = (data) => {
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        science.appendChild(subdiv)
    })
}
let fetchSports = async function(){
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data = await result.json()
    displaySports(data.articles)
}
fetchSports()
let displaySports = (data) => {
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        sports.appendChild(subdiv)
    })
}
let fetchTechnology = async function(){
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=49948d2b9edc4360a8ab3b709a699b36")
    let data = await result.json()
    displayTechnology(data.articles)
}
fetchTechnology()
let displayTechnology = (data) => {
    data.forEach(ele => {
        for (let key in ele){
            if (ele[key] === null){
                ele[key] = `${key} will be updated soon.`
            }
        }
    })
    data.forEach(ele => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${ele.source.name}</h2>
        <h4>${ele.title}</h4>
        <img src=${ele.urlToImage}>
        <p>${ele.description}</p>
        <a href=${ele.url} target='_blank'><button>Explore the official website</button></a>`
        technology.appendChild(subdiv)
    })
}
