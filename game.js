let coins = 0;
let level = 1;
let step = 0;


function reward(text){

coins += 10;

document.getElementById("coins").innerHTML = coins;

document.getElementById("message").innerHTML =
text + " +10 🪙";


if(coins % 50 == 0){

level++;

document.getElementById("level").innerHTML = level;

document.getElementById("message").innerHTML =
"Nuovo livello sbloccato! ⭐";

}

}


function clean(){

step++;

if(step>=1){

document.getElementById("task").innerHTML =
"Elimina le imperfezioni ✨";

reward("Viso pulito 🫧");

}

}



function pimple(){

step++;

if(step>=2){

document.getElementById("task").innerHTML =
"Fai il trucco 💄";

reward("Pelle perfetta ✨");

}

}



function makeup(){

step++;

if(step>=3){

document.getElementById("task").innerHTML =
"Scegli il vestito 👗";

reward("Trucco completato 💄");

}

}



function dress(){

step++;

if(step>=4){

document.getElementById("task").innerHTML =
"Cliente soddisfatta! 💖";

reward("Look fantastico!");

}

}