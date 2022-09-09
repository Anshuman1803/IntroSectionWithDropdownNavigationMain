let Menuicon= document.getElementById("HamMenuIcon");
let Closeicon= document.getElementById("CloseMenuIcon");
let NavLinks = document.getElementById("Links");

Menuicon.addEventListener('click', ()=>{
    NavLinks.style.display = "flex";
    Closeicon.style.display= "inline";
    Menuicon.style.display = "none"
})
Closeicon.addEventListener('click', ()=>{
    Menuicon.style.display= "inline";
    Closeicon.style.display = "none"
    NavLinks.style.display = "none";
})

