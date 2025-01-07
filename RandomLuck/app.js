const message = [
    "Very LUCKY", "Lucky Ass", "Good Luck","Decent Luck","Nothing Speacial",
    "Slightly Bad Luck", "Bad LUCK", "GO TO CHURCH MAN"
]
const container = document.querySelector(".container")
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notiEl = document.createElement("div")
    notiEl.classList.add("notification")
    notiEl.innerText=randomMessage()
    container.appendChild(notiEl)
    setTimeout(()=>{
        notiEl.remove()
    },3000)
}
function randomMessage(){
    return message[Math.floor(Math.random()*message.length)]
}

randomMessage()