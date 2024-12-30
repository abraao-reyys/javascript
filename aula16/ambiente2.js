function fatorial(n) {
    let res = 1
    for (let c = n; c > 1; c--) {
        // console.log(`${c} * `)
        process.stdout.write(`${c} * `) // Para deixar na mesma linha do terminal
        res *= c
    }
    process.stdout.write("1 = ") // Para adicionar no final da linha
    return res
}

console.log(fatorial(5))