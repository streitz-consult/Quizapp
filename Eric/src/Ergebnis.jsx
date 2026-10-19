import { useEffect, useState } from "react";

function Ergebnis({
    setRichtig,
    richtig,
    fragen,
    setAntwortGegeben,
    setAktuelleFrageNummer,
    benutzername,
    setBenutzername,
    aktuelleFrageNummer,
    schwierigkeit,
    setHighscoreAnzeige
}) {

    const [test, setTest] = useState(true);
    const prozentsatz = (richtig / aktuelleFrageNummer) * 100;

    let emoji = "";
    let nachricht = "";
    let bewertung = "";


    if (prozentsatz >= 100) {
        emoji = "💯";
        nachricht = "Besser kann man dieses Quiz nicht machen!";
        bewertung = "Perfekt";
    } else if (prozentsatz >= 90) {
        emoji = "🥇";
        nachricht = "Das ist beeindruckend sehr gut gemacht!";
        bewertung = "Sehr gut";
    } else if (prozentsatz >= 85) {
        emoji = "👍";
        nachricht = "Weiter so!";
        bewertung = "Gut";
    } else if (prozentsatz >= 70) {
        emoji = "😐";
        nachricht = "Das kannst du besser";
        bewertung = "Befriedigend";
    } else if (prozentsatz >= 50) {
        emoji = "⚠️";
        nachricht = "Nächstes Mal bestimmt";
        bewertung = "Ausreichend";
    } else if (prozentsatz >= 25) {
        emoji = "😢";
        nachricht = "Warum hast du nicht mehr gelernt?";
        bewertung = "Mangelhaft";
    } else {
        emoji = "🚨";
        nachricht = "Das war leider nichts!";
        bewertung = "Ungenügend";
    }
    const HighscoreSpeichern = function () {
        if (test){
            let HighscoreListeLS = localStorage.getItem("Highscore" + schwierigkeit)
            let HighscoreListe = JSON.parse(HighscoreListeLS)

            if (HighscoreListe != null) {
                if (HighscoreListe.length == 0) {
                    HighscoreListe.push({ benutzername: benutzername, prozentsatz: Math.round(prozentsatz)+"%" })
                }
                else {
                    let Eingetragen=false
                    for (let i = 0; i < HighscoreListe.length; i = i + 1) {
                        if (prozentsatz >= HighscoreListe[i].prozentsatz) {
                            HighscoreListe.splice(i, 0, { benutzername: benutzername, prozentsatz: Math.round(prozentsatz)+"%" })
                            Eingetragen=true
                            break;
                        }
                    }
                    if (Eingetragen==false){
                        HighscoreListe.push({ benutzername: benutzername, prozentsatz: Math.round(prozentsatz)+"%"})
                    }
                }
                let HighscoreListeJSON = JSON.stringify(HighscoreListe);
                localStorage.setItem("Highscore" + schwierigkeit, HighscoreListeJSON)
            }
            else {
                let HighscoreListeJSON = JSON.stringify([{ benutzername: benutzername, prozentsatz: Math.round(prozentsatz)+"%" }]);
                localStorage.setItem("Highscore" + schwierigkeit, HighscoreListeJSON)
            }
            setTest(false);
        }

    }

    const neustart = function () {
        setAntwortGegeben(false);
        setAktuelleFrageNummer(-1);
        setRichtig(0)
    }

    HighscoreSpeichern();

    return (
        <div id="ergebnis">
            <div className="ergebnis-card"></div>
            <h1 id="endNachricht">
                Spiel vorbei
            </h1>
            <div id="wieVieleFragenRichtig">
                <h3>
                    {benutzername} hat {richtig} von {aktuelleFrageNummer} Fragen richtig beantwortet!
                </h3>
                <div>
                    <p>{nachricht}</p>
                </div>
                <p>
                    {Math.round(prozentsatz)}% {bewertung}
                </p>
            </div>

            <div id="emoji">
                {emoji}
            </div>
            <div>
                <button id="resetQuiz" onClick={neustart}>
                    Neustart
                </button>
            </div>
            <div>
                <button id="HighscoreButton" onClick={() => setHighscoreAnzeige(true)}>
                    Highscore
                </button>
            </div>
        </div>

    );
}



export default Ergebnis;