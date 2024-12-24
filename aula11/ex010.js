/* function calcular() {
    var vel = Number(document.getElementById('ivel').value);
    var ires = document.getElementById('ires');
    var result = vel * 0.5;

    ires.innerHTML = `O valor da multa é de R$ ${result}!`
} */

function calcular() {
    var vel = Number(document.getElementById('ivel').value);
    var ires = document.getElementById('ires');

    ires.style.padding = '5px'
    ires.style.border = '1px solid black'
    
    if (vel <= 60) {
        ires.innerText = 'Essa velocidade não gerou multas.'
        ires.style.color = 'green'
    } else {
        var result = (vel - 60) * 6.2
        ires.innerText = `Essa velocidade gerou uma multa de R$ ${result.toFixed(2)}.`
        ires.style.color = 'red'
    }
}

function limpar() {
    var vel = document.getElementById('ivel');
    var ires = document.querySelector('div#ires');
    vel.value = ''
    ires.innerHTML = ''
    ires.style.padding = '0'
    ires.style.border = '0'
}