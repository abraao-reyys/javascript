var start = document.getElementById('isend');
start.addEventListener('click', boasVindas)

function boasVindas() {
    var ires = document.querySelector('div#ires');
    var country = document.getElementById('icou').value;
    var ires = document.getElementById('ires');

    if (country.toLowerCase() == 'brasil') {
        ires.innerText = `Então você é da casa! Seja muito bem-vindo de volta.`
    } else {
        ires.innerText = `${country}! Que bela viagem. Seja muito bem-vindo. Esperamos que goste do Brasil!`
    }
}