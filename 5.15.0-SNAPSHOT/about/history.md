---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.15.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)

## Version 5.15.0

Release ...2023

### Hinweise für die Aktualisierung

**Für den Betrieb der Komponente iPLug SE außerhalb von Docker Containern wird mind. JAVA 11 benötigt.**

#### Instanzen vom iPlug SE müssen migriert werden

Die der Suchmaschine zugrundeliegende Software NUTCH wurde auf eine komplett neue Version 1.19 gehoben.

**WICHTIG:**<br>
Existierende Instanzen im iPlug SE müssen wie folgt migriert werden (s. auch [REDMINE-132](https://redmine.informationgrid.eu/issues/132#note-46)).
- Erstellung einer neuen Instanz. Im `<instance>/conf` Verzeichnis auf dem Server sind dann alle Konfigurationsfiles vorhanden, die benötigt werden.
- Erstellen einer Kopie der alten Instanz in der Admin GUI
- Die kopierte Instanz muss dann auf dem Server mit den Konfigurationsfiles versorgt werden. Dazu werden die Dateien, **außer der Datei** `nutch-site.xml`, aus der neu erstellten Instanz in die kopierte Instanz übertragen.<br>
Beispiel: 
  ```
  # backup directory "instance_copy" 
  cd <PATH_TO_INSTANCE_DIR_OF_IPLUG_SE>/instance_new/conf/
  cp `ls | grep -v "nutch-site.xml"` <PATH_TO_INSTANCE_DIR_OF_IPLUG_SE>/instance_copy/conf/
  ```
- Löschen der neuen Instanz
- SE iPlug neu starten
- Die so migrierten Instanzen müssen neu aufgebaut werden (new crawl)
ACHTUNG:
Beim Crawl gibt es in Version 5.13.x noch ein Problem mit Redirects/Excludes s. [REDMINE-4262](https://redmine.informationgrid.eu/issues/4262#note-5).
Das Problem kann durch das Hinzufügen einer Option in der NUTCH Konfiguration der Instanz behoben werden:
  ```
  http.redirect.max = 5
  ```
Dadurch werden Redirects während des Crawls bis zu einer Tiefe von 5 aufgelöst.
Die Option wird in version 5.14.0 per Default für alle neuen Instanzen gesetzt.


Bei der Gelegenheit sollte überprüft werden, ob das Feld `plugin.includes` in der Konfiguration der Instanz auf dem folgenden Wert steht:

`protocol-httpclient|urlfilter-(regex|validator)|parse-(html|tika)|index-(basic|anchor|metadata|more)|ingrid-indexer-elastic|scoring-ingrid|ingrid-language-identifier|urlnormalizer-(pass|regex|basic)|analysis-de`

Dies behebt evtl. fehlende Beschreibungen unterhalb der Treffer, die aus diesem iPlug stammen.


#### Aktualisierung von Elasticsearch

Die neue Version des iBus kann mit der Elasticsearch-Version 7.17.6 umgehen. Alle anderen Komponenten benötigen hierfür
keine Aktualisierung, da die Kommunikation über den iBus geht. Als zusätzliche Anpassung muss darauf geachtet werden,
dass das Elasticsearch-Image korrekt konfiguriert ist.

* Image: docker.elastic.co/elasticsearch/elasticsearch:7.17.6
* zusätzliche Umgebungsvariablen:
  * discovery.type=single-node
  * ingest.geoip.downloader.enabled=false

#### Aktualisierung von Interface-CSW

Die Anmeldung über CSW-T wurde bisher über die Datei `csw-t.properties` bestimmt. Die Nutzer für den Zugriff der CSW-T Schnittstelle 
werden jetzt in der `config.override.properties` über die Eigenschaft `cswt.users`. Hier werden die Benutzer und Passwortinformationen
kommasepariert angegeben. Dies geschieht nach dem folgenden Format:

```
cswt.users=<user1>::<bcrypt-passwordUser1>,<user2>::<bcrypt-passwordUser2>,...
```

Hierbei muss das Passwort im BCrypt-Format vorliegen. Dieses kann über das Start-Skript generiert werden, so dass es dann in
die Konfiguration eingetragen werden kann. Das Kommando dafür lautet:

```
sh start.sh calcPassword <clear-text-password>
```

#### Aktualisierung von iPlugs

iPlugs bei denen die Konfiguration der Beans überschrieben wurden, müssen in diesem Release angepasst werden. Erkennbar sind diese durch eine gemappte XML-Datei in das Verzeichnis "WEB-INF/override".
Die Datei muss stattdessen in das folgende Verzeichnis gemappt werden: "<iPlug-path>/conf/override"

### Wichtige Änderungen

...

### Liste der Änderungen

...

### Komponenten

...

