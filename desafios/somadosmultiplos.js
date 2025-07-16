function somarMultiplos(n) {
    let soma = 0

    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log("somando", i);
            soma += i;
        }
    }

    return soma;
}

console.log (somarMultiplos(10))