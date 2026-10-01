# 🧠 Projekt 2: Quiz-App

Erstelle eine interaktive Quiz-App! Die Nutzer beantworten Fragen zu einem Thema deiner Wahl, bekommen sofortiges Feedback und sehen am Ende ihr Ergebnis.

---

## 🎯 Projektziel

Am Ende hast du eine funktionierende Quiz-App mit:
- **Mehreren Fragen** (mindestens 10)
- **Multiple-Choice-Antworten** (3-4 Optionen pro Frage)
- **Sofortiges Feedback** - richtig/falsch wird direkt erkannt
- **Die richtige Antwort** wird bei falscher Antwort gezeigt
- **Punktestand** wird mitgezählt
- **Ergebnis-Screen** mit Auswertung am Ende
- **Fortschrittsanzeige** (welche Frage bin ich bei?)
- **Ansprechendem Design** mit Animationen
- **Mindestens 1-2 Bonus-Features** (Timer, Highscore, etc.)

---

## 📚 React Grundlagen (WICHTIG - zuerst lesen!)

Bevor du loslegst, hier die wichtigsten React-Konzepte erklärt:

### Was ist React?

React ist eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen. Statt HTML direkt zu schreiben, erstellst du **Komponenten** – kleine, wiederverwendbare Bausteine.

### Was sind Komponenten?

Eine Komponente ist wie eine eigene HTML-Vorlage mit eingebauter Logik. Beispiel:

```jsx
// Eine einfache Komponente
function Ueberschrift() {
  return <h1>Willkommen zum Quiz!</h1>;
}

// Eine Komponente mit Parameter (Props)
function FrageAnzeige({ fragenummer, gesamtfragen }) {
  return <p>Frage {fragenummer} von {gesamtfragen}</p>;
}

// So verwendest du die Komponente:
<FrageAnzeige fragenummer={1} gesamtfragen={10} />
// Ergebnis: <p>Frage 1 von 10</p>
```

### Was ist JSX?

JSX sieht aus wie HTML, ist aber JavaScript. Du kannst JavaScript-Code in geschweifte Klammern `{}` schreiben:

```jsx
function QuizScreen() {
  const quizTitel = "Mein Quiz";
  const fragenAnzahl = 10;
  
  return (
    <div>
      <h1>{quizTitel}</h1>
      <p>Insgesamt {fragenAnzahl} Fragen warten auf dich!</p>
    </div>
  );
}
```

### Was ist State?

**State** = Zustand = Daten, die sich ändern können und die Anzeige aktualisieren.

```jsx
import { useState } from 'react';

function Quiz() {
  // useState gibt dir zwei Dinge:
  // 1. Die Variable (hier: aktuelleFrageNummer) - der aktuelle Wert
  // 2. Die Funktion zum Ändern (hier: setAktuelleFrageNummer)
  const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(0);  // Start bei Frage 0
  
  return (
    <div>
      <p>Aktuelle Frage: {aktuelleFrageNummer}</p>
      <button onClick={() => setAktuelleFrageNummer(aktuelleFrageNummer + 1)}>
        Nächste Frage
      </button>
    </div>
  );
}
```

**WICHTIG:** Du darfst State NIE direkt ändern! Immer die set-Funktion benutzen:
```jsx
// ❌ FALSCH - funktioniert nicht!
aktuelleFrageNummer = aktuelleFrageNummer + 1;

// ✅ RICHTIG
setAktuelleFrageNummer(aktuelleFrageNummer + 1);
```

### Props vs. State

| Props | State |
|-------|-------|
| Kommen von außen (Eltern-Komponente) | Leben in der Komponente |
| Können nicht geändert werden | Können geändert werden |
| Wie Funktions-Parameter | Wie Variablen, die sich merken |

```jsx
// Props kommen von außen
function AntwortButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

// State lebt in der Komponente
function Quiz() {
  const [punkte, setPunkte] = useState(0);
  // ...
}
```

### useEffect - Code zur richtigen Zeit ausführen

`useEffect` führt Code aus, wenn sich etwas ändert oder die Komponente startet:

```jsx
import { useEffect } from 'react';

function Quiz() {
  const [timer, setTimer] = useState(15);
  
  // Dieser Code läuft wenn sich timer ändert
  useEffect(() => {
    console.log("Timer ist jetzt:", timer);
  }, [timer]);  // <-- Das Array sagt: "Reagiere auf Änderungen von timer"
}
```

---

## 🗓️ Tagesziele

### Tag 3: Projekt aufsetzen & Fragen vorbereiten

**Ziel:** Ein funktionierendes Vite/React-Projekt mit Quiz-Daten.

**Aufgaben:**
1. Erstelle ein neues Vite-Projekt
2. Räume die Starter-Dateien auf
3. Überlege dir ein Quiz-Thema
4. Erstelle eine Datei mit deinen Quiz-Fragen

#### Schritt 1: Vite-Projekt erstellen

**🧩 Deine Aufgabe:** Führe diese Befehle aus:

```bash
npm create vite@latest quiz-app -- --template react
cd quiz-app
npm install
npm run dev
```

Das Projekt läuft jetzt unter `http://localhost:5173`

#### Schritt 2: Starter-Dateien aufräumen

Nach dem Erstellen des Projekts solltest du den Demo-Code löschen.

<details>
<summary>💡 Hilfe: So sollte App.jsx aussehen</summary>

**src/App.jsx** - ersetze den Inhalt mit:
```jsx
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Quiz-App</h1>
      <p>Hier kommt das Quiz!</p>
    </div>
  )
}

export default App
```

**src/App.css** - ersetze den Inhalt mit:
```css
.app {
  text-align: center;
  padding: 20px;
}
```
</details>

#### Schritt 3: Ein Quiz-Thema wählen

**🧩 Deine Aufgabe:** Überlege dir ein Thema für dein Quiz!

Hier sind ein paar Ideen:
- 🌍 **Geografie:** Länder, Hauptstädte, Flaggen
- 🎬 **Filme & Serien:** Marvel, Harry Potter, Netflix
- ⚽ **Sport:** Fußball, Olympia, Rekorde
- 🎵 **Musik:** Künstler, Songs, Alben
- 💻 **Programmierung:** HTML, CSS, JavaScript Fragen
- 🎮 **Gaming:** Beliebte Spiele und Konsolen
- 🔬 **Wissenschaft:** Physik, Biologie, Chemie

Schreib dein Thema auf! 📝

#### Schritt 4: Fragen-Datei erstellen

Erstelle einen Ordner `src/data/` und darin die Datei `fragen.js`.

<details>
<summary>💡 Hilfe: Fragen-Datenstruktur</summary>

Jede Frage braucht diese Informationen:

```javascript
{
  id: 1,                                    // Eindeutige Nummer
  frage: "Was ist die Hauptstadt von Frankreich?",
  antworten: ["Berlin", "Paris", "London", "Madrid"],
  richtigeAntwort: 1  // Index der richtigen Antwort (Paris = Index 1)
}
```

**Wichtig:** Der Index beginnt bei 0!
- Index 0: Berlin
- Index 1: Paris ← Das ist die richtige Antwort
- Index 2: London
- Index 3: Madrid

Warum Indizes? Weil du später vergleichst: `if (geklickterIndex === richtigeAntwort) { ... }`
</details>

<details>
<summary>✅ Lösung: Beispiel-Fragen zu Geografie</summary>

Erstelle `src/data/fragen.js`:

```javascript
// filepath: src/data/fragen.js

export const fragen = [
  {
    id: 1,
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ["Berlin", "Paris", "London", "Madrid"],
    richtigeAntwort: 1
  },
  {
    id: 2,
    frage: "Welcher ist der größte Planet unseres Sonnensystems?",
    antworten: ["Saturn", "Jupiter", "Mars", "Neptun"],
    richtigeAntwort: 1
  },
  {
    id: 3,
    frage: "In welchem Land liegt die Pyramide von Giza?",
    antworten: ["Griechenland", "Ägypten", "Mexiko", "Peru"],
    richtigeAntwort: 1
  },
  {
    id: 4,
    frage: "Wie heißt die längste Fluss der Welt?",
    antworten: ["Amazonas", "Nil", "Yangtze", "Mississippi"],
    richtigeAntwort: 1
  },
  {
    id: 5,
    frage: "Welche ist die Hauptstadt von Japan?",
    antworten: ["Osaka", "Kyoto", "Tokyo", "Yokohama"],
    richtigeAntwort: 2
  },
  {
    id: 6,
    frage: "Welcher Kontinent ist der größte?",
    antworten: ["Afrika", "Asien", "Amerika", "Europa"],
    richtigeAntwort: 1
  },
  {
    id: 7,
    frage: "In welchem Land findest du die Sagrada Familia?",
    antworten: ["Frankreich", "Spanien", "Italien", "Portugal"],
    richtigeAntwort: 1
  },
  {
    id: 8,
    frage: "Wie viele Kontinente gibt es?",
    antworten: ["5", "6", "7", "8"],
    richtigeAntwort: 2
  },
  {
    id: 9,
    frage: "Was ist die Hauptstadt von Australien?",
    antworten: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    richtigeAntwort: 2
  },
  {
    id: 10,
    frage: "Welcher Berg ist der höchste der Welt?",
    antworten: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    richtigeAntwort: 1
  }
];
```

Du kannst die Fragen natürlich auch an dein Thema anpassen!
</details>

**Checkpoint:** ✅ Projekt läuft, Starter-Code bereinigt, mindestens 10 Fragen vorbereitet.

---

### Tag 4: Quiz-Komponente & erste Frage anzeigen

**Ziel:** Die erste Frage wird auf dem Bildschirm angezeigt mit allen Antwort-Optionen.

**Aufgaben:**
1. Erstelle eine Komponente `Quiz.jsx`
2. Importiere die Fragen aus `fragen.js`
3. Nutze `useState` um zu speichern, welche Frage gerade angezeigt wird
4. Zeige an:
   - Die Frage-Nummer (z.B. "Frage 1 von 10")
   - Den Frage-Text
   - Alle Antwort-Optionen als Buttons

#### Schritt 1: Quiz.jsx erstellen

**🧩 Deine Aufgabe:** Erstelle `src/components/Quiz.jsx`

<details>
<summary>💡 Tipp: Array auf aktuelle Frage zugreifen</summary>

Wenn deine Fragen in einem Array sind, greifst du so auf die aktuelle zu:

```jsx
const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(0);
const aktuelleFrageObjekt = fragen[aktuelleFrageNummer];

// Jetzt kannst du darauf zugreifen:
console.log(aktuelleFrageObjekt.frage);      // Der Frage-Text
console.log(aktuelleFrageObjekt.antworten);  // Array der Antworten
```

Wichtig: Index 0 = erste Frage, Index 1 = zweite Frage, etc.
</details>

<details>
<summary>💡 Tipp: Mit .map() Buttons für alle Antworten erstellen</summary>

Du kannst `map()` nutzen um aus einem Array von Strings Buttons zu machen:

```jsx
aktuelleFrageObjekt.antworten.map((antwort, index) => (
  <button key={index}>
    {antwort}
  </button>
))
```

Das erzeugt für jede Antwort einen Button mit dem Text.
</details>

<details>
<summary>✅ Lösung: Quiz.jsx Grundgerüst</summary>

```jsx
import { useState } from 'react';
import { fragen } from '../data/fragen';
import './Quiz.css';

function Quiz() {
  // Speichere welche Frage gerade angezeigt wird (Index)
  const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(0);
  
  // Hole das Fragen-Objekt
  const aktuelleFrageObjekt = fragen[aktuelleFrageNummer];
  
  function handleAntwortKlick(geklickterAntwortenIndex) {
    console.log("Antwort geklickt:", geklickterAntwortenIndex);
    // Hier kommt später die Logik hin!
  }
  
  return (
    <div className="quiz">
      {/* Frage-Nummer anzeigen */}
      <p className="frage-nummer">
        Frage {aktuelleFrageNummer + 1} von {fragen.length}
      </p>
      
      {/* Frage anzeigen */}
      <h2 className="frage-text">{aktuelleFrageObjekt.frage}</h2>
      
      {/* Antwort-Buttons */}
      <div className="antworten">
        {aktuelleFrageObjekt.antworten.map((antwort, index) => (
          <button 
            key={index}
            className="antwort-button"
            onClick={() => handleAntwortKlick(index)}
          >
            {antwort}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
```
</details>

#### Schritt 2: Quiz.css styling (Basis)

<details>
<summary>✅ Lösung: Quiz.css</summary>

```css
.quiz {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.frage-nummer {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 10px 0;
}

.frage-text {
  font-size: 1.5rem;
  color: #333;
  margin: 20px 0;
}

.antworten {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.antwort-button {
  padding: 12px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.antwort-button:hover {
  background-color: #2980b9;
}
```
</details>

#### Schritt 3: App.jsx aktualisieren

<details>
<summary>✅ Lösung: App.jsx mit Quiz-Komponente</summary>

```jsx
import './App.css'
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="app">
      <h1>🧠 Quiz-App</h1>
      <Quiz />
    </div>
  )
}

export default App
```
</details>

**Fragen zum Nachdenken:**
- Was passiert, wenn ich auf einen Antwort-Button klicke? (Schaue in die Konsole!)
- Warum braucht jeder Button eine `key`-Prop?
- Wie würdest du die Buttons in zwei Spalten anordnen?

**Checkpoint:** ✅ Die erste Frage wird angezeigt mit 4 Antwort-Buttons.

---

### Tag 5: Richtig/Falsch-Erkennung

**Ziel:** Die App erkennt, ob eine Antwort richtig oder falsch ist und zeigt Feedback.

**Aufgaben:**
1. Vergleiche die geklickte Antwort mit der richtigen Antwort
2. Markiere die richtige Antwort grün
3. Markiere falsche Antworten rot
4. Zeige eine passende Nachricht
5. Deaktiviere Buttons nach der Antwort
6. Füge einen "Nächste Frage"-Button hinzu

#### Schritt 1: State für die Antwort hinzufügen

**🧩 Deine Aufgabe:** Erweitere Quiz.jsx um:
1. `const [antwortGegeben, setAntwortGegeben] = useState(false)` - wurde bereits geantwortet?
2. `const [geklickteAntwort, setGeklickteAntwort] = useState(null)` - welcher Button wurde geklickt?

<details>
<summary>💡 Tipp: Mit bedingtem Rendering Dinge ein-/ausblenden</summary>

Du kannst `if` statements oder den ternären Operator nutzen:

```jsx
// Ternärer Operator: bedingung ? wennWahr : wennFalsch
{antwortGegeben ? <p>Antwort gegeben!</p> : <p>Antworte bitte!</p>}

// Oder mit &&:
{antwortGegeben && <p>Antwort gegeben!</p>}
```
</details>

<details>
<summary>✅ Lösung: Richtig/Falsch-Logik in Quiz.jsx</summary>

```jsx
import { useState } from 'react';
import { fragen } from '../data/fragen';
import './Quiz.css';

function Quiz() {
  const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(0);
  const [antwortGegeben, setAntwortGegeben] = useState(false);
  const [geklickteAntwort, setGeklickteAntwort] = useState(null);
  
  const aktuelleFrageObjekt = fragen[aktuelleFrageNummer];
  const istAntwortRichtig = geklickteAntwort === aktuelleFrageObjekt.richtigeAntwort;
  
  function handleAntwortKlick(geklickterAntwortenIndex) {
    // Nur wenn noch nicht geantwortet wurde
    if (antwortGegeben) return;
    
    setGeklickteAntwort(geklickterAntwortenIndex);
    setAntwortGegeben(true);
  }
  
  function handleNaechsteFrage() {
    if (aktuelleFrageNummer < fragen.length - 1) {
      // Zur nächsten Frage
      setAktuelleFrageNummer(aktuelleFrageNummer + 1);
      setAntwortGegeben(false);
      setGeklickteAntwort(null);
    } else {
      // Quiz vorbei - kommt später!
      console.log("Quiz vorbei!");
    }
  }
  
  return (
    <div className="quiz">
      <p className="frage-nummer">
        Frage {aktuelleFrageNummer + 1} von {fragen.length}
      </p>
      
      <h2 className="frage-text">{aktuelleFrageObjekt.frage}</h2>
      
      <div className="antworten">
        {aktuelleFrageObjekt.antworten.map((antwort, index) => {
          // Bestimme CSS-Klasse basierend auf richtig/falsch
          let buttonKlasse = "antwort-button";
          if (antwortGegeben) {
            if (index === aktuelleFrageObjekt.richtigeAntwort) {
              buttonKlasse += " richtig";  // Grün
            } else if (index === geklickteAntwort) {
              buttonKlasse += " falsch";   // Rot
            }
          }
          
          return (
            <button 
              key={index}
              className={buttonKlasse}
              onClick={() => handleAntwortKlick(index)}
              disabled={antwortGegeben}
            >
              {antwort}
            </button>
          );
        })}
      </div>
      
      {/* Feedback-Nachricht */}
      {antwortGegeben && (
        <div className={`feedback ${istAntwortRichtig ? 'richtig' : 'falsch'}`}>
          {istAntwortRichtig ? (
            <p>✅ Richtig!</p>
          ) : (
            <>
              <p>❌ Falsch!</p>
              <p>Richtige Antwort: {aktuelleFrageObjekt.antworten[aktuelleFrageObjekt.richtigeAntwort]}</p>
            </>
          )}
        </div>
      )}
      
      {/* Nächste Frage Button */}
      {antwortGegeben && (
        <button className="naechste-button" onClick={handleNaechsteFrage}>
          {aktuelleFrageNummer < fragen.length - 1 ? "Nächste Frage" : "Quiz beenden"}
        </button>
      )}
    </div>
  );
}

export default Quiz;
```
</details>

#### Schritt 2: CSS für Feedback aktualisieren

<details>
<summary>✅ Lösung: Aktualisierte Quiz.css</summary>

```css
.quiz {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.frage-nummer {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 10px 0;
}

.frage-text {
  font-size: 1.5rem;
  color: #333;
  margin: 20px 0;
}

.antworten {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.antwort-button {
  padding: 12px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.antwort-button:hover:not(:disabled) {
  background-color: #2980b9;
}

.antwort-button:disabled {
  cursor: not-allowed;
  opacity: 0.9;
}

/* Richtige Antwort - Grün */
.antwort-button.richtig {
  background-color: #2ecc71;
}

/* Falsche Antwort - Rot */
.antwort-button.falsch {
  background-color: #e74c3c;
}

/* Feedback-Nachrichten */
.feedback {
  margin: 20px 0;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
}

.feedback.richtig {
  background-color: #d5f4e6;
  color: #27ae60;
  border-left: 4px solid #2ecc71;
}

.feedback.falsch {
  background-color: #fadbd8;
  color: #c0392b;
  border-left: 4px solid #e74c3c;
}

.feedback p {
  margin: 5px 0;
}

/* Nächste Frage Button */
.naechste-button {
  width: 100%;
  padding: 12px;
  background-color: #9b59b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.naechste-button:hover {
  background-color: #8e44ad;
}
```
</details>

**Fragen zum Nachdenken:**
- Was bedeutet `disabled={antwortGegeben}`?
- Warum ist es wichtig, dass Buttons deaktiviert sind nach der Antwort?
- Wie würdest du verhindern, dass man mehrmals antwortet?

**Checkpoint:** ✅ Richtige Antworten werden grün, falsche rot markiert. Feedback wird angezeigt.

---

### Tag 6: Punktestand & Ergebnis-Screen

**Ziel:** Der Punktestand wird gezählt und am Ende wird ein Ergebnis angezeigt.

**Aufgaben:**
1. Zähle die richtigen Antworten
2. Zeige den aktuellen Punktestand an
3. Erstelle eine Komponente `Ergebnis.jsx`
4. Zeige am Ende den finalen Score
5. Gib eine passende Nachricht basierend auf dem Ergebnis

#### Schritt 1: Punktestand im State hinzufügen

**🧩 Deine Aufgabe:** Füge einen State für die Punkte hinzu und erhöhe ihn bei richtigen Antworten.

<details>
<summary>💡 Tipp: Punkte nur bei richtiger Antwort erhöhen</summary>

```jsx
const [punkte, setPunkte] = useState(0);

// Wenn Antwort gegeben wird:
function handleAntwortKlick(geklickterAntwortenIndex) {
  if (antwortGegeben) return;
  
  // Prüfe ob richtig
  if (geklickterAntwortenIndex === aktuelleFrageObjekt.richtigeAntwort) {
    setPunkte(punkte + 1);  // Punkt hinzufügen
  }
  
  setGeklickteAntwort(geklickterAntwortenIndex);
  setAntwortGegeben(true);
}
```
</details>

<details>
<summary>✅ Lösung: Quiz.jsx mit Punktestand</summary>

```jsx
import { useState } from 'react';
import { fragen } from '../data/fragen';
import Ergebnis from './Ergebnis';
import './Quiz.css';

function Quiz() {
  const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(0);
  const [antwortGegeben, setAntwortGegeben] = useState(false);
  const [geklickteAntwort, setGeklickteAntwort] = useState(null);
  const [punkte, setPunkte] = useState(0);
  
  const aktuelleFrageObjekt = fragen[aktuelleFrageNummer];
  const istAntwortRichtig = geklickteAntwort === aktuelleFrageObjekt.richtigeAntwort;
  const quizVorbei = aktuelleFrageNummer === fragen.length;  // Alle Fragen beantwortet?
  
  function handleAntwortKlick(geklickterAntwortenIndex) {
    if (antwortGegeben) return;
    
    // Punkte erhöhen wenn richtig
    if (geklickterAntwortenIndex === aktuelleFrageObjekt.richtigeAntwort) {
      setPunkte(punkte + 1);
    }
    
    setGeklickteAntwort(geklickterAntwortenIndex);
    setAntwortGegeben(true);
  }
  
  function handleNaechsteFrage() {
    setAktuelleFrageNummer(aktuelleFrageNummer + 1);
    setAntwortGegeben(false);
    setGeklickteAntwort(null);
  }
  
  function handleNochmalSpielen() {
    setAktuelleFrageNummer(0);
    setAntwortGegeben(false);
    setGeklickteAntwort(null);
    setPunkte(0);
  }
  
  // Wenn Quiz vorbei, zeige Ergebnis
  if (quizVorbei) {
    return <Ergebnis punkte={punkte} gesamtFragen={fragen.length} onNochmalSpielen={handleNochmalSpielen} />;
  }
  
  return (
    <div className="quiz">
      {/* Fortschrittsanzeige */}
      <div className="fortschritt">
        <div className="fortschrittsbalken">
          <div 
            className="fortschritt-gefuellt" 
            style={{ width: `${((aktuelleFrageNummer + 1) / fragen.length) * 100}%` }}
          ></div>
        </div>
        <p className="punkte">Punkte: {punkte}/{fragen.length}</p>
      </div>
      
      <p className="frage-nummer">
        Frage {aktuelleFrageNummer + 1} von {fragen.length}
      </p>
      
      <h2 className="frage-text">{aktuelleFrageObjekt.frage}</h2>
      
      <div className="antworten">
        {aktuelleFrageObjekt.antworten.map((antwort, index) => {
          let buttonKlasse = "antwort-button";
          if (antwortGegeben) {
            if (index === aktuelleFrageObjekt.richtigeAntwort) {
              buttonKlasse += " richtig";
            } else if (index === geklickteAntwort) {
              buttonKlasse += " falsch";
            }
          }
          
          return (
            <button 
              key={index}
              className={buttonKlasse}
              onClick={() => handleAntwortKlick(index)}
              disabled={antwortGegeben}
            >
              {antwort}
            </button>
          );
        })}
      </div>
      
      {antwortGegeben && (
        <div className={`feedback ${istAntwortRichtig ? 'richtig' : 'falsch'}`}>
          {istAntwortRichtig ? (
            <p>✅ Richtig!</p>
          ) : (
            <>
              <p>❌ Falsch!</p>
              <p>Richtige Antwort: {aktuelleFrageObjekt.antworten[aktuelleFrageObjekt.richtigeAntwort]}</p>
            </>
          )}
        </div>
      )}
      
      {antwortGegeben && (
        <button className="naechste-button" onClick={handleNaechsteFrage}>
          Nächste Frage
        </button>
      )}
    </div>
  );
}

export default Quiz;
```
</details>

#### Schritt 2: Ergebnis-Komponente erstellen

**🧩 Deine Aufgabe:** Erstelle `src/components/Ergebnis.jsx`

<details>
<summary>💡 Tipp: Prozentsatz berechnen und passende Nachricht wählen</summary>

```jsx
const prozentsatz = (punkte / gesamtFragen) * 100;

let emoji = "😅";
let nachricht = "Da geht noch mehr!";

if (prozentsatz >= 70) {
  emoji = "🎉";
  nachricht = "Perfekt!";
}
```
</details>

<details>
<summary>✅ Lösung: Ergebnis.jsx</summary>

```jsx
import './Ergebnis.css';

function Ergebnis({ punkte, gesamtFragen, onNochmalSpielen }) {
  const prozentsatz = (punkte / gesamtFragen) * 100;
  
  let emoji = "😅";
  let nachricht = "Da geht noch mehr!";
  let bewertung = "Ausreichend";
  
  if (prozentsatz >= 70) {
    emoji = "👍";
    nachricht = "Gut gemacht!";
    bewertung = "Gut";
  }
  
  if (prozentsatz >= 90) {
    emoji = "🎉";
    nachricht = "Perfekt!";
    bewertung = "Sehr Gut";
  }
  
  if (prozentsatz === 100) {
    emoji = "🏆";
    nachricht = "Meisterschaft!";
    bewertung = "Ausgezeichnet";
  }
  
  return (
    <div className="ergebnis-container">
      <div className="ergebnis-card">
        <h1 className="ergebnis-emoji">{emoji}</h1>
        <h2>Quiz abgeschlossen!</h2>
        
        <div className="ergebnis-score">
          <h3>Du hast {punkte} von {gesamtFragen} Punkten erreicht!</h3>
          <p className="prozentsatz">{Math.round(prozentsatz)}%</p>
          <p className="bewertung">{bewertung}</p>
        </div>
        
        <p className="ergebnis-nachricht">{nachricht}</p>
        
        <button className="nochmal-button" onClick={onNochmalSpielen}>
          Nochmal spielen
        </button>
      </div>
    </div>
  );
}

export default Ergebnis;
```
</details>

#### Schritt 3: Ergebnis.css gestalten

<details>
<summary>✅ Lösung: Ergebnis.css</summary>

```css
.ergebnis-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.ergebnis-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
}

.ergebnis-emoji {
  font-size: 4rem;
  margin: 0 0 20px 0;
}

.ergebnis-card h2 {
  font-size: 2rem;
  color: #333;
  margin: 0 0 30px 0;
}

.ergebnis-score {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.ergebnis-score h3 {
  color: #333;
  font-size: 1.3rem;
  margin: 0 0 15px 0;
}

.prozentsatz {
  font-size: 2.5rem;
  font-weight: bold;
  color: #667eea;
  margin: 10px 0;
}

.bewertung {
  font-size: 1.1rem;
  color: #666;
  margin: 5px 0 0 0;
}

.ergebnis-nachricht {
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
  font-weight: 500;
}

.nochmal-button {
  width: 100%;
  padding: 14px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.nochmal-button:hover {
  background-color: #764ba2;
}
```
</details>

#### Schritt 4: Quiz.css ergänzen (Fortschrittsbalken)

Füge das zu deiner `Quiz.css` hinzu:

```css
.fortschritt {
  margin-bottom: 20px;
}

.fortschrittsbalken {
  width: 100%;
  height: 8px;
  background-color: #ecf0f1;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.fortschritt-gefuellt {
  height: 100%;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.punkte {
  text-align: right;
  color: #666;
  font-weight: bold;
  margin: 0;
}
```

**Fragen zum Nachdenken:**
- Wie entscheidest du, welche Nachricht am Ende gezeigt wird?
- Warum ist es wichtig, alle States zurückzusetzen wenn "Nochmal spielen" geklickt wird?
- Was würde passieren, wenn du punkte nicht zurücksetzen würdest?

**Checkpoint:** ✅ Punkte werden gezählt, Ergebnis-Screen wird am Ende angezeigt, Quiz kann neu gestartet werden.

---

### Tag 7: Vollständiges Styling & Design

**Ziel:** Das Quiz sieht professionell und ansprechend aus!

**Aufgaben:**
1. Verbesser das Gesamt-Design (App.css)
2. Füge Animationen hinzu (Fragen einblenden)
3. Mache das Quiz responsive (funktioniert auf Handy)
4. Poliere die Benutzerfreundlichkeit

#### Schritt 1: App.css verbessern

<details>
<summary>✅ Lösung: Verbesserte App.css</summary>

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#root {
  min-height: 100vh;
}

.app {
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.app h1 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .app h1 {
    font-size: 2rem;
  }
}
```
</details>

#### Schritt 2: Animationen zur Quiz-Komponente

Aktualisiere deine `Quiz.css`:

```css
/* Animation beim Laden der Frage */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.quiz {
  animation: fadeIn 0.5s ease-out;
}

.frage-text {
  animation: slideDown 0.6s ease-out;
}

.antworten {
  animation: fadeIn 0.6s ease-out 0.2s both;
}
```

#### Schritt 3: Responsive Design

```css
/* Für kleinere Bildschirme */
@media (max-width: 768px) {
  .quiz {
    padding: 20px;
  }
  
  .frage-text {
    font-size: 1.2rem;
  }
  
  .antwort-button {
    padding: 10px 14px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .quiz {
    padding: 15px;
  }
  
  .frage-text {
    font-size: 1rem;
  }
  
  .antwort-button {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
}
```

**Checkpoint:** ✅ Das Quiz sieht professionell aus und funktioniert auf verschiedenen Geräten!

---

### Tag 8: Zusätzliche Features

**Ziel:** Mache dein Quiz besonders mit zusätzlichen Features!

**Aufgaben:**
1. Implementiere 1-2 Bonus-Features
2. Teste das komplette Quiz
3. Bug-Fixes wenn nötig

#### Bonus-Feature 1: Timer pro Frage

**🧩 Deine Aufgabe:** Implementiere einen Timer, der jede Frage begrenzt.

<details>
<summary>💡 Tipp: setInterval mit useEffect</summary>

```jsx
useEffect(() => {
  if (antwortGegeben || timerAbgelaufen) return;
  
  const interval = setInterval(() => {
    setZeit(z => z - 1);
  }, 1000);
  
  return () => clearInterval(interval);  // Aufräumen!
}, [antwortGegeben, timerAbgelaufen]);
```

**Wichtig:** Der Cleanup-Funktion (`return () => clearInterval(interval)`) ist essentiell, sonst läuft der Timer weiter!
</details>

<details>
<summary>✅ Lösung: Timer-Implementation</summary>

```jsx
import { useState, useEffect } from 'react';

const MAX_ZEIT = 15;  // 15 Sekunden pro Frage

function Quiz() {
  // ... vorherige States ...
  const [zeit, setZeit] = useState(MAX_ZEIT);
  const [timerAbgelaufen, setTimerAbgelaufen] = useState(false);
  
  // Timer-Effekt
  useEffect(() => {
    // Nicht wenn Antwort gegeben oder Zeit abgelaufen
    if (antwortGegeben || timerAbgelaufen) return;
    
    const interval = setInterval(() => {
      setZeit(z => z - 1);
    }, 1000);
    
    return () => clearInterval(interval);  // Cleanup!
  }, [antwortGegeben, timerAbgelaufen]);
  
  // Wenn Zeit == 0
  useEffect(() => {
    if (zeit === 0 && !antwortGegeben) {
      setTimerAbgelaufen(true);
    }
  }, [zeit, antwortGegeben]);
  
  function handleNaechsteFrage() {
    setAktuelleFrageNummer(aktuelleFrageNummer + 1);
    setAntwortGegeben(false);
    setGeklickteAntwort(null);
    setZeit(MAX_ZEIT);
    setTimerAbgelaufen(false);
  }
  
  // Im JSX:
  <div className={`timer ${zeit <= 5 ? 'warnung' : ''}`}>
    Zeit: {zeit}s
  </div>
}
```

Und das CSS:
```css
.timer {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.timer.warnung {
  color: #e74c3c;
  animation: blink 0.5s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.7; }
}
```
</details>

#### Bonus-Feature 2: Highscore mit LocalStorage

**🧩 Deine Aufgabe:** Speichere den besten Score.

<details>
<summary>✅ Lösung: Highscore-Implementation</summary>

```jsx
import { useState, useEffect } from 'react';

function Quiz() {
  // ... andere States ...
  const [highscore, setHighscore] = useState(0);
  
  // Beim Laden: Highscore aus LocalStorage laden
  useEffect(() => {
    const gespeichert = localStorage.getItem('quiz-highscore');
    if (gespeichert) {
      setHighscore(parseInt(gespeichert));
    }
  }, []);
  
  function handleNochmalSpielen() {
    // Prüfe ob neuer Highscore
    if (punkte > highscore) {
      setHighscore(punkte);
      localStorage.setItem('quiz-highscore', punkte.toString());
    }
    
    // Reset
    setAktuelleFrageNummer(0);
    setAntwortGegeben(false);
    setGeklickteAntwort(null);
    setPunkte(0);
  }
  
  // Im JSX:
  <p className="highscore">Highscore: {highscore}</p>
}
```
</details>

#### Bonus-Feature 3: Fragen mischen

```jsx
// Fisher-Yates Shuffle
function mischeArray(array) {
  const gemischt = [...array];
  for (let i = gemischt.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gemischt[i], gemischt[j]] = [gemischt[j], gemischt[i]];
  }
  return gemischt;
}

// Im Quiz:
const [fragen, setFragen] = useState(() => mischeArray(alleFragen));
```

**Checkpoint:** ✅ Mindestens 1-2 Bonus-Features sind implementiert!

---

### Tag 9: Testen & Debugging

**Ziel:** Das Quiz funktioniert fehlerfrei!

**Aufgaben:**
1. **Normale Spielweise testen:** Alle Fragen beantworten und Ergebnis prüfen
2. **Schnelle Klicks:** Was passiert wenn man schnell mehrmals klickt?
3. **Edge Cases:** Was wenn Timer abläuft?
4. **Mobile Ansicht:** Funktioniert es auf Handy?
5. **Browser-Konsole:** Gibt es Fehler (F12)?

<details>
<summary>💡 Checkliste zum Testen</summary>

- [ ] Quiz startet korrekt
- [ ] Fragen werden der Reihe nach angezeigt
- [ ] Richtige Antworten werden grün markiert
- [ ] Falsche Antworten werden rot markiert
- [ ] Richtige Antwort wird bei falscher Antwort angezeigt
- [ ] Punkte-Zähler stimmt
- [ ] Fortschrittsbalken bewegt sich richtig
- [ ] Nach der letzten Frage kommt der Ergebnis-Screen
- [ ] Ergebnis-Screen zeigt korrekte Punkte und Prozentsatz
- [ ] "Nochmal spielen" funktioniert und setzt alles zurück
- [ ] Keine Fehler in der Konsole (F12)
- [ ] Funktioniert auf Handy
- [ ] Alle Bonus-Features funktionieren
</details>

**Häufige Probleme und Lösungen:**

<details>
<summary>❌ Problem: Punkte stimmen nicht</summary>

**Ursache:** Punkte werden nicht korrekt erhöht.

**Lösung:** Prüfe in `handleAntwortKlick`:
```jsx
if (geklickterAntwortenIndex === aktuelleFrageObjekt.richtigeAntwort) {
  setPunkte(punkte + 1);  // ← Muss hier sein!
}
```

Wichtig: Der Check muss mit dem **Index** der richtigen Antwort vergleichen, nicht dem Text!
</details>

<details>
<summary>❌ Problem: Mehrere Antworten möglich</summary>

**Ursache:** Buttons sind nicht deaktiviert.

**Lösung:** Prüfe dass `disabled={antwortGegeben}` auf dem Button ist:
```jsx
<button 
  disabled={antwortGegeben}  // ← Muss hier sein!
  onClick={() => handleAntwortKlick(index)}
>
```

Und am Anfang der Funktion:
```jsx
function handleAntwortKlick(geklickterAntwortenIndex) {
  if (antwortGegeben) return;  // ← Sicherheit!
```
</details>

<details>
<summary>❌ Problem: Quiz endet nie</summary>

**Ursache:** Die Abfrage für `quizVorbei` ist falsch.

**Lösung:** Prüfe:
```jsx
// ✅ RICHTIG: Wenn Frage-Index größer als letzte Frage
const quizVorbei = aktuelleFrageNummer === fragen.length;

// In handleNaechsteFrage:
if (aktuelleFrageNummer < fragen.length - 1) {
  // Zur nächsten
  setAktuelleFrageNummer(aktuelleFrageNummer + 1);
} else {
  // Quiz vorbei, wird beim Render erkannt!
}
```
</details>

**Checkpoint:** ✅ Das Quiz funktioniert fehlerfrei!

---

### Tag 10: Finalisierung & Präsentation

**Aufgaben:**
1. Letzte Polierungen vornehmen
2. Code aufräumen und kommentieren
3. Mehrere Durchläufe testen
4. Kurze Präsentation vorbereiten

**Für die Präsentation:**
- Zeige das Quiz in Aktion (ein kompletten Durchlauf)
- Erkläre wie die Logik funktioniert:
  - Wie wird richtig/falsch erkannt?
  - Wie funktionieren die States?
  - Wie wird der Punktestand mitgezählt?
- Zeige dein Bonus-Feature
- Was war die größte Herausforderung?

---

## 📁 Empfohlene Dateistruktur am Ende

```
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx
│   │   ├── Quiz.css
│   │   ├── Ergebnis.jsx
│   │   ├── Ergebnis.css
│   │   └── Fortschritt.jsx (optional)
│   ├── data/
│   │   └── fragen.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
└── package.json
```

---

## ✅ Checkliste zur Selbstkontrolle

- [ ] Mindestens 10 Fragen sind vorhanden
- [ ] Fragen werden nacheinander angezeigt
- [ ] Richtige/falsche Antworten werden erkannt und farblich markiert
- [ ] Die richtige Antwort wird bei falscher Antwort gezeigt
- [ ] Buttons sind deaktiviert nachdem eine Antwort gegeben wurde
- [ ] Der Punktestand wird korrekt gezählt
- [ ] Ein Fortschrittsbalken zeigt den Fortschritt
- [ ] Am Ende erscheint ein Ergebnis-Screen mit Score und Bewertung
- [ ] "Nochmal spielen" setzt das Quiz korrekt zurück
- [ ] Das Design ist ansprechend und responsive
- [ ] Es gibt Animationen (z.B. Fragen einblenden)
- [ ] Mindestens 1-2 Bonus-Features sind implementiert
- [ ] Das Quiz funktioniert auf Handy und Desktop

---

## 🔧 Häufige Fehler und Lösungen

### "Die Punkte werden nicht korrekt gezählt"
**Problem:** Punkte werden zu früh, zu spät oder gar nicht erhöht.
```jsx
// ❌ FALSCH - falsche Vergleichsreihenfolge
if (aktuelleFrageObjekt.richtigeAntwort === geklickterAntwortenIndex) {
  // Das funktioniert, aber ist verwirrend
}

// ✅ RICHTIG - klar lesen
if (geklickterAntwortenIndex === aktuelleFrageObjekt.richtigeAntwort) {
  setPunkte(punkte + 1);
}
```

### "Alle Buttons sind immer rot oder grün"
**Problem:** Die CSS-Klasse wird nicht korrekt zugewiesen.
```jsx
// ❌ FALSCH
className={index === aktuelleFrageObjekt.richtigeAntwort ? "richtig" : "falsch"}

// ✅ RICHTIG - nur wenn geantwortet wurde
if (antwortGegeben) {
  if (index === aktuelleFrageObjekt.richtigeAntwort) {
    buttonKlasse += " richtig";
  } else if (index === geklickteAntwort) {
    buttonKlasse += " falsch";
  }
}
```

### "Quiz endet nach 2-3 Fragen"
**Problem:** Die Bedingung für `quizVorbei` ist falsch.
```jsx
// ❌ FALSCH
const quizVorbei = aktuelleFrageNummer > fragen.length;

// ✅ RICHTIG
const quizVorbei = aktuelleFrageNummer === fragen.length;
```

### "Nächste-Button macht nichts"
**Problem:** Die Funktion erhöht die Frage-Nummer nicht korrekt.
```jsx
// ❌ FALSCH - versteckte Logik
if (aktuelleFrageNummer < fragen.length) {
  setAktuelleFrageNummer(aktuelleFrageNummer + 1);
}

// ✅ RICHTIG - klar und deutlich
if (aktuelleFrageNummer < fragen.length - 1) {
  setAktuelleFrageNummer(aktuelleFrageNummer + 1);
}
```

### "Timer läuft immer weiter oder stoppt nicht"
**Problem:** `useEffect` ist nicht korrekt konfiguriert.
```jsx
// ❌ FALSCH - Dependency Array fehlt
useEffect(() => {
  setInterval(() => setZeit(z => z - 1), 1000);
});

// ✅ RICHTIG - mit Cleanup und Dependencies
useEffect(() => {
  if (antwortGegeben) return;
  
  const interval = setInterval(() => setZeit(z => z - 1), 1000);
  return () => clearInterval(interval);  // ← Wichtig!
}, [antwortGegeben]);
```

### "Bei 'Nochmal spielen' funktioniert das Highscore nicht"
**Problem:** Der neue Score wird nicht mit dem alten verglichen.
```jsx
// ✅ RICHTIG
if (punkte > highscore) {
  setHighscore(punkte);
  localStorage.setItem('quiz-highscore', punkte.toString());
}
```

---

## 🔗 Hilfreiche Links für dieses Projekt

- **React Dokumentation:** https://de.react.dev/
- **useState:** https://de.react.dev/reference/react/useState
- **useEffect:** https://de.react.dev/reference/react/useEffect
- **Bedingte Ausgabe:** https://de.react.dev/learn/conditional-rendering
- **Listen rendern:** https://de.react.dev/learn/rendering-lists
- **LocalStorage:** https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
- **CSS Animationen:** https://developer.mozilla.org/de/docs/Web/CSS/CSS_Animations
- **CSS Grid für Layout:** https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout

---

## 💡 Quiz-Themen Inspiration

- 🎮 **Gaming:** Fragen zu beliebten Spielen, Konsolen, Entwicklern
- ⚽ **Sport:** Fußball-Fakten, Olympische Spiele, Rekorde
- 🎵 **Musik:** Künstler, Lieder, Jahrzehnte der Musik
- 🎬 **Filme & Serien:** Marvel, Harry Potter, Netflix-Hits
- 🌍 **Geografie:** Länder, Hauptstädte, Flaggen, Landschaften
- 🔬 **Wissenschaft:** Physik, Biologie, Chemie, Astronomie
- 💻 **Programmierung:** HTML, CSS, JavaScript, Web-Entwicklung
- 📚 **Bücher:** Harry Potter, Lord of the Rings, Klassiker
- 🍕 **Food & Getränke:** Länderküchen, Rezepte, Getränke
- 🏛️ **Geschichte:** Antike, Mittelalter, Neuzeit, berühmte Ereignisse

---

**Viel Spaß beim Erstellen deiner Quiz-App!** 🎯
