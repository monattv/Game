let coins=0;
let level=1;

let cleaning=0;

let tool="clean";

let dragging=false;



let saved=
localStorage.getItem("beautySave");


if(saved){

let data=JSON.parse(saved);

coins=data.coins;
level=data.level;

}



update();



function save(){

localStorage.setItem(

"beautySave",

JSON.stringify({

coins,
level

})

);

}



function update(){

document.getElementById("coins").innerHTML=coins;

document.getElementById("level").innerHTML=level;

}



function changeTool(t){

tool=t;

if(t=="clean"){

document.getElementById("tool").innerHTML="🫧";

document.getElementById("mission").innerHTML=
"Trascina il detergente sul viso";

}

else{

document.getElementById("tool").innerHTML="🖌️";

document.getElementById("mission").innerHTML=
"Trucca la ragazza";

}


}



document.addEventListener(
"pointerdown",

e=>{

dragging=true;

}

);



document.addEventListener(
"pointerup",

()=>{

dragging=false;

document.getElementById("tool").style.display="none";

}

);




document.addEventListener(
"pointermove",

e=>{


if(!dragging)return;



let t=document.getElementById("tool");


t.style.display="block";

t.style.left=e.pageX+"px";

t.style.top=e.pageY+"px";



if(tool=="clean"){


let face=
document.getElementById("face")
.getBoundingClientRect();



if(

e.clientX>face.left &&
e.clientX<face.right &&
e.clientY>face.top &&
e.clientY<face.bottom

){


cleaning++;

document.getElementById("bar")
.style.width=
cleaning+"%";


document.getElementById("foam")
.style.opacity=
cleaning/150;



removeSpots();



if(cleaning>=100){

finish();

}



}



}



});






function removeSpots(){

document.querySelectorAll(".spot")
.forEach(s=>{


if(Math.random()>0.7){

s.style.display="none";

coins+=2;

update();

save();

}


});

}




function finish(){


document.getElementById("message")
.innerHTML=
"✨ Cliente felice! +50 monete";


coins+=50;


level++;


update();

save();


document.querySelector(".mouth")
.style.borderBottom=
"5px solid pink";


document.getElementById("mission")
.innerHTML=
"🎉 Nuovo livello!";


}





function openWardrobe(){

document
.getElementById("wardrobe")
.classList.toggle("hidden");

}




function dress(color){

document.getElementById("body")
.style.background=
color=="pink"
?
"#ff80bf"
:
"#70cfff";

}





function buyDress(type){

let price=
type=="blue"
?
200
:
500;


if(coins>=price){

coins-=price;

update();

save();


document.getElementById("body")
.style.background=
type=="blue"
?
"#70cfff"
:
"#ffd84d";

}

else{


document.getElementById("message")
.innerHTML=
"Ti servono più monete 🪙";


}


}





function hair(color){


document.getElementById("hair")
.style.background=
color=="pink"
?
"#ff8bc7"
:
"#704020";


}