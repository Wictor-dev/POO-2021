"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = exports.Banco = void 0;
var Conta_1 = require("./Conta");
Object.defineProperty(exports, "Conta", { enumerable: true, get: function () { return Conta_1.Conta; } });
var Banco = /** @class */ (function () {
    function Banco(_contas) {
        this._contas = _contas;
    }
    Object.defineProperty(Banco.prototype, "contas", {
        get: function () {
            return this._contas;
        },
        set: function (contas) {
            this._contas = contas;
        },
        enumerable: false,
        configurable: true
    });
    Banco.prototype.inserir = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    };
    return Banco;
}());
exports.Banco = Banco;
