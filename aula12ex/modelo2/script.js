var infodate = new Date()
var hour = infodate.getHours()
var textbox = window.document.getElementById('hour')
var imgbox = window.document.getElementById('img')
var body = window.document.getElementsByTagName('body')[0]

if (hour <= 4 && hour >= 0) {
    textbox.innerHTML = `Agora é <strong>${hour} hora (s)</strong> da madrugada.`
    imgbox.style.backgroundImage = 'url(images/dawn-mod.jpg)'
    body.style.backgroundColor = '#080705'
} else if (hour < 12) {
    textbox.innerHTML = `Agora é <strong>${hour} hora (s)</strong> da manhã.`
    imgbox.style.backgroundImage = 'url(images/day-mod.jpg)'
    body.style.backgroundColor = '#EEA47A'
} else if (hour < 18) {
    textbox.innerHTML = `Agora é <strong>${hour} hora (s)</strong> da tarde.`
    imgbox.style.backgroundImage = 'url(images/afternoon-mod.jpg)'
    body.style.backgroundColor = '#C6B29E'
} else {
    textbox.innerHTML = `Agora é <strong>${hour} hora (s)</strong> da noite.`
    imgbox.style.backgroundImage = 'url(images/night-mod.jpg)'
    body.style.backgroundColor = '#273C4F'
}