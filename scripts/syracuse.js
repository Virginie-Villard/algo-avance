// Conjecture de Syracuse

// On appelle suite de syracuse une suite d’entiers jusqu’à 1 tels que pour N > 0 :
// U( i)= U(i-1) / 2 si U( i-1) est pair
// U(i) = 3×U(i-1) + 1 si U( i-1) est impair
// U( 0) = N

// 4.1: Première étape :
//     Déclarons une variable globale N=15
// Écrivez une fonction récursive qui retourne la valeur U(i) quelque soit la valeur de i passée en
// paramètre.

// 4.2: Deuxième étape :
//     Supprimez la globale et passez N en paramètre de la fonction U
// Écrivez une fonction récursive qui retourne la valeur U(N, i) quelques soient N et i passés en
// paramètre.
let count =0;
function syracuse(N, i) {
    // debugger;
    count++;

    if(i === 0) {
        return N
    }

    const result = syracuse(N, (i - 1));
    if(result % 2 === 0) {
        return result / 2;
    }

    else {
        return 3 * result + 1;
    }
}

console.log(syracuse(15, 10));
console.log("count = "+count)

