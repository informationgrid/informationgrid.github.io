---
layout: default
title: InGrid Harvester
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der [**InGrid Harvester**](https://github.com/informationgrid/ingrid-harvester) ist eine eigenständige Softwarekomponente, die – wie der Name bereits andeutet – Daten aus diversen Quellen „erntet“ und in einem Speicher, den Elasticsearch-Indizes, zur weiteren Verarbeitung bereitstellt. Dadurch wird sichergestellt, dass die Daten jederzeit in einem einheitlichen Format verfügbar sind.

Ein speziell entwickeltes, benutzerfreundliches Interface erlaubt die Konfiguration automatisierter Abfragen sowie die Integration schnittstellenspezifischer Filter. Zusätzlich bietet das GUI eine umfassende Übersicht über den Status der Ernteprozesse, einschließlich des Verlaufs und möglicher Fehlermeldungen. So wird eine zuverlässige Überwachung der Funktionsfähigkeit der Komponente und der angebundenen Schnittstellen gewährleistet.

## Installation

Zur Installation kann das folgende Docker-Image verwendet werden:

[docker-registry.wemove.com/ingrid-harvester](https://docker-registry.wemove.com/ingrid-harvester)

> **Wichtig**: Neben dem Harvester muss zusätzlich eine **Datenbank** und **Elasticsearch** eingerichtet werden. 

### Allgemeine Hinweise

* Wenn der **InGrid Harvester** unter einem Unterpfad (z. B. nicht direkt unter dem Root) erreichbar sein soll, müssen **beide** der folgenden Einstellungen vorgenommen werden:
  * `BASE_URL` auf den gewünschten Pfad setzen (Umgebungsvariable)
  * `contextPath` in der Client-Konfigurationsdatei auf denselben Wert setzen
* Zusätzlich müssen entsprechende Einstellungen in nginx vorgenommen werden.

### Authentifizierung 
Benutzer und Passwort wird über die Konfigurationsdatei `users.json` gesetzt. 
Das Admin-Password kann mit der Umgebungsvariable `ADMIN_PASSWORD` überschieben werden.

Beispiel für `user.json`:
```
[
  {
    "firstName": "Global",
    "lastName": "Admin",
    "password": "**********************",
    "username": "admin"
  }
]
```

### Konfigurationsdateien

In einem Docker-Setup können diese Dateien vom Hostsystem in den Container gemappt werden, um sie über Neustarts zu persistieren.

| Speicherort der Konfigurationsdatei (Projekt) | Speicherort der Konfigurationsdatei (Docker-Container)           | Zweck                                           |
|-----------------------------------------------|------------------------------------------------------------------|-------------------------------------------------|
| server/users.json                             | /opt/ingrid/harvester/server/users.json                          | Konfiguration von Benutzer und Passwort         |
| server/config.json                            | /opt/ingrid/harvester/server/config.json                         | Konfiguration des Harvester                     |
| server/config-general.json                    | /opt/ingrid/harvester/server/config-general.json                 | Allgemeine Einstellungen (Elasticsearch, Postgres, ...) |
| server/mappings.json                          | /opt/ingrid/harvester/server/mappings.json                       | Mapping der Datenformate |
| client/src/assets/config.json                 | /opt/ingrid/harvester/server/app/webapp/assets/config.json       | Einstellungen des Clients                       |

### Umgebungsvariablen

Einige allgemeine Einstellungen können auch über Umgebungsvariablen konfiguriert werden. Diese Einstellungen haben Vorrang vor den Konfigurationsdateien.

| Variable                    | Hinweis                                                           |
|-----------------------------|-------------------------------------------------------------------|
| ADMIN_PASSWORD              | Admin Passwort zum Überschreiben der Konfigurationsdatei `users.json` |
| DB_CONNECTION_STRING        |                                                                   |
| DB_URL                      |                                                                   |
| DB_PORT                     |                                                                   |
| DB_NAME                     |                                                                   |
| DB_USER                     |                                                                   |
| DB_PASSWORD                 |                                                                   |
| DEFAULT_CATALOG             | Standardkatalog, der verwendet wird, wenn kein spezifischer angegeben ist |
| ELASTIC_URL                 |                                                                   |
| ELASTIC_VERSION             | Hauptversion (6, 7 oder 8)                                        |
| ELASTIC_USER                |                                                                   |
| ELASTIC_PASSWORD            |                                                                   |
| ELASTIC_REJECT_UNAUTHORIZED | Ob Verbindungen abgelehnt werden sollen, wenn das Zertifikat ungültig ist |
| ELASTIC_INDEX               | TODO                                                              |
| ELASTIC_ALIAS               | TODO                                                              |
| ELASTIC_PREFIX              | TODO                                                              |
| ELASTIC_NUM_SHARDS          | TODO                                                              |
| ELASTIC_NUM_REPLICAS        | TODO                                                              |
| PORTAL_URL                  | Basis-URL zur Anzeige der Portal-Website (ohne abschließenden Slash) |
| PROXY_URL                   | URL mit Anmeldedaten und Port, falls erforderlich                |
| ALLOW_ALL_UNAUTHORIZED      | Ob alle Verbindungen unabhängig vom SSL-Status erlaubt werden sollen |
| IMPORTER_PROFILE            | Profil, das für die Anwendung verwendet wird: ingrid, diplanung, mcloud |
| BASE_URL                    | Unterpfad, unter dem der Harvester bereitgestellt wird, wenn nicht unter `/` |

### Installation mit docker compose

Eine Beispiel-Installation mit docker compose kann etwa so aussehen:
```
services:
  harvester:
    image: docker-registry.wemove.com/ingrid-harvester:latest
    restart: unless-stopped
    environment:
     - NODE_ENV=production
     #- BASE_URL=/harvester/
     - IMPORTER_PROFILE=ingrid
     - ADMIN_PASSWORD=admin
     - ELASTIC_URL=http://elastic:9200
     - ELASTIC_VERSION=8
     - ELASTIC_USER=elastic
     - ELASTIC_PASSWORD=
     - ELASTIC_ALIAS=harvester-alias
     - ELASTIC_PREFIX=harvester_
     - DB_URL=postgres
     - DB_PORT=5432
     - DB_NAME=harvester
     - DB_USER=admin
     - DB_PASSWORD=admin
    volumes:
       - /etc/localtime:/etc/localtime:ro
       - ./harvester/config/config.json:/opt/ingrid/harvester/server/config.json
       - ./harvester/config/client_config.json:/opt/ingrid/harvester/server/app/webapp/assets/config.json
       - ./harvester/logs:/opt/ingrid/harvester/server/logs
    networks:
      - ingrid-network

  postgres:
    image: postgres:15.7
    restart: unless-stopped
    environment:
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=admin
      - PGDATA=/pgdata
    volumes:
      - ./postgres/_data/pgdata:/pgdata
      - ./postgres/init-db:/docker-entrypoint-initdb.d
    networks:
      - ingrid-network

  elastic:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.14.1
    restart: unless-stopped
    environment:
      - cluster.name=ingrid
      - discovery.type=single-node
      - cluster.routing.allocation.disk.threshold_enabled=false
      - http.host=0.0.0.0
      - transport.host=0.0.0.0
      - http.cors.enabled=true
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g -Dlog4j2.formatMsgNoLookups=true"
      # Hotfix #3292 
      - "LOG4J_FORMAT_MSG_NO_LOOKUPS=true"
    deploy:
      resources:
        limits:
          memory: 3072M
    networks:
      - ingrid-network

networks:
  ingrid-network:
    driver: "bridge"
```

### Direkte Installation

Um den Harvester direkt auf einem System zu installieren, müssen folgende Vorbedingungen erfüllt sein:
* Elasticsearch (>= v6)
* PostgreSQL (>= v14)
* NodeJS (>= v20)

Die Installation des Harvesters (z.B. nach `/opt/ingrid/harvester`) erfolgt dann mit diesen Schritten:

#### Harvester clonen und bauen
```
git clone https://github.com/informationgrid/ingrid-harvester
cd ingrid-harvester/server
npm ci
npm run build
cd ../client
npm ci
npm run prod
```

#### Harvester installieren
```
mkdir -p /opt/ingrid/harvester
cp server/package*.json /opt/ingrid/harvester/
cp -r server/build/* /opt/ingrid/harvester/
cp -r client/dist/webapp /opt/ingrid/harvester/server/app/webapp
cd /opt/ingrid/harvester
npm run install-production
```

#### Harvester starten
```
export IMPORTER_PROFILE=ingrid
node app/index.js
```

## Konfiguration

Unter dem Menupunkt **Konfiguration** kann der Harvester eingerichtet werden. Dabei können Sie folgende Konfiguration vornehmen:

  * [Datenbank](#datenbank)
  * [Elasticsearch](#elasticsearch)
  - [Zusätzliche Einstellungen](#zusätzliche-einstellungen)
  - [Checks](#checks)
  - [Index-Backup](#index-backup)
  - [Harvesting Differenzen](#harvesting-differenzen)
  - [E-Mail-Einstellungen](#e-mail-einstellungen)

Klicken Sie auf `SPEICHERN` um die Konfiguration zu übernehmen.

> **Tipp**: Da eine Datenbank und Elasticsearch für den Harvester unabdingbar sind, ist es wichtig die Verbindung zur Datenbank und zu Elasticsearch korrekt zu konfigurieren und zu testen. Klicken Sie dafür auf den entsprechenden Button `VERBINDUNG TESTEN`. 


### Datenbank

> **Hinweis**: Sie können entweder den `Verbindungsstring` angeben oder die Felder `URL`, `Port` und `Datenbank-Name` ausfüllen. Der Verbindungsstring hat höhere Priorität.

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Verbindungsstring           | Über dem Verbindungsstring ist die Datenbank zu erreichen <br>Beispielwert: `localhost:5432/database-name` |
| URL                         | Unter der URL ist die Datenbank erreichbar  <br>Beispielwert: `localhost` |
| Port                        | Unter dem Port ist die Datenbank erreichbar  <br>Beispielwert: `5432` |
| Datenbank-Name              | Der Name der Datenbank  <br>Beispielwert: `database-name`         |
| Benutzername                | Benutzername für den Login zur Datenbank                          |
| Passwort                    | Passwort zur Datenbank                                            |
| Identifier des Standard-Katalogs | Dieses Feld ist readonly und wird während der Installation mit der Umgebungsvariable `DEFAULT_CATALOG` gesetzt. <br>Beispielwert: `harvester` |

Um die Verbindung zur Datenbank zu prüfen, klicken Sie auf den Button `VERBINDUNG TESTEN`. 

### Elasticsearch

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Version                     | Version der installierten Elasticsearch Instanz  <br>Beispielwert: `8` |
| Host-URL                    | Unter der URL ist Elasticsearch erreichbar <br>Beispielwert: `https://your-elasticsearch:9200`|
| Ungültige TLS Zertifikate abweisen | Wenn diese Check-Box ausgewählt ist, werden ungültige TLS Zertifikate abgewiesen. Eine Verbindung zu Elasticsearch ist dann nicht möglich. <br>Default: `true` |
| Benutzername                | Benutzername für Elasticsearch-Login                              |
| Passwort                    | Passwort für Elasticsearch-Login                                  |
| Alias-Name                  | Alias für die Elasticsearch-Indizes  <br>Beispielwert: `index-alias` |
| Index-Präfix                | Readonly, siehe Umgebungsvariable `ELASTIC_PREFIX`                |
| Index-Name                  | Readonly, siehe Umgebungsvariable `ELASTIC_INDEX`                 |
| Shards                      | Readonly, siehe Umgebungsvariable `ELASTIC_NUM_SHARDS`            |
| Replicas                    | Readonly, siehe Umgebungsvariable `ELASTIC_NUM_REPLICAS`          |

Um die Verbindung zu Elasticsearch zu prüfen, klicken Sie auf den Button `VERBINDUNG TESTEN`. 

### Zusätzliche Einstellungen

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Offset Cron-Jobs in Minuten | Dieses Feld ermöglicht die zeitversetzte Ausführung von Harvester-Prozessen, um gleichzeitige Abläufe bei parallelem Betrieb in mehreren Umgebungen (z. B. Produktion und Entwicklung) zu vermeiden. <br>Beispielwert: `0`                                        |
| Log-Level für fehlende Format-Mappings | Definieren Sie das Log-Level für fehlende Format_Mappings <br>Default: `WARNING` |
| Proxy URL                   | Proxy für die Netzwerk-Kommunikation                              |
| Unautorisierte Verbindungen über Proxy erlauben | Checkbox, die es ermöglicht alle Verbindungen über Proxy unabhängig vom SSL-Status zu erlauben <br>Default: `false` |
| Portal URL                  | URL vom Portal, das auf die vereinheitlichten Daten zu greift <br>Beispielwert: `https://dein-portal.anwendung.de` |

### Checks

| Formular-Feld                 | Beschreibung                                                      |
|-------------------------------|-------------------------------------------------------------------|
| Url Check aktivieren          |  Toggle-Switch, um regelmäßige Url Checks durchzuführen <br>Beispielwert: `true` |
| Cron Expression (Url Check)   | Cron Expression, um zeitliche Durchführung von Url Checks zu planen <br>Beispielwert: `30 04 * * *` |
| Index Check aktivieren        |  Toggle-Switch, um regelmäßige Index Checks durchzuführen <br>Beispielwert: `true` |
| Cron Expression (Index Check) | Cron Expression, um zeitliche Durchführung von Index Checks zu planen <br>Beispielwert: `10 04 * * *` |

### Index-Backup

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Index-Backup aktivieren     | Toggle-Switch, um regelmäßige Index-Backups durchzuführen <br>Beispielwert: `true` |
| Cron Expression             | Cron Expression, um zeitliche Durchführung von Backups zu planen <br>Beispielwert: `10 04 * * *` |
| Index (RegExp)              | Regulärer Ausdruck zur Selektion der zu sichernden Indizes <br>Beispielwert: `harvester_statistic|url_check_history|index_check_history` |
| Verzeichnis                 | Das Verzeichnis, unter dem die Backups abgespeichert werden sollen |

### Harvesting Differenzen

Wenn bereits bestehende Datensätze im laufenden Harvesting nicht vorhanden sind, dann kann eine Differenz (in Prozent) definiert werden, um eine Benachrichtigung per E-Mail zu verschicken bzw. das Harvesting abzubrechen. Aktivieren/deaktivieren Sie dafür die entsprechende Option und definieren Sie einen Prozentwert wann die Aktion ausgeführt werden soll.

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| E-Mail Benachrichtigung aktivieren |  Toggle-Switch, um E-Mail zu senden, wenn erwartet Datensätze fehlen <br>Beispielwert: `true` |
| E-Mail senden ab einer Differenz von | Beispielwert: `10` %                                     |
| Harvesting Abbruch aktivieren | Toggle-Switch, um Harvesting abzubrechen, wenn erwartet Datensätze fehlen <br>Beispielwert: `true` |
| Harvesting abbrechen ab einer Differenz von | Beispielwert: `10` %                              |

### E-Mail-Einstellungen

| Formular-Feld               | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| E-Mail-Server               | Hinterlegen Sie einen E-Mail-Server                               |
| Port                        | Port von dem E-Mail-Server                                        |
| Secure Connection           | Erlaube ausschließlich sicher Verbindungen zum E-Mail-Server <br>Beispielwert: `true` |
| Ungültige TLS Zertifikate abweisen | Wenn diese Check-Box ausgewählt ist, werden ungültige TLS Zertifikate abgewiesen. Eine Verbindung zu E-Mail-Server ist dann nicht möglich. <br>Default: `true` |
| User                        | User vom E-Mail Account                                           |
| Passwort                    | Passwort vom E-Mail Account                                       |
| Absender                    | E-Mail vom Absender <br>Beispielwert: `absender@example.com`      |
| Empfänger                   | E-Mail vom Empfänger <br>Beispielwert: `empfaenger@example.com`   |
| Betreff-Tag                 | Betreff von der E-Mail <br>Beispielwert: `Harvester`              |

## Mapping (Datenformate)

Unter **Konfiguration** im Reiter **Mapping (Datenformat)** können Mappings definiert werden, um Datenformate im Index zu vereinheitlichen. Diese Funktion dient dazu, identische Datenformate, die in verschiedenen Quellen unterschiedlich benannt sind, zu konsolidieren.

Dabei wird angegeben:
- **Quellenformat**: Wie das Datenformat in der jeweiligen Quelle bezeichnet ist.
- **Zielformat**: Wie das Datenformat einheitlich in Elasticsearch gespeichert werden soll.

**Beispiel**: Die Bezeichnungen `"atom"`, `"Atom Feed"` und `"AtomFeed"` können durch ein Mapping als einheitliches Format `"ATOM"` gespeichert werden.

## Import/Export

Unter **Konfiguration** im Reiter **Import/Export** können Konfigurationsdateien für die Bereiche **Konfiguration**, **Mapping** und **Harvester** exportiert oder importiert werden. Mit den jeweiligen Buttons können die Dateien heruntergeladen (Export) oder neue Konfigurationen eingespielt (Import) werden. Details zu den Dateien finden Sie in der "Technischen Dokumentation".

Der Button `Alle Exportieren` ermöglicht den gleichzeitigen Download aller Konfigurationsdateien (drei Dateien).

Hinweise:
- Der Import liefert keine Rückmeldung dazu, ob der Import erfolgreich war oder nicht, dafür müssen die Einstellungen auf der jeweiligen Seite kontrolliert werden.
- Die Tabs Konfiguration und Mapping werden beim Tab-Wechsel nicht neu geladen. Um die Änderungen durch einen Import sichtbar zu machen, muss die Seite neu geladen werden.
- Beim Import wird immer die komplette Datei ersetzt, ein Teil-Import ist nicht möglich.

## Harvester

Zentraler Bereich der Admin-GUI ist die Seite **Harvester**, in der sämtliche Harvesting-Prozesse unterteilt nach Typ aufgelistet sind.
Hier können die Harvester hinzugefügt, bearbeitet und gesteuert werden.

- Jeder Harvester kann durch einen Schalter aktiviert/deaktiviert werden.
- Durch einen Klick auf den Titel des Harvesters wird dieser aufgeklappt und Sie erhalten einen Überblick über die letzten Aktivitäten sowie weitere Optionen:
  - Import manuell starten
  - Error-Log einsehen
  - Historie abrufen
  - Zeitliche Ausführung planen (Cronjob einrichten)
  - Harvester bearbeiten
  - Harvester entfernen

### Hinzufügen

Um eine neue Harvester anzulegen, klicken Sie auf `HINZUFÜGEN` in der unteren rechten Ecke. Nun öffnet sich eine Dialog, der Sie dabei unterstützt einen Harvester anzulegen. 

1. Wählen Sie zunächst den Typ der Datenquelle aus. 
   - Die verfügbaren Typen sind vom Profil abhängig.
2. Füllen Sie die entsprechenden Felder aus. 
   - Ausfüllhilfen finden sie im Abschnitt [Harvester Ausfüllhilfe](#harvester-ausfüllhilfe). 
3. Klicken Sie auf `ANLEGEN`, um den Prozess abzuschließen. 

Nach dem Sie einen Harvester angelegt haben, ist dieser in der Liste zu finden. Über den Schieberegler auf der rechten Seite kann ein Harvester aktiviert oder deaktiviert werden.

### Ausführung

Die Ausführung der Harvester kann manuell gestartet werden oder zeitlich gesteuert automatisch erfolgen.
Wählen Sie zunächst einen bestehenden Harvester aus in dem Sie auf den Titel des Harvesters klicken.

- Die Schaltfläche `IMPORT STARTEN` führt den Harvester direkt aus.
- Über die Schaltfläche `PLANEN` öffnet sich ein Dialog in dem die regelmäßige automatische Ausführung des Harvesters aktiviert und geplant werden kann.
  
  Die Intervallsteuerung erfolgt dabei entsprechend der Cron-Notation: https://de.wikipedia.org/wiki/Cron#Beispiele
  
  ```
  */5 * * * * => Alle 5 Minuten
  45 8 * * * => Täglich um 8:45 Uhr
    ```

- Am Anfang der Liste, in der linken oberen Ecke, finden Sie die Schaltfläche `ALLE IMPORTIEREN`, mit der alle aktiven Harvester manuell gestartet werden.

### Historie

Über die Schaltfläche `HISTORIE` kann zu jedem Harvester ein Diagramm mit Daten zu den letzten Imports angezeigt werden. Das Diagram enthält Kurven zur Anzahl der gespeicherten Datensätze, Fehler und Warnungen, sowie die Dauer des Imports.

Per Mouseover werden zusätzlich Anzahl der Abgerufenen Datensätze und Übersprungene Datensätze sowie jeweils die Top-5 der Fehlermeldungen und Warnungen angezeigt.

## Monitoring

Auf der Seite `ÜBERSICHT` werden verschiedene statistische Daten zum Datenbestand als Graphen bereitgestellt. Anmerkung: Die Darstellung des Graphen kann einige Sekunden dauern, aufgrund der Aufbereitung der Datenmenge.

Die unterschiedlichen statistischen Daten werden jeweils in einem eigenen Index abgelegt.
Per Cron werden die statistischen Daten zeitgesteuert ermittelt.
Index und Cron werden nachfolgend in den einzelnen Statistik Kapiteln aufgeführt.

> **Hinweise**: Unter `INDIZES` können die Inhalte und die Struktur des jeweiligen Statistik-Indexes eingesehen werden.

### Harvester Historie

Der Graph **Harvester Historie** werden statistische Daten zu den einzelnen Harvestern bzw. deren Indizes dargestellt (enthaltene Datensätze, Gesamt Anzahl und Warnungen, Fehler).

Die Statistiken aus dem Bereich Harvester werden tageweise zusammengefasst. Wenn für einen Harvester mehrere Harvesting-Vorgänge an einem Tag durchgeführt wurden, wird der jeweils letzte Lauf verwendet. Die Werte der einzelnen Harvester werden aufsummiert.

- **Index**: harvester_statistic (s. Indizes)
- **Cron**: Die Statistik der Harvester wird mit jedem Harvesting Prozess aktualisiert, jeder Harvester besitzt seinen eigenen Cron.

### Url Prüfung

Die **Url Prüfung** ermittelt den Status, der in den Metadaten enthaltenen URLs (Download Links).

Für alle Distribution-URLs wird eine HEAD-Abfrage gemacht. Bei einer korrekten Antwort wird der HTTP-Statuscode der Antwort gespeichert, falls ein Fehler auftritt die entsprechende Fehlermeldung.

Im Diagramm werden die Ergebnisse gruppiert nach Statuscode-Bereich (2xx, 4xx oder 5xx) bzw. nach fehlerhafte Anfrage.
Bei Klick auf einen Datensatz im Diagramm öffnet sich ein Pop-Up in der die Ergebnisse für diesen Durchlauf nach genauem Statuscode oder Fehler aufgeschlüsselt werden und jeweils die betroffenen URLs aufgelistet werden. Die URL-Einträge sind mit einer Suche nach mCLOUD Datensätzen mit dieser Distribution-URL verknüpft.

Hinweise zu Ergebnissen
Status 405 - Method Not Allowed: Hier handelt es sich üblicherweise um Systeme die keine HEAD-Abfrage unterstützen. Ein normaler regulärer Aufruf der URL ist oftmals trotzdem möglich.

- **Index**: url_check_history (s. Indizes)
- **Cron**: Unter `Konfiguration` > `Checks` > `Url Check` kann ein Cron Expression hinterlegt werden.

### Index Prüfung

Die **Index Prüfung** ermittelt über alle Indizes hinweg statistische Daten.

Aktuell werden die Anzahl der validen und nicht validen Datensätze, sowie die Anzahl der Datensätze mit Raum- bzw. Zeitbezug im Graphen angezeigt.
Nicht valide Datensätze sind im Index markiert, dies sind z.B. Datensätze, die über keinen Download-Link verfügen.

**Anmerkung für mCLOUD-Portal**: Darüber hinaus erfasst die **Index Prüfung** den Status der Facetten aus dem mCLOUD-Portal. Diese Information wird allerdings aktuell nicht angezeigt.
Im Tab Indizes kann aber mit Klick auf den entsprechenden Statistik Index diese Information angezeigt werden.

- **Index**: index_check_history (s. Tab Indizes)
- **Cron**: Unter `Konfiguration` > `Checks` > `Index Check` kann ein Cron Expression hinterlegt werden.

## Indizes

Die Seite **Indizes** zeigt die aktuellen Indizes in Elasticsearch an. Es können jeweils die ersten 10 Einträge pro Index für eine schnelle Kontrolle in der `VORSCHAU` angezeigt werden.

Im 3-Punkte-Menü eines Index stehen die Funktionen `Exportieren` und `Löschen` zur Verfügung.

Die Statistik Indizes enden mit:
- *index_check_history*
- *harvester_statistic*
- *url_check_history*

### Index importieren

Über die Schaltfläche `IMPORTIEREN` kann ein exportierter Index importiert werden (Seite Indizes ganz oben).

> **Hinweis**: Ein Index kann nur importiert werden, wenn es unter dem Namen noch keinen Index gibt. Gegebenenfalls bestehende Indizes müssen zunächst gelöscht werden.

## Log

Auf der Seite Log wird das Log-File der letzten Harvester Läufe und Systemmeldungen angezeigt. Fehler sind rot hervorgehoben, um Probleme schneller erkennen zu können.

## Status-Mails

Wurden die Info-Mails in der Konfiguration aktiviert (s. [Konfiguration](#konfiguration)), so wird eine Mail versendet, wenn die Ergebnismenge unter der eingestellten Schwelle gegenüber dem letzten Import liegt oder gar keine Ergebnisse importiert wurden.

Beispiel-Betreff:

- "*[mCloud] Importer "mCLOUD Excel Datei" mit weniger Ergebnissen!*"
- "*[mCloud] Importer "Open-Data-Portal des Rhein-Neckar-Verkehrs (RNV)" ohne Ergebnisse!*"

**Beispiel-Mail:**

```
Current Run:
---------------------------------------------------------
mCLOUD Excel Datei (EXCEL)
---------------------------------------------------------
Number of records: 382
Skipped records: 0
Record-Errors: 0
Warnings: 0
App-Errors: 0
Elasticsearch-Errors: 0

Last Run (Thu Jun 04 2020 14:34:29 GMT+0200 (Central European Summer Time)):
---------------------------------------------------------
mCLOUD Excel Datei (EXCEL)
---------------------------------------------------------
Number of records: 536
Skipped records: 0
Record-Errors: 0
Warnings: 0
App-Errors: 0
Elasticsearch-Errors: 0
```

**Folgende Informationen werden geliefert:**

- **Number of records**: Anzahl der Datensätze, die von der Schnittstelle geliefert werden.
- **Skipped records**: Anzahl Datensätze, die Aufgrund von Filtereinstellungen nicht übernommen wurden.
- **Record-Errors**: Anzahl Datensätze, bei deren Konvertierung ein Fehler aufgetreten ist (beispielsweise durch Format-Fehler, fehlende Details etc.), diese Datensätze werden nicht übernommen.
- **Warnings**: Anzahl Warnungen die beim konvertieren der Datensätze aufgetreten sind (insbesondere fehlende Lizenzen und unbekanntes Format der Resource), die betroffenen Datensätze werden übernommen.
- **App-Errors**: Allgemeine Fehler beim Abfragen des Datenanbieters die sich nicht auf einen einzelnen Datensatz beziehen (beispielsweise Probleme in der Kommunikation).
- **Elasticsearch-Errors**: Fehler bei der Kommunikation mit dem Elasticsearch-Server.

Sofern vorhanden werden zusätzlich die Daten aus dem vorherigen Lauf mit angegeben.
Wenn beim Import *App-Errors* oder *Elasticseach-Errors* auftreten, so wird der neue Index verworfen und ein gegebenenfalls vorhandener, alter Index bleibt erhalten.
Bei 0 Ergebnissen wird der neue Index verworfen und der alte Index beibehalten (bei CSW und CKAN).

## Harvester Ausfüllhilfe

Im folgenden Abschnitt finden Sie Beschreibungen und Ausfüllhilfen, um einen Harvester aufzusetzen.

Bei der Konfiguration der Harvester gibt es allgemeine Einstellungen die bei allen Harvestern zur Verfügung stehen, und spezifische Einstellungen für die verschiedenen Typen von Importern, diese werden erst angezeigt, wenn der Typ des Importers ausgewählt wurde. Die verfügbaren Harvester-Typen sind profilabhängig.

Im folgenden wird die Konfiguration eines **CSW Harvesters** beschrieben. Klicken Sie zunächst auf Harvester `HINZUFÜGEN`.

### Basis Angaben

| Feldname                    | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Typ                         | Typ der Datenquelle (verfügbaren Typen sind profilabhängig) <br>Beispielwert: `CSW` |
| Indexname                   | Der Name von dem Index, in den Daten abgespeichert werden sollen. <br>Beispielwert: `csw_data_server_de` |
| Beschreibung                | Beschreibung von dem Harvester <br>Beispielwert: `data-server.de`  |
| Priorität                   | Bestimmt die Priorität der Datensätze bei der Deduplizierung (profilabhängig). Gelöscht wird der Datensatz mit der niedrigeren Priorität. Über die Priorisierung von Harvestern können Harvester ab- oder aufgewertet werden, bei Duplikaten werden die Datensätze des am höchsten priorisierten Harvesters beibehalten.<br>Beispielwert: `5` |

### Allgemeine Einstellungen

| Feldname                    | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Max. Datensätze pro Anfrage | Um den Harvester-Prozess zu optimieren können die Dokumente gebündelt abgefragt werden. Legen Sie dafür die maximale Anzahl an Datensätzen pro Anfrage fest. <br>Beispielwert: `200` |
| Start Datensatz             | Definieren Sie mit welchen Datensatz gestartet werden soll.  <br>Beispielwert: `1` |
| Katalog-Identifier          | TODO |

### CSW Einstellungen

| Feldname                    | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| HTTP Methode                | Anfragemethode an den CSW Dienst <br>Beispielwert: `POST`         |
| GetRecords URL              | URL von der GetRecords Schnittstelle <br>Beispielwert: `https://gdk.gdi-de.org/gdi-de/srv/ger/csw` |
| Anzahl paralleler Abfragen  | Um den Harvest-Prozess zu beschleunigen kann eine Anzahl von parallelen Abfragen definiert werden <br>Beispielwert: `6` |
| Harvesting Modus            | Bei Harvesting kann zwischen folgenden Modi gewählt werden: <br>- `Standard`: Eine vereinfachte Abfrage, die zusätzlich Dienst nicht auflöst. <br>- `Separat (langsam)`: Enthaltene Dienste (WFS und WMS Distributionen) werden zusätzlich aufgelöst. Dieser Prozess ist zeitintensiver. Zusätzlich kann die max. Dienste pro Anfrage definiert werden. |
| Max. Dienste pro Anfrage    | Relevant für den Modus `Separat`, um maximale Anzahl an Dienste pro Anfrage zu definieren <br>Beispielwert: `30`                                             |
| WFS/WMS auflösen            | Enthaltene WFS/WMS Dienste auflösen <br>Beispielwert: `ja (langsam)` |
| Toleranz: Polygon vereinfachen | Optional können sehr detaillierte Polygone vereinfacht werden, um die Speichergröße zu reduzieren. <br>Beispielwert: `0,0001`                                            |
| Planstatus                  | Ermöglicht das Filtern von Datensätze nach Planstatus (relevant in Profile `diplanung`) <br>Beispielwert: `festgestellt` |

### Filter und Regeln

Die folgende Felder sind **CSW** spezifisch.

| Feldname                    | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Ausgeschlossene IDs         | Liste von IDs, die ausgeschlossen werden <br>Beispielwert: `e2ed7da0-007a-11e0-be74-0000779eba3a` |
| Nicht ausgeschlossene IDs   | Liste von IDs, die nicht ausgeschlossen werden <br>Beispielwert: `e2ed7da0-007a-11e0-be74-0000779eba3a` |
| Muss Daten-Download enthalten | Checkbox um ausschließlich Datensätze mit Daten-Download zu indexieren  |
| Datenformat ausschließen | Wenn Daten-Download enthalten sein müssen, kann in diesem Feld eine Liste an Datenformaten ausgeschlossen werden. <br>Beispielwert: `rss, doc` |
| Record Filter               | Der Record Filter ermöglicht die präzise Filterung von CSW-Datensätzen im Rahmen einer CSW GetRecords-Abfrage. Mit diesem Filter können gezielte Anfragen erstellt werden, die ausschließlich die relevanten Datensätze zurückgeben, indem verschiedene Bedingungen kombiniert und Attribute spezifisch abgeglichen werden. <br>Beispielwert: Siehe Ende der Tabelle |
| Either keywords             | Liste von Schlagwörtern, die es ermöglicht eine nachträgliche Filterung vorzunehmen (nach der getRecords Abfrage) <br>Beispielwert: `keyword-A, keyword-B` |

Beispiel für einen Record Filter:

```
<ogc:Filter>
    <ogc:And>
        <ogc:Or>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Subject</ogc:PropertyName>
                <ogc:Literal>Bauleitplanung</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Subject</ogc:PropertyName>
                <ogc:Literal>Bauleitpläne</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>Subject</ogc:PropertyName>
                <ogc:Literal>Bebauungsplan</ogc:Literal>
            </ogc:PropertyIsEqualTo>
        </ogc:Or>
        <ogc:PropertyIsLike escapeChar="\" singleChar="?" wildCard="*">
            <ogc:PropertyName>AnyText</ogc:PropertyName>
            <ogc:Literal>*Hamburg*</ogc:Literal>
        </ogc:PropertyIsLike>
    </ogc:And>
</ogc:Filter>
``` 

### Weitere Einstellungen

Für einen Harvester kann ein zusätzlicher `Mapping-Code` hinterlegt werden, um die Elasticsearch Einträge vor dem Speicher anzupassen. Dafür werden Vorkenntnisse über das Elasticsearch Mapping benötigt.

> **Beispielszenario**: Der Wert "Mitte" soll eine räumliche Einordnung ermöglichen. Das Wort ist jedoch nicht eindeutig genug. Der Wert könnte entsprechend nach "Berlin Mitte" gemappt werden, um die Verständlichkeit zu erhöhen.  

Beispielwert für `Mapping-Code`:

```
doc.spatial_text = `Berlin ${doc.spatial_text}`;
```