/* function calcular() {
    var vel = Number(document.getElementById('ivel').value);
    var ires = document.getElementById('ires');
    var result = vel * 0.5;

    ires.innerHTML = `O valor da multa é de R$ ${result}!`
} */

function calcular() {
    var vel = Number(document.getElementById('ivel').value);
    var ires = document.getElementById('ires');
    
    if (vel <= 60) {
        ires.innerText = 'Essa velocidade não gerou multas.'
    } else {
        var result = (vel - 60) * 6.2
        ires.innerText = `Essa velocidade gerou uma multa de R$ ${result.toFixed(2)}.`
    }
}

function limpar() {
    var vel = document.getElementById('ivel');
    var ires = document.querySelector('div#ires');
    vel.value = ''
    ires.innerHTML = ''
}