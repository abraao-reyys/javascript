let a = [5, 4, 9]
console.log(`- A array é [${a}]`)

a[3] = 4 // Adicionei um valor na posição 3
console.log(`- - Agora é [${a}]`)

a.push(2) // Adicionei um valor na última posição
console.log(`- - - Agora é [${a}]`)

console.log(`- - - - O comprimento é de [${a.length}] elementos`)

console.log(`- - - - - Os elementos na ordem crescente são [${a.sort()}]`)