// Fatorial usando função recursiva, ou seja, ela chama a si própria

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

/*

5! = 5 * 4 * 3 * 2 * 1 = 120
5! = 5 * 4! (é a partir dessa lógica que será criada essa função)

*/