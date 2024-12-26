const progressEl = document.querySelector(".progress")
const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
window.onscroll=()=>scrollProgress()
scrollBtn.addEventListener("click",scrolltoTop)

// Scroll Progress
function scrollProgress(){
    const pageH = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPer = (scrollTop/pageH)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPer+"%"
}

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal > 0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}

function scrolltoTop(){
    rootEl.scrollTo({
        top:0,
        behaivor: "smooth"
    })
}