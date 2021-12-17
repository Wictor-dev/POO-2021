import { Conta, Banco } from "./modules/Banco";

let c1: Conta = new Conta('123', 1000)
let c2: Conta = new Conta('321', 200)
let c3: Conta = new Conta('456', 600)
c1.depositar(100)
console.log(c1.saldo)
c1.sacar(200)
console.log(c1.saldo)
c1.transferir(c2, 300)
console.log(c1.saldo)
console.log(c2.saldo)

let banco: Banco = new Banco([c1,c2,c3])

console.log(banco.contas)
console.log(banco.consultar('123'))
banco.alterar(c2)
banco.excluir('123')
console.log(banco.contas)
banco.depositar('456',300)
console.log(c3.saldo)
