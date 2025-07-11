class Frage {
    constructor(frage, a, b, c, d, loesung, zeit, funfact) {
      this.beginn = false;
      this.start = false;
      this.ende = false;
      this.auswertung = false;

      this.frage = frage;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.loesung = loesung;
      this.zeit = zeit;
      this.funfact = funfact;
    }
  }

// Zeit fuer jede Frage
const qtime = 15;

// Zeit vor jeder Frage (in ms)
const pretime = 6000;

  // Bei welcher Frage das Podium durchgewechselt werden soll
const nextPodium = [3];

const questions = [
  new Frage("placeholder", "a", "a", "a", "a", "a", 0, ),


  new Frage("Haben Sie schon unsere Festschrift gekauft?", "Ja", "Nein, aber ich kaufe gleich am Ende eine.", "", "", ["a", "b"], qtime, "Ihre erzielten Punkte pro Frage werden nicht nur durch die Schnelligkeit Ihrer Eingabe, sondern auch von Ihrer Antwortserie bestimmt."),
  new Frage("Wie viele Fenster hat das Hauptgebäude unserer Schule?", "420", "690", "134", "208", "d", qtime, "Die ersten drei Antwortstasten sind in den Farben des MTG-Logos, die lilane Farbe der letzten Taste ist die Komplementärfarbe zum MTG-Grün."),
  new Frage("Seit wann ist das MTG für Mädchen geöffnet?", "1899", "1978", "1990", "1902", "b", qtime, "Es existieren über 440 Versionen des Quiz, bereits ab Version 152 konnte man erstmals Fragen starten und beantworten."),
  new Frage("In welchem Jahr wurde das Maria-Theresia-Gymnasium gegründet?", "1965", "1899", "1940", "2006", "a", qtime, "Das Quiz besteht aus 23 Code-Dateien."),
  new Frage("Was ist die richtige Reihnfolge der letzten vier Schuldirektoren unserer Schule?", "Fr. Duschka, Hr. Schairer, Fr. Reiter, Hr. Ewerling", "Fr. Duschka, Fr. Reiter, Hr. Schairer, Hr. Ewerling", "Fr. Duschka, Fr. Reiter, Hr. Ewerling, Hr. Schairer", "Fr. Reiter, Hr. Ewerling, Hr. Schairer, Fr. Duschka", "b", qtime, "Beim Programmieren dieses Quiz wurden über 14000 Testnutzer erstellt."),
  new Frage("Wie viele Liegestütze schafft Herr Markl?", "55", "21", "86", "125", "c", qtime, "Vor genau 99 Tagen haben Christian und Tilman mit dem Programmieren des Quiz begonnen."),
  new Frage('Was war das profitabelste Unternehmen während der letzten Projekttage "Schule als Staat"?', "Museumscafé", "Pizzabäckerei", "Talentshow", "3D-Drucker", "a", qtime, 'Die Länge unseres Codes entspricht etwa 20% von "Harry Potter und der Stein der Weisen"'),
  new Frage("Welche Partei gewann die Juniorwahl 2023 am MTG?", "SPD", "Bündnis 90/Die Grünen", "AfD", "CSU", "b", qtime, "Es gibt einen Filter für nicht unangemessene Benutzernamen."),
  new Frage("Wie viel Prozent des Schulgebäudes wurden beim Bombentreffer im April 1944 zerstört?", "20%", "0%", "90%", "70%", "d", qtime, 'Es gibt eine Seite, auf der man Nutzer auf die Bühne setzen kann und Nutzer mit anstößigen Namen bannen kann.'),
  new Frage("Wie oft besuchte die Namensgeberin Maria Theresia die Schule?", "Nie", "Einmal", "Zweimal", "Dreimal", "b", qtime, false)
];





//   // Chemie
//   new Frage("Was ist das chemische Symbol für Wasserstoff?", "H", "O", "N", "C", "a", 10, false),
//   new Frage("Was ist die Hauptkomponente von Erdgas?", "Methan", "Sauerstoff", "Stickstoff", "Helium", "a", 10, false),

//   // Biologie
//   new Frage("Was ist die kleinste Einheit des Lebens?", "Zelle", "Molekül", "Atom", "Elektron", "a", 10, false),
//   new Frage("Welches Organ produziert Insulin?", "Leber", "Bauchspeicheldrüse", "Niere", "Herz", "b", 10, false),

//   // Geographie
//   new Frage("Welcher ist der größte Kontinent der Erde?", "Asien", "Afrika", "Amerika", "Europa", "a", 10, false),
//   new Frage("Welcher Ozean ist der tiefste?", "Atlantik", "Indischer Ozean", "Pazifik", "Arktischer Ozean", "c", 10, false),

//   // Mischung
//   new Frage("Was ist die Hauptzutat in Glas?", "Sand", "Wasser", "Luft", "Erde", "a", 10, false),
//   new Frage("Welches Tier hat das größte Gehirn?", "Elefant", "Blauwal", "Mensch", "Delfin", "b", 10, false),
//   new Frage("Welcher ist der längste Fluss der Welt?", "Amazonas", "Nile", "Yangtze", "Mississippi", "b", 10, false),
//   new Frage("Welches Land hat die meisten Einwohner?", "China", "Indien", "USA", "Indonesien", "a", 10, false),  // new Frage("Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?", "Willy Brandt", "Helmut Kohl", "Konrad Adenauer", "Gerhard Schröder", "c", 2, false),
//   new Frage("Was ist die Quadratwurzel von 144?", "12", "14", "16", "18", "a", 10, false),
//   new Frage("Wer hat 'Faust' geschrieben?", "Friedrich Schiller", "Thomas Mann", "Johann Wolfgang von Goethe", "Bertolt Brecht", "c", 2, false),
//   new Frage("Wer war der erste Mensch im Weltraum?", "Herr Eschrich", "Yuri Gagarin", "Neil Armstrong", "Alexander Gerst",  "b", 15, false),
//   new Frage("Was ist der Sinus von 90 Grad?", "0", "1", "-1", "2", "b", 15, false),
//   new Frage("Welches der folgenden Bauten ist keines der sieben Weltwunder der Antike?", "Pyramiden von Gizeh", "Freiheitsstatue", "Koloss dvon Rhodos", "Zeusstatue", "b", 15, false),
//   new Frage("Wer hat die Mona Lisa gemalt?", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "c", 15, false),
//   new Frage("Was ist die Wurzel aus -1?", "es gibt keine Lösung", "1", "-1", "i", ["a","d"], 15, false),
//   new Frage("Was ist die Hauptstadt von Frankreich?", "Berlin", "London", "Madrid", "Paris", "d", 15, false),
//   new Frage("Was ist der längste Fluss der Welt?", "Amazonas", "Nil", "Jangtse", "Mississippi", "b", 15, false),
//   new Frage("Wer war der erste Mensch auf dem Mond?", "Yuri Gagarin", "Alexander Gerst", "Neil Armstrong", "Michael Collins", "c", 15, false),
//   new Frage("Was ist der größte Planet in unserem Sonnensystem?", "Erde", "Mars", "Jupiter", "Venus", "c", 15, false),
//   new Frage("Wer hat die Theorie der Evolution durch natürliche Selektion vorgeschlagen?", "Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Alexander Fleming", "a", 15, false),
//   new Frage("Was ist die Hauptstadt von Australien?", "Sydney", "Melbourne", "Canberra", "Neuseeland", "c", 15, false),
// ];


// Sprüche wenn Antwort richtig ist
const rworte = [
  // "Mach weiter so",
  // "Tilman hätte sich auch so entschieden",
  // "Weise Entscheidung",
  // "Tilman ist stolz auf dich",
  // "INTELLIGENZ",
  // "Bene bene bene",
  // "Ouich  ~Frau Fendt, immer",
  // "Gute Spieleinstellung",
  "Richtig! Ihr Wissen leuchtet heller als die Schulglocke am Morgen!",
  "Treffer! Sie haben den Jackpot des Wissen geknackt. Feiern Sie diesen Triumph!",
  "Korrekt! Ihre Antwort strahlt wie die Sonne über unserem Schulhof. Gut gemacht!",
  "Wow, Sie sind sicher einer von den ganz Schlauen!",
  "Wieso sind Sie nicht in unserem Hochbegabtenzweig?",
  "Haben wir da einen Streber im Publikum?",
  "Sie haben sicher schon die Festschrift gekauft!"
]

// Sprüche wenn Antwort falsch ist
const fworte = [
  // "Tilman hätte das besser gemacht",
  // "Tilman ist entäuscht von dir",
  // "Da ist noch Luft nach oben",
  // "Da gibt es noch Ausbaupotenzial",
  // "Wenn Frau Reiter das erfährt...",
  // "Du vergeudest dein Potenzial",
  // "Schlau ist etwas anderes",
  // "Mio weint bei deiner Antwort",
  // "Ein Stich in mein Lateinerherz  ~Frau Wächter 2018, oft genug",
  // "Cicero in sarcophago rotat",
  "Oh leider nicht ganz richtig. Aber keine Sorge beim nächsten Quiz sind Sie wieder am Start!",
  "Das war knapp daneben. Aber keine Sorge, in der Schule des Lebens gibt es immer eine zweite Chance!",
  "Ups, das war falsch. Aber wie sagt man so schön: Übung macht den Meister!",
  "Wir fragen uns, ob Sie in der Schule genauso falsche Antworten gegeben haben. Wahrscheinlich ja!",
  "Hätten Sie doch die Festschrift gekauft!",
  "Ab zum Nachsitzen!"
]
const zwischenworte = [
  "Wir haben Ihre Antwort. Bald erfahren Sie, ob Sie ein Quiz-Genie sind!",
  "Ihre Antwort wird geprüft. Gleich wissen Sie, ob Sie auf der Gewinnerseite stehen!",
  "Ihre Antwort wird von unseren klügsten Köpfen überprüft. Daumen drücken!",
  "Ein Expertenteam aus Lehrern, Schülern und einem geheimen Superhelden prüft Ihre Antwort.",
  "Während Ihre Antwort durch die Schulkorridore wandert, genießen wir einen Moment der Vorfreude.",
  "Lehrer prüfen Ihre Antwort mit wissenschaftlicher Präzision.",
  "Sicher nicht beim Nachbarn über die Schulter geäugt?"
]

// Bis zu welchem PLatz die Rangliste gehen soll
const ranglistenlimit = 5;






// Wär die Mitte
//const nextPodium = (questions.length - 1)/2;



  
async function getQuestions() {
  let fragenData = await supabaseFetch('fragen', 'beginn, start, ende, auswertung', '', '', '', 'id', true)
  console.log(fragenData.length)
  console.log(questions.length)
  for (let i = 0; i < fragenData.length; i++) {
    questions[i].beginn = await fragenData[i].beginn;
    questions[i].start = await fragenData[i].start;
    questions[i].ende = await fragenData[i].ende;
    questions[i].auswertung = await fragenData[i].auswertung;
  }
}

getQuestions();




