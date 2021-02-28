const form = document.querySelector(".formulaire");       /**faire un apelle à mon class formulaire */
let tableauResults=[];
const reponses=["a","a","b","c"];
const emojis = ["✔️","👀","✨","😭"];
const titreResultat = document.querySelector(".resultas h2");
const texteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelector(".questions");
let verifTableau = [];

form.addEventListener("submit",(e)=>{                /**ligne 4 et 5 pour que si on apuis sur le boutton validez vos choix la page ne se refraiche pas  */
    e.preventDefault();

    //console.log(document.querySelector("input[name="q1"]:checked").value);
    
    for(i=1; i<5 ; i++){
        tableauResults.push(document.querySelector('input[name="q$(i)"]:checked').value)

    }
    //console.log(tableauResults);
    verifFunc(tableauResults);
    tableauResults = [];
})

function verifFunc(tabResultats){
    for(let a=0; a<4; a++){

        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        } else{
            verifTableau.push(false);
        }

    }

    //console.log(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = [];
}
function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
   // console.log(nbDeFautes);
   switch(nbDeFautes){

        case 0:
            titreResultat.innerText = "${emojis[0]} Bravo c'est un sans faute ! ✔️"
   }
}
