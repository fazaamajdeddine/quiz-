const form = document.querySelector(".formulaire");       /**faire un apelle à mon class formulaire */
let tableauResults=[];
const reponses=["a","a","b","c"];
const emojis = ["✔️","👀","✨","😭","😭"];
const titreResultat = document.querySelector(".resultas h2");
const noteResultat = document.querySelector(".note");
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
    couleursFonction(verifTableau);
    verifTableau = [];
}
function afficherResultats(tabCheck){
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
   // console.log(nbDeFautes);
   switch(nbDeFautes){

        case 0:
            titreResultat.innerText = "✔️ Bravo c'est un sans faute ! ✔️" ;
            aideResultat.innerText = "";
            noteResultat.innerText = "4/4";
        break;  
        
        case 1:
            titreResultat.innerText = "👀 vous y êtes presque  ! 👀" ;
            aideResultat.innerText = "retentez ube autre reponse dans la case rouge, puis revalidez !";
            noteResultat.innerText = "3/4";
        break;
        
        case 2:
            titreResultat.innerText = " ✨encore un effort ...!✨" ;
            aideResultat.innerText = "retentez ube autre reponse dans la case rouge, puis revalidez !";
            noteResultat.innerText = "2/4";
        break;
        
        case 3:
            titreResultat.innerText = "😭 reste quelques erreurs ...  ! 😭" ;
            aideResultat.innerText = "retentez ube autre reponse dans la case rouge, puis revalidez !";
            noteResultat.innerText = "1/4";
        break;  
        case 4:
            titreResultat.innerText = "😭 peux mieux faire...  ! 😭" ;
            aideResultat.innerText = "retentez ube autre reponse dans la case rouge, puis revalidez !";
            noteResultat.innerText = "0/4";
        break;

        default:
            "wops, cas innatendu.";
   }
}

function couleursFonction(tabValBool){

    for(let j=0; j<tabValBool.length; j++){

        if(tabValBool[j]=== true){
            toutesLesQuestions[j].style.background ="green";

        }else{
            toutesLesQuestions[j].style.background ="red";
            toutesLesQuestions[j].classList.add("echec");

            setTimeout(() =>{
            toutesLesQuestions[j].classList.remove("echec");
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener("click",()=>{
        item.style.background = "white";
    })  
})