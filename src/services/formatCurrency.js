function formatCurrency(value){

    value = parseFloat(value.toString().replace(/\d{2}\b/g, '.$&'))

    let paramsToFormat = { 
        style: 'currency',
        currency: 'BRL' , 
        currencyDisplay: 'symbol'
    }
    return value.toLocaleString('pt-BR',paramsToFormat )
}

export default formatCurrency