function verificarPARouIMPAR(numero) {
    
    if (numero % 2 === 0) {
        return "PAR";
    }   else {
        return "IMPAR";
    }
}

console.log(verificarPARouIMPAR(5))
console.log(verificarPARouIMPAR(10))
