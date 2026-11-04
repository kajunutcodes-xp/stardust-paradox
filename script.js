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
  text:"yapyapyap",
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
  }, 3100);
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
      }, 4100);
    }
  }, 1100);
});


const telescopeButton = document.getElementById("telescope-button");
const telescopeScreen = document.getElementById("telescope-screen");
const telescopeBack = document.getElementById("telescope-back");
const analyseButton = document.getElementById("analyse-button");


let telescopeTimers=[];
let telescopeClosing = false;


function telescopeWait (delay, action) {
  const timer = setTimeout(action, delay);
  telescopeTimers.push(timer);

}

function cancelTelescopeTimers(){
  telescopeTimers.forEach((timer)=> clearTimeout (timer));
  telescopeTimers=[];
}


telescopeButton.addEventListener("click", ()=> {
  cancelTelescopeTimers();

  telescopeClosing = false;
  telescopeScreen.className ="";
  telescopeScreen.hidden=false;
  telescopeBack.disabled = false;
  analyseButton.disabled = true;

  startTelescopeOpening();

}
)

function startTelescopeOpening() {
  requestAnimationFrame(()=> {
    requestAnimationFrame(()=> {
      if (telescopeClosing) return;

      telescopeScreen.classList.add("visible");

      revealTelescopeSky();
      });
    });
}




function revealTelescopeSky() {
  
  telescopeWait(2100, () => {
    telescopeScreen.classList.add("sky-ready");
  });

  
  telescopeWait(4200, () => {
    telescopeScreen.classList.add("controls-ready");
    analyseButton.disabled = false;
  });
}

analyseButton.addEventListener("click", () => {
  if (analyseButton.disabled) return;

    analyseButton.disabled = true;
  telescopeScreen.classList.add("zooming");

    telescopeWait(4100, () => {
     telescopeScreen.classList.add("spectrum-ready");
  });

  telescopeWait(6400, () => {
    telescopeScreen.classList.add("caption-ready");
  });
});


telescopeBack.addEventListener("click", () =>{
  if (telescopeClosing)return;

  telescopeClosing = true;
  cancelTelescopeTimers();

  telescopeBack.disabled = true;
  analyseButton.disabled = true;
  telescopeScreen.classList.remove("visible");

  telescopeWait(2100, () => {
    telescopeScreen.hidden = true;
    telescopeScreen.className = "";
    telescopeButton.focus();
  });
});

const calenderButton=document.getElementById("calender-button");
const calenderScreen= document.getElementById("calender-screen");
const calenderBack =document.getElementById("calender-back");

let calenderTimer;
let calenderClosing= false;



calenderButton.addEventListener("click", ()=>{
  clearTimeout(calenderTimer);

  calenderClosing=false;
  calenderBack.disabled = false;
  calenderScreen.classList.remove("visible","picture-ready");
  calenderScreen.hidden=false;

  revealCalender();
});



function revealCalender() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
  if (calenderClosing) return;
    calenderScreen.classList.add("visible");

      calenderTimer = setTimeout(() => {
        calenderScreen.classList.add("picture-ready");
      }, 650);
     });
       });
    
      }



      calenderBack.addEventListener("click", ()=>{
        if (calenderClosing) return;
        calenderClosing = true;
        clearTimeout(calenderTimer);
        calenderBack.disabled = true;

        calenderScreen.classList.remove("visible");

        calenderTimer = setTimeout (()=>{
          calenderScreen.hidden = true;
          calenderScreen.classList.remove("picture-ready");
          calenderButton.focus();
        }, 650);
      });

 

  const  logbookButton= document.getElementById("logbook-button")
  const logbookScreen=document.getElementById("logbook-screen")
  const logbookClose = document.getElementById("logbook-close")
  const logbookPicture= document.getElementById("logbook-picture")
  const logbookPrev = document.getElementById("logbook-prev")
  const logbookNext = document.getElementById("logbook-next")
  const logbookPageNumber=document.getElementById("logbook-page-number")


  const logbookPages =[
    "assets/logbook-1.jpg",
    "assets/logbook-2.jpg",
    "assets/logbook-3.jpg",
    "assets/logbook-4.jpg"
  ];

  let currentLogbookPge=0;
  let logbookTimer;
  let logbookClosing=false;

  function updateLogbookPage (){
    logbookPicture.src=logbookPages[currentLogbookPage];

  logbookPicture.alt=
  `Research logbook,page ${currentLogbookPage + 1} of 4.`;

  logbookPageNumber.textContent =
    `${currentLogbookPage + 1}/ ${logbookPages.length}`;

  logbookPrev.disabled = currentLogbookPage === 0;

  logbookNext.disabled =
  currentLogbookPage === logbookPages.length -1;


  }


  logbookButton.addEventListener("click", ()=>{
    clearTimeout(logbookTimer);

    currentlogbookPage=0;
    logbookClosing=false;
    updateLogbookPage();

    logbookClose.disabled= false;
    logbookScreen.classList.remove("visible", "picture-ready");
    logbookScreen.hidden=false;

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        if(logbookClosing) return;
        logbookScreen.classList.add("visible");

        logbookTimer= setTimeout(()=>{
          logbookScreen.classList.add("picture-ready");

        },650);
      });
    });

  });

  logbookNext.addEventListener ("click"()=> {
    if(currentLogbookPage < logbookPages.length -1) {
      currentLogbookPage++;
      updateLogbookPage();

    }
  });


  logbookClose.addEventListener("click",()=>{
  if (logbookClosing) return;

  logbookClosing = true;
  clearTimeout(logbookTimer);
  logbookClose.disabled = true;
  logbookScreen.classList.remove("visible");

  logbookTimer = setTimeout(()=>{
     logbookScreen.hidden = true;
    logbookScreen.classList.remove("picture-ready");
    logbookButton.focus();
  }, 650);
   });