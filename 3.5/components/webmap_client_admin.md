---
layout: default
title: Webmap Client
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
sitemap: false
---

## Allgemeines

Der Webmap Client dient der Darstellung von Kartenmaterial im Portal. Er kann über eine Administrationsoberfläche weitgehend konfiguriert werden.

Der Client wird über das Portal mit installiert.

## Aufruf

Die Admin-GUI des InGrid-WebMapClient wird über folgende URL aufgerufen:

{% highlight text %}
http://<HOST>/ingrid-webmap-client/admin/ 
{% endhighlight %}


Nach dem Aufruf der URL erscheint ein Dialog mit der Aufforderung der Authentifizierung. Die Authentifizierungsinformationen werden in der Datei `<INGRID-PORTAL-TOMCAT-VERZEICHNIS>/conf/tomcat-users.xml` abgelegt.

{% highlight text %}
<user username="admin" password="<PASSWORT>" roles="admin-gui"/>
{% endhighlight %}

Das Passwort kann individuell angepasst werden. Wird das Passwort geändert, so ist ein Portal-Neustart erforderlich damit die Änderung wirksam ist.



## Installation

Der Webmap Client wird mit dem InGrid Portal installiert.


## Aufruf

Die Admin-GUI des InGrid-WebMapClient wird über folgende URL aufgerufen:

{% highlight text %}
http://<HOST>/ingrid-webmap-client/admin/ 
{% endhighlight %}

Bitte geben Sie als Benutzername `admin` und als Passwort `admin` ein.

Der Zugang kann in der Datei `<INGRID-PORTAL-TOMCAT-VERZEICHNIS>/conf/tomcat-users.xml` geändert werden.

{% highlight text %}
<user username="admin" password="<PASSWORT>" roles="admin-gui"/>
{% endhighlight %}

Das Passwort kann individuell angepasst werden. Wird das Passwort geändert, so ist ein Portal-Neustart erforderlich damit die Änderung wirksam ist.



## Konfiguration

Die Admin-GUI des InGrid-WebMapClient enthält folgende Bereiche/Reiter:

- Basiseinstellungen
- Dienste
- Rubriken 

Diese enthalten die Möglichkeit Einstellungen für die Kartenkomponente festzulegen, Dienste zu Pflegen, Dienst-Rubriken zu erstellen, sowie Bereiche im Kartenclient zu definieren. 

## Basiseinstellungen

### Hintergrundkarte

Hier wird die initiale Kartendarstellung (WMS-Dienst) der Kartenkomponenten unter "WMS Capabilities Url" eingeben. Mit Betätigen des "Übernehmen"-Buttons wird der eingegeben Dienst mit dessen vorhanden Layern tabellarisch dargestellt. Diese Tabelle listet alle Layer auf. Wird eine Checkbox (vor dem Layernamen) ausgewählt, so wird damit signalisiert, dass ein Layer initial angezeigt wird, sobald die Kartenkomponente aufgerufen wird.

Die Kartenkomponente benötigt zur Darstellung einer Karte einen "Basislayer". Dieser kann in der Drop-Down-Liste ausgewählt werden.

Hinzu kann mit der Konfigurationsoption "Auf der Karte eingeblendeter Copyrightvermerk" ein Copyrighthinweis eingetragen werden, welcher in der Kartenkomponente rechts unten dargestellt wird.

Um die FeatureInfo-Abfrage auf der Kartenkompenente zu gewährleisten, kann unter "WMS für die FeatureInfo-Abfrage" eine URL hinterlegt werden

Alle Änderungen an diesen Einstellungen müssen mit dem "Speichern"-Button abgeschlossen werden. 

### Eigenschaften

Die "Initiale Kartenausdehnung" wird in vier Werten definiert:

- Nord
- Ost
- Süd
- West 

Diese Werte müssen im WGS-84 Koordinatensystem eingetragen werden.

Zu dem sind in diesem Bereich Einstellungen, welche die Karte allgemein betreffen:

| Einstellung | Info | Default |
| Single Tile: Darstellung der Karte in einer Kachel | Die geladenen Dienste werden in einem (bei true) oder in mehreren Kacheln geladen. | false |
| Transition Effekt | Hier kann der Übergangseffekt der Kacheln beim Herein- bzw. Herauszoomen definiert werden. | resize |

Mit dem "Speichern"-Button werden die Eintrage gespeichert. 

### Raumbezugssysteme

Hier können Raumbezugssysteme definiert werden, die in der Kartekomponente unter "Erweitere Einstellungen" die Möglichkeit bietet verwendete Kartendienste in einem anderen Raumbezugssystem (wenn vom Dienst unterstützt) darzustellen. Alle definierte Raumbezugssysteme werden tabellarisch dargestellt. Einen Raumbezugssystem wird folgendermaßen hinzugefügt:

1. Name des Raumbezugssystem in das Textfeld "Name" eintragen.
2. EPSG-Code in das Textfeld "EPSG-Code" eintragen. (in der Notation z.B. "EPSG:4326")
3. Zum Schluss mit dem Button "Hinzufügen" den eingetragen Raumbezugssystem in die tabellarische Liste mit aufnehmen. 

Die Anordnung der Tabelleneinträge kann per Drag&Drop geändert werden. Dabei ist zu achten, das der erste Tabellen-Eintrag der Standard-Raumbezugssystem der Kartenkomponente ist.

Gelöscht werden Raumbezugssysteme anhand dem "Roten"-Button am Ende jedes Raumbezugseintrag. 

### Maßstäbe

Ähnlich wie bei "Raumbezugssysteme" existiert auch hier eine tabellarische Darstellung der definierten Maßstäbe. Diese können in der Kartenkomponente ebenfalls unter "Erweiterte Einstellungen" verwendet werden. Auch das Hinzufügen und Löschen von Maßstäben entspricht dem der Raumbezüge. "Name" und "Zoom-Stufe" eintragen, mit "Hinzufügen" betätigen und die Liste der Maßstäbe wurde erweitert.

Auch hier kann die Anordnung der Einträge per Drag&Drop geändert werden. Die Reihenfolge der Einträge in der Drop-Down-Liste unter "Erweiterte Einstellungen" entspricht dem der Eintrage in der Maßstabstabelle.

### Proxy Zugriff

Hier muss eine Proxy-URL eingetragen werden, wenn die Karten-Applikation hinter einem Proxy installiert wurde.

### URL-Check

Diese Einstellungen bestimmen die automatische Aktualisierung der eingepflegten Dienste (unter dem Reiter Dienste) und die Funktionalität der Email-Benachrichtigung bei vorhandenen Update eines Dienstes.

| Einstellung | Info | Default |
| Automatisches Ausführungsintervall (Cron-Pattern) | Definition des Zeitpunkts für die regelmäßige Überprüfung. (siehehttp://de.wikipedia.org/wiki/Cron) | `/30 * * *` |
| Email-Adresse des Senders der Benachrichtigungs-Email | Email Adresse des Absenders. | portalu@portalu.de |
| Email-Adresse des Empfängers der Benachrichtigungs-Email | Email Adresse des Administrator. | webmaster@portalu.de |
| Email-Server, von dem die Benachrichtigungs-Email gesendet wird | Host für das Verschicken von Emails. | localhost |
| Text in der Betreffzeile der Benachrichtigungs-Email | Betreff der zu sendenden Email. | Eingebundene Kartendienste: GetCap-Update erforderlich! |
| Erläuternder Text in Benachrichtigungs-Email (die entsprechende URL wird automatisch hinzugefügt) | Inhalt der zu sendenden Email. (Capabilities-URL wird automatisch hinzugefügt.) | Nachfolgende GetCap-URL wurde aktualisiert. Um den Update in den Kartenviewer zu übernehmen, in der Kartenviewer-Administration bitte folgenden Dienst neu einlesen.  |


### Benutzeroberfläche

Unter diesem Reiter sind Einstellungen für die Karten-/Frontendkomponente (Viewer/Searcher) möglich kann installationsspezifisch  angepasst werden.

Dieser Reiter ist in 3 Bereichen eingeteilt: 

#### Kartenviewer

Betrifft die Kartendarstellung im Portal (Portal-Menü "Karten").

| Einstellung | Info | Default |
| == | == | == |
| Dienste anzeigen | Ein- und ausschalten. | true |
| Aktive Dienste: Baumstruktur wird in der Session gespeichert | Ein- und ausschalten. | false |
| Aktive Dienste: Layer-Baum klappt neu hinzugefügten Dienst auf | Ein- und ausschalten. | true |
| Aktive Dienste: Zoomen auf Dienst beim Hinzufügen aus den Rubriken | Ein- und ausschalten. | true |
| Aktive Dienste: Gruppenlayer wird dargestellt und automatische Selektierung von Unterlayer | Ein- und ausschalten. | true |
| Aktive Dienste: Dienste verschieben | Ein- und ausschalten. | true |
| Aktive Rubrik bestimmen (0=1.Rubrik, 1=2.Rubrik, ...) | Definition der aktiven Akkordions beim Laden der Kartenkomponente. | 0 |
| Button zum Ein- und Ausblenden des Service-Bereiches | Ein- und ausschalten. | true |
| Legende-Button: Darstellung der Legende | Ein- und ausschalten. | true |
| Objektinformationen-Button: Feature Abfrage eines Dienstes | Ein- und ausschalten. | true |
| Vor-Zurück Buttons: Einen Kartenausschnitt vor- oder zurückgehen | Ein- und ausschalten. | true |
| Button: Auf initiale Kartenausdehnung zoomen | Ein- und ausschalten. | true |
| Messen-Button: Strecken und Flächen messen | Ein- und ausschalten. | true |
| Eingabefeld: Ortssuche | Ein- und ausschalten. | true |
| Ortssuche: URL und Ländereinstellung bzw. Gebiet festlegen | Begrenzung der Ortsuche (siehe http://wiki.openstreetmap.org/wiki/Nominatim#Parameters). | http://nominatim.openstreetmap.org/search?format=json&countrycodes=de |
| Button Einstellungen: Fenster anzeigen | Ein- und ausschalten. | true |
| Einstellungen: Auswahlfunktion Raumbezugssystem anzeigen | Ein- und ausschalten. | true |
| Einstellungen: Auswahlfunktion Maßstab anzeigen | Ein- und ausschalten. | true |
| Druck-Button: Kartenausschnitt drucken | Ein- und ausschalten. | true |
| Laden-Button: Gespeicherten Kartenausschnitt laden | Ein- und ausschalten. | true |
| Mailto Funktion: Link des gespeicherten Kartenausschnitts versenden | Ein- und ausschalten. | true |
| Speichern-Button: Aktuellen Kartenausschnitt speichern (Einloggen) | Ein- und ausschalten. | true |
| Karte als WMC abspeichern -Button: Download | Ein- und ausschalten. | true |
| Hilfe-Button: Hilfe für die Kartenkomponente | Ein- und ausschalten. | true |
| Minimap: Übersichtskarte anzeigen | Ein- und ausschalten. | true |
| Willkommens-Dialog: Willkommens-Dialog anzeigen | Ein- und ausschalten. | true |
| Top-Abstand: Abstand zum oberen Browserrand im Portal | Abstand der Kartenkomponente zum oberen Browserrand. | 142  |

#### Suche

Betrifft die Kartenkomponente für die Suche ("Erweiterte Suche", "Facettierung").

| Einstellung | Info | Default |
| Legende-Button: Darstellung der Legende | Ein- und ausschalten. | false |
| Gebiet-Button: Gebiet auswählen | Ein- und ausschalten. | true |
| ID-Button: ID einer Administrativen Einheit auswählen | Ein- und ausschalten. | true |
| Vor-Zurück Buttons: Einen Kartenausschnitt vor- oder zurückgehen | Ein- und ausschalten. | false |
| Messen-Button: Strecken und Flächen messen | Ein- und ausschalten. | false |
| Eingabefeld: Ortssuche | Ein- und ausschalten. | true |
| Ortssuche: URL und Ländereinstellung bzw. Gebiet festlegen | Begrenzung der Ortsuche (siehe http://wiki.openstreetmap.org/wiki/Nominatim#Parameters). | http://nominatim.openstreetmap.org/search?format=json&countrycodes=de |
| Button Einstellungen: Fenster anzeigen | Ein- und ausschalten. | false |
| Einstellungen: Auswahlfunktion Raumbezugssystem anzeigen | Ein- und ausschalten. | false |
| Einstellungen: Auswahlfunktion Maßstab anzeigen | Ein- und ausschalten. | false |
| Druck-Button: Kartenausschnitt drucken | Ein- und ausschalten. | false |
| Laden-Button: Gespeicherten Kartenausschnitt laden | Ein- und ausschalten. | false |
| Speichern-Button: Aktuellen Kartenausschnitt speichern (Einloggen) | Ein- und ausschalten. | false |
| Hilfe-Button: Hilfe für die Kartenkomponente | Ein- und ausschalten. | true |
| Minimap: Übersichtskarte anzeigen | Ein- und ausschalten. | true |
| Info-Dialog: Info-Dialog anzeigen | Ein- und ausschalten. | true |
| Panel Höhe: Höhe der Kartenkomponente | Höhe der Kartenkomponente für die "Erweiterte Suche". | 676 |
| Panel Höhe: Höhe der Kartenkomponente für die Facettierung | Höhe der Kartenkomponente für die "Facettierung". | 500 |


## Dienste

### Dienste

In diesem Bereich können Dienste hinzugefügt, gelöscht, kopiert oder neu eingelesen werden. Die gespeicherte Dienste werden tabellarisch dargestellt.

1. "Hinzufügen" eines Dienste:<br>Hierzu erscheint ein Pop-Up-Fenster welches eine "URL" (Pflichtfeld) zu einem WMS-Dienst benötigt um eine Dienst hinzuzufügen. Wird ein "Name" eingetragen, so erhält der Dienst den eingetragenen Name.
2. "Löschen" eines Dienstes:<br>Wird eine Dienst in der Tabelle ausgewählt, so kann dieser Anhand des "Löschen"-Buttons entfernt werden.
3. "Kopieren" eines Dienstes:<br>Einen Dienst kopieren kann man indem man einen Dienst in der Tabelle auswählt und den "Kopieren"-Button betätigt. Dabei erscheint ein Pop-Up-Fenster in dem man der Kopie einen Namen eintragen kann, ansonsten wird dem existierenden Namen einfach ein "(Kopie)" angehängt.
4. "Neu einlesen" eines Dienstes:<br>Ist ein Dienst in der Tabelle selektiert, kann dieser Dienst neu eingelesen werden. Dabei werden eigentlich nur die Dienst-Layer auf den Originalzustand gesetzt. Name und gesetzt Rubriken bleiben erhalten. 

### Rubriken

Dienste können per Checkbox-Selektion in Rubriken hinterlegt werden. Wird in der Liste verfügbarer Dienste ein Eintrag per Mausklick ausgewählt, so werden im unten linksunter "Rubriken" alle vorhanden Rubriken in einer Baumstruktur dargestellt (siehe auch weiter unten die Hinweise zu "Rubriken"). Soll ein Dienst einer Rubrik zugewiesen werden, so geschieht dies durch Checkboxauswahl. Ein Dienst kann auch mehreren Rubriken zugeordnet werden.

Diese Dienste werden dann auch in der Kartenkomponente unter der ausgewählten Rubrik angezeigt.

### Layer

Für einen ausgewählten Dienst werden ausserdem die Layers eines Dienstes in einer tabellarischen Baumstruktur dargestellt (unten rechts) und können editiert werden. Zu den Änderungsmöglichkeiten gehören:

- "Name" des Layers indem man auf den Layername klickt und im dann erscheinenden Textfeld den Inhalt ändert.
- "Verwerfen" bedeutet: Ist bei einem Layer diese Checkbox aktiviert, so wird dieser Layer aus dem Dienst gelöscht und somit in der Kartenkomponente nicht dargestellt.
- "Aktivieren" erlaubt einem Layer initial dargestellt zu werden, wenn dieser Dienst in der Kartenkomponente hinzugefügt wird.
- "Feature Info" erlaubt die Abfrage von Feature Info in der Kartenkomponente auf diesem Layer. 

Wurden hier Änderungen vollzogen, so muss dies mit dem "Speichern"-Button bestätigt werden.

### URL-Check

Es besteht die Möglichkeit zur Automatischen Aktualisierung von eingepflegten Diensten. In diesem Zusammenhang wurde unter dem Reiter "Dienste" in der Tabelle der gepflegten Services zwei neue Spalten ("Status" und "Update") hinzugefügt.

"Status", beschreibt den Zustand der Capabilities und hat hier folgende Zustände:
- "grün", Update erhältlich
- "rot", Capabilities offline
- "schwarz", Update wird nicht überprüft
- "orange", Update muss manuell durchgeführt werden

"Update", ermöglicht die Einstellung der Capabilities-Aktualisierung mit folgenden Optionen:
- "aus", es wird nichts gemacht
- "per Mail", existiert ein Update, so wird eine E-Mail an den Admin gesendet (siehe "Allgemeine Einstellungen" -> "URL-Check")
- "an", ein Update wird automatisch ausgeführt.

Weitere Ergänzungen:
- Die Update-Option "aus" erhält immer den Status-Zustand "schwarz". Diese Update-Option wurde eingeführt, da Capabilities existieren die beim jedem HTTP-Aufruf dynamisch einen Eintrag (z.B. Session) in die Capabilities hinzufügen und hier eine Aktualisierungszustand nicht ermittelt werden kann.
- Die Update-Option "per Mail" kann die Status-Zustände "grün", "orange" und "rot" haben.
- Die Update-Option "an" kann die Status-Zustände "grün" und "rot" haben. Status-Zustand "orange" kann nicht erreicht werden, da bei vorhanden sein eines Capabilties-Updates die Capabilities sofort aktualisiert wird.

Bei einer Aktualisierung wird der Dienstname, welcher in der Admin-Gui eingetragen wurde übernommen. Dieser Vorgang war auch schon vorher so definiert für die Funktion "Neu einlesen". Andere Änderungen werden überschrieben, d.h. die im Bereich des "Layers" 


## Rubriken

Unter dem Reiter "Rubriken" ist eine tabellarische Baumstruktur an Rubriken und deren Unterrubriken bzw. Dienste. Hier können neue Rubriken erstellt werden, die dann mit Diensten befüllt werden können (siehe oben "Dienste"). Um eine Rubrik hinzuzufügen trägt man den Name der neuen Rubrik unter "Neue Rubrik" ein und betätigt den Button "Hinzufügen". Unter dieser erstellten Rubrik kann noch eine weitere Unterrubriken im gleichen Stil erstellt werden. Dazu wird nun das Textfeld "neue Rubrik" in der erstellten Rubrik verwendet.

Neben dem Erstellen von Rubriken ist hier auch eine Übersicht, welche Rubrik welche Dienste enthalten.

Diese Rubriken werden auch im Akkordeon-Menü der Kartenkomponente in eine Baumstruktur dargestellt. 


## FAQ


