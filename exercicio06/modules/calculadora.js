"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCientifica = exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(_op1, _op2) {
        this._op1 = _op1;
        this._op2 = _op2;
    }
    Object.defineProperty(Calculadora.prototype, "op1", {
        get: function () {
            return this._op1;
        },
        set: function (valor) {
            this._op1 = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "op2", {
        get: function () {
            return this._op2;
        },
        set: function (valor) {
            this._op2 = valor;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.adicionar = function () {
        return this.op1 + this.op2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this.op1, this.op2);
    };
    return CalculadoraCientifica;
}(Calculadora));
exports.CalculadoraCientifica = CalculadoraCientifica;
