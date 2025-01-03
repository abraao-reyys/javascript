let secretaria = {nome: 'Márcia', idade: 24, salario: 1400, promover(v = 0){
    console.log('Promovida. Salário aumentado.')
    this.salario += v // O 'this' serve para referenciar o objeto que estou usando. Sem ele, eu deveria colocar 'secretaria.salario'.
}}

secretaria.promover(400)
console.log(`${secretaria.nome} foi promovida e agora recebe ${secretaria.salario}.`)