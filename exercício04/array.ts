function somarItems(arr: number[]): number {
    var result: number = 0
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
    }  
    
    return result
}

const array = [1,4,66,8,10]
console.log(somarItems(array))

