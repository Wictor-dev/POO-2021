function deixarMaiusculo(nome: string): string{
    return nome.toUpperCase();
}

function retornarCaractere(nome:string, posicao:number): string{
    return nome[posicao];
}

function ultimaPosicao(nome: string, vogal: string): number{
    let posicao: number = 0;
    for (let i =0; i < nome.length; i++){
        if (deixarMaiusculo(nome[i]) === deixarMaiusculo(vogal)){
            posicao = i;
        }
    }

    return posicao;
}

function dividirArray(nome:string):string[]{
    let frase: string[] = []

    let palavra: string = '';

    for (let i = 0; i < nome.length; i++){
        if (nome[i] == ' ' ){
            frase.push(palavra)
            palavra = '';
        }
        if (i == nome.length -1){
            palavra += nome[i];
            frase.push(palavra);
        }
        palavra += nome[i]
    }
    return frase
}
let str = 'Instituto Federal do Piauí'

console.log(deixarMaiusculo(str))
console.log(retornarCaractere(str, 10))
console.log(ultimaPosicao(str, 'o'))
console.log(dividirArray(str))