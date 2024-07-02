---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.2.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.2.0

Release TT.MM.JJJJ

### Hinweise für die Aktualisierung

#### Elasticsearch

Es wird jetzt die derzeit aktuellste Version 8.14.1 von Elasticsearch unterstützt. Für die Anpassung ist Folgendes zu tun:
* Aktualisierung der `docker-compose.yml`-Datei (siehe weiter unten)
* Anpassung der Konfiguration zu Elasticsearch in den iPlugs und im iBus
  * Anstelle des Ports `9300` wird nun `9200` verwendet
  * Analyse der Konfigurationsdateien configuration.override.properties (iPlugs), application-default.properties (iBus), docker-compose.yml
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


### Liste der Änderungen



### Komponenten

