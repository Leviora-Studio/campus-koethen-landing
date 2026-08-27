# Campus Köthen Landingpage

Statische deutsch- und englischsprachige Landingpage für die App Campus Köthen. Die Seite wird als nginx-Container ausgeliefert und ist für den Betrieb hinter einem Reverse Proxy unter `campuskoethen.sturahsa.de` vorbereitet. Die deutsche Seite liegt unter `/`, die englische unter `/en/`.

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

Die vollständige [`nginx.conf`](nginx.conf) ist als Ubuntu-Site-Konfiguration vorbereitet. Ein vorhandenes Let's-Encrypt-Zertifikat wird unter `/etc/letsencrypt/live/campus-koethen.sturahsa.de/` erwartet. Die Konfiguration wird folgendermaßen installiert und aktiviert:

```bash
sudo mkdir -p /var/www/certbot
sudo cp nginx.conf /etc/nginx/sites-available/campus-koethen.sturahsa.de
sudo ln -s /etc/nginx/sites-available/campus-koethen.sturahsa.de /etc/nginx/sites-enabled/campus-koethen.sturahsa.de
sudo nginx -t
sudo systemctl reload nginx
```

Falls der Symlink bereits existiert, wird der `ln`-Befehl ausgelassen. Vor dem Aktivieren muss das TLS-Zertifikat vorhanden sein; andernfalls schlägt `nginx -t` absichtlich fehl.

## Rechtliche Inhalte

`datenschutz-und-impressum.md` und `legal-notice-and-privacy.md` sind die verbindlichen Quellen. Beim Build entstehen daraus `/rechtliches/` und `/en/legal/`. Der Build-Test prüft für beide Sprachfassungen, dass alle Textzeilen in derselben Reihenfolge enthalten sind.

Der Quellcode ist öffentlich im [GitHub-Repository](https://github.com/Leviora-Studio/campus-koethen-landing) verfügbar und wird auf der Landingpage im Footer verlinkt.

## Lizenz

Der eigene Quellcode dieses Projekts ist ausschließlich unter der [GNU Affero General Public License v3.0](LICENSE) lizenziert (`AGPL-3.0-only`). Albert Sans sowie die Komponenten der Container-Basis behalten ihre jeweiligen Lizenzen. Copyright-Hinweise, Lizenztexte und Quellenverweise stehen in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
