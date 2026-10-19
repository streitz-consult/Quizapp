function Highscore({ setHighscoreAnzeige,setHintergrundfarbe}) {
    let HighscoreEinfach = localStorage.getItem("HighscoreEinfach")
    let HighscoreMittel = localStorage.getItem("HighscoreMittel")
    let HighscoreSchwierig = localStorage.getItem("HighscoreSchwierig")
    let HighscoreAlle = localStorage.getItem("HighscoreAlles")


    if (HighscoreEinfach != null) {
        HighscoreEinfach = JSON.parse(HighscoreEinfach)
    }
    else {
        HighscoreEinfach = []
    }
    if (HighscoreMittel != null) {
        HighscoreMittel = JSON.parse(HighscoreMittel)
    }
    else {
        HighscoreMittel = []
    }
    if (HighscoreSchwierig != null) {
        HighscoreSchwierig = JSON.parse(HighscoreSchwierig)
    }
    else {
        HighscoreSchwierig = []
    }
    if (HighscoreAlle != null) {
        HighscoreAlle = JSON.parse(HighscoreAlle)
    }
    else {
        HighscoreAlle = []
    }
    return (
        <div className="highscore-wrapper">
            <h1 id="HighscoreUeberschrieft">
                Highscores
            </h1>
            <div>
                <button className="highscore-zurueck-btn" onClick={() => {setHighscoreAnzeige(false)}}>
                    Zurück
                </button>
            </div>
            <div className="HighscoreTabellen">
                <div className="Einfache TabellenBereich">
                    <h2>Einfach</h2>
                    <table className="Tabellen">
                        <thead>
                            <tr>
                                <th>
                                    Benutzername
                                </th>
                                <th>
                                    Prozentsatz
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {HighscoreEinfach.map((element,index) => {
                                return (
                                    <tr key={"Einfach"+index}>
                                        <td>
                                            {element.benutzername}
                                        </td>
                                        <td>
                                            {element.prozentsatz}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="Mittel TabellenBereich">
                    <h2>Mittel</h2>
                    <table className="Tabellen">
                        <thead>
                            <tr>
                                <th>
                                    Benutzername
                                </th>
                                <th>
                                    Prozentsatz
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {HighscoreMittel.map((element,index) => {
                                return (
                                    <tr  key={"Mittel"+index}>
                                        <td>
                                            {element.benutzername}
                                        </td>
                                        <td>
                                            {element.prozentsatz}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="Schwierig TabellenBereich">
                    <h2>Schwierig</h2>
                    <table className="Tabellen">
                        <thead>
                            <tr>
                                <th>
                                    Benutzername
                                </th>
                                <th>
                                    Prozentsatz
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {HighscoreSchwierig.map((element,index) => {
                                return (
                                    <tr  key={"Schwierig"+index}>
                                        <td>
                                            {element.benutzername}
                                        </td>
                                        <td>
                                            {element.prozentsatz}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
                <div className="Alle TabellenBereich">
                    <h2>Alle Fragen</h2>
                    <table className="Tabellen">
                        <thead>
                            <tr>
                                <th>
                                    Benutzername
                                </th>
                                <th>
                                    Prozentsatz
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {HighscoreAlle.map((element,index) => {
                                return (
                                    <tr  key={"Alles"+index}>
                                        <td>
                                            {element.benutzername}
                                        </td>
                                        <td>
                                            {element.prozentsatz}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Highscore