function encontrarPrimos (n) {
    let primos = []

    for (let i = 2; i <= n; i++) {
        let isPrimo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
        primos.push(i);
        }        
    }
    return primos;
}

console.log(encontrarPrimos(10));