---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 8.0.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.5.x](/7.5.0/about/history.html), [7.4.x](/7.4.0/about/history.html), [7.3.x](/7.3.0/about/history.html), [7.2.x](/7.2.0/about/history.html), [7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 8.0.0

Release 04.07.2025

### Hinweise für die Aktualisierung


### Wichtige Änderungen


### Liste der Änderungen

InGrid

- [Feature] Vorbereitung Codelist-basierter Felder für die Synchronisation ([REDMINE-4512](https://redmine.informationgrid.eu/issues/4512))
- [Feature] Ablösung Jetspeed als InGrid Portal (Default-Profil) ([REDMINE-5686](https://redmine.informationgrid.eu/issues/5686))
- [Feature] Ablegen der values im Datenmodell ([REDMINE-5838](https://redmine.informationgrid.eu/issues/5838))
- [Feature] IGE: Verhalten für die Erfassung von DOIs portieren ([REDMINE-6693](https://redmine.informationgrid.eu/issues/6693))
- [Feature] Portal-NG: Ausgabe "Datengrundlage/Herkunft" anpassen ([REDMINE-7433](https://redmine.informationgrid.eu/issues/7433))
- [Feature] Verbesserung der Berechtigungsansicht, Sprung in die Ordner ([REDMINE-7476](https://redmine.informationgrid.eu/issues/7476))
- [Feature] Harvester: Verbesserung der Installationsbeschreibung ([REDMINE-7487](https://redmine.informationgrid.eu/issues/7487))
- [Feature] Archivierung für Metadaten-Administratoren deaktivieren ([REDMINE-7520](https://redmine.informationgrid.eu/issues/7520))
- [Feature] Aktualisierung ehCache in iBus-Client ([REDMINE-7719](https://redmine.informationgrid.eu/issues/7719))
- [Feature] Abhängigkeit zu Pebbles entfernen ([REDMINE-7720](https://redmine.informationgrid.eu/issues/7720))
- [Feature] Unterstützung von JSON Merge / Patch im Importer ([REDMINE-7856](https://redmine.informationgrid.eu/issues/7856))
- [Bug] "ARS" unklar (Geo-Thesaurus Raumbezug) ([REDMINE-5253](https://redmine.informationgrid.eu/issues/5253))
- [Bug] Undefinierter Zustand im Zusammenhang mit nicht gespeicherten Daten und session timeout ([REDMINE-5615](https://redmine.informationgrid.eu/issues/5615))
- [Bug] Metadatendatum wird nach dem Zurückziehen der Veröffentlichung weiterhin angezeigt ([REDMINE-5891](https://redmine.informationgrid.eu/issues/5891))
- [Bug] Index anpassen für die "URL des Zugangs" ([REDMINE-5936](https://redmine.informationgrid.eu/issues/5936))
- [Bug] Keine einheitliche Anwendung von Tabellen ([REDMINE-6044](https://redmine.informationgrid.eu/issues/6044))
- [Bug] ISO Vorschau wird nicht angezeigt ([REDMINE-6529](https://redmine.informationgrid.eu/issues/6529))
- [Bug] Account anlegen - Request Error Diagnostics ([REDMINE-6626](https://redmine.informationgrid.eu/issues/6626))
- [Bug] Vermeidung von Leerzeichen in Formularfeldern und korrekte Behandlung bei der Validierung ([REDMINE-6872](https://redmine.informationgrid.eu/issues/6872))
- [Bug] IGE-NG: Index für gekoppelte Daten ggf. falsch befüllt ([REDMINE-7039](https://redmine.informationgrid.eu/issues/7039))
- [Bug] IBUS: Suche liefert mehr Treffer als erlaubt ([REDMINE-7054](https://redmine.informationgrid.eu/issues/7054))
- [Bug] Fehlende uuidref-Angabe im ISO ([REDMINE-7097](https://redmine.informationgrid.eu/issues/7097))
- [Bug] SQL Suche - Fehlermeldung bei CSV für leere Ergebnisliste ([REDMINE-7139](https://redmine.informationgrid.eu/issues/7139))
- [Bug] Fenster "Suche Speichern" verschiebbar machen ([REDMINE-7149](https://redmine.informationgrid.eu/issues/7149))
- [Bug] Übernehmen Button ist aktiv obwohl Pflichtfeld nicht ausgefüllt ist ([REDMINE-7485](https://redmine.informationgrid.eu/issues/7485))
- [Bug] Refactoring - Form redirect / Sidemenu ([REDMINE-7491](https://redmine.informationgrid.eu/issues/7491))
- [Bug] Beim Löschen eines Benutzers bleibt das Formular offen ([REDMINE-7505](https://redmine.informationgrid.eu/issues/7505))
- [Bug] Fehler wenn WKT und BoundingBox als Raumbezug ([REDMINE-7508](https://redmine.informationgrid.eu/issues/7508))
- [Bug] Fehlende Anzeige des Veröffentlichungsrecht in der Suche ([REDMINE-7509](https://redmine.informationgrid.eu/issues/7509))
- [Bug] IGE: Verhalten für Feld "Art des Dienstes" für AtomFeeds anpassen ([REDMINE-7510](https://redmine.informationgrid.eu/issues/7510))
- [Bug] Abbrechen des Dialogs für InVeKoS setzt alle Merkmale zurück ([REDMINE-7536](https://redmine.informationgrid.eu/issues/7536))
- [Bug] Anzeige des Index und des Suchergebnisses funktioniert nicht ([REDMINE-7539](https://redmine.informationgrid.eu/issues/7539))
- [Bug] Fehler bei Zeige in Karte Funktionalität ([REDMINE-7559](https://redmine.informationgrid.eu/issues/7559))
- [Bug] Fehler bei Verknüpfung eines Geodatensatzes in Datengrundlage ([REDMINE-7560](https://redmine.informationgrid.eu/issues/7560))
- [Bug] Darstellung des Distributorkontaktes nicht korrekt (war: Fehlende Adressangaben in den RIPS-Metadaten) ([REDMINE-7589](https://redmine.informationgrid.eu/issues/7589))
- [Bug] Ortsuche funktioniert nicht ([REDMINE-7616](https://redmine.informationgrid.eu/issues/7616))
- [Bug] Versionskonflikt: "Trotzdem Speichern..."-Option feuert immer wieder den Versionskonflikt-Dialog ([REDMINE-7653](https://redmine.informationgrid.eu/issues/7653))
- [Bug] Thesaurus WFS_GNDE liefert keine Ergebnisse ([REDMINE-7656](https://redmine.informationgrid.eu/issues/7656))
- [Bug] Deaktivierte Verhalten werden nicht vollständig entfernt ([REDMINE-7695](https://redmine.informationgrid.eu/issues/7695))
- [Bug] Abschnitt Datengrundlage/Herkunft in Geodatensatz - Beim ISO-Import werden interne Referenzierungen nicht aufgelöst ([REDMINE-7740](https://redmine.informationgrid.eu/issues/7740))
- [Bug] IGE fetch dynamicModule Error ([REDMINE-7755](https://redmine.informationgrid.eu/issues/7755))
- [Bug] Falsche Validierung im Metadatenfeld ([REDMINE-7766](https://redmine.informationgrid.eu/issues/7766))
- [Bug] Import von größeren Dateien schlägt fehl ([REDMINE-7786](https://redmine.informationgrid.eu/issues/7786))
- [Bug] Import: Personenadresse wird neu angelegt obwohl vorhanden ([REDMINE-7820](https://redmine.informationgrid.eu/issues/7820))
- [Bug] Ordner kann nach Verschieben von Datensatz nicht gelöscht werden ([REDMINE-7836](https://redmine.informationgrid.eu/issues/7836))
- [Bug] Baum aktualisiert sich nach Import nicht ([REDMINE-7838](https://redmine.informationgrid.eu/issues/7838))
- [Bug] Dateiupload über Endpunkt OGC API Distributions funktioniert nicht ([REDMINE-7862](https://redmine.informationgrid.eu/issues/7862))
- [Bug] Fehler beim Erstellen eines Datensatzes ([REDMINE-7867](https://redmine.informationgrid.eu/issues/7867))

Profil BASt

- [Feature] Aktualisierung Hilfetexte ([REDMINE-7502](https://redmine.informationgrid.eu/issues/7502))

Profil BKG

- [Feature] AdV-MIS: Portal: Radiobutton "Sonstiges" unter Facette "Produktgruppe" entfernen ([REDMINE-6941](https://redmine.informationgrid.eu/issues/6941))
- [Feature] Portal: Facette HVD einrichten ([REDMINE-6942](https://redmine.informationgrid.eu/issues/6942))
- [Feature] Portal: AdV-MIS: MD zu Kacheln - erst anzeigen, wenn aktiv ausgewählt ([REDMINE-7319](https://redmine.informationgrid.eu/issues/7319))

Profil KRZN

- [Test] Testen des Exports für interne Datensätze ([REDMINE-7143](https://redmine.informationgrid.eu/issues/7143))
- [Feature] Anpassung des Zoom-Feldes ([REDMINE-7537](https://redmine.informationgrid.eu/issues/7537))

Profil LfU Bayern

- [Feature] Filterung/Kennzeichnung von WWA-AB-Daten im LfU-Bayern Portal ([REDMINE-7548](https://redmine.informationgrid.eu/issues/7548))

Profil MetaVer

- [Feature] PORTAL: Eintrag "Freie Adressen" nach oben schieben  ([REDMINE-4726](https://redmine.informationgrid.eu/issues/4726))
- [Feature] Umstellung Portal auf Neue Portal Technologie - METAVER ([REDMINE-7060](https://redmine.informationgrid.eu/issues/7060))
- [Feature] BB: NSG, LSG - Anpassungen Titel und Höhe WKT ([REDMINE-7763](https://redmine.informationgrid.eu/issues/7763))
- [Bug] ATOM Feeds, alphabetische Reihenfolge der Downloads? ([REDMINE-6161](https://redmine.informationgrid.eu/issues/6161))
- [Bug] Atom-Feed Client: Download-URLs HTML-dekodieren ([REDMINE-7857](https://redmine.informationgrid.eu/issues/7857))
- [Bug] Fehler JSON-Schema-Validierung bei "Typ" in "Datengrundlage/Herkunft" ([REDMINE-7895](https://redmine.informationgrid.eu/issues/7895))
- [Bug] METAVER Testsystem - Leserecht überträgt sich nicht auf untergeordnete Ordner ([REDMINE-7920](https://redmine.informationgrid.eu/issues/7920))

MVIS

- [Feature] Aktualisierung Elasticsearch ([REDMINE-7701](https://redmine.informationgrid.eu/issues/7701))

Profil Saarland

- [Bug] Importer liest keine HVD Kategorie ([REDMINE-7727](https://redmine.informationgrid.eu/issues/7727))

Profil UVP

- [Support] Performance Verbesserung beim Virus-Scan Prozess ([REDMINE-6081](https://redmine.informationgrid.eu/issues/6081))
- [Feature] Erweiterung des UVP Monitorings um die Verfahrensseiten ([REDMINE-6218](https://redmine.informationgrid.eu/issues/6218))
- [Feature] Umstellung Portal auf Neue Portal Technologie - UVP-VERBUND ([REDMINE-7061](https://redmine.informationgrid.eu/issues/7061))
- [Feature] Zugriff auf Geofabrik Karten für UVP-VERBUND und METAVER trennen ([REDMINE-7814](https://redmine.informationgrid.eu/issues/7814))
- [Bug] Fehlerhafte Dateiprüfung bei Unpublish (Veröffentlichung zurückziehen) ([REDMINE-6489](https://redmine.informationgrid.eu/issues/6489))
- [Bug] Fehler beim Zabbix-Job ([REDMINE-7513](https://redmine.informationgrid.eu/issues/7513))
- [Bug] Archivierung von Verfahren ([REDMINE-7515](https://redmine.informationgrid.eu/issues/7515))
- [Bug] Archivierung - Katalogeinstellung ([REDMINE-7516](https://redmine.informationgrid.eu/issues/7516))
- [Bug] Archivierung kann zu fehlerhaften Verfahren führen ([REDMINE-7541](https://redmine.informationgrid.eu/issues/7541))
- [Bug] Monitoring für Dateien mit gleichem Namen ([REDMINE-7819](https://redmine.informationgrid.eu/issues/7819))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/8.0.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/8.0.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/8.0.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/8.0.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/8.0.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/8.0.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/8.0.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/8.0.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/8.0.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/8.0.0/))

  
