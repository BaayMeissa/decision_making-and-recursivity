/* Ticket Pricing : Ecrivez un programme qui demande à l'utilisateur d'entrer son âge
et qui détermine ensuite le prix d'un billet de cinéma en fonction des critères suivants:

Enfants (âge <= 12) : 10 $
Adolescents (13-17 ans) : 15 $
Adultes (âge >= 18) : 20 $ */

let age = prompt("Quelle âge as-tu? ");
if(age<=12){
    alert("10$");
}else if(age <=17 && age >=13 ){
    alert("15$");
}else{
    alert("20$");
}