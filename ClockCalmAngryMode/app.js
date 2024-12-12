const timeEL=document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime(){
    const time = new Date()
    const hr = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()
    timeEL.innerHTML=`${hr < 10 ? `0${hr}`:hr}:
    ${min < 10 ? `0${min}`:min}:
    ${sec < 10 ?`0${sec}`:sec}`
}
btnToggle.addEventListener("click", (e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="Angry Mode"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="Calm Mode"
    }
})
setTime()
setInterval(setTime,1000)