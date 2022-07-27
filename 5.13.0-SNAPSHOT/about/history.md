---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.13.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)

## Version 5.13.0

Release 21.07.2022

### Hinweise für die Aktualisierung

#### Instanzen vom iPlug SE müssen migriert werden

Die der Suchmaschine zugrundeliegende Software NUTCH wurde auf eine komplett neue Version gehoben.

**WICHTIG:**<br>
Existierende Instanzen im iPlug SE müssen wie folgt migriert werden (s. auch [REDMINE-132](https://redmine.informationgrid.eu/issues/132#note-46)).
- Erstellung einer neuen Instanz. Im `instance/conf` Verzeichnis sind dann alle Konfigurationsfiles vorhanden, die benötigt werden.
- Erstellen einer Kopie der alten Instanz
- Die kopierte Instanz muss dann mit den Konfigurationsfiles versorgt werden. Dazu werden die Dateien **außer die Datei** `nutch-site.xml` aus der neu erstellten Instanz in die kopierte Instanz übertragen.<br>
Beispiel: 
  ```
  # backup directory "instance_copy" 
  cd .../instance_new
  cp `ls | grep -v "nutch-site.xml"` .../instance_copy/
  ```

### Kritische Änderungen

...

### Wichtige Änderungen

...

### Liste der Änderungen

BAW MIS

- [Feature] [IPLUG_IGE] IGE: IGE-Formular für Software anpassen ([REDMINE-2771](https://redmine.informationgrid.eu/issues/2771))
- [Feature] [IPLUG_IGE] IGE: IGE-Formular für Messdaten anpassen ([REDMINE-2770](https://redmine.informationgrid.eu/issues/2770))
- [Bug] [PORTAL] Portal: Umlaute werden auf der Benutzerverwaltung-Seite nicht richtig angezeigt ([REDMINE-3339](https://redmine.informationgrid.eu/issues/3339))

BKG

- [Feature] [CODELIST_REPO] Codelist-Repo: Codeliste 10003 und 10004 editieren ([REDMINE-3418](https://redmine.informationgrid.eu/issues/3418))
- [Bug] [PORTAL] Portal BKG-MIS: Anzeige der Nutzungsbedingungen - Freitexteintrag ([REDMINE-3917](https://redmine.informationgrid.eu/issues/3917))
- [Bug] [PORTAL] Portal BKG-MIS: Anzeige der Nutzungsbedingungen in der erweiterten Suchergebnis-Anzeige unvollständig ([REDMINE-3680](https://redmine.informationgrid.eu/issues/3680))
- [Bug] [PORTAL] Portal: erweiterte Suchergebnisse - vollständige Linkliste erst nach Aufruf anzeigen ([REDMINE-4044](https://redmine.informationgrid.eu/issues/4044))

Hamburger Metadaten Katalog

- [Feature] [PORTAL] ReDesign Hamburger Metadatenkatalog (HMDK) ([REDMINE-3239](https://redmine.informationgrid.eu/issues/3239))

InGrid

- [Feature] [MAPCLIENT] Mapclient - Positionierung über Request an BWaStr-Locator ([REDMINE-3807](https://redmine.informationgrid.eu/issues/3807))
- [Feature] [INTERFACE-SEARCH] Update Layout für ATOM Download Service: Verlinkung zum Portal ([REDMINE-4087](https://redmine.informationgrid.eu/issues/4087))
- [Feature] [INTERFACE-SEARCH] Update Layout für ATOM Download Service: autom. partner-spez. Layouterstellung ([REDMINE-3987](https://redmine.informationgrid.eu/issues/3987))
- [Feature] [INTERFACE-SEARCH] Erweiterung der search Schnittstelle um einen Endpoint für DCAT-AP.DE Daten ([REDMINE-3632](https://redmine.informationgrid.eu/issues/3632))
- [Feature] [IPLUG-SE] BLP Bereich aus dem iPlug-SE entfernen ([REDMINE-3445](https://redmine.informationgrid.eu/issues/3445))
- [Feature] [PORTAL] Änderung von ATOM Download Link zu ATOM Download Client Link in der Detaildarstellung ([REDMINE-3363](https://redmine.informationgrid.eu/issues/3363))
- [Feature] [PORTAL] Verbesserung der Barrierefreiheit des Portals - Restarbeiten ([REDMINE-2591](https://redmine.informationgrid.eu/issues/2591))
- [Feature] [INTERFACE-SEARCH] Update Layout für ATOM Download Service ([REDMINE-2498](https://redmine.informationgrid.eu/issues/2498))
- [Feature] [PORTAL] Übernahme des neuen Layouts auf der Projekt-/Demoseite https://dev.informationgrid.eu/ ([REDMINE-2293](https://redmine.informationgrid.eu/issues/2293))
- [Feature] [IPLUG-SE] iPlug SE: Aktualisierung auf akt. NUTCH Version ([REDMINE-132](https://redmine.informationgrid.eu/issues/132))
- [Bug] [PORTAL] Portal: Unstimmigkeiten bei der Validierung von Benutzername ([REDMINE-3865](https://redmine.informationgrid.eu/issues/3865))
- [Bug] [PORTAL] Portal: Menü-Button wird durch langen Usernamen blockiert ([REDMINE-3823](https://redmine.informationgrid.eu/issues/3823))
- [Bug] [IBUS] Filtern von iPlugs funktioniert nicht korrekt ([REDMINE-4027](https://redmine.informationgrid.eu/issues/4027))
- [Bug] [IBUS] Keine Ergebnisse trotz korrekter Indizierung ([REDMINE-3797](https://redmine.informationgrid.eu/issues/3797))
- [Bug] [IGE] Einfügen eines Trenners in der Beschreibung des ISOs ([REDMINE-3759](https://redmine.informationgrid.eu/issues/3759))
- [Bug] [IPLUG_IGE] Erstellung ISO Abbildung, Umgang mit parentIdentifier ([REDMINE-3491](https://redmine.informationgrid.eu/issues/3491))
- [Bug] [IPLUG_IGE] IGE: wenn MD-Sprache englisch, dann müssen Thesaurus-Schlagworte und ISO-Themenkategorie in Englisch in ISO-XML und Portal ausgegeben werden ([REDMINE-3463](https://redmine.informationgrid.eu/issues/3463))

InGrid Installation Schleswig-Holstein

- [Feature] [PORTAL] Profil-Switch-Link soll deaktiviert werden ([REDMINE-3829](https://redmine.informationgrid.eu/issues/3829))
- [Feature] [MAPCLIENT] Kopplung WMS Layer und WFS Featuretype, Download-Möglichkeiten ([REDMINE-3585](https://redmine.informationgrid.eu/issues/3585))
- [Feature] [MAPCLIENT] FFH-Gebiete, Sprung zur Geometrie in der Karte ermöglichen ([REDMINE-4073](https://redmine.informationgrid.eu/issues/4073))
- [Feature] [MAPCLIENT] Konfiguration der Infobox der einzelnen Layer ([REDMINE-4016](https://redmine.informationgrid.eu/issues/4016))

MetaVer

- [Support] [PORTAL] HB - Vorschaubild austauschen: inkl. Bremerhaven ([REDMINE-3907](https://redmine.informationgrid.eu/issues/3907))

NUMIS

- [Bug] [PORTAL] Nds. UVP-Portal: Anzeige BLP-Details "Mitgliedsgemeinden:" ([REDMINE-4070](https://redmine.informationgrid.eu/issues/4070))

UVP

- [Feature] [PORTAL] Metadaten im UVP-Portal für Suchmaschinen und für Nutzer optimieren ([REDMINE-3635](https://redmine.informationgrid.eu/issues/3635))
- [Feature] [PORTAL] Ortssuche in der Karte des UVP-Portals auf Basis von NOMINATIM ([REDMINE-3621](https://redmine.informationgrid.eu/issues/3621))
- [Feature] [PORTAL] Optimierung Sammeldownload-Funktionalität ([REDMINE-3456](https://redmine.informationgrid.eu/issues/3456))
- [Feature] [CODELIST_REPO] Erweiterung der UVP-Nummern Bayern um weitere Nummern ([REDMINE-3776](https://redmine.informationgrid.eu/issues/3776))
- [Feature] [CODELIST_REPO] Erweiterung der UVP Nummer Codelisten ([REDMINE-3756](https://redmine.informationgrid.eu/issues/3756))
- [Bug] [PORTAL] UVP: Mehrfachauswahl unter Facetten "Verfahrenstypen" und "Kategorien" Korrektur ([REDMINE-3788](https://redmine.informationgrid.eu/issues/3788))
- [Bug] [PORTAL] UVP: ZIP-Download größer als 2GB werden nicht korrekt heruntergeladen ([REDMINE-3779](https://redmine.informationgrid.eu/issues/3779))
- [Bug] [IPLUG_IGE] Upload wird unter falscher UUID abgelegt ([REDMINE-3965](https://redmine.informationgrid.eu/issues/3965))
- [Bug] [IPLUG_IGE] Ausländisches Verfahren wird unter "Verfahren" angelegt ([REDMINE-2487](https://redmine.informationgrid.eu/issues/2487))

### Komponenten

- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.13.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/5.13.0/))
- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.13.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/5.13.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/5.13.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/5.13.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/5.13.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/5.13.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.13.0/))
