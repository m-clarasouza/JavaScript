let nome= "Clara";
let teste=19;
let projeto= 18;

 
function calcularMedia(notaTe, notaPro) {
    return (notaTe + notaPro) / 2;
}

let media = calcularMedia(teste, projeto);
console.log(`A média é: ${media}`);

if (media < 0 || media > 20) {
    console.log("Nota inválida");
} else if (media >= 18) {
    console.log("Muito Bom");
} else if (media >= 14) {
    console.log("Bom");
}else if (media >= 10) {
    console.log("Suficiente");+
}else {
    console.log("Não Suficiente");
}

function Mathfloor(numero) {
    return Math.floor(numero);
}

let mediaArredondada = Mathfloor(media);

for(let i = 1; i <= 10; i++) {
    console.log(`${i} x ${mediaArredondada} = ${i * mediaArredondada}`);
}