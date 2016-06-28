---
layout: default
sitemap: false
title: Opensearch Server
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der Opensearch-Server dient der Indizierung von Inhalten aus Datenbanken und stellt diese über Opensearchanfragen zur Verfügung. Um die gewünschten Indexdokumente zu generieren, wird ein Graphic User Interface (GUI) mitgeliefert, welche es ermöglicht, die relationalen Strukturen der Datenbank in eine planare Indexstruktur zu überführen (Mapping). Der Opensearch-Server verhält sich hier generisch, das heißt, dass Datenbanken mit beliebiger Datenstruktur angeschlossen werden können. Als Datenbank-Typen werden alle JDBC kompatiblen Datenbanken unterstützt.

Darüber hinaus stellt der Opensearch-Server administrative Funktionen zur Verfügung, die es dem Administrator erlauben, das Ranking der Datenquelleninhalte zu beeinflussen.


<div class="mxgraph" style="position:relative;overflow:hidden;width:593px;height:140px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">7ZlLk+I2EMc/DcehsB6WdVxmNsmmksqBQ87CkrFrjeUSZgf2029r3AIbMwWbtbOkKsUBuyXr8evWv9swo8/bw69O1fmfVptyRhb6MKMvM0IiRhl8ecuxtSQibg0bV2jsdDasiq8GjQu07gttdr2OjbVlU9R9Y2qryqRNz5bZsj9FrTZh+LNhlapyaP270E2O1iiW54bfTLHJcZ6E4GZ2zTGMoU2m9mXz9GaCNt+8VWEs3NVh0d4SjoYjGiKOvGpV9db01dptz+DM7gwL91vgunDQtXXauJ6pLKrPXXD0IzjPWQsP+qvt4dmU3oHBN3GmWELTlAkWMSbkUzvOL/d2PxF1psLFfeeQhPJIrQmVxiR6rdlTlLRjflHlHvf/V22qlVEuzcE+I3EJUy3XDq42/mpl3BfgMLAPfOfsvtLGTxxB82teNGZVq9S3vkJ4gy1vtiU213tXw4PtWoxrTIj5O7Z8Zg8Hx9itadzRh0XbnYWwwjMTJbS9f+0EZfBo3onHGG0KXbw5DX0GDBfI+F7eGPwd3gNwu1zV/nJXVJvSfHDOvt4G6GyjmsL6OIfoX26cMdUUOHnAEnBKjKAOTnGFJh2BZqzBeZmQMpEyWsQMg31ymEdYBjw2AU3K7qDJp6FJMhETkvJ1LEQioic8Fh2Yv78sYZTLg/4CR/3m4QdG3t5humuc/WyebWm9iFa2gp7LrCjLC5Mqi40HnwJTr7dLT7yAtPIBG7aF1n6aq0600DvzzqIvOfSDMxAWN67jCMcx0HEkpJquqoS02/VccPiYnsOp39PwTx5k5jH9E7+N748JtQmPSnAKve80cZSNH/GJpMqALzQ3Wgutv0ea0iMUEm+1xS1dQiECrNClaPw2ZZho3PBOLnTpStIMJ2DsnHlJEqcZ6NJPiNwJEwFHwKfQxTjtAr8iJ6G4GRM4RmoH+JuCVKYZQIeB4N3BIzwFc2n3MO6tSJ6CYXyZTPmQIVkg5y5EqCV+nCJPNckMW2eLlMu1ElcU4A8LwXe1qP4E5//wf1olLEgxupBGQ92JUdTHzqoDBw6FZ+CPDbzk1O+CwNdotQ7dcZUjArpWd3B8x+iluCkADYXi3Rynbbrfvm36ljK01QEEdvtCfl96u+67IcVe+ppzkcRRTDk4JiJX6gK2mMtF54MTj8pwWHWPxnBMcCFNzQWIpYwSKK2kZASDD4ORzTnrfGKc7/GgDwvmR4Yu5oxENKExE0ImIvwIiNDlvEtrEUrgx4OO044L/aQSk/6EdI/oPgZkLGTGhTwlWd5XlAvOyYWiPCp28V/DLi80pc89pn1Rwe3929zh9vxr+ltb538R+vEb</div></div>


### Dienste

Nach dem Start des Servers stehen folgende Dienste zur Verfügung:

| Dienst | Beschreibung |
| == | == |
| http://server:port/path/descriptor | Unter dieser Adresse erhält man den Deskriptor, der die Verwendung der Opensearch-Schnittstelle beschreibt. Die darin enthaltene Template-URL beschreibt mit Hilfe von Platzhaltern, wie ein korrekter Aufruf erfolgen kann. |
| http://server:port/path/admin | Hier wird die Administrationsoberfläche bereitgestellt unter der der Server konfiguriert werden kann. |
| http://server:port/path/query?q= | Hier befindet sich die eigentliche Abfrage des Indexes über die Opensearch-Schnittstelle. Diese Url sollte mit der im Deskriptor übereinstimmen. |


## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-server-opensearch/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-server-opensearch/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-server-opensearch-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten. 

Die Komponete besitzt eine Administrationsoberfläche.

{% highlight text %}
http://localhost:PORT/admin
{% endhighlight %}

Anstelle von `localhost` können Sie auch die IP-Adresse des Computers eingeben. Authentifizieren Sie sich als 'admin' mit dem von Ihnen vergebenen Passwort.


Nach der ersten Installation wird die Administrations-GUI unter

{% highlight text %}
http://localhost:8082/admin
{% endhighlight %}

aufgerufen und die Konfiguration vervollständigt.


## Aktualisierung

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-server-opensearch/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-server-opensearch/) herunterladen.

Komponente stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-server-opensearch BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-server-opensearch-NEW-VERSION-installer.jar
{% endhighlight %}

Während der Installation bitte "Upgrade" auswählen und das Installationsverzeichnis Verzeichnis angeben.

Komponente starten.

{% highlight text %}
sh start.sh start
{% endhighlight %}

## Betrieb

{% highlight text %}
start.sh [start|stop|restart|status]
{% endhighlight %}

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.


