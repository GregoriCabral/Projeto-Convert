// Cotação de moeda do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do fomrulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somnete números.
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit(enviar) no formulário
form.onsubmit = (event) => {
    event.preventDefault() //Remove o recarregamento da página

    switch(currency.value) {
        
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Funçäo para converter a moeda
function convertCurrency(amount, price, symbol) {
    
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

        // Calcula e apresenta o total
        let total = String(amount * price).replace(".", ",")
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    }catch (error){
        //Rmove a classe que exibe o footer
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde!")
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL (value){

    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL(R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}