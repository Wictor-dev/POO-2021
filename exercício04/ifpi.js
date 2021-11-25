function deixarMaiusculo(nome) {
    return nome.toUpperCase();
}
function retornarCaractere(nome, posicao) {
    return nome[posicao];
}
function ultimaPosicao(nome, vogal) {
    var posicao = 0;
    for (var i = 0; i < nome.length; i++) {
        if (deixarMaiusculo(nome[i]) === deixarMaiusculo(vogal)) {
            posicao = i;
        }
    }
    return posicao;
}
function dividirArray(nome) {
    var frase = [];
    var palavra = '';
    for (var i = 0; i < nome.length; i++) {
        if (nome[i] == ' ' ) {
            frase.push(palavra);
            palavra = '';
        }
        if (i == nome.length -1){
            palavra += nome[i];
            frase.push(palavra);
        }
        palavra += nome[i];
    }
    return frase;
}
var str = 'Instituto Federal do Piauí';

console.log(deixarMaiusculo(str));
console.log(retornarCaractere(str, 10));
console.log(ultimaPosicao(str, 'o'));
console.log(dividirArray(str));
