var numeros = [7, 7, 8, 10, -1];
var media = 0;
var soma = 0;
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] == -1) {
        break;
    }
    soma += numeros[i];
}
media = (soma / numeros.length);
console.log("Soma: " + soma + " - Media: " + media);
