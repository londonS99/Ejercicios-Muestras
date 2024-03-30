// Este código utiliza un ciclo for para iterar los números del 1 al 100.
// Dentro del bucle, se utilizan operadores de módulo (%) para determinar si el número actual es divisible por 3, 5 o ambos.
// Si es divisible por 3, imprime "Fizz".
// Si es divisible por 5, imprime "Buzz".
// Si es divisible por ambos 3 y 5 (es decir, 15), imprime "FizzBuzz".
// Si no es divisible ni por 3 ni por 5, imprime el número en sí.
for (var i = 1; i < 101; i++) {
    //usamos el operador de módulo devuelve el resto de una división entera
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}