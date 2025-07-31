const btnAbrir = document.querySelector("#Abrir")
const btnCerrar = document.querySelector("#Cerrar")


//Abrir carta
btnAbrir.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".envelopedtop");
    ElementoSuperior.classList.add("abrir-superior");


    const h1 = document.querySelector("h1");
    h1.style.transform = "translateY(-200px)";
    h1.style.transition = "transform 0.65s ease-in-out";

    setTimeout(()=>{
        const ElementoMensaje = document.querySelector(".letter");
        ElementoMensaje.classList.add("abrir-mensaje")
        ElementoSuperior.style.zIndex = -1

    }, 700);
    
   
});






//Cerrar carta
btnCerrar.addEventListener("click",()=>{
    const ElementoSuperior = document.querySelector(".envelopedtop");
    const ElementoMensaje = document.querySelector(".letter");
    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(()=>{

        const h1 = document.querySelector("h1");
        h1.style.transform = "translateY(0px)";
        ElementoSuperior.style.zIndex = 0;
        ElementoSuperior.classList.remove("abrir-superior");
      
    }, 700);

})