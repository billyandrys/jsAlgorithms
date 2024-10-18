"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
// valide is number prime
var isPrime = function (numberValide) {
    if (numberValide <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(numberValide); i++) {
        if (numberValide % i === 0) {
            return false;
        }
    }
    return true;
};
exports.isPrime = isPrime;
console.log(isPrime(5));
console.log(isPrime(12));
