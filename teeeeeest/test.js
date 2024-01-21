const fl = document.getElementById('fl');
const dark = document.getElementById('dark');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const podname = document.getElementById('podname');
const bbpox = document.getElementById('bbpox');
const bbbox = document.getElementById('bbbox');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const rankreveal = document.getElementById('rankreveal');
const bt1 = document.getElementById('bt1');
const points1 = document.getElementById('points1');
const points2 = document.getElementById('points2');
const points3 = document.getElementById('points3');


function rank1() {
    rankreveal.innerHTML = "Rang 1";
    dark.style.opacity = 1;
    setTimeout(() => {
        fl.style.display = "flex";
        dark.style.display = "none";
        fl.style.backgroundColor = "transparent";
        fl.classList.add('flin');
        setTimeout(() => {
            conf1();
            name1.innerHTML = "Tilman";
            revealRank(1);
            fl.classList.remove('flin');
            fl.classList.add('flout');
            setTimeout(() => {
                fl.style.display = "none";
                setTimeout(() => {
                  rankreveal.style.transition = "0.8s";
                  rankreveal.style.fontSize = 0;
                }, 4000);
            }, 1000);
        }, 3000);
    }, 2000);
    
    // schön async machen und dann nach scheinwerfer namen einfügen und dann fett konfetti
    // https://confetti.js.org/more.html
}

async function revealRank(rank) {
  switch(rank) {
    case 1:
      rname = name1;
      rpoints = points1;
      break;
    case 2:
      rname = name2;
      rpoints = points2;
      break;
    case 3:
      rname = name3;
      rpoints = points3;
      break;
    default:
      console.log("error");
  }
  rname.innerHTML = "MMMMMMMMMMMMMMMMMMMM";
  rpoints.innerHTML = "10402";
  rankreveal.innerHTML = "Rang " + rank;
  pos3 = await getPos(rname);
  rname.classList.add('namein')
  setTimeout(() => {
    rname.classList.remove('namein');
    rname.style.transition = "2s";
    rname.style.fontSize = "2vh";
    rname.style.top = pos3.top + "px";
    rname.style.left = pos3.left + "px";
  }, 5000);


}


function getPos(element) {
  var rect = element.getBoundingClientRect();
  var parentRect = element.offsetParent.getBoundingClientRect();
  return {
      top: rect.top - parentRect.top + window.scrollY,
      left: rect.left - parentRect.left + window.scrollX
  };
}

function toggle() {
  if(bbpox.style.display == "none") {
    bbpox.style.display = "flex";
    bbbox.style.display = "none";
  }
  else {
    bbpox.style.display = "none";
    bbbox.style.display = "flex";
  }
}












activerank = 3;







bt1.addEventListener('click', () => {
  switch(activerank) {
    case 4:
      podrank();
      activerank--;
      break;
    case 3:
      revealRank(3);
      activerank--;
      break;
    case 2:
      revealRank(2);
      activerank--;
      break;
    case 1:
      rank1();
      activerank--;
      break;
    default:
      console.log("error");
  }
});



function conf1() {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { 
      startVelocity: 30,
      spread: 360, ticks: 60,
       zIndex: 0,
       colors: ['#ef8d0a', '#56a51a', '#0955a4']
    };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}



function conf2() {
  const end = Date.now() + 7 * 1000;

// go Buckeyes!
const colors = ["#bb0000", "#ffffff"];

(function frame() {
  confetti({
    gravity: 0.5,
    particleCount: 20,
    angle: 40,
    spread: 35,
    origin: { x: 0},
    colors: colors,
    startVelocity: 450,
    ticks: 800,
    
  });

  confetti({
    gravity: 0.5,
    particleCount: 20,
    angle: 140,
    spread: 35,
    origin: { x: 1 },
    colors: colors,
    startVelocity: 450,
    ticks: 800
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
}




toggle();














// function rank1(){
//   var theLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÖÄÜ1234567890"; //You can customize what letters it will cycle through
//   var ctnt = "Tilmanofatz"; // Your text goes here
//   var speed = 50; // ms per frame
//   var increment = 8; // frames per step. Must be >2
  
      
//   var clen = ctnt.length;       
//   var si = 0;
//   var stri = 0;
//   var block = "";
//   var fixed = "";
//   //Call self x times, whole function wrapped in setTimeout
  
//   (function rustle (i) {          
//   setTimeout(function () {
//     if (--i){rustle(i);}
//     nextFrame(i);
//     si = si + 1;        
//   }, speed);
//   })(clen*increment+1); 
//   function nextFrame(pos){
//     for (var i=0; i<clen-stri; i++) {
//       //Random number
//       var num = Math.floor(theLetters.length * Math.random());
//       //Get random letter
//       var letter = theLetters.charAt(num);
//       block = block + letter;
//     }
//     if (si == (increment-1)){
//       stri++;
//     }
//     if (si == increment){
//     // Add a letter; 
//     // every speed*10 ms
//     fixed = fixed +  ctnt.charAt(stri - 1);
//     si = 0;
//     }
//     podname.innerHTML = (fixed + block);
//     block = "";
//   }
//   };


