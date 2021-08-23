function convert(dolar : number) : number {
    return dolar * 5 // definindo que o dolar vale 5 reais
}

var dolar: number = 3
console.log(`$ ${dolar} = R$ ${convert(dolar)}`)