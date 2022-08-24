document.addEventListener("DOMContentLoaded", function(){

    const url = "https://api.frankfurter.app"
    fetch(`${url}/currencies`)
        .then(resp => resp.json())
        .then(data => {
            console.log(Object.keys(data))
            appendFromSelect(Object.keys(data))
            appendToSelect(Object.keys(data))
            handleSubmit()

        })

        const fromSelect = document.querySelector("#fromSelect")
        const toSelect = document.querySelector("#toSelect")

        function appendFromSelect(currencies) {
            currencies.forEach(currency =>{ 
                const option = makeOption(currency)
                fromSelect.appendChild(option)
            })
        }

        function appendToSelect(currencies) {
            currencies.forEach(currency =>{ 
                const option = makeOption(currency)
                toSelect.appendChild(option)
            })
        }
        
        
        function makeOption(currency) {
            const option = document.createElement("option")
            option.innerText = currency
            option.value = currency
            return option
        }

        function handleSubmit() {
            const form = document.querySelector("#form")
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const amount = e.target[0].value
                const from = e.target[1].value
                const to = e.target[2].value

                fetch(`${url}/latest?amount=${amount}&from=${from}&to=${to}`)
                .then(resp => resp.json())
                .then(data => {
                    const amount = Object.values(data.rates)[0]
                    const type = Object.keys(data.rates)[0]
                
                    const conversion = document.querySelector("#conversion")
                    conversion.innerText = `${amount} ${type}`
                })
            })
        }

})