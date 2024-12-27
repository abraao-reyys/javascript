var verif_button = window.document.getElementById('isend')
var clear_button = window.document.getElementById('iclear')
var box_verif = window.document.querySelector('div#iver');
var txt_verif = window.document.querySelector('main > p');

verif_button.addEventListener('click', verificar)
clear_button.addEventListener('click', limpar)

function verificar() {
    var year_birth = Number(window.document.getElementById('iyear').value);
    var infodate = new Date();
    var current_year = infodate.getFullYear();
    var age = current_year - year_birth;
    var selected_sex = window.document.getElementsByName('sex');
    var sexinfo = window.document.getElementById('sexinfo');
    var ageinfo = window.document.getElementById('ageinfo');
    var img = window.document.querySelector('div#iver > img');

    if (selected_sex[0].checked) {
        var sex = 'homem'
    } else {
        var sex = 'mulher'
    }

    sexinfo.innerText = sex
    ageinfo.innerText = age

    box_verif.style.display = 'flex'
    txt_verif.style.display = 'none'

    if (age <= 10) {
        if (sex == 'homem') {
            img.src = 'images/baby-m.jpg'
        } else {
            img.src = 'images/baby-f.jpg'
        }
    } else if (age <= 30) {
        if (sex == 'homem') {
            img.src = 'images/teen-m.jpg'
        } else {
            img.src = 'images/teen-f.jpg'
        }
    } else if (age <= 55) {
        if (sex == 'homem') {
            img.src = 'images/adult-m.jpg'
        } else {
            img.src = 'images/adult-f.jpg'
        }
    } else if (age <= 120) {
        if (sex == 'homem') {
            img.src = 'images/old-m.jpg'
        } else {
            img.src = 'images/old-f.jpg'
        }
    } else if (age == 2024 || age < 0) {
        box_verif.style.display = 'none'
        txt_verif.style.display = 'block'
        txt_verif.innerText = 'As informações não foram preenchidas corretamente!'
    } else if (age > 120) {
        box_verif.style.display = 'none'
        txt_verif.style.display = 'block'
        txt_verif.innerText = 'Sinto muito, mas ninguém vive mais de 120 anos!'
    }
}

function limpar() {
    var year_birth = window.document.getElementById('iyear');
    var selected_sex = window.document.getElementsByName('sex');
    box_verif.style.display = 'none'
    txt_verif.style.display = 'block'
    txt_verif.innerText = 'Preencha os dados acima para ver o resultado!'
    year_birth.value = ''
    selected_sex.forEach(radio => {
        radio.checked = false;
    })
}