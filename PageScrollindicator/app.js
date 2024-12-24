const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    const pageH = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPer = (scrollTop/pageH)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPer+"%"
}