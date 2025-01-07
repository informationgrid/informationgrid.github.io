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

In einem Docker-Setup sollten diese Dateien vom Hostsystem in den Container gemappt werden.

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


## Konfiguration

Unter dem Menupunkt **Konfiguration** kann der Harvester eingerichtet werden. Dabei können Sie folgende Konfiguration vornehmen:
  * [Datenbank](#datenbank)
  * [Elasticsearch](#elasticsearch)
  * [Zusätzliche Einstellungen](#zusätzliche-einstellungen)
  * [Checks](#checks)
  * [Index-Backup](#index-backup)
  * [Harvesting Differenzen](#harvesting-differenzen)
  * [E-Mail-Einstellungen](#e-mail-einstellungen)

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
| Offset Cron-Jobs in Minuten | TODO <br>Beispielwert: `0`                                        |
| Log-Level für fehlende Format-Mappings | Definieren Sie das Log-Level für fehlende Format_Mappings <br>Default: `WARNING` |
| Proxy URL                   | Proxy für den Harvester                                           |
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

## Mapping (Datenformate) definieren

Unter dem Menu-Punkt **Konfiguration > Mapping (Datenformat)** können Mappings hinzugefügt werden, um den Index einheitlich zu halten (z.B. "atom", "Atom Feed" und "AtomFeed" sollen als "ATOM" gespeichert werden).

## Harvester Prozesse hinzufügen

Unter dem Menu-Punkt **Harvester** finden Sie alle hinzugefügten Harvester-Prozesse. Um eine neue Harvester anzulegen, klicken Sie auf `HINZUFÜGEN`. Nun öffnet sich eine Dialog, der Sie dabei unterstützt einen Harvester anzulegen. 

1. Wählen Sie zunächst den Typ der Datenquelle aus. 
   - Die verfügbaren Typen sind vom Profil abhängig.
2. Füllen Sie die entsprechenden Felder aus. 
   - Ausfüllhilfen finden sie im Abschnitt [Ausfüllhilfe: CSW Harvester](#ausfüllhilfe-csw-harvester). 
3. Klicken Sie auf `ANLEGEN`, um den Prozess abzuschließen. 

Nach dem Sie einen Harvester angelegt haben, ist dieser in der Liste zu finden. Über den Schieberegler auf der rechten Seite kann ein Harvester aktiviert oder deaktiviert werden.

Wenn Sie einen Harvester anklicken, erhalten Sie einen Überblick über die letzten Aktivitäten. Sie können zwischen folgenden Optionen wählen:
- Harvester manuell starten
- Error-Log einsehen
- Historie abrufen
- Zeitliche Ausführung planen (Cronjob einrichten)
- Harvester bearbeiten
- Harvester entfernen

## Ausfüllhilfe: CSW Harvester

Im folgenden Abschnitt finden Sie Beschreibungen und Ausfüllhilfen zu den einzelnen Feldern von einen CSW Harvester.

1. Klicken Sie auf Harvester `HINZUFÜGEN`
2. Unter dem Dropdown-Feld `Typ` wählen Sie `CSW`

| Feldname                    | Beschreibung                                                      |
|-----------------------------|-------------------------------------------------------------------|
| Indexname                   | Der Name von dem Index, in den Daten abgespeichert werden sollen. <br>Beispielwert: `csw_data_server_de` |
| Beschreibung                | Beschreibung von dem Harvester <br>Beispielwert: `data-server.de`  |
| Priorität                   | Die Priorität gegenüber anderen Harvester bei Deduplizierung (profilabhängig) <br>Beispielwert: `5` |

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