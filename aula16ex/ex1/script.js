var add_button = window.document.querySelector('div.input-box > input[type="submit"]')
var fin_button = window.document.querySelector('div.send-box > input')
var output_box = window.document.querySelector('div#output-box')

add_button.addEventListener('click', addNumber)

function addNumber() {
    output_box.innerHTML = ''
    let num = Number(window.document.getElementById('inum').value)
    let select_list = window.document.getElementById('isetnum')
    let op = document.createElement('option')
    if (num >= 1 && num <= 100) {
        op.text = `Valor ${num} adicionado.`
        select_list.appendChild(op)
    } else {
        output_box.innerHTML = 'Adicione um número entre 1 e 100'
    }
    
}