---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.2.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.2.0

Release 09.07.2024

### Hinweise für die Aktualisierung

#### Elasticsearch

Es wird jetzt die derzeit aktuellste Version 8.14.1 von Elasticsearch unterstützt. Für die Anpassung ist Folgendes zu tun:
* Aktualisierung der `docker-compose.yml`-Datei (siehe weiter unten)
* Anpassung der Konfiguration zu Elasticsearch in den iPlugs und im iBus
  * Anstelle des Ports `9300` wird nun `9200` verwendet
  * Gegebenenfalls Anpassungen der Konfigurationsdateien, sofern hier der Elasticsearch Port gesetzt wird. Das kann die Konfigurationsdteien configuration.override.properties (iPlugs), application-default.properties (iBus) oder docker-compose.yml betreffen.
* Aktivierung der Indizes nach neuer Indizierung
  * durch die Entfernung des Index-Typs, kann sich der Name des Indexes verändert haben, und somit die Erkennung im iBus, ob dieser aktiviert wurde oder nicht

Hier ist eine Beispielkonfiguration für eine Elasticsearch 8 Instanz:
```yaml
elastic:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.14.1
    restart: unless-stopped
    environment:
      - cluster.name=ingrid
      - discovery.type=single-node
      - cluster.routing.allocation.disk.threshold_enabled=false
      - http.host=0.0.0.0
      - transport.host=0.0.0.0
      - http.cors.enabled=true
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
    volumes:
      ...
```

#### IGE-NG

Ab der Version 7.1.1 erhalten die Indizes neue Namen, um die mehrfach-Indizierung desselben Katalogs in einen Elasticsearch Cluster zu unterstützen. Nach der Aktualisierung muss neu indiziert werden und im iBus die alten Indizes deaktiviert bzw. gelöscht und die neuen Indizes aktiviert werden.

Die neuen Indizes haben die Form: `<CATALOG_ID>_<TYPE>_<TARGET_NAME>_<TIMESTAMP>` 

Hier ein Beispiel:
```
vorheriger Index: ingridcatalog_data_20240411144526557
     neuer Index: ingridcatalog_data_internesportal_20240411144526557
```

### Wichtige Änderungen


#### [InGrid] Klassifikation des Dienstes

Die Klassifikation eines Dienstes kann mit dieser InGrid Version visuell direkt identifiziert werden. Sie ist in Klammern im Auswahltext zu sehen.

![InGrid Editor: "Klassifikation des Dienstes"](../images/720_ingrid-editor_object_classification.png "InGrid Editor: "Klassifikation des Dienstes"")
<figcaption class="figcaption">InGrid Editor: "Klassifikation des Dienstes"</figcaption>

([REDMINE-5760](https://redmine.informationgrid.eu/issues/5760))

#### [InGrid] Upgrade Elasticsearch auf Version 8.14.1

InGrid geht mit der Zeit. Die für InGrid notwendige Indizierungskomponente Elasticsearch wird nun in der bis dato aktuellsten Version 8.14.1 von InGrid unterstützt! Die Komponenten in Version 7.2.0 unterstützen weiterhin Elasticsearch in Version 7.x damit ein Übergang zu der neueren Elasticsearch Version unbeschwert vollzogen werden kann. Bitte die Aktualisierungshinweise dazu beachten!

([REDMINE-6119](https://redmine.informationgrid.eu/issues/6119)) ([REDMINE-6102](https://redmine.informationgrid.eu/issues/6102))

#### [InGrid Editor] Export an verschiedene IBusse

Beim Export an verschiedene IBusse werden je IBus verschiedene Indexe in der gleichen Elasticsearch Instanz indiziert.
Die Indexe können dann im IBus-GUI je nach Kontext des IBus (Internet/Intranet/Intranet technisch) an- bzw. abgeschaltet werden und können dementsprechend anhand der jeweiligen Bezeichnung identfiziert werden. Die jeweilige Bezeichung des Indices setzt sich dann folgendermaßen zusammen:

  * Katalog-ID
  * Kategorie (data/address)
  * Exportername des Ziels


([REDMINE-6171](https://redmine.informationgrid.eu/issues/6171))

#### [InGrid Editor] DCAT-AP-de import

InGrid in Version 7.2.0 ermöglicht den Import von Datensätzen im DCAT-AP.de Format. Es werden Titel, Beschreibung, Adresse und Distribution ins Open-Data Profil importiert.

([REDMINE-6379](https://redmine.informationgrid.eu/issues/6379))

#### [LUBW] Darstellungs- und Downloaddienste

Die Portal-Suche und die Ergebnisseite eines Objektes ist für eine bessere visuelle Dartellung angepasst. Die Unterscheidung Darstellungs- und Downloaddienste im Bereich "URL des Zugangs" wurde um einen jeweils zutreffenden Vermerk ergänzt und ist so besser zu identifizieren.

![Portal: "Darstellungs- und Downloaddienste"](../images/720_portal_ingrid_search.png "Portal: "Darstellungs- und Downloaddienste"")
<figcaption class="figcaption">Portal: "Darstellungs- und Downloaddienste"</figcaption>


([REDMINE-6063](https://redmine.informationgrid.eu/issues/6063))

#### [UPSH] 3D Darstellung

Für das Umweltportal Profil von Schleswig-Holstein wurde die 3D-Dartellung der Karte umgesetzt.

![Portal: "3D Darstellung Auswahl"](../images/720_portal_map_upsh_3d_1.png "Portal: "3D Darstellung Auswahl"")
<figcaption class="figcaption">Portal: "3D Darstellung Auswahl"</figcaption>

![Portal: "3D Darstellung"](../images/720_portal_map_upsh_3d_2.png "Portal: "3D Darstellung"")
<figcaption class="figcaption">Portal: "3D Darstellung"</figcaption>

([REDMINE-5943](https://redmine.informationgrid.eu/issues/5943))



#### [LfU Bayern] Anonymisierung

Die über einen CSW-Request erhaltenen Informationen können personenbezogene Daten enthalten. Das Verhalten eines Katalogs kann im InGrid Edtior nun so angepasst werden, dass diese Daten anonymisiert werden.

![InGrid Editor: "Anonymisierung"](../images/720_ingrid-editor_catalogue_lfubayern_anonymization.png "InGrid Editor: "Anonymisierung"")
<figcaption class="figcaption">InGrid Editor: "Anonymisierung"</figcaption>

([REDMINE-6253](https://redmine.informationgrid.eu/issues/6253))

### Liste der Änderungen

IGE-NG

- [Feature] ISO-Ansicht: nur anzeigen wenn valide? ([REDMINE-5214](https://redmine.informationgrid.eu/issues/5214))
- [Bug] Darstellung der Metadaten im GetCapabilities Assistenten verbessern ([REDMINE-6090](https://redmine.informationgrid.eu/issues/6090))
- [Bug] Bugs in the preview functionality  ([REDMINE-4362](https://redmine.informationgrid.eu/issues/4362))

InGrid

- [Feature] MVIS GUI: Konkrete Zeitbereiche eingeben für Darstellung Zeitreihe ([REDMINE-6505](https://redmine.informationgrid.eu/issues/6505))
- [Feature] Veröffentlichungsrecht bei Referenzen während Veröffentlichung prüfen ([REDMINE-6482](https://redmine.informationgrid.eu/issues/6482))
- [Feature] Veröffentlichungsrecht - Warnung bei Änderung bei Adressen ([REDMINE-6458](https://redmine.informationgrid.eu/issues/6458))
- [Feature] Export-Funktionalität mit Mehrfachauswahl ([REDMINE-6437](https://redmine.informationgrid.eu/issues/6437))
- [Feature] Codelist-Repo: definierter Ausschluss von Aktualisierungen ([REDMINE-6430](https://redmine.informationgrid.eu/issues/6430))
- [Feature] Portal: AdV-MIS: gmx:Anchor auslesen für "Spezifikation der Konformität" ([REDMINE-6398](https://redmine.informationgrid.eu/issues/6398))
- [Feature] Mehrfachauswahl bei Export ([REDMINE-6382](https://redmine.informationgrid.eu/issues/6382))
- [Feature] Import von DCAT-AP.de ([REDMINE-6379](https://redmine.informationgrid.eu/issues/6379))
- [Feature] Anbieter Codeliste (id 111): BASt ergänzen ([REDMINE-6341](https://redmine.informationgrid.eu/issues/6341))
- [Feature] MAPCLIENT: Scale Einstellungen von kombinierten eingepflegten Karten im Update-Job integrieren ([REDMINE-6291](https://redmine.informationgrid.eu/issues/6291))
- [Feature] MAPCLIENT: Einstellbarkeit der Karten-Zoomstufen ([REDMINE-6287](https://redmine.informationgrid.eu/issues/6287))
- [Feature] "Veröffentlichungsrecht" wird nicht in Index gemappt und kann nicht gesucht werden im Portal ([REDMINE-6235](https://redmine.informationgrid.eu/issues/6235))
- [Feature] Integration IGE BMWK Profil in den develop branch  ([REDMINE-6229](https://redmine.informationgrid.eu/issues/6229))
- [Feature] Integration Portal BMWK Profil in den develop branch  ([REDMINE-6228](https://redmine.informationgrid.eu/issues/6228))
- [Feature] Portal Cache per default deaktivieren ([REDMINE-6188](https://redmine.informationgrid.eu/issues/6188))
- [Feature] IGE-NG: iBus spezifischer Index beim Export an verschiedene iBusse ([REDMINE-6171](https://redmine.informationgrid.eu/issues/6171))
- [Feature] Kennzeichnung HVD Metadaten - Ausgabe über DCAT-AP ([REDMINE-6164](https://redmine.informationgrid.eu/issues/6164))
- [Feature] Upgrade Elasticsearch auf Version 8.x. ([REDMINE-6119](https://redmine.informationgrid.eu/issues/6119))
- [Feature] Umstellung der iBus Kommunikation mit ElasticSearch von TCP Port 9300 auf HTTP/HTTPS Port 9200 ([REDMINE-6102](https://redmine.informationgrid.eu/issues/6102))
- [Feature] IGE: Schlagwort-Auswahlfeld mit HVD-Kategorien (Basis-Funktionalität) ([REDMINE-6076](https://redmine.informationgrid.eu/issues/6076))
- [Feature] IGE: Anpassung der Liste "AdV-Produktgruppe" ([REDMINE-6019](https://redmine.informationgrid.eu/issues/6019))
- [Feature] CSW Schnittstelle, OGC Darstellung: Erweiterung der Angabe der Links zu Diensten mit einer Protokoll Angabe ([REDMINE-5951](https://redmine.informationgrid.eu/issues/5951))
- [Feature] Klassifikation des Dienstes - Ergänzung angezeigte Dienstklassifizierung ([REDMINE-5760](https://redmine.informationgrid.eu/issues/5760))
- [Feature] Refactoring IGE-NG: IDF Export Template Dateien in an einer Stelle zusammen fassen ([REDMINE-5757](https://redmine.informationgrid.eu/issues/5757))
- [Bug] MVIS: Probleme bei Darstellung von Gesamtzeitreihen ([REDMINE-6506](https://redmine.informationgrid.eu/issues/6506))
- [Bug] Suche / "ähnliche Begriffe" - Cache-Problematik? ([REDMINE-6495](https://redmine.informationgrid.eu/issues/6495))
- [Bug] Falsche SQL für die Ermittlung der eingehenden Referenzen ([REDMINE-6474](https://redmine.informationgrid.eu/issues/6474))
- [Bug] Import von Adressen mit nicht existierender Uuid ([REDMINE-6463](https://redmine.informationgrid.eu/issues/6463))
- [Bug] Import von Personen legt Duplikate an ([REDMINE-6456](https://redmine.informationgrid.eu/issues/6456))
- [Bug] IBus - Hohe Thread Anzahl nach ES-Ausfall ([REDMINE-6450](https://redmine.informationgrid.eu/issues/6450))
- [Bug] Datensatz aus anderem Katalog fehlt nach Import ([REDMINE-6429](https://redmine.informationgrid.eu/issues/6429))
- [Bug] MAPCLIENT: Druck-Funktion erzeugt falsche Scaleline im PDF ([REDMINE-6390](https://redmine.informationgrid.eu/issues/6390))
- [Bug] Hochgeladene Dateien werden gelöscht durch automatische Speicherung ([REDMINE-6386](https://redmine.informationgrid.eu/issues/6386))
- [Bug] Fehlermeldung bei Validierung "Medienoption" ([REDMINE-6380](https://redmine.informationgrid.eu/issues/6380))
- [Bug] Fehler beim Speichern von Profilinformationen ([REDMINE-6313](https://redmine.informationgrid.eu/issues/6313))
- [Bug]  The values of the field 'Informationsgegenstand' in a document of type 'Organisationseinheit'  are missing in the HMDK portal   ([REDMINE-6292](https://redmine.informationgrid.eu/issues/6292))
- [Bug] Berechnung der zu exportierenden Datensätze fehlerhaft ([REDMINE-6283](https://redmine.informationgrid.eu/issues/6283))
- [Bug] Sicherheitslücke in xmlbeans ([REDMINE-6267](https://redmine.informationgrid.eu/issues/6267))
- [Bug] 'Herstellungsprozess' field should show multiple entries in Ingrid Portal  ([REDMINE-6203](https://redmine.informationgrid.eu/issues/6203))
- [Bug] Rechenfehler beim Indizieren... ([REDMINE-6201](https://redmine.informationgrid.eu/issues/6201))
- [Bug] Fehler beim Veröffentlichen / Indizieren bei Feld "Durch die Ressource abgedeckte Zeitspanne" ([REDMINE-6200](https://redmine.informationgrid.eu/issues/6200))
- [Bug] Metadatensätze mit gleichem Namen wechseln Position im Baum bei Veröffentlichung ([REDMINE-6190](https://redmine.informationgrid.eu/issues/6190))
- [Bug] Metadatenadministrator kann selbst erstellte Gruppe nicht löschen ([REDMINE-6186](https://redmine.informationgrid.eu/issues/6186))
- [Bug] Löschen aus Index kann zu Fehler führen ([REDMINE-6181](https://redmine.informationgrid.eu/issues/6181))
- [Bug] Vorschaubilder für untergeordnete Objekte der Datensätze erscheinen nicht im Portal... ([REDMINE-6170](https://redmine.informationgrid.eu/issues/6170))
- [Bug] IGE: Importfehler ([REDMINE-6116](https://redmine.informationgrid.eu/issues/6116))
- [Bug] "Nach Ort suchen" im Portal funktioniert nicht ([REDMINE-6036](https://redmine.informationgrid.eu/issues/6036))

Profil BASt

- [Feature] Open Data - Checkbox und Portaldarstellung ([REDMINE-6454](https://redmine.informationgrid.eu/issues/6454))
- [Feature] Offene Themen aus Feedback Portal ([REDMINE-6405](https://redmine.informationgrid.eu/issues/6405))
- [Feature] Export "Bestellinformationen" nur nach intern ([REDMINE-6350](https://redmine.informationgrid.eu/issues/6350))
- [Feature] Open-Data Datensätze: optionale Angaben  ([REDMINE-6334](https://redmine.informationgrid.eu/issues/6334))
- [Feature] Anpassung Export, Adressen vom Typ "Fachliche Ansprechstelle" ([REDMINE-6333](https://redmine.informationgrid.eu/issues/6333))
- [Feature] Anpassungen *externes* Portal ([REDMINE-6295](https://redmine.informationgrid.eu/issues/6295))
- [Feature] Anpassung Kategorien / Facetten (internes und externes Portal) ([REDMINE-6294](https://redmine.informationgrid.eu/issues/6294))
- [Feature] Anpassungen *internes* Portal ([REDMINE-6293](https://redmine.informationgrid.eu/issues/6293))
- [Bug] Button "Zoom auf initialen Kartenausschnitt" funktioniert unter "Raumbezug" nicht ([REDMINE-6410](https://redmine.informationgrid.eu/issues/6410))
- [Bug] Suche nach Projektnummer funktioniert nicht ([REDMINE-6348](https://redmine.informationgrid.eu/issues/6348))
- [Bug] Anpassungen Editor: "Datensammlung" statt "Datenbank" ([REDMINE-6255](https://redmine.informationgrid.eu/issues/6255))
- [Bug] Anpassung der Ansicht der Datensammlung ([REDMINE-6147](https://redmine.informationgrid.eu/issues/6147))

Profil BKG

- [Feature] Portal: Feld "Konformität" verschieben in Rubrik "Datenqualität" ([REDMINE-4464](https://redmine.informationgrid.eu/issues/4464))

Profil HMDK

- [Bug] "Kartenlinks" werden nicht im Portal angezeigt ([REDMINE-6399](https://redmine.informationgrid.eu/issues/6399))

Profil KRZN

- [Feature] Update Portalstartseite - Pull Request 83 ingrid-portal ([REDMINE-6411](https://redmine.informationgrid.eu/issues/6411))

Profil LUBW

- [Feature] Neue Stöberkategorie “Open Data” ([REDMINE-6256](https://redmine.informationgrid.eu/issues/6256))
- [Feature] Profil IGE-NG für die LUBW umsetzen ([REDMINE-5592](https://redmine.informationgrid.eu/issues/5592))
- [Feature] Bessere visuelle Unterscheidung Darstellungs- und Downloaddienste für "URL des Zugangs" ([REDMINE-6063](https://redmine.informationgrid.eu/issues/6063))

Profil LfU Bayern

- [Feature] Portalausgabe der Nutzungsbedingungen ([REDMINE-6490](https://redmine.informationgrid.eu/issues/6490))
- [Feature] Portal - Restarbeiten ([REDMINE-6464](https://redmine.informationgrid.eu/issues/6464))
- [Feature] Fertigstellung "Interne Schlüsselwörter" und "Geologische Schlüsselliste" ([REDMINE-6394](https://redmine.informationgrid.eu/issues/6394))
- [Feature] Anpassungen bei Nutzungsbedingungen ([REDMINE-6383](https://redmine.informationgrid.eu/issues/6383))
- [Feature] Funktion GetCapabilities Aktualisieren für Dienste herausnehmen ([REDMINE-6343](https://redmine.informationgrid.eu/issues/6343))
- [Feature] ISO-Ansicht im Editor ([REDMINE-6342](https://redmine.informationgrid.eu/issues/6342))
- [Feature] Farben / Logo / Styles... ([REDMINE-6307](https://redmine.informationgrid.eu/issues/6307))
- [Feature] applicationProfile, Anpassung der Liste ([REDMINE-6274](https://redmine.informationgrid.eu/issues/6274))
- [Feature] Anonymisierung Adressen ([REDMINE-6253](https://redmine.informationgrid.eu/issues/6253))
- [Feature] Daten-Dienste-Kopplung: neue Komponente für Erfassung der Layer ([REDMINE-6084](https://redmine.informationgrid.eu/issues/6084))
- [Feature] Anzupassendes Verhalten bezüglich Export (CSW) nach extern ([REDMINE-6041](https://redmine.informationgrid.eu/issues/6041))
- [Feature] Neue Felder im Editor ([REDMINE-6039](https://redmine.informationgrid.eu/issues/6039))
- [Feature] Verschlankung des Formulars im Editor ([REDMINE-6013](https://redmine.informationgrid.eu/issues/6013))
- [Feature] Umsetzung Profil IGE-NG ([REDMINE-5946](https://redmine.informationgrid.eu/issues/5946))
- [Bug] Fehlermeldung beim Anmelden in der Entwicklungsumgebung ([REDMINE-6448](https://redmine.informationgrid.eu/issues/6448))
- [Bug] Fehler Indexierung und ISO-Ansicht ([REDMINE-6432](https://redmine.informationgrid.eu/issues/6432))
- [Bug] Nächtliche Indexierung auf PROD läuft nicht ([REDMINE-6422](https://redmine.informationgrid.eu/issues/6422))
- [Bug] abstract in ISO-Ansicht fehlerhaft ([REDMINE-6277](https://redmine.informationgrid.eu/issues/6277))

Profil NUMIS

- [Bug] Feedback: NUMIS MapClient - Fehler in Maßstab ([REDMINE-6440](https://redmine.informationgrid.eu/issues/6440))
- [Bug] JSON-Validierungsfehler Freier Raumbezug ([REDMINE-6401](https://redmine.informationgrid.eu/issues/6401))

Profil RLP

- [Feature] Portal: "Kataloge" -> "Themen" ([REDMINE-6156](https://redmine.informationgrid.eu/issues/6156))
- [Bug] Portal, notwendige Anpassungen nach Aktualisierung ([REDMINE-6199](https://redmine.informationgrid.eu/issues/6199))

Profil UPSH

- [Feature] pubDate aus RSS Feeds extrahieren ([REDMINE-6446](https://redmine.informationgrid.eu/issues/6446))
- [Feature] Bezeichnung der Objektklassen im Portal / Editor ([REDMINE-6061](https://redmine.informationgrid.eu/issues/6061))
- [Feature] 3D Darstellung im Umweltportal ([REDMINE-5943](https://redmine.informationgrid.eu/issues/5943))
- [Bug] Editor: geometry context bei Export nicht berücksichtigt ([REDMINE-6162](https://redmine.informationgrid.eu/issues/6162))

Profil UVP

- [Bug] Änderung an Benutzer kann indirekt gespeichert werden obwohl Pflichtangaben fehlen ([REDMINE-6302](https://redmine.informationgrid.eu/issues/6302))
- [Bug] Fehler bei der Indizierung ([REDMINE-6296](https://redmine.informationgrid.eu/issues/6296))
- [Bug] Nachname ändern führt zu Fehlermeldung ([REDMINE-6252](https://redmine.informationgrid.eu/issues/6252))
- [Bug] UVP: Anpassung des Legenden-Handling auf der Karte ([REDMINE-6158](https://redmine.informationgrid.eu/issues/6158))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.2.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.2.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.2.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.2.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.2.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.2.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.2.0/))
- IPLUG-EXCEL ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/7.2.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/7.2.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/7.2.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.2.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.2.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.2.0/))
- IPLUG-XML ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/7.2.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.2.0/))