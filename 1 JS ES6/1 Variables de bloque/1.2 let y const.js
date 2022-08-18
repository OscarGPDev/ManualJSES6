/**
 * 1.1 Variables de bloque, "var" vs. "let" y "const"
 */
if (true) {
    // Se declara por primera vez x
    const x = "x";
    // Se imprime el valor de la variable x, este contendrá el carácter 'x'
    console.log(x);
}
// La variable x, ya no existe, ya que pertenece al bloque delimitado por las llaves del if, por lo que la siguiente linea provocará un ReferenceError.
console.log(x);

// Debido al error que se menciona, para que las siguientes líneas se ejecuten habría que quitar la línea que lo produce

// La variable x se declara en este bloque con el valor 'y'
const x = "y";
// La variable x ahora vale 'y'
console.log(x);
// Como el tipo de variable de x es constante, la siguiente línea provocara un TypeError, para el comportamiento deseado, el tipo de variable debería ser let
x = 'z';
// La variable x ahora vale 'z'
console.log(x)