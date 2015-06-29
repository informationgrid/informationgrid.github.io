---
layout: default
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Neuigkeiten in Version 3.5.0

### Java 8 Kompatibilität

Alle Komponenten der InGrid Software sind JAVA 8 kompatibel.

### OpenSource Lizensierung

Die InGrid Software steht unter der European Union Public License (EUPL), Version 1.1 zur Verfügung.

Der SourceCode befindet sich auf GITHUB unter [https://github.com/informationgrid](https://github.com/informationgrid).

Die Dokumentation findet sich unter [https://ingrid-oss.eu/](https://ingrid-oss.eu/).

### Aktualisierung des Portals und InGrid Editor

- Aktualisierung des Portals auf Tomcat 7 und  Jetspeed 2.3.

- Aktualisierung des InGrid Editors auf Dojo Toolkit 1.10.2.

- Aktualisierung des Map Clients auf Geoext 2.0

### Verwendung des WFS Services des Geodatenzentrum als Gazetteer

Nachdem die Gazetteer Funktion der SNS Schnittstelle keine aktuellen Daten liefert, wird als Gazetteer der WFS des Geodatenzentrums verwendet. Damit stehen nun die aktuellen amtlichen Raumbezüge zu Verfügung.

Aufgrund der beschränkten Funktionalität entfallen folgende Funktionen:

- Autoclassify (Verschlagwortung und Georeferenzierung von Texten)
- Lagebeziehungen von Raumbezügen

### Neues Suchmaschinen iPlug

Das iPlug SE wurde komplett neu überarbeitet und flexibilisiert.

- Trennung von Nutch und InGrid spezifischem Code
- Nutch Prozesse laufen in einem isolierten Prozess
- Aktuell verwendete Nutch Version: 1.9
- Indexierung und Suche über Elastic Search Komponente im iPlug
- Stark überarbeite Administration/URL Pflege, universeller und komfortabler
- automatische Datenbankaktualisierungen in zukünftigen Versionen möglich
- verbesserter Test der Start Urls (näher am NUTCH Verhalten als vorher)
- Automatische Crawlerbereinigung nach Neustart der Komponente (wartungsfrei nach Neustart)


### Weitere Funktionalitäten und Fehlerbehebungen

CSW Schnittstelle

- GET Request für GetRecords Anfrage wird unterstützt
- Fix für nicht zuverlässig funktionierende Suche nach Queriably "modified"
- Verbesserung der GDI-DE Testsuite Kompatibilität
- Fix für falsche Reihenfolge in GeographicBoundingBox in Element Set BRIEF, SUMMARY


CSW iPlug

- Neue Requestmethod XML POST kann alternativ zu SOAP Requests verwendet werden. (ab version 3.5.1)
- Verbesserung des Harvesting Prozesses insbesondere bei unzuverlässigen Verbindungen (Wiederholung nach Fehler, Abbruch nach bestimmter Anzahl von Fehlern). (ab Version 3.5.1)

IGE

- Automatische Aufteilung von Raumbezügen bei der Aktualisierung über neue Schnittstelle SNS 
- Änderungen bei Codelisten-Einträgen zu Zugangsbeschränkungen und Nutzungsbedingungen.
- Feldgröße für URLs erhöht
- Verbesserung der Robustheit von Export/Import 
