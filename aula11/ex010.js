function calcularMulta() {
    var vel = Number(document.getElementById('ivel').value)
    var result = document.getElementById('ires');

    if (vel <= 60) {
        result.innerText('Você não tem multas.');
    } else {
        result.innerText(`Você foi multado com um valor de R$ ${vel * 0.5} pelos ${vel} km/h.`);
    }
}