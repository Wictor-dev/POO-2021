class Produto {
    constructor(private _id: number, private _nome: string, private _quantidade: number, private _valor: number){}

    get id() {
        return this._id 
    }
    get quantidade(): number {
        return this._quantidade
    }

    set quantidade(valor: number) {
        this._quantidade = valor;
    }

    repor(quantia: number): void {
        this.quantidade += quantia;
    }

    darBaixa(quantia: number) : void {
        this.quantidade -= quantia;
    }
}

class ProdutoPerecivel extends Produto {
    constructor(_id: number,_nome: string, _quantidade: number, _valor: number, private _dataValidade: Date){
        super(_id, _nome, _quantidade, _valor)
        this._dataValidade = _dataValidade
    }

    ehValido(data: Date): boolean {
        if (data < this._dataValidade) {
            return true
        }

        return false
    }
}

class Estoque{
    constructor (private _produtos: Produto[]){}

    get produtos() {
        return this._produtos
    }

    set produtos(valor: Produto[]){
        this._produtos = valor
    }
    inserir(produto: Produto) {
        if (!this.consultar(produto.id)){
            this.produtos.push(produto)
        }
    }

    excluir(produto: Produto) {
        this.produtos.splice(this.produtos.indexOf(produto), 1)
    }
    consultar(id: number): boolean {
        for (let x = 0; x < this.produtos.length; x++){
            if (this.produtos[x].id === id){
                return true
            }
        }

        return false
    }

    repor(produto: Produto, quantia: number) {
        produto.repor(quantia)
    }

    darBaixa(produto: Produto, quantia: number) {
        produto.darBaixa(quantia)
    }

}

export {Produto, ProdutoPerecivel, Estoque}