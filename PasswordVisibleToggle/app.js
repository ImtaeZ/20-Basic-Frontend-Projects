const eyeicon = document.querySelector("#eye")
const passEl = document.querySelector("#password")

eyeicon.addEventListener("click", ()=>{
    if(eyeicon.classList.contains("fa-eye")){
        eyeicon.classList.replace("fa-eye", "fa-eye-slash")
        passEl.setAttribute("type","text")
    }else{
        eyeicon.classList.replace("fa-eye-slash", "fa-eye")
        passEl.setAttribute("type","password")

    }
})