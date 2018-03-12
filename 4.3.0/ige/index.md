---
layout: default
title: Portal Dokumentation
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---


## Hilfe zum InGridEditor


<a name="index"></a>

### Hilfethemen


*  [Das Metadatenkonzept](#md-concept-1) 
*  [Aufbau des Editors](#editor-design-1) 
*  [Hierarchie u. Erfassung](#hierarchy-maintenance-1) 
*  [Recherche](#search-1) 
*  [Qualitätssicherung](#quality-assurance-0) 
*  [Statistik](#statistic-1) 
*  [Verwaltungsfunktion: Katalogverwaltung](#catalog-administration-1) 
*  [Verwaltungsfunktion: Nutzerverwaltung](#user-administration-1) 
*  [Verwaltungsfunktion: Gesamtkatalogmanagement](#overall-catalog-management-1) 
*  [Verwaltungsfunktion: Import/Export](#import-export-1) 

## Das Metadatenkonzept


<a name="md-concept-1"></a>

### Ziele und Realisierung


Die Suche nach Daten zu geografischen und umweltbezogenen Themen gestaltet sich nicht immer einfach, vor allem wenn nicht bekannt ist, ob solche Daten überhaupt erhoben wurden, von wem sie erhoben wurden und woher man sie bekommen kann. Der InGridCatalog (IGC) hilft, geografische und umweltrelevante Datenbestände aufzufinden und diese zu nutzen.

Analog dem Katalog einer Bibliothek verzeichnet der InGridCatalog die landesweit und dezentral vorgehaltenen Datenbestände, ohne sie selbst zu enthalten; er ist also ein Informationssystem über Informationsbestände. Im IGC werden die Datenbestände an­hand definierter Eigenschaften beschrieben und jeweils mit der Adresse eines zuständigen Ansprechpartners ausgewiesen. Fach­leute, die die Daten erheben, füllen den IGC mit Inhalt und aktuali­sieren ihn; dadurch wird eine größtmögliche Qualität der Datenbe­schreibung erreicht. Eine interne Benutzerverwaltung regelt die Schreib- und Aktualisierungsrechte im IGC.

Die wesentlichen **Aufgaben und Vorteile** des InGridCatalogs sind demnach folgende:

* ein möglichst kompletter Überblick über die großen Mengen geografischer und umweltrelevanter Datenbestände, die von Behörden und Institu­tionen erhoben und gespeichert werden
* eine präzise Beschreibung der Datenqualität dieser Datenbe­stände
* Standardisierung der Beschreibung von Daten­quellen nach internationalen Standards wie der ISO 19115, der ISO 19119 und INSPIRE
* Bereitstellung der Metadaten über international standardisierte Schnittstellen wie OGC-konformer Catalog Service Web (CSW) oder OpenSearch
* Zugriff auf Daten via Metdaten wie z.B. auf verzeichnete Karten über den OGC-konformen Web Mapping Service (WMS)
* ein Informationsinstrument für die Öffentlichkeit im Sinne des Umweltinformationsgesetzes (UIG), der EU-Richtlinie zum freien Zugang zu Umweltinformationen und der europäischen Richtlinie zum Aufbau einer Geodateninfrastruktur (INSPIRE)

Der InGridEditor ist die Komponente zur Erfassung und Pflege der Metadaten.

<a name="md-concept-2"></a>

### Objekte und Adressen


Der InGridCatalog (IGC) ist ein **Metainformationssystem** , d.h. ein Informationssystem über Informationsbestände. Im IGC werden also keine originären Datenbestände verwaltet, sondern - wie der Name _Katalog_ schon sagt - ausschließlich Informationen über diese. Der IGC soll die große Menge an geografischen oder umweltrelevanten Daten wieder überschaubar und verfügbar und damit nutzbar machen.

Der zentrale Bestandteil des IGCs sind die sogenannten (Metadaten-)Objekte. Sie enthalten die Metainformationen zu den geografischen oder umweltrelevanten Datenbeständen.

Was ist Metainformation? Uns umgebende reale Umweltobjekte (wie beispielsweise Wiesen, Wälder, Flüsse, Seen, Luft und Boden) werden vermessen, beobachtet und/oder beurteilt. Daraus erhalten wir Datenbestände bzw. Datenobjekte, wie z.B. Biotopkartierungen, Messreihen der Gewässer- und Luftgüteüberwachungssysteme, Bodendaten aus Bohrungen und viele andere mehr. Zu jedem Datenbestand bzw. -objekt kann eine Beschreibung erstellt werden. Diese Metainformation wird als Meta-Datenobjekt bezeichnet, sie beschreibt das Datenobjekt eindeutig; d.h. Metadatenobjekte informieren über das angewandte Messverfahren bzw. über die Art der Datengewinnung, wo und wann diese Daten aufgenommen wurden und in welcher Form - digital, analog, als Karten o.ä. - die Datenobjekte vorliegen. Die Metadatenobjekte enthalten also die Metainformationen zu den Umweltdatenobjekten.

Wie bereits angedeutet, reicht es nicht aus zu wissen, mit welcher wissenschaftlichen Methode ein Datenobjekt erhoben wurde. Um mit Hilfe eines Datenobjektes eine richtige Aussage zu machen oder eine Schlussfolgerung zu ziehen, benötigt man auch Informationen zu Ort und Zeit der Erhebung; sonst ist der Datenbestand wertlos. Es ist beispielsweise wesentlich zu wissen, ob eine Messstation eines Luftgüteüberwachungssystems ihre Messungen in der Innenstadt oder in ländlichem Gebiet macht oder wann ein bestimmtes Biotop kartiert wurde.

Nicht immer sind die Datenbestände mit dem klassischen Messungsbegriff vereinbar, so dass die Metadatenobjekte in verschiedene Objektklassen unterschieden werden. Dabei wurde zugrunde gelegt, dass Daten klassifiziert werden können.

Es werden sieben Objektklassen unterschieden:

* Fachaufgabe
* Datensammlung
* Literatur
* Geodatensatz
* Geodatendienst
* Informationssystem
* Projekt

Metadatenobjekte enthalten Angaben zum Fach-, zum Raum- und Zeitbezug eines Datenobjektes. Der Fachbezug macht Angaben zur Art und Weise der Datengewinnung und ihrer Genauigkeit, Raum- und Zeitbezug geben an, wo und wann das Datenobjekt gewonnen wurde.

Jedem Objekt wird mindestens eine Adresse zugeordnet (z.B. Adresse des Verwalters oder des Ansprechpartners). Durch diese Zuordnungsmöglichkeiten (Verweise) müssen die Adressen jeweils nur einmal in die Adressverwaltung des IGC eingegeben bzw. gepflegt werden.

Die Adressen lassen sich in vier Kategorien unterscheiden:

* Institutionen
* Einheiten (die zu einer Institution gehören
* Personen (die in einer Institution oder einer Einheit tätig sind
* freie Adressen (bei denen es sich um Personen ohne eine hierarchische Anbindung handeln kann
Die Gesamtheit der Objekte und Adressen, d.h. der Metadatenbestand, wird als Katalog bezeichnet.
<a name="md-concept-3"></a>

### Die Ordnung des InGridCatalogs (IGC) (Der Strukturbaum)


Im IGC umfasst ein Katalog sowohl Objekte als auch Adressen. Die Adressen werden nach Institutionen, Einheiten, Personen und freien Adressen unterschieden. Unter Institutionen lassen sich andere Institutionen, zugehörige Einheiten oder Personen ordnen. Unter die Einheiten lassen sich zugehörige Einheiten oder Personen ordnen.

Auch die Menge der Objekte kann hierarchisch anhand eines sogenannten Strukturbaums geordnet werden. Von dem Katalog ausgehend verzweigt der Strukturbaum je nach Bedarf unterschiedlich breit und tief. Eine Teilmenge eines Strukturbaums heißt Teilbaum. Dabei ist zu beachten, dass ein Teilbaum auch wieder genau ein Wurzelobjekt besitzt.

Unterhalb des Kataloges liegt die Ebene der Objekte. Die Struktur der Objekte gliedert sich im Normalfall in drei weitere Ebenen:

* Organisatorische Struktur
* Fachliche Struktur
* Daten-Objekte

## Aufbau des Editors


<a name="editor-design-1"></a>

### Metadatenerfassung und Verwaltungsfunktionen


InGridEditor (IGE) besteht aus zwei Komponenten, die Metadatenerfassungskomponente und die Verwaltungskomponente. Der IGE wird aus dem InGrid-Portal heraus über die Schaltflächen "Login IGE" gestartet.

Das Hauptmenü unterscheidet sich, abhängig von der Rolle des eingeloggten Benutzers. So steht einem Katalog-Administrator mehr Funktionen zur Verfügung als einem Autor.

Jedes [Hauptmenü](#editor-design-2) kann weitere [Untermenüs](#editor-design-3) enthalten. Bei einzelnen Menüpunkten kann zudem zusätzlich eine [Funktionsleiste](#editor-design-4) existieren.

Am rechten oberen Rand des Kopfes des IGEs befindet sich eine [Navigationsleiste](#editor-design-1a) .

<a name="editor-design-1a"></a>

### Die Navigationsleiste


Die Navigationsleiste befindet sich in der rechten oberen Ecke des Editors. Sie ist für alle Komponenten und alle Menüpunkte gleich und besteht aus folgenden Punkten:

* **Informationen zum aufgeschalteten Nutzer**: Name des Nutzers in der Adressverwaltung • Rolle des Nutzers • Name des Metadaten-Katalogs
* **Hilfe**: Verweis auf die Hilfetexte zum InGridEditor
* **Impressum**: Verwies auf das Impressum des Portals
* **Info**: Verweis auf Informationen zum Editor (z.B. die Versionsnummer der Anwendung)
* **Schliessen**: Schließt die Anwendung
* **Sprache**: Umschaltung auf eine andere Sprache für die Benutzeroberfläche des Editors

<a name="editor-design-2"></a>

### Das Hauptmenü


Das Hauptmenü unterscheidet sich in das für die Metadatenerfassung und das für die Verwaltungsfunktionen.

Die Menüpunkte für die **Metadatenerfassung** sind:

*  [Dashboard](#dashboard-1) 
*  [Hierrarchie & Erfassung](#hierarchy-maintenance-1) 
*  [Recherche](#search-1) 
*  [Qualitätssicherung](#quality-assurance-1) 
*  [Statistik](#statistic-1) 

Die Menüpunkte für die **Verwaltung** sind:

*  [Katalogverwaltung](#catalog-administration-1) 
*  [Nutzerverwaltung](#user-administration-1) 
*  [Gesamtkatalogmanagement](#overall-catalog-management-1) 
*  [Import/Export](#import-export-1) 

Das Dashboard ist die Einstiegseite für den InGrid-Editor und zeigt eine Zusammenfassung der gerade in Bearbeitung befindlichen Objekte und Adressen, abhängig vom eingeloggten Benutzer.

Die Menüpunkte Gesamtkatalogmanagement und Import/Export sind nur für den Katalog-Administrator sicht- und zugreifbar.

<a name="editor-design-3"></a>

### Untermenüs


Untermenüs sind abhängig vom jeweiligen Hauptmenüpunkt. Einen Hilfetext zu einem Untermenüpunkt finden Sie unterhalb des zugehörigen Hauptmenüpunkts.

<a name="editor-design-4"></a>

### Funktionsleiste


Funktionsleisten sind nur für wenige Menüpunkte vorhanden. Einen Hilfetext zu einer Funktionsleiste finden Sie unterhalb des zugehörigen Hauptmenüpunkts.

<a name="editor-design-5"></a>

### Hilfestellungen bei der Erfassung


Sie finden einen Hilfetext zu jedem Untermenüpunkt und zu jedem Dialogfenster. Er kann, falls eine Funktionsleiste vorhanden ist, über die mit „ **?** “ gekennzeichnete Schaltfläche aufgerufen werden. Ist keine Funktionsleiste vorhanden, ist ein Verweis hinter dem Symbol „ **[?]** “ angebracht, über den ebenfalls der Hilfetext aufgerufen werden kann.

Zusätzlich erhalten Sie Hilfe zu der Befüllung einzelner Felder, indem Sie den Mauszeiger über die Überschrift des jeweiligen Feldes ziehen. Er verändert dann seine Form zu einer Kombination aus Zeiger und Fragezeichen. Ein einfacher Klick mit der linken Maustaste öffnet ein Dialogfeld, das einen speziellen Hilfetext zu dem zugehörigen Feld anzeigt.

<a name="editor-design-6"></a>

### Besonderheiten bei Tabellen


In den Editiermodus eines Eingabefeldes gelangen Sie normalerweise über einen einfachen Klick mit der linken Maustaste in das jeweilige Feld.

Bei Tabellen markiert ein einfacher Klick die Zeile, in der der Mauszeiger steht. Sie können mehrere Zeilen markieren, in dem sie die Shift-Taste oder die Strg-Taste gleichzeitig mit einem einfachen Klick der linken Maustaste verwenden. Ein gleichzeitiges Drücken der Strg-Taste markiert eine Zeile, ohne die Markierung der bereits vorher markierten Zeilen aufzuheben. Ein gleichzeitiges Drücken der Shift-Taste markiert alle Zeilen zwischen der zuletzt markierten bis zu der angeklickten Zeile.

Mit der rechten Maustaste lässt sich ein Kontextmenü öffnen, über das Sie die markierten Zeilen bearbeiten (z.B. löschen) können.

Um in den Editiermodus eines Feldes innerhalb einer Tabelle zu gelangen, müssen Sie einen Doppelklick mit der linken Maustaste auf das gewünschte Feld ausführen. Gleiches gilt z.B. auch für die Eingabe von Datumsangaben in einer Tabelle.

## Dashboard


<a name="dashboard-1"></a>

### Beschreibung


Das Dashboard zeigt eine Übersicht des Kataloges in Form einiger allgemeiner Informationen und einer Übersicht aller zuletzt bearbeiteter Objekte und Adressen. Im ersten Reiter "Meine Datensätze" werden alle in Bearbeitung befindlichen Objekte bzw Adressen des eingeloggten Benutzers aufgelistet. Wird einer der angezeigten Datensätze ausgewählt, so wird dieser direkt im Editor geöffnet.


Ein Klick auf "Alle Datensätze" zeigt die zuletzt bearbeiteten Objekte und Adressen aller Nutzer an. Hier erhält man einen Überblick, welche Objekte/Adressen im gesamten Katalog gerade bearbeitet werden. Ist ein/e Objekt/Adresse grau, so bedeutet dies, dass der eingeloggte Benutzer keine Schreibrechte darauf besitzt.


Über den Button "Aktualisieren" werden alle Informationen des Dashboards neu geladen.

## Hierarchie u. Erfassung


<a name="hierarchy-maintenance-1"></a>

### Anordnung der Metadaten (Der Strukturbaum)


Im **linken Fenster** werden die Objekte und Adressen und ihre Stellung in der Hierarchie des Kataloges angezeigt. Die Navigation in der Objekt- bzw. Adresshierarchie erfolgt analog zu der Funktionsweise des Windowsexplorers, d.h. Öffnen und Schließen einzelner Teilbäume der Hierarchie erfolgt über die ‚Plus’ und ‚Minus’-Kästchen links neben den Zeilen.

Bei den Objekten sehen Sie den Objektnamen und das Icon der Objektklasse, bei den Adressen den Adresstitel und das Icon des Adresstyps.

Die Icons zeigen den jeweiligen Bearbeitungsstand:

*  **Blau** bedeutet, dass das Objekt bzw. die Adresse veröffentlicht, d.h. recherchierbar ist.
*  **Rot** bedeutet, dass das Objekt bzw. die Adresse in Bearbeitung ist.
* Wird ein **blaues** Icon **rot** überlagert, so gibt es eine veröffentlichte Version des Objektes bzw. der Adresse und eine bearbeitete.

Die roten Icons haben die Buchstaben B, Q, R:

*  **‚B’** bedeutet ‚noch nicht abschließend bearbeitet’.
*  **‚Q’** bedeutet ‚zur Qualitätssicherung überwiesen’.
*  **‚R’** bedeutet ‚von der Qualitätssicherung zum Bearbeiter rücküberwiesen’, d.h. der Bearbeiter soll dort noch Verbesserungen vornehmen.

Ausgewählte ‚aktuelle’ Objekte bzw. Adressen werden rot angezeigt und die Informationen zum Objekt bzw. zur Adresse im rechten Fenster dargestellt.

Die Fensterteilung zwischen rechtem und linkem Fenster kann durch Verschieben des Mittelbalkens verändert werden.

Einige Funktionen können direkt aus dem Kontextmenü, das über die rechte Maustaste geöffnet wird, ausgeführt werden. Die Funktionen beziehen sich immer auf das gerade angeklickte Objekt bzw. die angeklickte Adresse. Die zur Verfügung stehenden Funktionen sind die folgenden:

**Neu anlegen**

Anlegen eines neuen Objekts oder einer neuen Adresse unter dem aktuellen Objekt bzw. der aktuellen Adresse.

**Vorschau und Druckansicht**

Im Fenster Detailansicht können Sie die Anordnung der Objekt- bzw. Adressinformation im Ausdruck ansehen. Die Anordnung der Information ist nicht veränderbar. Mit einem Klick auf _[Drucken]_ gelangen Sie in das Druckmenü des Betriebssystems.

Neben der Anzeige der Detailansicht eines Objektes/einer Adresse, ist es auch möglich die Detailinformationen des gesamten Unterbaumes anzeigen zu lassen. Sind die Auswahlboxen _Detailansicht_ und _Untergeordnete Adressen mit einbeziehen_ beide ausgewählt, so werden alle Objekte/Adressen des Teilbaumes untereinander ausgegeben. Beachten Sie, dass die Ausgabe bei sehr vielen Objekten eine Weile dauern kann. Deshalb ist es jederzeit möglich die Anzeige abzubrechen.

Wird die Auswahlbox _Detailansicht_ entfernt, so wird anstatt einer Detailansicht, nur eine gekürzte Version angezeigt, bestehend aus dem Titel des Datensatzes. Der Baum wird hierbei jedoch in einer hierarchischen Darstellung angezeigt.

Die Druckansicht kann mit dem Kreuz oben rechts in der Fensterecke verlassen werden.

Diese Funktion steht für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ nicht zur Verfügung.

**Objekt/Adresse/Teilbaum ausschneiden**

Um einem Objekt, einer Adresse oder einem Teilbaum einen anderen Platz in der Hierarchie des aktuellen Kataloges zuzuweisen, schneiden Sie diese zuerst aus, um sie unter ein anderes Objekt bzw. eine andere Adresse mittels der Funktion _**Einfügen**_ einzufügen.

Das zu bearbeitende Objekt bzw. die Adresse muss vor dem Ausschneiden markiert werden. Um einen Teilbaum (d.h. ein Objekt mit allen hierarchisch darunterliegenden Objekten) auszuschneiden, muss das hierarchisch oberste Objekt markiert sein. Eine Markierung aller betroffenen Objekte bei ausgeklapptem Teilbaum ist nicht möglich.

Diese Funktion steht für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ nicht zur Verfügung.

**Objekt/Adresse kopieren**

Ein markiertes Objekt oder eine markierte Adresse wird mit dieser Funktion in den Zwischenspeicher kopiert. Um die Kopie an die gewünschte Stelle in der Hierarchie zu bringen, nutzen Sie die Funktion _**Einfügen**_ .

Diese Funktion steht für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ nicht zur Verfügung.

**Teilbaum kopieren**

Um einen Teilbaum (d.h. ein Objekt oder eine Adresse) mit allen hierarchisch darunterliegenden Objekten bzw. Adressen zu kopieren, muss das hierarchisch oberste Objekt (bzw. die Adresse) markiert sein. Eine Markierung aller betroffenen Objekte bei ausgeklapptem Teilbaum ist nicht möglich. Um die Kopie an die gewünschte Stelle in der Hierarchie zu bringen, nutzen Sie die Funktion _**Einfügen**_ .

Diese Funktion steht für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ nicht zur Verfügung.

**Einfügen**

Markieren Sie das Objekt bzw. die Adresse, die hierarchisch über dem einzufügenden Objekt oder Teilbaum bzw. der einzufügenden Adresse steht. Die Ordnung innerhalb einer Hierarchiestufe erfolgt alphabetisch und kann durch Verschieben oder Einfügen nicht geändert werden.

**Teilbaum neu laden**

Der Teilbaum unterhalb des angeklickten Objektes bzw. der angeklickten Adresse wird aktualisiert.

Für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ heißt die Funktion _Baum neu laden_ .

**Löschen**

Ist die [Workflow-Kontrolle](#quality-assurance-0) aktiviert und Sie sind **nicht** der Qualitätssichernde, wird der Teilbaum einschließlich des aktuellen Objektes bzw. der aktuellen Adresse zum Löschen markiert.

In den anderen Fällen wird der Teilbaum ab dem aktuellen Objekt bzw. der aktuellen Adresse nach einer Sicherheitsabfrage endgültig gelöscht.

Diese Funktion steht für die Ebenen _Objekte_ , _Adressen_ und _freie Adressen_ nicht zur Verfügung.

**Kopieren/Ausschneiden/Löschen mehrerer Objekte oder Adressen**

Mithilfe der "Strg"-Taste ist es möglich weitere Knoten aus dem Hierarchiebaum auszuwählen. Wird ein bereits markiertes Objekt bei gedrückter "Strg"-Taste angeklickt so wird die Markierung wieder entfernt. Sobald mehr als ein Knoten markiert wird, schränkt sich die Auswahl an möglichen Operationen auf _Löschen_ , _Objekte/Adressen/Teilbäume ausschneiden_ , _Objekte/Adressen kopieren_ und _Teilbäume kopieren_ ein. Diese Operationen können über die Toolbar oder über das Kontextmenü aufgerufen werden (Rechtsklick auf einen Knoten im Baum ). Wird das Kontextmenü jedoch auf einem nicht markierten Knoten aufgerufen, so wird die aktuelle Markierung verworfen und nur der angeklickte Knoten wird ausgewählt.

**Ändern auf Internet/Intranet/amtsintern**

Über diese Operationen im Kontextmenü ist es möglich den Veröffentlichungszustand eines Objektes mittels eines einfachem Klicks zu ändern. Das Objekt wird automatisch nach der Änderung gespeichert bzw. veröffentlicht. Sollte sich die Veröffentlichungsbreite der Unterobjekte eines gewählten Objektes unterscheiden, so wird ein Hinweis ausgegeben. Wird dieser bestätigt, so wird den Unterobjekte automatisch der korrekte Veröffentlichungszustand zugewiesen.

<a name="hierarchy-maintenance-2"></a>

### Die Erfassung von Metadaten


Im **rechten** Fenster sehen Sie alle verfügbaren Felder und Informationen zum ausgewählten Objekt. Diese sind je nach Objektklasse und Adresstyp unterschiedlich. Im oberen Teil des Fensters werden farbig hinterlegt Kopf- sowie Statusinformationen zum Objekt bzw. zur Adresse angezeigt. Diese Anzeige ist immer sichtbar. Die weiteren Informationen sind zu Gruppen zusammengefasst und durch Balken optisch gekennzeichnet. Standardmäßig sind nur die Pflichtfelder sichtbar. Durch Anklicken des Buttons _Alle Felder aufklappen_ links vom Gruppennamen können Sie die zusätzlichen Informationen öffnen und wieder schließen. Ein Button _nach oben_ am rechten Rand des Gruppenbalkens ermöglicht den Sprung in die oberste Feldgruppe.

In der Funktionsleiste finden Sie am rechten Rand ein Button _Alle Felder aufklappen_ , mit dem Sie alle Felder in allen Gruppen öffnen bzw. wieder schließen können.

Informationen über die einzelnen Felder und Gruppen erhalten Sie, indem Sie mit dem Mauszeiger (dann mit Fragezeichen am Pfeil) auf die Feld- bzw. Gruppennamen klicken.

Weitere Informationen erhalten Sie unter folgenden Hilfepunkten:

*  [Anlegen eines neuen Objekts](#creation-of-objects-1) 
*  [Pflegen von Objekten](#maintanance-of-objects-1) 
*  [Erfassen von Adressen](#maintanance-of-adresses-1) 

<a name="hierarchy-maintenance-3"></a>

### Die Funktionsleiste für Hierarchie und Erfassung


Über die Funktionsleiste im Untermenüpunkt _Hierarchie & Erfassung_ können einzelne Funktionen zum Bearbeiten von Objekten und Adressen aufgerufen werden. Die Funktionen sind im Einzelnen:

**Neu anlegen**

Ein neues Objekt oder eine neue Adresse wird hierarchisch immer unter dem aktuellen, mit roter Schrift darstellten Objekt bzw. Adresse angelegt.

Zum [Anlegen eines neuen Objektes](#creation-of-objects-1) bzw. einer neuen Adresse können Sie einen Assistenten auswählen oder ohne Assistent weiter arbeiten. Folgende Assistenten stehen zur Verfügung:

*  [Allgemeiner Erfassungsassistent](#creation-of-objects-2) 
*  [getCapabilities Assistent](#creation-of-objects-3) 

**Vorschau und Druckansicht**

Im Fenster Detailansicht können Sie die Anordnung der Objekt- bzw. Adressinformation im Ausdruck ansehen. Die Anordnung der Information ist nicht veränderbar. Mit einem Klick auf _[Drucken]_ gelangen Sie in das Druckmenü des Betriebssystems. Verlassen Sie die Druckansicht mit dem Kreuz oben rechts in der Fensterecke.

**Objekt/Adresse/Teilbaum ausschneiden**

Um einem Objekt, einer Adresse oder einem Teilbaum einen anderen Platz in der Hierarchie des aktuellen Kataloges zuzuweisen, schneiden Sie diese zuerst aus, um sie unter ein anderes Objekt bzw. eine andere Adresse mittels der Funktion _**Einfügen**_ einzufügen.

Das zu bearbeitende Objekt bzw. die Adresse muss vor dem Ausschneiden markiert werden. Um einen Teilbaum (d.h. ein Objekt mit allen hierarchisch darunterliegenden Objekten bzw. Adressen) auszuschneiden, muss das hierarchisch oberste Objekt markiert sein. Eine Markierung aller betroffenen Objekte bei ausgeklapptem Teilbaum ist nicht möglich.

Siehe auch Funktion _**Einfügen**_ 

**Objekt/Adresse kopieren**

Ein markiertes Objekt oder eine markierte Adresse wird mit dieser Funktion in den Zwischenspeicher kopiert. Um die Kopie an die gewünschte Stelle in der Hierarchie zu bringen, nutzen Sie die Funktion _**Einfügen**_ .

**Teilbaum kopieren**

Um einen Teilbaum (d.h. ein Objekt oder eine Adresse mit allen hierarchisch darunterliegenden Objekten bzw. Adressen) zu kopieren, muss das hierarchisch oberste Objekt (bzw. die Adresse) markiert sein. Eine Markierung aller betroffenen Objekte bei ausgeklapptem Teilbaum ist nicht möglich. Um die Kopie an die gewünschte Stelle in der Hierarchie zu bringen, nutzen Sie die Funktion _**Einfügen**_ .

**Einfügen**

Markieren Sie das Objekt bzw. die Adresse, die hierarchisch über dem einzufügenden Objekt oder Teilbaum bzw. der einzufügenden Adresse steht. Die Ordnung innerhalb einer Hierarchiestufe erfolgt alphabetisch und kann durch Verschieben oder Einfügen nicht geändert werden.

**Zwischenspeichern**

Mit der Funktion sichern Sie Änderungen bzw. die Eingaben zu einem neu angelegten Objekt bzw. einer neu angelegten Adresse, ohne dass das Objekt bzw. die Adresse veröffentlicht wird, d.h. mit der Suchfunktion des Portals gefunden oder im Strukturbaum des Portals angezeigt wird. Zwischenspeichern ist auch möglich, wenn noch nicht alle Pflichtfelder ausgefüllt sind. Die Darstellung des Objektes bzw. der Adresse in der Hierarchie im linken Fenster erfolgt mit einem roten Bearbeitungs-Icon.

Um ein Objekt zu veröffentlichen, wählen Sie die Funktion _**Abschließendes Speichern**_ oder überweisen Sie es an die Qualitätssicherung.

**Rückgängig**

Die Funktion Rückgängig ist aktiv, wenn in einem Feld eine Veränderung der Eingaben vorgenommen wurde und das Feld verlassen wurde. Nach einer positiv beantworteten Rückfrage werden alle Bearbeitungen seit dem letzten Zwischenspeichern gelöscht, nicht nur die Änderungen, die im letzten bearbeiteten Feld vorgenommen wurden. Um das Objekt bzw. die Adresse auf die Version der letzten Veröffentlichung zurückzusetzen (falls es kein neu angelegtes Objekt bzw. neu angelegte Adresse ist) nutzen Sie die Funktion _**Änderungen am aktuellen Objekt/Adresse verwerfen**_ .

**Änderungen am aktuellen Objekt/Adresse verwerfen**

Mit dieser Funktion können Objekte und Adressen, die schon veröffentlicht wurden, auf den Stand zurückgesetzt werden, den sie bei der Veröffentlichung hatten.

Die Bearbeitungen, auch die mit der Funktion Zwischenspeichern gesicherten, werden zurückgesetzt und gelöscht. Um aktuelle Bearbeitungen auf den Stand der letzten Bearbeitung zurückzusetzen, nutzen Sie die Funktion _**Zwischenspeichern**_ .

**An QS überweisen**

Der InGridEditor kann in den Katalogeigenschaften so eingestellt werden, dass Objekte und Adressen nach dem Anlegen bzw. dem Bearbeiten von einer weiteren Bearbeiterin oder einem weiteren Bearbeiter, dem Qualitätssichernden, geprüft werden müssen, bevor sie veröffentlicht werden.

Ist diese Funktionalität (die sogenannte [Workflow-Kontrolle](#quality-assurance-0) ) aktiviert, so kann ein Objekt vom Bearbeiter nicht direkt abschießend gespeichert werden, sondern muss an den Qualitätssichernden überwiesen werden. Ein _Abschließendes Speichern_ kann in diesem Fall nur von dem Qualitätssichernden vorgenommen werden.

Diese Funktionalität steht nur dann zur Verfügung, wenn die [Workflow-Kontrolle](#quality-assurance-0) aktiviert ist und sie **nicht** Qualitätssichernder sind.

**An Bearbeiter rücküberweisen**

Der InGridEditor kann in den Katalogeigenschaften so eingestellt werden, dass Objekte und Adressen nach dem Anlegen bzw. dem Bearbeiten von einer weiteren Bearbeiterin oder einem weiteren Bearbeiter, dem Qualitätssichernden, geprüft werden müssen, bevor sie veröffentlicht werden.

Ist diese Funktionalität (die sogenannte [Workflow-Kontrolle](#quality-assurance-0) ) aktiviert, so kann ein Objekt vom Bearbeiter nicht direkt abschießend gespeichert werden, sondern muss an den Qualitätssichernden überwiesen werden. Ein _Abschließendes Speichern_ kann in diesem Fall nur von dem Qualitätssichernden vorgenommen werden. Ist der Qualitätssichernde der Meinung, dass ein Objekt oder eine Adresse noch einmal von dem Bearbeiter überarbeitet werden muss, so kann er sie _An den Bearbeiter rücküberweisen_ .

Diese Funktionalität steht nur dann zur Verfügung, wenn die [Workflow-Kontrolle](#quality-assurance-0) aktiviert ist und Sie Qualitätssichernder sind.

**Abschließendes Speichern**

Diese Funktion steht Ihnen nur als Qualitätssichernder bzw. in Katalogen ohne aktivierter [Workflow-Kontrolle](#quality-assurance-0) zur Verfügung.

Nach Ausführen der Funktion Abschließendes Speichern ist das Objekt veröffentlicht und damit in der Suchfunktion bzw. dem Strukturbaum des Portals recherchierbar. Um ein Objekt bzw. eine Adresse erfolgreich zu speichern, müssen alle Pflichtfelder ausgefüllt sein. Bei nicht ausgefüllten Pflichtfeldern oder fasch ausgefüllten Feldern werden die Feldnamen rot angezeigt. Um trotz der Fehlermeldung die Bearbeitung sichern zu können, wählen Sie die Funktion _**Zwischenspeichern**_ .

**Als gelöscht markieren**

Der InGridEditor kann in den Katalogeigenschaften so eingestellt werden, dass Objekte und Adressen erst von einer weiteren Bearbeiterin oder einem weiteren Bearbeiter, dem Qualitätssichernden, geprüft werden müssen, bevor sie endgültig gelöscht werden.

Diese Funktionalität steht nur dann zur Verfügung, wenn die [Workflow-Kontrolle](#quality-assurance-0) aktiviert ist und Sie **nicht** Qualitätssichernder sind.

Das Objekt oder die Adresse wird zum Löschen markiert und dem Qualitätssichernden zum endgültigen Löschen überwiesen.

**Ausgewähltes Objekt/Teilbaum löschen**

Diese Funktion steht Ihnen nur als Qualitätssichernder bzw. in Katalogen ohne aktivierte [Workflow-Kontrolle](#quality-assurance-0) zur Verfügung.

Nach einer Sicherheitsabfrage wird das markierte Objekt bzw. der markierte Teilbaum endgültig gelöscht.

**Änderungen anzeigen**

In einem gesonderten Dialog-Fenster _Vergleichsansicht_ können Sie die Informationen vor der Bearbeitung eines Objektes bzw. einer Adresse ansehen (Ausgangsversion) und nach der Bearbeitung (Bearbeitungsversion). In der Differenzansicht sind die gelöschten Daten in rot dargestellt. Die neu eingefügten Daten werden grün angezeigt.

**Kommentar ansehen/hinzufügen**

Zu jedem Objekt und zu jeder Adresse können Kommentare verfasst werden. Die Kommentare werden nicht veröffentlicht und sind in der Druckansicht nicht aufgeführt.

Über den Klick auf den Button wird das [Kommentarfenster](#maintanance-of-objects-10) geöffnet.

## Neuanlegen von Objekten


<a name="creation-of-objects-1"></a>

### Anlegen eines neuen Objekts


Ein neues Objekt kann entweder über die Schaltfläche _**Neu anlegen**_ in der Funktionsleiste oder über das Kontextmenü der rechten Maustaste im Strukturbaum angelegt werden. Es wird in der Hierarchie immer unterhalb des aktuellen Objektes platziert. Wollen Sie ein Objekt auf der obersten Hierarchieebene anlegen, so wählen Sie die Ebene _Objekte_ im Strukturbaum aus und legen dann ein neues Objekt an.

Nach Wahl der Funktion _**Neu anlegen**_ wird ein Dialog angezeigt, über den sie entweder den [Allgemeinen Erfassungsassistenten](#creation-of-objects-2) oder den [getCapabilties Erfassungsassistenten](#creation-of-objects-3) zur Unterstützung der Befüllung des neuen Objektes auswählen können. Über _**Assistent starten**_ führen Sie den ausgewählten Assistenten aus.

Wählen Sie _**Ohne Assistent weiter**_ , um ein leeres neues Objekt zu öffnen. Standardmäßig werden für ein leeres Objekt sowohl die Ansprechpartneradresse und der Raumbezug als auch die Thesaurusbegriffe des in der Hierarchie übergeordneten Objektes übernommen.

<a name="creation-of-objects-2"></a>

### Allgemeiner Erfassungsassistent


Der Allgemeine Erfassungsassistent ist behilflich bei der Erstellung eines Metadatenobjektes zu einer Internetseite. Die Seite wird vom [Semantic Network Service (SNS)](http://www.semantic-network.de/) analysiert und die Felder _Titel_ , _Beschreibung_ , _Schlagworte_ , _Raumbezug_ und _Zeitbezug_ eines Metadatenobjektes werden soweit möglich automatisiert gefüllt. Der Bearbeiter kann die Einträge anschließend verbessern und vervollständigen.

Tragen Sie die URL der zu beschreibenden Seite in das freie Feld ein.

Geben Sie die _Anzahl der vom SNS zu analysierenden Wörter_ an, um zu langwierige Suchläufe zu verhindern.

Ggf. gibt es in den Metatags der zu beschreibenden Internetseite eine Beschreibung. Diese kann optional übernommen werden.

Ebenfalls optional können Sie eine selbstbestimmbare Anzahl an Worten aus der Internetseite übernehmen lassen.

Beide Informationen werden im endgültigen Metadatenobjekt im Feld Beschreibung gespeichert.

Mit _**Start**_ wird die Internetseite analysiert und die Informationen in einer Vorschau angezeigt.

Wenn das Ergebnis der Erfassung mit dem Assistenten nicht Ihren Erwartungen entspricht, können Sie die Einstellungen des Assistenten ändern und führen ihn mit _**Start**_ noch einmal aus.

Um die Informationen endgültig in die Felder eines Objektes einzutragen, haken Sie jede Information die übernommen werden soll an. Alle nicht angehakten Informationen werden verworfen. Führen Sie anschließend die Funktion _**Übernehmen**_ am Ende der Seite aus. Der Assistent wird dann geschlossen und Sie können das Objekt im InGridEditor weiter bearbeiten und speichern.

Mit der Funktion _**Abbrechen**_ am Ende der Seite schließen Sie den Assistenten und starten mit einem leeren Objekt.

<a name="creation-of-objects-3"></a>

### getCapabilties Assistent


Der _getCapabilties Assistent_ unterstützt die Erfassung von Services in der Objektklasse _Geodatendienst_ .

Hierzu geben Sie die getCapability-URL des Dienstes an.

Der Assistent fragt den Dienst über diese URL ab und trägt alle in der getCapability verfügbaren Informationen in das Metadaten-Objekt ein. Dies sind Informationen wie _Titel_ und _Beschreibung_ aber z.B. auch die vom Dienst zur Verfügung gestellten _Operationen_ .

Es werden die folgenden Dienste unterstützt:

* WMS
* WFS
* WCS
* WCTS
* CSW

Mit _**Start**_ wird der Assistent gestartet, die Informationen vom Service abgerufen und ein neues Objekt mit den erhaltenen Informationen erstellt.

Mit der Funktion _**Abbrechen**_ am Ende der Seite schließen Sie den Assistenten und starten mit einem leeren Objekt.

## Pflege von Objekten


<a name="maintanance-of-objects-1"></a>

### Aufbau der Objektoberfläche


Die Objekte werden im rechten Fenster des Untermenüpunkts _Hierarchie & Erfassung_ gepflegt.

Im oberen Teil des Fensters werden farbig hinterlegt die Kopfinformationen _Objektname_ , _Objektklasse_ und _Verantwortlicher_ sowie die Statusinformationen _Erstellt am_ , _Geändert am_ , _Von_ und _Status_ zum Objekt angezeigt. Diese Anzeige ist immer sichtbar.

Die weiteren Informationen sind zu folgenden Gruppen zusammengefasst:

* Allgemeines
* Fachbezug
* Datenqualität
* Raumbezug
* Zeitbezug
* Zusatzinformation
* Verfügbarkeit
* Verschlagwortung
* Verweise

Die Gruppen sind für alle Objektklassen identisch mit Ausnahme des _Fachbezugs_ , der für jede Objektklasse unterschiedlich ist und der _Datenqualität_ , die nur für die Objektklasse _Geo-Information/Karte_ definiert ist. Die Objektklasse _Organisationseinheit/Fachaufgabe_ verfügt weder über einen _Fachbezug_ noch über die Gruppe _Verfügbarkeit_ .

Die einzelnen Gruppen sind durch Balken optisch von einander abgegrenzt. Standardmäßig werden nur die Pflichtfelder angezeigt. Sie sind durch fettgedruckte Überschriften und ein Sternchen * gekennzeichnet. Ein Objekt lässt sich nur dann endgültig speichern bzw. an die Qualitätssicherung überweisen, wenn alle Pflichtfelder gefüllt sind. Wird eine Speicherung oder Überweisung aufgrund fehlender Pflichteinträge abgelehnt, werden die Überschriften der entsprechenden Felder rot gekennzeichnet, um den Nutzer auf die noch benötigten Einträge aufmerksam zu machen.

Durch Anklicken des Icons „ _Alle Felder aufklappen_ “ links vom Gruppennamen werden auch alle optional zu füllenden Felder angezeigt. Ein erneutes Klicken auf das Icon blendet diese Felder wieder aus. In der Funktionsleiste finden Sie am rechten Rand ein Icon „ _Alle Felder aufklappen_ “, mit dem Sie alle Felder in allen Gruppen ein- bzw. wieder ausblenden können.

Am rechten Rand der die Gruppen trennenden Balken befindet sich ein Icon „ _nach oben_ “. Es ermöglicht den Sprung in die oberste Feldgruppe.

Hilfetexte zu den einzelnen Feldern und Gruppen erhalten Sie, indem Sie mit dem Mauszeiger (dann mit Fragezeichen am Pfeil) auf die Feld- bzw. Gruppennamen klicken.

Zum Füllen von Textfeldern klicken Sie einfach in das Feld. Auswahllisten werden über den Pfeil an der rechten Seite des Feldes aufgeklappt. Für Tabellen gibt es aufgrund der zusätzlichen Funktionalität Sonderregelungen für die Bedienung (siehe auch [Besonderheiten bei Tabellen](#editor-design-6) ). Einige Felder können nur über eigene Dialoge gefüllt werden. Die Dialoge sind in den folgenden Unterkapiteln beschrieben.

<a name="maintanance-of-objects-2"></a>

### Adresse hinzufügen


Der InGridCatalog unterscheidet zwischen Metadaten-Objekten und Adressen. Beide werden in separaten Teilbäumen des Kataloges gepflegt. Dies hat den Vorteil, dass eine einmal eingepflegte Adresse in beliebig vielen Objekten referenziert werden kann, ohne dass weiterer Erfassungsaufwand für Adressangaben entsteht. Ebenso können Adressänderungen an einer Stelle in der Adressverwaltung geändert werden, ohne dass alle Objekte, die sie referenzieren, bearbeitet werden müssen.

Über _Adresse hinzufügen_ wird eine Referenz auf eine bereits im Teilbaum _Adressen_ erstellte Adresse hergestellt.

Die Adresse kann entweder über eine _Direkte Suche_ oder den _Hierarchiebaum_ gefunden und ausgewählt werden.

In der _**Direkten Suche**_ können Sie entweder nach der Einheit bzw. Institution, dem Nachnamen, dem Vornamen oder einer Kombination aus den Feldern suchen. Es wird immer eine Suche nach einer Teilzeichenkette durchgeführt. Werden Zeichenketten in mehreren Feldern angegeben, wird eine Adresse nur dann gefunden, wenn alle Zeichenketten übereinstimmen (UND-Verknüpfung).

Die gefundenen Adressen werden in der _Trefferliste_ angezeigt. Durch einfaches Klicken auf einen Eintrag wird dieser markiert. Durch ein anschließendes Klicken auf _**Übernehmen**_ wird die markierte Referenz auf die Adresse in das Objekt übernommen.

Im _**Hierarchiebaum**_ können Sie in der üblichen Weise navigieren. Ein einfacher Klick auf eine Adresse markiert diese. Durch ein anschließendes Klicken auf _**Übernehmen**_ wird die markierte Referenz auf die Adresse in das Objekt übernommen.

<a name="maintanance-of-objects-3"></a>

### Der Geothesaurus-Navigator


Der InGridEditor nutzt den Geo-Thesaurus Umwelt (GTU). Er wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) des Umweltbundesamtes zur Verfügung gestellt.

Ähnlich wie das Ortsverzeichnis eines Atlanten beschreibt der Geo-Thesaurus Umwelt (GTU) die Namen von Gemeinden, Flüssen, Bergen, Landschaften und anderen geografischen Objekten in Deutschland. Dabei gibt der GTU die genaue Schreibweise ebenso wie die geografische Position (Koordinaten) eines Orts an.

Der GTU beschränkt sich aus praktischen Gründen auf Orte, die üblicherweise auf Karten ab dem Maßstab 1:250.000 verzeichnet sind. Derzeit sind ca. 50.000 geografische Objekte in ihm verzeichnet.

Geben Sie in das Feld _**Räumliche Einheit festlegen**_ den geografischen Begriff (oder einen Teil des Begriffs) ein, den Sie suchen. Nach dem Klicken auf die Schaltfläche _**In Geo-Thesaurus suchen**_ wird nach diesem Begriff im SNS gesucht. Es wird eine Suche nach einer Teilzeichenkette durchgeführt.

Die Ergebnisse werden unter _**Auswahl**_ gelistet. Sie können einen oder mehrere Begriffe anhaken und über die Schaltfläche _**Übernehmen**_ als Raumbezug zu dem Objekt hinzufügen. Für die geografischen Begriffe, für die Koordinaten hinterlegt sind (wie z.B. für die administrativen Einheiten), werden auch die Koordinaten in das Objekt übernommen.

Sie können im Geo-Thesaurus navigieren, indem Sie auf einen der unter _**Auswahl**_ angezeigten Begriffe klicken. Es werden dann alle zugehörigen geografischen Begriffe angezeigt.

<a name="maintanance-of-objects-4"></a>

### Raumbezug hinzufügen


In diesem Dialog können Sie einen freien Raumbezug angeben. In dem Feld _Freier Raumbezug_ können Sie den geografischen Namen des Raumbezugs angeben. Die Rechts- und Hochwerte können in dem Koordinatensystem angegeben werden, das aus der Auswahlliste _Koordinatensystem_ ausgewählt wird.

Mit einem Klick auf die Schaltfläche _**Hinzufügen**_ werden die Angaben in das Feld _Freier Raumbezug_ des Objektes übernommen.

Über den Link _erben_ ist es möglich, die freien Raumbezüge des übergeordneten Objektes zu erben. Vorhandene Raumbezüge (über den Namen identifiziert) werden nicht überschrieben. Diese Funktion steht nur Unterobjekten zur Verfügung!

<a name="maintanance-of-objects-5"></a>

### Der Verschlagwortungsassistent


Zur fachlichen Verschlagwortung kann der InGridCatalog sowohl den deutschen Umweltthesaurus UMTHES als auch den europäischen Umweltthesaurus GEMET nutzen (siehe auch [Der Thesaurus-Navigator](#maintanance-of-objects-6) ).

Aus den bereits ausgefüllten Textfeldern wird eine Vorschlagsliste für Thesaurusbegriffe zur Verschlagwortung erstellt.

Sie können durch Anklicken einen oder mehrere (Strg-Mausklick) Begriffe auswählen und sie über die Schaltfläche „>“ zu der Liste _Übernehmen_ hinzufügen. Über die Schaltfläche „>>“ können alle Begriffe in die Liste übernommen werden. Die Schaltfläche „<“ entfernt die markierten Begriffe wieder aus der Liste und die Schaltfläche „<<“ entfernt alle Begriffe aus der Liste.

Durch einen Klick auf die Schaltfläche _Übernehmen_ werden alle Begriffe aus der Liste _Übernehmen_ dem Objekt als Schlagworte hinzugefügt.

<a name="maintanance-of-objects-6"></a>

### Der Thesaurus-Navigator


Ein Thesaurus ist eine hierarchisch strukturierte begrenzte Liste von Bezeichnungen, die der natürlichen Sprache entnommen sind. Er soll es ermöglichen, die Inhalte (Begriffe, Vorgänge, Gegenstände) der umweltrelevanten Fachgebiete mit einheitlich benutzten Bezeichnungen wiederzugeben bzw. zu umschreiben. Eine einheitliche Beschreibung ermöglicht wiederum eine gezielte Suche mit weitgehend vollständigem Suchergebnis.

Der InGridCatalog (IGC) kann folgende Thesauri verwenden:

* den Umweltthesaurus (UMTHES) des Umweltbundesamtes in Dessau-Rosslau. Er enthält mehr als 30.000 Fachbegriffe aus dem Themengebiet "Umwelt".
Der UMTHES wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) vom Umweltbundesamt zur Verfügung gestellt.
* den europäischen Umweltthesaurus [GEMET (GEneral Multilingual Environmental Thesaurus)](http://www.eionet.europa.eu/gemet) .

**Hierarchiebaum**

Um den optimalen Suchbegriff im Thesaurus zu finden, können Sie sich über den Hierarchiebaum von den Oberbegriffen zu den spezifischeren Ebenen leiten lassen. Die Bedienung des Hierarchiebaumes entspricht der üblichen Bedienung von Baumstrukturen, das heißt über einen Klick auf die Symbole + bzw. – kann die Struktur auf- bzw. wieder zugeklappt werden. Ein Klick auf einen Begriff färbt diesen **rot** ein. Er kann dann über die Schaltfläche _Hinzufügen_ zur _Liste der Deskriptoren_ hinzugefügt werden.

 **Achtung** : Begriffe die sich durch Anklicken nicht rot einfärben, sind nur Ordnungsbegriffe und keine Deskriptoren. Sie können daher nicht der _Liste der Deskriptoren_ hinzugefügt werden.

**Ergebnisliste**

Alternativ zum Hierarchiebaum können Sie einen Thesaurusbegriff auch über eine Suche finden. Hierzu geben Sie einen Suchbegriff in das Feld _Suche nach Deskriptoren und Ordnungsbegriffen_ ein. Nach Absenden der Suche über _In Thesaurus suchen_ werden alle gefundene Thesaurusbegriffe in der Ergebnisliste angezeigt.

Ein Klick auf einen Begriff färbt diesen **rot** ein. Er kann dann über die Schaltfläche _Hinzufügen_ zur _Liste der Deskriptoren_ hinzugefügt werden. Ein Klick auf das Symbol vor dem Begriff zeigt ihn im hierarchischen Kontext an. Dazu wird in den Hierarchiebaum (siehe oben) gewechselt.

**Liste der Deskriptoren übernehmen**

Über den Hierarchiebaum bzw. die Suche nach Deskriptoren können Sie Thesaurusbegriffe finden und der _Liste der Deskriptoren_ zuordnen (siehe oben). Wenn Sie alle Thesaurusbegriffe, die Sie dem Objekt zuordnen wollen, zusammengestellt haben, können Sie sie über die Schaltfläche _Übernehmen_ zu den bereits im Objekt vorhandenen Thesaurusbegriffen hinzufügen.

<a name="maintanance-of-objects-7"></a>

### Verweis anlegen/bearbeiten


Dieser Dialog kann entweder aus der Feldgruppe _Verweise_ oder aus einem der speziellen Felder heraus aufgerufen werden, die Verweise unterstützen (wie z.B. das Feld _Datengrundlage_ der Objektklasse _Geoinformation/Karte_ ).

Wird der Verweis-Dialog in der Rubrik _Verweise_ geöffnet, so kann über das Dropdown-Menu (ausklappbar über den Pfeil an der rechten Seite des Feldes) aus einer Auswahlliste ein Eintrag gewählt werden, es sind dann auch freie Einträge für den Verweistyp möglich. Wurde der Dialog von einem Feld in einer anderen Rubrik (z.B. das Feld _Basisdaten/Verweise_ in der Rubrik _Fachbezug_ ) geöffnet, so wird automatisch der betreffende Feldname eingetragen und angezeigt (z.B. _Basisdaten_ ).

Es gibt zwei mögliche Verweisziele:

* Querverweise zwischen Objekten (Verweisziel: Objekt)
* Verweis auf Informationen im Internet (Verweisziel: URL)

**Verweisziel: Objekt**

Über dieses Verweisziel werden Querverweise zwischen Objekten definiert. Über [Objekt auswählen](#maintanance-of-objects-8) wird das Zielobjekt gewählt. Die Pflichtangaben _Objektname_ und _Objektklasse_ werden automatisch mit den entsprechenden Daten des ausgewählten Objekts gefüllt.

Optional können Sie eine _Erläuterung_ zu dem Verweis angeben.

**Verweisziel: URL**

Über dieses Verweisziel wird ein Verweis zu einer externen Datenquelle im Internet definiert. Verpflichtend müssen Sie eine _Bezeichnung des Verweises_ und die _Internet-Adresse (URL)_ angeben.

Optional können Sie eine _Erläuterung_ zu dem Verweis angeben.

 **Achtung:** Die Angabe _URL-Typ_ ist ebenfalls optional, wird bei der Darstellung des Metadatenobjektes über das Portal jedoch nicht angezeigt.

Besitzt das Objekt ein übergeordnetes Objekt, so besteht ebenfalls die Möglichkeit, die Verweise von diesem zu erben. Dazu klickt man auf den Link _erben_ und es werden alle übergeordneten Verweise in das geöffnete Objekt kopiert. Vorhandene Einträge werden dabei nicht überschrieben!

<a name="maintanance-of-objects-8"></a>

### Objekt auswählen


Dieser Dialog wird aus dem Dialog _Verweis anlegen/bearbeiten_ heraus aufgerufen, um einen Verweis auf ein Objekt zu erstellen. Über ihn kann man das Objekt auswählen, auf das verwiesen werden soll.

Klicken Sie durch die Struktur der Objekte und wählen Sie das gewünschte Objekt durch einen Klick auf den Objektnamen aus. Das ausgewählte Objekt wird **rot** dargestellt.

Mit einem Klick auf die Schaltfläche _Zuweisen_ wird das Objekte als Ziel des Verweises übernommen und das Dialogfenster geschlossen.

<a name="maintanance-of-objects-9"></a>

### Operation hinzufügen/bearbeiten


Dieser Dialog tritt nur im Fachbezug der Objektklasse _Geodatendienst_ auf. Über ihn können Sie die Operationen angeben, über die Ihr Dienst verfügt.

Besonders wichtig ist die Angabe der unterstützten Operationen bei OGC-konformen Web-Diensten, da insbesondere die getCapabilities-Operation (z.B. bei WMS oder WFS) zur Darstellung des Dienstes im Karten-Viewer genutzt wird.

Über den Link _Operation hinzufügen_ können neue Operationen hinzugefügt werden.

Sie können eine bestehende Operation bearbeiten, indem Sie auf den entsprechenden Eintrag in der Liste mit der rechten Maustaste klicken und die Funktion _Zeile bearbeiten_ aus dem Kontextmenü auswählen. Es öffnet sich ein separater Dialog. Durch das Anklicken der Schaltfläche _Übernehmen_ übernehmen Sie die geänderten Daten in die Liste.

Sie können eine Operation löschen, indem Sie die Funktion _Löschen_ aus dem Kontextmenü auswählen.

 **Achtung:** Der Name der Operation ist abhängig von der im Fachbezug des Objekts ausgewählten _Art des Dienstes_ . Nur wenn als Art des Dienstes _Sonstige Dienste_ oder _Dienste zum Abrufen von Geodatendiensten_ ausgewählt wurde, kann der Name der Operation frei gewählt werden. In allen anderen Fällen stehen die über das OGC für den jeweils gewählten Dienst definierten Operationen zur Auswahl.

**Um die volle Funktionalität des InGridCatalogs auszunutzen, sollte für jeden OGC-Dienst mindestens die getCapabilities-Operation eingetragen werden.**

<a name="maintanance-of-objects-10"></a>

### Das Kommentarfenster


Klicken Sie in das untere Fenster und schreiben Sie den Kommentar. Mit der _**Funktion Kommentar**_ eintragen übertragen Sie den Kommentar in die oben aufgeführte Liste. Das Datum und der Nutzername werden automatisch eingetragen.

Kommentare können über das Kontextmenü der rechten Maustaste wieder aus der Tabelle gelöscht werden.

Mit einem Klick auf das Kreuz oben rechts in der Fensterecke verlassen Sie das Kommentarfenster und kehren zum aktuellen Objekt bzw. zur aktuellen Adresse zurück.

## Pflege von Adressen


<a name="maintanance-of-adresses-1"></a>

### Aufbau der Objektoberfläche


Die Adressen werden im rechten Fenster des Untermenüpunktes _Hierarchie & Erfassung_ gepflegt.

Im oberen Teil des Fensters werden farbig hinterlegt die Kopfinformationen _Adresstitel_ , _Adresstyp_ und _Verantwortlicher_ sowie die Statusinformationen _Erstellt am_ , _Geändert am_ , _Von_ und _Status_ zu der Adresse angezeigt. Diese Anzeige ist immer sichtbar.

Darunter wird - grau hinterlegt - je nach Adresstyp der Name der Institution, der Einheit oder der Person angezeigt.

In der Auswahlbox unter "Veröffentlichung" lässt sich die Sichtbarkeit dieser Adresse einstellen. Während die Auswahl "Internet" keine Einschränkungen besitzt, wird die Adresse bei "Intranet" oder "amtsintern" nicht im Internet veröffentlicht.

Bei dem Adresstyp "Person" gibt es zusätzlich die Besonderheit "Daten nicht anzeigen" als Checkbox. Hierdurch lassen sich die Daten einer Adresse verstecken und stattdessen, die der übergeordneten Adresse verwendet.

Die weiteren Informationen sind zu folgenden Gruppen zusammengefasst:

* Adresse und Aufgaben
* Verschlagwortung
* Zugeordnete Objekte

Die einzelnen Gruppen sind durch Balken optisch voneinander abgegrenzt. Standardmäßig werden nur die Pflichtfelder angezeigt. Sie sind durch fettgedruckte Überschriften und ein Sternchen * gekennzeichnet. Eine Adresse lässt sich nur dann endgültig speichern bzw. an die Qualitätssicherung überweisen, wenn alle Pflichtfelder gefüllt sind. Wird eine Speicherung oder Überweisung aufgrund fehlender Pflichteinträge abgelehnt, werden die Überschriften der entsprechenden Felder rot gekennzeichnet, um den Nutzer auf die noch benötigten Einträge aufmerksam zu machen.

Durch Anklicken des Buttons _Alle Felder aufklappen_ links vom Gruppennamen werden auch alle optional zu füllenden Felder angezeigt. Ein erneutes Klicken auf den Button blendet diese Felder wieder aus. In der Funktionsleiste finden Sie am rechten Rand einen Button _Alle Felder aufklappen_ , mit dem Sie **alle** Felder in allen Gruppen ein- bzw. wieder ausblenden können.

Am rechten Rand der die Gruppen trennenden Balken befindet sich einen Button _nach oben_ . Es ermöglicht den Sprung in die oberste Feldgruppe.

Hilfetexte zu den einzelnen Feldern und Gruppen erhalten Sie, indem Sie mit dem Mauszeiger (dann mit Fragezeichen am Pfeil) auf die Feld- bzw. Gruppennamen klicken.

Zum Füllen von Textfeldern klicken Sie einfach in das Feld. Auswahllisten werden über den Pfeil an der rechten Seite des Feldes aufgeklappt. Für Tabellen gibt es aufgrund der zusätzlichen Funktionalität Sonderregelungen für die Bedienung (siehe auch [Besonderheiten bei Tabellen](#editor-design-6) ). Das Feld _Optionale Schlagworte_ kann auch über einen eigenen Dialog gefüllt werden, der im Kapitel [Der Thesaurus-Navigator](#maintanance-of-adresses-3) beschrieben ist.

<a name="maintanance-of-adresses-2"></a>

### Anlegen einer neuen Adresse


Eine neue Adresse kann entweder über die Schaltfläche _Neu anlegen_ in der Funktionsleiste oder über das Kontextmenü der rechten Maustaste im Strukturbaum angelegt werden. Es wird in der Hierarchie immer unterhalb der aktuellen Adresse platziert. Wollen Sie eine Adresse auf der obersten Hierarchieebene anlegen, so wählen Sie die Ebene _Adressen_ im Strukturbaum aus und legen dann eine neue Adresse an.

Über ein Dialogfenster Adresse anlegen wählen Sie zuerst den Adresstyp der neu anzulegenden Adresse aus. Welche Adresstypen Ihnen zur Neuanlage zur Verfügung stehen, hängt von dem Adresstyp der Adresse ab, unter der sie die neue Adresse anlegen wollen. Danach öffnet sich die entsprechende Maske mit auszufüllenden Feldern. Standardmäßig wird als Verantwortlicher der Verantwortliche aus der übergeordneten Adresse sowie dessen Eintrag in das Feld Kommunikation und die Thesaurusbegriffe übernommen. Wollen Sie eine „freie Adresse“, also ein Adresse ohne übergeordnete Institution und Einheit anlegen, so wählen sie die Ebene _freie Adresse_ im Strukturbaum aus und legen darunter eine neue Adresse an.

<a name="maintanance-of-adresses-2a"></a>

### Angaben aus übergeordneter Adresse übernehmen


Anstatt die Adressinformationen per Hand eingeben zu müssen, ist es möglich, die Informationen aus der übergeordneten Adresse zu erhalten. Dabei werden die Felder _Straße/Hausnummer_ , _PLZ_ , _Ort_ , _Postfach_ , _PLZ (Postfach)_ und _Land_ überschrieben.

Außerdem ist es über den Strukturbaum möglich, ausgehend von einer Adresse, die Adressinformationen auf alle Unteradressen zu verteilen. Dazu ruft man das Kontextmenü einer Adresse im Hierarchiebaum auf und wählt den Eintrag _Adressangaben in nachgeordnete Adressen übernehmen_ . Nach einer Sicherheitsabfrage werden die Änderungen an den Adressen vorgenommen.

<a name="maintanance-of-adresses-3"></a>

### Der Thesaurus-Navigator


Ein Thesaurus ist eine hierarchisch strukturierte begrenzte Liste von Bezeichnungen, die der natürlichen Sprache entnommen sind. Er soll es ermöglichen, die Inhalte (Begriffe, Vorgänge, Gegenstände) der umweltrelevanten Fachgebiete mit einheitlich benutzten Bezeichnungen wiederzugeben bzw. zu umschreiben. Eine einheitliche Beschreibung ermöglicht wiederum eine gezielte Suche mit weitgehend vollständigem Suchergebnis.

Der InGridCatalog (IGC) kann folgende Thesauri verwenden:

* den Umweltthesaurus (UMTHES) des Umweltbundesamtes in Dessau-Rosslau. Er enthält mehr als 30.000 Fachbegriffe aus dem Themengebiet "Umwelt".
Der UMTHES wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) vom Umweltbundesamt zur Verfügung gestellt.
* den europäischen Umweltthesaurus [GEMET (GEneral Multilingual Environmental Thesaurus)](http://www.eionet.europa.eu/gemet) .

**Hierarchiebaum**

Um den optimalen Suchbegriff im Thesaurus zu finden, können Sie sich über den Hierarchiebaum von den Oberbegriffen zu den spezifischeren Ebenen leiten lassen. Die Bedienung des Hierarchiebaumes entspricht der üblichen Bedienung von Baumstrukturen, das heißt über einen Klick auf die Symbole + bzw. – kann die Struktur auf bzw. wieder zugeklappt werden. Ein Klick auf einen Begriff färbt diesen **rot** ein. Er kann dann über die Schaltfläche _Hinzufügen_ zur _Liste der Deskriptoren_ hinzugefügt werden.

 **Achtung** : Begriffe die sich durch Anklicken nicht rot einfärben, sind nur Ordnungsbegriffe und keine Deskriptoren. Sie können daher nicht der _Liste der Deskriptoren_ hinzugefügt werden.

**Ergebnisliste**

Alternativ zum Hierarchiebaum können Sie einen Thesaurusbegriff auch über eine Suche finden. Hierzu geben Sie einen Suchbegriff in das Feld _Suche nach Deskriptoren und Ordnungsbegriffen_ ein. Nach Absenden der Suche über _In Thesaurus suchen_ werden alle gefundene Thesaurusbegriffe in der Ergebnisliste angezeigt.

Ein Klick auf einen Begriff färbt diesen **rot** ein. Er kann dann über die Schaltfläche _Hinzufügen_ zur _Liste der Deskriptoren_ hinzugefügt werden. Ein Klick auf das Symbol vor dem Begriff zeigt ihn im hierarchischen Kontext an. Dazu wird in den Hierarchiebaum (siehe oben) gewechselt.

**Liste der Deskriptoren übernehmen**

Über den Hierarchiebaum bzw. die Suche nach Deskriptoren können Sie Thesaurusbegriffe finden und der _Liste der Deskriptoren_ zuordnen (siehe oben). Wenn Sie alle Thesaurusbegriffe, die Sie der Adresse zuordnen wollen, zusammengestellt haben, können Sie sie über die Schaltfläche _Übernehmen_ zu den bereits in der Adresse vorhandenen Thesaurusbegriffen hinzufügen.

## Recherche


<a name="search-1"></a>

### Suche


Über den Untermenüpunkt _Suche_ der Recherche können Sie Objekte oder Adressen mit Hilfe eines Stichwortes suchen, ohne deren Positionen in der Kataloghierarchie zu kennen.

Über die Karteireiter können Sie auswählen, ob Sie in _Adressen_ oder in _Objekten_ des Kataloges suchen wollen.

Tragen Sie einen beliebigen Suchbegriff in die Eingabezeile ein und starten Sie die Recherche über die Schaltfläche _Suchen_ .

In der Trefferliste werden alle gefundenen Objekte bzw. Adressen angezeigt und können durch einen einfachen Mausklick auf die entsprechende Zeile zur Bearbeitung aufgerufen werden. Nach dem Anklicken wird das entsprechende Objekt bzw. die entsprechende Adresse unter dem Menüpunkt _Hierarchie und Erfassung_ geöffnet. Sie können zur _Trefferliste_ zurückkehren, indem Sie wieder den Menüpunkt _Recherche_ anwählen.

Wenn Sie mit der Schlagwortsuche nur ungenaue oder einfach zu viele Treffer erhalten, können Sie die Suche mit der _Erweiterten Suche_ hinsichtlich _Thema_ , _Raum_ und _Zeit_ über die Wahl des Karteireiters weiter eingrenzen. Die _erweiterte Suche_ unterscheidet sich je nach dem, ob Sie nach _Objekten_ oder _Adressen_ suchen.

 **Hinweis:** Mit der Funktion _Zurücksetzen_ werden alle Eingaben unter allen Karteireitern gelöscht und es gelten wieder die Standardeinstellungen.

**Erweiterte Suche Objekte**

**Thema: Suchmodus**

Wenn Sie mehrere Suchbegriffe eingegeben haben, wird standardmäßig mit UND-Verknüpfung gesucht, d.h. die Suchbegriffe müssen alle im Objekt vorkommen, damit es als Treffer gewertet wird. Über das Auswahlfenster können Sie diese Einstellung ändern, so dass alle Objekte Treffer sind, in denen einer der Suchbegriffe gefunden wird (ODER-Verknüpfung).

Standardmäßig wird nach Teilzeichenketten gesucht. Wenn Sie also nach ‚Wald’ suchen, werden auch Objekte, die den Begriff ‚Waldschäden’ enthalten, gefunden. Die Suche kann aber auch auf „ _Ganzes Wort_ “ eingeschränkt werden, also darauf, dass nur noch Objekte gefunden werden, die den Suchbegriff als einzelnes Wort enthalten.

**Thema: Objektklassen**

Die Objekte sind in Objektklassen eingeteilt. Standardmäßig wird in allen Objektklassen gesucht. Über diese Einstellung kann die Suche auf einzelne Objektklassen beschränkt werden.

Die Schaltfläche _Keine auswählen_ entfernt alle Häkchen. Die Schaltfläche _Alle auswählen_ setzt ein Häkchen vor alle Objektklassen.

**Thema: Fachwörterbuch**

Sie können auch gezielt nach Begriffen aus dem Fachwörterbuch, also dem UMTHES, dem Umweltthesaurus des Umweltbundesamtes, oder dem GEMET suchen.

Hierzu geben sie unter _Thema / Fachwörterbuch_ einen Begriff ein. Über die Schaltfläche _In Thesaurus suchen_ erhalten Sie die zu diesem Begriff im Thesaurus bereitgestellten Thesaurus-Begriffe. Sie werden unter _Ähnliche Begriffe_ angezeigt.

Sie können einen oder mehrere Begriffe über die Kontrollkästchen anwählen und über die Schaltfläche _Übernehmen_ der Liste der _Suchbegriffe_ hinzufügen.

Möchten Sie einen der Begriffe weiter eingrenzen oder aber allgemeiner fassen, so können Sie ihn anklicken und erhalten die im Thesaurus vorhandenen spezielleren _Unterbegriffe_ als auch die allgemeineren _Oberbegriffe_ . Die zu dem Begriff vorhandenen _Synonyme_ werden Ihnen ebenfalls angeboten. Auch diese Begriffe können wiederum ausgewählt und in die Liste der _Suchbegriffe_ übernommen werden.

Über _Gesuchtes Objekt enthält_ können Sie zusätzlich auswählen, ob alle gewählten Begriffe enthalten sein sollen (UND-Suche) oder nur einer der Begriffe enthalten sein muss (ODER-Suche).

Durch einen Klick auf die Schaltfläche _Suchen_ wird die Suche gestartet und die Ergebnisse in der _Trefferliste_ angezeigt.

**Raum: Geo-Thesaurus Raumbezug**

Mithilfe des Geo-Thesaurus können gültige Angaben für den Raumbezug, wie sie üblicherweise im InGridCatalog (IGC) verwendet werden, gefunden werden.

Geben Sie ein Suchwort zum Raumbezug ein und rufen Sie mit Hilfe der Funktion _In Geo-Thesaurus suchen_ eine Liste der passenden Raumbezüge auf. Sie können einen oder mehrere Raumbezüge durch Anhaken auswählen und mit der Funktion _Übernehmen_ in die Liste der _Suchbegriffe_ übernehmen. Über die darunter liegende Auswahlliste können Sie zwischen der UND-Verknüpfung und ODER-Verknüpfung der übernommenen Suchbegriffe wählen.

Wenn Sie einzelne Raumbezüge anklicken, werden Ihnen weitere umschließende, umschlossene und angrenzende Raumbezüge angezeigt. Auch diese können Sie über die Schaltfläche _Übernehmen_ den Suchbegriffen hinzufügen.

**Raum: Freier Raumbezug**

Unter _freien Raumbezügen_ werden im InGridCatalog geografische Begriffe verstanden, die frei gewählt und im Feld _Freier Raumbezug_ des InGridEditors eingetragen werden können. Sie sind normalerweise im Geo-Thesaurus nicht vorhanden.

Die im aktuellen Katalog benutzten freien geografischen Begriffe werden in einer Auswahlliste angezeigt. Sie können einen dieser Begriffe wählen und eine Suche nach diesem Begriff durchführen.

 **Hinweis:** Auch die Suche nach dem freien Raumbezug wird mit den unter anderen Reitern eingestellten Einstellungen kombiniert. Wenn Sie keine Ergebnisse erhalten, löschen Sie alle Einstellungen über die Schaltfläche _Zurücksetzen_ .

**Zeit: Zeiteinschränkungen**

Neben dem Raumbezug können Sie auch den Zeitbezug der Objekte bei der Suche einschränken. Dabei ist der Zeitraum, nach dem gesucht wird, immer der _Zeitbezug des Dateninhaltes_ . Sie können dabei folgende zeitlichen Einschränkungen für die Suche wählen:

* an einem bestimmten Datum
* seit einem bestimmten Datum
* bis zu einem bestimmten Datum
* von einem bestimmten Datum bis zu einem bestimmten Datum

Sie können das Datum direkt eingeben, wobei Tages- und Monatsangaben zweistellig und die Jahreszahl vierstellig angegebne werden muss. Die Angaben müssen durch Punkte getrennt werden (TT.MM.JJJJ). Alternativ können Sie ein Datum aus dem Kalender (Symbol rechts neben der Eingabeleiste) auswählen.

Standardmäßig werden Objekte gesucht, deren Zeitangaben innerhalb des angegebenen Suchzeitraumes liegen.

Unter _Erweiterung des Zeitbezuges_ kann die Einstellung auch dahingehend geändert werden, dass der Suchzeitraum teilweise im Zeitraum der Ergebnisobjekte liegt, die Zeiträume sich also ‚schneiden’. Eine weitere Einstellung sucht Objekte, bei denen im Gegensatz zur Standardeinstellung der Zeitbezug über den des Suchzeitraums hinausgeht, diesen also umschließt. Beide Einstellungen können gleichzeitig angewählt werden.

**Erweiterte Suche Adressen**

**Thema: Suchmodus**

Wenn Sie mehrere Suchbegriffe eingegeben haben, wird standardmäßig mit UND-Verknüpfung gesucht, d.h. die Suchbegriffe müssen alle in der Adresse vorkommen, damit sie als Treffer gewertet wird. Über das Auswahlfenster können Sie diese Einstellung ändern, so dass alle Adressen Treffer sind, in denen einer der Suchbegriffe gefunden wird (ODER-Verknüpfung).

Standardmäßig wird nach Teilzeichenketten gesucht. Wenn Sie also nach ‚Wasser’ suchen, werden auch Objekte die den Begriff ‚Hochwasser’ enthalten, gefunden. Die Suche kann aber auch auf _Ganzes Wort_ eingeschränkt werden, also darauf, dass nur noch Adressen gefunden werden, die den Suchbegriff als einzelnes Wort enthalten.

Standardmäßig recherchiert der InGridEditor in allen Textfeldern. Sie können z.B. den Namen einer Straße eingeben und es werden alle Adressen, die in dieser Straße liegen gefunden. In einzelnen Fällen kann es sinnvoll sein, die Suche auf eine Untermenge von Feldern zu beschränken (Sie suchen z.B. nach dem Personennamen ‚Meier’ wollen aber keine Ergebnisse zu ‚Meierstraße’). Für diese Fälle können Sie die Einstellung _Alle Textfelder_ auf _Institution, Person, Notizen, Schlagworte_ ändern. Der InGridEditor sucht dann nur in den Feldern _Institution_ , _Person_ , _Notizen_ und _Schlagwort_ .

**Raum: Raumbezug**

Mithilfe dieser Funktion können sie nach einer speziellen _Straße_ , einer _PLZ_ (Postleitzahl) oder einem _Ort_ innerhalb der Adressen suchen. Alle Angaben, die Sie eingeben, müssen in der Adresse enthalten sein, damit sie als Treffer gewertet wird.

<a name="search-2"></a>

### Thesaurus-Navigator


Ein Thesaurus ist eine hierarchisch strukturierte begrenzte Liste von Bezeichnungen, die der natürlichen Sprache entnommen sind. Er soll es ermöglichen, die Inhalte (Begriffe, Vorgänge, Gegenstände) der umweltrelevanten Fachgebiete mit einheitlich benutzten Bezeichnungen wiederzugeben bzw. zu umschreiben. Eine einheitliche Beschreibung ermöglicht wiederum eine gezielte Suche mit weitgehend vollständigem Suchergebnis.

Der InGridCatalog (IGC) kann folgende Thesauri verwenden:

* den Umweltthesaurus (UMTHES) des Umweltbundesamtes in Dessau-Rosslau. Er enthält mehr als 30.000 Fachbegriffe aus dem Themengebiet "Umwelt".
Der UMTHES wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) vom Umweltbundesamt zur Verfügung gestellt.
* den europäischen Umweltthesaurus [GEMET (GEneral Multilingual Environmental Thesaurus)](http://www.eionet.europa.eu/gemet) .

**Hierarchiebaum**

Um den optimalen Suchbegriff im Thesaurus zu finden, können Sie sich über den Hierarchiebaum von den Oberbegriffen zu den spezifischeren Ebenen leiten lassen. Die Bedienung des Hierarchiebaumes entspricht der üblichen Bedienung von Baumstrukturen, das heißt über einen Klick auf die Symbole + bzw. – kann die Struktur auf- bzw. wieder zugeklappt werden. Ein Klick auf einen Begriff färbt diesen **rot** ein. Automatisch wird eine Suche in Objekten und Adressen durchgeführt und das Ergebnis in der _Trefferliste_ (siehe unten) angezeigt.

 **Achtung** : Begriffe die sich durch Anklicken nicht rot einfärben, sind nur Ordnungsbegriffe und keine Deskriptoren. Nach ihnen kann daher nicht gesucht werden.

**Ergebnisliste**

Alternativ zum Hierarchiebaum können Sie einen Thesaurusbegriff auch über eine Suche finden. Hierzu geben Sie einen Suchbegriff in das Feld _Suche nach Deskriptoren und Ordnungsbegriffen_ ein. Nach Absenden der Suche über _In Thesaurus suchen_ werden alle gefundene Thesaurusbegriffe in der Ergebnisliste angezeigt.

Ein Klick auf einen Begriff färbt diesen **rot** ein. Automatisch wird eine Suche in Objekten und Adressen durchgeführt und das Ergebnis in der _Trefferliste_ (siehe unten) angezeigt.

Ein Klick auf das Symbol vor dem Begriff zeigt ihn im hierarchischen Kontext an. Dazu wird in den Hierarchiebaum (siehe oben) gewechselt.

**Trefferliste**

In der Trefferliste sind die gefundenen _Objekte_ und _Adressen_ getrennt aufgelistet. Über die Kartenreiter lässt sich zwischen beiden Listen umschalten. Die gefundenen Objekte und Adressen lassen sich aus der _Trefferliste_ direkt aufrufen. Dabei wird in den Menüpunkt _Hierarchie und Erfassung_ des InGridEditors gewechselt. Zur _Trefferliste_ kehrt man zurück, indem man den Untermenüpunkt _Thesaurus-Navigator_ unter dem Menüpunkt _Recherche_ anwählt.

<a name="search-3"></a>

### Datenbank-Suche


Die Datenbank-Suche ist eine Funktion, die für Experten gedacht ist. Über sie können ganz spezielle Informationen aus der Datenbank abgerufen werden. Änderungen an Datenbankinhalten sind nicht möglich.

Die Datenbank-Suche beruht auf Anfragen an die IGC-Datenbank auf Grundlage der [Hibernate Query Language (HQL)](http://docs.jboss.org/hibernate/stable/core/reference/en/html/queryhql.html) .

Die angezeigte Trefferliste kann im CSV-Datenformat gespeichert werden.

Spezialisten sollten für die Datenbank-Suche folgende Punkt berücksichtigen:

* Als Einstiegstabelle für Selects auf Objekten **muss** die Tabelle **ObjectNode** gewählt werden ("FROM ObjectNode oNode ..."). Bei Adressen entsprechend die Tabelle **AddressNode** ("FROM AddressNode aNode ..."). Dabei sind '_oNode_' und '_aNode_' Platzhalter (alias), die für nachfolgende Joins verwendet werden (ObjectNode bzw. AddressNode verweisen auf die konkrete Instanz eines Objektes/Adresse in der Bearbeitungs- bzw. Veröffentlichungs-Version):

* **Arbeitsversion Objekte:**

```SQL
JOIN oNode.t01ObjectWork obj
```

* **Arbeitsversion Adressen:**

```SQL
JOIN aNode.t02AddressWork addr
```

* **Veröffentlichten Version Objekte:**

```SQL
JOIN oNode.t01ObjectPublished obj
```

* **Veröffentlichten Version Adressen:**

```SQL
JOIN aNode.t02AddressPublished addr
```

* Die Arbeitsversion entspricht der veröffentlichten Version, wenn das Objekt/die Adresse nicht_in Bearbeitung_ist.
* Für das einzugebende HQL müssen keine Spalten per '_select ..._' eingegeben werden, wenn die Ergebnisse nur angezeigt werden sollen (kein CSV-Export). In diesem Fall reicht es, mit dem '_FROM ..._' zu beginnen. Von den gefundenen Objekten/Adressen werden immer die Klasse und der Name angezeigt.

* **alle Objekte:**
```SQL
FROM ObjectNode
```

* **alle Adressen:**
```SQL
FROM AddressNode
```

* Werden per '_select ..._' Attribute hinzugefügt, so sind diese nur für den CSV-Export relevant, in der Anzeige werden immer nur Klasse und Name angezeigt.
* Um z.B. alle vorhandenen Objekt-Namen nach CSV zu exportieren:

* **in der akt. Bearbeitungs-Version:**

```SQL
select distinct obj.objName FROM ObjectNode oNode JOIN oNode.t01ObjectWork obj order by obj.objName
```

* **in der veröffentlichten Version:**

```SQL
select distinct obj.objName FROM ObjectNode oNode JOIN oNode.t01ObjectPublished obj order by obj.objName
```

*  **Achtung:** In der Anzeige spielt die **
```SQL
'selectSpalten'
```
** Angabe keine Rolle, diese bestimmt nur, **was nach** CSV exportiert wird. Bei obiger Recherche werden in der Anzeige also **immer alle** gefundenen Objekte angezeigt und zwar jeweils Klasse + Name. Taucht der gleiche Name in unterschiedlichen Objekten auf, so wird der Name doppelt angezeigt (z.B. mit unterschiedlicher Objekt-Klasse). Beim Export nach CSV wird der Name dann **nur einmal** exportiert, da im **
```SQL
'select DISTINCT'
```
** angegeben ist. Die CSV-Datei enthält also weniger Einträge als Objekte vorhanden sind (da nur unterschiedliche Objektnamen exportiert werden).

**Beispiel:**

**SQL auf IGC-Schema:**

```SQL

SELECT DISTINCT obj.id, obj.obj_uuid, obj.obj_name, obj.obj_class FROM T01_object obj
LEFT OUTER JOIN T08_attr T08_1 ON (obj.id = T08_1.obj_id)
LEFT OUTER JOIN T08_attr T08_2 ON (obj.id = T08_2.obj_id)
LEFT OUTER JOIN T08_attr_type T08T_1 ON (T08_1.attr_type_id = T08T_1.id)
LEFT OUTER JOIN T08_attr_type T08T_2 ON (T08_2.attr_type_id = T08T_2.id)
WHERE
T08T_1.name LIKE 'DATEN NUTZUNG/PFLEGE'
AND T08_1.data LIKE 'NUTZUNG'
AND T08T_2.name LIKE 'PERSONENKREIS%ZIELGRUPPE'
AND T08_2.data LIKE 'LANUINTERN'
AND T08_2.data LIKE 'LANUINTERN'
AND obj.mark_deleted != 'Y'

```

**Umsetzung in HQL:**

```SQL

SELECT DISTINCT OBJNODE.objUuid, OBJ.objUuid, OBJ.objName, OBJ.objClass, T08T_1.name, T08_1.data , T08T_2.name, T08_2.data
FROM
ObjectNode OBJNODE
JOIN OBJNODE.t01ObjectWork OBJ
LEFT JOIN OBJ.t08Attrs T08_1
LEFT JOIN OBJ.t08Attrs T08_2
LEFT JOIN T08_1.t08AttrType T08T_1
LEFT JOIN T08_2.t08AttrType T08T_2
WHERE
UPPER(T08T_1.name) LIKE 'DATEN NUTZUNG/PFLEGE'
AND UPPER(T08_1.data) LIKE 'NUTZUNG'
AND UPPER(T08T_2.name) LIKE 'PERSONENKREIS%ZIELGRUPPE'
AND UPPER(T08_2.data) LIKE 'LANUINTERN'
AND OBJ.markDeleted != 'Y'
ORDER BY OBJ.objName

```

## Qualitätssicherung


<a name="quality-assurance-0"></a>

### Konzept der Qualitätssicherung (Der Workflow)


Die Pflege der Metadaten kann im InGridEditor durch einen Workflow gesteuert werden. Die Entscheidung, ob ein Workflow benutzt wird, obliegt dem Katalogadministrator und wird von ihm für den ganzen Katalog festgelegt.

Das Konzept des Workflows geht von einem Vier-Augen-Prinzip aus. Das heißt, die Metadaten werden von einem Zuständigen erfasst bzw. bearbeitet und vor der Veröffentlichung von einem anderen Bearbeiter, dem Qualitätssichernden, begutachtet und freigegeben. Sinn und Zweck des Konzeptes ist eine hohe Qualität der Daten und der Beschreibungen zu garantieren.

Der zuständige Bearbeiter veröffentlicht die geänderten Objekte und Adressen nicht selbst, sondern überweist sie an den Qualitätssichernden. Dies gilt für alle Änderungen an den Daten wie Neuerfassung, Bearbeitung oder Löschung.

Der Qualitätssichernde kann alle an ihn überwiesenen Objekte und Adressen entweder freigeben (bei einem zu löschenden Metadatum heißt das endgültig Löschen), sie selbst verändern oder sie zur nochmaligen Überarbeitung an den Zuständigen zurück überweisen. Die Änderungen an den Objekten oder Adressen werden erst mit der Freigabe öffentlich sichtbar.

Als eine weitere Maßnahme der Qualitätssicherung erhält jedes Objekt ein _Verfallsdatum_ . Es wird automatisch nach der letzten Bearbeitung gesetzt. Die Zeitspanne von der letzten Bearbeitung bis zum Ablauf des Verfallsdatums wird für den ganzen Katalog vom Katalogadministrator festgelegt. Wird das Verfallsdatum überschritten, so wird das Objekt bzw. die Adresse dem Bearbeiter angezeigt und dieser kann sich der Aktualität der Daten versichern. Die Änderungen müssen wiederum an den Qualitätssichernden überwiesen werden.

Unter dem Menüpunkt _Qualitätssicherung_ werden die Informationen zu den Objekten angezeigt, deren Verfallsdatum abgelaufen ist, die in Bearbeitung sind und die zur Qualitätssicherung überwiesen wurden.

<a name="quality-assurance-1"></a>

### Bearbeitung/Verantwortlich


Dieses Untermenü erhält jeder Bearbeiter, wenn der [Workflow](#quality-assurance-0) für den Katalog aktiviert ist.

Eine Übersicht zeigt Ihnen die Anzahl der Objekt und Adressen, deren Verfallszeitpunkt erreicht ist, die von Ihnen an die Qualitätssicherung überwiesen wurden, die von der Qualitätssicherung an Sie zurück überwiesen wurden und deren Raumeinheiten aktualisiert wurden.

Sie erhalten weiterhin in jeweils einer getrennten Tabelle die Objekte und Adressen aufgelistet,

* deren Verfallszeitspanne abgelaufen ist
* die sich von Ihnen derzeit in Bearbeitung befinden
* die an die Qualitätssicherung überwiesen bzw. von der Qualitätssicherung zurück überwiesen wurden
* deren Raumbezüge aktualisiert werden müssen

Die aufgelisteten Objekte und Adressen lassen sich aus den Tabellen direkt aufrufen. Dabei wird in den Menüpunkt _Hierarchie & Erfassung_ des InGridEditors gewechselt. Dort können die Objekte und Adressen direkt weiterbearbeitet werden.

 **Hinweis:** Die Raumbezüge der Objekte werden nach jeder Aktualisierung des Semantic Network Service (SNS) überprüft. Sind sie z.B. nach einer Kreisreform nicht mehr gültig, werden sie durch die nächst höhere administrative Einheit ersetzt und müssen ggf. nachbearbeitet werden. Die betroffenen Objekte werden unter _Objekte deren Raumbezüge aktualisiert werden müssen_ aufgelistet.

<a name="quality-assurance-2"></a>

### Qualitätssicherung


Dieses Untermenü erhalten Sie, wenn der [Workflow](#quality-assurance-0) für den Katalog aktiviert ist und Sie als Qualitätssichernder für mindestens einen Teilbaum des Kataloges benannt worden sind.

Sie erhalten in jeweils einer getrennten Tabelle die Objekte und Adressen aufgelistet,

* die Ihnen als Qualitätssichernder zugewiesen wurden
* die sich in Bearbeitung befinden, für die Sie Qualitätssichernder sind
* deren Verfallszeitspanne abgelaufen ist, für die Sie Qualitätssichernder sind
* deren Raumbezug abgelaufen ist, für die Sie Qualitätssichernder sind

Die aufgelisteten Objekte und Adressen lassen sich aus den Tabellen direkt aufrufen. Dabei wird in den Menüpunkt Hierarchie und Erfassung des InGridEditors gewechselt. Dort können die Objekte und Adressen direkt weiterbearbeitet werden. Evtl. müssen Sie dem Verantwortlichen z.B. auf den Ablauf der Verfallsspanne seiner Objekte aufmerksam machen.

 **Hinweis:** Die Raumbezüge der Objekte werden nach jeder Aktualisierung des Semantic Network Service (SNS) überprüft. Sind sie z.B. nach einer Kreisreform nicht mehr gültig, werden sie durch die nächst höhere administrative Einheit ersetzt und müssen ggf. nachbearbeitet werden. Die betroffenen Objekte werden unter _Objekte deren Raumbezug abgelaufen ist, für die Sie Qualitätssichernder sind_ aufgelistet.

## Statistik


<a name="statistic-1"></a>

### Statistik


Unter dem Menüpunkt _Statistik_ können Sie sich einige quantitative Aussagen zu dem Katalog bzw. Teilbäumen anzeigen lassen.

Wählen Sie den _Katalog_ , _Objekte_ , _Adressen_ oder einen beliebigen Teilbaum aus dem Strukturbaum aus. Der gewählte Knoten des Baumes wird **rot** dargestellt.

Über die Karteikartenreiter im rechten Fenster können Sie sich nun folgende Auswertungen ansehen:

**Objekte/Adressen**

Für jede Objektklasse bzw. für jeden Adresstyp werden die absolute Anzahl sowie die relative Anzahl in % der Metadatenobjekte angezeigt.

Weiterhin wird die Anzahl der Objekte bzw. Adressen in Abhängigkeit vom jeweiligen Status angezeigt. Dabei gilt folgende Bedeutung der Abkürzungen:

* V–Status: Veröffentlicht
* B–Status: In Bearbeitung
* Q–Status: An die Qualitätssicherung überwiesen
* R–Status: Von der Qualitätssicherung an den Bearbeiter zurück überwiesen

**Freie Suchbegriffe**

Für jeden freien Suchbegriff (also nicht Thesaurus-Suchbegriff) werden die absolute Anzahl sowie die relative Anzahl in % des Auftretens in Metadatenobjekten angezeigt.

Die Suchbegriffe sind nach der Häufigkeit ihres Auftretens sortiert.

**Thesaurus Suchbegriffe**

Für jeden Thesaurus-Suchbegriff werden die absolute Anzahl sowie die relative Anzahl in % des Auftretens in Metadatenobjekten angezeigt.

Die Suchbegriffe sind nach der Häufigkeit ihres Auftretens sortiert.

**Drucken**

Alle Auswertungen können Sie über die Schaltfläche Drucken ausdrucken.

## Verwaltungsfunktion: Katalogverwaltung


<a name="catalog-administration-1"></a>

### Katalogeinstellungen


Der Menüpunkt _Katalogverwaltung_ ist nur für den Katalogadministrator sichtbar.

Der InGridCatalog ist so strukturiert, dass alle Informationen eines Metadaten-Anbieters zu einem sogenannten Katalog zusammengefasst sind. Unter dem Menüpunkt _Katalogverwaltung_ können grundlegende Einstellungen zu dem aktuellen Katalog vorgenommen werden.

Unter dem Untermenüpunkt _Katalogeinstellungen_ kann der Katalogadministrator den Namen des Kataloges, des Partners (Bund oder ein Land) und des Anbieters sowie das Land, die Katalogsprache und den Raumbezug festlegen.

 **Hinweis:** Auch wenn nicht alle Felder verpflichtend auszufüllen sind, so wird dringend empfohlen, alle Felder auszufüllen.

Weiterhin kann die Workflow-Kontrolle eingeschaltet sowie festgelegt werden, ob und nach wie vielen Tagen ein _Überarbeiten_ der Metadaten-Objekte (Verfallsdatum) gefordert wird (siehe auch [Konzept der Qualitätssicherung (Der Workflow)](#quality-assurance-0) ).

Die Sortierung der Objekte/Adressen im Hierarchiebaum in der Erfassung kann ebenfalls so angepasst werden, dass anstelle des Titels, zuerst nach der Klasse sortiert wird. Dadurch werden die Objekte/Adressen derselben Klasse zusammenhängend dargestellt.

Hinweis: Um ein Minimum an Aktualität eines Metadaten-Katalogs zu gewährleisten, wird empfohlen, das _Überarbeiten_ einzuschalten und einen Wiedervorlagezeitraum von höchstens einem Jahr (365 Tage) anzugeben.

Die Einstellungen müssen über die Schaltfläche _Speichern_ abgeschlossen werden und sind dann sofort aktiv.

<a name="catalog-administration-3"></a>

### Allgemeine Einstellungen


In diesem Untermenü können die folgenden Einstellungen für den aktuellen Katalog vorgenommen werden:

**Autosave aktivieren**

Für den Katalog kann eine automatische Zwischenspeicherung der erfolgten Änderungen eingestellt werden und das Intervall, nach dem diese ausgeführt wird, festgelegt werden. Die Zwischenspeicherung verhindert, dass Arbeiten verloren gehen, z.B. durch notwendige Unterbrechung der Erfassung aufgrund anderer Dienstgeschäfte.

Beim Zwischenspeichern wird eine Bearbeitungskopie angelegt bzw. die vorhandene Bearbeitungskopie überschrieben. Es wird also automatisch die manuell zur Verfügung gestellte Funktion Zwischenspeichern ausgeführt (siehe auch „ [Die Funktionsleiste für Hierarchie und Erfassung](#hierarchy-maintenance-3) “).

 **Achtung:** Das Einschalten dieser Funktionalität kann den unerwünschten Seiteneffekt haben, dass auch ungewollte Änderungen automatisch gespeichert werden und damit bereits vorhandene Bearbeitungszustände überschrieben werden.

**Session refresh aktivieren**

Für den Katalog kann ein automatisches Session-Refresh eingestellt werden und das Intervall, nach dem dieses ausgeführt wird, festgelegt werden. Ein Session-Refresh verhindert, dass die Sitzung serverseitig beendet wird, solange der Editor im Browser des Nutzers geladen ist. Damit wird verhindert, dass Arbeiten verloren gehen (z.B. durch notwendige Unterbrechung der Erfassung aufgrund anderer Dienstgeschäfte) oder in einem solchen Fall ein erneutes Aufschalten des Nutzers notwendig wird.

 **Hinweis:** Ein automatisches Session-Refresh kann den Server zusätzlich belasten, weil alle Sitzungen der Nutzer erhalten bleiben, bis sie explizit den Editor schließen. Trotzdem ist diese Einstellung zu empfehlen, da sie die kritischere Einstellung _Autosave_ weitgehend überflüssig macht und die Nutzerakzeptanz gerade bei größeren Metadaten-Erfassungen erheblich erhöht. Bei einer Überlastung des Servers durch zu viele offene Sitzungen ist sie allerdings abzuschalten.

Die Einstellungen müssen über die Schaltfläche _Speichern_ abgeschlossen werden und sind dann sofort aktiv.

## Verwaltungsfunktion: Nutzerverwaltung


<a name="user-administration-1"></a>

### Nutzeradministration


**Konzept der Nutzerverwaltung des InGridEditors**

Der InGridEditor (IGE) ist eine Komponente der Portal-Software InGrid, die in erster Linie für das Umweltportal Deutschland InGrid-Portal konzipiert und weiterentwickelt wird. Durch die Verknüpfung der Nutzverwaltungen des Umweltportals und des IGEs ergibt sich der Vorteil, dass sich ein Nutzer nur einmal zentral im Portal (unter _Mein InGrid-Portal_ ) oder in einer anderen externen Benutzerverwaltung anmelden muss.

Die IGE-Nutzerrechte, die sowohl Schreibrechte als auch das Recht zur Qualitätssicherung umfassen können, werden in der [Gruppenadministration](#hierarchy-maintenance-3) der IGE-Nutzerverwaltung festgelegt. Zunächst werden Gruppen definiert, die spezifische Rechte für einen Teilbereich des Katalogs aufweisen und anschließend die Nutzer einer oder mehreren Gruppen zugeordnet.

Im IGE werden hierbei folgende Rechte (Rollen) unterschieden:

*  **Katalog-Administrator** : Es gibt nur einen Nutzer mit diesen Rechten. Er hat das Recht alle Verwaltungsfunktionen bedienen zu dürfen und kann Nutzer auf allen darunterliegenden Hierarchieebenen mit Schreibrechten auf beliebige Teilbäume erstellen.
*  **Metadaten-Administrator** : Er darf von den Verwaltungsfunktionen nur die Nutzerverwaltung bedienen. Er darf Nutzer mit der Rolle Metadaten-Autor erstellen. Die Rechte dieser Nutzer dürfen aber maximal den Rechten des jeweiligen Metadaten-Administrators entsprechen (z.B. Schreibrechte nur auf einen Teilbaum des Katalogs).
*  **Metadaten-Autor** : Er hat Schreibrechte auf einen Teilbaum des Kataloges, hat aber keinen Zugang zur Nutzerverwaltung oder zu anderen Verwaltungsfunktionen.

Der Katalog-Administrator kann Metadaten-Autoren unter beliebigen Metadaten-Administratoren einrichten. Ein Metadaten-Administrator hat immer das Recht, die ihm nachgeordneten Metadaten-Autoren zu administrieren.


**Neuanlegen eines Nutzers**


Vorbereitende Schritte:

* Der Nutzer muss in der externen Benutzerverwaltung registriert worden sein (Portal-Nutzer). Wird als externe Nutzerverwaltung das Portal verwendet, kann sich der Nutzer selbst anmelden oder vom Administrator im Portal unter_Mein InGrid-Portal_angemeldet werden.
* Der Nutzer erhält eine Email zur Bestätigung seiner Anmeldung. Mit der Bestätigung des Links in der Email wird die Anmeldung aktiviert.
* Um dem neuen Nutzer passende Rechte zuordnen zu können, muss in der [Gruppenadministration](#user-administration-2) der IGE-Nutzerverwaltung geprüft werden, ob bereits eine oder mehrere Gruppen existieren, die mit entsprechenden Rechten ausgestattet sind. Ist dies nicht der Fall, müssen eine oder mehrere neue Gruppen angelegt werden.

Nachdem gehen Sie bitte wie folgt vor:

* Klicken Sie in der Nutzeradministration (IGE-Nutzerverwaltung) auf den Administrator, der für den neuen Nutzer zuständig sein soll (Hierarchiebaum auf der linken Seite). Der Name des Administrators wird rot markiert.
Als Katalog-Administrator können Sie Metadaten-Administratoren und Metadaten-Autoren im gesamten Katalog anlegen. Als Metadaten-Administrator können Sie nur Metadaten-Autoren unterhalb ihres eigenen Eintrags anlegen. Unterhalb von Metadaten-Autoren können keine weiteren Nutzer angelegt werden.
* Klicken Sie auf die Schalfläche_Nutzer anlegen_(unterhalb des Hierarchiebaums). Geben Sie nun in das Dialogfeld die Anfangsbuchstaben des neuen Portal-Nutzers ein und wählen Sie dann aus der Auswahlliste den entsprechenden Nutzer aus. Klicken Sie anschließend auf die Schalfläche_Übernehmen_, um dem neuen Nutzer dem ausgewählten IGE-Administrator zuzuordnen.
**Hinweis 1:**Die Auswahlliste öffnet sich nur durch die Eingabe von Buchstaben und nicht wie üblich über einen Klick auf das Symbol an der rechten Seite der Eingabezeile. Namen, die mit großen Anfangsbuchstaben beginnen, werden in der Auswahlliste zuerst gelistet.
**Hinweis 2:**Ein Portal-Nutzer, der bereits einem IGE-Katalog zugeordnet ist, kann keinem zweiten Katalog zugeordnet werden. Diese Regelung betrifft auch Schulungskataloge. Deshalb werden Nutzer, die bereits mit IGE-Rechten ausgestattet sind, nicht mehr in der Auswahlliste angezeigt.
* Für den neuen IGE-Nutzer müssen nun einige Nutzerdaten (Name, Email, Institution) erfasst.
* Weisen Sie dem neuen IGE-Nutzer einer oder mehreren Gruppen zu. In der Auswahlliste werden alle in der [Gruppenadministration](#user-administration-2) definierten Gruppen angezeigt für die Sie die Berechtigung zur Administration besitzen.
* Mit_Speichern_(Schaltfläche unten rechts) schließen Sie den Vorgang ab.


**Bearbeiten und Löschen eines bereits existierenden Nutzers**


Wählen Sie durch Mausklick im Hierarchiebaum auf der linken Seite des Fensters einen Nutzer aus, den Sie bearbeiten oder löschen wollen.

Die Nutzerdaten werden in die Felder auf der rechten Seite des Fensters geladen. Sie können das _Login_ , die _Adressdaten_ und die _Gruppe_ ändern. Über _Speichern_ sichern Sie die Änderungen.

 **Hinweis:** Dem Katalog-Administrator ist immer automatisch die Gruppe _administrators_ zugewiesen. Diese Zuordnung kann nicht geändert werden. Die Gruppe steht anderen Nutzern nicht zur Verfügung.

Zum Löschen des Nutzers klicken Sie auf die Schaltfläche _Nutzer löschen_ und bestätigen den Vorgang in dem sich öffnenden Dialog.

**Anzeige der Verantwortlichkeiten**

Über den Reiter "Als Verantwortlicher" werden zwei Tabellen angezeigt, die die Objekte und Adressen auflisten, in denen der ausgewählte Benutzer als Verantwortlicher eingetragen ist. Es ist möglich direkt von diesen Tabellen auf ein Objekt bzw. Adresse zu springen.

<a name="user-administration-2"></a>

### Gruppenadministration


Über die (Nutzer-)Gruppen werden die Schreibrechte auf Objekte und Adressen sowie das Recht zur Qualitätssicherung festgelegt.

In der Gruppenadministration können Sie:

* **Eine Gruppe bearbeiten:**Klicken Sie auf den Namen der Gruppe in der Liste links oben im Fenster. Sie können nun den Namen der Gruppe ändern sowie die Rechte für die Gruppe (siehe unten). Änderungen müssen mit_Speichern_abgeschlossen werden und stehen dann sofort zur Verfügung.
* **Eine Gruppe neu anlegen:**Klicken Sie auf die Schaltfläche_Neue Gruppe anlegen_. Sie müssen den Gruppennamen angeben und den Vorgang mit_Speichern_abschließen. Sie können nun die Rechte für die Gruppe angeben (siehe unten).
* **Eine Gruppe löschen:**Klicken Sie mit der rechten Maustaste auf den Namen der Gruppe, die Sie löschen wollen. Wählen Sie_Zeile löschen_aus dem Kontextmenü und bestätigen Sie den Vorgang in dem sich öffnenden Dialog.

 ****Wichtig:**** Alle Änderungen an den Gruppeneigenschaften (auch die an den untenstehenden Berechtigungen) müssen über _**Speichern**_ abgeschlossen werden, damit die Änderungen wirksam werden und nicht verloren gehen.

Sie können folgende Berechtigungen für eine Gruppe vergeben:

**Berechtigungen für Objekte**

Sie können Schreibberechtigungen für Objekte vergeben. Wählen sie dazu das Objekt unter _Berechtigungen für Objekte_ aus dem Hierarchiebaum aus, für das Sie oder ab dem Sie die Schreibberechtigung vergeben wollen. Ein Klick auf das Objekt färbt es rot ein. Über die Schaltfläche **>** können Sie das markierte Objekt in die Liste der Berechtigungen übernehmen.

Sie haben drei Einstellungsmöglichkeiten für die Berechtigung pro Objekt:

* **Teilbaum:**Dies ist die Standardeinstellung. Sie haben für dieses und alle nachgeordneten Objekte eine Schreibberechtigung. Sie können unterhalb dieses Objektes und allen nachgeordneten Objekten neue Objekte anlegen.
* **Unterobjekte:**Sie können direkt unterhalb dieses Objektes ein neues Objekt anlegen, für das Sie dann den vollen Zugriff bekommen (Teilbaum Recht auf neuem Unterobjekt). Alle Benutzer Ihrer Gruppe bekommen damit ebenfalls vollen Zugriff (alle Benutzer der Gruppe, die das Unterobjekterecht beinhaltet).
* **Einzelobjekt:**Sie haben nur auf diesem Objekt eine Schreibberechtigung, auf nachgeordnete Objekte nicht. Sie können keine neuen Objekte unterhalb dieses Objektes anlegen.

 **Hinweis:** Sie können keine Schreibrechte auf den Strukturbaumknoten _Objekte_ vergeben. Alle Teilbäume des Kataloges, auf die ein Schreibrecht bestehen soll, müssen einzeln ausgewählt werden.

**Berechtigungen für Adressen**

Sie können Schreibberechtigungen für Adressen vergeben. Wählen sie dazu die Adresse unter _Berechtigungen für Adressen_ aus dem Hierarchiebaum aus, für die Sie oder ab der Sie die Schreibberechtigung vergeben wollen. Ein Klick auf die Adresse färbt sie rot ein. Über die Schaltfläche **>** können Sie die markierte Adresse in die Liste der Berechtigungen übernehmen.

Sie haben drei Einstellungsmöglichkeiten für die Berechtigung pro Adresse:

* **Teilbaum:**Dies ist die Standardeinstellung. Sie haben für diese Adresse und alle nachgeordneten Adressen eine Schreibberechtigung. Sie können unterhalb dieser und allen nachgeordneten Adressen neue Adressen anlegen.
* **Unteradressen:**Sie können direkt unterhalb dieser Adresse eine neue Adresse anlegen, für die Sie dann den vollen Zugriff bekommen (Teilbaum Recht auf neuer Unteradresse). Alle Benutzer Ihrer Gruppe bekommen damit ebenfalls vollen Zugriff (alle Benutzer der Gruppe, die das Unteradressenrecht beinhaltet).
* **Einzeladresse:**Sie haben nur auf diese Adresse eine Schreibberechtigung, auf nachgeordnete Adressen nicht. Sie können keine neuen Adressen unterhalb dieser Adresse anlegen.

 **Hinweis:** Sie können keine Schreibrechte auf die Strukturbaumknoten _Adressen_ und _freie Adressen_ vergeben. Alle Teilbäume des Kataloges, auf die ein Schreibrecht bestehen soll, müssen einzeln ausgewählt werden.

**Root-Objekte und -Adressen anlegen**

Dies ist ein gesondertes Schreibrecht. Wird es für eine Gruppe vergeben, haben die Mitglieder dieser Gruppe das Recht, neue Objekte und Adressen auf der obersten Ebene des Kataloges anzulegen. Sie erhalten dann automatisch die Schreibrechte auf den ganzen Teilbaum des neuangelegten Objektes bzw. der neuangelegten Adresse.

 **Wichtig:** Durch dieses Recht hat die Gruppe _nicht_ automatisch das Schreibrecht auf schon vorhandene Teilbäume, für die ihr nicht explizit Schreibrechte eingeräumt wurden.

**Qualitätssichernder**

Über die Berechtigung _Qualitätssichernder_ werden die Nutzer der Gruppe für alle Objekte und Adressen, für die sie ein Schreibrecht besitzen, zu Qualitätssichernden. Sie haben also das Recht (und auch die Pflicht), an sie überwiesene Objekte und Adressen zur Veröffentlichung freizugeben bzw. endgültig zu löschen oder bei Qualitätsmängeln die Objekte bzw. Adressen an den Zuständigen zurück zu überweisen.

 **Hinweis:** Dieses Recht wird nur im Zusammenhang mit der eingeschalteten [Workflow-Kontrolle](#quality-assurance-0) in den [Katalogeinstellungen](#catalog-administration-1) wirksam.

**Zugeordnete Nutzer**

Auf dem dritten Reiter werden alle Benutzer aufgelistet, welche der gewählten Gruppe zugeordnet wurden.

**Die spezielle Gruppe_administrators_des Katalogadministrators**

Dem Katalogadministrator wird immer automatisch die Gruppe _administrators_ zugewiesen. Diese Zuweisung kann **nicht** verändert werden. Die Gruppe hat Schreibrechte auf den gesamten Katalog (natürlich einschließlich des Rechts auf Anlegen von neuen Objekten und Adressen auf der obersten Ebene). Die Gruppe hat feste Rechte und ist in jedem Katalog automatisch vorhanden. Sie lässt sich nicht über die Gruppenadministration pflegen und wird daher auch nicht in der Liste der Gruppen angezeigt.

<a name="user-administration-3"></a>

### Berechtigungsübersicht


In der Berechtigungsübersicht werden alle Nutzer angezeigt, die auf ein Objekt, eine Adresse oder einen Teilbaum Schreibrechte oder das Recht für Unterobjekte/Unteradressen oder zur Qualitätssicherung haben.

Klicken Sie auf ein beliebiges Objekt unter _Berechtigung für Objekte_ oder auf eine beliebige Adresse unter _Berechtigung für Adressen_ . Das ausgewählte Objekt bzw. die ausgewählte Adresse wird rot markiert. Es werden die _Nutzernamen_ und die _Rollen_ aller Nutzer angezeigt, die auf das Objekt bzw. die Adresse mindestens eines der folgenden Rechte haben:

* Schreibrecht auf das_Einzelobjekt_bzw. die_Einzeladresse_
* Schreibrecht auf den_Teilbaum_
* Recht zur Erstellung direkter_Unterobjekte_bzw._Unteradressen_
* Recht zur Qualitätssicherung (_QS_)

## Verwaltungsfunktion: Gesamtkatalogmanagement


<a name="overall-catalog-management-1"></a>

### Analyse


Der Menüpunkt _Gesamtkatalogmanagement_ steht nur dem Katalogadministrator zur Verfügung. Er bietet spezielle Funktionen zur Pflege des Kataloges.

Der Untermenüpunkt _Analyse_ bietet eine Reihe von Überprüfungen des Kataloges auf interne Konsistenz an.

Die Überprüfung erfolgt auf folgende Mängel:

* Objekte, die keinen Adressverweis haben
* Objekte, die keine Eltern-Objekte haben
* Objekte, die ungültige Adressverweise haben
* Adressen, die keine Eltern-Adresse haben
* Fehlerhafte Einträge in Objekt-Referenzen
* Fehlerhafte Einträge in 1:n - Tabellen

Im Normalbetrieb sollte keiner dieser Mängel auftreten, da die internen Prüfmechanismen des InGridEditors bei Eingabe, Speicherung und Freigabe der Objekte und Adressen Inkonsistenzen verhindert. Allerdings können die aufgeführten Mängel z.B. bei manueller Bearbeitung oder Befüllung der Datenbank entstehen.

Über den Button _Prüfung starten_ wird die Überprüfung auf dem Server angestoßen. Je nach Umfang des Kataloges und Auslastung des Servers kann die Überprüfung einige Minuten dauern.

 _Informationen zum letzten Analyseprozess_ erhalten Sie im Informationskasten.

Die aufgetretenen Fehler werden einzeln in der Tabelle _Ergebnis der Prüfung_ aufgelistet. Es wird Ihnen sowohl die _Fehlermeldung_ als auch ein _Lösungsvorschlag_ zum Beheben des Fehlers gegeben. Der Fehler muss dann per Hand vom Katalogadministrator oder vom für das betroffene Objekt oder die betroffene Adresse Verantwortlichen korrigiert werden.

<a name="overall-catalog-management-2"></a>

### Dubletten


Unter _Dubletten_ werden unterschiedliche Objekte gleichen Objektnamens verstanden.

Durch die dezentrale Pflege der Objekte an verschiedenen Stellen im Hierarchiebaum ist es möglich, dass für inhaltlich unterschiedliche Objekte gleiche Objektnamen vergeben werden. Bei dem Standardfall einer Recherche werden dem Nutzer nach einer Suche die Objektnamen in der Ergebnisliste angezeigt. Die Informationen über die Lage im Hierarchiebaum geht in dieser Anzeige verloren. Um den recherchierenden Nutzern eine eindeutige Vorstellungen von dem gefunden Objekt zu vermitteln, sollten daher für alle Objekte möglichst unterschiedliche, aussagekräftige Objektnamen vergeben werden.

Beim Aufruf des Untermenüpunkts _Dubletten_ wird eine Prüfung auf Dubletten durchgeführt (Sie können diese Prüfung später wiederholen, indem Sie auf den Button _Prüfung erneut ausführen_ klicken). Das _Ergebnis der Dublettenprüfung_ wird in einer _Liste_ angezeigt.

Wählen Sie mit der rechten Maustaste eines der aufgelisteten Objekte aus. Mit der Option "Im Hierarchiebaum anzeigen" wird im Kartenreiter _Hierarchiebaum_ die Lage des Objekts in der Kataloghierarchie angezeigt. Mit der Option "Öffne in Erfassung" wird das gewählte Objekt in der Erfassung geöffnet, wo es direkt bearbeitet werden kann.

Ein Klick mit der linken Maustaste auf eines der aufgelisteten Objekte zeigt rechts den Objektnamen, die Klasse und die Beschreibung des Objektes.

Es kann lediglich der Objektname geändert und über den entsprechenden Button abgespeichert werden.

<a name="overall-catalog-management-3"></a>

### URL-Pflege


Beim Aufruf des Untermenüpunkts _URL-Pflege_ wird eine Prüfung der in allen Objekten vorhandenen URLs durchgeführt. Sie können diese Prüfung später wiederholen, indem Sie auf den Button _Prüfung starten_ klicken.

Je nach Umfang des Kataloges und Auslastung des Servers kann die Überprüfung einige Minuten dauern. Sie kann über _Prozess abbrechen_ gestoppt werden.

 _Informationen zum letzten Prozess_ erhalten Sie im Informationskasten.

Das Ergebnis der URL-Prüfung wird in der darunter stehenden Tabelle angezeigt. Aus Performanzgründen werden jeweils nur die ersten 100 Einträge in der Tabelle dargestellt. Sie können über die Karteireiter auswählen, ob Sie _Alle URLs_ , _Nur fehlerhafte URLs_ oder eine _Zusammenfassung fehlerhafte Urls_ sehen wollen.

In der Spalte _Status_ wird die Rückmeldung über die Verfügbarkeit der Webseiten dokumentiert. Für Fehler wird ein HTTP-Fehlercode angegeben.

Für jede URL werden neben dem _Status_ die Klasse (als Icon) und der _Name des Objekts_ sowie eine _Beschreibung_ , die dem IGC-Feld _Bezeichnung des Verweises_ entspricht, gelistet.

Ein oder mehrere URLs können ersetzt werden, indem Sie die zu ersetzenden URLs in der Tabelle markieren (Auswahl mehrerer URLs mit Mausklick bei gleichzeitig gedrückter Strg-Taste) und in das Eingabefeld unter der Tabelle eine neue URL eingeben. Mit der Funktion Ersetzen tauschen Sie die URL aus. Anschließend wird automatisch eine erneute Überprüfung ausgeführt.

<a name="overall-catalog-management-4"></a>

### Auswahl-/ISO-Codelistenpflege


In dem Untermenü _Auswahl-/ISO-Codelistenpflege_ können sowohl ISO- als auch frei definierbare Codelisten gepflegt werden.

**Auswahllistenpflege**

Alle im InGridEditor (IGE) benutzten Auswahllisten sind in der Auswahlliste des Feldes _Auswahlliste_ hinterlegt (zunächst nicht sichtbar). Wählen Sie die Auswahlliste, die Sie bearbeiten wollen aus.

Listen, die nicht geändert werden können, sind mit _[nicht editierbar]_ gekennzeichnet. Sie können sich diese Listen dennoch ansehen, indem Sie sie auswählen. In diesem Fall wird der Hinweis _Die Einträge dieser Auswahlliste können nicht geändert werden_ oberhalb der Listeneinträge angezeigt und die Tabelle ist nicht editierbar.

Um einen Listeneintrag zu ändern, doppelklicken Sie auf den Eintrag in der Tabelle und bearbeiten Sie den Eintrag.

Um einen Listeneintrag zu ergänzen, gehen Sie ans Ende der Liste. Die letzte Zeile ist leer. Durch einen Doppelklick in das entsprechende Feld öffnet sich ein Eingabefeld, in dem Sie den gewünschten Eintag eingeben können.

Um einen Listeneintrag zu löschen, klicken Sie die Zeile an, öffnen mit der rechten Maustaste das Kontextmenü und wählen die Funktion _Zeile löschen_ .

**_Standardwert setzen_**

Für einige Listen kann ein Standardwert eingestellt werden. Listen, für die das nicht gilt, erhalten den Hinweis _Für diese Liste kann kein Defaultwert eingestellt werden_ und die Option _Defaultwert einstellbar_ lässt sich nicht wählen. Für die anderen Listen gilt, dass nachdem die Option _Defaultwert einstellbar_ gewählt wurde, in der Liste der Auswahllisteneinträge eine weitere Spalte _Default_ erscheint. Sie können jetzt einen Eintrag als Standardwert wählen. Er wird bei der Neuerstellung eines Objektes standardmäßig in das zu dieser Auswahlliste zugehörige Feld eingetragen.

**_Auswahllisten im- und exportieren_**

Die Liste der Auswahllisten kann exportiert und importiert werden. Zum Exportieren klicken Sie auf _Exportieren_ und wählen den Ort, an dem Sie die XML-Datei speichern möchten. Zum Importieren klicken Sie auf _Importieren_ und wählen die XML-Datei, die Sie importieren möchten. Sie muss das gleiche Format wie die Exportdatei haben.

**Übernahme Freie Einträge**

Unter dem Karteireiter _Übernahme Freie Einträge_ können freie Einträge vorgegebener Felder in die entsprechende Auswahlliste des Feldes übertragen werden.

Wählen Sie hierzu die gewünschte _Auswahlliste_ und in der Liste _Einträge die nicht in der Schlüsseltabelle vorhanden sind_ den Eintrag aus, den Sie in die Auswahlliste aufnehmen möchten. Über einen Klick auf den Button _>Übertragen_ wird er in die Auswahlliste übernommen.

Ein Klick auf den Button _>>Alle_ übernimmt alle freien Einträge in die Auswahlliste.

Sie können auch einzelne freie Einträge durch Auswahllisteneinträge ersetzen, indem Sie den Eintrag, den Sie ersetzen wollen, in der Liste _Einträge die nicht in der Schlüsseltabelle vorhanden sind_ auswählen und den Eintrag, durch den er ersetzt werden soll, in der Liste _Inhalte der Schlüsseltabelle_ auswählen. Ein Klick auf _<Ersetzen_ ersetzt den ausgewählten Eintrag des Feldes durch den Auswahllisteneintrag.

**Reindexierung**

Im Index sind die Einträge der Felder, die über Codelisten gepflegt werden, natürlich nicht als IDs sondern als Text gespeichert. Wurde der Text für einzelne IDs geändert, ist der Index nicht mehr konsistent (Bei einer Suche würde der alte Text und nicht der neue gefunden werden). Deshalb muss für den Index des IGEs nach erfolgter Änderung der Codeliste eine Reindexierung angestoßen werden.

Sie führen diese über einen Klick auf den Button _Reindexierung starten_ durch. Je nach Umfang des Kataloges und Auslastung des Servers kann die Reindexierung einige Minuten dauern.

<a name="overall-catalog-management-5"></a>

### Zusätzliche Felder


Pro Katalog ist es im InGridCatalog möglich, zu den vorgegebenen Feldern _Zusätzliche Felder_ zu definieren. Diese Funktionalität ist nur für den Katalogadministrator zugänglich.

Diese Seite listet alle vorkommenden Felder in der Objekterfassung auf, untergliedert in der jeweiligen Rubrik. Dabei werden die Felder in _Kernfelder_ und _Zusätzliche Felder_ unterschieden. Da diese Auflistung sehr groß sein kann, gibt es verschiedene Sichtbarkeitsoptionen, die Teile der List ausblenden:

 **"Kernfelder verstecken"** bewirkt, dass alle fest vorgegebenen Felder gezeigt bzw. nicht gezeigt werden. Da beim Verstecken der Kernfelder diverse Rubriken leer sein können, gibt es eine zweite Option, die auch diese versteckt **"Leere Rubriken verstecken"** . Sind diese zwei Optionen aktiviert, sieht man nur noch die zusätzlichen Felder und die dazugehörigen Rubriken.

 **"Rubriken ausklappen"** lässt alle Rubriken mit all ihren Feldern angezeigt, bzw. kompakt, indem nur die Rubrik selber zu sehen ist. Anhand des linken Symbols bei einer Rubrik, lässt sich jede Rubrik individuell ein- und ausklappen.


Weiterhin gibt es Schaltflächen, die die Felder komplett noch einmal von der Datenbank laden **"Neu laden"** (dabei werden jegliche Änderungen an den Felder verworfen!) sowie vorgenommene Änderungen in die Datenbank **"Speichern"** kann. Diese Schaltfläche färbt sich rot, sobald Änderungen vorhanden sind. Mit einem Klick auf **"Neue Rubrik"** wird eine solche am Ende der Liste erstellt. Mehr Informationen weiter unten.



#### Allgemeines

Auf Kernfelder bzw. Kernrubriken hat man nur beschränkten Zugriff. So lassen sich diese nicht löschen und auch nicht verschieben! Wird ein Kernfeld bearbeitet, so ist dies auch nur begrenzt. Es lässt sich die Sichtbarkeit einstellen und ob das Feld als Pflichtfeld dargestellt werden soll. Schließlich lässt sich noch eine JavaScript-Funktionalität definieren, die sich auf dieses oder ein anderes Feld sich beziehen kann.


Wie schon erwähnt, lassen sich Kernfelder bzw. -rubriken weder verschieben noch entfernen. Dies ist bei zusätzlich hinzugefügten Feldern jedoch möglich. Dabei ist zu bedenken, dass neue Felder immer ans Ende einer Rubrik erzeugt werden. Diese lassen sich **nicht** vor einem Kernfeld verschieben, sondern immer nur vor einem anderen zusätzlichen Feld! Dazu dienen die Schaltflächen mit dem _Pfeil hoch_ bzw. _Pfeil runter_ . Bevor ein Feld gelöscht wird, erscheint eine Abfrage, ob dieses Element wirklich entfernt werden soll. Die Speichern-Schaltfläche sollte sich nun rot verfärben, um darauf hinzuweisen, dass die Änderung erst nach einem expliziten Speichern übernommen wird.

 **Achtung:** Alle Änderungen an den _zusätzlichen Feldern_ werden erst nach dem Klick auf den Button _Speichern_ durchgeführt. Sie stehen vorher nicht zur Verfügung.

 **Hinweis:** Alle gespeicherten Änderungen an den _zusätzlichen Feldern_ stehen nach dem nächsten Laden der Erfassungskomponente zur Verfügung.


#### Neues Feld erstellen

Um ein neues Formelement zu erstellen, wählt man zuerst die Rubrik aus, in welcher das Feld angelegt werden soll. Dazu befindet sich unter jeder Rubrik eine Auswahlliste, in der das zu erstellende Feld ausgewählt wird, und ein Button "Neues Formelement", der einen entsprechenden Dialog für die Erstellung öffnet.

Folgende Typen stehen zur Verfügung:

* Textfelder
* Nummernfelder
* Datumsfelder
* Auswahllisten
* Tabellen

Tabellen können wiederum Spalten mit den folgenden Typen enthalten:

* Textfelder
* Nummernfelder
* Datumsfelder
* Auswahllisten

 **Hinweis:** Auch bei _Zusätzlichen Feldern_ mit Auswahlliste sind freie Einträge möglich.

Für ein neues zusätzliches Feld muss als erstes eine **eindeutige ID** gewählt werden. Über diese kann das Feld später auch angesprochen werden, um bspw. eine spezielle Behandlung einzuführen. Als nächstes ist es möglich, das neue Feld als **Pflichtfeld** zu deklarieren. Hierdurch wird die Beschriftung des Feldes automatisch fett gedruckt und der Inhalt des Feldes wird vor einer Veröffentlichung auf einen gültigen Wert hin überprüft (für eine spezielle Behandlung siehe weiter unten).

Die Sichtbarkeit kann so beeinflusst werden, dass das Feld **optional** erscheint und somit nur bei einem Ausklappen der Rubrik sichtbar wird, durch **anzeigen** wird es niemals ausgeblendet und durch **verstecken** wird es permanent ausgeblendet und wird nie angezeigt.

Weiterhin muss eine **Beschriftung** und ein **Hilfetext** für das Feld vergeben werden. Dies ist in verschiedenen Sprachen möglich, wobei ein Eintrag in der ersten Sprache (Standard: Englisch) Pflicht ist. Wird der InGrid-Editor in einer anderen Sprache als Englisch betrieben, so wird ein englischer Titel bzw. eine englische Hilfe beim Fehlen der Lokalisierung angezeigt.

In dem Bereich Skripte unter **Javascript** kann Javascript-Funktionalität hinzugefügt werden, die beim Starten des InGrid-Editors ausgeführt werden soll. Dadurch lässt sich die Funktionalität beliebig erweitern und Sonderbehandlung für Felder können ergänzt werden. Beispiele dazu finden Sie weiter unten im Abschnitt "Beispiele: Javascript".

Das **IDF-Mapping** beschreibt die Abbildung dieses Feldes in das InGrid-Data-Format (IDF). Nur wenn das Feld ins IDF geschrieben worden ist, wird es auch in den Detaildaten bei einer Anfrage auftauchen. Beispiele dazu erfolgen weiter unten im Abschnitt "Beispiele: IDF-Mapping".


Die **Syntaxüberprüfung** analysiert den eingegebenen Javascript-Code, welcher unter dem Reiter Javascript oder IDF-Mapping eingetragen wurde. Diese Überprüfung ist sehr restriktiv, so dass der Code auch trotz einer Fehlermeldung korrekt ausgeführt wird. So wird bspw. bei einem Variablenvergleich mit "==" darauf hingewiesen, dass "===" verwendet werden sollte. Im ersten Fall würde der Vergleich _2 == "2"_ korrekt sein, jedoch nicht _2 === "2"_ . Eine weitere oft irritierende Meldung ist _Implied global_ , welches eine Auflistung an Variablen zeigt, die nicht definiert wurden. Bei der Verwendung von globalen Variablen, können diese dann möglicherweise nicht korrekt aufgelöst werden. Ist man sich sicher, dass diese Variable wirklich im auszuführenden Kontext existiert, so kann diese Meldung vernachlässigt werden.

Der **Indexname** definiert den zu verwendenden Namen während der Indexierung des Kataloges. Wird kein Name ausgewählt, so wird dieses Feld auch nicht im Index erscheinen und ist auch nicht durchsuchbar!

Die **Breite** gibt an, wieviel Platz das Element in der Zeile einnehmen soll. Die Angabe ist in Prozent, so dass "100" bedeutet, dass die gesamte Breite verwendet werden soll und "50", nur die Hälfte. Werden zwei Elemente mit jeweils 50% Breite angegeben, so werden diese korrekt nebeneinander positioniert. Damit hat man eine flexible Möglichkeit das Layout individuell anzupassen.


Bei Textfeldern ist es möglich, die " **Anzahl der Zeilen** " anzugeben. Dadurch lassen sich mehrzeilige Textboxen erstellen, für Felder, die mehr Text beinhalten sollen.


Bei Nummernfeldern ist es möglich, eine " **Einheit** " mit anzugeben. Diese wird hinter der Eingabebox und sprachabhängig angezeigt.


Bei einer Auswahlliste lassen sich die " **Einträge** " definieren, die fest vorgeben werden sollen. Diese werden auch wieder mehrsprachig angegeben und sind über eine eigene automatisch generierte ID miteinander synchronisiert. Die anzuzeigende Reihenfolge kann ebenfalls verändert werden, indem eine Zeile über den linken "Griff" an eine beliebige Position verschoben wird. Des Weiteren ist es möglich, freie Einträge in der Auswahlliste zu erlauben. Dazu muss die Checkbox " **Erlaube freie Einträge** " angekreuzt werden.


Für Tabellen lassen sich die " **Anzahl der Reihen** " definieren, die initial (und leer) angezeigt werden sollen. In der Spaltendefinition lässt sich eine " **Neue Spalte** " hinzufügen, löschen oder auch bearbeiten. Eine Spalte kann vom Typ Textfeld, Nummernfeld, Datumsfeld oder Auswahlliste sein. Die Erstellung einer Spalte orientiert sich an der, der anderen Elemente. Die **Breite** einer Spalte wird hier allerdings in Pixel angegeben.


Nach einem Klick auf "Hinzufügen", wird das neu angelegte Feld noch nicht endgültig gespeichert. Dazu muss auf der Übersichtsseite abschließend der "Speichern"-Button gedrückt werden!


#### Zusätzliches Feld bearbeiten

Das Bearbeiten eines zusätzlichen Feldes unterscheidet sich nur insofern von einem neu angelegten Feld, dass die **ID** nicht verändert werden kann. Für weitere Informationen über die verschiedenen Einstellungen, lesen Sie bitte dazu den vorherigen Abschnitt und/oder die kontextsensitive Hilfe zu den einzelnen Feldern.


Nach einem Klick auf "Aktualisieren", wird das neu angelegte Feld noch nicht endgültig gespeichert. Dazu muss auf der Übersichtsseite abschließend der "Speichern"-Button gedrückt werden!


#### Neue Rubrik anlegen/bearbeiten

Eine **Neue Rubrik** wird erstellt, indem auf dem entsprechenden Button gedrückt wird. Jede Rubrik kann verschiedene zusätzliche Felder enthalten. Wird eine zusätzliche Rubrik gelöscht, werden auch alle beinhalteten zusätzliche Felder entfernt (nachdem abschließend auf "Speichern" gedrückt wurde).

Einer neuen Rubrik weist man zuerst eine eindeutig identfizierbare ID zu. Darüber hinaus lassen sich die Beschriftung und ein Hilfetext (lokalisiert) eintragen.


#### Beispiele: Javascript

Die folgenden Beispiele sollen die Möglichkeiten zeigen, wie man ein zusätzliches Feld mit Ereignissen verknüpft und/oder das Verhalten beeinflusst. In diesen Beispielen wird von einem neuen Feld ausgegangen, welches mit der ID "neuesElement" angelegt wurde. Die ersten Beispiele beziehen sich auf die Validierung von Feldern, welche während eines normalen Speichervorganges ausgeführt werden. Bei einem Fehler wird das Objekt dann nicht gespeichert.


```JavaScript
// Textelement erlaubt nur Email-Adressen
dijit.byId("neuesElement").regExpGen = dojox.validate.regexp.emailAddress;

// Textelement darf nicht das Wort "NO" haben
dijit.byId("neuesElement").validator= function(value) {if (value == "NO") return false; else return true;}
```


Mit Javascript und dem DOJO-Framework lässt sich jedes mögliche Verhalten nachbilden, wodurch komplexe Strukturen entstehen können. Deshalb wurden ab der IGE Version 3.0.1 diverse unterstützende Funktionen eingeführt, die den Umgang erleichtern sollen. Folgende Funktionen stehen zur Verfügung:

```JavaScript
Validation.addEmailCheck(/*String*/elementId, /*boolean*/onPublish);
Validation.addUrlCheck(/*String*/elementId, /*boolean*/onPublish);
Validation.addValueCheck(/*String*/elementId, /*String*/value, /*boolean*/invert, /*String*/message, /*boolean*/onPublish);
Validation.addNumberCheck(/*String*/elementId, /*int*/min, /*int*/max, /*String*/message, /*boolean*/onPublish);
Validation.addTableCellCheck(/*String*/tableId, /*Array*/columnIds, /*function*/f, /*boolean*/onPublish);
```


```JavaScript

// Textelement erlaubt nur Email-Adressen beim Speichern
Validation.addEmailCheck("neuesElement");
// Textelement erlaubt nur Email-Adressen beim Veröffentlichen
Validation.addEmailCheck("neuesElement", true);
// Textelement erlaubt nur URLs beim Veröffentlichen
Validation.addUrlCheck("neuesElement", true);


// Textelement darf nicht das Wort "NO" haben
Validation.addValueCheck("neuesElement", "NO", true, "You must not write 'NO'!");
// Textelement darf nur das Wort "NO" haben beim Veröffentlichen
Validation.addValueCheck("neuesElement", "NO", false, "You have to write 'NO'!", true);
// Feld darf nur eine Zahl zwischen 1 und 10 haben
Validation.addNumberCheck("neuesElement", 1, 10, "Zahl muss zwischen 1 und 10 sein!");
// Feld darf nur eine Zahl zwischen 1 und 10 beim Veröffentlichen haben
Validation.addNumberCheck("neuesElement", 1, 10, "Zahl muss zwischen 1 und 10 sein!", true);
```



Möchte man die Validierung nur durchführen, wenn ein Objekt veröffentlich werden soll, so muss ein anderer Ansatz gewählt werden! Laut des Publisher/Subscriber Prinzips, meldet man sich bei einem Ereignis an. Tritt dieses Ereignis auf, wird die eigene geschriebene Funktion ebenfalls zu diesem Zeitpunkt ausgeführt. Dafür gibt es das spezielle Ereignis " **/onBeforeObjectPublish** ". Während bei einer Validierung, die vor jedem Speichern geschieht, die Funktion 'true' oder 'false' zurückliefern muss, gilt es hier, sich die ID des Elements zu merken. Dies geschieht in dem einzigen Parameter, der der Funktion übergeben wird. Hier ein kleines Beispiel:


```JavaScript
// vor dem Publizieren muss das Element mehr als 5 Zeichen haben
dojo.subscribe("/onBeforeObjectPublish", function(invalidIDs) {if (dijit.byId("neuesElement").get("value").length < 5) { invalidIDs.push("neuesElement"); }});
```



Sobald also mindestens ein Wert in 'invalidIDs' steht, wird auch das Veröffentlichen fehlschlagen! Das Element mit der entsprechenden ID wird dann rot gefärbt.

Das folgende Beispiel zeigt die Validierung einer Tabelle, welches etwas komplizierter ist und durch eine abstrahierte Methode vereinfacht wurde. Dazu dient die Methode _Validation.addTableCellCheck_ , welche 4 Parameter haben kann. Der erste Parameter beschreibt die ID der Tabelle, der zweite, die zu überprüfenden Spalten mit ihren IDs, der dritte stellt die Validierungsfunktion zur Verfügung und der letzte Parameter entscheidet, ob die Validierung während der Eingabe und des Abspeicherns erfolgt oder nur beim Veröffentlichen. Die Validierungsfunktion hat wiederum 3 Parameter. Der erste ist der Wert der zu überprüfenden Zelle, der zweite ist die ID der Spalte die gerade überprüft wird (es können nur die IDs sein, die als 2. Parameter an addTableCellCheck übergeben worden sind) und der gesamte Datensatz, welcher für Vergleiche genutzt werden kann.

```JavaScript
// die Spalten mit den IDs 'name' und 'birth' der Tabelle 'neuesElement' dürfen
// nicht leer sein wenn eine dieser Spalten bereits beschrieben wurde
var f = function(value, colId, rowData) {// get the other column for comparison var otherCol = (colId === "name") ? "birth" : "name"; if ((!value &#124;&#124; value === "") && rowData[otherCol] && rowData[otherCol].length > 0) { return false; } return true;};

**Validation.addTableCellCheck**("neuesElement", ["name","birth"], f, true);
```



In der Variablen _invalidIDs_ werden die gesamten IDs von den Elementen gesammelt, die einen Validierungsfehler aufzeigen.

Ein weiteres verfügbares Ereignis ist"/onObjectClassChange", welches immer auftritt, wenn die Objektklasse manuell oder automatisch (durch das Laden eines anderen Objektes) sich ändert. Hierbei wird die neue Klasse als Parameter an den Subscriber übergeben!

```JavaScript
// toggle visibility of field depending on the selected class
dojo.subscribe("/onObjectClassChange", function(c) {if (c.objClass === "Class3") dojo.addClass("uiElementAddneuesElement", "hide"); else dojo.removeClass("uiElementAddneuesElement", "hide")})
// output: "class has changed to: Class3"
```

Um nicht nur auf das zusätzliche Feld, sondern auf den gesamten Container inklusive des Labels zuzugreifen, verwendet man den Prefix 'uiElementAdd' vor der ID des Feldes. Mit _dojo.addClass_ bzw. _dojo.removeClass_ lässt sich die Sichtbarkeit eines Elementes steuern, wie im letzten Beispiel gezeigt.

Weiterhin gibt es noch das Ereignis"/onInspireTopicChange", welches bei einer Änderung an der INSPIRE-Themen Liste auftritt. Der Parameter _topics_ ist ein Array mit den IDs der eingetragenen INSPIRE-Themen in der Tabelle. Hier ein Beispiel:

```JavaScript
// print all inspire topics when table has changeddojo.subscribe("/onInspireTopicChange", function(o) {console.debug("inspire changed: " + o.topics);})
```


Für ein besseres Verständis dieser Prinzipien empfiehlt es sich die Dokumentation des DOJO-Frameworks anzuschauen! (http://dojotoolkit.org/documentation/)



#### Beispiele: IDF-Mapping

```JavaScript
importPackage(Packages.de.ingrid.iplug.dsc.om);
// add Namespaces to Utility for convenient handling of NS !
DOM.addNS("gmd", "http://www.isotc211.org/2005/gmd");
DOM.addNS("gco", "http://www.isotc211.org/2005/gco");

if (!(sourceRecord instanceof DatabaseSourceRecord)) {
throw new IllegalArgumentException("Record is no DatabaseRecord!");}

var id = sourceRecord.get(DatabaseSourceRecord.ID);
var igcProfileControlId = XPATH.getString(igcProfileControlNode, "igcp:id");
var content = SQL.first("SELECT list_item_id FROM additional_field_data WHERE obj_id=? AND field_key=?", [id, igcProfileControlId]);

if (content) {
var types = ["spatialPlan.country", "spatialPlan.state", "spatialPlan.regional", "spatialPlan.subRegional", "spatialPlan.supraLocal", "spatialPlan.local", "spatialPlan.subLocal", "spatialPlan.other", "spatialPlan"]; var hierarchyLevelName = DOM.getElement(idfDoc, "//idf:idfMdMetadata/gmd:hierarchyLevelName"); if (hierarchyLevelName) { hierarchyLevelName.addElementAsSibling("gmd:hierarchyLevelName/gco:CharacterString") .addText(types[content.get("list_item_id")-1]); } else { var hierarchyLevel = DOM.getElement(idfDoc, "//idf:idfMdMetadata/gmd:hierarchyLevel"); if (hierarchyLevel) { hierarchyLevel.addElementAsSibling("gmd:hierarchyLevelName/gco:CharacterString") .addText(types[content.get("list_item_id")-1]); } else { log.error("Hierarchy-Level could not be found and so HierarchyLevelName could not be added!"); } }}

```

Der erste Teil des Beispiels gilt der Initialisierung und sollte übernommen werden. Interessant wird es ab der Deklaration der Variablen _content_ . Hier wird eine SQL-Anfrage definiert und ausgeführt, wobei die Daten als Antwort in _content_ abgelegt werden. Die _obj_id_ wird für die Zugehörigkeit zum Objekt benötigt und der _field_key_ für die Identifikation des (zusätzlichen) Feldes mit den Daten von dem Objekt.

Wenn das Feld Daten beinhaltet, dann müssen diese in das zu erstellende Dokument (in diesem Fall eine XML-Datei) eingeführt werden. Zuerst holt man sich daher mit einem XPath die Stelle, wo man die Daten in die Struktur _einhängen_ will. Dies geschieht mit _DOM.getElement(...)_ . Es ist wichtig darauf zu achten, dass man sich an die ISO korrekt hält, so dass Anfragende Dienste das erstellte Dokument einlesen können.

Es kann vorkommen, dass die Stelle, wo die Daten eingefügt werden sollen, nicht existiert. Dies kann man von der ISO ableiten und es müssen Überprüfungen dafür vorgesehen werden. In diesem Fall wird das laut ISO vorhergehende Element abgerufen, welches existieren muss. Sollte dieses auch nicht existieren, so wird eine Fehlermeldung geschrieben.

Wurde die Stelle in dem Dokument gefunden, so können mit _domPosition.addElementAsSibling(...).addText(...)_ die Daten hinzugefügt werden. (domPosition ist die Position im Dokument die mit DOM.getElement() abgefragt wurde)

<a name="overall-catalog-management-6"></a>

### Adresse ersetzen


Mit dieser Funktion kann eine Adresse in allen Objekten, in der sie vorkommt, durch eine andere ersetzt werden. Sie ist nur dem Katalogadministrator zugänglich.

Grundsätzlich sollte bei einer Änderung von Zuständigkeiten die Adresse, wenn es möglich ist, durch eine Änderung der Angaben in der Adressverwaltung in der Erfassung des InGridEditors (IGE) geändert werden. Scheidet z.B. der bisher zuständige Bearbeiter ‚Meier’ aus und die Zuständigkeiten fallen an seinen Nachfolger ‚Müller’, so ist der einfachste und korrekte Weg der Adressänderung, dass _Name_ , _Vorname_ , ggf. _Telefonnummer_ etc. in der Adresse ‚Meier’ in die Angaben für ‚Müller’ geändert werden.

Manchmal ist das beschriebene Vorgehen aber nicht möglich. Wenn z.B. der bisher für einen Teilbaum zuständige ‚Müller’ zusätzlich die Aufgaben des Kollegen ‚Meier’ übernehmen muss. In diesem Fall ist die Funktion _Adresse ersetzen_ anzuwenden.

Wählen Sie unter _Zulöschender Adresse_ die Adresse aus, die endgültig gelöscht werden soll. Alle Objekte, in denen die gewählte Adresse auftritt, werden angezeigt, ebenso alle Objekte und Adressen, in denen die Adresse als Verantwortlicher auftritt.

 **Hinweis:** Sie können diese Angaben (reiterweise) _Als CSV Datei speichern_ .

Wählen Sie eine _Neue Adresse_ . Es werden zur Information einige Angaben zu der Adresse angezeigt.

 **Hinweis:** Es können ausschließlich veröffentlichte Adressen ausgewählt werden.

Nach dem Klicken auf den Button _Ersetzen & Löschen_ und anschließendem Bestätigen der Sicherheitsabfrage, wird in allen Objekten, die die Adresse als Adressreferenz unter "Adressen" enthalten, diese mit der _Neuen Adresse_ ersetzt. Taucht die Adresse als Verantwortlicher (IGE Nutzer) in einem Objekt auf, so muss zuerst dem Benutzer eine neue Adresse zugewiesen werden (s.u.). Anschließend wird die _Zu löschende Adresse_ aus dem Katalog entfernt.

 **Hinweis:** Wenn ein IGE-Nutzer der _Zulöschenden Adresse_ zugeordnet ist, werden Sie aufgefordert, diesem IGE-Nutzer eine andere Adresse zuzuordnen. Sie können die Funktion _Ersetzen & Löschen_ erst durchführen, nachdem der Nutzer eine andere Adresse erhalten hat.

<a name="overall-catalog-management-7"></a>

### Suchbegriffe


Der InGridCatalog (IGC) verwendet, je nach Konfiguration, folgende Thesauri:

* den Umweltthesaurus (UMTHES) des Umweltbundesamtes in Dessau-Rosslau. Er enthält mehr als 30.000 Fachbegriffe aus dem Themengebiet "Umwelt".
Der UMTHES wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) vom Umweltbundesamt zur Verfügung gestellt.
* den europäischen Umweltthesaurus [GEMET (GEneral Multilingual Environmental Thesaurus)](http://www.eionet.europa.eu/gemet) .

Die Thesaurus-Deskriptoren werden im IGC sowohl als IDs als auch als Begriff gespeichert. Sowohl der UMTHES als auch der GEMET werden gepflegt und entwickeln sich weiter. Daher erfährt der Thesaurus eine regelmäßige Aktualisierung.

Nach jeder Aktualisierung des Thesaurus muss der Datenbestand des IGC auf seine Konsistenz mit der neusten Version des Thesaurus überprüft und ggf. angepasst werden. Dies kann der Katalogadministrator automatisch über die Funktion _Suchbegriffe_ im Menüpunkt _Gesamtkatalogmanagement_ durchführen.

Der Aktualisierungsvorgang wird **online** durchgeführt, indem Sie den Button _Aktualisierung starten_ anklicken. In diesem Fall wird der Thesaurus online über das Netz abgefragt.

Nach der Aktualisierung werden einige Informationen zum letzten Prozess in dem Informationskasten angezeigt.

Detaillierte Informationen zu jeder Veränderung werden in der darunter stehenden Tabelle angeboten. In der ersten Spalte wird die ursprüngliche _Bezeichnung_ des Suchbegriffs angezeigt. Es folgt der Typ des Begriffs. Es kann sich um folgende Typen handeln:

* **_UMTHES Term_**:
Begriff aus dem UMTHES-Thesaurus
* **_GEMET Term_**:
Begriff aus dem GEMET-Thesaurus. Der Begriff wird auch noch in englisch mit dem Zusatz "(alternativ)" angezeigt, wenn der Thesaurus so konfiguriert ist.
* **_Freier Term_**:
Freier Suchbegriff (kein Thesaurus Deskriptor)

Zu jedem geänderten Begriff wird die _Ergriffene Maßnahme_ angezeigt. Es gibt folgende Möglichkeiten:

* **_Deskriptor in freien Suchbegriff überführt_**:
Ein Thesaurusbegriff ist nicht mehr im Thesaurus als Deskriptor enthalten. Er wird von einem Thesaurus-Suchbegriff in einen freien Suchbegriff überführt.
* **_Freien Suchbegriff ersetzt durch Deskriptor "_Suchbegriff_" (UMTHES/GEMET Term)_**:
Ein freier Suchbegriff wird als Thesaurus-Deskriptor identifiziert und von einem freien Suchbegriff in einen Thesaurus-Suchbegriff überführt.
* **_Freien Suchbegriff ergänzt mit Deskriptor "_Suchbegriff_" (UMTHES/GEMET Term)_**:
Ein freier Suchbegriff wird als Synonym zu einem Thesaurus-Deskriptor identifiziert. Es wird der zugehörige Thesaurus-Deskriptor als Thesaurus-Suchbegriff ergänzt. Der freie Suchbegriff bleibt erhalten.
* **_Deskriptor aktualisiert, ist jetzt "_Suchbegriff_" (UMTHES/GEMET Term)_**:
Ein Thesaurus-Deskriptor hat seinen Namen geändert, der Name wird aktualisiert.
* **_Deskriptor ERSETZT durch Deskriptor "_Suchbegriff_" (UMTHES/GEMET Term)_**:
Ein Thesaurus-Deskriptor hat seine ID geändert, die ID wird aktualisiert.

Abschließend wird die Anzahl der Objekte und Adressen angezeigt, in denen der veränderte Suchbegriff verwendet wurde.

Die Liste der Änderungen können Sie sich über den Button _Als CSV-Datei speichern_ vom Server herunter laden.

<a name="overall-catalog-management-8"></a>

### Raumbezüge


Der InGridCatalog (IGC) nutzt den Geo-Thesaurus Umwelt (GTU). Er wird über den [Semantic Network Service (SNS)](http://www.semantic-network.de/) des Umweltbundesamtes zur Verfügung gestellt.

Die Geografischen Begriffe des GTU werden im IGC sowohl als SNS-IDs als auch als Begriff und - soweit vorhanden - Koordinaten gespeichert. Der GTU wird gepflegt und entwickelt sich weiter. Daher erfährt auch der SNS eine regelmäßige Aktualisierung der geografischen Begriffe.

Nach jeder Aktualisierung des SNS muss der Datenbestand des IGC auf seine Konsistenz mit der neusten Version des SNS überprüft und ggf. angepasst werden. Dies kann der Katalogadministrator automatisch über die Funktion _Raumbezüge_ im Menüpunkt _Gesamtkatalogmanagement_ durchführen.

Die Aktualisierung der Suchbegriffe im IGC kann **offline** über eine vom SNS gelieferte Datei durchgeführt werden. Hierzu laden Sie die Datei über den Button _Durchsuchen_ und starten den Vorgang über den Button _Aktualisierung starten_ .

Alternativ können Sie den Aktualisierungsvorgang auch _online_ durchführen, indem Sie Button _Aktualisierung starten_ anklicken, ohne vorher eine Datei geladen zu haben. In diesem Fall wird SNS online über das Netz abgefragt. Diese Methode hat den Vorteil, dass vorher keine Datei vom Umweltbundesamt oder der KST InGrid-Portal zur Verfügung gestellt werden müssen, dauert aber je nach Netzauslastung evtl. etwas länger.

Nach der Aktualisierung werden einige Informationen zum letzten Prozess in dem Informationskasten angezeigt.

Detaillierte Informationen zu jeder Veränderung werden in der darunter stehenden Tabelle angeboten. In den ersten zwei Spalten werden die ursprüngliche Bezeichnung der _Raumeinheit_ und die von SNS gelieferte _ID_ angezeigt.

Zu jedem geänderten Begriff wird die _Ergriffene Maßnahme_ angezeigt. Es gibt folgende Möglichkeiten:

* **_entfällt_**:
Der Raumbezug wurde aus SNS entfernt. Er wird auch aus den Objekten des IGC gelöscht.
* **_neue Bezeichnung "…", neuer Grenzverlauf, neuer Topic-Type "…", neue Topic-Id "…"_**:
Die Bezeichnung, der Grenzverlauf, der Topic-Type oder die Topic-ID haben sich verändert. Es können sich einzelne Punkte oder eine Kombination verändert haben. Die jeweils neuen Bezeichnungen oder IDs werden angezeigt.

Abschließend wird die Anzahl der Objekte angezeigt, in denen der veränderte bzw. gelöschte geografische Begriff verwendet wurde.

Die Liste der Änderungen können Sie sich über den Button _Als CSV-Datei speichern_ vom Server herunter laden.

## Verwaltungsfunktion: Import/Export


<a name="import-export-1"></a>

### Export


Der Export erfolgt in ein dem InGridCatalog (IGC) eigenes XML-Schema, das die Eigenschaften des IGC-Datenmodells optimal abbildet.

Es gibt zwei Möglichkeiten für den Export den _Teilexport_ und den _Teilbaumexport_ .

**Teilexport**

Über den Teilexport werden einzelne Objekte aus dem Katalog exportiert, die im Feld _XML-Export-Kriterium_ der Feldgruppe _Zusatzinformation_ mit einer freiwählbaren Zeichenkette markiert wurden. Alle verwendeten Zeichenketten werden in der Auswahlliste unter _Teilexport_ aufgelistet und können ausgewählt werden. Es werden grundsätzlich einzelne Objekte ohne nachgeordnete Objekte exportiert. Adressen können nicht exportiert werden.

Der Export wird über einen Klick auf _Export starten_ angestoßen.

**Teilbaumexport**

Über den _Teilbaumexport_ können ganze Teilbäume einschließlich ihrer Struktur exportiert werden.

Klicken Sie auf _Teilbaum auswählen_ . Es öffnet sich ein Dialog, über den Sie sowohl Objekte als auch Adressen auswählen können. Über einen Klick auf ein Objekt bzw. eine Adresse wird dieses rot markiert. Über Auswählen wird das markierte Objekt bzw. die markierte Adresse in das Feld _Teilbaumexport_ übertragen.

 **Hinweis:** Sie können auch die Ebenen _Objekte_ oder _Adressen_ im Strukturbaum auswählen. Es werden dann der ganze Strukturbaum der Objekte bzw. der Adressen exportiert.

Wenn Sie die Einstellung _Nur der ausgewählte Datensatz_ wählen, wird nicht der Teilbaum sondern nur das einzelne ausgewählte Objekt bzw. Adresse exportiert.

Der Export wird über einen Klick auf _Export_ starten angestoßen.

Normalerweise werden nur veröffentlichte Objekte bzw. Adressen exportiert. Wird jedoch ein vollständiger Export inklusive der Bearbeitungsversionen gewünscht, so muss die Auswahl _"auch Arbeitsversionen exportieren"_ angekreuzt werden.

**Informationen zum letzten Prozess**

Der Export wird in allen Fällen asynchron ausgeführt. Je nach Menge der zu exportierenden Objekte und Auslastung des Servers kann der Vorgang mehrere Minuten in Anspruch nehmen.

Im Fenster _Informationen zum letzten Prozess_ werden Informationen zum letzten angestoßenen Exportvorgang angezeigt. Ist der Vorgang beendet, wird unter _Download der Exportdatei_ ein _link_ angezeigt.

Klicken Sie auf den _link_ und laden Sie damit die Exportdatei vom Server herunter. Es handelt sich um eine XML-Datei, die im GNU-Zip-Format komprimiert wurde. Sie können sie mit entsprechenden Anwendungen auf Ihrem Rechner entpacken und z.B. im Internet-Browser betrachten.

<a name="import-export-2"></a>

### Import


**Import-Datei**

Geben Sie eine Import-Datei an. Die Datei muss (wie die Export-Datei) eine XML-Datei sein, die im GNU-Zip Format komprimiert wurde. Sie wird über die Schaltfläche _Durchsuchen_ vom lokalen Rechner ausgewählt. Dazu öffnet sich ein Dialog, wie er für den von Ihnen verwendeten Internet-Browser üblich ist.

**Import-Typ**

Es gibt drei verschiedene Formate die importiert werden können:

 **InGrid Catalog:** Der Import erfolgt im gleichen Format wie der [Export](#import-export-1) .

 **CSW 2.0.2 AP ISO 1.0 (Single Metadata file / ZIP Archive):** Die Importdateien müssen gültige XML-Dokumente im OGC-Format des Catalog Service Web (CSW) in der Version 2.0.2 und nach Definition des Application Profile ISO 1.0 bestehen. Dabei kann eine XML Datei oder ein ZIP Archiv importiert werden, in dem XML Datein ohne Pfadangaben verpackt wurden.

 **ArcGIS ISO-Editor (Single Metadata file / ZIP Archive):** Import von mit Hilfe von ArcGIS erzeugten XML-Dateien. Die Dokumente müssen aus ArcGIS heraus im ISO-Format gespeichert worden sein. Es kann eine XML Datei oder ein ZIP Archiv importiert werden, in dem XML Datein ohne Pfadangaben verpackt wurden.

**Importierte Datensätze veröffentlichen**

Diese Option steht nur bei den Import-Typen CSW und ArcGIS zur Verfügung!

Standardmäßig werden alle importierten Objekte und Adressen in einer Arbeitsversion zwischengespeichert, also noch nicht veröffentlicht. Mit der Einstellung _Importierte Datensätze veröffentlichen_ können Sie eine sofortige Veröffentlichung erzwingen, ohne dass die Datensätze noch einmal kontrolliert und ‚per Hand’ veröffentlicht werden.

 **Hinweis:** Die Einstellung Importierte Datensätze veröffentlichen wird überschrieben, wenn Pflichtangaben in den Objekten oder Adressen fehlen. Das Objekt bzw. die Adresse wird dann doch nur als Arbeitsversion importiert und muss zur Veröffentlichung nachbearbeitet werden.

**Identische Metadaten überschreiben**

Über den eindeutigen Identifikationsschlüssel eines Metadatensatzes können gleiche Metadaten erkannt werden. Ist diese Option aktiviert, so werden die Metadaten im Katalog mit denen von der Import-Datei überschrieben. Dabei kann es auch passieren, dass das Objekt bzw. die Adresse sich im Hierarchiebaum verschiebt.

**Importierte Datensätze ausschliesslich unter dem gewählten Importknoten anlegen**

Die Objekte und Adressen des InGridCatalogs (IGC) haben eindeutige Identifikationsschlüssel (UUID). Werden Objekte aus externen Systemen in den IGC importiert, wird der von dem externen System mitgelieferte Schlüssel als originaler Identifikationsschlüssel (OID) zusätzlich in dem Objekt gespeichert.

Die UUIDs der Adressen werden aus Name, Email und Organisation ermittelt. Existiert in einer Adresse sowohl Organisation, als auch Individualname, wird die Organisation als separate Adresse importiert. Die Individualadresse wird als Kind der Organisation importiert und für die Referenz in den Objekten verwendet.

Standardmäßig wird ein zu importierendes Objekt (bzw. eine zu importierende Adresse) anhand UUID und OID im Datenbestand identifiziert. Existiert es bereits, so wird es mit den zu importierenden Angaben überschrieben. Dabei bleibt der Standort innerhalb des Strukturbaums erhalten. Der Importknoten (siehe unten) wird in diesem Fall ignoriert.

Die Standardeinstellung können Sie überschreiben, indem Sie _Importierte Datensätze ausschließlich unter dem gewählten Importknoten anlegen_ anwählen. In diesem Fall werden die Objekte, auch wenn Sie bereits im Katalog existieren sollten, unterhalb des angegebenen Importknotens (siehe unten) abgespeichert (Es wird dabei eine neue UUID vergeben).

**Teilbaumimport**

Für einen Import ist immer die Angabe eines _Ausgewählten übergeordneten Objekts_ und einer _Ausgewählten übergeordneten Adresse_ notwendig. Alle noch nicht existierenden Objekte und Adressen werden unterhalb dieser Importknoten abgelegt. Dabei bleibt eine ggf. in der Importdatei mitgelieferte Struktur der Objekte bzw. Adressen erhalten.

 **Hinweis:** Die Angaben _Ausgewähltes übergeordnetes Objekt_ und _Ausgewählte übergeordnete Adresse_ sind auch dann notwendig, wenn sie für die speziell gewählte Importdatei nicht genutzt werden (weil z.B. nur bereits existierende Objekte oder Adressen importiert werden). Wählen Sie in solch einem Fall einfach zwei Dummy-Angaben aus.

**Informationen zum letzten Prozess**

Der Import wird asynchron ausgeführt. Je nach Menge der zu importierenden Objekte und Auslastung des Servers kann der Vorgang mehrere Minuten in Anspruch nehmen.

Im Fenster _Informationen zum letzten Prozess_ werden Informationen zum letzten angestoßenen Importvorgang angezeigt. Ist der Vorgang beendet, wird unter _Informationen zum letzten Importprozess_ ein _link_ angezeigt.

Klicken Sie auf den _link_ und laden Sie damit die Datei log.txt vom Server. In ihr sind die Informationen zum Importvorgang (Verlaufsmeldungen, Warnungen und Fehlermeldungen) enthalten. Sie können sie mit einem üblichen Editor, wie z.B. WordPad, ansehen.
