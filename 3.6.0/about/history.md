---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Version 3.6.0.3

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/3.6.0.3/))
- iPlug CSW ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/3.6.0.3/))
- iPlug DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/3.6.0.3/))
- iPlug Excel ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/3.6.0.3/))
- iPlug IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/3.6.0.3/))
  **Achtung Schnittstellenänderung! Portal und iPlug IGE müssen zusammen aktualisiert werden.**
- iPlug Management ([download](https://distributions.informationgrid.eu/ingrid-iplug-management/3.6.0.3/))
- iPlug MapClient ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc-mapclient/3.6.0.3/))
- iPlug OpenSearch ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/3.6.0.3/))
- iPlug SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/3.6.0.3/))
- iPlug WFS ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/3.6.0.3/))
- iPlug XML ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/3.6.0.3/))

### Änderungen


- [Bug] [Portal] Katalogbaum aufklappen ([REDMINE-115](https://dev.informationgrid.eu/redmine/issues/115))
- [Bug] [Portal] Fehler in Darstellung von Datenkatalogen ([REDMINE-128](https://dev.informationgrid.eu/redmine/issues/128))
- [Bug] [Portal] Falscher Datensatz in Detailanzeige ([REDMINE-130](https://dev.informationgrid.eu/redmine/issues/130))
- [Bug] [Portal] Fehlende Daten bei der Adress-Suche im Portal ([REDMINE-145](https://dev.informationgrid.eu/redmine/issues/145))
- [Bug] [Portal] Geodatendienst mit Checkbox "Zugang geschützt" erlaubt trotzdem "In Karte zeigen" in Detaildarstellung ([REDMINE-151](https://dev.informationgrid.eu/redmine/issues/151))
- [Bug] [MapClient] Gruppenselektierung unter Aktive Dienste ist nicht korrekt ([REDMINE-146](https://dev.informationgrid.eu/redmine/issues/146))
- [Bug] [MapClient] Anordnung der Layer durch Drag und Drop unter Aktive Dienste falsch ([REDMINE-147](https://dev.informationgrid.eu/redmine/issues/147))
- [Bug] [MapClient] MapFish Aktualisierung auf 1.2.0 ([REDMINE-148](https://dev.informationgrid.eu/redmine/issues/148))
- [Bug] [MapClient] YX Koordinaten für weitere Projektionen mit der WMS Version 1.3.0 ([REDMINE-149](https://dev.informationgrid.eu/redmine/issues/149))
- [Bug] [MapClient] Auswahl von BWaStr-Locator Einträge in mehreren Linien darstellen ([REDMINE-150](https://dev.informationgrid.eu/redmine/issues/150))
- [Bug] [IGE] URL-Pflege funktioniert nicht bei großen Datenmengen ([REDMINE-141](https://dev.informationgrid.eu/redmine/issues/141))
- [Bug] [System] Fehlerhafte Query bei komplexerer Suche ([REDMINE-142](https://dev.informationgrid.eu/redmine/issues/142))


## Version 3.6.0.2

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/3.6.0.2/))
- iPlug DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/3.6.0.2/))
- iPlug SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/3.6.0.2/))

### Änderungen


- [Feature] Einfachere Konfiguration von Mapping-Skripten ([REDMINE-99](https://dev.informationgrid.eu/redmine/issues/99))
- [Bug] IGE: Scrollbar in Listenauswahl nicht bedienbar ([REDMINE-82](https://dev.informationgrid.eu/redmine/issues/82))
- [Bug] iPlug-DSC: Fehler beim Anzeigen von Adressen Treffer im Portal ([REDMINE-89](https://dev.informationgrid.eu/redmine/issues/89))
- [Bug] Fix Installer, so dass Update Funktionalität wieder vorhanden ([REDMINE-90](https://dev.informationgrid.eu/redmine/issues/90))
- [Bug] Crawling schlägt fehlt beim ersten Start ([REDMINE-92](https://dev.informationgrid.eu/redmine/issues/92))
- [Bug] SE iPlug: Übertragung der allgemeinen Metadaten auf Index ist fehlerhaft ([REDMINE-94](https://dev.informationgrid.eu/redmine/issues/94))
- [Bug] InGrid Map Referenzsystemwechsel funktioniert nicht nach Verschieben Kartenauschnitt ([REDMINE-95](https://dev.informationgrid.eu/redmine/issues/95))
- [Bug] Fix "save search" when logged in. ([REDMINE-96](https://dev.informationgrid.eu/redmine/issues/96))


## Version 3.6.0.1

### Komponenten

- iPlug SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/3.6.0.1/))

### Änderungen


- [FEATURE] Die Suche im BKG WFS muss case insensitive erfolgen. ([REDMINE-81](https://dev.informationgrid.eu/redmine/issues/81))
- [BUG] Proxy Settings werden bei Verwendung von Java8 und Zugriff auf BKG WFS nicht korrekt angewendet ([REDMINE-80](https://dev.informationgrid.eu/redmine/issues/80))



## Version 3.6.0

### Änderungen

#### Alle iPlugs: Verwendung von Elastic (Search)

Die bisher verwendete, auf Apache Lucene basierende, anwendungsspezifische Lösung zum Indexieren und Suchen wurde durch Elastic (Search) ersetzt. Die neue Lösung ist wesentlich mächtiger in Bezug auf die Indexierung und Recherche und bildet die Basis für weitere funktionale Erweiterungen wie z.B.:

- Indexierung von zusammengesetzten Wörtern
- Integration von Thesaurus Systemen für die automatische Anreicherung mit Schlagworten
- "Meinten Sie ..." Funktionalität

und vieles mehr.

#### InGrid Editor: Katalog-übergreifende Daten-Dienste-Kopplung über CSW / UUID

Im InGrid Editor kann im Dialog "Dargestellte Daten" für einen Geodatendienst ein GetRecordById Request angegben werden. Über die Angabe dieses Requests wird eine katalogübergreifende Daten-Dienste-Kopplung ermöglicht.

![Externe Daten-Dienste Kopplung](../images/ingrid_external_coupling.png "Externe Daten-Dienste Kopplung")

Dadurch wird es jetzt möglich Daten und Dienste Objekte, die in unterschiedlichen Katalogen gepflegt werden, INSPIRE und GDI-DE konform zu koppeln.

Die gekoppelten Daten stehen über den ATOM Download Service INSPIRE kompatibel zur Verfügung.


#### CSW Schnittstelle: Verbesserung des Harvesting Prozesses

Der Harvesting Prozess wurde in der CSW Schnittstelle überarbeitet und optimiert. Die Schnittstelle unterstützt nun das Harvesting von sehr umfangreichen Katalogen (mehrere 100.000 Datensätze).


#### Weitere Funktionalitäten und Fehlerbehebungen

Portal

- Captcha Funktionalität ist nun kompatibel mit OpenJDK 7
- Zoomen auf Orte außerhalb der initialen Bounding Box wird im Karten Client unterstützt
- Export von Text und Farben wird im Karten Client unterstützt (Redlining)
- Geschützte WMS Dienste werden in der Detaildarstellung nun nicht mehr verlinkt

Ingrid Editor

- Vollständige Anzeige der Vorschau auf kleineren Displays
- Rechtliche Grundlagen werden nun wieder gespeichert
- Dienste Kompatibilität im GetCapabilities wurde erhöht
