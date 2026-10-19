import { useState } from "react";
import WischAnimation from "./WischAnimation";



function Quiz({ aktuelleFrageNummer,cheats, setAktuelleFrageNummer, schwierigkeit,zeit, antwortGegeben, setAntwortGegeben, geklickteAntwort, setGeklickteAntwort, setRichtig, richtig, fragen, setFragen }) {
    const aktuelleFrageObjekt = fragen[aktuelleFrageNummer];

    const setAntwort = function (antwort) {
        if (antwort == aktuelleFrageObjekt.antwort) {
            setRichtig(richtig + 1)
        }


        setAntwortGegeben(true)
        setGeklickteAntwort(antwort)
    }

    return (
        <div>
            <div id="aktuelle_frage" key={aktuelleFrageObjekt.frage}>
                {aktuelleFrageObjekt.frage}
            </div>
            <WischAnimation aktuelleFrageNummer={aktuelleFrageNummer}>
                <Antworten
                    cheats={cheats}
                    setAntwort={setAntwort}
                    aktuelleFrage={aktuelleFrageObjekt}
                    antwortGegeben={antwortGegeben}
                    geklickteAntwort={geklickteAntwort}
                />
            </WischAnimation>
            <Punktestand richtig={richtig}></Punktestand>
            <div>
                Zeit:{zeit}
            </div>
        </div>
    )


}
function Antworten({ aktuelleFrage,cheats, setAntwort, antwortGegeben, geklickteAntwort }) {
    return (
        <div id="antworten">
            {aktuelleFrage.moegliche_antwort.map((antwort, index) => {
                return (
                    <button
                        key={index}
                        className="ButtonAntwort"
                        disabled={antwortGegeben}
                        data-zustand={antwortGegeben ? (aktuelleFrage.antwort == antwort ? "richtig" : "falsch") : "offen"}
                        onClick={() => setAntwort(antwort)}
                    >
                        { (cheats==true && aktuelleFrage.antwort==antwort) ? "**  " + antwort+ "  **":antwort}
                    </button>
                )
            })}
        </div>
    )
}
function Punktestand({ richtig }) {
    return (
        <div id="Punkte">
            Aktuelle Punkte: {richtig}
        </div>

    )
}


export default Quiz;