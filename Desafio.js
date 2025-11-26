// Desafio Classificador de nível de Herói

let nome = "Heroi de Guerra"
let quantitdadeDeXp = 15000

if (quantitdadeDeXp < 1000) {
console.log(nome + " é um Herói nível Ferro")
}

else if (quantitdadeDeXp == 1001 || quantitdadeDeXp == 2000) {
console.log(nome + " é um Herói nível Bronze")
}

else if (quantitdadeDeXp == 2001 || quantitdadeDeXp == 5000) {
console.log(nome + " é um Herói nível Prata")
}

else if (quantitdadeDeXp == 5001 || quantitdadeDeXp == 7000) {
console.log(nome + " é um Herói nível Ouro")
}

else if (quantitdadeDeXp == 7001 || quantitdadeDeXp == 8000) {
console.log(nome + " é um Herói nível Platina")
}

else if (quantitdadeDeXp == 8001 || quantitdadeDeXp == 9000) {
console.log(nome + " é um Herói nível Ascendente")
}
else {
console.log(nome + " é um Herói nível Imortal")
}
