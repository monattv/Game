let coins=0;
let level=1;

let cleaned=0;

let clothes=[
{
name:"Rosa",
price:0,
buy:true
},

{
name:"Principessa",
price:200,
buy:false
},

{
name:"Diamante",
price:500,
buy:false
}

];



// CARICA SALVATAGGIO

function load(){

let save=
localStorage.getItem("beautySave");


if(save){

let data=JSON.parse(save);

coins=data.coins;
level=data.level;
clothes=data.clothes;

}

update();

}



function save(){

localStorage.setItem(
"beautySave",

JSON.stringify({

coins,
level,
clothes

})

);

}



function update(){

document.getElementById("coins").innerHTML=coins;

document.getElementById("level").innerHTML=level;

}



function reward(text){

coins+=10;

if(coins%100==0){

level++;

}


document.getElementById("message").innerHTML=text;

update();
save();

}



// PULIZIA CON MOVIMENTO

let face=document.getElementById("face");


face.addEventListener(
"pointermove",
function(e){


if(e.buttons){

cleanSpot(e);

}

});



function cleanSpot(e){

let spots=document.querySelectorAll(".spot");


spots.forEach(s=>{


let r=s.getBoundingClientRect();


if(

e.clientX>r.left &&
e.clientX<r.right &&
e.clientY>r.top &&
e.clientY<r.bottom

){

s.style.display="none";

cleaned++;

reward("✨ Imperfezione rimossa!");

}



});


if(cleaned>=3){

document.getElementById("mission").innerHTML=
"Perfetto! Ora scegli il look 👗";

}

}




// ARMADIO


function openCloset(){

document.getElementById("closet")
.classList.toggle("hidden");

}



function buyDress(id){


let d=clothes[id];


if(d.buy){

document.getElementById("message")
.innerHTML=
"Hai scelto "+d.name+" 👗";

}

else if(coins>=d.price){

coins-=d.price;

d.buy=true;

reward(
"Hai comprato "+d.name+" 🎉"
);

}

else{

document.getElementById("message")
.innerHTML=
"Servono più monete 🪙";

}


save();

}



load();