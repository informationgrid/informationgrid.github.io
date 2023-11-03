---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 6.3.0. Release Notes älterer Versionen können hier eingesehen werden:
[6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 6.3.0

Release 17.10.2023


### Sicherheitsrelevante Änderungen

#### Behebung Server Side Request Forgery (SSRF) Schwachstellen
Serverseitige Weiterleitungen basierend auf Benutzereingaben sind nicht mehr zugelassen. Benutzereingaben werden serverseitig validiert und bei Unstimmigkeiten verworfen.
([REDMINE-5325](https://redmine.informationgrid.eu/issues/5325))

#### Sanitizing von Formularfeldern

Die Eingaben in Formularfeldern werden ausführlich auf korrekte Eingaben überprüft
([REDMINE-5324](https://redmine.informationgrid.eu/issues/5324))

#### Sicherheitsproblem mit SPRING Komponenten

Kritisches Sicherheitsproblem mit SPRING Komponenten wie in CVE-2023-20862 beschrieben ist behoben
([REDMINE-5350](https://redmine.informationgrid.eu/issues/5350))


#### JavaScript Bibliothek

Veraltete jQuery und Leaflet wurden mit aktuellen Versionen ausgetauscht.
([REDMINE-5338](https://redmine.informationgrid.eu/issues/5338))

#### Datenbank: Aktualisierung der Postgres-Bibliothek
Um aktuellere Postgresql Versionen verwenden zu können. wurde die Postgres-Bibliothek auf den aktuellen Stand gehoben
([REDMINE-5553](https://redmine.informationgrid.eu/issues/5553))



### Wichtige Änderungen


#### Umsetzung der Angabe von InVeKoS-Daten im IGE-Classic (HMDK)

GIS-InVeKoS-Daten (InVeKoS = Integriertes Verwaltungs- und Kontrollsystem) sind nun mit INSPIRE Standard kompatibel. Verwendet wurden keywords der entsprechenden codelisten d.h. INSPIRE-registry https://inspire.ec.europa.eu/metadata-codelist .

Im IGE werden nun Neue konfigurierbare Auswahllisten zur Verfügung gestellt. Dazu muss die Checkbox "INSPIRE relevant" aktiv sein, dann wird die Auswahlliste sichtbar
Die neue Auswahlliste enthält die Einträge `Kein InVeKOS Datensatz`, `InVeKoS/IACS (GSAA)`, `InVeKoS/IACS (LPIS)` und wird eingeblendet wenn die Checkbox in den Katalogeinstellungen zu geschaltet ist.
Dabei wurden Anpassungen der ISO 19139 Abbildung an die verschiedenen Anforderungen berücksichtigt
([REDMINE-5549](https://redmine.informationgrid.eu/issues/5549))

![IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze](../images/630_ige-classic_dropdownmenu_invekos.png "IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze"")
<figcaption class="figcaption">IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze</figcaption>

![IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze](../images/630_ige-classic_inspire-relevant_checkbox.png "IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze"")
<figcaption class="figcaption">IGE-Classic: "Wenn INSPIRE-Relevant Auswahlliste für InVeKos Datensätze</figcaption>

#### Erweiterung der Räumlichen Suche (KRZN)


Räumliche Suchen sollen überlappend agieren, und nicht "ganz enthaltend". Die Default-Funktionisweise der Suche-Funktion im Portal unter "Nach Ort suchen" und "Auf Karte festlegen" liefern nur Ergebnisse, deren Raumbezug komplett im Suchbereich enthalten sind. Das hat zur Folge wenn in eine nähere Umgebung reingezoomt wird, u.U. gar keine Ergebnisse erscheinen. Es müssen genaue Informationen vorliegen, z.B. wo das Gemeindegebiet liegt.
Die wurde Bei KRZN so angepasst, dass auch sich überlappende Raumbezüge in der Suche berücksichtigt werden (Siehe Skizze).
([REDMINE-5368](https://redmine.informationgrid.eu/issues/5368))

![Portal: "Das Suchfenster ist dabei gestrichelt schwarz. Es sollen die Objekte in blau (include), gelb (intersect) und grün (inside) gefunden werden, nicht jedoch die roten.](../images/630_portal_search_location_overlapping.png "Portal: Das Suchfenster ist dabei gestrichelt schwarz. Es sollen die Objekte in blau (include), gelb (intersect) und grün (inside) gefunden werden, nicht jedoch die roten."")
<figcaption class="figcaption">Portal: Das Suchfenster ist dabei gestrichelt schwarz. Es sollen die Objekte in blau (include), gelb (intersect) und grün (inside) gefunden werden, nicht jedoch die roten.</figcaption>



### Liste der Änderungen

- [Feature] IGE: Auswahlliste Datenformat ergänzen ([REDMINE-5569](https://redmine.informationgrid.eu/issues/5569))
- [Feature] Aktualisierung der Postgres-Bibliothek ([REDMINE-5553](https://redmine.informationgrid.eu/issues/5553))
- [Feature] Umsetzung der Angabe von InVeKoS-Daten im IGE-Classic ([REDMINE-5549](https://redmine.informationgrid.eu/issues/5549))
- [Feature] Räumliche Suchen sollen überlappend agieren, und nicht "ganz enthaltend" ([REDMINE-5368](https://redmine.informationgrid.eu/issues/5368))
- [Feature] Fix kritisches Sicherheitsproblem mit SPRING Komponenten ([REDMINE-5350](https://redmine.informationgrid.eu/issues/5350))
- [Feature] Behebung Server Side Request Forgery (SSRF) Schwachstellen ([REDMINE-5325](https://redmine.informationgrid.eu/issues/5325))
- [Feature] Sanitizing von Formularfeldern ([REDMINE-5324](https://redmine.informationgrid.eu/issues/5324))
- [Feature] Kontakt "Vertrieb" als "Anbieter" im Portal konfigurieren - entsprechende Facette einrichten ([REDMINE-4488](https://redmine.informationgrid.eu/issues/4488))
- [Bug] Portal: fastclick.js wird wegen Ad Blocker nicht geladen ([REDMINE-5582](https://redmine.informationgrid.eu/issues/5582))
- [Bug] Codelist 8010 erscheint doppelt ([REDMINE-5566](https://redmine.informationgrid.eu/issues/5566))
- [Bug] MAPCLIENT: Job für das Löschen von Karten funktioniert nicht korrekt ([REDMINE-5554](https://redmine.informationgrid.eu/issues/5554))
- [Bug] Mapclient: Für WMS-Dienste von MV werden die Attributinformationen (GetFeatureInfo-Attribute) nicht angezeigt ([REDMINE-5439](https://redmine.informationgrid.eu/issues/5439))
- [Bug] Gemet Analyse schlägt fehl ([REDMINE-5435](https://redmine.informationgrid.eu/issues/5435))
- [Bug] Beschreibung des Datensatzes  ([REDMINE-5430](https://redmine.informationgrid.eu/issues/5430))
- [Bug] Mehrfachauswahl Filterkriterium wird angezeigt ([REDMINE-5399](https://redmine.informationgrid.eu/issues/5399))
- [Bug] Export von externen gekoppelten Daten inkorrekt ins ISO ([REDMINE-5394](https://redmine.informationgrid.eu/issues/5394))
- [Bug] Fehlermeldung zu VelocityViewServlet  ([REDMINE-5387](https://redmine.informationgrid.eu/issues/5387))
- [Bug] Indizierte Felder werden doppelt in die Konfiguration geschrieben ([REDMINE-5381](https://redmine.informationgrid.eu/issues/5381))
- [Bug] Anzeige gelöschter Codelisten im Codelist-Repo ([REDMINE-5354](https://redmine.informationgrid.eu/issues/5354))
- [Bug]  Veraltete JavaScript Bibliotheken austauschen ([REDMINE-5338](https://redmine.informationgrid.eu/issues/5338))
- [Bug] Entfernen von externen Ressourcen im Atom-Feed Client ([REDMINE-5323](https://redmine.informationgrid.eu/issues/5323))
- [Bug] IGE, Portal: Format des WKT und Anzeige des Datensatzes im Portal ([REDMINE-4767](https://redmine.informationgrid.eu/issues/4767))
- [Bug] Portal: Anzeige des Kürzels für den Verweistyp - Ableitung der Kürzel korrigieren, spez. "WMTS" und "WCS" ([REDMINE-4492](https://redmine.informationgrid.eu/issues/4492))
- [Bug] MAPCLIENT: Admin-GUI - Text von Style nicht zu sehen ([REDMINE-1259](https://redmine.informationgrid.eu/issues/1259))

Profil BAW MIS

- [Bug] ISO-XML Ausgabe im Datenfinder und Datenrepository nicht valide ([REDMINE-5177](https://redmine.informationgrid.eu/issues/5177))

Profil BKG

- [Feature] IGE: Anpassung der Liste "Verwaltungsgebiet" ([REDMINE-5477](https://redmine.informationgrid.eu/issues/5477))
- [Feature] Codelist-Repo: Codeliste 10003 und 10004 editieren ([REDMINE-5200](https://redmine.informationgrid.eu/issues/5200))
- [Bug] BKG-MIS: nicht eingerichtete Seiten sperren ([REDMINE-4657](https://redmine.informationgrid.eu/issues/4657))

Profil KRZN

- [Feature] Änderung Hintergrundinformationen (#5428) rückgängig machen ([REDMINE-5492](https://redmine.informationgrid.eu/issues/5492))
- [Feature] Anpassung des Kartenausschnitts unter "Auf Karte festlegen" ([REDMINE-5429](https://redmine.informationgrid.eu/issues/5429))
- [Feature] http://krzn-demo.informationgrid.eu/hintergrundinformationen --> anpassen ([REDMINE-5428](https://redmine.informationgrid.eu/issues/5428))
- [Feature] 404-Text anpassen ([REDMINE-5426](https://redmine.informationgrid.eu/issues/5426))
- [Feature] Statistiken - Menüeintrag/Link deaktiveren (ausblenden) ([REDMINE-5352](https://redmine.informationgrid.eu/issues/5352))
- [Feature] PORTAL: Umsetzung Layout inkl. Profilerstellung ([REDMINE-5146](https://redmine.informationgrid.eu/issues/5146))
- [Bug] Adressen erscheinen noch in Suchergebnissen ([REDMINE-5425](https://redmine.informationgrid.eu/issues/5425))
- [Bug] Font Style der Anzahl vor Ergebnisse ([REDMINE-5424](https://redmine.informationgrid.eu/issues/5424))
- [Bug] Hoverfunktion bei Kategoriekarte Geodatendienst funktioniert nicht richtig ([REDMINE-5423](https://redmine.informationgrid.eu/issues/5423))
- [Bug] „Überschrift“ Geodatenkatalog Niederrhein ([REDMINE-5422](https://redmine.informationgrid.eu/issues/5422))
- [Bug] Kategorie "Open Data" erscheint nicht auf der Startseite ([REDMINE-5421](https://redmine.informationgrid.eu/issues/5421))
- [Bug] Seitentitel im Tab ([REDMINE-5420](https://redmine.informationgrid.eu/issues/5420))

Profil LUBW

- [Feature] Portfolio erweitern: Facette "Fachthemen" ebenfalls in der Spalte "Filterkriterium"  ([REDMINE-5506](https://redmine.informationgrid.eu/issues/5506))
- [Feature] Verschlankung Kartenkomponente ([REDMINE-5440](https://redmine.informationgrid.eu/issues/5440))
- [Feature] Facette für Filterung nach Themenbereichen / Kategorien ([REDMINE-4575](https://redmine.informationgrid.eu/issues/4575))
- [Bug] Daten-Dienste Kopplung  ([REDMINE-5575](https://redmine.informationgrid.eu/issues/5575))

Profil MetaVer

- [Bug] Portal: Verweise und Downloades unterschiedlich ([REDMINE-5581](https://redmine.informationgrid.eu/issues/5581))
- [Bug] Ergebnisse werden in Raumbezugssuche nicht korrekt dargestellt ([REDMINE-5461](https://redmine.informationgrid.eu/issues/5461))

Profil NUMIS

- [Feature] Gendern in der Infobox der Kartendienste ([REDMINE-5363](https://redmine.informationgrid.eu/issues/5363))

Profil UVP

- [Feature] Tooltip für "nur aktuelle" anpassen ([REDMINE-5462](https://redmine.informationgrid.eu/issues/5462))

### Komponenten


- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/6.3.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/6.3.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/6.3.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/6.3.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/6.3.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/6.3.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/6.3.0/))
- IPLUG-EXCEL ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/6.3.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/6.3.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/6.3.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/6.3.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/6.3.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/6.3.0/))
- IPLUG-XML ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/6.3.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/6.3.0/))


