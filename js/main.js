
//Marie Forja

"use strict";

/*********************
 * VARIABLES
 *********************/

//création de la liste de plat
let mealList = [
    "Oeuf de cent ans",
    "Tarantule frite",
    "Poisson globe",
    "Foetus de canard",
    "Poulpe vivant",
    "Fromage aux larves de mouches",
    "Peau de baleine",
    "Larves de fourmis",
    "Lézard séché",
    "Jus d'oeil de mouton"
    ];


/*********************
 * FONCTIONS
 *********************/

// affiche le menu complet
function refreshMealList() {

    //on vient d'abord vider notre div#mealList en lui ajoutant le h3
    $("#meals").html(`<h3>Il y a ${mealList.length} plats au menu :</h3>`);

    //puis on vient construire notre ul
    $("#meals").append("<ul>");

    //boucle sur le tableau mealList pour venir afficher chaque élément
    for(let ligne of mealList) {
        $("#meals ul").append(`<li>${ligne}</li>`);
    }
    $("#meals").append("</ul>");
}


//ajouter un plat au click du bouton ajouter
function addMeal() {

    //d'abord on récupère la valeur rentrée et on supprime les espaces avant et après grâce au trim
    let meal = $("input[type=text]").val().trim();
    
    //condition vérifiant si une valeur est bien rentrée
    //si valeur nulle alert et peut retenter saisie
    if (meal.length == 0) {
        alert("Vous n'avez rien saisi ! Et tant mieux pour vous !");
    } else {

        //vérifie si le plat est un doublon grâce à la fonction checkSameMeal
        if (checkSameMeal(meal)) {
            alert("Quoi ? Un au menu ce n'est déjà pas assez pour vous ?!");
        } else {
            //si plat bien rentré, ajoute le plat saisi dans le tableau mealList
            alert(`${meal} a bien été ajouté au menu, essayez de ne pas salir la moquette 🤮 !`);
            mealList.push(meal);
            refreshMealList();         //refresh l'affichage pour que le plat ajouté et le nouveau nombre de plats apparaissent
        }
    }
    $("form")[0].reset();       //permet de reset le formulaire et afficher à nouveau le placeholder
}


//vérifie si le plat saisi est un doublon
//faire appel à cette fonction permet de ne pas avoir à changer nos variables meal et mealList des autres fonctions
function checkSameMeal(mealToChecked) {

    //met la variable mealToChecked en minuscule
    let meal = mealToChecked.toLowerCase();

    //met les plats du menu en minuscule et compare meal avec chaque plat du menu 
    //return true si un plat est un doublon
    for(let item of mealList) {
        let itemToChecked = item.toLowerCase();
        if (meal==itemToChecked) return true;
    }
}

/*********************
 * CODE PRINCIPAL
 *********************/

//s'éxécute une fois la page chargée entièrement
$(document).ready(function () {

    //affiche le menu
    refreshMealList();

    //gestionnaire d'événement sur le bouton ajouter avec la fonction ajouter un plat
    $("input[type=button]").on("click", addMeal);
   
});