const form = document.querySelector(".formulaire");       /**faire un apelle à mon class formulaire */
let tableauResults=[];

form.addEventListener("submit",(e)=>{                /**ligne4 et 5 pour que si on apuis sur le boutton validez vos choix la page ne se refraiche pas  */
    e.preventDefault();

    console.log(document.querrySelector("input[name="q1":checked]").value);
})
