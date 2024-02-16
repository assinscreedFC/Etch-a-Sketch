
let vrai=true;
let colorvrai=vrai;
const couleur=document.querySelector("#random");
const monbtn=document.querySelector("#toggle");
const sup=document.querySelector("#supprimer");
const container=document.querySelector(".container");
const range = document.querySelector("#range");
const label = document.querySelector(".price label");
const divFlex=document.createElement("div");
const blt=document.querySelector(".mapute");
const elementAAnimer=document.querySelector("h1");

divFlex.classList.add("flex1");

let color="#000000";
let j=10 ;
let value = 16;
let nodeliste=[];
inputCouleur = document.getElementById('choixCouleur');
inputCouleur.oninput= (e)=> color=e.target.value
couleur.onclick = ()=> colorvrai=!colorvrai
monbtn.onclick = ()=> vrai=!vrai
sup.onclick=() => reloadGrid()
range.onmousemove = (e) => updateSizeValue(e.target.value)
range.onchange = (e) => changeSize(e.target.value)
let percentage = (100 * value) / 100;
range.style.background = `linear-gradient(90deg, rgba(117,20,241,1) 0%, rgba(175,26,170,1) ${percentage}%, rgba(233,61,90,1) ${percentage}%, rgba(62,48,56,1) ${percentage}%)`;

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }

function setCurrentSize(newSize) {
    j = newSize
  }
function updateSizeValue(value) {
    percentage = (100 * value) / 100;
    range.style.background = `linear-gradient(90deg, rgba(117,20,241,1) 0%, rgba(175,26,170,1) ${percentage}%, rgba(233,61,90,1) ${percentage}%, rgba(62,48,56,1) ${percentage}%)`;
    label.innerText = ` ${value} x ${value}`;
  }
function reloadGrid() {
    clearGrid()
    setupGrid()
  }
function clearGrid() {
    container.innerHTML = ''
  }
function setupGrid(){
    for(let i=0;i<j;i++){
       container.innerHTML+=     ` <div class="flex1"></div>`;
    }
const  row=document.querySelectorAll(".flex1");

row.forEach((Element)=>  Element.style.height = (100 / j) + "%" ) ;
for(let k=0;k<row.length;k++) {
row.forEach((Element)=>  Element.innerHTML+=` <div id="${k}" style="width: ${(100 / j) + "%"};"> </div>`  ) ;

}
};


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let couleur = '#';
    for (var i = 0; i < 6; i++) {
        couleur += letters[Math.floor(Math.random() * 16)];
    }
    return couleur;
}

addEventListener("pointerover", (event) => {
    if(vrai){
        
    let parentElement = event.target.parentNode;
    parentElement=parentElement.parentNode;
     if(parentElement.classList.contains("container")&& !event.target.style.backgroundColor ){
        
        if(colorvrai){
            event.target.style.backgroundColor =getRandomColor();
        }else{
        event.target.style.backgroundColor =color;}}
        }
        inputCouleur = document.getElementById('choixCouleur');
    });

window.addEventListener('blur', function() {
    elementAAnimer.classList.remove('animate__animated', 'animate__backInDown');
});
window.addEventListener('focus', function() {
    elementAAnimer.classList.add('animate__animated', 'animate__backInDown');
});
 window.onload = () => {
   setupGrid()
    
  }
