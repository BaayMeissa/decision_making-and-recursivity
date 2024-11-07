/*
Vérificateur de Palindrome : Créez une fonction récursive pour vérifier si une chaîne donnée est 
un palindrome (se lit de la même manière à l'endroit et à l'envers), en ignorant les espaces, la ponctuation et les majuscules.
*/

function isPalindrome(str) {
    let new_str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (new_str.length <=1){
        return true;
    }

    if (new_str[0] !== new_str[new_str.length - 1]) { 
        return false; 
    }
    return isPalindrome(new_str.slice(1, -1));
}

// console.log(isPalindrome("kayak"));