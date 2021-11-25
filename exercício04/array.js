function somarItems(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
var array = [1, 4, 66, 8, 10];
console.log(somarItems(array))
