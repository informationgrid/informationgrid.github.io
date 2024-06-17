---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.1.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.0.0](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)

## Version 7.1.3

Release 04.06.2024

### Wichtige Änderungen

#### [InGrid] Hochwertige Datensätze (HVD)

Objekte der Kategorie Geodatensatz können mit der Checkbox HVD als Hochwertiger Datensatz gekennzeichnet werden.
Darüber hinaus kann die Kennzeichung in DCAT-AP.de ausgegegeben werden.


([REDMINE-6076](https://redmine.informationgrid.eu/issues/6076))
([REDMINE-6164](https://redmine.informationgrid.eu/issues/6164))

#### [Profil LfU Bayern] Daten-Dienste Kopplung

Als Teil der Profilumsetzung des Profils LfU Bayern können im Editor zu einem gekoppelten Datensatz mehrere Layer angegeben werden.

([REDMINE-6256](https://redmine.informationgrid.eu/issues/6256))

![InGrid Editor: "Daten-Dienste Kopplungt"](../images/713_ige-ng_object_data-service-connection.png "InGrid Editor: "Daten-Dienste Kopplung"")
<figcaption class="figcaption">InGrid Editor: "Daten-Dienste Kopplung"</figcaption>



InGrid

- [Feature] Kennzeichnung HVD Metadaten - Ausgabe über DCAT-AP ([REDMINE-6164](https://redmine.informationgrid.eu/issues/6164))
- [Feature] IGE: Schlagwort-Auswahlfeld mit HVD-Kategorien (Basis-Funktionalität) ([REDMINE-6076](https://redmine.informationgrid.eu/issues/6076))
- [Feature] Bessere visuelle Unterscheidung Darstellungs- und Downloaddienste für "URL des Zugangs" ([REDMINE-6063](https://redmine.informationgrid.eu/issues/6063))
- [Feature] CSW Schnittstelle, OGC Darstellung: Erweiterung der Angabe der Links zu Diensten mit einer Protokoll Angabe ([REDMINE-5951](https://redmine.informationgrid.eu/issues/5951))
- [Bug] 'Herstellungsprozess' field should show multiple entries in Ingrid Portal  ([REDMINE-6203](https://redmine.informationgrid.eu/issues/6203))

Profil BASt

- [Feature] Anpassungen *internes* Portal ([REDMINE-6293](https://redmine.informationgrid.eu/issues/6293))
- [Bug] Anpassung der Ansicht der Datensammlung ([REDMINE-6147](https://redmine.informationgrid.eu/issues/6147))

Profil LUBW

- [Feature] Neue Stöberkategorie “Open Data” ([REDMINE-6256](https://redmine.informationgrid.eu/issues/6256))

Profil LfU Bayern

- [Feature] Funktion GetCapabilities Aktualisieren für Dienste herausnehmen ([REDMINE-6343](https://redmine.informationgrid.eu/issues/6343))
- [Feature] ISO-Ansicht im Editor ([REDMINE-6342](https://redmine.informationgrid.eu/issues/6342))
- [Feature] Daten-Dienste-Kopplung: neue Komponente für Erfassung der Layer ([REDMINE-6084](https://redmine.informationgrid.eu/issues/6084))

### Komponenten

- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.1.3/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.1.3/))

## Version 7.1.2

Release 16.05.2024

### Liste der Änderungen

InGrid

- [Bug]  The values of the field 'Informationsgegenstand' in a document of type 'Organisationseinheit'  are missing in the HMDK portal   ([REDMINE-6292](https://redmine.informationgrid.eu/issues/6292))
- [Bug] Berechnung der zu exportierenden Datensätze fehlerhaft ([REDMINE-6283](https://redmine.informationgrid.eu/issues/6283))

Profil LfU Bayern

- [Feature] Verschlankung des Formulars im Editor ([REDMINE-6013](https://redmine.informationgrid.eu/issues/6013))
- [Bug] abstract in ISO-Ansicht fehlerhaft ([REDMINE-6277](https://redmine.informationgrid.eu/issues/6277))

Profil UVP

- [Bug] Änderung an Benutzer kann indirekt gespeichert werden obwohl Pflichtangaben fehlen ([REDMINE-6302](https://redmine.informationgrid.eu/issues/6302))


## Version 7.1.1

Release 11.04.2024

### Hinweise für die Aktualisierung

#### IGE-NG

Ab der Version 7.1.1 erhalten die Indizes neue Namen, um die mehrfach-Indizierung desselben Katalogs in einen Elasticsearch Cluster zu unterstützen. Nach der Aktualisierung muss neu indiziert werden und im iBus die alten Indizes deaktiviert bzw. gelöscht und die neuen Indizes aktiviert werden.

Die neuen Indizes haben die Form: `<CATALOG_ID>_<TYPE>_<TARGET_NAME>_<TIMESTAMP>`

Hier ein Beispiel:
```
vorheriger Index: ingridcatalog_data_20240411144526557
     neuer Index: ingridcatalog_data_internesportal_20240411144526557
```

### Liste der Änderungen

InGrid

- [Feature] iBus spezifischer Index beim Export an verschiedene iBusse ([REDMINE-6171](https://redmine.informationgrid.eu/issues/6171))
- [Bug] Löschen aus Index kann zu Fehler führen ([REDMINE-6181](https://redmine.informationgrid.eu/issues/6181))
- [Bug] Vorschaubilder für untergeordnete Objekte der Datensätze erscheinen nicht im Portal... ([REDMINE-6170](https://redmine.informationgrid.eu/issues/6170))
- [Bug] Importfehler ([REDMINE-6116](https://redmine.informationgrid.eu/issues/6116))
- [Bug] "Nach Ort suchen" im Portal funktioniert nicht ([REDMINE-6036](https://redmine.informationgrid.eu/issues/6036))

UPSH

- [Bug] Editor: geometry context bei Export nicht berücksichtigt ([REDMINE-6162](https://redmine.informationgrid.eu/issues/6162))



## Version 7.1.0.2

Release 08.04.2024

### Liste der Änderungen

Profil UVP

- [Bug] Fehler bei der Indizierung ([REDMINE-6296](https://redmine.informationgrid.eu/issues/6296))

## Version 7.1.0.1

Release 03.04.2024

### Liste der Änderungen

Profil UPSH

- [Bug] Editor: geometry context bei Export nicht berücksichtigt ([REDMINE-6162](https://redmine.informationgrid.eu/issues/6162))


## Version 7.1.0

Release 27.03.2024

### Hinweise für die Aktualisierung

#### IGE-NG

Die Konfiguration für die Verbindungen hat sich geändert und muss nach der Aktualisierung neu eingerichtet werden. Dazu folgendes Vorgehen:

* System-Menü öffnen (3-Punkte oben rechts)
* Verbindungen öffnen
* iBus oder Elasticsearch-Verbindung hinzufügen


### Wichtige Änderungen


#### [UVP] Aktivitätsbericht

Die Löschung von Verfahren sowie zurückgezogene Veröffentlichungen können nachvollzogen werden. Im Menüpunkt *Reports* Untermenü *Aktivitätsbericht* werden Verfahren angezeigt die gelöscht oder zurückgezogen wurden. Hierbei kann gefiltert werden nach:

* Daum
* Erstellung
* Aktualisierung
* Veröffentlichung
* Löschung

![InGrid Editor: "Aktivitätsbericht"](../images/710_ige-ng_activity-report.png "InGrid Editor: "Aktivitätsbericht"")
<figcaption class="figcaption">InGrid Editor: "Aktivitätsbericht"</figcaption>

([REDMINE-5676](https://redmine.informationgrid.eu/issues/5676))

#### [UVP] Monitoring

Die Erreichbarkeit von Dokumenten bzw. Verfahren kann in Echtzeit abgefragt werden. Ist eine Abfrage mittels dem Monitoring-Tool Zabbix eingebunden, wird mit Version 7.1.0 im InGrid Editor (IGE-NG) im Menü-Punkt *Reports* Untermenü *Monitoring* angezeigt falls ein Dokument bzw. ein Vorhaben nicht erreichbar ist. Der Menüpunkt ist sichtbar abhänging von den Berechtigungen des jeweiligen Nutzers/der jeweiligen Nutzerin.

![InGrid Editor: "Monitoring nicht erreichbarer Dokumente/Verfahren"](../images/710_ige-ng_monitoring.png "InGrid Editor: "Monitoring nicht erreichbarer Dokumente/Verfahren"")
<figcaption class="figcaption">InGrid Editor: "Monitoring nicht erreichbarer Dokumente/Verfahren"</figcaption>

([REDMINE-5016](https://redmine.informationgrid.eu/issues/5016))
 

#### Favoriten der Codelisten

Für die Bessere Übersichtlichkeit und damit Vereinfachung der Zuweisung von Codelisten können mit Version 7.1.0 Favoriten ausgewählt werden. Die favorisierten Codelisten erscheinen damit oberhalb der übrigen Codelisten, gekennzeichnet als *Favoriten*

![InGrid Editor: "Favoriten der Codelisten"](../images/710_ige-ng_codelists_favorites.png "InGrid Editor: "Favoriten der Codelisten"")
<figcaption class="figcaption">InGrid Editor: "Favoriten der Codelisten"</figcaption>

([REDMINE-5185](https://redmine.informationgrid.eu/issues/5185))

#### Konfiguration der Verbindungen

Verschiedene iBus und Elasticsearch Instanzen können übder den InGrid Editor angebunden werden. In den *Systemeinstellungen* (3-Punkte Menü) unter *Verbindungen* können iBus und Elasticsearch Verbindungen konfiguriert werden. 

![InGrid Editor: "Konfiguration der Verbindungen"](../images/710_ige-ng_connections.png "InGrid Editor: "Konfiguration der Verbindungen"")
<figcaption class="figcaption">InGrid Editor: "Konfiguration der Verbindungen"</figcaption>

![InGrid Editor: "Konfiguration der Verbindungen"](../images/710_ige-ng_connections_ibus_elastic.png "InGrid Editor: "Konfiguration der Verbindungen"")
<figcaption class="figcaption">InGrid Editor: "Konfiguration der Verbindungen"</figcaption>

Außerdem können die angezeigten Felder im Portal/der Detaildarstellung in Abhängigkeit der jeweiligen Verbindung vorgefiltert werden, so dass für die Nutzer*innen eine für Ihren Arbeitsbereich (bspw. Intranet/Extranet) angepasste Ansicht vorfinden.

([REDMINE-4078](https://redmine.informationgrid.eu/issues/4078))

#### [KRZN] Geodatenlink für Geodatensätze

Der Geodatenlink (Geo data URL) wird nun mit angezeigt:

* Portal: Im Portal wird das Feld "Geodatenlink" im Abschnitt "Fachinformationen -> Zusatzinformationen" unterhalb des Feldes *Datenformat* angezeigt.
* InGrid Editor (IGE-NG): Im InGrid Editor wird die Erfassung im Abschnitt *Verfügbarkeit* nach den Feldern für Datenformat und vor Medienoption eingefügt.

![Portal / InGrid Editor: "Geodatenlink für Geodatensätze"](../images/710_portal_detail-view_data-set-uri.png "Portal / InGrid Editor: "Geodatenlink für Geodatensätze"")
<figcaption class="figcaption">Portal / InGrid Editor: "Geodatenlink für Geodatensätze"</figcaption>

([REDMINE-5908](https://redmine.informationgrid.eu/issues/5908))

#### "Von mir" Filter

Für eine vereinfachte Übersicht der eigenen Aktivität können Nutzer*innen schnell nach ihren zuletzt bearbeiteten Verfahren filtern mittels eines Klicks auf die Checkbox "Von mir".

![InGrid Editor: "Von mir Filter"](../images/710_ige-ng_by-me.png "InGrid Editor: "Von mir Filter"")
<figcaption class="figcaption">InGrid Editor: "Von mir Filter"</figcaption>

([REDMINE-4075](https://redmine.informationgrid.eu/issues/4075))

#### Zeitgemäßer Suche-Filter

Das Verhalten der Suche wurde auf aktuelle Erwartungen der Nutzer*innen angepasst. Mit dieser Version werden die eingestellten Filter beim wechseln der Seite nicht mehr wie gewohnt beibehalten, sondern entfernt. Ein aktives entfernen der Filter oder löschen der Cookies ist damit nicht mehr nötig.

([REDMINE-4605](https://redmine.informationgrid.eu/issues/4605))


#### Elastic Search, jetzt noch sicherer!

Für Umgebungen mit erhöhten Sicherheitsanforderungen kann ab sofort zwischen iBus und Elastic Search eine sichere Verbindung hergestellt werden. Ist die Elastic Search Instanz abgesichert kann der iBus so konfiguriert werden, dass er sich authentifizieren kann.

([REDMINE-6103](https://redmine.informationgrid.eu/issues/6103))

### Liste der Änderungen

IGE-NG

- [Feature] Hinzufügen von Servern zum Dropdown-Menü der Serverlist im Swagger-UI ([REDMINE-6046](https://redmine.informationgrid.eu/issues/6046))
- [Feature] IGE-NG: Export aus Nutzer-/Gruppenverwaltung erweitern ([REDMINE-4482](https://redmine.informationgrid.eu/issues/4482))
- [Feature] Filtern nach "Von mir" bei "Zuletzt bearbeitet im Katalog" ([REDMINE-4075](https://redmine.informationgrid.eu/issues/4075))
- [Bug] Fix the style in preview dialog ([REDMINE-6091](https://redmine.informationgrid.eu/issues/6091))
- [Bug] User aus Keycloak werden nicht im IGE-NG angezeigt ([REDMINE-6088](https://redmine.informationgrid.eu/issues/6088))
- [Bug] Tooltip shows 'undefined' when analyzing keywords and adding them to  'INSPIRE-Themen' ([REDMINE-6016](https://redmine.informationgrid.eu/issues/6016))
- [Bug] ' Zurücksetzen ' and ' Hinzufügen' buttons should be disabled in Codelist page when the item comes from Codelist-Repository ([REDMINE-5968](https://redmine.informationgrid.eu/issues/5968))
- [Bug] Endlose Fehlerschleife bei der Änderung der Veröffentlichungsbreite einer Adresse ([REDMINE-5923](https://redmine.informationgrid.eu/issues/5923))
- [Bug] Some bugs related to Codelist  ([REDMINE-5916](https://redmine.informationgrid.eu/issues/5916))
- [Bug] IGE-NG Capabilities Assistent ändert Bundesland ([REDMINE-5874](https://redmine.informationgrid.eu/issues/5874))
- [Bug] Vorschaubilder in Über-/Untgereordneten Objekten aus dem IGE-NG erscheinen nicht im Portal ([REDMINE-5866](https://redmine.informationgrid.eu/issues/5866))
- [Bug] Import mehrerer Dateien nicht möglich - Texte ändern ([REDMINE-5864](https://redmine.informationgrid.eu/issues/5864))
- [Bug] The toolbar buttons should be enabled after deleting datasets using multiple select  ([REDMINE-5820](https://redmine.informationgrid.eu/issues/5820))
- [Bug] Aufruf Ansicht von IBus-Verwaltung wirft Fehler  ([REDMINE-5811](https://redmine.informationgrid.eu/issues/5811))
- [Bug] Searching terms gives error when they contain some special characters  ([REDMINE-5776](https://redmine.informationgrid.eu/issues/5776))
- [Bug] Validierungsfehler liefert absolute Pfade der Schema-Dateien ([REDMINE-5772](https://redmine.informationgrid.eu/issues/5772))
- [Bug] Beim sehr schnellen Wechsel von dem Reiter Katalog -> Konfiguration zum benachbarten Reiter wird ein Fehler angezeigt ([REDMINE-5704](https://redmine.informationgrid.eu/issues/5704))
- [Bug] Englisches Keyword wird nicht automatisch erfasst ([REDMINE-5464](https://redmine.informationgrid.eu/issues/5464))
- [Bug] Super admin should navigate to any catalog directly  ([REDMINE-4642](https://redmine.informationgrid.eu/issues/4642))

InGrid

- [Feature] Unterstützung von Authentifizierung bei Elasticsearch ([REDMINE-6103](https://redmine.informationgrid.eu/issues/6103))
- [Feature] Für Dienste-MD die Angaben zum Zeitbezug im Portal NICHT anzeigen ([REDMINE-6028](https://redmine.informationgrid.eu/issues/6028))
- [Feature] Konfigurierbarkeit der Karte verbessern ([REDMINE-5964](https://redmine.informationgrid.eu/issues/5964))
- [Feature] Umstellung auf Checkboxen in der Facettierung auf der Suchseite, Verhalten der Facettierung bei 0 Treffern ([REDMINE-5963](https://redmine.informationgrid.eu/issues/5963))
- [Feature] Meldung zur Synchronisation des Codelist Repository nicht hilfreich ([REDMINE-5849](https://redmine.informationgrid.eu/issues/5849))
- [Feature] IGE-NG, Bessere Benennung des intern verwendeten Schlüssels für Publikationen ([REDMINE-5828](https://redmine.informationgrid.eu/issues/5828))
- [Feature] Verbesserung der kontextsensitiven Hilfe für das Feld "Klassifikation des Dienstes"  ([REDMINE-5613](https://redmine.informationgrid.eu/issues/5613))
- [Feature] Kontexthilfe für InVeKos-Kennzeichnung ([REDMINE-5524](https://redmine.informationgrid.eu/issues/5524))
- [Feature] Klassifikation des Dienstes - Auswahl erleichtern, Favoriten bei Auswahllisten ([REDMINE-5185](https://redmine.informationgrid.eu/issues/5185))
- [Feature] Docker Prozesse sollen unter unterschiedlichen Nutzer/Gruppe laufen ([REDMINE-4989](https://redmine.informationgrid.eu/issues/4989))
- [Feature] Filter (Einschränkung) bei der Suche bei Seitenwechsel löschen ([REDMINE-4605](https://redmine.informationgrid.eu/issues/4605))
- [Feature] iBus-Auswahl soll katalogspezifisch sein / iBus-spezifischer Export ([REDMINE-4078](https://redmine.informationgrid.eu/issues/4078))
- [Support] Keycloak: Wozu dienen die Rollen? ([REDMINE-5860](https://redmine.informationgrid.eu/issues/5860))
- [Bug] Styles werden nicht automatisch hinzugefügt bei Hintergrundkartenbild ([REDMINE-6138](https://redmine.informationgrid.eu/issues/6138))
- [Bug] Keycloak erlaubt keine Leerzeichen im Loginnamen ([REDMINE-6130](https://redmine.informationgrid.eu/issues/6130))
- [Bug] In der Registrierungsmail soll der Link zur Anmeldung hinterlegt werden. ([REDMINE-6095](https://redmine.informationgrid.eu/issues/6095))
- [Bug] Anführungszeichen escapen bei "Quelle" ([REDMINE-6071](https://redmine.informationgrid.eu/issues/6071))
- [Bug] Feldzuordnung bei Adressen korrigieren ([REDMINE-6067](https://redmine.informationgrid.eu/issues/6067))
- [Bug] Aktualisierung sicherheitskritischer Libraries ([REDMINE-6018](https://redmine.informationgrid.eu/issues/6018))
- [Bug] Verweistypen sollen wenn nicht aus der ISO Liste kommend, als Type "information" abgegeben werden. ([REDMINE-6017](https://redmine.informationgrid.eu/issues/6017))
- [Bug] Löschung Account, Login in Bestätigungs-E-Mail fehlt ([REDMINE-5997](https://redmine.informationgrid.eu/issues/5997))
- [Bug] Leere Eingabe in Feld 'url' in der iBus Verwaltung Seite ([REDMINE-5990](https://redmine.informationgrid.eu/issues/5990))
- [Bug] Verantwortlicher beim Report "Abgelaufene Metadaten" verbessern ([REDMINE-5986](https://redmine.informationgrid.eu/issues/5986))
- [Bug] Reihenfolge der Organisationen bei Anzeige der Adressen umdrehen ([REDMINE-5981](https://redmine.informationgrid.eu/issues/5981))
- [Bug] Fehler in Historie wenn Datensatz noch nicht gespeichert wurde ([REDMINE-5980](https://redmine.informationgrid.eu/issues/5980))
- [Bug] Sprung vom Geodatensatz zum gekoppelten Dienst - Abfrage bei ungespeicherten Änderungen hinzufügen ([REDMINE-5979](https://redmine.informationgrid.eu/issues/5979))
- [Bug] Fehlermeldung nach Hinzufügen einer Adresse und Speichern erst bei Sprung zu Adressbereich ([REDMINE-5974](https://redmine.informationgrid.eu/issues/5974))
- [Bug] CSW Schnittstelle, OGC Darstellung: Dokumentation des HTTP GET Zugriffs in der InGrid Dokumentation ([REDMINE-5952](https://redmine.informationgrid.eu/issues/5952))
- [Bug] Lucene Index erweitern ([REDMINE-5932](https://redmine.informationgrid.eu/issues/5932))
- [Bug] Beim Export von erweiterten InGrid-Profilen werden nicht alle Export-Typen angezeigt ([REDMINE-5907](https://redmine.informationgrid.eu/issues/5907))
- [Bug] Konflikt beim Export wenn mehrere Profile aktiv sind ([REDMINE-5906](https://redmine.informationgrid.eu/issues/5906))
- [Bug] MAPCLIENT: Fehler bei GFI auf PEGELONLINE WMS, GetMap braucht boolean TRANSPARENT Param ([REDMINE-5905](https://redmine.informationgrid.eu/issues/5905))
- [Bug] Katalog-Administrator ohne Kataloge führt zu vielen Fehlern ([REDMINE-5889](https://redmine.informationgrid.eu/issues/5889))
- [Bug] Fehlermeldung bei Import von json bei "draft" ([REDMINE-5858](https://redmine.informationgrid.eu/issues/5858))
- [Bug] Fehlermeldung bei Vorschau ([REDMINE-5852](https://redmine.informationgrid.eu/issues/5852))
- [Bug] Prüfung der CSW-Schnittstelle mit OGC-Schema ([REDMINE-5836](https://redmine.informationgrid.eu/issues/5836))
- [Bug] "Version des Dienstes" wird über die Importfunktion nicht importiert ([REDMINE-5831](https://redmine.informationgrid.eu/issues/5831))
- [Bug] gmd:MD_Distributor Element: CI_ResponsibeParty wird nicht mehr in XML exportiert, aber die Rolle ([REDMINE-5818](https://redmine.informationgrid.eu/issues/5818))
- [Bug] Fehler "Es dürfen keine leeren Zeilen vorkommen" bei "Datenformat" ([REDMINE-5109](https://redmine.informationgrid.eu/issues/5109))

Profil BASt

- [Feature] Überarbeitung Portal-Layout / Teil 2 ([REDMINE-6112](https://redmine.informationgrid.eu/issues/6112))
- [Feature] Überarbeitung Portal-Layout / Teil 1 ([REDMINE-6111](https://redmine.informationgrid.eu/issues/6111))
- [Feature] Anpassungen Editor ([REDMINE-6077](https://redmine.informationgrid.eu/issues/6077))
- [Feature] IGE-NG, Exporter für internes/externes Portal ([REDMINE-6002](https://redmine.informationgrid.eu/issues/6002))
- [Feature] IGE-NG, BASt-Profil umsetzen ([REDMINE-5775](https://redmine.informationgrid.eu/issues/5775))
- [Feature] Konzeption BASt-spezifisches Layout ([REDMINE-5768](https://redmine.informationgrid.eu/issues/5768))

Profil BKG

- [Feature] AdV-MIS: Korrektur der Facette "Verwaltet von" ([REDMINE-5692](https://redmine.informationgrid.eu/issues/5692))
- [Feature] IGE: BKG-MIS - Feld "Zugriffsbeschränkungen" wieder herstellen ([REDMINE-5481](https://redmine.informationgrid.eu/issues/5481))
- [Bug] Portal: Rubrik Nutzung - Textausgabe - unterschiedlichen Zeilenabstand angleichen ([REDMINE-5998](https://redmine.informationgrid.eu/issues/5998))

Profil  HMDK

- [Bug] "Open Data Kategorien", zwei Korrekturen ([REDMINE-6115](https://redmine.informationgrid.eu/issues/6115))
- [Bug] Migration InVeKos-MD ([REDMINE-6109](https://redmine.informationgrid.eu/issues/6109))
- [Bug] HMDK-Classic: Fehler in der Portal Detaildarstellung ([REDMINE-5992](https://redmine.informationgrid.eu/issues/5992))

Profil KRZN

- [Feature] IGE-NG Hintergrunddaten sollen unseren OSM Server verwenden ([REDMINE-5912](https://redmine.informationgrid.eu/issues/5912))
- [Feature] Einrichtung des Feldes dataSetURI / Geodatenlink für Geodatensätze ([REDMINE-5908](https://redmine.informationgrid.eu/issues/5908))
- [Feature] Pflichtfeld "Alternativer Kartenclient" ([REDMINE-5885](https://redmine.informationgrid.eu/issues/5885))
- [Feature] Defaultwert "Alternativer Kartenclient" wird nicht übernommen ([REDMINE-5884](https://redmine.informationgrid.eu/issues/5884))
- [Bug] Anzeige der Längen- / Breitengrade  korrigieren ([REDMINE-5897](https://redmine.informationgrid.eu/issues/5897))

Profil LUBW

- [Bug] Korrekte Wiedergabe der WMS und WFS URLs im CSV-Export ([REDMINE-6074](https://redmine.informationgrid.eu/issues/6074))

Profil LÜN

- [Feature] Verbesserung der Werteanzeige beim Roll Over  ([REDMINE-5957](https://redmine.informationgrid.eu/issues/5957))
- [Support] Deployment der MVIS Applikation ([REDMINE-6014](https://redmine.informationgrid.eu/issues/6014))
- [Bug] Darstellung von NULL Werten im CSV Download ([REDMINE-5960](https://redmine.informationgrid.eu/issues/5960))
- [Bug] Absturz der MVIS App bei bestimmten Parametern ([REDMINE-5959](https://redmine.informationgrid.eu/issues/5959))

Profil MetaVer

- [Feature] Verringerung von Exceptions im LOG des Portals ([REDMINE-6125](https://redmine.informationgrid.eu/issues/6125))
- [Bug] IGE-NG - Kommunaler Metadatenkatalog Sachsen-Anhalt - getCapabilitie Assistent kann Geodatendienste der Stadt Halle (Saale) nicht analysieren ([REDMINE-5620](https://redmine.informationgrid.eu/issues/5620))

Profil NUMIS

- [Feature] CSV-Export und Tests ([REDMINE-5961](https://redmine.informationgrid.eu/issues/5961))
- [Feature] Menüeintrag "Metadaten" im Portal entfernen ([REDMINE-5931](https://redmine.informationgrid.eu/issues/5931))
- [Support] Probleme mit Kategorieerstellung und Dienstzuweisung im InGrid Webmap Client Admin-GUI der NUMIS-Testumgebung ([REDMINE-6004](https://redmine.informationgrid.eu/issues/6004))
- [Bug] "Stationen" der Messnetze im NUMIS-Messdatenviewer werden nicht angezeigt ([REDMINE-5926](https://redmine.informationgrid.eu/issues/5926))

Profil UPSH

- [Feature] Menü anpassen ([REDMINE-5857](https://redmine.informationgrid.eu/issues/5857))
- [Bug] "Datenformat" für Verweise wurde nicht migriert ([REDMINE-5853](https://redmine.informationgrid.eu/issues/5853))

Profil UVP

- [Feature] Erweiterung Report über "Veröffentlichung zurückziehen" ([REDMINE-6042](https://redmine.informationgrid.eu/issues/6042))
- [Feature] Integration eines vereinfachten, katalogspezifischen Reports über die Ereichbarkeit der Dokumente - Sichtbarkeit erweitern ([REDMINE-5798](https://redmine.informationgrid.eu/issues/5798))
- [Feature] Report Änderungen von Verfahren / neg. Vorprüfungen (insbesondere Löschung) ([REDMINE-5676](https://redmine.informationgrid.eu/issues/5676))
- [Feature] IGE-NG: Integration eines vereinfachten, katalogspezifischen Reports über die Erreichbarkeit der Dokumente ([REDMINE-5016](https://redmine.informationgrid.eu/issues/5016))
- [Bug] Auffälligkeit bei Datensatz, Country wurde zum Teil nicht richtig migriert ([REDMINE-6098](https://redmine.informationgrid.eu/issues/6098))
- [Bug] Auffälligkeit bei Datensatz, Salutation wurde zum Teil nicht richtig migriert ([REDMINE-6097](https://redmine.informationgrid.eu/issues/6097))
- [Bug] Kontexthilfe nicht eingebunden im Adressbereich ([REDMINE-5942](https://redmine.informationgrid.eu/issues/5942))
- [Bug] PORTAL: Fehler bei der Darstellung der Treffer-Beschreibung ([REDMINE-5900](https://redmine.informationgrid.eu/issues/5900))
- [Bug] IGE-NG: Verbesserung Datumsbehandlung bei verzögertem Veröffentlichen ([REDMINE-5770](https://redmine.informationgrid.eu/issues/5770))
- [Bug] Dateien werden nicht immer beim Veröffentlichen verschoben ([REDMINE-4736](https://redmine.informationgrid.eu/issues/4736))
- [Bug] IGE-NG: Vorprüfungen negativ - Ergebnis der Vorprüfung - Hilfetext ([REDMINE-3366](https://redmine.informationgrid.eu/issues/3366))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.1.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.1.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.1.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.1.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.1.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.1.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.1.0/))
- IPLUG-EXCEL ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/7.1.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/7.1.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.1.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.1.0/))
- IPLUG-XML ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/7.1.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.1.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/7.1.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.1.0/))