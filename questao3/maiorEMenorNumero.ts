function maiorNum(num1: number, num2: number, num3: number) : number {
    if (num1 > num2 && num1 > num3){
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    } else {
        return num3
    }
}

function menorNum(num1: number, num2: number, num3: number) : number {
    if (num1 < num2 && num1 < num3){
        return num1
    } else if(num2 < num1 && num2 < num3){
        return num2
    } else {
        return num3
    }
}


var num1 : number = 10;
var num2 : number = 10;
var num3 : number = 10;

(num1 == num2 && num1 == num2) ? console.log('Números iguais') :
    console.log(`O maior número é ${maiorNum(num1,num2,num3)} e o menor é ${menorNum(num1,num2,num3)}`)

