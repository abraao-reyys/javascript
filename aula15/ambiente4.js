let a = [5, 9, 1, 4, 2, 6, 4, 1, 3]

// Objetivo: simplificação do código da última aula:

/* for (c = 0; c < a.length; c++) {
    console.log(`A posição ${c} guarda o valor ${a[c]}`)
} */

for (let c in a) {
    console.log(`A posição ${c} guarda o valor ${a[c]}`)
}