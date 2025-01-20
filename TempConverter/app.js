const celinput = document.getElementById("celcius")
const fainput = document.getElementById("farenheit")
const kelinput = document.getElementById("kelvin")
const tempinput = document.querySelectorAll("input")

tempinput.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempVal = parseFloat(e.target.value)
        let inputname = e.target.name

        if (e.target.value === ""){
            celinput.value = null
            fainput.value = null
            kelinput.value = null
            return
        }

        // Celcius -> F,K
        if (inputname === "celcius"){
            let farenheit = tempVal * 1.8 + 32
            fainput.value = farenheit.toFixed(2)

            let kelvin = tempVal + 273.15
            kelinput.value = kelvin.toFixed(2)
        }

        // Fareingeit -> C,K
        if (inputname === "farenheit"){
            let celcius = (tempVal - 32) / 9 * 5
            celinput.value = celcius.toFixed(2)
            let kelvin = celcius + 273.15
            kelinput.value = kelvin.toFixed(2)
        }

        // Kelvin -> C,F
        if (inputname === "kelvin"){
            let celcius = (tempVal - 273.15)
            celinput.value = celcius.toFixed(2)
            let farenheit = (celcius/5)*9 + 32
            fainput.value = farenheit.toFixed(2)
        }
    })
})