---
layout: default
title: Elasticsearch
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Ab Version 5.0.0 wurde ein zentraler Index eingeführt, in dem alle iPlugs ihre Daten indizieren. Die iPlugs werden bei einer Suchanfrage dann nicht mehr angesprochen. Für die InGrid Installation ist ein Elastic Search in Version 6.4.2 erforderlich.

Für die Trennung von zusammengesetzten Worten der deutschen Sprache wird ein sogenanntes "Decompound Plugin" verwendet. Dieses liegt aktuell nur für die Elasticsearch Version 6.4.2 zur Verfügung.


## Systemvoraussetzungen

* 2 GB RAM
* 10 GB Harddrive

* JAVA 1.8
* Cygwin (unter Windows)


## Installation

### Manuelle Installation
Zur Manuellen Installation kann die Version 6.4.2 auf den Seiten von Elasticsearch heruntergeladen werden.

Download: [https://www.elastic.co/de/downloads/past-releases/elasticsearch-6-4-2](https://www.elastic.co/de/downloads/past-releases/elasticsearch-6-4-2)

Installationsanleitung: [https://www.elastic.co/guide/en/elasticsearch/reference/6.4/install-elasticsearch.html](https://www.elastic.co/guide/en/elasticsearch/reference/6.4/install-elasticsearch.html)

Bei der Installation ist darauf zu achten, als Cluster Name "ingrid" zu wählen.

Im Falle einer manuellen Installation muss zusätzlich das Decompound-Plugin von InGrid installiiert werden, dies erfolgt über den Plugin-Mechanismus von Elasticsearch.
Unter Linux/Unix:
```
sudo bin/elasticsearch-plugin install https://nexus.informationgrid.eu/repository/maven-releases/org/xbib/elasticsearch/plugin/elasticsearch-analysis-decompound/6.4.2.0/elasticsearch-analysis-decompound-6.4.2.0.zip
```
Unter Windows ist die Konsole mit Admin-Rechten aufzurufen.
```
bin\elasticsearch-plugin install https://nexus.informationgrid.eu/repository/maven-releases/org/xbib/elasticsearch/plugin/elasticsearch-analysis-decompound/6.4.2.0/elasticsearch-analysis-decompound-6.4.2.0.zip
```

Nach der Installation des Plugins muss Elasticsearch einmal gestoppt und neu gestartet werden.

### Installation per Docker

Alternativ zur manuellen Installation kann das folgende Docker-Image verwendet werden:

```
docker-registry.wemove.com/ingrid-elasticsearch-with-decompound:6.4.2
```


## Konfiguration

### Absicherung Zugriff

Der Zugriff auf Elasticsearch sollte nur über localhost möglich sein. Ein externer Zugriff auf Elasticsearch wird nicht benötigt und sollte per Firewall Einstellung unbedingt unterbunden werden.
