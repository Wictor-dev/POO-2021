"use strict";
exports.__esModule = true;
var Calculadora_1 = require("./modules/Calculadora");
var c1 = new Calculadora_1.Calculadora(10, 5);
console.log(c1.soma());
console.log(c1.subtrair());
// console.log(c1._op1) é impossível acessar os atributos fora da classe, quando eles são privados
