/**function calcularMedia(n1, n2){
    return (n1+n2)/2;
}
const media=calcularMedia(7,8);
console.log(media);
*/

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
        console.log("O número é par");
    } else {
        return false;
    }  
}
 
function calcularDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}
const desconto = calcularDesconto(100, 10);
console.log(`O valor com desconto é: ${desconto}`);
