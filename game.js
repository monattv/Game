let coins=0;
let level=1;

let tool="clean";

let down=false;

let progress=0;

let customers=[

{
name:"Sofia",
hair:"#ff8bc8",
skin:"#ffd0b0"
},

{
name:"Emma",
hair:"#704020",
skin:"#e8aa85"
},

{
name:"Luna",
hair:"#6d8cff",
skin:"#ffd5bf"
}

];


let current=0;



function save(){

localStorage.setItem(

"spa",

JSON.stringify({

coins,
level

})

);

}



function load(){

let s=localStorage.getItem("spa");

if(s){

let d=JSON.parse(s);

coins=d.coins;
level=d.level;

}

update();

}



function update(){

coins=Math.floor(coins);

document.getElementById("coins").innerHTML=coins;

document.getElementById("level").innerHTML=level;

}




function setTool(t){

tool=t;

document.getElementById("tool").innerHTML=
t=="clean"?"🫧":"🖌️";


document.getElementById("mission").innerHTML=
t=="clean"
?
"Trascina il detergente sul viso"
:
"Trascina il pennello per truccare";


}





document.addEventListener(
"pointerdown",
e=>{

down=true;

});



document.addEventListener(
"pointerup",
()=>{

down=false;

document.getElementById("tool").style.display="none";

});





document.addEventListener(
"pointermove",
e=>{


if(!down)return;



let toolBox=document.getElementById("tool");


toolBox.style.display="block";


toolBox.style.left=e.clientX-25+"px";

toolBox.style.top=e.clientY-25+"px";



let face=document
.getElementById("face")
.getBoundingClientRect();



if(

e.clientX>face.left &&
e.clientX<face.right &&
e.clientY>face.top &&
e.clientY<face.bottom

){



if(tool=="clean"){

progress+=1;

document.getElementById("foam").style.opacity=
progress/150;


document.getElementById("progressBar").style.width=
progress+"%";



createFoam(e.clientX,e.clientY);



}


if(tool=="makeup"){


document.getElementById("makeup").style.background=
"radial-gradient(circle,#ff8abf,#ffb5d8)";


document.getElementById("makeup").style.opacity=
0.4;


}



if(progress>=100){

finish();

}


}


});





function createFoam(x,y){

let bubble=document.createElement("span");

bubble.innerHTML="🫧";

bubble.style.position="absolute";

bubble.style.left=x+"px";

bubble.style.top=y+"px";

bubble.style.fontSize="25px";


document.body.appendChild(bubble);


setTimeout(()=>{

bubble.remove();

},700);


}





function finish(){

document.getElementById("message").innerHTML=
"✨ Cliente bellissima! +100🪙";


coins+=100;

level++;

progress=0;


document.getElementById("progressBar").style.width="0%";


save();

update();


}





function nextCustomer(){

current++;

if(current>=customers.length)
current=0;


let c=customers[current];


document.getElementById("customerName").innerHTML=
"Cliente: "+c.name+" 💕";


document.getElementById("hair").style.background=c.hair;


document.getElementById("face").style.background=c.skin;


progress=0;


document.querySelectorAll(".spot")
.forEach(x=>x.style.display="block");


}




function openWardrobe(){

document
.getElementById("wardrobe")
.classList.toggle("hidden");

}



function changeDress(c){

let d=document.getElementById("dress");


if(c=="pink")
d.style.background="#ff80c0";


if(c=="blue")
d.style.background="#70cfff";


if(c=="gold")
d.style.background="#ffd84d";


}



function changeHair(c){

document.getElementById("hair")
.style.background=
c=="pink"
?
"#ff8bc8"
:
"#704020";


}



load();