---
layout: default
title: Query Syntax
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
sitemap: false
---

## Hintergrund

Die Query Syntax wird verwendet, um in der InGrid-Datenbasis zu recherchieren. Die Syntax gilt sowohl für die Suche im Portal, als auch für die Suche über die OpenSearch Schnittstelle.

## Syntax der InGrid Query

### Allgemeines

|Feldname | Wert| Erläuterung | Anmerkung |
|--| --| -- | -- |
|datatype| |  | Spezifiziert den Suchbereich und die Typen von Daten(quellen), die ein iPlug beinhaltet. |
|| default | Suche in "Umweltinformationen" |  |
|| address | Suche in "Adressen" |  |
|| research | Suche in "Forschungsprojekten" |  |
|| law | Suche in "Rechtsvorschriften" |  |
|| service | Suche in "Service" |  |
|| measure | Suche in "Messwerte" |  |
|| topics | Suche in "Umweltthemen" |  |
|| www | Suche in "Webseiten" | Portal GUI: <br>&nbsp;&nbsp;Facettierung -> Webseiten<br>&nbsp;&nbsp;Erweiterte Suche/Suchbereich/Datenquellen -> In Webseiten |
|| metadata | Suche in "Metadaten" | Portal GUI: <br>&nbsp;&nbsp;Facettierung -> Metadaten<br>&nbsp;&nbsp;Erweiterte Suche/Suchbereich/Datenquellen -> In Metadaten |
|| fis | Suche in "Fachinformationssystemen" | Portal GUI: <br>&nbsp;&nbsp;Erweiterte Suche/Suchbereich/Datenquellen -> In Fachdatenbanken |
|| csw | Suche in angeschlossenen CSW Datenquellen |  |
|| excel | Suche in angeschlossenen EXCEL Datenquellen |  |
|| xml | Suche in angeschlossenen XML Datenquellen |  |
|| opensearch | Suche in angeschlossenen OpenSearch Datenquellen |  |
|ranking| |  | Art des Rankings der Suchergebnisse. Es werden nur iPlugs angefragt, die ein entsprechendes Ranking unterstützen.  |
|| score | Sortierung nach Bewertung des Treffers (iPlugs mit Indexierung) |  |
|| date | Sortierung nach Änderungsdatum der Treffer  (iPlugs mit Indexierung und Support für Änderungsdatum) |  |
|| off | Nur Treffer ohne Bewertung (iPlugs ohne Indexierung); deprecated|  |
|| any | Alle Treffer (unabhängig von der Art der Indexierung) |  |
|grouped| |  | Art der Gruppierung der Suchergebnisse (wird intern genutzt). |
|| grouped_off | Keine Gruppierung (kann auch explizit gesetzt werden). |  |
|| grouped_by_partner | Gruppierung nach Partner (Bund/Länder)  |  |
|| grouped_by_organisation | Gruppierung nach Anbieter |  |
|| grouped_by_plugId | Gruppierung nach iPlug |  |
|| grouped_by_datasource | Gruppierung nach Datenquelle/Domain |  |
|partner| | Eingrenzung auf Partner. Wenn nicht gesetzt, dann alle Partner.  | Portal GUI: <br>&nbsp;&nbsp;Facettierung -> Anbieter<br>&nbsp;&nbsp;Erweiterte Suche/Suchbereich/ Bund/Länder  |
|| bund, bw, by, ...  | Partnerkürzel, wie in Portal Administration gepflegt. |  |
|provider| | Eingrenzung auf Anbieter. Wenn nicht gesetzt, dann alle Anbieter.   | Portal GUI: <br>&nbsp;&nbsp;Facettierung -> Anbieter<br>&nbsp;&nbsp;Erweiterte Suche/Suchbereich/ Bund/Länder / → auf Pluszeichen-Kästchen klicken und damit die Liste der Anbieter öffnen |
|| bb_mluv, bu_blauerengel, ...  | Anbieterkürzel, wie in Portal Administration gepflegt. |  |
| iplugs | | Eingrenzung auf ein iPlug anhand der iPlug-ID | Bsp.: wasser iplugs:"/ingrid-group:iplug-se" |
|lang| | Eingrenzung auf Sprache   |  |
|| de, en, ...  | ISO Sprachkürzel, je nach angeschlossenen Datenquellen |  |
| site | | Domänenspezifische Suche | Bsp.: wasser site:www.umwelt.niedersachsen.de |
| get_unranked_iplugs_with_no_results | | Unranked iPlugs mit 0 Treffern werden trotzdem in rechter Spalte angezeigt. | Bsp.: wasser get_unranked_iplugs_with_no_results:x |
| cache | on/off| Cache auf iPlug Seite an/ausschalten | Bsp.: cache:off |
| topic |  | Eingrenzung der Themenseiten auf Thema/Messwerte/Service | |
| | Abfall, Altlasten, Bauen, Boden, Chemikalien, Energie, Forstwirtschaft, Gentechnik, Geologie, Gesundheit, LaermErschuetterung, Landwirtschaft, LuftKlima, NachhaltigeEntwicklung, NaturLandschaft, Strahlung, Tierschutz, Umweltinformation, Umweltwirtschaft, Verkehr, Wasser| Eingrenzung der Themenseiten auf Thema | Für Umweltthemen ( datatype:topics ) |
|  | press, publication, event | Eingrenzung der Servicerubrik | Für Services ( datatype:service ) |
|  | radiation, air, water,  misc  | Eingrenzung der Messwerterubrik | Für Messwerte ( datatype:measure ) |
| metaclass |  | Metadaten (InGrid Catalog) Objektklassen  | |
| | job | class_id = 0 (ID der Metadatenklasse)  | PortalU GUI: Organisationseinheit/Fachaufgabe |
| | map | class_id = 1 (ID der Metadatenklasse)  | PortalU GUI: Geo-Information/Karte |
| | document | class_id = 2 (ID der Metadatenklasse)  | PortalU GUI: Dokument/Bericht/Literatur |
| | geoservice | class_id = 3 (ID der Metadatenklasse)  | PortalU GUI: Dienst/Anwendung/Informationssystem |
| | project | class_id = 4 (ID der Metadatenklasse)  | PortalU GUI: Vorhaben/Projekt/Programm |
| | database | class_id = 5 (ID der Metadatenklasse)  | PortalU GUI: Datensammlung/Datenbank  |
| | service | class_id = 6 (ID der Metadatenklasse)  | PortalU GUI: Geodatendienst |
| time || | Grundsätzlich werden immer alle Informationen gefunden, deren Zeitbezug innerhalb des eingegebenen Suchintervalls liegt. Durch Zusatz von time können noch zusätzliche Informationen gefunden werden. |
||intersect | Zusätzlich noch Ergebnisse deren Zeitraum den eingegebenen Zeitbezug schneidet | Portal GUI: Erweiterte Suche/Zeit|
||include | Zusätzlich noch Ergebnisse deren Zeitraum den eingegebenen Zeitbezug umschließt | Portal GUI: Erweiterte Suche/Zeit|
|t0|  | Datumsangabe "am" in der Form JJJJ-MM-TT | |
|t1|  | Datumsangabe "von" in der Form JJJJ-MM-TT | |
|t2|  | Datumsangabe "bis" in der Form JJJJ-MM-TT | |
|areaid | | Raumeinschränkung durch Kreisgemeindeschlüssel | GUI: Raumeinschränkung Karte -> Auf Karte Festlegen |
| x1 | Raumeinschränkung durch Koordinaten | Portal GUI: Raumeinschränkung Karte |
| x2 | " | " |
| y1 | " | " |
| y2 | " | " |
|coord  | inside | Ergebnis-Koordinaten **innerhalb** Kartenausschnitt | Portal GUI: Erweiterte Suche/Raum/Raumeinschränkung Karte -&gt; Button "Raumeinschränkung: Suchgebiet selektieren (Rahmen aufziehen)" anklicken; -&gt; Häckchen bei "Art der Einschränkung: Der Raumbezug der Ergebnisse liegt innerhalb des gewählten Kartenausschnittes." (ist voreingestellt)|
|| intersect | Ergebnis-Koordinaten schneiden Kartenausschnitt.|Häckchen bei "Art der Einschränkung: Der Raumbezug der Ergebnisse **schneidet** den gewählten Kartenausschnitt."|
|| include | Ergebnis-Koordinaten umschließen Kartenausschnitt. | Häckchen bei "Art der Einschränkung: Der Raumbezug der Ergebnisse **umschließt** den gewählten Kartenausschnitt."|
| fileformat |pdf, rtf, msword, msexcel| Suche nach bestimmten Dateitypen | |


### Adressen

Für den Bereich "Adressen" - Query-Term: datatype:address - gilte die hier angegebene Query Syntax.

|Feldname | Wert| Erläuterung | Anmerkung |
|==| ==| == | == |
|querymode | substring | Teilzeichenkette | Portal GUI: Erweiterte Suche [Adressen] -&gt; Thema-Suchmodus, Default: "Ganzes Wort"
|attribrange | limited  | Suche nur in Attributen Institutionen, Person, Beschreibung, Schlagworte | Portal GUI: Thema-Suchmodus, Default: "Alle Textfelder" |
|street | &lt;string&gt; | Straße | Portal GUI: Raum |
|zip | &lt;number&gt; | Postleitzahl | Portal GUI: Raum|
|city | &lt;string&gt; | Ort | Portal GUI: Raum|



### Operatoren

Zusätzlich können die verschiedenen Felder und Begriffe durch Boolsche Operatoren und Modifikatoren, wie in folgender Tabelle beschrieben, verknüpft werden.

|Operator | Beschreibung | Beispiel |
|==| ==| == |
|'&&' oder '' | UND Verknüpfung (Beide Suchbegriffe müssen vorhanden sein) | wasser regen (default)|
|' \| ' oder 'OR' | ODER Verknüpfung (Einer von beiden Suchbegriffen muss vorhanden sein) | wasser \| boden|
|'-' oder 'NOT' | UND NICHT Verknüpfung (Der Suchbegriff darf nicht vorhanden sein) | wasser -boden|
|"" | Es wird genau nach der Phrase gesucht | "Wasserverschmutzung im Rhein"|
|'\*' | Wildcard Query (Steht für eine beliebige Zeichenkette) | Wasser* (Findet z.B. auch Wasserspeicher)|
|'?' | Wildcard Query (Steht für ein beliebiges einzelnes Zeichen) | Te?t (Findet sowohl Test als auch Text)|
|'~' | Fuzzy Suche (Ein ungefährer Suchbegriff muss vorhanden sein) | Wasser~ (Vorsicht die Ergebnisse sind sehr 'Fuzzy')|
|'[ TO ]' oder '[-]' | Bereichssuche (Ein Wort aus dem Bereich muss vorhanden sein; die angegebenen Worte sind in dem Bereich eingeschlossen) | Te[h-s]l (Es werden die Worte Teil und Test gefunden)|
|'{ TO }' oder '{-}' | Bereichssuche (Ein Wort aus dem Bereich muss vorhanden sein; die angegebenen Worte sind in dem Bereich ausgeschlossen) | Te{h-s}l (Es werden das Wort Teil aber nicht Test gefunden)|

Beachte: Die Einschränkungen auf Datatype werden im iBus geregelt und erlauben keine Verwendung innerhalb Boolscher Ausdrücke. Folgende Suche wird daher **nicht** unterstützt: `karte OR (datatype:metadata metaclass:geoservice)`

In diesem Fall sollte `karte OR metaclass:geoservice` ausreichen, da metaclass:geoservice, den datatype:metadata impliziert. 

## Sonstiges

### Meta Informationen via Query

Mit der InGrid Query können auch Metainformationen übermittelt werden, die sich nicht auf die Suchanfrage auswirken, allerdings von iPlugs via Query Extension ausgewertet werden können. Die Metainformationen werden vom iBus allerdings nur an iPlugs weiter gereicht, die in Ihrer Plugdescription in der Fieldliste metainfo beinhalten. Dieses Feld wird beim Erstellen des Index automatisch in die Fieldliste geschrieben, die Suchanfrage innerhalb des iPlugs entfernt die Metainformationen wieder, um die Suche nicht zu beeinflussen.

|Feldname | Wert| Erläuterung | Anmerkung |
|==| ==| == | == |
|metainfo | beliebiger Wert | Zusätzliche Steuerinformationen via Query | Anreichern der Query mit Metainformationen, die von iPlugs neueren Typs (s.o.) ausgewertet werden können (z.B. `metainfo:metager` um Anfrage von Metager zu kennzeichnen, auf die die iPlugs dann reagieren können). Es können beliebig viele metainfo Fields der Query mitgegeben werden. |
|metainfo | training | schließt angeschlossene "Trainings"-Kataloge in Suche ein | Sind die Schulungs-Kataloge am iBus frei geschaltet, so werden diese trotzdem nicht durchsucht, allerdings kann mit dieser metainfo die Suche frei geschaltet werden. Mit Einschränkung auf's iPlug findet dann die Suche nur auf dem Schulungs-Katalog statt, also Query: `iplugs:"/kug-group:kug-iplug-udk-db_training" metainfo:training` |

### Frei definierbare Indexfelder

In iPlugs können Indexspalten frei definiert werden. Diese werden automatisch der Query Syntax hinzugefügt und können in der Suche verwendet werden. Bsp:

* Abbildungen im iPlug XML oder iPlug Excel
* Metadaten im iPlug SE
* Zusätzliche Felder im InGrid Catalog (mit entsprechendem indexierenden iPlug DSC)

### Sonderzeichen

| Zeichen | Erläuterung |
| == | == |
|* | Wildcard, kann innerhalb oder am Ende eines Queryterms verwendet werden.|
|# | Dient der Deklaration von Facettierungsinformationen innerhalb einer Query. Dieses Zeichen sollte in einer Query nicht verwendet werden.|

