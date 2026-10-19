
function StartScreen({ schwierigkeit, setSchwierigkeit,setCheats, benutzername, setBenutzername, setAktuelleFrageNummer,setZeit,maxZeit,setHighscoreAnzeige,setHintergrundfarbe,hintergrundfarbe}) {
    
    return (
        <div id="Startscreen" data-gewaehlt={hintergrundfarbe}>
            <h1>
                Herzlich willkommen zu Eric's Quiz
            </h1>
            <div id="BenutzernameEingeben">
                <label >
                    Benutzername eingeben:
                </label>
                <input id="Benutzername" value={benutzername} onChange={(event) => {setBenutzername(event.currentTarget.value);if(event.currentTarget.value=="Bestes Quiz"){setCheats(true)}else{setCheats(false)}}}>
                </input>
            </div>
            <div>
                <label  id="SchwierigkeitsgradAuswählen">
                    Schwierigkeitsgrad auswählen:
                </label>
                <div>
                    <button onClick={() => {setSchwierigkeit("Einfach");setHintergrundfarbe("Einfach")}} data-zustand={schwierigkeit == "Einfach"} className="SchwierigkeitsButton">
                        Einfach✅
                    </button >
                    <button onClick={() => {setSchwierigkeit("Mittel");setHintergrundfarbe("Mittel")}} data-zustand={schwierigkeit == "Mittel"} className="SchwierigkeitsButton">
                        Mittel👍
                    </button>
                    <button onClick={() => {setSchwierigkeit("Schwierig");setHintergrundfarbe("Schwierig")}} data-zustand={schwierigkeit == "Schwierig"} className="SchwierigkeitsButton">
                        Schwer⛔
                    </button>
                    <button onClick={() => {setSchwierigkeit("Alles");setHintergrundfarbe("Alles")}} data-zustand={schwierigkeit == "Alles"} className="SchwierigkeitsButton">
                        Alle Fragen
                    </button>
                </div>
            </div>
            <div>
                <button disabled={benutzername.trim() === "" || schwierigkeit === "" || hintergrundfarbe==="Ice"}
                 id="SpielstartButton" onClick={() => { setAktuelleFrageNummer(0);setZeit(maxZeit);}}>
                    Spiel starten
                </button>
            </div>
            <div>
                <button id="HighscoreButton" onClick={() => setHighscoreAnzeige(true)}>
                    Highscore
                </button>
            </div>
        </div>
    )
}

export default StartScreen;