# Praxis Morgenlicht · Demo

Eine statische, deutschsprachige Demo-Landingpage für eine Heilpraktikerpraxis. Die Website benötigt keinen Build-Schritt und ist für GitHub Pages vorbereitet.

## Lokal ansehen

Im Projektordner einen statischen Server starten, zum Beispiel:

```bash
python3 -m http.server 8000
```

Anschließend `http://localhost:8000` öffnen. Das direkte Öffnen von `index.html` funktioniert ebenfalls, der lokale Server bildet GitHub Pages aber zuverlässiger ab.

## Vor der Veröffentlichung ersetzen

Suche im Projekt nach `BITTE ERSETZEN` und aktualisiere mindestens:

- Praxisname, Name, Anschrift, Ort und Kontaktdaten
- Berufsbezeichnung, Erlaubnis, zuständige Behörde und Berufshaftpflicht
- tatsächliche Leistungen und fachliche Qualifikationen
- Impressum und Datenschutzerklärung
- Demo-Bilder in `assets/images/`
- Seitentitel, Beschreibung und ggf. eigene Domain

Die rechtlichen Seiten sind Vorlagen und keine Rechtsberatung. Vor dem Livegang sollten die Inhalte fachlich und rechtlich geprüft werden. Vermeide insbesondere Heilversprechen und unbelegte Wirkungsbehauptungen.

## GitHub Pages aktivieren

1. Repository auf GitHub öffnen.
2. Unter **Settings → Pages** bei **Build and deployment → Source** die Option **GitHub Actions** auswählen.
3. Änderungen nach `main` pushen. Der Workflow `.github/workflows/pages.yml` veröffentlicht die Website automatisch.
4. Die Projektseite ist anschließend typischerweise unter `https://<account>.github.io/demo.anne.haag/` erreichbar.
5. Unter **Settings → Pages** **Enforce HTTPS** aktivieren.

Für eine eigene Domain die Domain in den Pages-Einstellungen konfigurieren und die DNS-Einträge beim Domainanbieter setzen. Bei einer Veröffentlichung unter einer Projektdomain bleiben alle internen Links relativ, damit der Unterpfad funktioniert.

## Datenschutz-Scope der Demo

Die Website verwendet keine externen Fonts, kein Analytics, keine Karten, keine eingebetteten Videos, keine Social-Media-Widgets und kein Kontaktformular. Dadurch bleibt die technische Oberfläche bewusst datensparsam. Wenn später externe Dienste oder Formulare ergänzt werden, müssen Datenschutzerklärung, Einwilligungen und die technische Umsetzung angepasst werden.

## Bildassets

Die drei lokalen Demo-Fotos wurden für dieses Projekt generiert und können durch eigene Bilder ersetzt werden:

- `assets/images/hero-praxis.jpg`
- `assets/images/kraeuter-notizbuch.jpg`
- `assets/images/beratungsraum.jpg`
