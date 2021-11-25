function encontrarMaior(arr: number[]): number{
    let maior: number = arr[0];
    for (let i = 0; i< arr.length; i++){
        if (arr[i] > maior){
            maior = arr[i];
        }
    }

    return maior
}

function encontrarMenor(arr: number[]): number{
    let maior: number = arr[0];
    for (let i = 0; i< arr.length; i++){
        if (arr[i] < maior){
            maior = arr[i];
        }
    }

    return maior
}

function exibirCrescente(arr: number[]): number[]{
    let result: number[] = []

    let maior: number = encontrarMaior(arr)
    for (let i = 0; i< arr.length; i++){
        for (let j = i; j< arr.length; j++){
            if ( arr[i] < maior){
                maior = arr[i];
            } else {
                let arr2: number[] = [];
                for (let k = j; k<arr.length - j; k++){
                    arr2.push(arr[k])
                }

                maior = encontrarMenor(arr2)
                
            }
        }
        result.push(maior)
    }
    return result;
}

const nums: number[] = [1,10,5,2,30,4,6,9,99,3]