---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Version 3.6.1.2

Release: 22.01.2016

### Komponenten

- Portal ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-portal/3.6.1.2/))
- Interface Search (OpenSearch, ATOM DLS) ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-search/3.6.1.2/))
- iPlug SE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/3.6.1.2/))
- iPlug WFS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-wfs-dsc/3.6.1.2/))


### Änderungen

Es wurden verschiedene Fehler am InGrid Editor, dem MapClient, im Portal, dem WFS iPlug und der Suchmaschinenkomponente behoben.

* [Portal] SMTP-Angaben für das Portal im Installer nicht möglich
* [Portal] Blättern im Portal defekt
* [Portal] Fehlerhafte Anzeige unter "Durch die Ressource abgedeckte Zeitspanne"
* [IGE] Objektverweise in Adressen kein Paging
* [IGE] Neues Objekt im Index synchronisiert erzeugen
* [IGE] Session wird nicht aktualisiert
* [MapClient] Fehler Anzeige Hintergrundkarte Umschaltung WGS84 -> DHDN GK3
* [MapClient] Ortssuche in "Raumbezug auf Karte festlegen" geht nicht
* [MapClient] Fehler_Wechsel des Raumbezugssystems
* [MapClient] Fehler_Speichern der Karte
* [iPlug SE] Admin-GUI stürzt ab bei initialer Konfiguration
* [iPlug SE] URL-Fehlerstatistik im iPlug SE instabil
* [IPlug WFS-DSC] Initaile Konfiguration via Admin GUI schreibt ranking:off statt ranking:score
* [OpenSearch Interface] Opensearch Schnittstelle hängt sich auf mit "Committed before 500 Internal error!"

[Eine Liste der Änderungen findet sich hier.](https://dev.informationgrid.eu/redmine/versions/17)

(Authorisierung wird benötigt)


## Version 3.6.1.1

Release: 03.12.2015

### Komponenten

- iPlug SE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/3.6.1.1/))
- iPlug IGE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/3.6.1.1/))
  **Achtung Schnittstellenänderung! Portal und iPlug IGE müssen zusammen aktualisiert werden.**
- Portal ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-portal/3.6.1.1/))


### Änderungen

Es wurden verschiedene Fehler am InGrid Editor, dem MapClient und der Suchmaschinenkomponente behoben.

[Eine Liste der Änderungen findet sich hier.](https://dev.informationgrid.eu/redmine/versions/16)

(Authorisierung wird benötigt)


## Version 3.6.1

### Komponenten


- Codelist Repository ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-codelist-repository/3.6.1/))
- iBus ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-ibus/3.6.1/))
- Interface CSW ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-csw/3.6.1/))
- Interface Search (OpenSearch, ATOM DLS) ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-search/3.6.1/))
- iPlug CSW ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-csw-dsc/3.6.1/))
- iPlug MapClient ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-mapclient/3.6.1/))
- iPlug DSC ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc/3.6.1/))
- iPlug Excel ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/3.6.1/))
- iPlug IGE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/3.6.1/))
  **Achtung Schnittstellenänderung! Portal und iPlug IGE müssen zusammen aktualisiert werden.**
- iPlug Management ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/3.6.1/))
- iPlug OpenSearch ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-opensearch/3.6.1/))
- iPlug SE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/3.6.1/))
- iPlug WFS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-wfs-dsc/3.6.1/))
- iPlug SNS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/3.6.1/))
- iPlug XML ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-xml/3.6.1/))
- Portal ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-portal/3.6.1/))
- Server OpenSearch ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-server-opensearch/3.6.1/))


### Änderungen

- [Feature] [Portal] Entfernung aller PortalU Referenzen aus dem InGrid Portal Standard Profil ([REDMINE-14](https://dev.informationgrid.eu/redmine/issues/14))
- [Feature] [Portal] Updated to final Jetspeed 2.3.0 release. ([REDMINE-109](https://dev.informationgrid.eu/redmine/issues/109))
- [Feature] [Portal] Erstellung RLP Profil ([REDMINE-122](https://dev.informationgrid.eu/redmine/issues/122))
- [Feature] [Portal] SSO Funktionalität wieder hinzugefügt (Shibboleth) ([REDMINE-169](https://dev.informationgrid.eu/redmine/issues/169))
- [Feature] [Portal/IGE] Ansprechende HTML-Hilfen aus Portal und IGE Hilfe XML generieren ([REDMINE-29](https://dev.informationgrid.eu/redmine/issues/29))
- [Feature] [IGE] Konformität zu den GDI-DE Metadatenkonventionen 1.1.0 herstellen ([REDMINE-13](https://dev.informationgrid.eu/redmine/issues/13))
- [Feature] [IGE] Entfernung aller PortalU-Referenzen aus dem InGridEditor ([REDMINE-16](https://dev.informationgrid.eu/redmine/issues/16))
- [Feature] [IGE] Abschließendes Speichern und Veröffentlichen ([REDMINE-19](https://dev.informationgrid.eu/redmine/issues/19))
- [Feature] [IGE] Strukturbaum / Datenreihenfolge ([REDMINE-20](https://dev.informationgrid.eu/redmine/issues/20))
- [Feature] [IGE] Anzeige Objekt-ID ([REDMINE-23](https://dev.informationgrid.eu/redmine/issues/23))
- [Feature] [IGE] GDI-DE konforme Angabe von Werten im Feld "Version des Dienstes" ([REDMINE-47](https://dev.informationgrid.eu/redmine/issues/47))
- [Feature] [IGE] Entfernen von Referenz auf externe DTD aus Spring Dateien, damit iPlug offline funktioniert ([REDMINE-131](https://dev.informationgrid.eu/redmine/issues/131))
- [Feature] [IGE] Optimierung der Ladezeit des IGE ([REDMINE-190](https://dev.informationgrid.eu/redmine/issues/190))
- [Feature] [IGE] Abgabe der INSPIRE Themen in deutscher Sprache ([REDMINE-207](https://dev.informationgrid.eu/redmine/issues/207))
- [Feature] [iPlug SE] Vermeidung von falschem Elastic Search Cluster ([REDMINE-171](https://dev.informationgrid.eu/redmine/issues/171))
- [Feature] [iPlug MapClient] POST Request jetzt als application/json Type mit direkten JSON Daten (Anpassung an neue WSV BWaStr Schnittstelle) ([REDMINE-177](https://dev.informationgrid.eu/redmine/issues/177))
- [Feature] [System] Entfernung aller PortalU Referenzen aus dem InGrid System (außer Portal und IGE) ([REDMINE-15](https://dev.informationgrid.eu/redmine/issues/15))
- [Feature] [System] Entfernen der Abhängigkeit zum DSC ([REDMINE-67](https://dev.informationgrid.eu/redmine/issues/67))
- [Feature] [System] Kompatibilität mit MariaDB herstellen ([REDMINE-74](https://dev.informationgrid.eu/redmine/issues/74))
- [Feature] [System] Passwörter in den iPlug-Admin-GUIs liegen im Klartext vor ([REDMINE-106](https://dev.informationgrid.eu/redmine/issues/106))

- [Bug] [Portal] Katalogbaum aufklappen ([REDMINE-115](https://dev.informationgrid.eu/redmine/issues/115))
- [Bug] [Portal] IFRAME für JavaScript Erkennung wird u.U. als Virus erkannt ([REDMINE-56](https://dev.informationgrid.eu/redmine/issues/56))
- [Bug] [Portal] SE-iPlug erscheint nicht im Portal unter der Liste der angeschlossenen iPlugs ([REDMINE-104](https://dev.informationgrid.eu/redmine/issues/104))
- [Bug] [Portal] Fehlende Adressen-Titel in der Ergebnisliste ([REDMINE-120](https://dev.informationgrid.eu/redmine/issues/120))
- [Bug] [Portal] Fehlende Adressen-Beschreibung in der Detaildarstellung ([REDMINE-121](https://dev.informationgrid.eu/redmine/issues/121))
- [Bug] [Portal] Fehler beim Löschen eines Kataloges ([REDMINE-144](https://dev.informationgrid.eu/redmine/issues/144))
- [Bug] [Portal] Keine Adressen-Suche im Schlagwortverzeichnis ([REDMINE-182](https://dev.informationgrid.eu/redmine/issues/182))
- [Bug] [Portal] GeoPortal.WSV Fehler bei der Account Erstellung beim Login via SSO (Shibboleth) ([REDMINE-191](https://dev.informationgrid.eu/redmine/issues/191))
- [Bug] [Portal] Startseite ändern führt zu Zugriffs - Problem ([REDMINE-209](https://dev.informationgrid.eu/redmine/issues/209))
- [Bug] [IGE] HTML wird beim Objekt anlegen übernommen ([REDMINE-117](https://dev.informationgrid.eu/redmine/issues/117))
- [Bug] [IGE] Initialisierungsfehler bei inkorrekter Sysliste ([REDMINE-123](https://dev.informationgrid.eu/redmine/issues/123))
- [Bug] [IGE] Fehlende Fehlermeldung beim Anlegen von Adressen ohne Berechtigung ([REDMINE-125](https://dev.informationgrid.eu/redmine/issues/125))
- [Bug] [IGE] URL-Pflege funktioniert nicht bei großen Datenmengen ([REDMINE-141](https://dev.informationgrid.eu/redmine/issues/141))
- [Bug] [IGE] Erweiterte Suche lässt sich u.U. nicht aufklappen ([REDMINE-159](https://dev.informationgrid.eu/redmine/issues/159))
- [Bug] [IGE] Tabelle nicht mehr editierbar ([REDMINE-192](https://dev.informationgrid.eu/redmine/issues/192))
- [Bug] [IGE] Aktualisierung der GetCapabilities fehlerhaft ([REDMINE-193](https://dev.informationgrid.eu/redmine/issues/193))
- [Bug] [iPlug SE] letzter Crawl Log wird im IE 11 nicht angezeigt ([REDMINE-170](https://dev.informationgrid.eu/redmine/issues/170))
- [Bug] [iPlug SE] Falsche Berechnung des letzten Fetch-Datums ([REDMINE-172](https://dev.informationgrid.eu/redmine/issues/172))
- [Bug] [iPlug SE] Keine Indexgenerierung wenn keine URLs geholt wurden ([REDMINE-173](https://dev.informationgrid.eu/redmine/issues/173))
- [Bug] [iPlug SE] IE11 zeigt keine URLs an ([REDMINE-175](https://dev.informationgrid.eu/redmine/issues/175))
- [Bug] [iPlug SE] Wilcard-Query liefert falsche Ergebnisse ([REDMINE-176](https://dev.informationgrid.eu/redmine/issues/176))
- [Bug] [iPlug SE] SE-Treffer erscheinen nicht in der Portal-Suche ([REDMINE-114](https://dev.informationgrid.eu/redmine/issues/114))
- [Bug] [Map Client] Transparenz umbennen in Sichtbarkeit. ([REDMINE-71](https://dev.informationgrid.eu/redmine/issues/71))
- [Bug] [iPlug DSC] : Make new JavaScript engine threadsafe (java 1.8 und nashorn) ([REDMINE-119](https://dev.informationgrid.eu/redmine/issues/119))
- [Bug] [CSW Interface] CSW harvestet nicht alle Dokumente ([REDMINE-179](https://dev.informationgrid.eu/redmine/issues/179))
- [Bug] [iPlug SE] Falsche Gruppierung beim SE-iPlug ([REDMINE-181](https://dev.informationgrid.eu/redmine/issues/181))
- [Bug] [System] Wildcards werden nicht korrekt umgesetzt innerhalb von Feldern ([REDMINE-211](https://dev.informationgrid.eu/redmine/issues/211))


## Version 3.6.0.4

Release: 28.09.2015

### Komponenten

- iPlug DSC ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc/3.6.0.4/))
- iPlug WFS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-wfs-dsc/3.6.0.4/))

### Änderungen

Es wurden Probleme bei der Konfiguration von WFS und DSC iPlug behoben.

* [iPlug WFS]  Duplikate im Index
* [iPlug WFS]  Flexiblere Konfiguration des iPlug WFS
* [iPlug DSC]  Flexiblere Konfiguration des DSCs

[Eine Liste der Änderungen findet sich hier.](https://dev.informationgrid.eu/redmine/versions/12)

(Authorisierung wird benötigt)

## Version 3.6.0.3

### Komponenten

- Portal ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-portal/3.6.0.3/))
- iPlug CSW ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-csw-dsc/3.6.0.3/))
- iPlug DSC ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc/3.6.0.3/))
- iPlug Excel ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/3.6.0.3/))
- iPlug IGE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/3.6.0.3/))
  **Achtung Schnittstellenänderung! Portal und iPlug IGE müssen zusammen aktualisiert werden.**
- iPlug Management ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/3.6.0.3/))
- iPlug MapClient ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-mapclient/3.6.0.3/))
- iPlug OpenSearch ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-opensearch/3.6.0.3/))
- iPlug SE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/3.6.0.3/))
- iPlug WFS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-wfs-dsc/3.6.0.3/))
- iPlug XML ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-xml/3.6.0.3/))

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

- Portal ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-portal/3.6.0.2/))
- iPlug DSC ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc/3.6.0.2/))
- iPlug SE ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/3.6.0.2/))

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

- iPlug SNS ([download](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/3.6.0.1/))

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
