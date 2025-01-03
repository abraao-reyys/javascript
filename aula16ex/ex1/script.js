var add_button = window.document.querySelector('div.input-box > input[type="submit"]')
var fin_button = window.document.querySelector('div.send-box > input')
var output_box = window.document.querySelector('div#output-box')
var select_list = window.document.getElementById('isetnum')

add_button.addEventListener('click', addNumber)
fin_button.addEventListener('click', analysisFinal)

var numlist = []

function addNumber() {
    output_box.innerHTML = ''
    let num = Number(window.document.getElementById('inum').value)
    let op = document.createElement('option')
    if (numlist.indexOf(num) != -1) {
        window.alert('Valor já encontrado na lista.')
    } else if (num >= 1 && num <= 100) {
        numlist.push(num)
        op.text = `Valor ${num} adicionado.`
        select_list.appendChild(op)
    } else {
        window.alert('Valor inválido.')
    }
}

function analysisFinal() {
    output_box.innerHTML = ''
    let sum_result = 0
    for (let c = 0; c < numlist.length; c++) {
        sum_result += numlist[c]
    }
    let media = sum_result / numlist.length
    let p = document.createElement('p')
    if (numlist.length < 1) {
        window.alert('Adicione algum valor para poder finalizar.')
    } else {
        p.innerHTML = `Ao todo, temos ${numlist.length} números cadastrados. <br> O maior valor informado foi ${Math.max(...numlist)}. <br> O menor valor informado foi ${Math.min(...numlist)}. <br> Somando todos os valores, temos ${sum_result}. <br> A média dos valores digitados é ${media}.`
        output_box.appendChild(p)
    }
}