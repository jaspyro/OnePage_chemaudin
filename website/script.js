// 
//  recovery HTML element with querySelector
// 

// ensemble -> group of text element  //
const origin = document.querySelector('#ensemble_origin');
const traverser = document.querySelector('#ensemble_traverser');
const aujourd_huis = document.querySelector('#ensemble_aujourd_huis');
const Arnoux = document.querySelector('#ensemble_Arnoux');
const chemaudin = document.querySelector('#ensemble_chemaudin');
// btn for voir_plus / voir_moins //
const voir_plus = document.querySelector('.voir_plus');
const voir_moins = document.querySelector('.voir_moins'); 
// Lexique btn
const bouton_lexique = document.querySelectorAll('.button_lexique');
// Lexique 
const titre_histoire = document.querySelectorAll('.titre_histoire');
const paragraphe_histoire = document.querySelectorAll('.paragraphe_histoire');
const titre_chapitre = document.querySelector('#titre_chapitre');
const btn_lexique_retour = document.querySelectorAll('.retour_lexique');

console.log(titre_chapitre);

//
// recovery of class
//

const current_chapter = "current_chapter";
const other_chapter = "other_chapter";
const plus = "voir_plus";
const moins = "voir_moins";
const none = "none";
const block = "block";
const pointer = "pointer";
const annimation_text = "annimation_text";
const text_reverse = "annimation_text_reverse";
const btn_lexique = "button_lexique";
const annimation_lexique = "annimation_lexique";
const annimation_lexique_reverse = "annimation_lexique_reverse";
const grid_titre_chapitre = "grid_titre_chapitre";
const para_histoire = "paragraphe_histoire";

//
// transform HTML node element into Array element
//

let card = Array.from(document.querySelectorAll('.div_histoire'));
let voir_plus_switch = Array.from(document.querySelectorAll('.voir_plus'));
let voir_moins_switch = Array.from(document.querySelectorAll('.voir_moins'));
let switch_t = Array.from(document.querySelectorAll('.switch'));
let texte = Array.from(document.querySelectorAll('.ensemble_histoire'));
let lexique = Array.from(document.querySelectorAll('.lexique'));
let Array_btn_lexique = Array.from(bouton_lexique);
let Array_titre_histoire = Array.from(document.querySelectorAll('.titre_histoire'));
let Array_paragraphe_histoire = Array.from(document.querySelectorAll('.paragraphe_histoire'));
let Array_retour_lexique = Array.from(document.querySelectorAll('.retour_lexique'));

window.addEventListener("load", (event) => {
    for (let a=0; a<texte.length;a++) {
        texte[a].classList.add(annimation_text);
        texte[0].classList.add(text_reverse);
    }

    
});



for (let i=0; i< card.length; i++) {
    card[i].addEventListener('click', function(event) {

        let index = card.indexOf(event.currentTarget);

        for (let y=0; y< card.length; y++) {
            card[y].classList.remove(current_chapter);
            card[y].classList.add(other_chapter);
            card[y].classList.add(pointer);
        }
        for (let x=0; x<voir_moins_switch.length;x++) {
             voir_moins_switch[x].classList.add(none);
        }
        for (let z=0; z<voir_plus_switch.length;z++) {
             voir_plus_switch[z].classList.remove(none);
        }
                
        card[index].classList.remove(other_chapter);
        card[index].classList.add(current_chapter);
        card[index].classList.remove(pointer);
        voir_plus_switch[index].classList.add(none);
        voir_moins_switch[index].classList.remove(none);

        for (let b=0; b<texte.length ;b++) {
            let bool = new Boolean(texte[b].classList.contains(text_reverse));

            if ( bool == true ) {
            texte[b].classList.remove(text_reverse);
            }
        texte[index].classList.add(text_reverse);
        }
    });
}

for (let c=0; c<Array_btn_lexique.length ;c++) {
    Array_btn_lexique[c].addEventListener('click', (event) =>{
        let lexique_index = Array_btn_lexique.indexOf(event.currentTarget);

        for (let d=0; d<texte.length ;d++) {
            titre_histoire[lexique_index].classList.add(annimation_lexique);
            paragraphe_histoire[lexique_index].classList.add(annimation_lexique);
        }

        titre_chapitre.classList.add(annimation_lexique);

        titre_chapitre.classList.remove(grid_titre_chapitre);

        Array_btn_lexique[lexique_index].classList.add(annimation_lexique);
        lexique[lexique_index].classList.remove(none);
        lexique[lexique_index].classList.add(annimation_lexique_reverse);
        setTimeout(time, 600);

        function time() {
            titre_chapitre.classList.add(none);
        }
    }); 
}

for (let f=0; f<Array_retour_lexique.length ;f++) {
    btn_lexique_retour[f].addEventListener('click', (event) =>{
        let retour_lexique_index = Array_retour_lexique.indexOf(event.currentTarget);

        for (let e=0; e<texte.length ;e++) {
            titre_histoire[retour_lexique_index].classList.remove(annimation_lexique);
            paragraphe_histoire[retour_lexique_index].classList.remove(annimation_lexique);
        }
        
        titre_chapitre.classList.remove(annimation_lexique);

        titre_chapitre.classList.add(grid_titre_chapitre);

        Array_btn_lexique[retour_lexique_index].classList.remove(annimation_lexique);
        lexique[retour_lexique_index].classList.add(none);
        lexique[retour_lexique_index].classList.remove(annimation_lexique_reverse);
        setTimeout(time, 600);

        function time() {
            titre_chapitre.classList.remove(none);
        }
    });
}