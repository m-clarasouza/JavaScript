const nota= 16
if (nota < 0 || nota > 20) {
    console.log("Nota inválida");
} else if (nota >= 18) {
    console.log("Muito Bom");
} else if (nota >= 14) {
    console.log("Bom");
}else if (nota >= 10) {
    console.log("Suficiente");
}else {
    console.log("Não Suficiente");
}