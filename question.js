const sqbt = document.getElementById('sQbt');
const bta = document.getElementById('bta')
const btb = document.getElementById('btb')
const btc = document.getElementById('btc')
const btd = document.getElementById('btd') 

class Frage {
  constructor(type, frage, a, b, c, d, loesung) {
    this.type = type;
    this.frage = frage;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.loesung = loesung;
  }
}


function getQuestion(id) {

  
}










sqbt.addEventListener('click', startQuestionTimer);

// Wird dann eif aus supabase übertragen
let questionid = "2"; // 1 = fragen-id
let timestartquestion = Date.now + 5000;



  function startQuestionTimer(time) {
    timestartquestion = Date.now + 5000;
    console.log('REG MICH NICHT AUF');
    startTimer(time);
  }



  function startQuestion() {
    console.log("test");
    a = supabaseFetch("fragen", "a", "eq", "id", questionid, "id", true);
  }









  // startQuestion();













const toggleTimer = document.getElementById('toggleTimer');
const timer = document.getElementById('timertext');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

// Müssen wir schaun wie der Input sein wird

// Länge der Zeit für Fragen
const sec = 5;
const setTime = sec *1000;


let timerLoop;
let futureTime;
timer.innerHTML = sec+".00"


function startTimer(time) { 
  timerLoop = setInterval(countDownTimer, 10);
  futureTime = Date.now() + setTime;
  s1.style.display = "block";
  s2.style.display = "block";
  s1.style.backgroundColor = "gray";
  s2.style.backgroundColor = "gray";
  timer.style.color = "gray";
  timer.style.fontSize = "5vh";
}


// Visuelles und technisches Zeug, bei Ablauf von Zeit siehe unterer Kommentar
function countDownTimer() {
    const remainingTime = futureTime - Date.now();
    const angle = (remainingTime / setTime) * 360;

    if(angle > 180) {
        s3.style.display = "none";
        s1.style.transform = "rotate(180deg)";
        s2.style.transform = "rotate("+angle+"deg)";
    } else {
        s3.style.display = "block";
        s1.style.transform = "rotate("+angle+"deg)";
        s2.style.transform = "rotate("+angle+"deg)";
    }

    if(remainingTime > 1000) {
        timer.innerHTML = remainingTime.toString().slice(0, -3)+"."+remainingTime.toString().slice(-3, -1);
    } else {
        timer.innerHTML = "0"+remainingTime.toString().slice(0, -3)+"."+remainingTime.toString().slice(-3, -1);
    }



    // Letzten 5 Sekunden rot
    // if(remainingTime <= 5000) {
    //     s1.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    //     s2.style.backgroundColor = "rgba(0, 255, 0, 0.8)";
    //     timer.style.color = "rgba(55, 0, 255, 0.8)";
    // }

    if(remainingTime <= 0) {
        clearInterval(timerLoop);
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "none";
        timer.style.fontSize = "3vh";
        timer.innerHTML = "ABGELAUFEN";
        // Hier Funktion bei Ablauf des Timers callen
    }
} 



