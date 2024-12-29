var generate_button = window.document.querySelector('div#output > input:nth-of-type(1)')
var reset_button = window.document.querySelector('div#output > input:nth-of-type(2)')
var output_box = window.document.querySelector('div#output > p')

generate_button.addEventListener('click', toGenerate)
reset_button.addEventListener('click', toClear)

function toGenerate() {
    var num = Number(window.document.getElementById('inum').value)

    output_box.innerHTML = ''

    if (num == "") {
        output_box.innerHTML = 'Não foi adicionado um número. Tente novamente.'
    } else {
        for (c = 1; c <= 10; c++) {
            output_box.innerHTML += `${num} * ${c} = ${num * c} <br>`
        }
    }
}

function toClear() {
    var num = window.document.getElementById('inum')

    num.value = ''
    output_box.innerHTML = 'Digite um número para conferir sua tabuada...'
}