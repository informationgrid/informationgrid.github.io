---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.5.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.4.x](/7.4.0/about/history.html), [7.3.x](/7.3.0/about/history.html), [7.2.x](/7.2.0/about/history.html), [7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)

## Version 7.5.1.1

Release 04.04.2025

Profil UVP

- [Bug] Archivierung kann zu fehlerhaften Verfahren führen ([REDMINE-7541](https://redmine.informationgrid.eu/issues/7541))


## Version 7.5.1

Release 31.03.2025

InGrid

- [Feature] Archivierung für Metadaten-Administratoren deaktivieren ([REDMINE-7520](https://redmine.informationgrid.eu/issues/7520))
- [Bug] Fehlende Anzeige des Veröffentlichungsrecht in der Suche ([REDMINE-7509](https://redmine.informationgrid.eu/issues/7509))

Profil UVP

- [Bug] Archivierung von Verfahren ([REDMINE-7515](https://redmine.informationgrid.eu/issues/7515))
- [Bug] Archivierung - Katalogeinstellung ([REDMINE-7516](https://redmine.informationgrid.eu/issues/7516))

## Version 7.5.0

Release 21.03.2025

### Hinweise für die Aktualisierung

#### Interface-Search

Aktuell muss der Zugriff auf den Atom-Feed Client im Apache angepasst werden. Dazu muss folgende Weiterleitung eingerichtet werden:

```shell
RewriteRule ^/interface-search/dls$ /interface-search/dls/ [R,L]
```

#### Codelist-Repository

Die Angabe von MD5 Passwörtern hat sich geändert. Anstatt diese mit dem Präfix "MD5:" zu versehen, wird nur noch das (32-Zeichen lange) Passwort angegeben.

### Wichtige Änderungen

... kommt in Kürze

### Liste der Änderungen

Hamburger Metadaten Katalog

- [Bug] Anzeige "HVD" wird nicht an "Offene Lizenz" angepasst,  ([REDMINE-7217](https://redmine.informationgrid.eu/issues/7217))

InGrid

- [Feature] "Weitere rechtliche Grundlagen" -> "Rechtliche Grundlagen" ([REDMINE-5392](https://redmine.informationgrid.eu/issues/5392))
- [Feature] IGE: Katalogverwaltung: Erklärtext vereinheitlichen für toolbar buttons ([REDMINE-6933](https://redmine.informationgrid.eu/issues/6933))
- [Feature] Datensatzverweise werden erst nach Indexierung sichtbar ([REDMINE-6963](https://redmine.informationgrid.eu/issues/6963))
- [Feature] Anpassung Messwerteclient: Parameter-Filter: Zusammenfassung von Parametern mit gleichem Namen aber unterschiedlicher ID; Entfernen des Parameter-Sliders ([REDMINE-7244](https://redmine.informationgrid.eu/issues/7244))
- [Feature] Harvester - System-Indizes ausblenden, Ansicht default Katalog ([REDMINE-7258](https://redmine.informationgrid.eu/issues/7258))
- [Feature] MAPCLIENT: W3W an neue API anpassen ([REDMINE-7262](https://redmine.informationgrid.eu/issues/7262))
- [Feature] MAPCLIENT: Streckenlocator - Darstellung von Fehlermeldung aus dem Response ([REDMINE-7273](https://redmine.informationgrid.eu/issues/7273))
- [Feature] Editor - WKT Geometrieeingabe jetzt case insensitive ([REDMINE-7277](https://redmine.informationgrid.eu/issues/7277))
- [Feature] MVP Harvester für Einsatz im InGrid Projekt ([REDMINE-7318](https://redmine.informationgrid.eu/issues/7318))
- [Feature] Aktualisierung der Library für Lokalisierung ([REDMINE-7413](https://redmine.informationgrid.eu/issues/7413))
- [Feature] MAPCLIENT: Parametrisierter Aufruf der Streckensuche  ([REDMINE-7447](https://redmine.informationgrid.eu/issues/7447))
- [Bug] ID bei CreativeCommons-Lizenz CC BY 4.0 im JSON-Array ist nicht korrekt wieder gegeben und kann nicht interpretiert werden ([REDMINE-6667](https://redmine.informationgrid.eu/issues/6667))
- [Bug] Abnahme-Ergebnisse des #2601 ([REDMINE-7237](https://redmine.informationgrid.eu/issues/7237))
- [Bug] Harvester: Fehler inkrementeller Import ([REDMINE-7259](https://redmine.informationgrid.eu/issues/7259))
- [Bug] Codelisten nach Synchronisation nicht mehr sichtbar ([REDMINE-7260](https://redmine.informationgrid.eu/issues/7260))
- [Bug] Räumlicher Anwendungsbereich mit Defaultwert ([REDMINE-7269](https://redmine.informationgrid.eu/issues/7269))
- [Bug] Migrationstask für HVD fixen ([REDMINE-7274](https://redmine.informationgrid.eu/issues/7274))
- [Bug] Indexfeld access_constraint mit "Y" statt "true" befüllen ([REDMINE-7275](https://redmine.informationgrid.eu/issues/7275))
- [Bug] Fehler beim Anlegen eines Datensatz aus dem Dashboard ([REDMINE-7278](https://redmine.informationgrid.eu/issues/7278))
- [Bug] Fehler beim Wechsel zu Adressen für Autoren ([REDMINE-7301](https://redmine.informationgrid.eu/issues/7301))
- [Bug] Fehler bei der Aktualisierung der extern gekoppelten Daten mit layerNames ([REDMINE-7302](https://redmine.informationgrid.eu/issues/7302))
- [Bug] Aktualisierung des Spring-Frameworks ([REDMINE-7313](https://redmine.informationgrid.eu/issues/7313))
- [Bug] Sicherheitslücke in GeoTools und Commons Collection Bibliothek ([REDMINE-7326](https://redmine.informationgrid.eu/issues/7326))
- [Bug] Entfernen von Inline-Styles ([REDMINE-7346](https://redmine.informationgrid.eu/issues/7346))
- [Bug] Import und Export von BoundingBox ungenau ([REDMINE-7368](https://redmine.informationgrid.eu/issues/7368))
- [Bug] Merkmal für AdV kompatibel verbessern ([REDMINE-7375](https://redmine.informationgrid.eu/issues/7375))
- [Bug] HMDK/MetaVer: 1 HVD-Datenkategorie korrigieren ([REDMINE-7438](https://redmine.informationgrid.eu/issues/7438))
- [Bug] Falscher Baumknoten ausgewählt nach Abbrechen des Dialogs für Änderungen ([REDMINE-7444](https://redmine.informationgrid.eu/issues/7444))
- [Bug] Unerwartete Anzeige in der Nutzerliste im IGE-NG ([REDMINE-7475](https://redmine.informationgrid.eu/issues/7475))
- [Bug] IGE: Nutzer mit ausschließlich allgemeinen Rechten erscheinen als Nutzer bei allen Administratoren ([REDMINE-7479](https://redmine.informationgrid.eu/issues/7479))

InGrid Editor

- [Bug] Validierungsfehler über die OGC API (POST & PUT Methode) ([REDMINE-7224](https://redmine.informationgrid.eu/issues/7224))
- [Bug] Datendownloads unter Verweise können jetzt nicht mehr zum Bearbeiten geöffnet werden, wenn die eingetragenen links / und oder Erläuterungen zu lang sind ([REDMINE-7263](https://redmine.informationgrid.eu/issues/7263))
- [Bug] Toolbar Buttons disabled nach dem man Auswahlmode schließt  ([REDMINE-7281](https://redmine.informationgrid.eu/issues/7281))
- [Bug] Änderungen an manipuliertem XML-Dokument werden bei Import nicht übernommen ([REDMINE-7406](https://redmine.informationgrid.eu/issues/7406))
- [Bug] Ansicht der abgelaufenen Dokumente im Dashboard enthalten nicht veröffentlichte Dokumente ([REDMINE-7439](https://redmine.informationgrid.eu/issues/7439))
- [Bug] Ansicht der abgelaufenen Dokumente im Dashboard enthalten nicht veröffentlichte Dokumente ([REDMINE-7439](https://redmine.informationgrid.eu/issues/7439))

Profil BASt

- [Feature] Anpassungen bzgl. Umbenennung der BASt ([REDMINE-7304](https://redmine.informationgrid.eu/issues/7304))
- [Bug] Geodatensatz mit Open Data: optionale Felder sind wieder Pflichtfelder ([REDMINE-7394](https://redmine.informationgrid.eu/issues/7394))

Profil BKG

- [Feature] IGE: separater Katalog für MD-Sprache Englisch ([REDMINE-6951](https://redmine.informationgrid.eu/issues/6951))
- [Bug] AdV-MIS, Portal: Behandlung der indeterminatePosition korrigieren ([REDMINE-6835](https://redmine.informationgrid.eu/issues/6835))
- [Bug] Anpassungen Editormaske des IGE-NG ([REDMINE-7238](https://redmine.informationgrid.eu/issues/7238))
- [Bug] Capabilites-Assistent, Fehler und Fragen ([REDMINE-7305](https://redmine.informationgrid.eu/issues/7305))

Profil KRZN

- [Feature] Erweiterung "Kartenansicht öffnen" - Zoomlevel und Center ([REDMINE-6221](https://redmine.informationgrid.eu/issues/6221))

Profil LUBW

- [Feature] Möglichkeit alle Metadatensätze mittels OGC Records API aus InGrid abzurufen. ([REDMINE-7078](https://redmine.informationgrid.eu/issues/7078))
- [Feature] Anpassung der Portal-Kategorie „Umwelt-Daten und -Karten Online“ ([REDMINE-7350](https://redmine.informationgrid.eu/issues/7350))
- [Bug] Automatische Indizierung im IGE-NG funktioniert nicht ([REDMINE-7201](https://redmine.informationgrid.eu/issues/7201))
- [Bug] Fehlerhafter CSV-Export: capabilites_download_url korrekt befüllen ([REDMINE-7280](https://redmine.informationgrid.eu/issues/7280))

Profil MetaVer

- [Bug] Die Sortierung der Vorschaugrafiken funktioniert nicht ([REDMINE-7193](https://redmine.informationgrid.eu/issues/7193))

Profil UVP

- [Feature] Umsetzungsticket Archivierung von Verfahren ([REDMINE-6778](https://redmine.informationgrid.eu/issues/6778))
- [Feature] Archivierung für Autoren ausblenden ([REDMINE-7377](https://redmine.informationgrid.eu/issues/7377))
- [Feature] Automatische Aktualisierung des Index bei der Archivierung ([REDMINE-7378](https://redmine.informationgrid.eu/issues/7378))
- [Feature] Überarbeitung des Textes bei der Bestätigung Archivierung ([REDMINE-7448](https://redmine.informationgrid.eu/issues/7448))
- [Bug] Regression Fehler: Checkbox "Erst mit Beginn des Auslegungszeitraums veröffentlichen" nicht sichtbar ([REDMINE-7335](https://redmine.informationgrid.eu/issues/7335))
- [Bug] UVP-Verfahren - Portal - Darstellungsfehler in der Adresse ([REDMINE-6021](https://redmine.informationgrid.eu/issues/6021))
- [Bug] Monitoring: Fehler bei Synchronisation mit Zabbix Monitoring ([REDMINE-7340](https://redmine.informationgrid.eu/issues/7340))
- [Bug] Fehler bei der Veröffentlichung von Adressen ([REDMINE-7370](https://redmine.informationgrid.eu/issues/7370))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.5.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.5.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.5.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.5.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.5.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.5.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.5.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.5.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.5.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.5.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.5.0/))


