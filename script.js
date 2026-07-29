let money = 50000;


function grow(){

money += 5000;

console.log(
"Nuovo capitale:",
money
);

}


document.querySelectorAll("button")
.forEach(btn=>{

btn.onclick=function(){

grow();

this.innerHTML="Azione completata 🚀";

}

});