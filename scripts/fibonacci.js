// FIBONACCI

// On appelle suite de fibonacci une suite d’entiers tels que
// F(0) = 0
// F(1) = 1
// F(n)= F(n-1) + F(n-2) pour n>1
// Écrivez une fonction récursive qui retourne la valeur Fn d’un nombre n, passé en paramètre.

let count =0;

function fibonacci(number) {
    count++;

    if(number === 0) {
        return 0
    }
    if(number === 1) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log("Fibonacci récursif : ")
console.log(fibonacci(100));
console.log("count = " + count);