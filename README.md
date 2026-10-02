# Campus Köthen Landingpage

Statische deutsch- und englischsprachige Landingpage für die App Campus Köthen. Die Seite wird als nginx-Container ausgeliefert und ist für den Betrieb hinter einem Reverse Proxy unter `campus-koethen.sturahsa.de` vorbereitet. Die deutsche Seite liegt unter `/`, die englische unter `/en/`.

## Lokal bauen

Benötigt wird Node.js 22 oder neuer. Es gibt keine npm-Abhängigkeiten.

```bash
npm run build
npm run check
```

Das fertige Webverzeichnis liegt danach unter `dist/`.

## Branding

Die gelieferten Dateien `campus-koethen-logo.png`, `campus-koethen-icon.png`, `site/app-news-screen-de.png` und `site/app-news-screen-en.png` werden beim Build unverändert als Web-Assets übernommen. Die Website verwendet die selbst gehostete Variable Font Albert Sans; ihre OFL-Lizenz liegt unter `site/fonts/AlbertSans-OFL.txt`. Die App-Screenshots erhalten ausschließlich durch CSS einen schmalen schwarzen Rahmen. Light und Dark Mode folgen automatisch der Systemeinstellung.

## Store-Links setzen

Die Store-Buttons sind standardmäßig deaktiviert und grau. Im Docker-Betrieb werden sie automatisch aktiviert, sobald eine gültige HTTPS-URL gesetzt ist.

```bash
cp .env.example .env
```

Anschließend in `.env` ergänzen:

```dotenv
GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=...
APP_STORE_URL=https://apps.apple.com/de/app/.../id...
```

Ein neues Image ist dafür nicht nötig. Nach `docker compose up -d` erzeugt der Container die öffentliche Konfiguration aus diesen Werten neu.

## Deployment mit GHCR

Die GitHub Action baut bei Änderungen auf `main` sowie bei Versionstags ein Multi-Arch-Image für AMD64 und ARM64 und veröffentlicht es unter:

```text
ghcr.io/leviora-studio/campus-koethen-landing:latest
```

Das öffentliche Container-Image kann ohne Anmeldung bei der GitHub Container Registry geladen werden.

Die Node- und nginx-Basisimages sind auf konkrete Multi-Arch-Digests gepinnt. Zu jedem veröffentlichten Image erzeugt die Action außerdem eine SPDX-SBOM und eine Provenance-Attestation.

```bash
cp .env.example .env
docker compose up -d
```

Der Container wird ausschließlich unter `127.0.0.1:${LANDING_PORT:-8080}` veröffentlicht und ist damit nicht direkt aus dem Internet erreichbar. Das systemweit installierte nginx auf Ubuntu leitet Anfragen dorthin weiter.

Im Container sind die Nginx-Zugriffsprotokolle deaktiviert und Nginx-Fehlermeldungen werden nach `/dev/null` geleitet. Der Compose-Dienst verwendet den Docker-Logging-Treiber `none`; auch die Ausgabe des Healthchecks wird verworfen. Das betrifft diesen Container. Das systemweit installierte nginx und Protokolle des Hosts oder des Docker-Daemons müssen bei Bedarf separat konfiguriert werden.

Die im Repository vorhandene [`nginx.conf`](nginx.conf) benennt `campus-koethen.sturahsa.de`, ist aber kein verifizierter Abzug der aktiven Host-Konfiguration. Vor Änderungen am Host sind die wirksame Nginx-Konfiguration, das TLS-Zertifikat und die Log-Einstellungen dort zu prüfen.

## Rechtliche Inhalte

`datenschutz-und-impressum.md` und `legal-notice-and-privacy.md` sind die Quellen für das App-Impressum und den App-Datenschutz unter `/rechtliches/` und `/en/legal/`. Die eigenständigen Quellen `website-impressum.md`, `website-datenschutz.md`, `website-legal-notice.md` und `website-privacy.md` erzeugen das Website-Impressum und den Website-Datenschutz unter `/impressum/`, `/datenschutz/`, `/en/legal-notice/` und `/en/privacy/`. Der Build-Test prüft, dass die Texte in allen sechs erzeugten Seiten vollständig und in derselben Reihenfolge enthalten sind.

Die Website-Rechtstexte berücksichtigen die vom Betreiber bestätigte gemeinsame Serverumgebung: Hostinger-VPS in Deutschland, globale Host-Nginx-Einstellungen ohne Zugriffs- und Fehlerprotokolle, lokale System- und Sicherheitsprotokolle im regulären Betrieb etwa 15 Tage sowie zwei wöchentliche EU-Backups mit möglichen Kopien dieser Einträge bis etwa 29 Tage nach Entstehung. Die wirksamen Host-Nginx-Einstellungen für diese Domain sind im Repository nicht nachweisbar; Server- und Location-Blöcke können die globalen Vorgaben überschreiben. Vor Veröffentlichung sind außerdem die tatsächlich laufende Container-Konfiguration sowie eigene Logs und abweichende Backup-Regeln von Hostinger zu prüfen. Die für allgemeine Website-Anfragen festgelegte Löschung spätestens sechs Monate nach Bearbeitungsabschluss muss im E-Mail-Postfach organisatorisch umgesetzt werden.

Nach Betreiberangabe ist derzeit kein Datenschutzbeauftragter benannt. Die Studierendenschaft ist eine Körperschaft des öffentlichen Rechts; eine mögliche Benennungspflicht nach Art. 37 Abs. 1 Buchst. a DSGVO ist deshalb zeitnah zu klären und gegebenenfalls zu erfüllen. Bis zur tatsächlichen Benennung nennen die Website-Texte für Datenschutzanfragen die Kontaktadresse der Studierendenschaft.

Der Quellcode ist öffentlich im [GitHub-Repository](https://github.com/Leviora-Studio/campus-koethen-landing) verfügbar und wird auf der Landingpage im Footer verlinkt.

## Lizenz

Der eigene Quellcode dieses Projekts ist ausschließlich unter der [GNU Affero General Public License v3.0](LICENSE) lizenziert (`AGPL-3.0-only`). Albert Sans sowie die Komponenten der Container-Basis behalten ihre jeweiligen Lizenzen. Copyright-Hinweise, Lizenztexte und Quellenverweise stehen in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
