const vetor: number[] = [1,2,3,4,5]

let result : string= '['

for (let i: number = 0; i< vetor.length; i++){
    (i==vetor.length - 1) ? result += String(vetor[i]) : result += String(vetor[i]) + ','
}

result += ']'

console.log(result)