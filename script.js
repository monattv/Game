// =========================
// CASA VACANZE TERRASINI
// script.js
// =========================

// NAVBAR SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";

    } else {

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


// HERO SLIDESHOW

const hero = document.querySelector(".hero");

const backgrounds = [

    "images/hero.jpg",
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg"

];

let current = 0;

setInterval(() => {

    current++;

    if(current >= backgrounds.length){

        current = 0;

    }

    hero.style.backgroundImage = `url(${backgrounds[current]})`;

},5000);


// ANIMAZIONE SCROLL

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// LIGHTBOX

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});


// BOTTONE TORNA SU

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.classList.add("visible");

    }else{

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ANNO FOOTER

const footer = document.querySelector("footer");

const year = document.createElement("p");

year.innerHTML = "© " + new Date().getFullYear() + " - Tutti i diritti riservati.";

footer.appendChild(year);


// PRECARICAMENTO IMMAGINI

backgrounds.forEach(src=>{

    const img = new Image();

    img.src = src;

});
