//1
// class Hotel {
//     quantReservas: number;
//     adicionarReserva() : void{
//         this.quantReservas++;
//     }
// }

// let h1: Hotel = new Hotel();
// h1.adicionarReserva();
// não dará erro, porém o valor da variável quantReservas será NaN

//2
class Hotel {
    constructor(private _quantReservas: number){}

    get quantReservas(): number{
        return this._quantReservas;
    }
    adicionarReserva() : void{
        this._quantReservas++;
    }
}

// let h1:Hotel = new Hotel(4);
// console.log(h1.quantReservas);
// h1.adicionarReserva();
// console.log(h1.quantReservas);

//3
class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
}

// let r:Radio = new Radio();
// r.volume = 10;

//Esse erro dará por que a classe exige que passe um valor com parâmetro
// o que não é feito nesse caso. Para solucionar, ao instanciar o objeto deverá ser passado um valor como parâmetro
// dessa forma: let r:Radio = new Radio(10);

//4
// class Conta {
//     numero: String;
//     saldo: number;
    
//     constructor(num:String,saldoInicial:number){
//         this.numero = num;
//         this.saldo = saldoInicial;
//     }

//     sacar(valor: number): void {
//     this.saldo = this.saldo - valor;
//     }
//     depositar(valor: number): void {
//     this.saldo = this.saldo + valor;
//     }
//     consultarSaldo(): number {
//     return this.saldo;
//     }
//     transferir(contaDestino: Conta, valor: number): void {
//         this.sacar(valor);
//         contaDestino.depositar(valor);
//     }
// }

// let c1 : Conta = new Conta("1",100);
// let c2 : Conta = new Conta("2",100);
// c1 = c2;
// c1.sacar(10);
// c1.transferir(c2,50);

// console.log(c1.saldo);
// console.log(c2.saldo);

//a. Qual o resultado dos dois "prints"? Justifique sua resposta.
    //R- O resultado dos dois prints é 90, pois ao fazer c1=c2, eles apontam para o mesmo objeto.
//b. O que acontece com o objeto para o qual a referência c1 aponta?
    //R- É excluído.

//5
class Jogador{
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor (private _forca: number, private _nivel: number, private _pontosAtuais: number){
        this.forca = _forca;
        this.nivel = _nivel;
        this.pontosAtuais = _pontosAtuais;
    }

    getAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(jogador: Jogador): void {
        jogador.pontosAtuais -= this.getAtaque();
    }
}

let j1: Jogador = new Jogador(100,10,100);
let j2: Jogador = new Jogador(100,20,200);

// console.log(j1.pontosAtuais);
// console.log(j2.pontosAtuais);
// j1.atacar(j2);
// j2.atacar(j1);
// console.log(j1.pontosAtuais);
// console.log(j2.pontosAtuais);
// if (j1.pontosAtuais > j2.pontosAtuais){
//     console.log('Jogador 1 tem mais pontos')
// } else {
//     console.log('Jogador 2 tem mais pontos')
// }

//6
class Conta {
    numero: String;
    saldo: number;
    
    constructor(num:String,saldoInicial:number){
        this.numero = num;
        this.saldo = saldoInicial;
    }

    verificarSaldo(valor: number): boolean {
        if (this.saldo - valor < 0){
            return false;
        }

        return true;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor > 0){
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
    return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)){
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }

        return false
    }
}

//b) Deixar o saldo protegido, de maneira que fique inacessível se não for através de métodos, é sempre mais seguro


//7
class Produto {
    codigo: number;
    descricao: string;
    valor: number;
    quantidade: number;
    quantidadeMinima: number;

    constructor(private _codigo: number, 
                private _descricao: string, 
                private _valor: number, 
                private _quantidade: number,
                private _quantidadeMinima: number
                ){
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.valor = _valor;
        this.quantidade = _quantidade;
        this.quantidadeMinima = _quantidadeMinima;
    }

    baixar(quantidade:  number): boolean{
        if (this.quantidade - quantidade >= this.quantidadeMinima){
            this.quantidade -= quantidade;
            return true;
        }

        return false;
    }

    repor(quantidade: number): void{
        this.quantidade += quantidade;
    }

    reajusta (taxa: number):void{
        let ajuste = (taxa / 100) * this.valor;
        this.valor += ajuste;
    }

    toString(): string{
        let result: string = `Código: ${this.codigo}\n`;
        result+= `Descrição: ${this.descricao}\n`;
        result+= `Valor: ${this.valor}\n`;
        result+= `Quantidade: ${this.quantidade}\n`;
        result+= `Quantidade Mínima: ${this.quantidadeMinima}\n`;
        return result;
    }
}

let p1: Produto = new Produto(1,'Lápis',10,5,2);
p1.baixar(4);
console.log(p1.toString());
p1.baixar(1);
console.log(p1.toString());

p1.repor(3);
console.log(p1.toString());

p1.reajusta(25);
console.log(p1.toString());


