---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.5.x. Release Notes ältere Versionen können hier eingesehen werden:  [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)


## Version 5.5.3

Release 12.10.2020

- [Update] [Portal] UVP Link von saarländischer Seite anpassen.  ([REDMINE-2150](https://redmine.informationgrid.eu/issues/2150))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.5.3/))


## Version 5.5.2

Release 09.10.2020

- [Add] [Mapclient] Warnhinweis beim Importieren von Layern ohne Extent (Admin-GUI).  ([REDMINE-2024](https://redmine.informationgrid.eu/issues/2024))
- [Add] [Mapclient] Aufräumjob für Karten ohne Kategorienzuordnung.  ([REDMINE-2025](https://redmine.informationgrid.eu/issues/2025)
- [Fix] [Portal] UVP: Raumsuche funktioniert im UVP-Portal nicht, wenn nach Aktualität sortiert wird.  ([REDMINE-2164](https://redmie.informationgrid.eu/issues/2164))
- [Fix] [Portal] UVP/NUMIS: Kleinere Verbesserungen/Anpassungen NUMIS/UVP-Portal.  ([REDMINE-1821](https://redmine.informationgrid.eu/issues/1821)
- [Fix] [Portal] NUMIS: Fix Darstellung von Ordneransicht.

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.5.2/))


## Version 5.5.1

Release 29.09.2020

- [Add] [IGE] Höhere Kompatibilität bei der Verarbeitung von Referenzsystemangaben in OGC Capabilities  ([REDMINE-2108](https://redmine.informationgrid.eu/issues/2108))
- [Add] [Portal] Darstellung von IGE-Ordnern in der Datenkatalogansicht im Portal  ([REDMINE-1102](https://redmine.informationgrid.eu/issues/1102))
- [Fix] [Mapclient] Problem melden - kml Infos in Permalink hinterlegen  ([REDMINE-2106](https://redmine.informationgrid.eu/issues/2106)
- [Fix] [Mapclient] "Hilfe" und "Problem melden" URLs anpassen  ([REDMINE-2043](https://redmine.informationgrid.eu/issues/2043)

- [Fix] [Portal] Layoutprobleme bei mobiler Ergebnisdarstellung  ([REDMINE-2087](https://redmine.informationgrid.eu/issues/2087))
- [Fix] [IGE] Verhalten der Nutzungsbedingungen als Pflichtfeld falsch  ([REDMINE-1975](https://redmine.informationgrid.eu/issues/1975))
- [Fix] [UVP] Anzeige von Vorschaltseiten funktioniert nicht (404).  ([REDMINE-2151](https://redmine.informationgrid.eu/issues/2151)
- [Fix] [Portal] Fix Captcha im Kontaktformular funktioniert nicht  ([REDMINE-2144](https://redmine.informationgrid.eu/issues/2144)
- [Fix] [Fix] Anzeige korrigieren  ([REDMINE-2117](https://redmine.informationgrid.eu/issues/2117)
- [Fix] [UVP] Funktionalität "i" Button bei den Verfahrensschritten herstellen  ([REDMINE-2100](https://redmine.informationgrid.eu/issues/2100)
- [Fix] [Make] Konfiguration der URL des NOMINATIM Dienstes  ([REDMINE-1860](https://redmine.informationgrid.eu/issues/1860)
- [Fix] [Thesaurus] Thesaurus-Navigator Suche zeigt leere Treffer an  ([REDMINE-2040](https://redmine.informationgrid.eu/issues/2040)
- [Fix] [Portal] Portal startet bei manueller Installation nicht unter Windows  ([REDMINE-2035](https://redmine.informationgrid.eu/issues/2035)
- [Fix] [Portal] Umbenennung von Registrierungs-Button "Neuer Benutzer" zu "Registrieren"  ([REDMINE-2086](https://redmine.informationgrid.eu/issues/2086)
- [Fix] [Mapclient] Entfernen von DNS-Check bei der Druckfunktion  
- [Fix] [Mapclient] Fix Drucken von importierten WMTSe  
- [Fix] [Mapclient] Fix Handhabung mit Attribute "selectedOpen"  
- [Fix] [iBus] Fix fehlende Facetten.  ([REDMINE-2159](https://redmine.informationgrid.eu/issues/2159)

- [Update] [Portal] Umbenennung des Änderungsdatums in der Portaldarstellung  ([REDMINE-2083](https://redmine.informationgrid.eu/issues/2083))
- [Update] [Mapclient] Caching-Einstellungen wurden angepasst  ([REDMINE-2012](https://redmine.informationgrid.eu/issues/2012)

- [Add] [Portal] Messwerteclient: Konfiguration zur Darstellung von gemittelten Messwerten hinzugefügt.
- [Add] [Portal] Messwerteclient: Eigenschaft hinzugefügt um die Darstellung und Zeitzone des Diagramms zu ändern.
- [Add] [Portal] Messwerteclient: Verwendung von Elasticsearch "meta data" für die Stationstatistik
- [Add] [Portal] Messwerteclient: Hinzufügen von "Jahr" im Auswahlbereich
- [Add] [Portal] Messwerteclient: Download von CSV Daten ohne gemittelte Messwerten.
- [Add] [Portal] Messwerteclient: Darstellung von Ladebalken beim CSV Export.

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.5.1/))
- iBus ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.5.1/))
- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.5.1/))
- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.5.1/))


## Version 5.5.0

Release 27.07.2020

### Wichtige Änderungen

#### Erweiterung des Imports von WMTS mit GetFeatureInfo-Funktion

Ist eine ResourceURL mit dem resourceType="FeatureInfo" definiert, so ist nach dem Hinzufügen des Layers eine GetFeatureInfo nun auch für importierte Karten möglich.

#### Darstellung von mehreren Vorschaugrafiken wird nun im Portal unterstützt

Sowohl in der Suchergebnisliste als auch in der Detaildarstellung gibt es jetzt die Möglichkeit, zwischen mehreren Vorschaugrafiken umzuschalten.

![Auswahl mehrerer Vorschaugrafiken](../images/550_ige_vorschaugrafik.png "Auswahl mehrerer Vorschaugrafiken")
<figcaption class="figcaption">Auswahl mehrerer Vorschaugrafiken</figcaption>

#### Umstellung der Ausführung innerhalb der Docker Container auf unprivilegierten Benutzer

Bisher liefen die Komponenten innerhalb der generierten Docker Container unter dem Benutzer "root". Die Ausführung wurde auf den unprivilegierten Benutzer "ingrid" mit der userid 1000 umgestellt. Dadurch wird die Sicherheit erhöht.

Beim volume mapping muss darauf geachtet werden, dass die Verzeichnisse auf dem Host dem im Container genutzten User gehören. Da der User "ingrid" auf dem Host oft nicht vorhanden ist (und sicherlich nicht unter der UID 1000), muss das Recht der userid 1000 gegeben werden.

`chown -R 1000 <DOCKER-SETUP INGRID>`

Innerhalb eines Containers kann so zum root user gewechselt werden:

`docker-compose exec --user root <CONTAINER> sh`


### Liste der Änderungen

AG Metadaten

- [Feature] [IGE]: Verhalten der Checkbox "OpenData" ([REDMINE-1556](https://redmine.informationgrid.eu/issues/1556))

BAW DMQS

- [Bug] [IGE]: XML Namensraum "xs" fehlt in der ISO-Abbildung ([REDMINE-1857](https://redmine.informationgrid.eu/issues/1857))
- [Feature] [PORTAL]: HTML 403 Error-Seite fehlt im BAW-Profil ([REDMINE-1858](https://redmine.informationgrid.eu/issues/1858))

BKG

- [Bug] [IGE]: Feld "INSPIRE-Themen" kein Pflichtfeld für INSPIRE-Dienste ([REDMINE-1908](https://redmine.informationgrid.eu/issues/1908))
- [Bug] [PORTAL]: Ansicht eines MD im Reiter Zeit/Raum fehlerhaft ([REDMINE-1905](https://redmine.informationgrid.eu/issues/1905))
- [Feature] [IGE]: neues Feld "Begrenzungspolygon als wkt" - wie Anzeige steuern? ([REDMINE-1909](https://redmine.informationgrid.eu/issues/1909))

InGrid

- [Bug] [IGE]: Fehlende Versionsangaben im Info Dialog des Editors. ([REDMINE-1922](https://redmine.informationgrid.eu/issues/1922))
- [Bug] [CODELIST REPOSITORY]: Umgebungsvariablen INGRID_OPTS und JAVA_OPTS werden in startscript nicht berücksichtigt. ([REDMINE-1920](https://redmine.informationgrid.eu/issues/1920))
- [Bug] [PORTAL]: Passwortmanager funktioniert nicht im Portal ([REDMINE-1900](https://redmine.informationgrid.eu/issues/1900))
- [Bug] [IGE]: ListId von zusätzlicher Combobox wird nicht gespeichert ([REDMINE-1893](https://redmine.informationgrid.eu/issues/1893))
- [Bug] [PORTAL]: Ständig auftretende Exception ([REDMINE-1874](https://redmine.informationgrid.eu/issues/1874))
- [Bug] [CODELIST REPOSITORY]: Codeliste 101 mit dem Eintrag "Mittelwasser" erweitern ([REDMINE-1407](https://redmine.informationgrid.eu/issues/1407))
- [Bug] [IGE]: XML-Encoding zu spatialRepresentationInfo begutachten ([REDMINE-1934](https://redmine.informationgrid.eu/issues/1934))
- [Bug] [PORTAL] Katalog: Ausgabe der Qualitätsangaben fehlt ([REDMINE-1932](https://redmine.informationgrid.eu/issues/1932))
- [Bug] [INTERFACE-SEARCH]: Interface Search wirft Runtimeexception ([REDMINE-1887](https://redmine.informationgrid.eu/issues/1887))
- [Bug] [PORTAL]: In der Detaildarstellung werden unter "Nutzungsbedingungen" leere Einträge angezeigt ([REDMINE-1854](https://redmine.informationgrid.eu/issues/1854))
- [Bug] [PORTAL]: Alte Links zu Detaildarstellungen funktionieren nicht mehr ([REDMINE-1833](https://redmine.informationgrid.eu/issues/1833))
- [Feature] [IPLUG-CSW]: HTTP Read Timeout konfigurierbar machen ([REDMINE-1988](https://redmine.informationgrid.eu/issues/1988))
- [Feature] [PORTAL]: Darstellung von mehreren Vorschaugrafiken wird im Portal nicht unterstützt ([REDMINE-1785](https://redmine.informationgrid.eu/issues/1785))
- [Feature] [PORTAL]: Mapclient: Erweiterung Import von WMTS mit GetFeatureInfo-Funktion ([REDMINE-1953](https://redmine.informationgrid.eu/issues/1953))
- [Feature] [INTERFACE-CSW]: Verbesserung von Stabilität des Harvest-Prozesses der CSW Schnittstelle ([REDMINE-1901](https://redmine.informationgrid.eu/issues/1901))
- [Feature] [PORTAL]: Umstellung der Ausführung innerhalb der Docker Container auf unprivilegierten Benutzer ([REDMINE-1898](https://redmine.informationgrid.eu/issues/1898))

MetaVer

- [Bug] [IGE]: Verhalten der Nutzungsbedingungen als Pflichtfeld falsch  ([REDMINE-1975](https://redmine.informationgrid.eu/issues/1975))
- [Feature] [PORTAL]: Anpassung des Email-Versandes (Adressat in Reply-To bei Kontaktformular) ([REDMINE-1890](https://redmine.informationgrid.eu/issues/1890))

NUMIS

- [Bug] [UVP]: Datei wurde nicht gelöscht ([REDMINE-2006](https://redmine.informationgrid.eu/issues/2006))

UVP

- [Bug] [IGE]: Fehler bei der Erstellung von Statistiken (Semikolon im Titel) ([REDMINE-1929](https://redmine.informationgrid.eu/issues/1929))

### Komponenten

- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.5.0/))
- Interface CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/5.5.0/))
- Interface Search ([download](https://distributions.informationgrid.eu/ingrid-interface-search/5.5.0/))
- iPlug CSW ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/5.5.0/))
- iPlug IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.5.0/))
- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.5.0/))

