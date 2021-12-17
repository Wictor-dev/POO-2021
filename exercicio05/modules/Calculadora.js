"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(_op1, _op2) {
        this._op1 = _op1;
        this._op2 = _op2;
    }
    Calculadora.prototype.soma = function () {
        return this._op1 + this._op2;
    };
    Calculadora.prototype.subtrair = function () {
        return this._op1 - this._op2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
