---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.5.x. Release Notes ältere Versionen können hier eingesehen werden:  [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)


## Version 5.5.0

Release 27.07.2020

### Wichtige Änderungen

#### Erweiterung des Imports von WMTS mit GetFeatureInfo-Funktion

Ist eine ResourceURL mit dem resourceType="FeatureInfo" definiert, so ist nach dem Hinzufügen des Layers eine GetFeatureInfo nun auch für importierte Karten möglich.

#### Darstellung von mehreren Vorschaugrafiken wird nun im Portal unterstützt

Sowohl in der Suchergebnisliste als auch in der Detaildarstellung gibt es jetzt die Möglichkeit, zwischen mehreren Vorschaugrafiken umzuschalten.

![Auswahl mehrerer Vorschaugrafiken](../images/550_ige_vorschaugrafik.png "Auswahl mehrerer Vorschaugrafiken")
<figcaption class="figcaption">Auswahl mehrerer Vorschaugrafiken</figcaption>

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

