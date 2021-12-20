import { Produto, Estoque, ProdutoPerecivel } from './modules/Produto'

let p1: Produto = new Produto(100,'lápis', 2, 400)
let p2: Produto = new Produto(150, 'lapisera', 5, 600)
let p3: Produto = new Produto(130,'arroz', 5, 600)
let p4: ProdutoPerecivel = new ProdutoPerecivel(123, 'feijao', 10, 10, new Date())
let e1: Estoque = new Estoque([p1, p2])

console.log(e1.produtos)
e1.inserir(p3)
console.log(e1.produtos)
e1.excluir(p1)
console.log(e1.produtos)