class Conta {
	private _numero: string;
	private _saldo: number;

	constructor(numero: string, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

    get numero(): string {
        return this._numero
    }

    set saldo(valor: number) {
        this._saldo = valor
    } 
    get saldo(): number {
        return this._saldo
    }

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

export { Conta }
