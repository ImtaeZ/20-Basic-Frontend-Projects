const container = document.getElementById("container")

const getCountry = async()=>{
    const url='https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const items = await res.json()
    items.forEach(element => {
        createCard(element)
    });
}

const createCard = (data)=>{
    const cardEL = document.createElement("div")
    cardEL.classList.add("country")
    const content = `
        <div class="img-container">
            <img src="${data.flags.png}"/>
        </div>
        <div class="info">
            <h3 class="name">${data.name.common}</h3>
            <small>Capital : <span>${data.capital}</span></small>
        </div>
    `
    cardEL.innerHTML=content
    container.appendChild(cardEL)
}


getCountry()