
var count_button = window.document.querySelector('div.input-button > input:nth-of-type(1)')
var reset_button = window.document.querySelector('div.input-button > input:nth-of-type(2)')
var output_box = window.document.querySelector('div#output > p')

count_button.addEventListener('click', toCount)
reset_button.addEventListener('click', toClear)

function toCount() {
    var start = Number(window.document.getElementById('istart').value)
    var end = Number(window.document.getElementById('iend').value)
    var step = Number(window.document.getElementById('istep').value)

    output_box.innerHTML = ''

    if (start > 500 || end > 500 || step < 1) {
        output_box.innerHTML = 'Impossível contar. Limitações: <br> 1. Não são aceitos valores maiores que 500 <br> 2. O mínimo para o "passo" é 1 <br> 3. Não deixe espaços em branco <br> <strong>Reinicie e tente novamente!</strong>'
    } else {
        for (start; start <= end; start += step) {
            output_box.innerHTML += `${start} &#x1F449; `
        }
    
        output_box.innerHTML += '&#x1F3C1; Fim!'
    }
}

function toClear() {
    var start = window.document.getElementById('istart')
    var end = window.document.getElementById('iend')
    var step = window.document.getElementById('istep')

    start.value = ''
    end.value = ''
    step.value = ''
    output_box.innerHTML = 'Preparando a contagem...'
}
