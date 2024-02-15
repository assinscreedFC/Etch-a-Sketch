
let vrai=true;
let colorvrai=vrai;
const couleur=document.querySelector("#random");
const monbtn=document.querySelector("#toggle");
const sup=document.querySelector("#supprimer");
const container=document.querySelector(".container");
let j=10 ;//prompt( "Enter the number of rows: ")*1;
//const divFlex.innerHTML=`<div class="flex1"> </div>`;
const divFlex=document.createElement("div");
divFlex.classList.add("flex1");

let nodeliste=[];
//function pour cree les petit carre dans le grand carre central
(function (){
        for(let i=0;i<j;i++){
           container.innerHTML+=     ` <div class="flex1"></div>`;
        }
const  row=document.querySelectorAll(".flex1");

row.forEach((Element)=>  Element.style.height = (100 / j) + "%" ) ;
for(let k=0;k<row.length;k++) {
row.forEach((Element)=>  Element.innerHTML+=` <div id="${k}" style="width: ${(100 / j) + "%"};"> </div>`  ) ;

}

})();

couleur.addEventListener( 'click', ()=> {
    colorvrai=!colorvrai;
});

monbtn.addEventListener( 'click', ()=> {
    vrai=!vrai;
});
sup.addEventListener( 'click', ()=> {
    container.innerHTML="";
    
    
    for(let i=0;i<j;i++){
        container.innerHTML+=     ` <div class="flex1"></div>`;
     }
const  row=document.querySelectorAll(".flex1");

row.forEach((Element)=>  Element.style.height = (100 / j) + "%" ) ;
for(let k=0;k<row.length;k++) {
row.forEach((Element)=>  Element.innerHTML+=` <div id="${k}" style="width: ${(100 / j) + "%"};"> </div>`  ) ;

}

});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let couleur = '#';
    for (var i = 0; i < 6; i++) {
        couleur += letters[Math.floor(Math.random() * 16)];
    }
    return couleur;
}

let color="#000000";
inputCouleur = document.getElementById('choixCouleur');
inputCouleur.addEventListener('input', function() {
    // Récupérez la valeur de la couleur choisie
     color = inputCouleur.value;
const blt=document.querySelector(".mapute")
    blt.style.boxShadow =`0.5px 1.5px 25px 7.5px ${color}`;
     } );

addEventListener("pointerover", (event) => {
     if(vrai){
        
         var parentElement = event.target.parentNode;
    parentElement=parentElement.parentNode;
    // Vérifiez si l'élément parent a la classe spécifique "container"
 
     
     if(parentElement.classList.contains("container")&& !event.target.style.backgroundColor ){
     
     if(colorvrai){
        event.target.style.backgroundColor =getRandomColor();
     }else{
       event.target.style.backgroundColor =color;}}
    
    }
    inputCouleur = document.getElementById('choixCouleur');
   
});
const elementAAnimer=document.querySelector("h1");

window.addEventListener('blur', function() {
    // Vous avez quitté l'onglet, désactivez l'animation
    elementAAnimer.classList.remove('animate__animated', 'animate__backInDown');
    
});

// Ajoutez un gestionnaire d'événements pour l'événement focus
window.addEventListener('focus', function() {
    // Vous êtes revenu dans l'onglet, activez l'animation
    
    elementAAnimer.classList.add('animate__animated', 'animate__backInDown');
    
});

// onpointerover = (event) => event.style.color="red";
(function(){ 






})();//creation de la methode qui ajoute des elements a l'interieur
















































// const flex = document.querySelectorAll('.flex1');
// console.log(flex);

// let j = prompt("Entrer un nombre") * 1;

// (function () {
        



//     for (let i = 0; i < j; i++) {
        
//         const flexItem = document.createElement('div');
        
       
//         flexItem.id = i;

        
//         flexItem.style.width = (100 / j) + "%";
        
        
//         for (let k = 0; k < flex.length; k++) {
//             flex[k].appendChild(flexItem.cloneNode(true));
//         }
//     }
// })();
// (function(){
// for(let i=0;i<j;i++){
//     let elements = document.getElementById(`${i}`);
// console.log(elements);
        
        

//            elements.style.height = (100 / j) + "%"               ;

       
// }


// })();





