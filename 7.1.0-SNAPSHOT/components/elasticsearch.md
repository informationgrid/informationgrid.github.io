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

* JAVA 17
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

Unter Linux muss der *virtual memory* für Elasticsearch erhöht werden. Dazu sollte als root ausgeführt werden:

```
sysctl -w vm.max_map_count=262144
```

Zur Persistierung der Einstellung muss der Wert `vm.max_map_count`  in `/etc/sysctl.conf` übernommen werden.

Siehe auch [https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html#vm-max-map-count](https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html#vm-max-map-count)



### Installation per Docker

Alternativ zur manuellen Installation kann das folgende Docker-Image verwendet werden:

```
docker-registry.wemove.com/ingrid-elasticsearch-with-decompound:6.4.2
```

Wenn das Datenverzeichnis in ein docker volume auf den host abgebildet werden soll:

```
# Ausschnitt aus docker-compose.yml

volumes:
# make esdata directory writable to container process
# to obtain the user 'exec bash' into container
# the adapt the rights of esdata
# mkdir -p elastic/_data/esdata
# chown -R 1000 elastic/_data/esdata
./elastic/_data/esdata:/usr/share/elasticsearch/data
```

muss der Elasticsearch Prozess Schreibberechtigung für das host Verzeichnis `./elastic/_data/esdata` haben:

```
chown -R 1000 elastic/_data/esdata
```



## Konfiguration

### Absicherung Zugriff

Der Zugriff auf Elasticsearch sollte nur über localhost möglich sein. Ein externer Zugriff auf Elasticsearch wird nicht benötigt und sollte per Firewall Einstellung unbedingt unterbunden werden.
