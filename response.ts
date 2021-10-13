// 1
//Objeto é a materialização de uma classe
//Exemplo
class Pessoa {
    constructor(private nome: string, private idade: number){}

}

let p1: Pessoa = new Pessoa('Name', 20)
// O objeto é p1, que está instanciando a classe Pessoa

//2
// Atributos são características e propriedades que os objetos possuem.
//Métodos são comportamentos, ou ações que um objeto pode realizar.

//4
//a) Não seria interessante, pois, infringe o conceito de abstração
// onde os atributos devem ser separados de acordo com seu sentido
//b)
//5
//Matéria, Professor, Aluno, Curso, 

//6
//Jogo de luta
//Objeto: Jogador
//Atributos: Nome, idade
//Método: Jogar
//Objeto: Personagem
//Atributos: Nome, Ataque, Defesa, 
//Métodos: Atacar, Defender
//Objeto: Partida
//Atributos: Jogador1, jogador2, personagem1, personagem2
//Métodos: mostrarVencedor
//

//7
class Retangulo{
    l1: number;
    l2: number;

    calcularArea():number{
        return this.l1 * this.l2;
    }

    calcularPerimetro():number{
        return (this.l1*2) + (this.l2 * 2)
    }
}

let r1: Retangulo = new Retangulo();
r1.l1 = 10;
r1.l2 = 5;
console.log(r1.calcularPerimetro());

//8
class Circulo{
    raio: number;

    calcularArea():number{
        return (this.raio * this.raio) * 3.14
    }

    calcularPerimetro():number{
        return 2*this.raio*3.14
    }
}

let c1: Circulo = new Circulo();
c1.raio=5
console.log(c1.calcularArea())
console.log(c1.calcularPerimetro())

//9
class SituacaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    saldo(): number{
        if (this.valorDebitos > this.valorCreditos){
            return this.valorDebitos - this.valorCreditos;
        }
        return this.valorCreditos - this.valorDebitos;
    }

}

let sf1: SituacaoFinanceira = new SituacaoFinanceira();
sf1.valorCreditos = 1000;
sf1.valorDebitos = 500;
console.log(sf1.saldo())