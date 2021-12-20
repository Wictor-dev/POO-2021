class Calculadora {
    constructor (private _op1:number, private _op2: number) {}

    get op1(): number{
        return this._op1
    }

    get op2(): number{
        return this._op2
    }

    set op1(valor: number) {
        this._op1 = valor
    }

    set op2(valor: number) {
        this._op2 = valor
    }

    adicionar(): number{
        return this.op1 + this.op2
    }
}

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return this.op1 ** this.op2
    }
}

export { Calculadora, CalculadoraCientifica }