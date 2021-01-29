---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.7.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.7.0

Release 19.01.2021

### Liste der Änderungen

BAW Datenrepository

- [Bug] [PORTAL] Portal: Verweise von Eltern-Datensatz werden auch im Kind-Datensatz gezeigt ([REDMINE-2296](https://redmine.informationgrid.eu/issues/2296))
- [Bug] [PORTAL] Portal: Mehrfache Einträge in der Katalogansicht ([REDMINE-2288](https://redmine.informationgrid.eu/issues/2288))
- [Feature] [PORTAL] Portal: Links zu den gekoppelten Dienste sollen von "Weitern Verweise" entfernt werden ([REDMINE-2286](https://redmine.informationgrid.eu/issues/2286))
- [Feature] [PORTAL] Portal: Doktortitel vom Datensatz-Zitat entfernen. ([REDMINE-2285](https://redmine.informationgrid.eu/issues/2285))
- [Feature] [IGE] Export von Metadaten im DataCite-Format als Dateidownload implementieren ([REDMINE-2225](https://redmine.informationgrid.eu/issues/2225))
- [Feature] [PORTAL] Portal: Detailansicht anpassen ([REDMINE-2193](https://redmine.informationgrid.eu/issues/2193))
- [Feature] [PORTAL] Portal: Mehrsprachigkeit ([REDMINE-2190](https://redmine.informationgrid.eu/issues/2190))
- [Feature] [IGE] IGE: Angabe von Querverweisen in der Rubrik "Verweise" ermöglichen ([REDMINE-2189](https://redmine.informationgrid.eu/issues/2189))
- [Feature] [IGE] IGE: Profil für BAW-Datenrepository erstellen ([REDMINE-2186](https://redmine.informationgrid.eu/issues/2186))
- [Feature] [PORTAL] Portal: Profil für BAW-Datenrepository erstellen ([REDMINE-2183](https://redmine.informationgrid.eu/issues/2183))
- [Feature] [Datenrepository] Datenrepository für Daten mit DOIs ([REDMINE-2171](https://redmine.informationgrid.eu/issues/2171))

BKG

- [Feature] [PORTAL] BKG-MIS: WebDesign ändern ([REDMINE-1935](https://redmine.informationgrid.eu/issues/1935))
- [Support] [Code-Repo] Code-Repo: Codelist 10003 und 10004 erweitern ([REDMINE-2278](https://redmine.informationgrid.eu/issues/2278))

InGrid

- [Bug] [IGE] IGE: Hilfetext für Feld "Lagegenauigkeit" ist falsch ([REDMINE-2305](https://redmine.informationgrid.eu/issues/2305))
- [Bug] [PORTAL] Portal: In der dockerbasierten Installation soll das DB Passwort nur einmal angegeben werden müssen. ([REDMINE-2283](https://redmine.informationgrid.eu/issues/2283))
- [Bug] [IGE] UVP-Katalog: Vorschau und Druckansicht funktioniert nicht ([REDMINE-2282](https://redmine.informationgrid.eu/issues/2282))
- [Bug] [IGE] IGE: Im Duplikatcheck funktioniert der Sprung in die Baumstruktur nicht mehr.  ([REDMINE-2261](https://redmine.informationgrid.eu/issues/2261))
- [Bug] [IPLUG_IGE] Fehler bei der ISO-Erstellung bei DOI ([REDMINE-2241](https://redmine.informationgrid.eu/issues/2241))
- [Bug] [IPLUG-OPENSEARCH] iPlug speichert Ranking-Information nicht ab ([REDMINE-2239](https://redmine.informationgrid.eu/issues/2239))
- [Bug] [IGE] Problem beim Verschieben von "freien Adressen" ! Verschieben überhaupt möglich ? ([REDMINE-2213](https://redmine.informationgrid.eu/issues/2213))
- [Bug] [SYSTEM] Redmine-Links in changes-report falsch ([REDMINE-2211](https://redmine.informationgrid.eu/issues/2211))
- [Bug] [IPLUG_IGE] Import von ISO-Metadaten inklusive Hierarchien ([REDMINE-2194](https://redmine.informationgrid.eu/issues/2194))
- [Bug] [IGE] IGE: Ungültige Baumanzeige beim erstellen eines neuen Ordners ([REDMINE-2114](https://redmine.informationgrid.eu/issues/2114))
- [Bug] [IGE] IGE: XML-Encoding in Dienst-MD fehlerhaft bei "Open Data" und "Veröffentlichung gemäß HmbTG" ([REDMINE-1954](https://redmine.informationgrid.eu/issues/1954))
- [Bug] [IGE] Fehlende Kontexthilfe in Raster/Gridformat ([REDMINE-2265](https://redmine.informationgrid.eu/issues/2265))
- [Bug] [IGE] Erben von Verweisen beinhaltet auch Vorschaugrafiken ([REDMINE-2247](https://redmine.informationgrid.eu/issues/2247))
- [Bug] [IPLUG_IGE] ISO-XML: Angabe des DCP-Elements unzureichend abgebildet ([REDMINE-2245](https://redmine.informationgrid.eu/issues/2245))
- [Bug] [IGE] Opendata Kategorien werden im Portal in unterschiedlicher Reihenfolge wie im IGE angegeben dargestellt. ([REDMINE-2236](https://redmine.informationgrid.eu/issues/2236))
- [Bug] [IGE] Mapping und Anzeige der Spezifikation von Datenformat ([REDMINE-2232](https://redmine.informationgrid.eu/issues/2232))
- [Bug] [MAPCLIENT] Hinzufügen von Karten in der Admin-GUI des Mapclients funktioniert nicht ([REDMINE-2230](https://redmine.informationgrid.eu/issues/2230))
- [Bug] [PORTAL] PORTAL: Bereinigung der benutzerspezifischen Portal-Startseiten ([REDMINE-2227](https://redmine.informationgrid.eu/issues/2227))
- [Bug] [PORTAL] PORTAL: Installation über Installer aktualisiert die Tomcat-Konfiguration nicht ([REDMINE-2216](https://redmine.informationgrid.eu/issues/2216))
- [Bug] [IGE] Editor: Allererstes Anzeigen von Objekt liefert nicht alle Inhalte ! "Zugriffsbeschränkungen" fehlen ... ([REDMINE-2206](https://redmine.informationgrid.eu/issues/2206))
- [Bug] [PORTAL] Portal: Zeige in Karte Link wird trotz Kennzeichnung "geschützter Dienst" ([REDMINE-2199](https://redmine.informationgrid.eu/issues/2199))
- [Bug] [COMMUNICATION-GATEWAY] IGE nicht mehr erreichbar nach Exception in der communication ([REDMINE-2197](https://redmine.informationgrid.eu/issues/2197))
- [Bug] [IGE] Eingabe eines Umringpolygons (WKT) wird in IGE nicht in Druckansicht und Vergleichsansicht berücksichtigt. ([REDMINE-2195](https://redmine.informationgrid.eu/issues/2195))
- [Bug] [CODELIST REPOSITORY] Codelist Rep.: Korrektur der ISO Bezeichnung von "Dienst für den Zugriff auf Objektarten" ([REDMINE-2093](https://redmine.informationgrid.eu/issues/2093))
- [Feature] [MAPCLIENT] Kartenclient - Admin GUI: Konkurierende Zugriffe absichern ([REDMINE-2284](https://redmine.informationgrid.eu/issues/2284))
- [Feature] [IGE] Umbenennung des IGE-Feldes Vorschaugrafik-Dateiname ([REDMINE-2198](https://redmine.informationgrid.eu/issues/2198))
- [Feature] [IGE] IGE: neue MD-Felder - Qualitätsangaben erweitern ([REDMINE-1783](https://redmine.informationgrid.eu/issues/1783))
- [Feature] [IPLUG_IGE] IGE: Abgabe von gekoppelten Daten über den Dienste-Datensatz, wenn Kopplung über Kataloggrenzen hinweg erfolgt ([REDMINE-1746](https://redmine.informationgrid.eu/issues/1746))
- [Feature] [IBUS] iPlug IDs sollen auch Großbuchstaben enthalten können ([REDMINE-1566](https://redmine.informationgrid.eu/issues/1566))
- [Feature] [IGE] Kontexthilfe für freie Schlagworte ([REDMINE-2231](https://redmine.informationgrid.eu/issues/2231))
- [Feature] [PORTAL] Knoten "Freie Adressen" auch in Portal Katalogansicht aufnehmen ([REDMINE-2212](https://redmine.informationgrid.eu/issues/2212))
- [Feature] [MAPCLIENT] Mapclient Admin-GUI: Account Passwörter verschlüsseln ([REDMINE-2207](https://redmine.informationgrid.eu/issues/2207))
- [Feature] [PORTAL] Verbesserung der Barrierefreiheit des Portals ([REDMINE-1810](https://redmine.informationgrid.eu/issues/1810))
- [Feature] [IGE] Löschen des Eintrags im Feld "Identifikator der Datenquelle" beim Kopieren von Datensätzen ([REDMINE-1581](https://redmine.informationgrid.eu/issues/1581))
- [Feature] [IGE] Überarbeitung der Verwendung des CI_OnLineFunctionCode bei der Erfassung von Verweisen ([REDMINE-1367](https://redmine.informationgrid.eu/issues/1367))

InGrid Installation Saarland

- [Bug] [IGE] Bearbeitung des Kommunalen Datenkatalog ([REDMINE-2147](https://redmine.informationgrid.eu/issues/2147))

MetaVer

- [Feature] [Codelist Repository] Anpassung der Codeliste "Provider" (List-ID 11) ([REDMINE-2167](https://redmine.informationgrid.eu/issues/2167))

UVP

- [Bug] [MAPCLIENT] Karte bei Raumbezugssuche stark verzögert ([REDMINE-2260](https://redmine.informationgrid.eu/issues/2260))
- [Bug] [IGE] Ein doppelter Punkt und ein fehlender Punkt in der Liste der UVP-pflichtigen Vorhaben  ([REDMINE-2254](https://redmine.informationgrid.eu/issues/2254))
- [Bug] [IGE] IGE: Upload von gleicher Datei in anderem Datensatz wird unter falscher UUID abgelegt ([REDMINE-1599](https://redmine.informationgrid.eu/issues/1599))
- [Bug] [IGE] Fehler beim Umgang von "gültig bis" Daten und referenzierten Uploads (ein Dokument wird in mehreren Verfahren genutzt) ([REDMINE-1308](https://redmine.informationgrid.eu/issues/1308))
- [Bug] [IGE] Das Feld Metadaten-Datum darf im UVP Profil nicht angezeigt werden ([REDMINE-2280](https://redmine.informationgrid.eu/issues/2280))

nokis2ingrid

- [Feature] [DOKU] Erstellung einer User-Dokumentation ([REDMINE-2174](https://redmine.informationgrid.eu/issues/2174))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.7.0/))
- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.7.0/))
- Blp iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/5.7.0/))
- iBus ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.7.0/))
- Sns iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/5.7.0/))
- Wfs-Dsc iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/5.7.0/))
- Dsc iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/5.7.0/))
- Interface-Search ([download](https://distributions.informationgrid.eu/ingrid-interface-search/5.7.0/))
- Se iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/5.7.0/))
- Xml iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/5.7.0/))
- Excel iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/5.7.0/))
- Opensearch iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/5.7.0/))
- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.7.0/))
- Csw-Dsc iPlug ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/5.7.0/))
- Interface-Csw ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/5.7.0/))