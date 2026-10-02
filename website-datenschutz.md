# Datenschutzerklärung der Website Campus Köthen

Stand: 2. Oktober 2026

Diese Erklärung gilt für den Besuch von [campus-koethen.sturahsa.de](/) einschließlich der englischen Fassung. Für die mobile App gilt eine eigene [App-Datenschutzerklärung](/rechtliches/#datenschutz). Die Web-Ansicht des News Feed und andere verlinkte Angebote haben eigene Datenschutzhinweise.

## Verantwortliche Stelle und Datenschutzkontakt

Studierendenschaft der Hochschule Anhalt  
Körperschaft des öffentlichen Rechts  
vertreten durch den Sprecherrat des Studierendenrates  
Bernburger Straße 55  
06366 Köthen  
Deutschland

E-Mail: [stura@hs-anhalt.de](mailto:stura@hs-anhalt.de). Datenschutzanfragen zur Website kannst du an diese Adresse richten.

## Abruf der Website und Protokolle

Beim Abruf der Website werden technisch notwendige Verbindungsdaten verarbeitet. Dazu gehören insbesondere die IP-Adresse, der Zeitpunkt und die angeforderte Adresse sowie übliche HTTP-Verbindungsinformationen. Sie werden benötigt, um die angeforderten Seiten auszuliefern und den Betrieb abzusichern. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. e DSGVO in Verbindung mit § 65 des Hochschulgesetzes des Landes Sachsen-Anhalt (HSG LSA).

Die Projektkonfiguration deaktiviert Zugriffsprotokolle im Nginx-Container, leitet dessen Fehlerprotokoll nach `/dev/null` und verwendet für diesen Container den Docker-Logging-Treiber `none`. Ob genau diese Konfiguration auf dem Server läuft, wurde nicht überprüft. Für das vorgeschaltete Host-Nginx hat der Betreiber globale Einstellungen zur Abschaltung von Zugriffs- und Fehlerprotokollen bestätigt. Einzelne Server- oder Location-Blöcke können sie überschreiben. Solange die wirksame Konfiguration für diese Website nicht geprüft ist, können dort gespeicherte Zugriffs- oder Fehlerprotokolle nicht ausgeschlossen werden; ihre konkrete Aufbewahrungsdauer ist offen. Die Website selbst erstellt keine Nutzungsstatistiken oder Nutzungsprofile.

Unabhängig davon entstehen auf dem gemeinsam genutzten Server System- und Sicherheitsprotokolle, insbesondere von systemd-journald, rsyslog und Fail2ban. Bei technischen Störungen, Anmeldeversuchen oder sicherheitsrelevanten Ereignissen können darin IP-Adressen, Zeitpunkte, gegebenenfalls verwendete Benutzerkennungen und Angaben zum Ereignis oder zur Schutzmaßnahme enthalten sein. Das bedeutet nicht, dass jeder Website-Besuch protokolliert wird. Die Verarbeitung dient dem sicheren Betrieb, der Fehlerbehebung und der Abwehr unberechtigter Zugriffe. Rechtsgrundlage ist ebenfalls Art. 6 Abs. 1 Buchst. e DSGVO in Verbindung mit § 65 HSG LSA. Die Sicherheitsmaßnahmen dienen zugleich der Erfüllung von Art. 32 DSGVO.

Die genannten lokalen System- und Sicherheitsprotokolle werden nach den vom Betreiber bestätigten Einstellungen für journald und die tägliche Rotation von rsyslog- und Fail2ban-Dateien im regulären Betrieb etwa 15 Tage aufbewahrt. Dies ist keine allgemeine Löschfrist für sämtliche Dateien oder Dienste des Servers. Insbesondere gilt sie nicht ohne weitere Prüfung für mögliche Host-Nginx-Protokolle, andere Systemdienste oder eigene Protokolle des Hosting-Anbieters. Für mögliche Kopien der genannten lokalen Einträge in Backups gilt der nachfolgend beschriebene Zeitraum.

## Hosting und Backups

Die Website wird auf einem gemeinsam genutzten virtuellen Server in Deutschland bei Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern, gehostet. Hostinger verarbeitet Hostingdaten im Auftrag der Studierendenschaft auf Grundlage einer Vereinbarung nach Art. 28 DSGVO. Die [Vereinbarung zur Auftragsverarbeitung](https://www.hostinger.com/legal/dpa) enthält Regelungen zu Unterauftragsverarbeitern und möglichen internationalen Datenübermittlungen, einschließlich EU-Standardvertragsklauseln als Garantie, soweit diese erforderlich sind. Der Serverstandort Deutschland bedeutet nicht, dass sämtliche Verarbeitung ausschließlich dort stattfindet.

Nach Betreiberangabe erstellt Hostinger wöchentlich ein automatisches Server-Backup auf Servern innerhalb der Europäischen Union und hält zwei Stände vor; beim nächsten Backup wird der älteste gelöscht. Eine Kopie eines der oben genannten lokalen System- oder Sicherheitsprotokolleinträge kann dadurch planmäßig bis zu etwa 29 Tage nach dessen Entstehung enthalten sein: etwa 15 Tage lokale Aufbewahrung zuzüglich bis zu 14 Tage Backup-Aufbewahrung. Diese Schätzung gilt nur für solche Einträge. Ob Hostinger eigene Protokolle führt oder für andere Daten abweichende Backup-Regeln gelten, ist nicht geklärt; die 29 Tage sind keine allgemeine Löschfrist für Backupinhalte.

## Kontakt per E-Mail

Wenn du die angegebene E-Mail-Adresse nutzt, verarbeitet die Studierendenschaft deine E-Mail-Adresse, den Nachrichteninhalt und weitere von dir mitgeteilte Angaben, um dein Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. e DSGVO in Verbindung mit § 65 HSG LSA. Die Angaben sind freiwillig; ohne für die Bearbeitung erforderliche Informationen kann eine Antwort gegebenenfalls nicht möglich sein. Allgemeine Anfragen zu dieser Website und die zugehörigen Antworten werden bis zum Abschluss der Bearbeitung und anschließend höchstens sechs Monate aufbewahrt, damit Rückfragen zum selben Anliegen beantwortet werden können. Danach werden sie gelöscht. Soweit eine konkrete Anfrage gesetzlichen Aufbewahrungspflichten unterliegt oder für die Geltendmachung, Ausübung oder Verteidigung konkreter Rechtsansprüche benötigt wird, bleiben nur die dafür erforderlichen Angaben länger gespeichert; sie werden nach Wegfall dieses Grundes gelöscht. Für andere Angelegenheiten der Studierendenschaft können andere Aufbewahrungsfristen gelten.

## Cookies, lokale Ressourcen und externe Links

Die Website setzt keine Cookies und verwendet weder Local Storage noch Session Storage. Sie nutzt keine Analyse-, Werbe- oder Trackingdienste, keine extern eingebetteten Inhalte und keine eigenen Formulare oder Nutzerkonten. Schrift, Bilder, Stylesheets und Skripte werden vom eigenen Server geladen; normales Browser-Caching ist möglich. Die Sprache ergibt sich aus der aufgerufenen Adresse und wird nicht als Präferenz gespeichert.

Links zu Google Play, dem App Store, der Web-Ansicht des News Feed, GitHub und anderen externen Angeboten werden erst nach dem Anklicken aufgerufen. Für die anschließende Verarbeitung gelten die Datenschutzhinweise der jeweiligen Anbieter.

## Deine Rechte und Beschwerderecht

Nach Maßgabe der DSGVO hast du insbesondere Rechte auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung sowie gegebenenfalls Datenübertragbarkeit. Gegen eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchst. e DSGVO kannst du aus Gründen deiner besonderen Situation nach Art. 21 DSGVO Widerspruch einlegen. Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling statt. Zur Ausübung deiner Rechte wende dich an den oben genannten Datenschutzkontakt.

Du kannst dich gemäß Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere bei der Landesbeauftragten für den Datenschutz Sachsen-Anhalt, Otto-von-Guericke-Straße 34a, 39104 Magdeburg, E-Mail: [poststelle@lfd.sachsen-anhalt.de](mailto:poststelle@lfd.sachsen-anhalt.de). Weitere Angaben stehen auf der [offiziellen Kontaktseite](https://datenschutz.sachsen-anhalt.de/landesbeauftragte/kontakt).
