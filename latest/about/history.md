---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.4.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.3.x](/7.3.0/about/history.html), [7.2.x](/7.2.0/about/history.html), [7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.4.1

### Liste der Änderungen

InGrid Editor

- [Bug] Validierungsfehler über die OGC API (POST & PUT Methode) ([REDMINE-7224](https://redmine.informationgrid.eu/issues/7224))

Profil HMDK

- [Bug] Anzeige "HVD" wird nicht an "Offene Lizenz" angepasst,  ([REDMINE-7217](https://redmine.informationgrid.eu/issues/7217))

Profil LUBW

- [Bug] Automatische Indizierung im IGE-NG funktioniert nicht ([REDMINE-7201](https://redmine.informationgrid.eu/issues/7201))

Profil MetaVer

- [Bug] Die Sortierung der Vorschaugrafiken funktioniert nicht ([REDMINE-7193](https://redmine.informationgrid.eu/issues/7193))

Profil UVP

- [Bug] UVP-Verfahren - Portal - Darstellungsfehler in der Adresse ([REDMINE-6021](https://redmine.informationgrid.eu/issues/6021))


## Version 7.4.0

Release 10.01.2025

### Hinweise für die Aktualisierung

#### Keycloak

Mit der Aktualisierung von Keycloak auf die Version 26.0.5 ändert sich auch die Konfiguration. Hierzu ergeben sich die folgenden Änderungen in der `docker-compose.yml`:

* `KEYCLOAK_ADMIN` umbenennen zu `KC_BOOTSTRAP_ADMIN_USERNAME`
* `KEYCLOAK_ADMIN_PASSWORD` umbenennen zu `KC_BOOTSTRAP_ADMIN_PASSWORD`
* `KC_HOSTNAME` bekommt den Wert von `KC_HOSTNAME_URL`
* `KC_HOSTNAME_URL` und `KC_HOSTNAME_STRICT_HTTPS` entfernen
* `KC_PROXY` wird ersetzt durch die beiden Variablen `KC_PROXY_HEADERS` und `KC_HTTP_ENABLED`

Die Konfiguration sollte dann folgendermaßen aussehen:

```
  - KC_BOOTSTRAP_ADMIN_USERNAME=admin
  - KC_BOOTSTRAP_ADMIN_PASSWORD=<password>
  - KC_HTTP_RELATIVE_PATH=/keycloak
  - KC_HOSTNAME=https://<domain>/keycloak
  - KC_HTTP_ENABLED=true
  - KC_PROXY_HEADERS=xforwarded
```

### Wichtige Änderungen

#### [InGrid] Umgestaltung "Merkmale"-Bereich

Die Ansicht der Merkmale eines Datensatzes wurde überarbeitet. Anstatt Checkboxen können nun mittels Buttons die gewünschten Merkmale markiert werden. Wenn gewünscht werden nur markierte Merkmale angezeigt.

![InGrid Editor: "Merkmale: Auswahl"](../images/740_ige-ng_object_attributes_1.png "InGrid Editor: "Merkmale: Auswahl"")
<figcaption class="figcaption">InGrid Editor: "Merkmale: Auswahl"</figcaption>

![InGrid Editor: "Merkmale: Beschränkte Auswahl"](../images/740_ige-ng_object_attributes_2.png "InGrid Editor: "Merkmale: Beschränkte Auswahl"")
<figcaption class="figcaption">InGrid Editor: "Merkmale: Beschränkte Auswahl"</figcaption>

([REDMINE-6823](https://redmine.informationgrid.eu/issues/6823))

#### [InGrid] Herkunft der Daten detaillierter erfassen

Einem Objekt können nun komplexere Beschreibungen bezüglich der Datengrundlage bzw. der Herkunft hinzugefügt werden. Im Abschnitt "Fachbezug" kann unter "Datengrundlage/Herkunft" zwischen "Geodatensatz" und "Freie Beschreibung" gewählt werden.

![InGrid Editor: "Herkunft der Daten: Auswahl"](../images/740_ige-ng_daten-grundlage_1.png "InGrid Editor: "Herkunft der Daten Auswahl"")
<figcaption class="figcaption">InGrid Editor: "Herkunft der Daten Auswahl"</figcaption>

![InGrid Editor: "Herkunft der Daten: Freie Beschreibung"](../images/740_ige-ng_daten-grundlage_2.png "Herkunft der Daten: "Freie Beschreibung"")
<figcaption class="figcaption">Herkunft der Daten: "Freie Beschreibung"</figcaption>

([REDMINE-2601](https://redmine.informationgrid.eu/issues/2601))

#### [InGrid] CSV Export

Der CSV Export wurde um Felder für die Ausgabe erweitert. Über die SQL Suche können neben der Standardspalten zusätliche Spalten erzeugt und mit Daten für den CSV Export befüllt werden.

![InGrid Editor: "CSV Export, SQL-Abfrage"](../images/740_ige-ng_sql-csv_1.png "InGrid Editor: "CSV Export, SQL-Abfrage"")
<figcaption class="figcaption">InGrid Editor: "CSV Export, SQL-Abfrage"</figcaption>

![InGrid Editor: "CSV Export"](../images/740_ige-ng_sql-csv_2.png "InGrid Editor: "CSV Export"")
<figcaption class="figcaption">InGrid Editor: "CSV Export"</figcaption>

([REDMINE-5830](https://redmine.informationgrid.eu/issues/5830))

#### [InGrid] Schlagwort Konsolidierung

Schlagworte können mit der Funktion "Schlagworte Konsolidieren" überprüft werden. Schlagworte die frei verwendet werden, aber in ähnlicherweise vorhanden sind (GEMET, UMTHES und weitere) können auf diese Weise einfacher wiederverwendet werden.

![InGrid Editor: "Schlagwort Konsolidierung: Auswahl"](../images/740_ige-ng_schlagworte-konsolidierung_1.png "InGrid Editor: "Schlagwort Konsolidierung: Auswahl"")
<figcaption class="figcaption">InGrid Editor: "Schlagwort Konsolidierung: Auswahl"</figcaption>

![InGrid Editor: "Schlagwort Konsolidierung: Übersicht"](../images/740_ige-ng_schlagworte-konsolidierung_2.png "InGrid Editor: "Schlagwort Konsolidierung: Übersicht"")
<figcaption class="figcaption">InGrid Editor: "Schlagwort Konsolidierung: Übersicht"</figcaption>

([REDMINE-5376](https://redmine.informationgrid.eu/issues/5376))


#### [Profil LUBW] Verlinkung auf "Leichte Sprache" und "Gebärdensprache"

Die für die Barrierefreiheit zur Verfügung gestellten Informationen können nun über entsprechende Icons für "Leichte Sprache" und "Gebärdensprache" abgerufen werden

![Portal: "Barrierefreiheit"](../images/740_portal_accessiblity_icons.png "Portal: "Barrierefreiheit"")
<figcaption class="figcaption">Portal: "Barrierefreiheit"</figcaption>

([REDMINE-6549](https://redmine.informationgrid.eu/issues/6549))

#### [Profil BASt] "Kopieren"-Button

Der unter "Speicherort" genannte Pfad im Bereich "Fachinformationen" kann recht lang werden. Um das Handling zu erleichtern kann nun einfach mit klicken auf den Kopier-Button der Pfad kopiert werden.

![Portal: "Kopier-Button bei Fachinformationen"](../images/740_portal_detail-view_copy-path-button.png "Portal: "Kopier-Button bei Fachinformationen"")
<figcaption class="figcaption">Portal: "Kopier-Button bei Fachinformationen"</figcaption>

([REDMINE-6642](https://redmine.informationgrid.eu/issues/6642))

#### [InGrid] Zusätzlichen Eintrag setzen

Wenn das Merkmal "Open Data" gewählt wurde, dann wurden alle Zugriffsbeschränkungen entfernt. Das ist nicht immer Korrekt. Der Eintrag "Es gelten keine Zugriffsbeschränkungen" wird bei Anlegen eines neuen Metadatensatzes automatisch gesetzt.

([REDMINE-6403](https://redmine.informationgrid.eu/issues/6403))

#### [InGrid] Schlagwort-Suche im Portal

Die Suche im Portal berücksichtigt nun auch Schlagworte von ISO-Themen­kategorien.

([REDMINE-6471](https://redmine.informationgrid.eu/issues/6471))

### Liste der Änderungen

InGrid

- [Feature] Laden von Styles nicht CSP-konform ([REDMINE-7153](https://redmine.informationgrid.eu/issues/7153))
- [Feature] Vermeidung von eval-Ausdrücken ([REDMINE-7148](https://redmine.informationgrid.eu/issues/7148))
- [Feature] Bearbeiten von Suchanfragen ([REDMINE-7105](https://redmine.informationgrid.eu/issues/7105))
- [Feature] Icons für die "Karten"- und "INSPIRE"-Kategorie auf Portal-Startseite austauschen ([REDMINE-7079](https://redmine.informationgrid.eu/issues/7079))
- [Feature] Katalog-interne Codelisten, UX verbessern ([REDMINE-7027](https://redmine.informationgrid.eu/issues/7027))
- [Feature] Twittersymbol bei "Teilen" im Portal aktualisieren ([REDMINE-6929](https://redmine.informationgrid.eu/issues/6929))
- [Feature] MAPCLIENT: Einstellung der Maßstabs-Begrenzung ([REDMINE-6909](https://redmine.informationgrid.eu/issues/6909))
- [Feature] Umgestaltung "Merkmale"-Bereich ([REDMINE-6823](https://redmine.informationgrid.eu/issues/6823))
- [Feature] Portal: Verlinkung Koordinatensystem - epsg.io durch www.spatialreference.org ersetzen ([REDMINE-6794](https://redmine.informationgrid.eu/issues/6794))
- [Feature] Formatierung der Beschreibungstexte ([REDMINE-6784](https://redmine.informationgrid.eu/issues/6784))
- [Feature] Bessere Library für die Validierung eines JSON-Schemas ([REDMINE-6664](https://redmine.informationgrid.eu/issues/6664))
- [Feature] "Kopieren"-Button an bestimmter Stelle im Portal anfügen ([REDMINE-6642](https://redmine.informationgrid.eu/issues/6642))
- [Feature] HVD Kategorien als Codeliste aufnehmen ([REDMINE-6494](https://redmine.informationgrid.eu/issues/6494))
- [Feature] Suche nach den Schlagworten von ISO-Themen­kategorien im Portal ermöglichen ([REDMINE-6471](https://redmine.informationgrid.eu/issues/6471))
- [Feature] Ergänzung von Email Adressen durch "mailto:" im DCAT-AP.DE Export ergänzt ([REDMINE-6425](https://redmine.informationgrid.eu/issues/6425))
- [Feature] OpenData / HVD - Eintrag "Es gelten keine Zugriffsbeschränkungen" setzen ([REDMINE-6403](https://redmine.informationgrid.eu/issues/6403))
- [Feature] distributorContact nur einmal ins ISO schreiben ([REDMINE-6378](https://redmine.informationgrid.eu/issues/6378))
- [Feature] OGC API - Verschieben von Ressourcen über PUT Methode ([REDMINE-6361](https://redmine.informationgrid.eu/issues/6361))
- [Feature] CSW Schnittstelle, OGC Darstellung: Erweiterung der Datensatzangabe um die Diensteprotokolle ([REDMINE-6325](https://redmine.informationgrid.eu/issues/6325))
- [Feature] Ersetzen der State Management Bibliothek "Akita" ([REDMINE-6290](https://redmine.informationgrid.eu/issues/6290))
- [Feature] Prüfung der Kompatibilität der Abgabe von DCAT-AP.DE Datensätzen mit der Version 2.0 ([REDMINE-6144](https://redmine.informationgrid.eu/issues/6144))
- [Feature] Anlegen eines Dienstes mit dem GetCapabilitie Assistent - URL Prüfung ([REDMINE-6086](https://redmine.informationgrid.eu/issues/6086))
- [Feature] Verhalten für Feld "Art des Dienstes" ändern ([REDMINE-5833](https://redmine.informationgrid.eu/issues/5833))
- [Feature] Der CSV Export der Suchergebnisse der SQL Suche soll weitere Datenfelder ausgeben können. ([REDMINE-5830](https://redmine.informationgrid.eu/issues/5830))
- [Feature] Verweise: Objekt auswählen über Themenbaum, wie im IGE Classic ([REDMINE-5751](https://redmine.informationgrid.eu/issues/5751))
- [Feature] Konsolidierung von Schlagworten im Metadatensatz ([REDMINE-5376](https://redmine.informationgrid.eu/issues/5376))
- [Feature] Editor: Herkunft der Daten detaillierter erfassen ([REDMINE-2601](https://redmine.informationgrid.eu/issues/2601))
- [Bug] Fehler JSON-Schema-Validierung bei Datenbank ([REDMINE-7185](https://redmine.informationgrid.eu/issues/7185))
- [Bug] Falsches Datum bei Index-Detail Darstellung IBus ([REDMINE-7150](https://redmine.informationgrid.eu/issues/7150))
- [Bug] DCAT-AP.de: dcat:Distribution fehlt ([REDMINE-7123](https://redmine.informationgrid.eu/issues/7123))
- [Bug] Postfach kann nicht gelöscht werden ([REDMINE-7104](https://redmine.informationgrid.eu/issues/7104))
- [Bug] DCAT-AP.DE Schnittstelle gibt ggf. ungültige URLs zurück ([REDMINE-7067](https://redmine.informationgrid.eu/issues/7067))
- [Bug] Validierungsfehler beim Veröffentlichen ([REDMINE-7022](https://redmine.informationgrid.eu/issues/7022))
- [Bug] Fehler beim Bearbeiten von gekoppelten Datensätzen ([REDMINE-7021](https://redmine.informationgrid.eu/issues/7021))
- [Bug] IGE-NG: extern gekoppelte Daten unter Querverweise ([REDMINE-6974](https://redmine.informationgrid.eu/issues/6974))
- [Bug] CSW Interface - Validierungsfehler, ISO XML nicht schema konform (gmd:MD_GridSpatialRepresentation) ([REDMINE-6967](https://redmine.informationgrid.eu/issues/6967))
- [Bug] Zu viele Schlagwörter ([REDMINE-6965](https://redmine.informationgrid.eu/issues/6965))
- [Bug] Defaultwerte aus Codelist-Repo werden in neuen MD nicht gesetzt ([REDMINE-6935](https://redmine.informationgrid.eu/issues/6935))
- [Bug] Facettierung fehlerhaft ([REDMINE-6925](https://redmine.informationgrid.eu/issues/6925))
- [Bug] Sehr viele Warnungen im iBus ([REDMINE-6924](https://redmine.informationgrid.eu/issues/6924))
- [Bug] Schemavalidierung bei Testsuite GDI-DE schlägt fehl ([REDMINE-6922](https://redmine.informationgrid.eu/issues/6922))
- [Bug] Fehler im Verweise-Dialog, wenn Favoriten für "Typ" gesetzt sind ([REDMINE-6913](https://redmine.informationgrid.eu/issues/6913))
- [Bug] Weiterleitung zu "undefined" Katalog nach Login bei leerer Datenbank ([REDMINE-6902](https://redmine.informationgrid.eu/issues/6902))
- [Bug] Adressreferenzen werden als gelöscht angezeigt ([REDMINE-6901](https://redmine.informationgrid.eu/issues/6901))
- [Bug] Geodatensatz nicht schemakonform aufgrund von Polygon_ID, Fehlermeldung bei Harvesting ([REDMINE-6896](https://redmine.informationgrid.eu/issues/6896))
- [Bug] JSON-Schema Fehler in einigen Profilen für neues Feld "Dateien" ([REDMINE-6885](https://redmine.informationgrid.eu/issues/6885))
- [Bug] Unstimmigkeiten bei der Schlagwort-Konsolidierung ([REDMINE-6877](https://redmine.informationgrid.eu/issues/6877))
- [Bug] Portal: Wandlung URL in Hyperlink in Fließtext - Abbruch an Umlaut "ä"  ([REDMINE-6833](https://redmine.informationgrid.eu/issues/6833))
- [Bug] CSW liefert bei räumlicher Suche falsche Ergebnisse (in Dev) ([REDMINE-6819](https://redmine.informationgrid.eu/issues/6819))
- [Bug] Fehler bei Codelist-Synchronisation ([REDMINE-6512](https://redmine.informationgrid.eu/issues/6512))
- [Bug] Text-Korrekturen im Editor ([REDMINE-6353](https://redmine.informationgrid.eu/issues/6353))
- [Bug] Verhalten Spezifikation von Inspire konformen Datensätze  ([REDMINE-5441](https://redmine.informationgrid.eu/issues/5441))
- [Bug] Upload von ZIP-Datei verschwindet ([REDMINE-4436](https://redmine.informationgrid.eu/issues/4436))

InGrid Editor

- [Bug] Symbolkatalog default wird nicht angezeigt ([REDMINE-7177](https://redmine.informationgrid.eu/issues/7177))
- [Bug] Button in der Vergleichsansicht  ([REDMINE-7122](https://redmine.informationgrid.eu/issues/7122))
- [Bug] Es fehlen Addressen beim importieren ([REDMINE-7118](https://redmine.informationgrid.eu/issues/7118))

Profil BASt

- [Feature] Hilfe-Texte im Portal ([REDMINE-7096](https://redmine.informationgrid.eu/issues/7096))
- [Feature] Unterschiedliche Farbgebungen im internen und externen Portal ([REDMINE-6860](https://redmine.informationgrid.eu/issues/6860))
- [Bug] Verlinkungen, Layout auf "Fehler 404"-Seite korrigieren; deaktiviere Kontakt im internen Portal ([REDMINE-7100](https://redmine.informationgrid.eu/issues/7100))
- [Bug] Anpassung der Facetten greift nicht mehr? ([REDMINE-6887](https://redmine.informationgrid.eu/issues/6887))

Profil BKG

- [Feature] IGE: separater Katalog für MD-Sprache Englisch ([REDMINE-6951](https://redmine.informationgrid.eu/issues/6951))
- [Feature] User-Flexibilisierung für Harvester-Komponente umsetzen ([REDMINE-6850](https://redmine.informationgrid.eu/issues/6850))
- [Bug] AdV-MIS: Dopplung der HVD-Kategorie in Detailbeschreibung ([REDMINE-6988](https://redmine.informationgrid.eu/issues/6988))
- [Bug] AdV-MIS: Filterung "Sonstige Dienste" funktioniert nicht erwartungsgemäß ([REDMINE-6892](https://redmine.informationgrid.eu/issues/6892))

Profil HMDK

- [Bug] HMDK: Gruppenordner sollen Rechte weiter vererben ([REDMINE-6856](https://redmine.informationgrid.eu/issues/6856))

Profil KRZN

- [Feature] Portal: Umbenennung von "Auf Karte festlegen" zu "In Kartenausschnitt suchen" ([REDMINE-7065](https://redmine.informationgrid.eu/issues/7065))
- [Feature] Nutzungsbedingungen als Pflichtfeld bei Applikationen ([REDMINE-7047](https://redmine.informationgrid.eu/issues/7047))
- [Feature] Datensatzverweis in CSW ([REDMINE-7026](https://redmine.informationgrid.eu/issues/7026))
- [Feature] Suchfunktion "Nach Ort Suchen" deaktivieren ([REDMINE-6991](https://redmine.informationgrid.eu/issues/6991))
- [Feature] Portal: Bei Geodatendiensten das Label "Informationen zum Datensatz" nach "Informationen zum Dienst" umbenennen ([REDMINE-6820](https://redmine.informationgrid.eu/issues/6820))
- [Feature] IGE-NG Feld "Alternativer Karten Client" zu "Kartenclient" umbenennen ([REDMINE-6813](https://redmine.informationgrid.eu/issues/6813))
- [Feature] Sortierung der Codeliste zum "Alternative Karten-Clients (10500)" ([REDMINE-5991](https://redmine.informationgrid.eu/issues/5991))

Profil LUBW

- [Feature] Einfügen zweier Logos in die Kopfzeile der RIPS-Metadaten sowie der verlinkten Seiten ([REDMINE-6549](https://redmine.informationgrid.eu/issues/6549))
- [Bug] Fehlermeldung im IGE-NG "Cannot read properties of undefined (reading '_componentRefs')" ([REDMINE-7032](https://redmine.informationgrid.eu/issues/7032))
- [Bug] 138 Datensätze sind nicht schemavalide ([REDMINE-6996](https://redmine.informationgrid.eu/issues/6996))
- [Bug] OAC-Suche funktioniert nicht mehr ([REDMINE-6977](https://redmine.informationgrid.eu/issues/6977))
- [Bug] PORTAL: CSV-Download funktioniert nicht mehr ([REDMINE-6961](https://redmine.informationgrid.eu/issues/6961))
- [Bug] Laden der Portalseite dauert vglw. lang ([REDMINE-6869](https://redmine.informationgrid.eu/issues/6869))

Profil LfU Bayern

- [Bug] Fehler bei Auswahl mehrerer Datensätze zum Export ([REDMINE-7024](https://redmine.informationgrid.eu/issues/7024))

Profil MetaVer

- [Feature] Codeliste „INSPIRE - priority data set“ - Erklärung wg. ausgegrauter Einträge im Hilfetext hinzufügen ([REDMINE-7050](https://redmine.informationgrid.eu/issues/7050))
- [Bug] Sortierung ohne Suchbegriff bevorteilt die Ergebnisse aus Hamburg ([REDMINE-6888](https://redmine.informationgrid.eu/issues/6888))

Profil UVP

- [Feature] Erweiterung Liste der UVPG-Nummern ([REDMINE-7187](https://redmine.informationgrid.eu/issues/7187))
- [Feature] Portal: Filterung nach Aktualität, Ergebnisliste verändern ([REDMINE-6793](https://redmine.informationgrid.eu/issues/6793))
- [Feature] UVP-Portal - Suche nach älteren Vorhaben verbessern ([REDMINE-6362](https://redmine.informationgrid.eu/issues/6362))
- [Feature] Monitoring der Verfahrensdokumente: Benachrichtigung der verfahrensführenden Behörden ([REDMINE-5693](https://redmine.informationgrid.eu/issues/5693))
- [Feature] IGE-NG: Einschränkung der Orts-Suche prüfen und ggf. anpassen ([REDMINE-793](https://redmine.informationgrid.eu/issues/793))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.4.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.4.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.4.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.4.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.4.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.4.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.4.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/7.4.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.4.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.4.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.4.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.4.0/))


