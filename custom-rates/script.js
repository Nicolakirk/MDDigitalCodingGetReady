
// Async function to retrieve exchange rates
const retrieveExchangeRates = async (currencyInput) => {

    const baseExchangeRatesURL = `https://open.er-api.com/v6/latest/`
 
    const exchangeRateURL = `${baseExchangeRatesURL}${currencyInput}`
   
   const response = await fetch(exchangeRateURL);
   
   if (!response.ok) {
    throw new Error('Network response was not ok');
}
const data = await response.json();
console.log(data.rates["GBP"])
return data.rates

};



document.getElementById("showCode").addEventListener("click", async function() {
    const currencyInput = document.getElementById("currencyInput").value.trim().toUpperCase(); 
    const codeDisplay = document.getElementById("codeDisplay"); 

    // Clear 
    codeDisplay.innerHTML = '';

    if (!currencyInput) {
        codeDisplay.innerHTML = 'Please enter a currency code.';
        return;
    }

    try {
        const rates = await retrieveExchangeRates(currencyInput); 
 let formattedRates = ''
 console.log(rates["GBP"])
        for(const key in rates ){
            if (rates.hasOwnProperty(key)) { 
                formattedRates += `${key}: ${rates[key]}<br>`;
            }
        }
        codeDisplay.innerHTML = formattedRates // 
     
        
        
        ;
    } catch (error) {
        codeDisplay.innerHTML = `Error: ${error.message}`; 
    }
});
