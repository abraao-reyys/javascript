var generate_button = window.document.querySelector('div#output > input:nth-of-type(1)')
var output_box = window.document.querySelector('div#output > p')

generate_button.addEventListener('click', toGenerate)

function toGenerate() {
    var num = Number(window.document.getElementById('inum').value)

    output_box.innerHTML = ''

    if (num == "") {
        output_box.innerHTML = 'Não foi adicionado um número. Tente novamente.'
    } else {
        for (num; num <= 10; num++) {
            // Parei aqui.
        }
    }
}