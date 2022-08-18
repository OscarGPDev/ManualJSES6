/**
 * 1.2 Funciones flecha
 */
// Hagamos una función simple que devuelva la suma de dos números
function sumaFuncionNormal(n1, n2) {
    return n1 + n2;
}

console.log(`sumaFuncionNormal(3, 4): ${sumaFuncionNormal(3, 4)}`);
// Este es su equivalente como función flecha
const sumaFuncionFlecha = (n1, n2) => n1 + n2;
console.log(`sumaFuncionFlecha(3, 4): ${sumaFuncionFlecha(3, 4)}`);
// También puede escribirse de la siguiente manera
const sumaFuncionFlecha1 = (n1, n2) => {
    return n1 + n2;
};
console.log(`sumaFuncionFlecha1(3, 4): ${sumaFuncionFlecha1(3, 4)}`);
// Si queremos devolver un objeto en una sola línea con una función flecha debemos envolverlo primero entre paréntesis
const sumaFuncionFlecha2 = (n1, n2) => ({resultado: n1 + n2});
console.log(`sumaFuncionFlecha2(3, 4): ${sumaFuncionFlecha2(3, 4).resultado}`);
// Cuando la función flecha tiene un solo parámetro, no es necesario envolverlo entre paréntesis.
const cuadradoFuncionFlecha = n1 => n1 ** 2;
console.log(`cuadradoFuncionFlecha(3, 2): ${cuadradoFuncionFlecha(3, 2)}`);
