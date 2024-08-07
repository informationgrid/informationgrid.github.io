---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.3.x. Release Notes ältere Versionen können hier eingesehen werden:  [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.3.12

Release 29.09.2020

- [Add] [IGE] Höhere Kompatibilität bei der Verarbeitung von Referenzsystemangaben in OGC Capabilities  ([REDMINE-2108](https://redmine.informationgrid.eu/issues/2108))
- [Add] [Portal] Darstellung von IGE-Ordnern in der Datenkatalogansicht im Portal  ([REDMINE-1102](https://redmine.informationgrid.eu/issues/1102))

- [Fix] [Portal] Layoutprobleme bei mobiler Ergebnisdarstellung  ([REDMINE-2087](https://redmine.informationgrid.eu/issues/2087))
- [Fix] [IGE] Verhalten der Nutzungsbedingungen als Pflichtfeld falsch  ([REDMINE-1975](https://redmine.informationgrid.eu/issues/1975))

- [Update] [Portal] Umbenennung des Änderungsdatums in der Portaldarstellung  ([REDMINE-2083](https://redmine.informationgrid.eu/issues/2083))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.12/))
- iBus ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.3.12/))
- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.12/))


## Version 5.3.11

Release 22.06.2020

Profil UVP

- [Fix] [Portal] Fehler bei der Erstellung von Statistiken (Semikolon im Titel)  ([REDMINE-1929](https://redmine.informationgrid.eu/issues/1929)) 

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.11/))


## Version 5.3.10

Release 29.05.2020

- [Add] [Portal] Hinzufügen der E-Mail ReplyTo-Funktion für das Kontaktformular im Portal und "Problem melden" im Kartenclient  ([REDMINE-1890](https://redmine.informationgrid.eu/issues/1890)) 

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.10/))



## Version 5.3.9

Release 20.04.2020

- [Fix] [Portal] BKG-Katalog: Facetten nicht korrekt gefiltert  ([REDMINE-1774](https://redmine.informationgrid.eu/issues/1774)) 
- [Fix] [Portal] Administration der Startseite im nds. UVP-Portal funktioniert nicht ([REDMINE-1828](https://redmine.informationgrid.eu/issues/1828)) 
- [Fix] [Portal] Alte Links zu Detaildarstellungen funktionieren nicht mehr  ([REDMINE-1833](https://redmine.informationgrid.eu/issues/1833)) 
- [Fix] [Mapclient] Mapclient: CORS Probleme im embed-Modus (iFrame)

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.9/))



## Version 5.3.8

Release 02.04.2020

- [Fix] [IGE] IGE: Fehler beim Indexieren bei fehlendem JSON in CL 6360  ([REDMINE-1801](https://redmine.informationgrid.eu/issues/1801)) 

### Komponenten

- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.8/))



## Version 5.3.7

Release 12.03.2020

**ACHTUNG! Die Versionen von 5.2.0 bis einschl. 5.3.6 führen eine Migrationsstrategie falsch aus! So werden z.B. die Konformitäten von Geodatendiensten falsch auf 'nicht konform' gesetzt.**

Zur Behebung des Fehlers bieten sich folgende Optionen an:

* Einspielen eines alten Datenbank Standes in einer Version vor 5.2.0. Aktualisierung mit Version 5.3.7.
* Manuelle Behebung der Probleme anhand des Import Log Files.

Dieses Release betrifft ausschließlich INSPIRE relevante Metadatenverwaltungen.

- [Fix] [IGE] Fix für 5.2.0a Strategie eingeführt mit #1274 (Konformitäten). Gilt nur für Updates von InGrid Versionen vor 5.2.0.  ([REDMINE-1762](https://redmine.informationgrid.eu/issues/1762)) 

### Komponenten

- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.7/))


## Version 5.3.6

Release 06.02.2020

- [Fix] [MapClient] Anzahl Threads steigt mit jedem "Drucken" im Mapclient.  ([REDMINE-1743](https://redmine.informationgrid.eu/issues/1743)) 

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.6/))



## Version 5.3.5

Release 26.2.2020

- [Fix] [Portal] Erweiterung METAVER_MD Profil für "Kommunaler Metadatenkatalog Sachsen-Anhalt".  ([REDMINE-1674](https://redmine.informationgrid.eu/issues/1674)) 
- [Fix] [Portal] Update auf Version >= 5.2.1 schlägt fehl mit Oracle Datenbank.  ([REDMINE-1753](https://redmine.informationgrid.eu/issues/1753)) 
- [Fix] [Portal] Detailansicht von Datensatz über Katalogbrowser liefert kein XML.  ([REDMINE-1309](https://redmine.informationgrid.eu/issues/1309)) 
- [Fix] [MapClient] Portal-Update löscht Einstellungen vom Mapclient.  ([REDMINE-1758](https://redmine.informationgrid.eu/issues/1758)) 
- [Fix] [IGE] Das Upload tmp Verzeichnis sollte automatisch angelegt werden.  ([REDMINE-1750](https://redmine.informationgrid.eu/issues/1750)) 
- [Fix] [IGE] Anfangszustand des Felds "Zugriffbeschränkungen".  ([REDMINE-1675](https://redmine.informationgrid.eu/issues/1675)) 

- [Update] [IGE] Vereinfachung (de-)aktivieren vom Virusscan per Spring override.  ([REDMINE-1726](https://redmine.informationgrid.eu/issues/1726)) 
- [Update] [IGE] Verhalten der Felder zur "Datenqualität" ändern.  ([REDMINE-1276](https://redmine.informationgrid.eu/issues/1276)) 
- [Update] [IGE] Überarbeitung der Verwendung des CI_OnLineFunctionCode bei der Erfassung von Verweisen.  ([REDMINE-1367](https://redmine.informationgrid.eu/issues/1367)) 


### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.5/))
- IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.5/))



## Version 5.3.4

Release 10.2.2020

- [Update] [Portal] IGE: INSPIRE-TG MD 2.0.1: Werte und Verhalten des Feldes "Konformität" ändern (Umsetzung weiterer Anforderungen).  ([REDMINE-1274](https://redmine.informationgrid.eu/issues/1274))
- [Fix] [Codelist-Repository] IGE: Spezifikationsdatum bei Spezifikation der Konformität soll "2010-12-08" bei "VERORDNUNG (EG) Nr. 1089/2010...".  ([REDMINE-1702](https://redmine.informationgrid.eu/issues/1702))
- [Fix] [Portal] Portal: Indikator für Passwortstärke wird im IE11 nicht angezeigt (commit 809df8e).  ([REDMINE-1727](https://redmine.informationgrid.eu/issues/1727))
- [Add] [Mapclient] Mapclient: Aussagekräftigere Meldung beim Laden eines PW geschützten Dienstes im Kartenclient.  ([REDMINE-1592](https://redmine.informationgrid.eu/issues/1592))
- [Bug] [Mapclient] Mapclient: GetFeatureInfo-Abfragen werden nicht mehr geparsed.  ([REDMINE-1737](https://redmine.informationgrid.eu/issues/1737))

Profil METAVER

- [Update] [Portal] Migration von Sachsen nach METAVER: Aktualisierung METAVER Logo ("Sachsen" als Partner hinzugefügt).  ([REDMINE-1589](https://redmine.informationgrid.eu/issues/1589))



### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.4/))
- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.3.4/))



## Version 5.3.3

Release 03.2.2020

- [Fix] [Codelist-Repository] Fix codelist 6010: Bindestrich einfügen in "INSPIRE Richtlinie".  ([REDMINE-1698](https://redmine.informationgrid.eu/issues/1698))


### Komponenten

- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.3.3/))


## Version 5.3.2

Release 24.01.2020

- [Fix] [Portal] Portal: Keine Meldung beim Erstellen von Benutzer als Portaladmin.  ([REDMINE-1671](https://redmine.informationgrid.eu/issues/1671))
- [Fix] [Portal] Portal: Anpassungen am Layout von NUMIS und UVP-NI.  ([REDMINE-1672](https://redmine.informationgrid.eu/issues/1672))
- [Fix] [Portal] Portal: Passwort ändern funktioniert nicht.  ([REDMINE-1673](https://redmine.informationgrid.eu/issues/1673))
- [Fix] [Portal] iPlug SE: Ergebnisse in Suchergebnisliste enthalten keine Anbieter und kein Summary.  ([REDMINE-1669](https://redmine.informationgrid.eu/issues/1669))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.2/))
- iPlug SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/5.3.2/))

## Version 5.3.1

Release 22.01.2020

- [Fix] [Codelist-Repository] Fix codelist 6005 und Wiederherstellung von verlorene Einträge.  ([REDMINE-1274](https://redmine.informationgrid.eu/issues/1274))
- [Fix] [Portal] Portal: Fix Darstellungen von Einschränkungen/Constraints in der Portal-Detaildarstellung.  ([REDMINE-1595](https://redmine.informationgrid.eu/issues/1595))
- [Fix] [IGE] IGE: Fix Pflichtfeldverhalten bei Verschlagwortung/INSPIRE.  ([REDMINE-1604](https://redmine.informationgrid.eu/issues/1604))
- [Fix] [IGE] IGE: Nicht darzustellende Adressen werden trotzdem indexiert.  ([REDMINE-1668](https://redmine.informationgrid.eu/issues/1668))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.1/))
- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.3.1/))
- iPlug IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.1/))


## Version 5.3.0

Release 15.01.2020

### Wichtige Änderungen

#### Neues Portal Profil NUMIS / UVP Niedersachsen

Für NUMIS / UVP NI wurde ein neues Portal Profil erstellt.

![Neues Portal Profil NUMIS](../images/530_numis_portal_profile.png "Neues Portal Profil NUMIS")
<figcaption class="figcaption">Neues Portal Profil NUMIS</figcaption>

![Neues Portal Profil UVP NI](../images/530_uvp_ni_portal_profile.png "Neues Portal Profil UVP NI")
<figcaption class="figcaption">Neues Portal Profil UVP NI</figcaption>

#### Neues Portal Profil HMDK

Der HMDK wurde im Portal jetzt als eigenes Profil umgesetzt.

![Neues Portal Profil HMDK](../images/530_hmdk_portal_profile.png "Neues Portal Profil HMDK")
<figcaption class="figcaption">Neues Portal Profil HMDK</figcaption>

#### Neue Felder im InGrid Editor

Neues Feld "INSPIRE - priority data set"

![Neues Feld "INSPIRE - priority data set"](../images/530_ige_field_priority_data_set.PNG "Feld 'INSPIRE - priority data set'")
<figcaption class="figcaption">Feld "INSPIRE - priority data set"</figcaption>

Neues Feld "INSPIRE - Räumlicher Anwendungsbereich"

![Neues Feld "INSPIRE - Räumlicher Anwendungsbereich"](../images/530_ige_field_raeuml_anwber.PNG "Feld 'INSPIRE - Räumlicher Anwendungsbereich'")
<figcaption class="figcaption">Feld "INSPIRE - Räumlicher Anwendungsbereich"</figcaption>

#### Erfassung von WMTS via Assistenten

Im InGrid Editor können nun auch WMTS Dienste komfortabel via Assistent erfasst werden.

![Neues Feld "WMTS GetCapabilities Assistent"](../images/530_ige_wmts_assistant.png "Feld 'WMTS GetCapabilities Assistent'")
<figcaption class="figcaption">WMTS GetCapabilities Assistent</figcaption>


#### Umstellung Lizenzen auf Open Data

Die Lizenzen werden in Zukunft gemäß Open Data DCAT-AP.de Format gehandhabt und sind damit GovData konform.
Dies bedeutet u.a. eine Umstellung der Lizenz-IDs und -Bezeichnungen gemäß der Liste der Lizenzen unter [DCAT-AP.de Lizenzen](https://www.dcat-ap.de/def/licenses/).
Nähere Informationen s. auch [Anbindung der GDI-DE an GovData](https://wiki.gdi-de.org/display/gdk/Anbindung+der+GDI-DE+an+GovData).

![Open Data Lizenzen im Codelist Repo](../images/530_codelistrepo_opendata_lizenzen.png "Open Data Lizenzen im Codelist Repo")
<figcaption class="figcaption">Open Data Lizenzen im Codelist Repo</figcaption>

### Liste der Änderungen

InGrid

- [Feature] [IGE] Änderung der URL im xml-Attribut codelist ([REDMINE-1554](https://redmine.informationgrid.eu/issues/1554))
- [Feature] [IGE] Neues Feld "INSPIRE - Priority Dataset" ([REDMINE-1516](https://redmine.informationgrid.eu/issues/1516))
- [Feature] [IGE] Neues Feld "INSPIRE - Räumlicher Anwendungsbereich" ([REDMINE-1517](https://redmine.informationgrid.eu/issues/1517))
- [Feature] [IGE] INSPIRE-TG MD 2.0.1: Auflösung des Feldes "Kodierungsschema" in "Anwendungsschema" und "Datenformat" ([REDMINE-1273](https://redmine.informationgrid.eu/issues/1273))
- [Feature] [IGE] WMTS mit GetCapabilities-Assistent erfassen ([REDMINE-513](https://redmine.informationgrid.eu/issues/513))
- [Feature] [IGE] Datenformat GML+Version für INSPIRE-relevante Datensätze ([REDMINE-1272](https://redmine.informationgrid.eu/issues/1272))
- [Feature] [IGE] INSPIRE TG MD 2.0: ISO-Mapping der Felder Nutzungsbedingungen und Anwendungseinschränkungen normalisieren ([REDMINE-1220](https://redmine.informationgrid.eu/issues/1220))
- [Feature] [PORTAL] Vermeidung von Klartext Passwörtern in E-Mails ([REDMINE-1118](https://redmine.informationgrid.eu/issues/1118))
- [Feature] [CODELIST REPO] Änderung Lizenz-ID der Open Data Lizenzen ([REDMINE-1534](https://redmine.informationgrid.eu/issues/1534))
- [Feature] [INTERFACE CSW] Erstellung einer Transparenzportal-spezifischen CSW Schnittstellen Konfiguration ([REDMINE-1531](https://redmine.informationgrid.eu/issues/1531))
- [Bug] [IPLUG-CSW] "Zeige in Karte" fehlt im Portal ([REDMINE-1598](https://redmine.informationgrid.eu/issues/1598))
- [Bug] [IGE] Objektreferenzen die in Bearbeitung sind, dürfen nicht im Portal erscheinen ([REDMINE-1597](https://redmine.informationgrid.eu/issues/1597))
- [Bug] [IGE] Seltener Fehler in Import von ISO 8601 Datumsangaben ([REDMINE-1586](https://redmine.informationgrid.eu/issues/1586))
- [Bug] [IGE] Eingabe von spitzen Klammern in Quellenvermerk nicht möglich ([REDMINE-1530](https://redmine.informationgrid.eu/issues/1530))
- [Bug] [IGE] Über gmx:Anchor abgebildete Raumbezugssysteme werden nicht importiert ([REDMINE-1569](https://redmine.informationgrid.eu/issues/1569))
- [Bug] [CODELIST REPO] INSPIRE-Themen, LIST-ID:6100/106 Falsches INSPIRE-Thema ([REDMINE-1561](https://redmine.informationgrid.eu/issues/1561))
- [Bug] [PORTAL] Funktion "Passwort vergessen" funktioniert nicht ([REDMINE-1543](https://redmine.informationgrid.eu/issues/1543))
- [Bug] [PORTAL] Schreibfehler Kontaktformular ([REDMINE-1545](https://redmine.informationgrid.eu/issues/1545))

Profil UVP

- [Feature] [PORTAL] Anpassung der länderspezifischen Vorschaltseiten an das neue UVP Layout ([REDMINE-1570](https://redmine.informationgrid.eu/issues/1570))
- [Feature] [PORTAL] Sortierung der Trefferliste ([REDMINE-602](https://redmine.informationgrid.eu/issues/602))
- [Feature] [PORTAL] Austausch Logo, Slogan zu "Umweltverträglichkeitsprüfungen der Länder" ([REDMINE-1577](https://redmine.informationgrid.eu/issues/1577))
- [Feature] [PORTAL] Verfahrenstyp soll in Detaildarstellung angezeigt werden ([REDMINE-1590](https://redmine.informationgrid.eu/issues/1590))
- [Feature] [IGE] Integration eines Virusscanners in den Upload Prozess ([REDMINE-1293](https://redmine.informationgrid.eu/issues/1293))
- [Bug] [IGE] Upload von gleicher Datei in anderem Datensatz wird unter falscher UUID abgelegt ([REDMINE-1599](https://redmine.informationgrid.eu/issues/1599))
- [Bug] [IGE] Versteckte Adresse wird in Trefferliste angezeigt ([REDMINE-1522](https://redmine.informationgrid.eu/issues/1522))
- [Bug] [IGE] Verbesserung der Handhabung von Leerzeichen und Sonderzeichen in Dokumentennamen ([REDMINE-1555](https://redmine.informationgrid.eu/issues/1555))
- [Bug] [IGE] Verlinkung von Dokumenten im Editor funktioniert nicht ([REDMINE-1553](https://redmine.informationgrid.eu/issues/1553))
- [Bug] [PORTAL] Auswahl eines Partners lässt Facette komplet verschwinden ([REDMINE-1538](https://redmine.informationgrid.eu/issues/1538))
- [Bug] [PORTAL] Fehler bei der Darstellung im IE11 ([REDMINE-1576](https://redmine.informationgrid.eu/issues/1576))

Profil HMDK

- [Feature] [PORTAL] Profilerstellung für HMDK Installation ([REDMINE-1523](https://redmine.informationgrid.eu/issues/1523))

Profil NUMIS

- [Feature] [PORTAL] Umsetzung der Layoutkonzeption NUMIS/UVP Niedersachsen ([REDMINE-1465](https://redmine.informationgrid.eu/issues/1465))

Profil BKG

- [Feature] [PORTAL] Funktion "Ähnliche Begriffe" sollen aus Portal entfernt werden ([REDMINE-1528](https://redmine.informationgrid.eu/issues/1528))
- [Feature] [IGE] Erfassung des Quellenvermerks ermöglichen ([REDMINE-971](https://redmine.informationgrid.eu/issues/971))
- [Feature] [CODELIST REPO] Geänderte Codelisten übernehmen ([REDMINE-1410](https://redmine.informationgrid.eu/issues/1410))

Profil EBA

- [Feature] [PORTAL] Erstellung Portal Profil EBA ([REDMINE-1593](https://redmine.informationgrid.eu/issues/1593))

### Komponenten

- Portal ([download](https://distributions.informationgrid.eu/ingrid-portal/5.3.0/))
- iBus ([download](https://distributions.informationgrid.eu/ingrid-ibus/5.3.0/))
- Codelist-Repository ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/5.3.0/))
- Interface CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/5.3.0/))
- Interface Search ([download](https://distributions.informationgrid.eu/ingrid-interface-search/5.3.0/))
- iPlug DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/5.3.0/))
- iPlug CSW ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/5.3.0/))
- iPlug WFS ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/5.3.0/))
- iPlug IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/5.3.0/))
- iPlug Excel ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/5.3.0/))

