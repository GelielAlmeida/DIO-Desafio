let vitorias = 90

switch (vitorias) {
    case 10:
        console.log("Heroi nível Ferro")
        break;
    case 11 && 20:
        console.log("Heroi nível Bronze")
        break;
    case 21 && 50:
        console.log("Heroi nível Prata")
        break; 
    case 51 && 70:
        console.log("Heroi nível Ouro")
        break;
    case 71 && 80:
        console.log("Heroi nível Platina")
        break;
    case 81 && 90:
        console.log("Heroi nível Ascendente")
        break;
    default:
        console.log("Heroi nível Imortal")
}

