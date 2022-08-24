document.addEventListener("DOMContentLoaded", function(){

    fetch("http://localhost:3000/currencies")
        .then(resp => resp.json())
        .then(currencyArray =>{  
            appendFromSelect(currencyArray)
            appendToSelect(currencyArray)
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
            option.innerText = currency.currency
            option.value = currency.currency
            return option
        }

        function handleSubmit() {
            const form = document.querySelector("#form")
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const amount = e.target[0].value
                const from = e.target[1].value
                const to = e.target[2].value

                fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
            })
        }

})