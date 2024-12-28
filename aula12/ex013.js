var datainfo = new Date()
console.log(`A informação de data é: ${datainfo}`)
var day = datainfo.getDay()
console.log(`O número do dia é: ${day}`)

switch(day) {
    case 0:
        var day = 'Domingo'
        break
    case 1:
        var day = 'Segunda'
        break
    case 2:
        var day = 'Terça'
        break
    case 3:
        var day = 'Quarta'
        break
    case 4:
        var day = 'Quinta'
        break
    case 5:
        var day = 'Sexta'
        break
    case 6:
        var day = 'Sábado'
        break
    default:
        var day = 'INV'
}

console.log(`O nome do dia é: ${day}`)

if (day == 'INV') {
    console.log('Dia inválido.')
} else {
    console.log(`Hoje é ${day}. O dia está lindo!`)
}