/* =====================================
   CASA VACANZE TERRASINI
   SCRIPT PRINCIPALE
===================================== */


/* =========================
   CONFIGURAZIONE DATI
========================= */


document.addEventListener("DOMContentLoaded", () => {


    // Controllo presenza config

    if(typeof CASA !== "undefined"){


        const messaggio =
        "Salve, vorrei avere informazioni sulla Casa Vacanze Terrasini";


        const whatsappLink =
        `https://wa.me/${CASA.whatsapp}?text=${encodeURIComponent(messaggio)}`;



        // WHATSAPP

        const whatsappButtons = [

            "heroWhatsapp",
            "whatsappButton",
            "floatingWhatsapp",
            "bookingWhatsapp"

        ];



        whatsappButtons.forEach(id=>{


            const button=document.getElementById(id);


            if(button){

                button.href=whatsappLink;

                button.target="_blank";

            }


        });





        // TELEFONO


        const phoneButtons=[

            "heroPhone",
            "callButton"

        ];



        phoneButtons.forEach(id=>{


            const button=document.getElementById(id);


            if(button){

                button.href=`tel:${CASA.telefono}`;

            }


        });






        // BOOKING


        const booking=document.getElementById("bookingLink");


        if(booking){

            booking.href=CASA.booking;

        }





        // MAPS


        const maps=document.getElementById("mapsButton");


        if(maps){

            maps.href=CASA.maps;

        }







        // FOOTER


        const footer=document.getElementById("footerName");


        if(footer){

            footer.innerHTML=CASA.nome;

        }







        // MAPPA GOOGLE


        const map=document.getElementById("mapFrame");


        if(map){

            map.src =
            `https://maps.google.com/maps?q=${encodeURIComponent(CASA.indirizzo)}&output=embed`;

        }



    }

});







/* =========================
   NAVBAR SCROLL
========================= */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});








/* =========================
   MENU MOBILE
========================= */


const toggle=document.querySelector(".menu-toggle");

const menu=document.querySelector(".nav-links");



if(toggle){


toggle.addEventListener("click",()=>{


    menu.classList.toggle("active");


});


}






document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


menu.classList.remove("active");


});


});









/* =========================
   HERO SLIDESHOW
========================= */


const hero=document.querySelector(".hero");


const slides=[

"images/hero.jpg",

"images/gallery1.jpg",

"images/gallery2.jpg",

"images/gallery3.jpg",

"images/gallery4.jpg"

];


let slideIndex=0;



if(hero){


setInterval(()=>{


slideIndex++;


if(slideIndex>=slides.length){

slideIndex=0;

}



hero.style.backgroundImage=

`linear-gradient(
rgba(0,0,0,.45),
rgba(0,0,0,.45)
),
url('${slides[slideIndex]}')`;



},5000);



}









/* =========================
   ANIMAZIONI SCROLL
========================= */


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{


threshold:.15


});




document.querySelectorAll("section")
.forEach(section=>{


section.classList.add("hidden");


observer.observe(section);


});









/* =========================
   LIGHTBOX FOTO
========================= */


const galleryImages=
document.querySelectorAll(".gallery-grid img");



const lightbox=
document.createElement("div");


lightbox.className="lightbox";


document.body.appendChild(lightbox);





galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


lightbox.innerHTML="";


const bigImage=document.createElement("img");


bigImage.src=image.src;


lightbox.appendChild(bigImage);


lightbox.classList.add("active");


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









/* =========================
   BUTTON TORNA SU
========================= */


const topButton=document.createElement("button");


topButton.innerHTML="↑";


topButton.className="top-button";


document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


if(window.scrollY>500){


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









/* =========================
   ANNO AUTOMATICO
========================= */


const footerYear=document.querySelector("footer p:last-child");


if(footerYear){


footerYear.innerHTML=
"© "+new Date().getFullYear()+" - Tutti i diritti riservati";


}






/* =========================
   PRELOAD FOTO
========================= */


slides.forEach(src=>{


const img=new Image();


img.src=src;


});
