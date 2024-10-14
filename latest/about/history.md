---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.3.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.2.x](/7.2.0/about/history.html), [7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version  7.3.1

Release 07.10.2024

InGrid

- [Bug] JSON-Schema Fehler in einigen Profilen für neues Feld "Dateien" ([REDMINE-6885](https://redmine.informationgrid.eu/issues/6885))


## Version 7.3.0

Release 02.10.2024

### Wichtige Änderungen


#### [InGrid] HVD-Darstellung im Portal

Für alle Profile wurde die Facette "Ergebnistypen" um die Auswahl "HVD" ergänzt. Außerdem sind mit dieser Version die als HVD gekennzeichnete Objekte in der Suche erkennbar durch ein "offenens Scchloss" Icon und in der Detail-Ansicht im Bereich "Schlagworte" gennant.

![Portal Suche: "HVD-Darstellung im Portal"](../images/731_portal_search_hvd_1.png "Portal Suche: "HVD-Darstellung im Portal"")
<figcaption class="figcaption">Portal Suche: "HVD-Darstellung im Portal"</figcaption>

![Portal Suche - Detailansicht: "HVD-Darstellung im Portal"](../images/731_portal_search-detail_hvd_2.png "Portal Suche - Detailansicht: "HVD-Darstellung im Portal"")
<figcaption class="figcaption">Portal Suche - Detailansicht: "HVD-Darstellung im Portal"</figcaption>

([REDMINE-6674](https://redmine.informationgrid.eu/issues/6674))

#### [InGrid] Bereitstellen von Daten für alle Profile

Was bisher UVP vorbehalten war ist jetzt auch für alle Profile eingerichtet. Einem Metadatensatz können über einen Upload weitere Dateien hinzugefügt werden. 
Die Angabe des Dateiformats ist obligatorisch.

![Editor - Dateien: "Bereitstellen von Daten für alle Profile"](../images/731_editor_data_upload-file_1.png "Editor - Dateien: "Bereitstellen von Daten für alle Profile"")
<figcaption class="figcaption">Editor - Dateien: "Bereitstellen von Daten für alle Profile"</figcaption>

![Editor - Dateien Hochladen: "Bereitstellen von Daten für alle Profile"](../images/731_editor_data_upload-file_2.png "Editor - Dateien Hochladen: "Bereitstellen von Daten für alle Profile"")
<figcaption class="figcaption">Editor - Dateien Hochladen: "Bereitstellen von Daten für alle Profile"</figcaption>

![Editor - Dateien Bearbeiten: "Bereitstellen von Daten für alle Profile"](../images/731_editor_data_upload-file_3.png "Editor - Dateien Bearbeiten: "Bereitstellen von Daten für alle Profile"")
<figcaption class="figcaption">Editor - Dateien Bearbeiten: "Bereitstellen von Daten für alle Profile"</figcaption>

![Editor - Dateien Eintrag Bearbeiten: "Bereitstellen von Daten für alle Profile"](../images/731_editor_data_upload-file_4.png "Editor - Eintrag Bearbeiten: "Bereitstellen von Daten für alle Profile"")
<figcaption class="figcaption">Editor - Eintrag Bearbeiten: "Bereitstellen von Daten für alle Profile"</figcaption>

([REDMINE-6204](https://redmine.informationgrid.eu/issues/6204))

#### [InGrid] Integration Harvester

Der Harvester ist nun Teil des InGrid-Projekts!

![Harvester: "Der Harvester ist nun Teil des InGrid-Projekts"](../images/731_harvester.png "Harvester: "Der Harvester ist nun Teil des InGrid-Projekts"")
<figcaption class="figcaption">Harvester: "Der Harvester ist nun Teil des InGrid-Projekts"</figcaption>

([REDMINE-5562](https://redmine.informationgrid.eu/issues/5562))

#### [InGrid] Aufruf der Operation

Das Feld "Operation" zeigt nun durch den InGrid Editor bereitgestellte Information an

![Portal: "Aufruf der Operation"](../images/731_search_detail_operation.png "Portal: "Aufruf der Operation"")
<figcaption class="figcaption">Portal: "Aufruf der Operation""</figcaption>

([REDMINE-6636](https://redmine.informationgrid.eu/issues/6636))

### Liste der Änderungen

InGrid Editor

- [Bug] Fehler bei der Suche nach speziellen Zeichen ([REDMINE-6855](https://redmine.informationgrid.eu/issues/6855))
- [Bug] The 'Format' dropdown in 'Dokumente' dialog for Ingrid Geodataset  is not available (need to do migration)  ([REDMINE-6828](https://redmine.informationgrid.eu/issues/6828))
- [Bug] 'Verweise' dialog does not update the submit state on data change ([REDMINE-6826](https://redmine.informationgrid.eu/issues/6826))
- [Bug] Adding a new document to 'Dokumente' section does not appear immediately  ([REDMINE-6824](https://redmine.informationgrid.eu/issues/6824))
- [Bug] A referenced address with same responsible cannot  be added more than one time to the document ([REDMINE-6816](https://redmine.informationgrid.eu/issues/6816))
- [Bug] Import und export page ist nicht erreichbar für users mit gruppen ohne Folders bei den berechtigten Daten oder Adressen ([REDMINE-6752](https://redmine.informationgrid.eu/issues/6752))
- [Bug] Search using spatial title gives error ([REDMINE-6635](https://redmine.informationgrid.eu/issues/6635))
- [Bug] Validierungsfehler enthalten zuwenige Informationen ([REDMINE-6534](https://redmine.informationgrid.eu/issues/6534))
- [Bug] URL Pflege - Allgemeines Leserecht ermöglicht Änderungen an Daten, an denen kein Schreibrecht besteht ([REDMINE-6525](https://redmine.informationgrid.eu/issues/6525))

InGrid

- [Feature] Button "Registrieren" im Portal herausnehmen ([REDMINE-6779](https://redmine.informationgrid.eu/issues/6779))
- [Feature] Aktive Ortsfilter im Portal besser darstellen ([REDMINE-6760](https://redmine.informationgrid.eu/issues/6760))
- [Feature] IGE-NG Einführung ktlint check ([REDMINE-6750](https://redmine.informationgrid.eu/issues/6750))
- [Feature] Standalone Komponenten ([REDMINE-6735](https://redmine.informationgrid.eu/issues/6735))
- [Feature] HVD-Darstellung im Portal ([REDMINE-6674](https://redmine.informationgrid.eu/issues/6674))
- [Feature] Aufruf der Operation - Anpassung ähnlich #4570 umsetzen ([REDMINE-6636](https://redmine.informationgrid.eu/issues/6636))
- [Feature] MAPCLIENT: Integration Streckenlocator EBA ins GeoPortal.EBA ([REDMINE-6595](https://redmine.informationgrid.eu/issues/6595))
- [Feature] MAPCLIENT: Admin-GUI: Bearbeitung mehrerer Layer verbessern ([REDMINE-6594](https://redmine.informationgrid.eu/issues/6594))
- [Feature] JSON-Schema Validierung - Verweise ([REDMINE-6473](https://redmine.informationgrid.eu/issues/6473))
- [Feature] Portal-Darstellung HVD Datensätze ([REDMINE-6438](https://redmine.informationgrid.eu/issues/6438))
- [Feature] Abgabe des Textes des Raumbezuges über die DCAT-AP.DE Schnittstelle ([REDMINE-6426](https://redmine.informationgrid.eu/issues/6426))
- [Feature] CSV-Export für die URL Pflege ([REDMINE-6258](https://redmine.informationgrid.eu/issues/6258))
- [Feature] Überprüfung von Umlauten in der URL ([REDMINE-6231](https://redmine.informationgrid.eu/issues/6231))
- [Feature]  Bereitstellen von Daten in den Workflow „Editieren von Metadaten“ integrieren (UVP-Lösung) ([REDMINE-6204](https://redmine.informationgrid.eu/issues/6204))
- [Feature] Refactoring Adressreferenzen (war "Fehlende Rechte auf Adressen") ([REDMINE-5654](https://redmine.informationgrid.eu/issues/5654))
- [Feature] InGrid Harvester - Integration in InGrid-Projekt ([REDMINE-5562](https://redmine.informationgrid.eu/issues/5562))
- [Feature] Empfehlung zur Befüllung des Feldes "Datenformat" ([REDMINE-4637](https://redmine.informationgrid.eu/issues/4637))
- [Feature] Refactoring: Kapselung der Metadaten eines Dokumentes ([REDMINE-3535](https://redmine.informationgrid.eu/issues/3535))
- [Bug] MAPCLIENT: Short-Dateien führen zu große Dateien ([REDMINE-6879](https://redmine.informationgrid.eu/issues/6879))
- [Bug] Schlagwort wird visuell nicht hinzugefügt ([REDMINE-6827](https://redmine.informationgrid.eu/issues/6827))
- [Bug] Aktualisierung des Buildsystems des IGE-NG ([REDMINE-6807](https://redmine.informationgrid.eu/issues/6807))
- [Bug] Aktualisierung des Status der Adressreferenzen ([REDMINE-6780](https://redmine.informationgrid.eu/issues/6780))
- [Bug] Anzeige von "amtsinternen" MD bei den "Datenbezügen" einer Adresse ([REDMINE-6774](https://redmine.informationgrid.eu/issues/6774))
- [Bug] Hochgeladene entpackte ZIP-Dateien beim Veröffentlichen gelöscht ([REDMINE-6767](https://redmine.informationgrid.eu/issues/6767))
- [Bug] Portal: Tooltip in der Adresshierarchie korrigieren ([REDMINE-6765](https://redmine.informationgrid.eu/issues/6765))
- [Bug] Falscher Tooltip bei Adress-Icons ([REDMINE-6747](https://redmine.informationgrid.eu/issues/6747))
- [Bug] Interner Fehler im CSW bei Suchen mit räumlicher Einschränkung ([REDMINE-6739](https://redmine.informationgrid.eu/issues/6739))
- [Bug] Drag and Drop mehrzeilig verbessern ([REDMINE-6728](https://redmine.informationgrid.eu/issues/6728))
- [Bug] Abbildung Adresshierarchie mit mehreren Ebenen im Portal korrigieren ([REDMINE-6727](https://redmine.informationgrid.eu/issues/6727))
- [Bug] 7.2.1: Tabelle der Raumbezüge verschoben ([REDMINE-6689](https://redmine.informationgrid.eu/issues/6689))
- [Bug] Anzeige-Fehler bei den Verweisen ([REDMINE-6683](https://redmine.informationgrid.eu/issues/6683))
- [Bug] Löschen unfertiger Indizes beim Starten ([REDMINE-6661](https://redmine.informationgrid.eu/issues/6661))
- [Bug] Fehler bei ISO-Schema-Validierung mit GDI Testsuite ([REDMINE-6660](https://redmine.informationgrid.eu/issues/6660))
- [Bug] getRecord-Anfrage im iBus nicht eindeutig ([REDMINE-6637](https://redmine.informationgrid.eu/issues/6637))
- [Bug] CSW OGC Schnittstelle - Koordinaten in falscher Reihenfolge ([REDMINE-6611](https://redmine.informationgrid.eu/issues/6611))
- [Bug] Codelist Repository (5200) ISO Einträge fehlen ([REDMINE-6607](https://redmine.informationgrid.eu/issues/6607))
- [Bug] Fehler wenn Favorit bei "INSPIRE - priority data set" ([REDMINE-6579](https://redmine.informationgrid.eu/issues/6579))
- [Bug] Raumbezüge vom WMS 1.1.1 getCapabilities ([REDMINE-6566](https://redmine.informationgrid.eu/issues/6566))
- [Bug] dataSourceName wird nicht korrekt ausgegeben ([REDMINE-6564](https://redmine.informationgrid.eu/issues/6564))
- [Bug] Falsche Anzeige Personenname bei den Adressen im "Katalogbaum" ([REDMINE-6539](https://redmine.informationgrid.eu/issues/6539))
- [Bug] Fehler beim INSPIRE Auswahl bei Informationssystem ([REDMINE-6535](https://redmine.informationgrid.eu/issues/6535))
- [Bug]  OGC Schema zeigt keine BB bei Geodatendiensten ([REDMINE-6533](https://redmine.informationgrid.eu/issues/6533))
- [Bug] IPlug-SE log4j doppelte libraries ([REDMINE-6524](https://redmine.informationgrid.eu/issues/6524))
- [Bug] Platzhalter im Suchfeld aktualisieren ([REDMINE-6518](https://redmine.informationgrid.eu/issues/6518))
- [Bug] Technischen Angaben bei Dienst-Metadaten ([REDMINE-6508](https://redmine.informationgrid.eu/issues/6508))
- [Bug] Fehlermeldung bei Abmeldung ([REDMINE-6486](https://redmine.informationgrid.eu/issues/6486))
- [Bug] expired-template.jte, E-Mail abgelaufene Metadaten ([REDMINE-6420](https://redmine.informationgrid.eu/issues/6420))
- [Bug] Fehler bei Export und Import eines Ordners ([REDMINE-6419](https://redmine.informationgrid.eu/issues/6419))
- [Bug] Eintrag in katalogspezifischer Codeliste wird nicht gespeichert ([REDMINE-6388](https://redmine.informationgrid.eu/issues/6388))
- [Bug] Fehler bei Handhabung des ResourceIdentifier (Identifikator des Datensatzes) ([REDMINE-6303](https://redmine.informationgrid.eu/issues/6303))
- [Bug] Backend erzeugt viele Sessions in Keycloak ([REDMINE-5842](https://redmine.informationgrid.eu/issues/5842))

Profil BASt

- [Feature] Seitenname im Portal anpassen ([REDMINE-6740](https://redmine.informationgrid.eu/issues/6740))
- [Feature] URL Prüfung bei "Identifikator der Datenquelle" ([REDMINE-6715](https://redmine.informationgrid.eu/issues/6715))
- [Feature] Datensammlung - optionale Angaben ([REDMINE-6644](https://redmine.informationgrid.eu/issues/6644))
- [Feature] "Ähnliche Begriffe" ausblenden ([REDMINE-6614](https://redmine.informationgrid.eu/issues/6614))
- [Feature] Umbenennung Button "Alle Einschränkungen löschen" ([REDMINE-6517](https://redmine.informationgrid.eu/issues/6517))
- [Feature] Email Betreff von automatischen Benachrichtgungen flexibilisieren ([REDMINE-6483](https://redmine.informationgrid.eu/issues/6483))
- [Bug] Error on publishing data collection document ([REDMINE-6717](https://redmine.informationgrid.eu/issues/6717))
- [Bug] Identifikator der Datenquelle wird fälschlicherweise automatisch erzeugt ([REDMINE-6641](https://redmine.informationgrid.eu/issues/6641))

Profil BKG

- [Feature] AdV-MIS: Portalausgabe: Zeitbezug - anders betiteln ([REDMINE-6516](https://redmine.informationgrid.eu/issues/6516))
- [Feature] Portal: Facetten - Mehrfachselektion ermöglichen (AdVMIS und BKG-MIS) ([REDMINE-3841](https://redmine.informationgrid.eu/issues/3841))
- [Bug] Korrektur ISO-Ausgabe der Zugriffsbeschränkungen im englischen Katalog ([REDMINE-6818](https://redmine.informationgrid.eu/issues/6818))

Profil LfU Bayern

- [Feature] "Datenquelle" beim Export hinzufügen ([REDMINE-6620](https://redmine.informationgrid.eu/issues/6620))
- [Bug] Hochgeladene Vorschaubilder werden im Portal nicht angezeigt ([REDMINE-6681](https://redmine.informationgrid.eu/issues/6681))
- [Bug] Konfiguration iBus und CSW-Schnittstellen ([REDMINE-6584](https://redmine.informationgrid.eu/issues/6584))

Profil KRZN

- [Feature] Suchfacettierung "Anbieter" entfernen ([REDMINE-6639](https://redmine.informationgrid.eu/issues/6639))
- [Feature] Austausch Icon Geodatensatz auf der Startseite ([REDMINE-6638](https://redmine.informationgrid.eu/issues/6638))

Profil LUBW

- [Feature] Anlegen der Seite "Erklärung zur Barrierefreiheit" ([REDMINE-6548](https://redmine.informationgrid.eu/issues/6548))

Profil MetaVer

- [Feature] Sortierreihenfolge für Anbieter in der Facettierung ändern ([REDMINE-3255](https://redmine.informationgrid.eu/issues/3255))

Profil NUMIS

- [Bug] Druckfunktion Kartenviewer ([REDMINE-5095](https://redmine.informationgrid.eu/issues/5095))

Profil RLP

- [Bug] Anzeige der Adressen im Portal ([REDMINE-6773](https://redmine.informationgrid.eu/issues/6773))

Profil UVP

- [Feature] Synchronisation mit UVP Monitoring nachdem eine Veröffentlichung zurückgezogen wurde ([REDMINE-6768](https://redmine.informationgrid.eu/issues/6768))
- [Bug] Kopieren von Verfahren mit archivierten Dateien unvollständig ([REDMINE-6787](https://redmine.informationgrid.eu/issues/6787))
- [Bug] Vorschau - Druck nur erste Seite ([REDMINE-6435](https://redmine.informationgrid.eu/issues/6435))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.3.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.3.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.3.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.3.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.3.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.3.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.3.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/7.3.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.3.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.3.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.3.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.3.0/))

