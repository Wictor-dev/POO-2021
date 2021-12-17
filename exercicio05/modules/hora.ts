class Hora {
    constructor(private _horas: number, private _min: number, private _seg: number){}

    horas(): number{
        return this._horas
    }

    minutos(): number{
        return this._min
    }

    segundos(): number {
        return this._seg
    }

    toString(): string{
        return `${this.horas()}:${this.minutos()}:${this.segundos()}`
    }   
}

export { Hora }