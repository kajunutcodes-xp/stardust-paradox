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


const introSteps = [
  {
    text:"[my chosen carl sagan quote]",
    credit:"-Carl Sagan",    
    button:"go on." 
    
  },

{
  text:"yapyapyap"
  credit:"",
  button:"enter the observatory"
}
];

const beginButton = document.getElementById("begin-button")
const storyScreen = document.getElementById("story-screen")
const storyContent = document.getElementById("story-content")
const storyText = document .getElementById("story-text")
const storyCredit = document .getElementById("story-credit")
const storyNext = document .getElementById("story-next")
const room = document .getElementById("room")

let introStep = 0;
let isTransitioning = false;
 
function updateIntroText() {
         const step = introSteps[introStep];

     storyText.textContent = step.text;
  storyCredit.textContent = step.credit;
     storyNext.textContent = step.button;
}

function unlockIntro() {
  isTransitioning = false;
  storyNext.disabled = false;
  }
  
  
  beginButton.addEventListener("click", () => {
  introStep = 0;
  isTransitioning = true;
  storyNext.disabled = true;

  updateIntroText();
  storyScreen.hidden = false;

 requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      storyScreen.classList.add("visible");
    });
  });


  setTimeout(() => {
    document.getElementById("landing").hidden = true;
    storyContent.classList.add("visible");

    setTimeout(unlockIntro, 1000);
  }, 1600);
});

storyNext.addEventListener("click", () => {
  if (isTransitioning) return;

  isTransitioning = true;
  storyNext.disabled = true;
  storyContent.classList.remove("visible");

  setTimeout(() => {
    if (introStep < introSteps.length - 1) {
      // Move to the next passage.
      introStep = introStep + 1;
      updateIntroText();
      storyContent.classList.add("visible");

      setTimeout(unlockIntro, 1000);
    } else {

    
    

      room.hidden = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          room.classList.add("visible");
        });
      });

      setTimeout(() => {
        storyScreen.hidden = true;
      }, 2100);
    }
  }, 1100);
});
