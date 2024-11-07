/* Fonction de puissance : Écrire une fonction récursive pour calculer le résultat de l'élévation d'un nombre à une puissance donnée.*/

function puissance(n, p) {
    if (p == 1){
        return n;
    }else{
        return n* puissance(n,p-1);
    }
}

console.log(puissance(2,8));