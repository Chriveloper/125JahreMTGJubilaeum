class Frage {
    constructor(frage, a, b, c, d, loesung, zeit, id, startzeit) {
      this.id = id;
      this.frage = frage;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.loesung = loesung;
      this.zeit = zeit;
      this.startzeit = startzeit;
    }
  }



  // Wartezeit vor Fragen
  pretime = 2000;



  const questions = [
    // Hier alle Fragen in richtiger Reinfolge auflisten
    new Frage("Spiel", "Spiel", "Spiel", "Spiel", "Spiel", "a", 5, 0, 0), // Dummy Frage, damit die IDs stimmen
    // Normale Frage 
    new Frage("Sonne", "rot", "gelb", "grün", "blau", "b", 5, 1, 0),

    // Frage mit zwei Lösungen
    new Frage("Liegestütze", "Herr Krois", "Herr Pleger", "Frau Ager", "Herr Markl", ["d", "a"], 20, 2, 0),

    // Frage mit nur 3 Antwortmöglichkeiten
    new Frage("Tilman", "gut", "besser", "am besten", "", "c", 20, 3, 0),

    // Ja Nein Frage
    new Frage("Christian ist ein Profi", "Ja", "Nein", "", "", "a", 20, 4, 0),
  ];


  // Sprüche wenn Antwort richtig ist
  const rworte = [
    "Mach weiter so",
    "Tilman hätte sich auch so entschieden",
    "Weise Entscheidung",
    "Tilman ist stolz auf dich",
    "INTELLIGENZ",
    "Bene bene bene",
    "Ouich  ~Frau Fendt, immer",
    "Gute Spieleinstellung",
  ]
  
  // Sprüche wenn Antwort falsch ist
  const fworte = [
    "Tilman hätte das besser gemacht",
    "Tilman ist entäuscht von dir",
    "Da ist noch Luft nach oben",
    "Da gibt es noch Ausbaupotentzial",
    "Wenn Frau Reiter das erfährt...",
    "Du vergeudest dein Potenzial",
    "Schlau ist etwas anderes",
    "Mio weint bei deiner Antwort",
    "Ein Stich in mein Lateinerherz  ~Frau Wächter 2018, oft genug",
    "Cicero in sarkophaco rotat", 
    "sklavus  ~Maya, Lateinstunde mit Herr Waschbüsch",
  ]
  