---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.8.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.8.0

Release xx.xx.2021

### Wichtige Änderung

#### Änderung am Interface-Search

Wegen eines Problems bei der Anzeige von extern gekoppelten Datensätzen im Atom-Feed Client, muss die Konfiguration angepasst
werden. Da diese meist von den Docker-Containern ausgelagert wird, muss diese Anpassung manuell erfolgen. Siehe dazu auch
[Ticket #2366](https://redmine.informationgrid.eu/issues/2366)

Folgende Eigenschaft muss in der Datei `interface-search.properties` angepasst werden:

```properties
# atom.download.dataset.feed.extension=/dataset/{servicefeed-uuid}/{datasetfeed-uuid}
atom.download.dataset.feed.extension=/dataset/{servicefeed-uuid}?datasetUuid={datasetfeed-uuid}
```

### Liste der Änderungen

### Komponenten
