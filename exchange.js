const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const APIKEY = "iI5MOGYjB+daVRyCaDGy6Q==DabxlMOluey5DX5y";
const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=USD";

document.getElementById("convert").onclick = function () {
    console.log('hi')
    const amountTotal = parseFloat(amount.value); // Convertir a número
    console.log('total', amountTotal)
    const currencyTotal = currency.value;
    const url = apiURL + currencyTotal;
    console.log('url', url)

    fetch(url, {
        headers: {
            'X-API-KEY': API_KEY // Cambiado a API_KEY en lugar de apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate', rate)
            const resultPrice = amountTotal * rate;
            console.log('result', resultPrice)
            result.innerHTML = `<div>${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD </div>`; 
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            result.innerHTML = `<div>Error al obtener la tasa de cambio</div>`;
        });
};
