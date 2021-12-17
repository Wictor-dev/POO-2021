class Calculadora {
    private _op1: number
    private _op2: number

    constructor (_op1: number, _op2: number) {
        this._op1 = _op1;
        this._op2 = _op2;
    }

    soma(): number {
        return this._op1 + this._op2;
    }

    subtrair(): number {
        return this._op1 - this._op2;
    }
}

export {Calculadora}