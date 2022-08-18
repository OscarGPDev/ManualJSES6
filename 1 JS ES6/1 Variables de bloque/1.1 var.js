/**
 * 1.1 Variables de bloque, "var" vs. "let" y "const"
 */
if (true) {
    // Se declara por primera vez x
    var x = "x";
    // Se imprime el valor de la variable x, este contendrá el carácter 'x'
    console.log(x);
}
// La variable x, sigue existiendo, y conserva su valor.
console.log(x);
// La variable x se redeclare con el valor 'y'
var x = "y";
// La variable x ahora vale 'y'
console.log(x);
x = 'z';
// La variable x ahora vale 'z'
console.log(x);