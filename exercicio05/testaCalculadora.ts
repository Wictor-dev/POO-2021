import { Calculadora } from "./modules/Calculadora";

let c1: Calculadora = new Calculadora(10,5);

console.log(c1.soma())
console.log(c1.subtrair())
// console.log(c1._op1) é impossível acessar os atributos fora da classe, quando eles são privados
