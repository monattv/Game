let coins=0;
let level=1;

let tool="clean";


let bought={
pink:true,
princess:false,
diamond:false
};



function save(){

localStorage.setItem(
"spaSave",
JSON.stringify({

coins,
level,
bought

})
);

}



function load(){

let data=
localStorage.getItem("spaSave");


if(data){

let save=JSON.parse(data);

coins=save.coins;
level=save.level;
bought=save.bought;

}


update();

}


function update(){

document.getElementById("coins").innerHTML=coins;

document.getElementById("level").innerHTML=level;

}



function addCoins(){

coins+=10;


if(coins%100==0){

level++;

}


update();
save();

}



function selectTool(t){

tool=t;

document.getElementById("mission").innerHTML=

t=="clean"
?
"🫧 Muovi il detergente sul viso"
:
"💄 Muovi il pennello per truccare";

}



let cleaner=document.getElementById("cleaner");
let brush=document.getElementById("brush");


document.addEventListener(
"pointermove",
(e)=>{


if(e.buttons){

if(tool=="clean"){

cleaner.style.display="block";

cleaner.style.left=e.pageX-20+"px";
cleaner.style.top=e.pageY-20+"px";


checkSpots(e);


}


else{


brush.style.display="block";

brush.style.left=e.pageX-20+"px";
brush.style.top=e.pageY-20+"px";


document.body.style.cursor="none";

}



}

});



function checkSpots(e){


document.querySelectorAll(".spot")
.forEach(s=>{


let r=s.getBoundingClientRect();


if(

e.clientX>r.left &&
e.clientX<r.right &&
e.clientY>r.top &&
e.clientY<r.bottom

){

s.remove();

document.getElementById("message").innerHTML=
"✨ Pelle pulita!";

addCoins();

}


});


}





function openShop(){

document
.getElementById("shop")
.classList.toggle("hidden");

}




function changeHair(color){

let hair=document.getElementById("hair");

hair.className="hair "+color;

save();

}



function changeDress(color){

let dress=document.getElementById("dress");

if(color=="pink"){

dress.className="dress pinkdress";

}


}



function buyDress(type){


let price=
type=="princess"
?
200
:
500;


if(bought[type]){

wear(type);

return;

}



if(coins>=price){

coins-=price;

bought[type]=true;

wear(type);

addCoins();

}

else{

document.getElementById("message").innerHTML=
"Servono più monete 🪙";

}


save();

}



function wear(type){

let dress=document.getElementById("dress");


if(type=="princess"){

dress.className=
"dress bluedress";

}


if(type=="diamond"){

dress.className=
"dress golddress";

}


}




load();