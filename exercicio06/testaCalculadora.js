"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("./modules/calculadora");
var calc = new calculadora_1.Calculadora(10, 5);
var calcCientific = new calculadora_1.CalculadoraCientifica(4, 4);
console.log(calc.adicionar());
console.log(calcCientific.adicionar());
console.log(calcCientific.exponenciar());
