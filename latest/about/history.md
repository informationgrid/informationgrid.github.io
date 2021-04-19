---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.8.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.8.0

Release 16.04.2021

### Wichtige Änderung

#### Änderung am Interface-Search

Wegen eines Problems bei der Anzeige von extern gekoppelten Datensätzen im Atom-Feed Client, muss die Konfiguration angepasst
werden. Da diese meist von den Docker-Containern ausgelagert wird, muss diese Anpassung manuell erfolgen. Siehe dazu auch
[Ticket #2366](https://redmine.informationgrid.eu/issues/2366)

Folgende Eigenschaft muss in der Datei `interface-search.properties` angepasst werden:

```properties
# atom.download.dataset.feed.extension=/dataset/{servicefeed-uuid}/{datasetfeed-uuid}
atom.download.dataset.feed.extension=/dataset/{servicefeed-uuid}?datasetUuid={datasetfeed-uuid}
```

### Liste der Änderungen

InGrid

- [Bug] [IBUS] Index nach Indizierung nicht durchsuchbar ([REDMINE-2385](https://redmine.informationgrid.eu/issues/2385))
- [Bug] [IGE] Paging/ Anzeige von Suchergebnismengen nicht korrekt ([REDMINE-2378](https://redmine.informationgrid.eu/issues/2378))
- [Bug] [IPLUG-SNS] Chronik liefert manchmal keine Ergebnisse ([REDMINE-2355](https://redmine.informationgrid.eu/issues/2355))
- [Bug] [IGE] Hilfeseite im IGE wird nicht angezeigt ([REDMINE-2354](https://redmine.informationgrid.eu/issues/2354))
- [Bug] [IGE] IGE: Umlaute werden falsch angezeigt ([REDMINE-2331](https://redmine.informationgrid.eu/issues/2331))
- [Bug] [IGE] Weitere Verbesserung der operatesOn Elemente beim Import ([REDMINE-2330](https://redmine.informationgrid.eu/issues/2330)
  )
- [Bug] [IGE] Editor - Verschlagwortungsassistent kann Text mit % nicht interpretieren ([REDMINE-2321](https://redmine.informationgrid.eu/issues/2321))
- [Bug] [IPLUG-CSW] Verbesserung der Suche nach Karten und der Suche im Karten Client bei Daten aus einem CSW iPlug ([REDMINE-2287](https://redmine.informationgrid.eu/issues/2287))
- [Bug] [IPLUG_IGE] iPlug IGE: AnsprechpartnerMD wird beim ISO-Export auch als Ansprechpartner für den Datensatz gesetzt ([REDMINE-2277](https://redmine.informationgrid.eu/issues/2277))
- [Bug] [PORTAL] Portal: Facetten fehlen ([REDMINE-1575](https://redmine.informationgrid.eu/issues/1575))
- [Bug] [PORTAL] Portal: Facetten überlagen Footer ([REDMINE-2373](https://redmine.informationgrid.eu/issues/2373))
- [Bug] [IGE] IGE: Feld "Konformität" / "geprüft mit" - Anzeige des Default-Wert nach Import ([REDMINE-2348](https://redmine.informationgrid.eu/issues/2348))
- [Bug] [IGE] IGE: Label und Tooltip aktualisieren ([REDMINE-2338](https://redmine.informationgrid.eu/issues/2338))
- [Bug] [IGE] Feld "Vektorformat" - Beschriftung der Tabellenspalte Geometrietyp fehlerhaft ([REDMINE-2336](https://redmine.informationgrid.eu/issues/2336))
- [Bug] [PORTAL] Portal: In Katalogdarstellung sollen nur Katalog mit Suchergebnissen dargestellt werden ([REDMINE-2303](https://redmine.informationgrid.eu/issues/2303))
- [Bug] [PORTAL] Anzeige von Kurzbezeichnung ist in der Portal Detaildarstellung falsch, wenn eine AdV Produktgruppe angegeben wurden.
  ([REDMINE-2290](https://redmine.informationgrid.eu/issues/2290))
- [Bug] [IGE] Bei einem Geodatensatzes sollen nur die Verweise vom Typ "Verweis zum Dienst" aus dem gekoppelten Geodatendienst für die Darstellung im Portal übernommen werden. ([REDMINE-2228](https://redmine.informationgrid.eu/issues/2228))
- [Bug] [IGE] IGE: Verweistypen werden nicht importiert ([REDMINE-1844](https://redmine.informationgrid.eu/issues/1844))
- [Feature] [IBUS] iBus: Verwaltung des Konfigurationsindex ([REDMINE-2342](https://redmine.informationgrid.eu/issues/2342))
- [Feature] [PORTAL] Aktualisierung TOMCAT auf aktuellere Version ([REDMINE-2294](https://redmine.informationgrid.eu/issues/2294))

InGrid Installation Schleswig-Holstein

- [Feature] [PORTAL] Erstellung Portal-Profil ([REDMINE-2256](https://redmine.informationgrid.eu/issues/2256))

MetaVer

- [Feature] [PORTAL] Anpassung Kontakt-Formular UVP Test für Zammad ([REDMINE-2345](https://redmine.informationgrid.eu/issues/2345))

NUMIS

- [Bug] [INTERFACE-SEARCH] Bei Download-Diensten werden die Downloaddateien und Nutzungsbedingungen nicht im ATOM-Client/Feed angezeigt, wenn die dargestellten Daten per GetRecordById-Request verkoppelt sind ([REDMINE-2366](https://redmine.informationgrid.eu/issues/2366))
- [Bug] [PORTAL] Keine Legende beim Ausdruck eines Kartenausschnitts ([REDMINE-2399](https://redmine.informationgrid.eu/issues/2399))
- [Bug] [INTERFACE-SEARCH] Keine Dowloads im ATOM Service Download Feed ([REDMINE-2340](https://redmine.informationgrid.eu/issues/2340))
- [Bug] [PORTAL] Portal: Anpassung Darstellung Teaser Boxen ([REDMINE-2315](https://redmine.informationgrid.eu/issues/2315))

UVP

- [Bug] [PORTAL] Suchergebnisseite enthält "Mitgliedsgemeinden:", auch wenn keine vorhanden sind ([REDMINE-2435](https://redmine.informationgrid.eu/issues/2435))
- [Bug] [CODELIST-REPOSITORY] In den UVP Nummern von HH (Codeliste 9001) sind auch UVP Nummern aus Sachsen enthalten ([REDMINE-2365](https://redmine.informationgrid.eu/issues/2365))
- [Feature] [PORTAL] Entfernen des Hinweises auf die Bauleitplanung in der Vorschaltseite von NRW ([REDMINE-2401](https://redmine.informationgrid.eu/issues/2401))
- [Feature] [IGE] Protokollierung von gelöschten Unterdokumenten ([REDMINE-2319](https://redmine.informationgrid.eu/issues/2319))
- [Feature] [PORTAL] RSS-Feed für den UVP-Katalog ([REDMINE-582](https://redmine.informationgrid.eu/issues/582))
- [Feature] [IGE] Optionale Indexierung von neg. Vorprüfungen ohne Raumbezug ([REDMINE-2346](https://redmine.informationgrid.eu/issues/2346))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.8.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/5.8.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/5.8.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/5.8.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/5.8.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/5.8.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.8.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/5.8.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.8.0/))

