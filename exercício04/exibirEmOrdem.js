function encontrarMaior(arr) {
    var maior = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}
function encontrarMenor(arr) {
    var maior = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < maior) {
            maior = arr[i];
        }
    }
    return maior;
}
function exibirCrescente(arr) {
    var result = [];
    var maior = encontrarMaior(arr);
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] < maior) {
                maior = arr[i];
                // console.log(maior)
            }
            else {              
                var arr2 = [];
                for (var k = i; k < arr.length; k++) {
                    arr2.push(arr[k]);
                }
                // console.log(arr2)
                maior = encontrarMenor(arr2);
                // console.log(maior)
            }
        }
        result.push(maior);
    }
    return result;
}
var nums = [1, 10, 5, 2, 30, 4, 6, 9, 99, 3];
// exibirCrescente(nums)
console.log(exibirCrescente(nums))


//Incompleto