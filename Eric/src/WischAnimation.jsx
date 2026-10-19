import { useEffect, useState } from "react";

// Diese Komponente umhüllt einfach alles, was darin liegt (children)
export default function WischAnimation({ aktuelleFrageNummer, children }) {
  const [istAnimiert, setIstAnimiert] = useState(false);
  const [sichtbareFragenNummer, setSichtbareFragenNummer] = useState(aktuelleFrageNummer);

  useEffect(() => {
    // Beim allerersten Laden (Startscreen -> Frage 1) nicht animieren
    if (aktuelleFrageNummer === 0 && sichtbareFragenNummer === -1) {
      setSichtbareFragenNummer(0);
      return;
    }

    // Wenn sich die Fragennummer ändert, starte das Wischen
    if (aktuelleFrageNummer !== sichtbareFragenNummer) {
      setIstAnimiert(true);

      // Nach 200ms (Mitte der Animation) tauschen wir den Inhalt aus
      const textTimer = setTimeout(() => {
        setSichtbareFragenNummer(aktuelleFrageNummer);
      }, 200);

      // Nach 400ms ist die Animation fertig
      const animTimer = setTimeout(() => {
        setIstAnimiert(false);
      }, 400);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(animTimer);
      };
    }
  }, [aktuelleFrageNummer]);

  return (
    <div className={istAnimiert ? "wisch-effekt" : ""}>
      {/* Wenn wir mitten im Wischen sind, frieren wir kurz die alte Frage ein, */}
      {/* bis das Element aus dem Bildschirm gewischt ist */}
      {aktuelleFrageNummer !== sichtbareFragenNummer ? (
        <div style={{ pointerEvents: "none" }}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
