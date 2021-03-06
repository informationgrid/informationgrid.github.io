---
layout: default
title: Opensearch Server
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der Opensearch-Server dient der Indizierung von Inhalten aus Datenbanken und stellt diese über Opensearchanfragen zur Verfügung. Um die gewünschten Indexdokumente zu generieren, wird ein Graphic User Interface (GUI) mitgeliefert, welche es ermöglicht, die relationalen Strukturen der Datenbank in eine planare Indexstruktur zu überführen (Mapping). Der Opensearch-Server verhält sich hier generisch, das heißt, dass Datenbanken mit beliebiger Datenstruktur angeschlossen werden können. Als Datenbank-Typen werden alle JDBC kompatiblen Datenbanken unterstützt.

Darüber hinaus stellt der Opensearch-Server administrative Funktionen zur Verfügung, die es dem Administrator erlauben, das Ranking der Datenquelleninhalte zu beeinflussen.


![InGrid Komponente Opensearch Server](../images/ingrid_opensearch_server.png "InGrid Komponente Opensearch Server")

<figcaption class="figcaption">InGrid Komponente Opensearch Server</figcaption>


### Dienste

Nach dem Start des Servers stehen folgende Dienste zur Verfügung:

| Dienst | Beschreibung |
| == | == |
| http://server:port/descriptor | Unter dieser Adresse erhält man den Deskriptor, der die Verwendung der Opensearch-Schnittstelle beschreibt. Die darin enthaltene Template-URL beschreibt mit Hilfe von Platzhaltern, wie ein korrekter Aufruf erfolgen kann. |
| http://server:port | Hier wird die Administrationsoberfläche bereitgestellt unter der der Server konfiguriert werden kann. |
| http://server:port/query?q= | Hier befindet sich die eigentliche Abfrage des Indexes über die Opensearch-Schnittstelle. Diese Url sollte mit der im Deskriptor übereinstimmen. |


## Systemvoraussetzungen

* 256 MB RAM
* 500 MB Harddrive

* JAVA 8
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-server-opensearch/](https://distributions.informationgrid.eu/ingrid-server-opensearch/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

```sh
java -jar ingrid-server-opensearch-VERSION-installer.jar
```

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

```sh
sh start.sh start
```

starten.

Die Komponete besitzt eine Administrationsoberfläche.

{% highlight text %}
http://localhost:PORT
{% endhighlight %}

Anstelle von `localhost` können Sie auch die IP-Adresse des Computers eingeben. Authentifizieren Sie sich als 'admin' mit dem von Ihnen vergebenen Passwort.


Nach der ersten Installation wird die Administrations-GUI unter

{% highlight text %}
http://localhost:8082
{% endhighlight %}

aufgerufen und die Konfiguration vervollständigt.


## Aktualisierung

Neues Release von [https://distributions.informationgrid.eu/ingrid-server-opensearch/](https://distributions.informationgrid.eu/ingrid-server-opensearch/) herunterladen.

Komponente stoppen.

```sh
sh start.sh stop
```

Aktuelles Installationsverzeichnis sichern:

```sh
cp -r /opt/ingrid/ingrid-server-opensearch BACKUP_DIRECTORY
```


Die Aktualisierung erfolgt über den Installer.

```sh
java -jar ingrid-server-opensearch-NEW-VERSION-installer.jar
```

Während der Installation bitte "Upgrade" auswählen und das Installationsverzeichnis Verzeichnis angeben.

Komponente starten.

```sh
sh start.sh start
```

## Betrieb

```sh
start.sh [start|stop|restart|status]
```

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.
