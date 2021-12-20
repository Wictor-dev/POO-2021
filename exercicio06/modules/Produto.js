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
exports.Estoque = exports.ProdutoPerecivel = exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(_id, _quantidade, _valor) {
        this._id = _id;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (valor) {
            this._quantidade = valor;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.repor = function (quantia) {
        this.quantidade += quantia;
    };
    Produto.prototype.darBaixa = function (quantia) {
        this.quantidade -= quantia;
    };
    return Produto;
}());
exports.Produto = Produto;
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(_id, _quantidade, _valor, _dataValidade) {
        var _this = _super.call(this, _id, _quantidade, _valor) || this;
        _this._dataValidade = _dataValidade;
        _this._dataValidade = _dataValidade;
        return _this;
    }
    ProdutoPerecivel.prototype.ehValido = function (data) {
        if (data < this._dataValidade) {
            return true;
        }
        return false;
    };
    return ProdutoPerecivel;
}(Produto));
exports.ProdutoPerecivel = ProdutoPerecivel;
var Estoque = /** @class */ (function () {
    function Estoque(_produtos) {
        this._produtos = _produtos;
    }
    Object.defineProperty(Estoque.prototype, "produtos", {
        get: function () {
            return this._produtos;
        },
        set: function (valor) {
            this._produtos = valor;
        },
        enumerable: false,
        configurable: true
    });
    Estoque.prototype.inserir = function (produto) {
        if (!this.consultar(produto.id)) {
            this.produtos.push(produto);
        }
    };
    Estoque.prototype.excluir = function (produto) {
        this.produtos.splice(this.produtos.indexOf(produto), 1);
    };
    Estoque.prototype.consultar = function (id) {
        for (var x = 0; x < this.produtos.length; x++) {
            if (this.produtos[x].id === id) {
                return true;
            }
        }
        return false;
    };
    return Estoque;
}());
exports.Estoque = Estoque;
