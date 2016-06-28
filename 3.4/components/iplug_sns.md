---
layout: default
sitemap: false
title: iPlug SNS
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der SNS-iPlug bietet eine Schnittstelle zum [Semantischen Netzwerk Service (SNS) des Umweltbundesamtes](http://www.semantic-network.de/).

Der Semantische Netzwerk Service bietet folgende Dienste:

- Umwelt Thesarus (UMTHES)
- Gazeteer
- Umweltchronik

Die Dienste werden an verschiedenen Stellen in der InGrid Software verwendet:

- Erweiterte Suche im Portal: Thesarusbegriffe, Raumbezüge
- InGrid Catalog/InGrid Editor: Verschlagwortung, Ermittlung von Raum- und Zeitbezügen
- iPlug SE: automatische Anreicherung des Index mit Schlagworten, Raum- und Zeitbezügen


<div class="mxgraph" style="position:relative;overflow:hidden;width:593px;height:338px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Znbc6M2F8D/Gj86A4ibH+Pctu12J60z3fmeOgIJrC4gRshxsn/9HsGRDcH9stnYbBqPZ4yOZAn9zkVH0oxclA83itbr3yXjxcxz2MOMXM48z/WJDz9G8thJ4ijsBLkSDBvtBSvxlaPQQelGMN4MGmopCy3qoTCVVcVTPZBlshgOUdPcdr8XrFJajKWfBdNrlLrhYl/xgYt8jePEHk6m0Y+2D8Yzuin0vBVBnakuqe0LZ/XgdEWCHT9i2SXYoKbV4JW+SlkOBIo3e1Y4XYGvhX0kUjGuBiLObJu11obg+cy7hi9T4p6fMUW3Z0K2InLjLB1n9b/fsqsm/vj5z8tfy7+81Pmjkt7dP/Av01shqi99LZArsAQlJQxhnsqHC14Ya7CKDjPqxyRN/ch3fT9azLu3uv7e5jv1KF7hNF7YZRZlxPGDxYJyGqX+HNV3T4sNslx9Wpn2t8Umn3lhAcMsEwVPuXkaKVvJTcW46dyF6u1aaL6qaWpqt+APIFvrssDqeqNq+GM3IleaWyf5jmnt+YKncVlyrR6NHXXNPR/1i05GFlje9qzY2sC6Z8AhyiiqMd91vYcID8jxMFOPBC5NYEzOY5Ywf+7GY6q8pJUWKUg/cb2V6gs8rbi6F8DqyJhzxTk4z1JCC6ENkQBneVzob4s5BpIe8xHFZk1r89iIKi/4uVJy+zxNJTXVQppoBDFqMrhuNKTrO8GIrh25D9fGz9fADYNgwVLiEpqQiDM+xyWsx/bD3d3tiC9M31hvDx4tRG7IpYDBROKlgSRgvTnHilIwZv5+UAsSWmeFUdLlGtq13CfjH2JotPwDMuaPft7n76HsVcbNQpaEWeqEXhxEkT9HU+7x/6W6MemD51zIstxUgLS10ecjyRQ6StrXnFxFnoPlnooW0VhFNm4dVUVoHT0V3UqlKfznNaF8gJAsH+ElAPUpFlAyZOkS7LMfzMkBmEcJ5k9hjuPNv8ZyJjfJPpYzoSAH7qJ1IzfmzV+IuLXdUwCOEZ5dLQ8AtqI+X+s6R+WLS8m74muzj10w+Il8x1m1WG6a14UCZRqePKY+Tep2/t1f9uyW9uRxAF2mz7HblxxhF3J6luETkyTxOIWIMG09OcrxluSUW7zTww0WwwXrIFyMcyeHO9577PKz9A3mZ5ms9IUsZHc0Qpz2M13eRnaHPrZ8YOPoTJW42XO2SRbDiQjD1IaEPST+MxZDFwd6T4BD9y0BHm8P//OAI+uWbwLweHP37s8/SIhJ3u78AwPyM+cfxzh/GivgBRtCUbZ3HH0tWOgfacKLW9kINPlEam1uFUZa0dLgb3s6b+ruVsUskNj35fDuIGUVORNw/5IJSJTUGSz55kaBago/Rg6Z/3UpHjibEza3gsC47XWtZK5oWXL1N7kET47P6iqf4uzWf5o+IeK+eg/kplZ2XPW+YD/6o2e3bjzl6S2xqef/O709sIv6Ae+B4v7Gqa3rXUSSq28=</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-sns-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun das iPlug mit

{% highlight text %}
sh admin.sh
{% endhighlight %}

starten. 

Das iPlug besitzt eine Administrationsoberfläche über die die angeschlossenen iPlugs eingesehen und verwaltet werden können.

{% highlight text %}
http://localhost:PORT/step1/
{% endhighlight %}

Anstelle von `localhost` können Sie auch die IP-Adresse des Computers eingeben. Authentifizieren Sie sich als 'admin' mit dem von Ihnen vergebenen Passwort.


Nach der ersten Installation wird die Administrations-GUI unter

{% highlight text %}
http://localhost:8082/step1/
{% endhighlight %}

aufgerufen und die Konfiguration vervollständigt. Nach der Konfiguration beenden Sie die Administrationsoberfläche mit `CTRL-C`. Sie können nun das iPlug mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten.


## Aktualisierung

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-sns/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-sns BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-sns-NEW-VERSION-installer.jar
{% endhighlight %}

Während der Installation bitte "Upgrade" auswählen und das Installationsverzeichnis Verzeichnis angeben.

iPlug starten.

{% highlight text %}
sh start.sh start
{% endhighlight %}

## Betrieb

{% highlight text %}
start.sh [start|stop|restart|status]
{% endhighlight %}

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.


## Konfiguration


### InGrid Communication


Die Datei `conf/communication.xml` enthält die Konfigurationen der InGrid Kommunikationsschicht.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<communication xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="communication.xsd">
    <client name="/ingrid-group:iplug-management-'Ihr-Name'">
        <connections>
            <server name="/ingrid-group:ibus-'Ihr-Name'">
                <socket port="9900" timeout="10" ip="127.0.0.1" />
                <messages maximumSize="1048576" threadCount="100" />
            </server>
        </connections>
    </client>
    <messages queueSize="2000" handleTimeout="10"/>
</communication>
{% endhighlight %}

Die einzelnen Parameter haben folgende Bedeutung:

| Parameter                           | Beschreibung                                             |
|-------------------------------------|----------------------------------------------------------|
| client/@name                        | Eindeutige ID des iPLugs  |
| server/@name                        | Eindeutige ID des InGrid iBus  |
| socket/@port                        | Port unter dem die Administrations GUI zu erreichen ist |
| socket/@timeout               | Timeout der Socketverbindungen in sec |
| message/@maximumSize                | max. zulässige Größe einer Message in Bytes, die über den iBus versendet werden kann |
| message/@threadCount                | Anzahl der Verbindungen (Threads), die der iBus gleichzeitig aufrecht erhalten kann |
| message/@handleTimeout              | Timeout einer Message in sec (Wie lange wartet der iBus auf die Beantwortung einer Message.) |
| message/@queueSize                  | Message Queue (Wie viele Nachrichten können in der Warteschlange des iBus enthalten sein.) |



## FAQ



### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Falsche Datenbank Verbindungsparameter 
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs.

Sie müssen nach einer Änderung der Konfiguration das iPlug neu starten

