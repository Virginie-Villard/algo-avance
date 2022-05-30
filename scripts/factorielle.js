//  FACTORIELLE :

// Soit “n” un nombre entier positif (ou entier naturel). Sa factorielle est définie par :
//     n! = 1 x 2 x 3 x ... x (n -1) x n
// Ce qui donne pour les premières factorielles :
//     1! = 1
//     2! = 1 x 2
//     3! = 1 × 2 × 3 = 6
//     4! = 1 × 2 × 3 × 4 = 24
// ...
// On peut voir que 4! = 3! x 4 et plus généralement n! = (n-1)! x n
// Pour calculer n! on a donc besoin de la valeur de (n-1)! qui a elle-même besoin de la valeur de (n-2)! ...
// Écrivez une fonction récursive qui retourne la factorielle d’un nombre n, passé en paramètre.
//
//     Aide:
// - commencer par faire une fonction qui retourne 1 quand n vaut 1
// - quand n est plus grand que 1, retourner la multiplication de n, par le résultat de factorielle n-1

function factorielle(number) {
    if(number === 1) {
        return 1;
    }
    return number * factorielle(number - 1)
}

console.log(factorielle(5))
console.log(24*5)
