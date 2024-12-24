var age = 15

if (age < 16) {
    console.log('Com essa idade, não é possível votar.')
} else if (age < 18 || age > 65) {
    console.log('O voto não é obrigatório.')
} else {
    console.log(`Como você tem ${age} anos, o voto é obrigatório.`)
}