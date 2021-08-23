var vetor = [1, 2, 3, 4, 5];
var result = '[';
for (var i = 0; i < vetor.length; i++) {
    (i == vetor.length - 1) ? result += String(vetor[i]) : result += String(vetor[i]) + ',';
}
result += ']';
console.log(result);
