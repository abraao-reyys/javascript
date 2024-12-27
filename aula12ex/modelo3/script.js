var verif_button = window.document.getElementById('isend')

verif_button.addEventListener('click', verificar)

function verificar() {
    var year_birth = Number(window.document.getElementById('iyear').value)
    var infodate = new Date()
    var current_year = infodate.getFullYear()
    var age = current_year - year_birth
    var sex = window.document.getElementById
    var box_verif = window.document.querySelector('div#iver')
    var txt_verif = window.document.querySelector('main > p')
    var sexinfo = window.document.getElementById('sexinfo')
    var ageinfo = window.document.getElementById('ageinfo')
    var img = window.document.querySelector('div#iver > img')

    window.document.querySelector('main > p').innerHTML = `${isexm}`

    /* box_verif.style.display = 'flex'
    txt_verif.style.display = 'none' */
}