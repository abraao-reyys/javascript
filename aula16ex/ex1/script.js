var add_button = window.document.querySelector('div.input-box > input[type="submit"]')
var fin_button = window.document.querySelector('div.send-box > input')
var output_box = window.document.querySelector('div#output-box')

add_button.addEventListener('click', addNumber)

function addNumber() {
    let num = Number(window.document.getElementById('inum').value)
    let select_list = window.document.getElementById('isetnum')
    let op = document.createElement('option')
    op.text = `Valor ${num} adicionado.`
    select_list.appendChild(op)
}