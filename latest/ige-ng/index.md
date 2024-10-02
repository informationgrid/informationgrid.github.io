---
layout: default
title: IGE-NG Dokumentation
description: "InGrid: Indizieren, Recherchieren, Visualisieren, Teilen"
---

## Hilfe zum InGrid-Editor NG

## Installation

### Systemvoraussetzung

* 768 MB RAM
* 1 GB Harddrive

* PostgreSQL 13+
* Docker

### Konfiguration

| Umgebungsvariable               | Beschreibung                                                                                                     |
|---------------------------------|------------------------------------------------------------------------------------------------------------------|
| _JAVA_OPTIONS                   | Angabe der zu aktivierenden Profile: "-Dspring.profiles.active=postgresql,elasticsearch,ingrid"                  |
| APP_HOST_URL                    | URL für den Emailversand                                                                                         |
| BROKER_URL                      | URL für die Websocket Verbindung, z.B. "wss://some-domain/ige-ng/ws"                                             |
| CONTEXT_PATH                    | Wenn sich die Anwendung unter einem Kontextpfad befindet, dann muss dies hier eingetragen werden, z.B. "/ige-ng" |
| CODELIST_REPO_URL               | Die URL zum Codelisr-Repository                                                                                  |
| CODELIST_REPO_USER              | Der Benutzername zum Codelist-Repository                                                                         |
| CODELIST_REPO_PASSWORD          | Das Passwort zum Codelist-Repository                                                                             |
| MAIL_FROM                       | Absender-Adresse für ausgehende Emails                                                                           |
| KEYCLOAK_URL                    | URL zu Keycloak                                                                                                  |
| KEYCLOAK_BACKEND_USER           | Keycloak Benutzername                                                                                            |
| KEYCLOAK_BACKEND_USER_PASSWORD  | Keycloak Passwort                                                                                                |
| DATABASE_HOST                   | IP der Postgres Datenbank                                                                                        |
| DATABASE_USERNAME               | Postgres - Benutzername                                                                                          |
| DATABASE_PASSWORD               | Postgres - Passwort                                                                                              |
| SHOW_SWAGGER_UI                 | Aktiviere die Anzeige der Swagger-UI für die API von OGC-API                                                     |
| WAIT_FOR_PARAM                  | Starte die Anwendung erst, wenn der eingetragene Dienst erreichbar ist, z.B. "postgres:5432"                     |

Wenn bei der Konfiguration der Verbindung zu Elasticsearch HTTPS/SSL aktiviert wurde, dann muss ein Zertifikat
hinterlegt werden. Dies muss sich im Docker-Container im Root-Verzeichnis befinden, also `/elasticsearch-ca.pem`.

## Das Metadatenkonzept

### Ziele und Realisierung

Die Suche nach Daten zu geografischen und umweltbezogenen Themen gestaltet sich nicht immer einfach, vor allem wenn
nicht bekannt ist, ob solche Daten überhaupt erhoben wurden, von wem sie erhoben wurden und woher man sie bekommen kann.
Der InGrid-Catalog (IGC) hilft, geografische und umweltrelevante Datenbestände aufzufinden und diese zu nutzen.

Analog dem Katalog einer Bibliothek verzeichnet der InGrid-Catalog die landesweit und dezentral vorgehaltenen
Datenbestände, ohne sie selbst zu enthalten; er ist also ein Informationssystem über Informationsbestände. Im IGC werden
die Datenbestände an­hand definierter Eigenschaften beschrieben und jeweils mit der Adresse eines zuständigen
Ansprechpartners ausgewiesen. Fach­leute, die die Daten erheben, füllen den IGC mit Inhalt und aktuali­sieren ihn;
dadurch wird eine größtmögliche Qualität der Datenbe­schreibung erreicht. Eine interne Benutzerverwaltung regelt die
Schreib- und Aktualisierungsrechte im IGC.

Die wesentlichen **Aufgaben und Vorteile** des InGrid-Catalogs sind demnach folgende:

* ein möglichst kompletter Überblick über die großen Mengen geografischer und umweltrelevanter Datenbestände, die von
  Behörden und Institu­tionen erhoben und gespeichert werden
* eine präzise Beschreibung der Datenqualität dieser Datenbe­stände
* Standardisierung der Beschreibung von Daten­quellen nach internationalen Standards wie der ISO 19115, der ISO 19119
  und INSPIRE
* Bereitstellung der Metadaten über international standardisierte Schnittstellen wie OGC-konformer Catalog Service Web (
  CSW) oder OpenSearch
* Zugriff auf Daten via Metdaten wie z.B. auf verzeichnete Karten über den OGC-konformen Web Mapping Service (WMS)
* ein Informationsinstrument für die Öffentlichkeit im Sinne des Umweltinformationsgesetzes (UIG), der EU-Richtlinie zum
  freien Zugang zu Umweltinformationen und der europäischen Richtlinie zum Aufbau einer Geodateninfrastruktur (INSPIRE)

Der InGridEditor ist die Komponente zur Erfassung und Pflege der Metadaten.

### Daten und Adressen

Der InGrid-Catalog (IGC) ist ein **Metainformationssystem** , d.h. ein Informationssystem über Informationsbestände. Im
IGC werden also keine originären Datenbestände verwaltet, sondern - wie der Name _Katalog_ schon sagt - ausschließlich
Informationen über diese. Der IGC soll die große Menge an geografischen oder umweltrelevanten Daten wieder überschaubar
und verfügbar und damit nutzbar machen.

Der zentrale Bestandteil des IGCs sind die sogenannten (Metadaten-)Daten. Sie enthalten die Metainformationen zu den
geografischen oder umweltrelevanten Datenbeständen.

Was ist Metainformation? Uns umgebende reale Umweltdaten (wie beispielsweise Wiesen, Wälder, Flüsse, Seen, Luft und
Boden) werden vermessen, beobachtet und/oder beurteilt. Daraus erhalten wir Datenbestände bzw. Datensätze, wie z.B.
Biotopkartierungen, Messreihen der Gewässer- und Luftgüteüberwachungssysteme, Bodendaten aus Bohrungen und viele andere
mehr. Zu jedem Datenbestand kann eine Beschreibung erstellt werden. Diese Metainformation wird als Meta-Datenobjekt
bezeichnet, sie beschreibt das Datenobjekt eindeutig; d.h. Metadatenobjekte informieren über das angewandte
Messverfahren bzw. über die Art der Datengewinnung, wo und wann diese Daten aufgenommen wurden und in welcher Form -
digital, analog, als Karten o.ä. - die Datensätze vorliegen. Die Metadaten enthalten also die Metainformationen zu den
Umweltdaten.

Wie bereits angedeutet, reicht es nicht aus zu wissen, mit welcher wissenschaftlichen Methode ein Datenobjekt erhoben
wurde. Um mit Hilfe eines Datensatzes eine richtige Aussage zu machen oder eine Schlussfolgerung zu ziehen, benötigt man
auch Informationen zu Ort und Zeit der Erhebung; sonst ist der Datenbestand wertlos. Es ist beispielsweise wesentlich zu
wissen, ob eine Messstation eines Luftgüteüberwachungssystems ihre Messungen in der Innenstadt oder in ländlichem Gebiet
macht oder wann ein bestimmtes Biotop kartiert wurde.

Nicht immer sind die Datenbestände mit dem klassischen Messungsbegriff vereinbar, so dass die Metadatenobjekte in
verschiedene Datensatz-Typen unterschieden werden. Dabei wurde zugrunde gelegt, dass Daten klassifiziert werden können.

Es werden sieben Datensatz-Typen unterschieden:

* Organisationseinheit
* Datenbank
* Dokument
* Geodatensatz
* Geodatendienst
* Anwendung
* Projekt

Metadatenobjekte enthalten Angaben zum Fach-, zum Raum- und Zeitbezug eines Datensatzes. Der Fachbezug macht Angaben zur
Art und Weise der Datengewinnung und ihrer Genauigkeit, Raum- und Zeitbezug geben an, wo und wann das Datenobjekt
gewonnen wurde.

Jedem Datensatz wird mindestens eine Adresse zugeordnet (z.B. Adresse des Verwalters oder des Ansprechpartners). Durch
diese Zuordnungsmöglichkeiten (Verweise) müssen die Adressen jeweils nur einmal in die Adressverwaltung des IGC
eingegeben bzw. gepflegt werden.

Die Adressen lassen sich in zwei Kategorien unterscheiden:

* Organisationen
* Personen (können einer Organisation untergeordnet sein)

Die Gesamtheit der Datensätze und Adressen, d.h. der Metadatenbestand, wird als Katalog bezeichnet.

### Die Ordnung des InGrid-Catalogs (IGC) (Der Strukturbaum)

Im IGC umfasst ein Katalog sowohl Datensätze als auch Adressen. Die Adressen werden nach Organisationen und Personen
unterschieden. Unter Organisationen lassen sich andere Organisationen oder Personen ordnen.

Bei den Datensätze sowie auch bei den Adressen, ermöglichen Ordner eine weitere Art der Strukturierung. Die Struktur der
Datensätze gliedert sich im Normalfall in drei weitere Ebenen:

* Organisatorische Struktur
* Fachliche Struktur
* Daten-Datensätze

## Aufbau des Editors

### Metadatenerfassung und Verwaltungsfunktionen

Das Hauptmenü unterscheidet sich, abhängig von der Rolle des eingeloggten Benutzers. So steht einem
Katalog-Administrator mehr Funktionen zur Verfügung als einem Autor.

Jedes [Hauptmenü](#editor-design-2) kann weitere [Untermenüs](#editor-design-3) enthalten. Bei einzelnen Menüpunkten
kann zudem zusätzlich eine [Funktionsleiste](#editor-design-4) existieren.

### Die Navigationsleiste

Die Navigationsleiste befindet sich in der rechten oberen Ecke des Editors. Sie ist für alle Komponenten und alle
Menüpunkte gleich und besteht aus folgenden Punkten:

* **Anzeige des aktuellen Katalogs**: Ist der Benutzer mehreren Katalogen zugeordnet, besteht hier die Möglichkeit zu
  einem anderen Katalog zu wechseln
* **Profil-Menü**
* **System-Menü**

### Das Hauptmenü

Das Hauptmenü unterscheidet sich in das für die Metadatenerfassung und das für die Verwaltungsfunktionen. Es bezieht
sich auch den aktuellen Katalog und ist am linken Rand des Fensters vorzufinden.

Die Menüpunkte für die **Metadatenerfassung** sind:

* Übersicht
* Daten
* Adressen
* Recherche
* Reports
* Benutzer & Rechte
* Import & Export
* Katalog

Das Dashboard ist die Einstiegseite für den InGrid-Editor und zeigt eine Zusammenfassung der gerade in Bearbeitung
befindlichen Datensätze und Adressen, abhängig vom eingeloggten Benutzer.

## Dashboard

### Beschreibung

Das Dashboard zeigt eine Übersicht des Kataloges in Form einiger allgemeiner Informationen und einer Übersicht aller
zuletzt bearbeiteter Datensätze und Adressen.

## Hierarchie u. Erfassung

### Anordnung der Metadaten (Der Strukturbaum)

Im **linken Fenster** werden die Datensätze und Adressen und ihre Stellung in der Hierarchie des Kataloges angezeigt.

Bei den Objekten sehen Sie den Objektnamen und das Icon der Datensatz-Typ, bei den Adressen den Adresstitel und das Icon
des Adresstyps.

Die Icons zeigen den jeweiligen Bearbeitungsstand:

* **Schwarz** bedeutet, dass der Datensatz bzw. die Adresse veröffentlicht, d.h. recherchierbar ist.
* **Orange** bedeutet, dass der Datensatz bzw. die Adresse in Bearbeitung ist.
* **Schwarz/Orange** bedeutet, es gibt eine veröffentlichte Version des Objektes bzw. der Adresse und eine bearbeitete.

**Neuen Datensatz anlegen**

Anlegen eines neuen Datensatzes oder einer neuen Adresse im aktuellen Ordner oder, falls man sich gerade auf einem
Ordner befindet, unterhalb dessen.

### getCapabilties-Assistent

Der _getCapabilties Assistent_ unterstützt die Erfassung von Services in dem Datensatz-Typ _Geodatendienst_ .

Hierzu geben Sie die getCapability-URL des Dienstes an.

Der Assistent fragt den Dienst über diese URL ab und trägt alle in der getCapability verfügbaren Informationen in dan
Metadaten-Datensatz ein. Dies sind Informationen wie _Titel_ und _Beschreibung_ aber z.B. auch die vom Dienst zur
Verfügung gestellten _Operationen_.

Es werden die folgenden Dienste unterstützt:

* WMS
* WFS
* WCS
* WCTS
* CSW

Mit _**Analyse**_ wird der Assistent gestartet, die Informationen vom Service abgerufen und ein neuer Datensatz mit den
erhaltenen Informationen erstellt.

## Reports

### URL-Pflege

Beim Aufruf des Untermenüpunkts _URL-Pflege_ wird eine Prüfung der in allen Datensätzen vorhandenen URLs durchgeführt.
Sie können diese Prüfung später wiederholen, indem Sie auf den Button _Prüfung starten_ klicken.

Je nach Umfang des Kataloges und Auslastung des Servers kann die Überprüfung einige Minuten dauern. Sie kann über
_Prüfung stoppen_ gestoppt werden.

Das Ergebnis der URL-Prüfung wird in der darunter stehenden Tabelle angezeigt.

In der Spalte _Status_ wird die Rückmeldung über die Verfügbarkeit der Webseiten dokumentiert. Für Fehler wird ein
HTTP-Fehlercode angegeben.

Ein oder mehrere URLs können ersetzt werden, indem Sie die zu ersetzenden URLs in der Tabelle markieren und in das
Eingabefeld unter der Tabelle eine neue URL eingeben. Mit der Funktion Ersetzen tauschen Sie die URL aus.
