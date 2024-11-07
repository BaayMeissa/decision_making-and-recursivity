/* 
Conseil en vêtements de pluie : Développez un programme qui demande à l'utilisateur 
la température actuelle et s'il pleut ou non. Sur la base de ces informations, 
conseillez l'utilisateur sur les vêtements à porter.
*/

let temperature = parseFloat(prompt("Quelle est la température actuelle ? "));
let isRaining = confirm("Est-ce qu'il pleut actuellement ? Cliquez sur OK pour Oui, Annuler pour Non.");

let advice;

if (isRaining) {
    if (temperature < 15) {
        advice = "Il fait froid et il pleut. Portez un manteau imperméable et des bottes.";
    } else if (temperature < 25) {
        advice = "Il pleut. Portez un imperméable léger et prenez un parapluie.";
    } else {
        advice = "Il fait chaud et il pleut. Portez des vêtements légers et prenez un parapluie.";
    }
} else {
    if (temperature < 15) {
        advice = "Il fait froid. Portez un manteau chaud.";
    } else if (temperature < 25) {
        advice = "Le temps est doux. Portez une veste légère.";
    } else {
        advice = "Il fait chaud. Portez des vêtements légers.";
    }
}

// Afficher les conseils
alert(advice);
