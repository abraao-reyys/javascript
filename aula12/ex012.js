var hours = 0

if (hours < 12 && hours >= 4) {
    console.log(`Bom dia! Agora são ${hours} da manhã.`);
} else if (hours < 4) {
    console.log('Boa madrugada!')
} else if (hours <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}