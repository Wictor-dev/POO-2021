import { Calculadora, CalculadoraCientifica } from './modules/calculadora'

let calc: Calculadora = new Calculadora(10, 5)

let calcCientific: CalculadoraCientifica = new CalculadoraCientifica(4,4)

console.log(calc.adicionar())
console.log(calcCientific.adicionar())
console.log(calcCientific.exponenciar())