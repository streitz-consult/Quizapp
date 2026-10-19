import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Quiz from './Quiz.jsx'
import fragenkatalog from "./data/fragen";
import Ergebnis from './Ergebnis.jsx'
import StartScreen from './Start.jsx'
import Highscore from './Highscore.jsx'

const maxZeit = 15



function App() {
  const [cheats, setCheats] = useState(false)
  const [maxZeitFrage, setMaxZeitFrage] = useState(15)
  const [hintergrundfarbe, setHintergrundfarbe] = useState("")
  const [HighscoreAnzeige, setHighscoreAnzeige] = useState(false)
  const [zeit, setZeit] = useState(maxZeit);
  const [timerabgelaufen, setTimerabgelaufen] = useState(false)
  const [aktuelleFrageNummer, setAktuelleFrageNummer] = useState(-1);
  const [antwortGegeben, setAntwortGegeben] = useState(false);
  const [geklickteAntwort, setGeklickteAntwort] = useState(null);
  const [richtig, setRichtig] = useState(0);
  const [fragen, setFragen] = useState(fragenkatalog.slice(0, 10));
  const [benutzername, setBenutzername] = useState("");
  const [schwierigkeit, setSchwierigkeit] = useState("")

  useEffect(() => {
    if (zeit == 0 && antwortGegeben == false) {
      setTimerabgelaufen(true)
      setAntwortGegeben(true)
    }
  }, [zeit, antwortGegeben])

  useEffect(() => {
    if (antwortGegeben == true || timerabgelaufen == true || aktuelleFrageNummer == -1) {
      return;
    }
    const interval = setInterval(() => {
      setZeit(oldzeit => oldzeit - 1)
    }, 1000)

    return () => {
      clearInterval(
        interval
      )
    }
  }, [antwortGegeben, timerabgelaufen, aktuelleFrageNummer])


  useEffect(() => {
    let Gefundenefragen = [];
    if (schwierigkeit == "Alles") {
      Gefundenefragen = fragenkatalog
    }
    else {
      for (let i = 0; i < fragenkatalog.length; i = i + 1) {
        if (schwierigkeit == fragenkatalog[i].schwierigkeit) {
          Gefundenefragen.push(fragenkatalog[i])
        }
      }
    }
    for (let i = 0; i < Gefundenefragen.length; i++) {
      Gefundenefragen[i].moegliche_antwort = mischeArray(Gefundenefragen[i].moegliche_antwort)
    }
    Gefundenefragen = mischeArray(Gefundenefragen)
    setFragen(Gefundenefragen)
  }, [schwierigkeit])



  function mischeArray(array) {
    const gemischt = [...array];
    for (let i = gemischt.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gemischt[i], gemischt[j]] = [gemischt[j], gemischt[i]];
    }
    return gemischt;
  }


  if (HighscoreAnzeige == true) {
    return (
      <Highscore
        setHintergrundfarbe={setHintergrundfarbe}
        setSchwierigkeit={setSchwierigkeit}
        setHighscoreAnzeige={setHighscoreAnzeige}
      >
      </Highscore>
    )
  }


  if (aktuelleFrageNummer == -1) {
    return (
      <StartScreen
        setCheats={setCheats}
        hintergrundfarbe={hintergrundfarbe}
        setHintergrundfarbe={setHintergrundfarbe}
        setHighscoreAnzeige={setHighscoreAnzeige}
        setAktuelleFrageNummer={setAktuelleFrageNummer}
        benutzername={benutzername}
        schwierigkeit={schwierigkeit}
        setBenutzername={setBenutzername}
        setSchwierigkeit={setSchwierigkeit}
        setZeit={setZeit}
        setTimerabgelaufen={setTimerabgelaufen}
        maxZeit={maxZeit}
      >
      </StartScreen>
    )
  }

  if (aktuelleFrageNummer == fragen.length) {
    return (
      <Ergebnis
        setHighscoreAnzeige={setHighscoreAnzeige}
        schwierigkeit={schwierigkeit}
        setZeit={setZeit}
        setTimerabgelaufen={setTimerabgelaufen}
        richtig={richtig}
        fragen={fragen}
        benutzername={benutzername}
        setBenutzername={setBenutzername}
        setRichtig={setRichtig}
        setAntwortGegeben={setAntwortGegeben}
        setAktuelleFrageNummer={setAktuelleFrageNummer}
        aktuelleFrageNummer={aktuelleFrageNummer}
      >
      </Ergebnis>
    )
  }
  const zeitInProzent = (zeit / maxZeitFrage) * 100;


  return (
    <>

      <FrageAnzeige
        setMaxZeitFrage={setMaxZeitFrage}
        setZeit={setZeit}
        setTimerabgelaufen={setTimerabgelaufen}
        aktuelleFrageNummer={aktuelleFrageNummer}
        setAktuelleFrageNummer={setAktuelleFrageNummer}
        setAntwortGegeben={setAntwortGegeben}
        antwortGegeben={antwortGegeben}
        setRichtig={setRichtig}
        fragen={fragen}
      />
      <Quiz
        cheats={cheats}
        zeit={zeit}
        schwierigkeit={schwierigkeit}
        aktuelleFrageNummer={aktuelleFrageNummer}
        setAktuelleFrageNummer={setAktuelleFrageNummer}
        setAntwortGegeben={setAntwortGegeben}
        setRichtig={setRichtig}
        richtig={richtig}
        antwortGegeben={antwortGegeben}
        fragen={fragen}
        setFragen={setFragen}
        geklickteAntwort={geklickteAntwort}
        setGeklickteAntwort={setGeklickteAntwort}
      />
      <div className="timer-container">
        <div
          className="timer-balken"
          style={{ width: `${zeitInProzent}%` }}
          data-prozent={zeitInProzent}
        />
      </div>
    </>
  )
}



//


// Eine Komponente mit Parameter (Props)
function FrageAnzeige({
  antwortGegeben, setAntwortGegeben, setMaxZeitFrage, setZeit, setTimerabgelaufen, aktuelleFrageNummer, setAktuelleFrageNummer, setRichtig, richtig, fragen
}) {
  const naechsteFrage = () => {

    setAktuelleFrageNummer(aktuelleFrageNummer + 1);
    if (aktuelleFrageNummer + 1!=fragen.length){
      switch (fragen[aktuelleFrageNummer + 1].schwierigkeit) {
      case "Schwierig":
        setZeit(Math.round(maxZeit*2.5));
        setMaxZeitFrage(Math.round(maxZeit*2.5))
        break;
      case "Mittel":
        setZeit(Math.round(maxZeit*1.5));
        setMaxZeitFrage(Math.round(maxZeit*1.5))
        break;
      default:
        setZeit(maxZeit);
        setMaxZeitFrage(maxZeit)
        break;
    }}
    
    setTimerabgelaufen(false);
    setAntwortGegeben(false);

  };
  const komplettNeuStarten = () => {
    setAktuelleFrageNummer(0);
    switch (fragen[aktuelleFrageNummer + 1].schwierigkeit) {
      case "Schwierig":
        setZeit(Math.round(maxZeit*2.5));
        setMaxZeitFrage(Math.round(maxZeit*2.5))
        break;
      case "Mittel":
        setZeit(Math.round(maxZeit*1.5));
        setMaxZeitFrage(Math.round(maxZeit*1.5))
        break;
      default:
        setZeit(maxZeit);
        setMaxZeitFrage(maxZeit)
        break;
    }
    setTimerabgelaufen(false);
    setAntwortGegeben(false);
    setRichtig(0)
  };
  useEffect(() => {
    switch (fragen[aktuelleFrageNummer + 1].schwierigkeit) {
      case "Schwierig":
        setZeit(Math.round(maxZeit*2.5));
        setMaxZeitFrage(Math.round(maxZeit*2.5))
        break;
      case "Mittel":
        setZeit(Math.round(maxZeit*1.5));
        setMaxZeitFrage(Math.round(maxZeit*1.5))
        break;
      default:
        setZeit(maxZeit);
        setMaxZeitFrage(maxZeit)
        break;
    }
  }, [])
  return (
    <div id="buttonNundA"  >
      <p id="aktuelleFrage">Aktuelle Frage: {aktuelleFrageNummer + 1}</p>
      <div id="zweiButton">

        {/*Button für Nächste Frage oder Weiter Button*/}
        <button id="naechsteFrage" onClick={naechsteFrage}
          disabled={!antwortGegeben}>
          Nächste Frage
        </button>

        {/*Button für Alles zurücksetzen oder Neustart Button*/}
        <button id="allesZurueck" onClick={komplettNeuStarten}
          disabled={aktuelleFrageNummer <= 0}>
          Alles zurücksetzen
        </button>


      </div>
    </div>
  );
}

document.addEventListener('keydown', function (event) {

  if (event.key === 'Enter' || event.key === 'Shift') {

    const button = document.getElementById('naechsteFrage');
    if (button) {
      button.click();
    }
  }
});

document.addEventListener('keydown', function (event) {

  if (event.key === 'r' || event.key === 'R') {

    const button = document.getElementById('allesZurueck'); 1
    if (button) {
      button.click();
    }
  }
});

document.addEventListener('keydown', function (event) {

  if (event.key === 'r' || event.key === 'R') {

    const button = document.getElementById(''); 1
    if (button) {
      button.click();
    }
  }
});

export default App;