// PGCD Plus Grand Commun Diviseur

// Le plus grand commun diviseur ou PGCD de deux nombres entiers non nuls est le plus grand entier
// qui les divise simultanément. Par exemple, le PGCD de 20 et de 30 est 10, puisque leurs diviseurs
// communs sont 1, 2, 5 et 10.
// On peut calculer le PGCD de deux entiers de la manière suivante :
//     pgcd(a, 0) = a
//     pgcd(a, b) = pgcd(b, r) avec r = a mod b, si b ≠ 0
// (mod est le reste de la division entière souvent représenter par l’opérateur % ).
// Écrivez une fonction récursive qui retourne la valeur pgcd(a, b)

function pgcd(a, b) {
    // debugger;

    if(b !== 0) {
        const r = a % b;
        // console.log("pgcd(b, r) = " + pgcd(b, r));
        return result = pgcd(b, r);
    }

    if (b === 0) {
        // console.log("a = " + a);
        return result = a;
    }
}

console.log(pgcd(20, 40));