const vetor: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let result:string = '['
let pares: number = 0
for (let i: number = 0; i< vetor.length; i++){
    (i==vetor.length - 1) ? result += String(vetor[i]) : result += String(vetor[i]) + ',';
    (i%2 == 0) ? pares+=1 : pares += 0
}

result += ']'

console.log(result)
console.log(`Pares: ${pares}`)