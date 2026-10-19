const fragen = [
    {// Eifache Frage 1
        frage: "Welches Säugetier kann nicht springen?",
        antwort: "Elefant",
        moegliche_antwort: ["Nilpferd (Flusspferd)", "Nashorn", "Elefant", "Schlange"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 2
        frage: "Wie viele Planeten hat unser Sonnensystem?",
        antwort: "8",
        moegliche_antwort: ["9", "12", "7", "8"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 3
        frage: "Wie viele Planquadrate bzw. Felder hat ein Schachbrett insgesamt?",
        antwort: "64",
        moegliche_antwort: ["64", "48", "56", "40"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 4
        frage: "In welcher Schicht der Erdatmosphäre findet das wesentliche Wettergeschehen statt?",
        antwort: "Troposphäre",
        moegliche_antwort: ["Stratosphäre", "Troposphäre", "Mesosphäre", "Thermosphöre"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 5
        frage: "Was ist das kleinste Land der Welt",
        antwort: "Vatikanstaat",
        moegliche_antwort: ["Lichtenstein", "Monaco", "Vatikanstaat", "Nauru"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 6
        frage: "Welches Element hat das chemische Symbol O?",
        antwort: "Sauerstoff",
        moegliche_antwort: ["Sauerstoff", "Helium", "Stickstoff", "Wasserstoff"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 7
        frage: "Wie viele Herzen hat ein Krake?",
        antwort: "3",
        moegliche_antwort: ["3", "4", "1", "2"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 8
        frage: "Wie viele Zähne hat das bleibende Gebiss eines erwachsenen Menschen (inklusive Weisheitszähne)?",
        antwort: "32",
        moegliche_antwort: ["28", "30", "36", "32"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 9
        frage: "Welcher Ozean ist der tiefste und gleichzeitig größte der Erde?",
        antwort: "Pazifischer Ozean",
        moegliche_antwort: ["Pazifischer Ozean", "Indischer Ozean", "Arktischer Ozean", "Atlantischer Ozean"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 10
        frage: `Welche Programmiersprache,
         die heute eine der meistgenutzten der Welt ist,
          wurde ursprünglich unter dem Namen „Oak“ entwickelt?`,
        antwort: "Java",
        moegliche_antwort: [" C++", "Python", "Java", "JavaScript"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 11
        frage: "Welches Bauteil gilt als das „Gehirn“ eines Computers und führt die Hauptrechenoperationen aus?",
        antwort: "CPU",
        moegliche_antwort: ["RAM", "GPU", "CPU", "SSD"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 12
        frage: "Welcher Planet unseres Sonnensystems besitzt die meisten bekannten Monde (über 140)?",
        antwort: "Saturn",
        moegliche_antwort: ["Saturn", "Neptun", "Mars", "Jupiter"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 13
        frage: `Welches Kabel wird am häufigsten verwendet,
         um eine stabile,
          kabelgebundene Internetverbindung zwischen einem Router und einem PC herzustellen?`,
        antwort: "Ethernet-Kabel (LAN)",
        moegliche_antwort: ["HDMI-Kabel", "Ethernet-Kabel (LAN)", "USB-C-Kabel", "Koaxialkabel"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 14
        frage: "Was misst die Einheit „Hz“ (Hertz) bei einem modernen Smartphone- oder Gaming-Bildschirm?",
        antwort: "Die Bildwiederholrate pro Sekunde",
        moegliche_antwort: ["Die Bildwiederholrate pro Sekunde", "Die maximale Helligkeit", "Die Auflösung", "Die Reaktionszeit"],
        schwierigkeit: "Einfach"
    },
    {// Eifache Frage 15
        frage: "Wie nennt man in der Programmierung eine Fehlermeldung oder einen Programmfehler, der zu unerwartetem Verhalten führt?",
        antwort: "Bug",
        moegliche_antwort: ["Exploit", "Lag", "Glitch", "Bug"],
        schwierigkeit: "Einfach"//15 Einfache Fragen
    },
    {// Mittlere Frage 1
        frage: "Wie heißt die Hauptstadt von Australien?",
        antwort: "Canberra",
        moegliche_antwort: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 2
        frage: "Welcher Planet ist der Sonne am nächsten?",
        antwort: "Merkur",
        moegliche_antwort: ["Venus", "Mars", "Merkur", "Erde"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 3
        frage: "Wie viele Knochen hat ein erwachsener Mensch ungefähr?",
        antwort: "206",
        moegliche_antwort: ["206", "154", "300", "98"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 4
        frage: "Welches Organ im menschlichen Körper ist primär für die Regulierung des Salz- und Wasserhaushalts sowie die Filterung des Blutes zuständig?",
        antwort: "Die Niere",
        moegliche_antwort: ["Die Leber", "Die Niere", "Die Milz", "Die Bauchspeicheldrüse"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 5
        frage: "Gegen welchen IBM-Supercomputer verlor der Schachweltmeister Garri Kasparow im Jahr 1997 ein historisches Match?",
        antwort: "Deep Blue",
        moegliche_antwort: ["Watson", "AlphaGo", "Deep Blue", "Junior"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 6
        frage: "Wer war der erste gewählte Bundeskanzler der Bundesrepublik Deutschland nach dem Zweiten Weltkrieg?",
        antwort: "Konrad Adenauer",
        moegliche_antwort: ["Ludwig Erhard", "Willy Brandt", "Konrad Adenauer", "Helmut Schmidt"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 7
        frage: "Welches Element ist das leichteste und im Universum am häufigsten vorkommende chemische Element überhaupt?",
        antwort: "Wasserstoff",
        moegliche_antwort: ["Helium", "Sauerstoff", "Wasserstoff", "Stickstoff"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 8
        frage: "Wie viele Sinfonien komponierte Ludwig van Beethoven im Laufe seines Lebens, wobei die letzte die berühmte „Ode an die Freude“ im Finale enthält?",
        antwort: "9 Sinfonien",
        moegliche_antwort: ["5 Sinfonien", "9 Sinfonien", "41 Sinfonien", "104 Sinfonien"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 9
        frage: "Welcher ägyptische Gott mit dem Kopf eines Schakals gilt in der antiken Mythologie als Schutzpatron der Einbalsamierung und Führer der Seelen ins Totenreich?",
        antwort: "Anubis",
        moegliche_antwort: ["Osiris", "Horus", "Anubis", "Ra (Re)"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 10
        frage: "Wie heißt die größte Insel der Erde, die politisch als autonomes Gebiet zu Dänemark gehört?",
        antwort: "Grönland",
        moegliche_antwort: ["Grönland", "Madagaskar", "Australien", "Neuguinea"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 11
        frage: "Welches europäische Land erlebte im Jahr 1789 eine fundamentale Revolution, die die absolute Monarchie stürzte und das Prinzip der Menschenrechte proklamierte?",
        antwort: "Frankreich",
        moegliche_antwort: ["England", "Frankreich", "Russland", "Spanien"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 12
        frage: "Welches historische Gesetzeswerk aus dem Jahr 1900 bildet bis heute das Fundament des deutschen Zivilrechts?",
        antwort: "Bürgerliches Gesetzbuch (BGB)",
        moegliche_antwort: ["Allgemeines Landrecht (ALR)", "Bürgerliches Gesetzbuch (BGB)", "Code Civil", "Constitutio Criminalis Carolina"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 13
        frage: "Welcher Begriff beschreibt in der Volkswirtschaftslehre eine Marktsituation, bei der vielen Nachfragern (Käufern) nur ein einziger Anbieter gegenübersteht?",
        antwort: "Monopol",
        moegliche_antwort: ["Oligopol", "Polypol", "Monopol", "Monopson"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 14
        frage: "Wie nennt man im deutschen Verfassungsrecht das in Art. 79 Abs. 3 des Grundgesetzes verankerte Prinzip, das Änderungen an den Grundprinzipien der Verfassung (wie der Menschenwürde oder der Bundesstaatlichkeit) für immer verbietet?",
        antwort: "Ewigkeitsklausel",
        moegliche_antwort: ["Subsidiaritätsprinzip", "Verhältnismäßigkeitsprinzip", "Ewigkeitsklausel", "Bestimmtheitsgebot"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 15
        frage: "Wie nennt man das logische Schlussverfahren, bei dem aus spezifischen Einzelfällen oder Beobachtungen eine allgemeine Regel abgeleitet wird (was erkenntnistheoretisch niemals zu absoluter Gewissheit führt)?",
        antwort: "Induktion",
        moegliche_antwort: ["Deduktion", "Induktion", "Abduktion", "Syllogismus"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 16
        frage: "Welches physikalische Prinzip besagt, dass die Entropie in einem geschlossenen, isolierten System niemals abnehmen kann, wodurch Prozesse unumkehrbar (irreversibel) sind?",
        antwort: "Zweiter Hauptsatz der Thermodynamik",
        moegliche_antwort: ["Zweiter Hauptsatz der Thermodynamik", "Dritter Hauptsatz der Thermodynamik", "Vierter Hauptsatz der Thermodynamik", "Erster Hauptsatz der Thermodynamik"],
        schwierigkeit: "Schwierig"
    },
    {// Mittlere Frage 17
        frage: "Wie nennt man einen Algorithmus, der bei der Suche nach einer Lösung Schritt für Schritt die jeweils lokal optimale Entscheidung trifft, in der Hoffnung, dadurch das globale Optimum zu finden (was jedoch nicht immer gelingt)?",
        antwort: "Greedy-Algorithmus",
        moegliche_antwort: ["Genetischer Algorithmus", "Divide-and-Conquer-Algorithmus", "Backtracking-Algorithmus", "Greedy-Algorithmus"],
        schwierigkeit: "Schwierig"
    },
    {// Mittlere Frage 18
        frage: "Welches historische Vertragswerk von 1648 beendete den Dreißigjährigen Krieg in Deutschland sowie den Achtzigjährigen Unabhängigkeitskrieg der Niederlande und gilt als Geburtsstunde des modernen, souveränen Nationalstaates?",
        antwort: "Westfälischer Friede",
        moegliche_antwort: ["Friede von Utrecht", "Westfälischer Friede", "Wiener Kongress", "Prager Frieden"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 19
        frage: "Wie nennt man in der Sprachwissenschaft das Phänomen, bei dem Wörter oder Ausdrücke aus verschiedenen Sprachen durch direkten Kulturkontakt phonetisch oder semantisch angeglichen werden, ohne dass eine genetische Sprachverwandtschaft vorliegen muss?",
        antwort: "Sprachbund-Entwicklung",
        moegliche_antwort: ["Lautverschiebung", "Deklinationsausgleich", "Sprachbund-Entwicklung", "Volksetymologie"],
        schwierigkeit: "Schwierig"
    },
    {// Mittlere Frage 20
        frage: `Welche internationale Konferenz von 1884/1885 regelte die koloniale Aufteilung Afrikas unter den europäischen Mächten und legte das Prinzip der "effektiven Okkupation" fest?`,
        antwort: "Kongo-Konferenz (Berliner Konferenz)",
        moegliche_antwort: ["Wiener Kongress", "Kongo-Konferenz (Berliner Konferenz)", "Versailler Friedenskonferenz", "Konferenz von Algeciras"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 21
        frage: "Welches fundamentale Quantenphänomen beschreibt den Zustand, bei dem zwei oder mehr Photonen so stark miteinander korreliert sind, dass die Messung des Zustands an einem Photon augenblicklich den Zustand des anderen bestimmt, unabhängig von der Entfernung?",
        antwort: "Quantenverschränkung",
        moegliche_antwort: ["Stimulierte Emission", "Dekohärenz", "Photonenschwebung", "Quantenverschränkung"],
        schwierigkeit: "Schwierig"
    },
    {// Mittlere Frage 22
        frage: "Welche Straftheorie begründet den Sinn von Strafe ausschließlich mit dem Gedanken der Vergeltung und dem Prinzip der ausgleichenden Gerechtigkeit, völlig unabhängig von gesellschaftlichen Nutzen oder der Besserung des Täters?",
        antwort: "Absolute Straftheorie",
        moegliche_antwort: ["Absolute Straftheorie", "Relative Straftheorie", "Generalprävention", "Spezialprävention"],
        schwierigkeit: "Schwierig"
    },
    {// Mittlere Frage 23
        frage: "Wie nennt man den theoretischen Endzustand des Universums, in dem die Entropie ihr Maximum erreicht hat, alle Temperaturdifferenzen ausgeglichen sind und somit keine nutzbare Energie mehr für Arbeit zur Verfügung steht?",
        antwort: "Wärmetod (Big Freeze)",
        moegliche_antwort: ["Big Crunch", "Kosmische Inflation", "Wärmetod (Big Freeze)", "Big Rip"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 24
        frage: "Wie nennt man die Temperatur, auf die man Luft bei konstantem Druck abkühlen muss, damit die relative Luftfeuchtigkeit 100 % erreicht und Kondensation (Nebels oder Tau) einsetzt?",
        antwort: "Taupunkt",
        moegliche_antwort: ["Absoluter Nullpunkt", "Feuchtkugeltemperatur", "Sättigungsdefizit", "Taupunkt"],
        schwierigkeit: "Mittel"
    },
    {// Mittlere Frage 25
        frage: "Wie nennt man laut dem Seerechtsübereinkommen der Vereinten Nationen (SRÜ) die Meereszone, die sich bis zu 200 Seemeilen vor der Küste erstreckt und in der ein Staat exklusive Rechte zur wirtschaftlichen Ausbeutung (z. B. Fischfang, Rohstoffe) besitzt?",
        antwort: "Ausschließliche Wirtschaftszone (AWZ)",
        moegliche_antwort: ["Ausschließliche Wirtschaftszone (AWZ)", "Hohe See", "Anschlusszone", "Küstenmeer (Territorialgewässer)"],
        schwierigkeit: "Mittel"
    },
    {// Schwierige Frage 1
        frage: "Welches mathematische Verfahren wird in der Quantenelektrodynamik angewendet, um die divergenten, unendlichen Integrale der Schleifen-Diagramme (Feynman-Diagramme) durch das Einführen eines künstlichen Parameters ε (Abweichung von der vierdimensionalen Raumzeit) mathematisch konsistent zu isolieren?",
        antwort: "Dimensionale Regularisierung",
        moegliche_antwort: ["Dimensionale Regularisierung", "Pauli-Villars-Regularisierung", "Borel-Summation", "Wellenfunktions-Renormierung"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 2
        frage: "Wie nennt man die feierlichen, mit einer goldenen Bulle besiegelten Urkunden der byzantinischen Kaiser, die im diplomatischen Verkehr mit auswärtigen Mächten oder für Privilegienvergaben das höchste rechtliche Dokument darstellten?",
        antwort: "Chrysobullon",
        moegliche_antwort: ["Typikon", "Novelle", "Proskynesis", "Chrysobullon"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 3
        frage: `Welcher ökonomische Effekt beschreibt das Phänomen, dass eine Erhöhung der Staatsausgaben \u2013 entgegen keynesianischen Modellen \u2013 langfristig zu einer Reduktion privater Investitionen führt, weil der Staat über steigende Zinsen Kapital vom Markt absaugt?`,
        antwort: "Crowding-out-Effekt (Verdrängungseffekt)",
        moegliche_antwort: ["Pigou-Effekt", "Balassa-Samuelson-Effekt", "Crowding-out-Effekt (Verdrängungseffekt)", "Mundell-Tobin-Effekt"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 4
        frage: "Welcher Algorithmus der dynamischen Programmierung wird in der Bioinformatik verwendet, um ein globales Alignment zweier Nukleotid- oder Aminosäuresequenzen zu berechnen, indem eine Bewertungsmatrix systematisch von oben links nach unten rechts ausgefüllt wird?",
        antwort: "Needleman-Wunsch-Algorithmus",
        moegliche_antwort: ["Smith-Waterman-Algorithmus", "Needleman-Wunsch-Algorithmus", "Viterbi-Algorithmus", "BLAST-Heuristik"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 5
        frage: "Welches mathematische Modell beschreibt die Generierung und Ausbreitung von Aktionspotenzialen in Neuronen durch ein System von vier gekoppelten, nichtlinearen Differentialgleichungen, das auf den Ionenströmen von Natrium und Kalium basiert?",
        antwort: "Hodgkin-Huxley-Modell",
        moegliche_antwort: ["Integrate-and-Fire-Modell", "Hodgkin-Huxley-Modell", "FitzHugh-Nagumo-Modell", "Izhikevich-Modell"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 6
        frage: "Welches völkerrechtliche Prinzip erlaubt es nationalen Gerichten, schwerste Verbrechen wie Völkermord oder Verbrechen gegen die Menschlichkeit zu verfolgen, selbst wenn die Tat im Ausland verübt wurde und weder Täter noch Opfer Staatsbürger des verhandelnden Landes sind?",
        antwort: "Weltrechtsprinzip (Universalitätsprinzip)",
        moegliche_antwort: ["Weltrechtsprinzip (Universalitätsprinzip)", "Territorialitätsprinzip", "Aktives Personalitätsprinzip", "Schutzprinzip"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 7
        frage: "Welche dimensionslose Kennzahl beschreibt in der Fluidmechanik das Verhältnis von Trägheitskräften zu Zähigkeitskräften und zeigt an, ob eine Strömung laminar oder turbulent verläuft?",
        antwort: "Reynolds-Zahl",
        moegliche_antwort: ["Reynolds-Zahl", "Prandtl-Zahl", "Mach-Zahl", "Nusselt-Zahl"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 8 überlegung Schwierige Fragen 8 bis 15 auf mittel zu machen
        frage: "Welches mathematische Konzept von John Maynard Smith nutzt die Spieltheorie, um zu erklären, warum sich in einer Population bestimmte Verhaltensstrategien (z. B. „Taube“ oder „Hawk“) biologisch durchsetzen und stabilisieren, weil mutierende Abweichler keinen Selektionsvorteil haben?",
        antwort: "Evolutionär stabile Strategie (ESS)",
        moegliche_antwort: ["Frequenzabhängige Selektion", "Inklusiv-Fitness", "Hamiltons Regel", "Evolutionär stabile Strategie (ESS)"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 9
        frage: "Was genau ist CRISPR/Cas9 in der modernen Biologie?",
        antwort: "Eine präzise Schere für das Erbgut",
        moegliche_antwort: ["Eine Impfung gegen hartnäckige Bakterien", "Eine präzise Schere für das Erbgut", "Ein UV-Licht zum Desinfizieren", "Ein spezielles digitales Mikroskop"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 10
        frage: "Was passiert mit den Proben bei einem PCR-Test im Labor?",
        antwort: "Winzige Gen-Spuren werden millionenfach vervielfältigt",
        moegliche_antwort: ["Die roten Blutkörperchen werden gezählt", "Winzige Gen-Spuren werden millionenfach vervielfältigt", "Alle vorhandenen Viren werden chemisch vernichtet", "Die genaue Temperatur der Probe wird gemessen"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 11
        frage: "Welche Aufgabe haben Plasmide in der Genforschung?",
        antwort: "Sie transportieren als Postboten neue Gene in Zellen",
        moegliche_antwort: ["Sie transportieren als Postboten neue Gene in Zellen", "Sie schützen die Zellen vor starker Kälte", "Sie dienen als künstlicher Zucker für Pflanzen", "Sie reparieren beschädigte äußere Zellwände"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 12
        frage: "Was bedeutet die physikalische Formel F = m · a im Alltag?",
        antwort: "Je schwerer ein Gegenstand ist, desto mehr Kraft erfordert das Anschieben",
        moegliche_antwort: ["Ein schweres Auto verbraucht im Stand mehr Kraftstoff", "Im luftleeren Raum fallen alle Dinge gleich schnell", "Je schwerer ein Gegenstand ist, desto mehr Kraft erfordert das Anschieben", "Schnelles Fahren sorgt für mehr Abnutzung der Reifen"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 13
        frage: "Welchen Unterschied beschreibt das Verhältnis von Haft- und Gleitreibung?",
        antwort: "Das erste Anschieben einer Kiste braucht mehr Kraft als das Weiterziehen",
        moegliche_antwort: ["Gegenstände rutschen auf dem Wasser besser als auf dem Land", "Die Luftreibung verhindert, dass Gegenstände unendlich fliegen", "Magnetische Flächen ziehen sich im Stillstand stärker an", "Das erste Anschieben einer Kiste braucht mehr Kraft als das Weiterziehen"],
        schwierigkeit: "Mittel"
    },
    {// Schwierige Frage 14
        frage: "Wie funktioniert die asymmetrische Verschlüsselung bei Messengern?",
        antwort: "Ein öffentliches Schloss sperrt ab, nur ein privater Schlüssel sperrt auf",
        moegliche_antwort: ["Ein öffentliches Schloss sperrt ab, nur ein privater Schlüssel sperrt auf", "Die Nachricht löscht sich nach dem Lesen von selbst", "Der Text wird für den Transport einfach rückwärts geschrieben", "Alle Passwörter werden auf einem zentralen Server gesichert"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 15
        frage: "Welche Funktion erfüllt das DNS (Domain Name System) im Internet?",
        antwort: "Es übersetzt Namen wie google.de in die passenden Computernummern",
        moegliche_antwort: ["Es sucht auf Webseiten nach gefährlichen Viren", "Es misst die aktuelle Geschwindigkeit von Downloads", "Es verstärkt das Funksignal von Routern in der Wohnung", "Es übersetzt Namen wie google.de in die passenden Computernummern"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 16
        frage: "Wie nennt man die 14 elementaren mathematischen Gittertypen, die die Translationssymmetrie eines dreidimensionalen Kristallgitters vollständig beschreiben?",
        antwort: "Bravais-Gitter",
        moegliche_antwort: ["Bravais-Gitter", "Wigner-Seitz-Zellen", "Brillouin-Zonen", "Miller-Indizes"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 17
        frage: "Wie nannte man das im Heiligen Römischen Reich verbreitete Standard-Silbergewicht von ca. 234 Gramm, das als universelle gesetzliche Bezugseinheit für die Ausmünzung von Taler- und Guldenwährungen diente?",
        antwort: "Kölner Mark",
        moegliche_antwort: ["Unze", "Wiener Pfund", "Karat", "Kölner Mark"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 18
        frage: "Wie heißt die Grenze eines Schwarzen Lochs, ab der nichts mehr entkommen kann?",
        antwort: "Ereignishorizont ",
        moegliche_antwort: ["Singularität", "Akkretionsscheibe", "Ereignishorizont ", " Schwarzschild-Radius"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 19
        frage: "Welcher Fluss führt weltweit das meiste Wasser mit sich?",
        antwort: "Amazonas",
        moegliche_antwort: ["Jangtsekiang", "Mississippi", "Amazonas", "Nil"],
        schwierigkeit: "Mittel"
    },
    {// Schwierige Frage 20
        frage: "Welches Element ist das leichteste im Periodensystem?",
        antwort: "Wasserstoff",
        moegliche_antwort: ["Wasserstoff", "Helium", "Lithium", "Sauerstoff"],
        schwierigkeit: "Mittel"
    },
    {// Schwierige Frage 21
        frage: "Welches Tier kann extreme Strahlung, das Vakuum des Weltalls und absolute Nullpunkt-Temperaturen im Zustand der Kryptobiose überleben?",
        antwort: "Bärtierchen (Tardigrada)",
        moegliche_antwort: ["Bärtierchen (Tardigrada)", "Rädertierchen (Rotifera)", "Fadenwurm (Caenorhabditis elegans)", "Silberfischchen (Lepisma saccharina)"],
        schwierigkeit: "Schwierig"
    },
    {// Schwierige Frage 22
        frage: "Welcher Ort gilt als der „Pol der Unzugänglichkeit“ im Ozean (der am weitesten von jedem Festland entfernte Punkt der Erde)?",
        antwort: "Point Nemo",
        moegliche_antwort: ["Challenger-Tief", "Bouvetinsel", "Tristan da Cunha", "Point Nemo"],
        schwierigkeit: "Mittel"
    },
    {// Schwierige Frage 23
        frage: "Welcher astronomische Effekt beschreibt das Phänomen, dass das Licht ferner Galaxien durch die Gravitation massereicherer, davor liegender Galaxienhaufen abgelenkt und wie durch eine Lupe verzerrt wird?",
        antwort: "Gravitationslinseneffekt",
        moegliche_antwort: ["Hawking-Strahlung", "Doppler-Verschiebung", "Gravitationslinseneffekt", "Chandrasekhar-Grenze"],
        schwierigkeit: "Schwierig"
    },
    /*
    {// Vorlage
        frage: "",
        antwort: "",
        moegliche_antwort: ["", "", "", ""],
        schwierigkeit: "Schwierig"
    }
    */
]// Insgesammt mit fragen die noch nicht gemacht wurden 75 fragen
export default fragen;