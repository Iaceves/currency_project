document.addEventListener("DOMContentLoaded", function(){

    fetch("http://localhost:3000/currencies")
        .then(resp => resp.json())
        .then(currencyArray =>{  
            appendFromSelect(currencyArray)
            appendToSelect(currencyArray)
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

        

})