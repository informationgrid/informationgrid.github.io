---
layout: default
title: Webmap Client
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der Webmap Client basiert auf den Schweizer-Client "geo.admin.ch" ([https://map.geo.admin.ch/](https://map.geo.admin.ch/)) und dient zur Darstellung von Kartenmaterial (z.B. WMS, KML, etc.) im Portal. Neben der Darstellung auf dem Desktop ist der Webmap Client, wie das Portal, auch für mobile Geräte geeignet.

Der Client wird über das Portal mit installiert und ist im Portal unter dem Menü-Eintrag "Karte" integriert. Der Webmap Client kann aber auch ohne das Portal aufgerufen werden:

- http://HOSTNAME/ingrid-webmap-client/frontend/prd/ (komprimierte Version)
- http://HOSTNAME/ingrid-webmap-client/frontend/src/ (unkomprimierte Version)

Im Webmap Client sind mehrere Frameworks/Technologien in einem vereint. So wird OpenLayers 3 verwendet um Interaktionen mit dem Kartenmaterial, wie z.B. diverse WMS oder KML Layer anzuzeigen, zu ermöglichen. Das User-Interface besteht aus den Java-Script Frameworks AngularJS und jQuery, aus den CSS-Tools Font-Awesome und Bootstrap und vieles mehr.

Zu den möglichen Interaktionen oder auch Funktionen des Webmap Clients können Sie in den nächsten Abschnitten mehr erfahren.  

## Frontend

Der Webmap Client hat zahlreiche Funktionen mit dem Umgang von Geodaten, von Darstellung von WMS Layern und KML bis zum Drucken und Zeichnen von Kartenmaterial. Die einzelnen Funktionen werden nun hier aufgelistet:

<a name="teilen"></a>
### Teilen

Über das Menü des WebMap Clients besteht die Möglichkeit Ihren Kartenzustand zu verbreiten:

 - E-Mail 
 - QR-Code
 - Soziales Netzwerk
 - Link
 - Integration per iFrame-Template

Ihr Kartenzustand bedeutet hierbei auch die von Ihnen hinzugefügten Layern (z.B. WMS, KML) oder auch Ihre Zeichnungen auf der Karte.

![Webmap Client - Teilen](../images/mapclient/frontend/mapclient_share.png "Webmap Client Teilen")

**E-Mail**

Um Ihren Kartenzustand per E-Mail zu teilen, können Sie den E-Mail-Button verwenden. 
Bei Betätigung des Buttons öffnet sich Ihr E-Mail-Programm oder Sie werden nach Ihrem E-Mail-Programm gefragt. Es wird Ihnen eine E-Mail mit dem Link des Kartenzustandes im Nachrichtenbereich breit gestellt. Geben Sie Empfänger und Betreff an und schon kann die E-Mail versendet werden.

**QR-Code**

In der heutigen Zeit ist auch der QR-Code gang und gäbe um Informationen zu verbreiten, vor allem durch die Zunahme von Smartphones und Tablets. Um z.B. Ihren Kartenzustand auf Ihr mobiles Gerät zu übertragen, erstellen Sie über den QR-Code-Button ein QR-Code und lesen Sie den QR-Code mit Ihrem Gerät/App aus.

**Soziale Netzwerke**

Gang und gäbe ist auch die Verbreitung von Informationen über das Soziale Netzwerk. Im Mapclient besteht die Möglichkeiten drei soziale Kanäle zu bedienen:

- Facebook
- Twitter
- Google+

Bei allen drei Netzwerken wird hierbei ein Link der Karte geteilt.

**Link**

Natürlich können Sie auch Ihre Karte per Copy-Paste kopieren. Hierfür existiert ein Bereich **Link Teilen** mit einem Textfeld in dem die URL der aktuellen Karte hinterlegt ist. 

**Einbetten**

Haben Sie eine eigene Webseite und möchten Sie Ihre Karte dort integrieren? So verwenden Sie den aufklappbaren Bereich 'Einbetten'. Auch hier wird Ihnen ein Textfeld angeboten mit einem iFrame-Template, welchen Sie kopieren können und in dem Source-Code Ihrer eigene Webseite hinzufügen können. Der Webmap Client bietet Ihnen auch an das generierte Template per Vorschau anzeigen zu lassen. Klicken Sie hierfür einfach den Button 'Vorschau' im Bereich 'Einbetten' und führen weitere Änderungen (z.B. Größe des iFrames) durch.

![Webmap Client - Einbetten](../images/mapclient/frontend/mapclient_share_preview.png "Webmap Client Einbetten")

Die URL Ihres Kartenzustandes wird dabei immer durch ein URL-Shortener verkürzt. Mehr Informationen finden Sie [hier](#url-shortener).

<a name="drucken"></a>
### Drucken

Sie wollen Ihre Karte auf Papier bringen? Öffnen Sie hierfür im Menü den Bereich 'Drucken'. Hier können Sie ein PDF generieren lassen, welches dann ausgedruckt werden kann.

Wird das Drucken aktiviert, so wird in der Karte ein Ausschnitt hervorgehoben, der z.Zt. auf ein PDF hinterlegt werden würde. Diesen Ausschnitt können Sie anpassen, indem Sie z.B. die Karte verschieben, hinein- oder hinauszoomen oder auch im Druck-Menü den 'Massstab' anpassen.

Zusätzlich können Sie dem PDF neben dem Kartenausschnitt einen Titel, eine Beschreibung/Kommentar, die Legende der Layer oder auch ein Koordinatennetz hinzufügen und die Orientierung (Hoch-/Querformat) in den DIN A3 bzw. DIN A4 Größe ändern.

![Webmap Client - Drucken](../images/mapclient/frontend/mapclient_print.png "Webmap Client Drucken")

In dem generierten PDF wird neben Ihrem Kartenausschnitt anhand eines [URL-Shorteners](#url-shortener) die URL Ihres Kartenzustandes sowie ein [QR-Code](#qr-code) hinterlegt.

### Zeichnen & Messen

Unter dem Menüpunkt **Zeichnen & Messen** können Sie Ihre Kreativität freien laufen lassen, Anmerkungen setzen oder auch Strecken zu Ihrer Karte messen. Ihre Zeichnung können Sie anschließend auch als KML-Datei herunterladen, per Funktion Teilen verbreiten oder auch ausdrucken.

![Webmap Client - Zeichnen & Messen](../images/mapclient/frontend/mapclient_draw.png "Webmap Client Zeichnen & Messen")

**Symbol**

Sie möchten (vordefinierte) Symbole auf die Karte legen, so wählen Sie die Funktion **Symbol** und markieren auf der Karte die Stelle, wo Ihr Symbol platziert werden soll. 

Anschließend erscheint das folgende Pop-Up:

![Webmap Client - Zeichnen & Messen - Symbol](../images/mapclient/frontend/mapclient_draw_sym.png "Webmap Client Zeichnen & Messen - Symbol")

Hier können Sie die Größe des Symbols, sowie das Symbol selbst ändern und auch dem Symbol eine Beschreibung vergeben.

**Text**

Sie möchten Ihre Karte mit Texten belegen, so wählen Sie die Funktion **Text** und markieren auf der Karte die Stelle, wo Ihr Text platziert werden soll. 

Anschließend erscheint das folgende Pop-Up:

![Webmap Client - Zeichnen & Messen - Text](../images/mapclient/frontend/mapclient_draw_txt.png "Webmap Client Zeichnen & Messen - Text")

Hier können Sie Ihren Text eingeben, aber auch die Textfarbe anpassen.

**Linie**

Sie möchten eine Linie oder eine Fläche auf Ihre Karte zeichnen, so wählen Sie die Funktion **Linie**. 

- Um eine Linie zu zeichnen, klicken Sie auf der Karte per Einfach-Mausklick an den Stellen, wie Ihre Linie verlaufen soll und beenden Ihre Linie mit Doppel-Mausklick.
- Um eine Fläche zu zeichnen, gehen Sie wie bei der Linie per Einfach-Mausklick vor und beenden Ihre Fläche, indem Sie Ihre Linien mit dem Startpunkt verbinden.

Anschließend erscheint das folgende Pop-Up:

![Webmap Client - Zeichnen & Messen - Linie](../images/mapclient/frontend/mapclient_draw_line.png "Webmap Client Zeichnen & Messen - Linie")

Im Tab **Linie / Fläche** können Sie eine Beschreibung zu Ihrer Linie bzw. Fläche hinterlegen, aber auch die Farbe ändern. Im anderen Tab **Distanz / Fläche** sehen zu Informationen zu Ihrer gezeichneten Linie bzw. Fläche.

**Messen**

Sie möchten eine Strecke oder eine Fläche auf Ihre Karte messen, so wählen Sie die Funktion **Messen**. Sie können hier wie bei der Funktion Linie vorgehen um eine Strecke oder eine Fläche zu messen.

Anschließend erscheint das folgende Pop-Up:

![Webmap Client - Zeichnen & Messen - Messen](../images/mapclient/frontend/mapclient_draw_measure.png "Webmap Client Zeichnen & Messen - Messen")

Hier werden Ihnen Informationen zu Ihrer gezeichneten Strecke oder Fläche dargestellt. 

**Mehr**

Unter **Mehr** gibt es nun weitere Funktionen zu Ihrer Zeichung: 

- Download Ihrer Zeichnung als KML-Datei
- Löschen eines ausgewählten Elementen
- Löschen aller Elementen

![Webmap Client - Zeichnen & Messen - Mehr](../images/mapclient/frontend/mapclient_draw_more.png "Webmap Client Zeichnen & Messen - Mehr")

### Erweiterte Werkzeuge

Das Menü 'Erweitere Werkzeuge' beinhaltet Funktionen mit (externen) Layern. 

Hier können WMS- oder KML-Layer hinzugefügt werden oder auch der Karte hinzugefügten Layer verglichen werden. 

![Webmap Client - Erweiterte Werkzeuge](../images/mapclient/frontend/mapclient_additional.png "Webmap Client Erweiterte Werkzeuge")

**WMS Import**

Wird die Funktion 'WMS Import' aktiviert, so erscheint ein Dialog in dem Sie (vordefinierte) WMS-Dienste laden können. 

![Webmap Client - Erweiterte Werkzeuge "WMS Import"](../images/mapclient/frontend/mapclient_additional_wms.png "Webmap Client Erweiterte Werkzeuge - WMS Import")

Tragen Sie unter 'URL' eine URL zum WMS-Dienst ein (z.B. [http://atlas.wsv.bund.de/bwastr/wms](http://atlas.wsv.bund.de/bwastr/wms) ) ein oder wählen Sie einen vordefinierten Dienst über die Drop-Down-Liste aus und bestätitgen Ihren Eintrag bzw. Auswahl mit dem Button 'Verbinden'.

> Hinweis:
> Hat die URL keine Parameter 'REQUEST', 'SERVICE' oder 'VERSION, so werden Defaultwerte verwendet:
> - REQUEST = GetCapabilities
> - SERVICE = WMS
> - VERSION = 1.3.0

Wird der Dienst erfolgreich geladen, so erscheinen alle Layer des Dienstes in einer Tabelle. Hier stehen verschiedene Funktionen auf einem Layer zur Verfügung:

- Mit einer Auswahl eines Layers per Mausklick wird die Beschreibung (wenn vorhanden) des ausgewählten Layer im Bereich 'Beschreibung' angezeigt.
- Fährt man mit der Maus (Mouse-Over) über ein Layer aus der Liste, so wird der Layer geladen und auf der Karte dargestellt und verschwindet wieder, wenn der Mauszeiger nicht mehr über dem Layer liegt.
- Verwenden Sie die Lupe vor dem Layer-Titel um zum Layer-Bereich (Extent) zu springen.

Um einen Layer der Karte hinzuzufügen wählen Sie einen Layer per Mausklick aus und verwenden den Button 'Layer hinzufügen'. Anschließend werden Sie informiert, ob der ausgewählte Layer hinzugefügt wurde, der Layer wird auf der Karte dargestellt und in der Liste unter dem Akkordeon 'Dargestellte Karten' wurde der Layer hinzugefügt.


**KML Import**

Wird die Funktion 'KML Import' betätigt, so erscheint auch hier ein Dialog. 

![Webmap Client - Erweiterte Werkzeuge "KML Import"](../images/mapclient/frontend/mapclient_additional_kml.png "Webmap Client Erweiterte Werkzeuge - KML Import")

Im Dialog werden zwei Möglichkeiten angeboten ein KML-Layer der Karte hinzuzufügen:

- KML-Layer lokal aus Ihrem Dateisystem
- oder per URL ein KML-Layer zu laden.

Wird ein KML-Layer erfolgreich geladen, so wird dieser Layer unter dem Akkordeon 'Dargestellte Karten' aufgelistet.

**Vergleichen**

Eine weitere Funktion unter dem Menü 'Erweiterte Werkzeuge' ist die Funktion 'Vergleichen'. Durch die Funktion lassen sich Layer, die unter Akkordeon 'Dargestellte Karten' aufgelistet werden, grafisch vergleichen.

Wird unter 'Dargestellte Karten' ein Layer aufgelistet und diese Funktion aktiviert, so erscheint auf der Karte eine rote Linie. 

![Webmap Client - Erweiterte Werkzeuge "Vergleichen"](../images/mapclient/frontend/mapclient_additional_compare.png "Webmap Client Erweiterte Werkzeuge - Vergleichen")

Dabei wird der erste aktive Layer unter 'Dargestellte Karten' im linken Bereich angezeigt und im rechten Bereich ab der roten Linie "abgeschnitten". Dieses Verhalten bleibt auch bei, wenn Sie die Karte verschieben oder die rote Linie per gedrückt gehaltenem Mausklick verschieben.

Um die Funktion wieder zu deaktivieren, drücken Sie wieder auf die Funktion 'Vergleichen' und die rote Linie verschwindet wieder.

### Rubriken

In diesem Bereich werden Ihnen vordefinierte Rubriken in einer Baumstruktur angezeigt. Alle Einträge mit einer Checkbox sind hierbei Layer, die auf der Karte dargestellt werden können. 

![Webmap Client - Rubriken](../images/mapclient/frontend/mapclient_catalog.png "Webmap Client Rubriken")

Folgende Funktionen sind auf darstellbare Layer vorzufinden:

- Darstellung und Hinzufügen des Layers zur Karte über die Checkbox.
- Zoom auf Layer-Bereich (Extent) über die Lupe.
- Darstellung von Informationen (z.B. Legende) über den Info-Button.
- Vorschau des Layers auf der Karte über Mouse-Over.

Wird ein Layer der Karte hinzugefügt, so wird der Layer in der Baumstruktur rot markiert und unter 'Dargestellte Karten' aufgelistet.

Eine Anleitung zur Definition von Rubriken finden Sie unter [Definition von Rubriken](#definition-von-rubriken).

### Dargestellte Karten

Alle Layer, die Sie der Karte hinzugefügt haben, werden unter 'Dargestellte Karten' aufgelistet.

![Webmap Client - Dargestellte Karten](../images/mapclient/frontend/mapclient_selection.png "Webmap Client Dargestellte Karten")

Auch hier hat jeder Layer mehrere Funktionen die ausgeführt werden können:

- Vorschau per Mouse-Over in der Karte
- Löschen des Layers aus der Karte über das 'x'.
- Ausblenden des Layers in der Karte per Checkbox.
- Sowie erweitere Funktionen über das Zahnrad:
    - Einstellbarkeit der Transparenz eines Layers
    - Zoom auf den Layer-Bereich (Extent)
    - Darstellung von Informationen (z.B. Legende) über den Info-Button.
    - Anordungen des Layers in der Kartenhierachie.

Sind mehrere Layer in der Liste der 'Dargestellten Karten' so ist der oberste Layer in der Liste auch der oberste Layer auf der Karte.

### Objekt-Informationen

Sie haben einen Layer aus den 'Dargestellten Karten' aktiviert und dieser wird in der Karte anzeigt. Nun möchten Sie die Objekt-Informationen angezeigt bekommen. So verwenden Sie die linke Maustaste um eine GetFeatureInfo-Abfrage auszulösen und bei erfolgreicher Anfrage wird Ihnen ein Dialog mit der Antwort der Abfrage angezeigt.

![Webmap Client - GetFeatureInfo](../images/mapclient/frontend/mapclient_getfeatureinfo.png "Webmap Client GetFeatureInfo")

### Suchen

Auch eine Suche steht Ihnen im Webmap Client zur Verfügung. Dies Suche dient hilft Ihnen dabei Orte, Layer, Dienste und Bundeswasserstraßen zu finden und auf der Karte darzustellen. 

![Webmap Client - Suchen](../images/mapclient/frontend/mapclient_search.png "Webmap Client Suchen")

Unter der Suche werden verschiedene Dienste angefragt:

**Gehe nach**

Hier wird eine Ortssuche auf dem Dienst 'Nominatim' durchgeführt und alle Orte in Abhängigkeit mit Ihrem Suchbegriff aufgelistet. 

Per Mouse-Over über die Ergebnisliste werden Ihnen die Orte in der Karte markiert und bei Auswahl gelangen Sie zum Ort hin.

**Karte hinzufügen** 

Im Webmap Client definierte Layer (z.B. für die Rubriken) werden hier gefunden. Auch hier in der Ergebnisliste stehen Ihnen die gleichen Funktionen wie bei allen Layer zur Verfügung:

- Vorschau bei Mouse-Over
- Zoom zum Layer-Bereich (Extent)
- Informationen eines Layers

Wählen Sie einen Layer aus, so wird dieser in der Karte dargestellt und unter 'Dargestellte Karten' aufgelistet.

**Dienste hinzufügen** 

Treffer aus dieser Kategorie kommen aus der Opensearch-Schnittstelle. Hier werden Ihnen WMS Dienste zum Suchbegriff angezeigt. 

Wählen Sie hier einen Treffer aus, so werden alle Layer des Dienstes auf die Karte gelegt und können über 'Dargestellte Karten' angezeigt werden. 

**BWaStr Locator** 

Falls Sie nach Bundeswasserstraßen, wie z.B. Elbe, suchen, werden Sie hier fündig. Hier wird ein Dienst des ITZBund angefragt.

Wählen aus dieser Liste eine Bundeswasserstraße aus, so wird die gesamte Strecke der ausgewählten Wasserstraße in der Karte (rot) dargestellt. Sie können auch nur eine Teilstrecke anzeigen lassen. Tragen Sie hierbei unter 'Von' und 'Bis' gültige Werte eine, bestätigen Sie Ihre Angabe mit dem ">" und die Strecke wird in der Karte (blau) dargestellt.

Klicken Sie mit der Maus auf die markierte Strecke, so werden Ihnen weitere Informationen zu Bundeswasserstraße per Dialog angezeigt. Neben den Informationen besteht für Sie auch die Möglichkeit die angeklickte Strecke als CSV zu exportieren. 

![Webmap Client - Suchen](../images/mapclient/frontend/mapclient_search_list.png "Webmap Client Suchen")

### Karteninteraktionen

Natürlich finden Sie auch Funktionen mit dem man Interaktionen mit der Karte ausführen kann:

![Webmap Client - Karteninteraktionen](../images/mapclient/frontend/mapclient_mapinteraction.png "Webmap Client Karteninteraktionen")

**Standortbestimmung**

Wählen Sie die Button mit dem schwarzen Punkt und eine Abfrage Ihres Standortes wird durchgeführt. Falls Sie die Standortfreigabe bestätigen, wird Ihr Standort in der Karte angezeigt.

**Hineinzoomen**

Nicht nur über das Zahnrad der Maus können Sie hineinzoomen, sondern auch über den Button '+' ist das Hineinzoomen möglich.

**Hinauszoomen**

Das gleich wie beim Hineinzoomen gilt auch für das Hinauszoomen.

**Zoom auf Ausgangsposition**

Falls Sie sich mal in der Karte verirrt haben, können Sie über den untersten Button (mit den gekreuzten Pfeilen) zur Ausgangsposition der Karte zurück wechseln und von vorne starten.

### Hintergrundkarten

Der Webmap Client stellt verschiedene Hintergrundkarten zur Verfügung.

![Webmap Client - Hintergrundkarten](../images/mapclient/frontend/mapclient_background.png "Webmap Client Hintergrundkarten")

Folgende Hintergrundkarten stehen Ihnen zur Auswahl:

- Kein Hintergrund
- Openstreetmap (OSM)
- BKG
- BKG Grau

Über diese Auswahlbox kann zwischen verschiedenen Hintergrundkarten gewechselt bzw. auch gar keine Hintergrundkarte angezeigt werden.

<a name="koordinatenanzeige"></a>
### Koordinatenanzeige

Darstellung der Koordinaten zur Mausposition.

**Drop-Down-Liste**

![Webmap Client - Koordinatenanzeige](../images/mapclient/frontend/mapclient_coordinates.png "Webmap Client Koordinatenanzeige")

Fähren Sie mit der Maus über die Karte, so werden Ihnen im dargestellten Bereich, neben der Drop-Down-Liste der Projektionen, die zur Mausposition gehörenden Koordinaten in der Projektion Mercator angezeigt. 

Falls Sie die Koordinaten in einer anderen Projektion angezeigt bekommen haben möchten, so wählen Sie aus der Drop-Downliste die gewünschte Projektion aus und Ihre Koordinaten werden nun in dieser Projektion angezeigt.

**Dialog**

Um Ihnen Koordinaten einer bestimmten Mausposition in allen Projektionen der Drop-Down-Liste (siehe oben) darstellen zu lassen, verwenden Sie die rechte Maustaste und Ihnen werden im Tab **Koordinaten** alle Koordinaten in verschiedenen Projektionen dargestellt.

Im anderen Tab **BwaStr Locator** finden Sie ggfs. eine Station einer Bundeswasserstraße.

![Webmap Client - Koordinatenanzeige](../images/mapclient/frontend/mapclient_coordinates_mouse.png "Webmap Client Koordinatenanzeige")

Zusätzlich erhalten Sie einen QR-Code mit dem Sie den Webmap Client mit den ausgewählten Koordinaten auf mobilen Geräte laden können.

### Weitere Funktion

![Webmap Client - Kartenfunktionen](../images/mapclient/frontend/mapclient_service_option.png "Webmap Client Kartenfunktionen")

**Vollbild**

Sie möchten den Webmap Client in Vollbild-Modus sehen, dann können Sie dies über die Funktion 'Vollbild' aktivieren. 

Um den Vollbild-Modus zu beenden, betätigen Sie die 'ESC'-Taste auf der Tastatur.

**Problem melden**

Sie haben Probleme mit dem Webmap Client. Informieren Sie uns über die Funktion 'Problem melden'. Wird diese Funktion betätigt, so erscheint ein Dialog, indem Sie folgendes Eintragen können:

- Ihre E-Mailadresse (freiwillig), z.B. für Rückfragen an Sie.
- Ihr Kommentar zum Problem.
- Dateien zum Problem hinzufügen, wie z.B. KML.

Falls Sie ein Problem senden, wird der Webmap Client-Verantwortlich per E-Mail informiert. 

**Hilfe**

Detailierte Hilfe zum Webmap Client.

**Mobile Version (nicht im Portal vorhanden)**

Um den Webmap Client in der mobilen Version anzeigen zu lassen, verwenden Sie die Funktion 'Mobile Version'. Das Layout des Webmap Clients ändert sich anschließend zur mobilen Version und die Darstellung von z.b. Menü und Hintergrundkarte ändert sich zur Desktop Version. 

**Sprachumschalter (nicht im Portal vorhanden)**

Sie wollen den Webmap Client z.B. in Englischer-Version sehen. Verwenden Sie einfach den Sprachumschalter und die Sprache des Webmap Clients wird geändert.

<a name="admin"></a>
## Admin

### Karten

Unter dem Akkordeon "Karten" werden alle eingepflegten und darzustellenden Karten (WMS, WMTS) aufgelistet.

Aus WMS- oder WMTS-Diensten können weitere Karten dem Webmap Client hinzugefügt, zu Kategorien zugeordnet, aus verschiedenen Karten eines WMS-Dienstes eine kombinierte Karte erstellt und einzelne Karten zu Ihren Bedürfnisse angepasst werden.

- **Karten hinzufügen**

  Verwenden Sie für neue Karten hinzufügen den Button "Dienst laden". Nach Verwendung des Buttons erscheint ein Pop-Up. 

  In diesem Pop-Up können Sie nun einen WMS- oder WMTS-Dienst anhand eines GetCapabilities-Request laden. Bei erfolgreichem Laden werden nun die einzelnen Karten eines Dienstes in Baumstruktur (WMS) oder als List (WMTS) dargestellt.

  Nun können Sie einzelne Karten über die Checkbox auswählen und hinzufügen (Button "Hinzufügen") oder als kombinierte Karte (Button "Kombinieren und Hinzufügen") dem Webmap Client zur Verfügung stellen. Nach Betätigung eines dieser Button werden die neuen Karten am Anfang der Kartenliste hinzugefügt.

  Möchten Sie die neuen Karten schon Kategorien (falls vorhanden) zuorden, so wählen Sie aus der Auswahliste "Kategorie auswählen" eine Kategorie aus und öffnen Sie die Kategorie mit dem "+"-Button. Es erscheint nun die Kategorie in einer Baumstruktur. Da hier keine Unterkategorien angelegt werden können, müssen diese Unterkategorien schon vorher angelegt sein. Sind Unterkategorien vorhanden, so wählen diese Unterkategorie aus und bestätigen Ihre Auswahl mit dem Button "Hinzufügen". Es können weitere Unterkategorien ausgewählt werden. Fügen Sie nun die Karten hinzu (Button "Hinzufügen" oder Button "Kombinieren und Hinzufügen") so werden die Karten auch automatisch den ausgewählten (Unter-)Kategorien zugeordnet.

  ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_add.gif "Webmap Client Admin - Karten hinzufügen")

- **Karten löschen**

  Für das Löschen von eingepflegten Karten gibt es drei Möglichkeiten: 

  - **Karte einzeln löschen**

    Klicken Sie auf das Akkordeon einer Karte. Nach dem Öffnen des Akkordeons erscheint nun ein Button "Löschen". Mit diesem Button wird eine einzelne Karte entfernt. Mit Bestätigung des Löschvorgangs wird die Karte entfernt.

    Hinweis: Werden Karten entfernt, so werden in den Kategorien (falls vorhanden) alle durchsucht und auch dort wird die Karte entfernt.

    ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_remove.gif "Webmap Client Admin - Karten löschen einzeln")

  - **Ausgewählte Karten löschen**

    Wählen Sie eingepflegte Karten über die Checkbox aus den Listen aus und betätigen Sie den Button "Auswahl löschen". Mit Bestätigung des Löschvorgangs werden die Karten entfernt.

    Hinweis: Werden Karten entfernt, so werden in den Kategorien (falls vorhanden) alle durchsucht und auch dort wird die Karte entfernt.

    ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_remove_select.gif "Webmap Client Admin - Karten löschen ausgewählt")

  - **Alle Karten löschen**

    Mit Hilfe des Buttons "Alles löschen" wird die Liste aller eingepflegte Karten geleert. Mit Bestätigung des Löschvorgangs werden alle Karten somit entfernt.    

    Hinweis: Werden Karten entfernt, so werden in den Kategorien (falls vorhanden) alle durchsucht und auch dort wird die Karte entfernt.

    ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_remove_all.gif "Webmap Client Admin - Karten löschen alle")

- **Karten suchen**

  Die Liste der eingepflegten Karten kann auf Dauer sehr lang und unübersichtlich werden.

  Eine Abbilfe kann hier das Suchfeld schaffen. Nach Eingabe eines Suchbegriffs sollte die Liste aller eingepflegten Karten nach Titel einer Karte gefiltert werden und bei Übereinstimmung in der Liste angezeigt werden. 

  ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_search.gif "Webmap Client Admin - Karten suchen")

- **Karten bearbeiten**

  Eingepflegte Karten können auch bearbeitet werden und dabei die Default-Werte aus der GetCapabilities des zugehörigen Dienstes manipulieren.

  In der Bearbeitungsansicht der Karten existiert zu jeder Eigenschaft eine kurze Info über den "i"-Button.

  Es gibt zwei Typen von Karten die bearbeitet werden können:

  - **WMS**

    - **Typ**:

      Hier wird Ihnen der Typ Ihrer Karte angezeigt. Dieser Wert ist nicht veränderbar.

    - **ID**:

      Die eindeutige ID zu einer Karte wird beim Importieren einer Karte aus seinem Dienst automatisch genieriert. Hier haben Sie die Möglichkeit die ID der Karte individuell anzupassen. 

      Diese ID wird beim Aufruf der Karte im Webmap Client im Parameter "layers" referenziert und wird auch benötigt um eine Karte zu einer Kategorie (siehe nächstes Kapitel) zuzuweisen.

    - **Version**:

      Bestimmen Sie hier die Version Ihrer Karte. Eine Auswahl der Werte "1.1.1" und "1.3.0" steht zu Auswahl.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Label**:

      Bearbeiten Sie hier den Titel Ihrer Karte.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

      Hinweis: Der Titel wird z.B. in der Ergebnisliste bei Suche im Webmap Client angezeigt.

    - **Extent**:

      Passen Sie hier das Extent Ihrer Karte an. 
      
      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

      Hinweis: Die eingetragenen Koordinaten müssen in der Projektion "EPSG:4326/WGS-84" eingetragen werden. 

    - **WMS-URL**:

      Ändern Sie hier die URL für die GetMap-Anfrage ein.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **WMS-Layers**:

      Tragen Sie hier den 'NAME' der dazustellenden Karte ein. Mehrere Karten werden kommagetrennte aufgelistet. 
      
      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

      Hinweis: Zusammengesetzte Karten per kommagetrennt können im Webmap Client nur zusammen dargestellt werden.

    - **Gutter**:

      Definieren Sie den Rand in Pixel um den Karten-Tiles. 
      
      Default: 150

    - **Single Tile**:

      (De-)aktivieren Sie hier den Aufruf Ihrer Karte in Kacheln. 

      Default: false

    - **Min-Scale**:
      
      Definieren Sie einen Min-Scale der Karte.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Max-Scale**:

      Definieren Sie einen Max-Scale der Karte.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Hintergrundkarte**:

      Bestimmen Sie hier, ob Ihre Karte als Hintergrundkarte verwendet werden kann. 

      Default: false

      Hinweis: In den Kategorien werden die Hintergrundkarten zugewiesen. (siehe "Kategorien")

    - **Format**:

      Definieren Sie das Bild-Format der GetMap-Anfrage. (png, jpeg, etc.)

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Suchbarkeit**:

      Lassen Sie die Karte über die Suche im Webmap Client auffinderbar machen. 

      Default: true

    - **Cross Origin**:

      Liefert Ihre Karte bei einer GetMap-Anfrage im Response-Header "Access-Control-Allow-Origin: *" oder "Access-Control-Allow-Origin: <IHRE-DOMÄIN>", so können Sie hier den Wert auf "true" setzten und im Webmap Client werden vorhandenen GetFeatureInfos beim überfahren der Maus auf Ihrer Karte als Handsymbol angezeigt.

      Default: false

    - **Highlightable**:

      Aktivieren Sie die Eigenschaft 'highlightable'.

      Default: false

    - **Zeitstempeln**:

      Tragen Sie die Zeitstempeln der Karte ein, falls vorhanden.

    - **Zeitstempel aktivieren**:

      Aktivieren Sie die zeitabhängige Darstellung der Karte.

      Hinweis: Im Webmap Client wird ihnen dann rechts in der Karte eine neues Control für die Darstellung von Zeitständen angezeigt.

    - **Time behaviour**:

      Legen Sie das Verhalten für die zeitabhängige Kartendarstellung fest.

      Default: last

    - **Legende aktivieren**:

      Aktivieren Sie die Einstellung, wenn die Karte eine Legende hat oder eine Legende per GetLegend-Anfrage aufgerufen werden soll.

      Default: true

    - **Legenden-URL**:

      Definieren Sie die URL der Karten-Legende, ansonsten wird ein GetLegenden-Request ausgeführt.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Attribution**:

      Tragen Sie den Titel für die URL unter 'attributionUrl'.
      
      Hinweis: Wird im Webmap Client unten  rechts angezeigt, wenn die Karte aktiv ist.

    - **Attribution-URL**:

      Tragen Sie hier die URL für weitere Infos zur Karte ein.

      Hinweis: Wird im Webmap Client unten  rechts angezeigt, wenn die Karte aktiv ist.

    - **Tooltip**:

      Aktivieren Sie die GetFeature-Info-Abfrage, falls es die Karte erlaubt.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Transparenz**:
     
      Definieren Sie die per default dargestellte Transparenz der Karte.

      Default: 1
      
    - **Style**:

      Legen Sie ein 'styles'-Parameter für die GetMap-Abfrage fest, falls notwendig.

  - **WMTS**

    - **Typ**:

      Hier wird Ihnen der Typ Ihrer Karte angezeigt. Dieser Wert ist nicht veränderbar.

    - **ID**:

      Die eindeutige ID zu einer Karte wird beim Importieren einer Karte aus seinem Dienst automatisch genieriert. Hier haben Sie die Möglichkeit die ID der Karte individuell anzupassen. 

      Diese ID wird beim Aufruf der Karte im Webmap Client im Parameter "layers" referenziert und wird auch benötigt um eine Karte zu einer Kategorie (siehe nächstes Kapitel) zuzuweisen.

    - **Version**:

      Bestimmen Sie hier die Version Ihrer Karte.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Label**:

      Bearbeiten Sie hier den Titel Ihrer Karte.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

      Hinweis: Der Titel wird z.B. in der Ergebnisliste bei Suche im Webmap Client angezeigt.

    - **Extent**:

      Passen Sie hier das Extent Ihrer Karte an. 
      
      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

      Hinweis: Die eingetragenen Koordinaten müssen in der Projektion "EPSG:4326/WGS-84" eingetragen werden. 

    - **Service-URL**:

      Tragen Sie die WMTS-ServiceMetadataURL ein.

    - **Template**:

      Tragen Sie die WMTS-ResourceURL ein.

    - **MatrixSet**:

      Definieren Sie den TileMatrixSet Identifier der Karte.

    - **Layername**:

      Tragen Sie hier den Layer-Name für WMTS ein.

    - **RequestEncoding**:

      Tragen Sie den Request-Encoding der Karte für GetTile fest, z.B. 'REST' oder 'KVP'.

    - **Hintergrundkarte**:

      Bestimmen Sie hier, ob Ihre Karte als Hintergrundkarte verwendet werden kann. 

      Default: false

      Hinweis: In den Kategorien werden die Hintergrundkarten zugewiesen. (siehe "Kategorien")

    - **Format**:

      Definieren Sie das Bild-Format der GetMap-Anfrage. (png, jpeg, etc.)

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Suchbarkeit**:

      Lassen Sie die Karte über die Suche im Webmap Client auffinderbar machen. 

      Default: true

    - **Cross Origin**:

      Liefert Ihre Karte bei einer GetMap-Anfrage im Response-Header "Access-Control-Allow-Origin: *" oder "Access-Control-Allow-Origin: <IHRE-DOMÄIN>", so können Sie hier den Wert auf "true" setzten und im Webmap Client werden vorhandenen GetFeatureInfos beim überfahren der Maus auf Ihrer Karte als Handsymbol angezeigt.

      Default: false

    - **Highlightable**:

      Aktivieren Sie die Eigenschaft 'highlightable'.

      Default: false

    - **Zeitstempeln**:

      Tragen Sie die Zeitstempeln der Karte ein, falls vorhanden.

    - **Zeitstempel aktivieren**:

      Aktivieren Sie die zeitabhängige Darstellung der Karte.

      Hinweis: Im Webmap Client wird ihnen dann rechts in der Karte eine neues Control für die Darstellung von Zeitständen angezeigt.

    - **Time behaviour**:

      Legen Sie das Verhalten für die zeitabhängige Kartendarstellung fest.

      Default: last

    - **Legende aktivieren**:

      Aktivieren Sie die Einstellung, wenn die Karte eine Legende hat oder eine Legende per GetLegend-Anfrage aufgerufen werden soll.

      Default: true

    - **Legenden-URL**:

      Definieren Sie die URL der Karten-Legende, ansonsten wird ein GetLegenden-Request ausgeführt.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Attribution**:

      Tragen Sie den Titel für die URL unter 'attributionUrl'.
      
      Hinweis: Wird im Webmap Client unten rechts angezeigt, wenn die Karte aktiv ist.

    - **Attribution-URL**:

      Tragen Sie hier die URL für weitere Infos zur Karte ein.

      Hinweis: Wird im Webmap Client unten rechts angezeigt, wenn die Karte aktiv ist.

    - **Tooltip**:

      Aktivieren Sie die GetFeature-Info-Abfrage, falls es die Karte erlaubt.

      Default: false.

    - **Transparenz**:
     
      Definieren Sie die per default dargestellte Transparenz der Karte.

      Default: 1
      
    - **Style**:

      Legen Sie ein 'style'-Parameter für die GetMap-Abfrage fest, falls notwendig.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Origin**:

      Tragen Sie aus dem TileMatrixSet den TopLeftCorner der Karte ein.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.

    - **Scales**:

      Tragen Sie aus dem TileMatrixSet den TileMatrix-ScaleDenominator der Karte ein.

      Default: Wert aus der GetCapabilities des zugehörigen Dienstes.


  ![Webmap Client Admin - Karten](../images/mapclient/admin/mapclient_admin_layers_edit.gif "Webmap Client Admin - Karten bearbeiten")

Falls Sie das Konfigurationsverzeichnis des Webmap Clients außerhalb des Portal-Verzeichnisses, also nicht als ein Unterordner des Portal-Verzeichnisses, festgelegt haben, so bleiben die eingepflegten Karten auch für zukünftige Portal-Updates erhalten.

### Kategorien

Falls Sie das Konfigurationsverzeichnis des Webmap Clients außerhalb des Portal-Verzeichnisses, also nicht als ein Unterordner des Portal-Verzeichnisses, festgelegt haben, so bleiben die eingepflegten Kategorien auch für zukünftige Portal-Updates erhalten.

### Einstellungen

Unter Einstellungen können Sie Ihren Webmap Client individuell nach Ihren Anforderungen anpassen.

Zu jeder einzelnen Einstellung existiert ein Button "i" um detailierte Informationen zu einer Hilfe vorzuweisen.

Folgende Einstellungen sind möglich:

- **Default Kategorie**: 

  Wählen Sie eine Kategorie aus, welches per Default (sofern in der URL des Webmap Clients mit dem Parameter "topic" nichts anderes festgelegt wurde) im Menü des Webmap Clients ausgewählt und angezeigt wird.

  Hinweis: Eine Auswahl an Kategorien ist nur dann möglich, wenn unter dem Akkordeon "Kategorien" auch Kategorien angelegt wurden.

- **EPSG / Projektion**:

  Legen Sie hier die Projektion der Kartendarstellung im Webmap Client fest.

  Nicht alle Projektion werden unterstützt, da der Webmap Client nicht alle Projektionen supported und ggf. erweitert werden muss. Unterstützte Projektionen sind:
  
  - EPSG:3857
  - EPSG:4326
  - EPSG:31466
  - EPSG:31467
  - EPSG:31468
  - EPSG:31469
  - EPSG:25832
  - EPSG:25833

  Hinweis: Achten Sie darauf, das Ihre verwendeten WMS- und WMTS-Dienste die Projektion unterstützten.

- **Extent**:

  Legen Sie den Kartenausschnitt fest, welchen Bereich der Karte per Default (sofern in der URL des Webmap Clients mit dem Parameter "E", "N" und "zoom" nichts anderes festgelegt wurde) im Webmap Client dargestellen werden soll.

  Die Koordinaten des Bereiches müssen in der Projektion EPSG:4326/WGS-84 festgelegt werden.

  Hinweis: Die Koordinaten des definierten Bereiches werden im Webmap Client auch bei dem Button "Auf initiale Kartenausdehnung" (rechts unter den Zoom-Buttons) verwendet.

- **EPSG Extent**:

  Der Webmap Client unterstützt nicht alle Projektionen und zu manchen Projektion kennt der Webmap Client auch nicht das Extent einer Projektion, z.B. bei "EPSG:25832".

  Kennt der Webmap Client nicht das Extent der Default-Projektion  (siehe oben), so kann man mit dieser Einstellung den Extent in EPSG:4326/WGS-84 festlegen bzw. redefinieren. So ist es auch möglich die Darstellung der Karte im Webmap Client auf einen bestimmten Bereich einzugrenzen.

- **Sprache**:

  Legen Sie hier die unterstützten Sprachen des Webmap Clients fest. Tragen Sie hierfür das Länderkürzel ein und fügen Sie es der Liste der Sprache hinzu oder entfernen Sie Sprachen.

  Existierte eine Sprache die der Webmap Client noch nicht unterstützt, so wird die deutschsprachige Lokalisierung und Hilfe kopiert und verwendet.

  Hinweis: Eine Anpassung der Lokalisierung in der Admin-GUI existiert noch nicht.

- **Dienst für den URL-Shortener**:

  Legen Sie den Dienst um die URL Ihres Webmap Clients zu verkürzen. Die URL des Webmap Clients spiegelt den aktuellen Zustand Ihres Webmap Clients wieder. Dieser Dienst wird z.B. beim Druck oder unter dem Akkordeon "Teilen" im Webmap Client verwendet. 

  Ihr Dienst muss ein JSON zurückliefern.

  Hinweis: Entfernen Sie den Eintrag, so wird keine URL verkürzt und in den verwendeten Funktionen wird die komplette URL Ihres Webmap Clients angezeigt.

- **Dienstsuche (Opensearch)**:

  Verwenden Sie die InGrid-Opensearch-Schnittstelle um nach WMS-Diensten zu suchen und im  Webmap Client zu visualisieren.

  Hinweis: Entfernen Sie den Eintrag und für die Suche wird der Dienst ignoriert.

- **Zoomstufe für Locationsuche**:

  Legen Sie Ihre die Zoomstufe für die Ortsuche fest. Wird nach der Suche eine Ort ausgewählt, dann springt der Webmap Client zu diesem Ort mit der definierten Zoomstufe.

  Hinweis: Für die Ortsuche wird Nominatim (nächster Eintrag) verwendet.

- **Dienst-URL Nominatim**:

  Tragen Sie hier die URL für die Ortsuche ein.

  Ihr Dienst muss ein JSON zurückliefern.

  Hinweis: Entfernen Sie den Eintrag und für die Suche wird der Dienst ignoriert.

- **Dienst-URL BWaStr-Locator**:

  Möchten Sie den BWaStr-Locator in der Suche, um nach Bundeswasserstraßen zu suchen, verwenden, so tragen Sie hier die zugehörige Dienst-URL ein.

  Hinweis: Entfernen Sie den Eintrag und für die Suche wird der Dienst ignoriert.

- **Dienst-URL BwaStr-Locator (Geo)**:

  Zugehörig zu der Funktion "Dienst-URL BWaStr-Locator" können Sie hier die Dienst-URL für die Geokodierung von Bundeswasserstraßen eintragen.

  Hinweis: Entfernen Sie den Eintrag und der Dienst ignoriert.

- **Dienst-URL BwaStr-Locator (Station)**:

  Zugehörig zu der Funktion "Dienst-URL BWaStr-Locator" können Sie hier die Dienst-URL für die Stationierung von Bundeswasserstraßen eintragen.

  Hinweis: Entfernen Sie den Eintrag und der Dienst ignoriert.

- **Copyright URL**:

  Tragen Sie hier die URL zu Ihrer Copyright-Seite ein. Im Webmap Client wird der Link unter rechts dargestellt.

- **Sitemap URL**:

  Tragen Sie hier die URL zu Ihrer Sitemap-Seite ein. Im Webmap Client wird der Link unter rechts dargestellt.

- **Verwendung von Geodesic**:

  (De-)aktivieren Sie hier die Verwendung von Geodesic zum Messen in Ihrem Webmap Client ein.

- **Default Mauszeiger-Projektion**:

  Passen Sie die Liste der Projektionen an, die im Webmap Client zur Auswahl der Maus-Zeiger-Koordinaten und im Positions-Popup (Rechtsklick auf Karte) zur Verfügung stehen, indem Sie die Reihenfolge ändern, Einträge entfernen und/oder hinzufügen.

  Hinweis: Wie auch unter Punkt "EPSG / Projektion" schon hingewiesen, werden nicht alle Projektionen unterstützt und es muss ggfs. im Webmap Client Anpassungen durchgeführt werden.

- **Default Dienstauswahlliste beim Import**:

  Passen Sie die Liste der Dienste an, die im Webmap Client zur Vorauswahl beim Importieren von Kartendienste (WMS, WMTS, KML) zur Verfügung stehen, indem Sie die Reihenfolge ändern, Einträge entfernen und/oder hinzufügen.

- **Teile per Facebook**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per Facebook. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **Teile per E-Mail**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per E-Mail. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **Teile per Google+**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per Google+. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **Teile per Twitter**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per Twitter. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **Teile per iFrame**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per Twitter. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird ein HTML-iFrame Schnipsel mit dem aktuellen Zustand des Webmap Client erzeugt, welches kopiert und in HTML-Seiten integriert werden kann.

- **Teile per Link**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per Link. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **Teile per QR-Code**:

  (De-)aktivieren Sie das Teilen Ihres Webmap Client-Zustand per QR-Code. Die Funktion steht im Webmap Client-Menü unter dem Akkordeon "Teilen" zur Verfügung.

  Hierbei wird die URL des Webmap Client versendet. Falls ein URL-Shortener verwendet wird, dann die Short-URL.

- **URL zum Print-Logo**:

  Tragen Sie hier die URL zu Ihrem Logo ein, welches beim Druck verwendet werden soll.

- **URL zum Nordzeiger-Logo**:

  Tragen Sie hier die URL zu Ihrem Nordzeiger-Logo ein, welches beim Druck verwendet werden soll.

- **Koordinatennetz-Layer(s)**:

  Legen Sie hier die URL und deren Layer für das Koordinatennetz beim Druck fest. Hierbei ist ein JSON-Format mit 'url' (URL zum Dienst) und 'layers' (Liste von Layer-Name) notwendig.

  Hinweis: Tragen Sie ein leeres JSON-Objekt ("{}") ein, um die Funktion "Koordinatennetz" zu deaktivieren.

- **Dateiname des Drucks**:

  Tragen Sie hier den Dateiname für den Druck ein.

- **Druck abhängig von Mauszeiger-Projektion**:

  Hier können Sie den Druck der Karte abhängig von der ausgewählten Mauszeiger-Projektion aktivieren. Die dargestellten Karten müssen aber die Projektion unterstützen.

  Hinweis: Diese Funktion ist experimentell.

- **KML-Dateiname bei Export**:

  Definieren Sie den Prefix für die Datei beim KML-Download.

- **Kataloge Akkordeon verstecken**:

  Verstecken Sie im Menü des Webmap Clients das Kategorien-Akkordeon.

- **W3W-Dienst**:

  (De-)aktvieren Sie im Popup 'Positionen' die Darstellung von What3Words.

- **W3W Dienst-URL**:

  Tragen Sie hier die Dienst-URL für W3W ein.

- **W3W Api-Schlüssel**:

  Tragen Sie hier den Api-Schlüssel für W3W ein.

- **Darstellung vom Service-Baum**:

  Stellen Sie in der Infobox einer Karte ('i'-Button) die Zugehörigkeit einer Karte zu seinem Dienst in einem weiterem Tab dar.

- **Darstellung von Layer-Bezeichnung**:

  Listen Sie in der Infobox einer Karte ('i'-Button), zusätzlich zu dem Titel und der Zusammenfassung, die Layer-Bezeichnung(en) auf.

- **Karten-Scale prüfen**:

  Definieren Sie hier, ob die Karten im Menü nach Ihrer Sichtbarkeit/Scale geprüft werden soll.

  Hierbei werden die Karten in den Akkordeon ausgegraut dargestellt, sobald eine Karte nicht im Sichbarkeitsbereich des aktuellen Kartenausschnitts ist.

  Hinweis: Die Scale-Prüfung erfolgt über die eingetragenen Werte der Karten/Layern in der GetCapabilities und können ggf. nicht korrekt sein.

- **Darstellung ISO-XML-Link**:

  Hier können Sie die Darstellung des CSW-Links in Infobox bei der Dienstsuche aktivieren.

- **Koordinaten-Achsen XY**:

  Definieren Sie den Koordinaten-Tausch bei der Suche für Ihre Default-Projektion.

- **Koordinatensuche-Zoomstufe**:

  Legen Sie, analog zur Ortsuche, die Zoomstufe für die Koordinaten-Suche fest.
 
- **3D-Funktion**:

  Hier können Sie die 3D-Funktion für die Karte aktivieren.

  Hinweis: Diese Funktion ist experimentell.

- **Terrain-URL (3D)**:

  Definieren Sie einen Terrain (URL) für die 3D Funktion.

  Hinweis: Diese Funktion ist experimentell.

![Webmap Client Admin - Einstellungen](../images/mapclient/admin/mapclient_admin_settings.gif "Webmap Client Admin Einstellungen")

Habe Sie Änderungen an den Einstellungen vorgenommen, so schließen Sie Ihre Anpassungen mit dem Button "Speichern" ab.

Um Ihre Einstellungen auf Werkseinstellung wieder zurückzusetzen, verwenden Sie hierfür den Button "Zurücksetzen".

Falls Sie das Konfigurationsverzeichnis des Webmap Clients außerhalb des Portal-Verzeichnisses, also nicht als ein Unterordner des Portal-Verzeichnisses, festgelegt haben, so bleib die definierten Einstellungen auch für zukünftige Portal-Updates erhalten.

### Hilfe

Passen Sie Ihre Hilfe in den unterstützten Sprachen (kann unter Konfiguration festgelegt werden) des MapClient-Frontends an.

Für jede Sprache existiert ein Tab in dem die einzelnen Hilfen in Akkordions aufgelistet und nach der Hilfe-ID sortiert werden. Um einen besseren Überblick zu haben, werden neben der ID auch der Titel einer bestimmten Hilfe angezeigt.

Öffnen Sie nun eine Hilfe, so öffnet sich zu einer Hilfe-ID ein Formular. Hier besteht die Möglichkeit zu einer ID den Titel, den Text und/oder die Image-URL anzupassen. 

Mit dem "Speichern"-Button werden Ihre Änderungen übernommen. Um eine Hilfe-ID wieder auf Ihren Default zu setzen, verwenden Sie den Button "Zurücksetzen".

![Webmap Client Admin - Hilfe](../images/mapclient/admin/mapclient_admin_help.gif "Webmap Client Admin Hilfe")

Möchten Sie Ihre Hilfe für weitere Sprachen hinzufügen/erweitern, so fügen Sie zunächst unter dem Akkordeon "Einstellungen" weitere Sprachen hinzu. Nach dem erfolgreichem Hinzufügen der Sprache wird Ihnen im Akkordeon "Hilfe" die neue Sprache in einem neuem Tab angezeigt.

Falls Sie das Konfigurationsverzeichnis des Webmap Clients außerhalb des Portal-Verzeichnisses, also nicht als ein Unterordner des Portal-Verzeichnisses, festgelegt haben, so bleiben die geänderten Hilfe-Texte auch für zukünftige Portal-Updates erhalten.

### Style

Ändern Sie den Frontend-Look Ihres Webmap Clients indem Sie CSS-Klassen hinzufügen, bearbeiten oder entfernen.

Achten Sie darauf, das der Inhalt des Textfeldes der CSS-Syntax entsprechen muss, denn der komplette Textfeldinhalt wird in eine CSS-Datei gespeichert.

![Webmap Client Admin - Styles](../images/mapclient/admin/mapclient_admin_styles.gif "Webmap Client Admin Styles")

Falls Sie das Konfigurationsverzeichnis des Webmap Clients außerhalb des Portal-Verzeichnisses, also nicht als ein Unterordner des Portal-Verzeichnisses, festgelegt haben, so bleibt die angepassten CSS-Anpassungen auch für zukünftige Portal-Updates erhalten.

<a name="konfiguration"></a>
## Konfiguration

### Einstellung für den Webmap Client

Der Großteil der Konfiguration geschieht direkt im [Frontend](#konfiguration-frontend) mittels Konfigurationen in JavaScript.
Ein paar wenige zentrale Einstellungen werden im [Backend](#konfiguration-backend) ausgeführt.

<a name="konfiguration-frontend"></a>
#### Einstellungen im Frontend

Die Konfiguration des Karten Clients erfolgt über JS-Dateien.

Diese Dateien finden Sie in einem eigenen Verzeichnis, außerhalb der Portal-Installation unter

{% highlight text %}
/WEBMAPCLIENT-KONFIGURATIONS-PFAD/WebmapClientData/config/
{% endhighlight %}

und enthält die Dateien "setting.js" und "settings.profile.js".

In der Datei "setting.js" sind alle Einstellungen für den Webmap Client enthalten.
> Hinweis: Diese Datei sollte nicht verändert werden. Soll ein Wert einer Einstellung/Variable aus der Datei "setting.js" geändert werden, so soll diese Variable in die Datei "setting.profile.js"-Datei übertragen werden und dort angepasst werden. Die Datei "setting.profile.js" ist per Default leer.
Findet sich im Verzeichnis keine Datei "setting.js", so kann die Original Datei unter */PORTAL-INSTALLATIONS-PFAD/apache-tomcat/webapps/ingrid-webmap-client/frontend/config* als Vorlage dienen.

| Einstellung                       | Beschreibung                                                              | Wert-Typ       | Defaul-Wert                          |
|-----------------------------------|---------------------------------------------------------------------------|----------------|--------------------------------------|
| settingDefaultTopicId             | Ausgewählte Rubrik im Karten-Menü                                         | String         | themen|
| settingExtent                     | Initialer Kartenausschnitt (in WGS 84)                                    | String         | [0.42587260523, 46.9672880527, 15.7908768234, 55.1764096793]|
| settingEpsgExtent                 | Kartenausbreitung der Projektion (in WGS 84)                              | String         | [0.42587260523, 46.9672880527, 15.7908768234, 55.1764096793]|
| settingEpsg                       | Kartenprojektion                                                          | String         | EPSG:3857|
| settingLanguages                  | Unterstütze Sparachen                                                     | Array         | ["de", "en"]|
| settingShortURLService            | URL-Shortener Dienst                                                      | String         | https://is.gd/create.php?format=json|
| settingSearchServiceUrl           | Dienst zur Suche von WMS Dienste                                          | String         | http://dev.informationgrid.eu/opensearch/query?q={query}+t011_obj_serv_op_connpoint.connect_point:http*+t011_obj_serv.type:view+cache:off+datatype:metadata+ranking:score%26ingrid=1%26h=100| 
| settingGazetterZoom               | Default Zoomstufe bei Ergebnissen der Nominatim-Suche                     | Integer         | 10|
| settingSearchNominatimUrl         | Dienst zur Suche von Orten                                                | String         | http://nominatim.openstreetmap.org/search?format=json%26countrycodes=de|
| settingSearchBwaLocatorUrl        | Dienst zur Suche von Bundeswasserstraßen                                  | String         | https://atlas.wsv.bund.de/bwastr-locator/rest/bwastrinfo/query?limit=200%26searchfield=all|
| settingSearchBwaLocatorGeoUrl     | Dienst für Daten zu Bundeswasserstraßen                                   | String         | https://atlas.wsv.bund.de/bwastr-locator/rest/geokodierung/query|
| settingSearchBwaLocatorStationUrl | Dienst für Stationdaten zu Bundeswasserstraßen                            | String         | https://atlas.wsv.bund.de/bwastr-locator/rest/stationierung/query|
| settingCopyrightURL               | Link zum Copyright                                                        | String         | /impressum|
| settingSitemapURL                 | Link zur Sitemap                                                          | String         | /inhaltsverzeichnis |
| settingUseGeodesic                | Geodesic-Aktivierung zum Messen                                           | Boolean        | true|
| settingDefaultMouseProjections    | Reihenfolge von bekannten Projektionssystemen für die Funktionen "Mauszeiger-Position-Auswahl" und "Koordinaten-Position-Rechtsklick"                                                                 | Array         | ['EPSG:3857', 'EPSG:4326', 'EPSG:31466', 'EPSG:31467', 'EPSG:31468', 'EPSG:31469', 'EPSG:25832', 'EPSG:25833']|
| settingDefaultMousePositionIndex  | Default Projektion für die Darstellung von Koordinaten per Mauszeiger     | Integer        | 0|
| settingDefaultWMSList             | Vordefinierte Liste von WMS Diensten für den Import von WMS               | Array          | []|
| settingShareFacebook              | Kartenzustand teilen per Facebook                                         | Boolean        | true| 
| settingShareMail                  | Kartenzustand teilen per E-Mail                                           | Boolean        | true|
| settingShareGoogle                | Kartenzustand teilen per Google+                                          | Boolean        | true|
| settingShareTwitter               | Kartenzustand teilen per Twitter                                          | Boolean        | true|
| settingShareIFrame                | Kartenzustand teilen per iFrame                                           | Boolean        | true| 
| settingShareQR                    | Kartenzustand teilen per QR-Code                                          | Boolean        | true| 
| settingShareLink                  | Kartenzustand teilen per Link                                             | Boolean        | true| 
| settingPrintLogo                  | URL zum Logo beim Druck                                                   | String         | location.protocol + '//' + location.host + '/ingrid-webmap-client/frontend/prd/img/print_logo.png'|
| settingPrintNorthArrow            | URL zum Nordzeiger beim Druck                                             | String         | location.protocol + '//' + location.host + '/ingrid-webmap-client/frontend/prd/img/north_arrow.png'|
| settingPrintGraticuleLayer        | URL und Layer für das Koordinatennetz beim Druck                          | String         | {"url":"http://atlas.wsv.bund.de/netze/wms?", "layers":["GN","GNB"]}|
| settingKMLName                    | Prefix für die Datei beim KML-Download                                    | String         | INGRID|
| settingHideCatalog                | Verstecken des Menüs Rubrik                                               | Boolean        | false|
| settingEnableW3W                  | Darstellung von What3Words im Context-Popup 'Positionen                   | Boolean        | false|
| w3wUrl                            | URL zu What3Words Api                                                     | String        | https://api.what3words.com |
| w3wApiKey                         | What3Word Api Schlüssel                                                   | String        | OM48J50Y |
| settingShowLayerServiceName       | Darstellung von Service-Name eines Layers in der Infobox                  | Boolean        | false |
| settingShowISOXML                 | Darstellung von CSW-URL in Dienst-Infobox                                 | Boolean        | true |
| settingSearchCoordsXY             | Koordinaten-Tausch bei der Suche für Default-Projektion                   | Boolean        | false |
| settingSearchCoordsZoom           | Zoomstufe für die Koordinaten-Suche                                       | Integer        | 16 |

Beispiel:
Mit Hinzufügen der nachfolgenden Einstellung in die Datei "settings.profile.js" wird das vorausgewählte Thema auf "Anbieter" gesetzt.

{% highlight text %}
...
settingDefaultTopicId = 'anbieter';
...
{% endhighlight %}

<a name="konfiguration-backend"></a>
#### Einstellungen im Backend

Einige wenige zentrale Einstellungen werden innerhalb der Portal Installation selbst definiert, im Verzeichnis

{% highlight text %}
/PORTAL-INSTALLATIONS-PFAD/apache-tomcat/webapps/ingrid-webmap-client/WEB-INF/classes
{% endhighlight %}

in den Dateien

* *application.properties*:
Alle vorhandenen Einstellungen mit Ihren default Werten.
**Achtung: Diese Datei nicht verändern.**
* *application.override.properties*:
Alle geänderten Einstellungen !
Alle Änderungen in dieser Datei vornehmen, default aus application.properties übernehmen und hier ändern.
Damit bleiben die veränderten Einstellungen auch nach einem Update des Portals erhalten !

| Einstellung                       | Beschreibung                                                              | Wert-Typ       | Defaul-Wert                          |
|-----------------------------------|---------------------------------------------------------------------------|----------------|--------------------------------------|
| config.dir                        | Verzeichnis zum Laden der JS Konfiguration für's [Frontend](#konfiguration-frontend) | String         | *./webapps/ingrid-webmap-client/frontend/* |
| **Feedback aus dem Map Client (mail server settings):** | | |
| feedback.from                     | Absender E-Mail                                                           | String         |  |
| feedback.to                       | Empfänger E-Mail                                                          | String         |  |
| feedback.host                     | Mailserver Host                                                           | String         | |
| feedback.port                     | Mailserver Port                                                           | Integer         | |
| feedback.user                     | Mailserver User                                                           | String         | |
| feedback.password                 | Mailserver Passwort                                                       | String         | |
| feedback.protocol                 | Mailserver Protokoll                                                      | String         | |
| feedback.ssl                      | E-Mail verschlüsselt ?                                                    | Boolean        | false |
| **KML Settings (Redlining etc.):** | | |
| kml.directory                     | Verzeichnis in dem die KML Daten abgelegt werden                          | String         | *./webapps/ingrid-webmap-client/frontend/kml/* |
| kml.days_of_exist                 | Wie lange sollen KML Dateien vorgehalten werden (in Tagen), wenn die Maximalanzahl der Dateien im Verzeichnis überschritten ist ?               | Integer        | 365 |
| kml.max_directory_files           | Maximalanzahl der Dateien im Verzeichnis. Wenn diese Anzahl überschritten ist, dann wird geprüft, ob Dateien gelöscht werden können.<br><br>Bsp. mit den Default Werten:<br>Sind im KML Verzeichnis mehr als 1000 Dateien, so werden alle Dateien gelöscht, deren letzte Änderung mehr als 365 Tage zurück liegt. Es können also mehr als 1000 Dateien vorhanden sein. | Integer        | 1000 |
| **Update Job Settings (Job zur Aktualisierung der Layer Daten aus den GetCapabilities):** | | |
| scheduler.layer.update            | Wann soll der Job ausgeführt werden ?                                     | String | "0 3 * * *" (jede Nacht 3 Uhr) |
| scheduler.layer.update.mail       | Soll bei der Aktualisierung eine Mail verschickt werden ?                 | Boolean        | false |

Beispiel:
Mit Hinzufügen der nachfolgenden Einstellungen in die Datei *application.override.properties* werden die JS Konfigurationsdateien für's Frontend und die KML Dateien für's Zeichnen aus dem zentralen *WebmapClientData* Verzeichnis geladen/abgelegt.

{% highlight text %}
...
config.dir=/opt/ingrid/WebmapClientData/
kml.directory=/opt/ingrid/WebmapClientData/kml
...
{% endhighlight %}

<a name="daten-für-den-webmap-client"></a>
### Daten für den Webmap Client

Neben den genannten Einstellungen zu dem Webmap Client, besteht auch die Möglichkeit diesen Client mit Daten bzw. Rubriken zu befüllen, d.h. eine Baumstruktur von (Struktur-) Layern zu erzeugen. 

Bei einem Blick auf das Menü des Clients finden Sie das Akkordeon 'Themen'. Hier enthalten ist eine Baumstruktur aus (WMS-) Layern, die zu einzelnen Kategorien zugeordnet sind.

Um solche Rubriken zu erstellen, bedarf es mehrere Anpassung von JSON-Dateien unter dem Verzeichnis:

{% highlight text %}
/WEBMAPCLIENT-KONFIGURATIONS-PFAD/WebmapClientData/data/
{% endhighlight %}

**Definition von Layern (layers.json)**

Alle (WMS-) Layer, die in einer Rubrik auftauchen sollen, müssen in einer Liste in der Datei *layers.json* definiert werden.

| Einstellung | Beschreibung | Wert-Typ |
|-------------|--------------|----------|
| type | Definition des Layer-Types: "wmts" oder "wms" | String |
| label | Titel des Layers | String |
| background | Layer ist ein Hintergrund-Layer, d.h. wird als Hintergrundkarte im MapClient eingesetzt | Boolean |
| format | Layer-Bildformat | String |
| attribution | Titel für die URL unter 'attributionUrl' (wird in der Karte (unten rechts) angezeigt, wenn der Layer aktiv ist) | String |
| attributionUrl | URL für weitere Infos zum Layer | String |
| highlightable | WIRD NICHT BEI INGRID VERWENDET | String |
| hasLegend | Layer hat eine Legende | Boolean |
| legendUrl | URL der Legende (falls vorhanden, ansonsten wird GetLegenden-Request ausgeführt) | String |
| searchable | Layer kann in der Suche recherchiert werden (Wert: false oder true) | Boolean |
| version | Version des Layers | String |
| opacity | Per default Sichtbarkeit/Transparenz des Layers setzen (Wert: 0 - 1) | Float |
| crossOrigin | GetMap-Anfrage auf Layer liefert im Response-Header 'Access-Control-Allow-Origin: *' oder 'Access-Control-Allow-Origin: <HOST>' | Boolean |
| extent | Extent des Layers in WGS84 | String |
| **WMS** |||
| wmsUrl | URL des Layers | String |
| wmsLayers | 'NAME' der dazustellenden Layers. Mehrere Layers werden kommagetrennte aufgelistet. | String |
| singleTile | Layer wird per SingleTile (Wert: true) geladen oder in Kacheln (Wert: false) | String |
| gutter | Rand in Pixel um Tiles | Integer |
| tooltip | GetFeature-Info-Abfrage ist möglich | Boolean |
| queryLayers | Layers für GetFeatureInfo-Abfrage setzen, falls 'tooltip' auf 'true'. | String: Wenn nicht definiert, dann wird 'wmsLayers' verwendet. |
| style | "styles"-Parameter bei GetMap-Abfrage setzen | '' |
| **WMTS** |||
| serviceUrl | WMTS-ServiceMetadataURL | String |
| template | WMTS-ResourceURL | String |
| serverLayerName | Layer-Name für WMTS | String |
| style | Layer-Style für WMTS | String (default: "default") |
| matrixSet | TileMatrixSet Identifier des Layers | Array |
| origin | TileMatrixSet TopLeftCorner des Layers | Array |
| tileSize | TileMatrixSet TileMatrix-TileWidth bzw. -TileHeight des Layers | Array (default: 256)|
| scales | TileMatrixSet TileMatrix-ScaleDenominator des Layers | Array |
| matrixIds | TileMatrixSet TileMatrix-Identifier des Layers | Array (default: Berechnung durch "scales")|
| requestEncoding | "REST" oder "KVP" | String (default: "KVP") |
| timeEnabled | Layer hat einen Zeitstempel | Boolean |
| timestamps | Zeitstempeln des Layers | Array |
| timeBehaviour | Layer Zeit Verhalten | String |

Beispiele:
```json
{
    ...
    // WMS
    "webatlasde_light": {
        "wmsUrl": "http://sg.geodatenzentrum.de/wms_webatlasde.light?",
        "wmsLayers": "webatlasde.light",
        "gutter": 0,
        "attribution": "GeoBasis-DE / BKG 2016",
        "attributionUrl": "http://www.bkg.bund.de",
        "background": true,
        "format": "png",
        "timeBehaviour": "last",
        "label": "webatlasde.light",
        "singleTile": false,
        "highlightable": false,
        "hasLegend": true,
        "legendUrl": "http://sg.geodatenzentrum.de/wms_webatlasde.light?styles=&layer=webatlasde.light&service=WMS&format=image%2Fpng&sld_version=1.1.0&request=GetLegendGraphic&version=1.1.1",
        "type": "wms",
        "queryable": false,
        "tooltip": true,
        "version": "1.1.1",
        "opacity": 1,
        "searchable": true,
        "crossOrigin": false
    },
    ...
    // WMTS
    "wmts_bwastr" : {
        "attribution": "DLZ-IT BMVBS",
        "attributionUrl": "www.dlz-it.de",
        "type": "wmts",
        "template": "http://atlas.wsv.bund.de/bwastr/wmts/1.0.0/WmsBWaStr/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png",
        "matrixSet": "osm_grid",
        "version": "1.0.0",
        "format": "png",
        "timestamps": [],
        "requestEncoding" : "REST",
        "style": "default",
        "origin": [-20037508.342787, 20037508.342787],
        "resolutions": [156543.03392804097, 78271.51696402048, 39135.75848201024, 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564, 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395],
        "matrixIds": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
        "hasLegend": false,
        "label":  "Bundeswasserstrassen WMTS (REST)",
        "queryable": false,
        "opacity": 1,
        "timeBehaviour": "last",
        "singleTile": false,
        "highlightable": false,
        "crossOrigin": false,
        "extent": [5.8, 47, 15, 55]
    },
    ... 
}
```

Die Liste ist auch in der Suche des Webmap Clients integriert, sodass eine Suche nach einzelnen definierten (WMS-) Layern recherchiert werden kann.  

<a name="definition-von-rubriken"></a>
**Definition von Rubriken (catalogs.json)**

Rubriken, die im Webmap Client existiern sollen, werden in der Datei **catalogs.json** definiert. Die Definition einer Rubrik kann folgendermaßen aussehen:

```json
{
    "topics": [{
        // Definition Hintergrund-Layer per default
            "defaultBackground": "osmLayer",
        // Vorhandene Sprachen der Rubrik 
            "langs": "de,en",
        // Definition von per Default selektierten Layern
            "selectedLayers": [],
        // Definition von per Default sichtbaren Layern
            "activatedLayers": [],
        // Definition von auswählbaren Hintergrund-Layern
            "backgroundLayers": ["osmLayer", "webatlasde_light"],
        // ID der Rubrik 
            "id": "themen"
        },
        ...
    ]
}
```

D.h. es kann z.B. je Rubrik definiert werden, welche Hintergrundkarten verwendet werden sollen ("backgroundLayers").
> ACHTUNG: Die Hintergrundkarten werden mit Ihrer ID referenziert und sind normal in **layers.json** definiert.
Diese IDs, z.B. "webatlasde_light" im Bsp. oben, dürfen **nicht verändert** werden, damit das Layout bei der Auswahl der Hintergrundkarten funktioniert (die IDs sind mit styles belegt).

**Erstellung der Baumstruktur zu einer Rubrik (catalog-[TOPIC-ID].json)**

Zu jeder definierten Rubrik unter 'catalogs.json' muss eine weitere JSON-Datei erstellt werden. Von der Benennung der Datei muss diese folgende Syntax vorweisen:

{% highlight text %}
catalog-[TOPIC-ID].json
{% endhighlight %}

In der erstellten Datei wird die Struktur der Rubrik im JSON-Format hinterlegt. Wie der Inhalt des JSON-Formats aussehen kann, zeigt folgendes Beispiel:

```json
{
    "results": {
        "root": {
        // Root Rubrik ID (immer 'root')
            "category": "root",
        // WIRD NICHT BEI INGRID VERWENDET
            "staging": "prod",
        // Eindeutige ID eines Knotens
            "id": 1,
        // Definition von Unterknoten
            "children": [{
            // WIRD NICHT BEI INGRID VERWENDET
                "category": "cat70",
            // WIRD NICHT BEI INGRID VERWENDET
                "staging": "prod",
            // Knoten-Status per Default
                "selectedOpen": false,
            // Titel des Knotens
                "label": "Geobasisdaten",
            // Eindeutige und einmalige Rubrik-Knoten ID, erweitert URL-Parameter 'catalogNodes' (Wiederherstellung des Knoten-Status)
                "id": 2, 
            // Definition von Unterknoten
                "children": [{
                // WIRD NICHT BEI INGRID VERWENDET
                    "category": "cat71",
                // WIRD NICHT BEI INGRID VERWENDET
                    "staging": "prod",
                // Knoten-Status per Default
                    "selectedOpen": false,
                // Titel des Knotens
                    "label": "Bestandsübersicht Geodatendienste VKV",
                // Eindeutige und einmalige Rubrik-Knoten ID, erweitert URL-Parameter 'catalogNodes' (Wiederherstellung Knoten-Status)
                    "id": 3,
                // Definition von Unterknoten
                    "children": [{
                    // WIRD NICHT BEI INGRID VERWENDET
                        "category": "layer",
                    // WIRD NICHT BEI INGRID VERWENDET
                        "staging": "prod",
                    // Titel des Knotens
                        "label": "LGLN-Bestand",
                    // ID des Layers (definiert in layers.json)
                        "layerBodId": "-652009786_bestand",
                    // Eindeutige und einmalige Rubrik-Knoten ID, erweitert URL-Parameter 'catalogNodes' (Wiederherstellung Knoten-Status)
                        "id": 4,
                    // Definition von Unterknoten
                        "children":[]
                    },
                    ...
                    ]
                },
                ...
                ]
            },
            ...
            ]
        }
    }
}
```

>Zu beachten ist:
Hat ein Knoten die Eigenschaft "layerBodId", so handelt es sich um einen darstellenden Layer-Knoten, ansonsten wird es als Struktur-Knoten dargestellt (ohne Checkbox).

### Hilfetexte für den Webmap Client

Die im Webmap Client verwendete Hilfe für einzelne Funktionen finden Sie unter:

{% highlight text %}
/<PORTAL-INSTALLATION>/apache-tomcat/webapps/ingrid-webmap-client/frontend/help/
{% endhighlight %}

Dort existieren für jede mögliche Sprache (INGRID: de, en) eine Hilfe-Datei im JSON-Format. In dieser JSON-Datei werden über eine Schlüssel eine Hilfe-Titel, -Text und -Image (z.Zt. nicht in Verwendung) zu einer Funktion im Webmap Client referenziert.

Die aktuelle Hilfe des Schweizer Webmap Clients als JSON erhalten Sie z.B. hier als [Hilfe deutsch](https://www.googleapis.com/fusiontables/v1/query?key=AIzaSyDT7wmEx97gAG5OnPwKyz2PnCx3yT4j7C0&sql=select+*+from+1Tx2VSM1WHZfDXzf8rweRLG1kd23AA4aw8xnZ_3c+where+col5%3D'de'+order+by+id&callback=angular.callbacks._2) oder [Hilfe englisch](https://www.googleapis.com/fusiontables/v1/query?key=AIzaSyDT7wmEx97gAG5OnPwKyz2PnCx3yT4j7C0&sql=select+*+from+1Tx2VSM1WHZfDXzf8rweRLG1kd23AA4aw8xnZ_3c+where+col5%3D'en'+order+by+id&callback=angular.callbacks._2).

## Schnittstellen

<a name="url-shortener"></a>
### URL-Shortener

Da der Zustand der Karte in der URL abgebildet wird, kann die URL sehr lang werden. Der URL-Shortener verkürzt hierfür die URL der Karte und wird bei den Funktionen [Teilen](#teilen) und [Drucken](#drucken) verwendet. 

Per Default wird im Mapclient der öffentlich Dienst [https://is.gd/](https://is.gd/) verwendet. Über diesen Dienst kann eine URL folgendermaßen verkürzt werden:
 
{% highlight text %}
https://is.gd/create.php?format=json&url=<URL>
{% endhighlight %}

Als Antwort des Dienstes wird ein JSON-Objekt mit einem Schlüssel 'shorturl' geliefert, z.B.: 

```json
{ "shorturl": "https://is.gd/pvfPuU" }
```

Den per Default eingestellten URL-Shortener kann man im Webmap Client austauschen. (siehe [Konfiguration](#konfiguration)).
Hierbei ist es notwendig, dass der ausgetauschte URL-Shortener die gleiche JSON-Anwort, auch von der Struktur mit dem gleichen Schlüssel, liefert.

Eine alternative hierbei ist [YOURLS](https://yourls.org/).

Es gibt zwei Möglichkeiten YOURLS zu installieren.

- **YOURLS-Installationspaket**: Hierbei laden Sie das YOURLS-Installationspaket herunter, entzippen es in Ihr gewünschtes Verzeichnis und folgenden den Anweisungen unter [https://yourls.org/#Install](https://yourls.org/#Install).
- **YOURLS-GitHub-Repository**: Klonen Sie sich das YOURLS-Github-Repository unter https://yourls.org/#Install [https://github.com/YOURLS/YOURLS](https://github.com/YOURLS/YOURLS) in Ihr gewünschtes Verzeichnis. Dafür benötigen Sie natürlich die Git-Software auf Ihrer Systemumgebung.

Passen Sie bei beiden Möglichkeiten die Datei **config.php** im Verzeichnis **/YOURLS/user** an. Falls diese Datei **config.php** nicht existiert, so machen Sie eine Kopie der Datei **config-sample.php** und nennen Ihre Kopie in **config.php** um.

Tragen Sie folgende Eigenschaften-Werte ein:

{% highlight text %}
**Datenbank**
- MySQL Datenbank Benutzer: define( 'YOURLS_DB_USER', 'DB_BENUTZERNAME' );
- MySQL Datenbank Passwort: define( 'YOURLS_DB_PASS', 'DB_BENUTZERNAME-PASSWORT' );
- MySQL Datenbank Name: define( 'YOURLS_DB_NAME', 'yourls' );
- MySQL Host: define( 'YOURLS_DB_HOST', 'localhost' );
- MySQL Tabellen Prefix: define( 'YOURLS_DB_PREFIX', 'yourls_' );

**YOURLS URL**
- YOURLS URL: define( 'YOURLS_SITE', 'YOURL-URL' );

**BENUTZER**
- YOURLS Benutzer-Login: $yourls_user_passwords = array('BENUTZERNAME' => 'BENUTZER-PASSWORT');
{% endhighlight %}

Weitere Einstellungsmöglichkeiten von YOURLS finden Sie [hier](https://yourls.org/#Config).

Rufen Sie anschließend die YOURLS-Adminoberfläche mit **YOURL-URL/admin/** auf und loggen sich mit **BENUTZERNAME** und **BENUTZER-PASSWORT** ein.

<a name="qr-code"></a>
### QR-Code

Für die Funktionen [Teilen](#teilen), [Koordinatenanzeige](#koordinatenanzeige) (Maus-Rechts-Klick auf der Karte) und [Drucken](#drucken) wird ein QR-Code dargestellt. 
Für die Generierung des QR-Codes bietet der Webmap Client eine eigene Rest-Schnittstelle:

{% highlight text %}
http://<HOSTNAME>/ingrid-webmap-client/rest/data/qrcodegenerator?url=<URL>
{% endhighlight %}

Über diese Schnittstelle wird für eine beliebige URL eine QR-Code generiert.

Für die QR-Code Generierung wird die JAVA-Bibliothek com.google.zxing.core in der Version 3.2.1 verwendet.

### Mapfish

Für die Funktion [Drucken](#drucken) wird im Webmap Client die JAVA-Bibliothek org.mapfish.print.print-lib in der Version 2.1.2 verwendet.

## FAQ

#### Kann man die Projektion des Webmap Clients anpassen?

Ja, dies wird durch das Überschreiben der Einstellung **settingEpsg** in der Datei **settings.profile.js** ermöglicht.

> Hinweis: Möglicherweise funktioniert das Drucken des Hintergrund-Layers OSM (OpenStreetMap) nicht korrekt bzw. es wird eine Karte an falscher Position ausgedruckt, da der OSM-Layer die Projektion nicht korrekt unterstützt. 

#### Kann man die Themen-Bilder unter "Thema wechseln" anpassen?

Ja, die Bilder sind als CSS definiert und liegen als PNG Dateien in den Maßen 140 x 60 vor.
Im folgenden wird beschrieben, wie ein neues Thema mit Bild hinzugefügt wird.
> ACHTUNG: Diese Änderungen sollten wemove mitgeteilt werden, damit diese ins Profil übernommen werden können. Damit bleiben bei einem Update oder bei einer Neuinstallation und Umschalten auf das Profil die Änderungen erhalten.

Bsp. zum Hinzufügen eines neuen Themas mit der ID *"inspire"*:
* alle folgenden Änderungen unter *ingrid-portal/apache-tomcat/webapps/ingrid-webmap-client/frontend* ausführen. Unterverzeichnisse sind im folgenden angegeben.
* Bild: im Verzeichnis *src/img* die Bilddatei hinzufügen als *theme_inspire.png*
* Style: im Verzeichnis *src/style* in der Datei *app.override.css* folgendes hinzufügen
{% highlight text %}
[ga-topic] .ga-topics-sprite-inspire {
  background: url("../img/theme_inspire.png");
  width: 140px;
}
{% endhighlight %}
* Lokalisierung: im Verzeichnis *prd/locales* in der Datei *de.json* folgendes hinzufügen
{% highlight text %}
"inspire": "INSPIRE",
"topic_inspire_tooltip": "GeoPortal.WSV INSPIRE",
{% endhighlight %}
* das neue Thema erscheint, sobald das Thema unter *WebmapClientData/data* als JSON hinzugefügt wird.
D.h. in der Datei *catalogs.json* muss die neue Kategorie mit *"id": "inspire"* definiert werden und in der neuen Datei *catalog-inspire.json* die Inhalte festgelegt werden, s.o. [Definition von Rubriken](#definition-von-rubriken).

#### URL-Shortener funktioniert nicht korrekt?

Der per Default eingestellte URL-Shortner (https://is.gd/create.php?format=json) verkürzt nur URL's mit einer Domain und keine mit einer IP-Adresse. Hier liefert der URL-Shortener einen Fehler und vom Webmap Client wird die ungekürzte URL zurückgeliefert. 

> Hinweis: Der URL-Shortener **YOURLS** verkürzt auch URL's mit IP-Adressen. Mehr Informationen zu YOURLS finden Sie unter [URL-Shortener](#url-shortener).