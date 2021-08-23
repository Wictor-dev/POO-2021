const numeros: number[] = [7,7,8,10,-1]

var media:number = 0;
var soma:number = 0;

for (let i: number = 0; i < numeros.length; i++){
    if (numeros[i] == -1){
        break
    }

    soma += numeros[i]
}

media = (soma / numeros.length)

console.log(`Soma: ${soma} - Media: ${media}`)