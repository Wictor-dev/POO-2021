"use strict";
exports.__esModule = true;
exports.Hora = void 0;
var Hora = /** @class */ (function () {
    function Hora(_horas, _min, _seg) {
        this._horas = _horas;
        this._min = _min;
        this._seg = _seg;
    }
    Hora.prototype.horas = function () {
        return this._horas;
    };
    Hora.prototype.minutos = function () {
        return this._min;
    };
    Hora.prototype.segundos = function () {
        return this._seg;
    };
    Hora.prototype.toString = function () {
        return this.horas() + ":" + this.minutos() + ":" + this.segundos();
    };
    return Hora;
}());
exports.Hora = Hora;
