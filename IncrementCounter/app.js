const counters=document.querySelectorAll(".counter")
counters.forEach(counter => {
    counter.innerText='0'
    const updateCounter=()=>{
        const target = +counter.getAttribute("data-target")
        const start = +counter.innerText
        const increment = target/100
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }else{
            count.innerText=target
        }
    }
    updateCounter()
})