function maiorNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
function menorNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
var num1 = 11;
var num2 = 15;
var num3 = 13;
(num1 == num2 && num1 == num2) ? console.log('Números iguais') :
    console.log("O maior n\u00FAmero \u00E9 " + maiorNum(num1, num2, num3) + " e o menor \u00E9 " + menorNum(num1, num2, num3));
