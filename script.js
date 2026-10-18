const backgrounds = document.querySelectorAll(".background");
let currentBackground = 0;

backgrounds.forEach((image,index)=>{
    image.classList.toggle("active", index ===0);
});

setInterval(()=>{
     backgrounds[currentBackground].classList.remove("active");
     currentBackground =  (currentBackground + 1) % backgrounds.length;
     backgrounds[currentBackground].classList.add("active");

},3500);

const landing= document.getElementById("landing");

setTimeout(() => {
  landing.classList.add("menu-ready");
}, 10000);

const aboutButton = document.getElementById("about-button");
const aboutDialog = document.getElementById("about-dialog");

aboutButton.addEventListener("click",()=> {
  aboutDialog.showModal();
});