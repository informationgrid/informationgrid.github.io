---
layout: default
sitemap: false
title: iPlug MapClient
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der Datasource Mapclient dient der Indizierung von Metainformationen aus den vorgehaltenen WMS-Diensten. Diese stehen nach der Indexierung für die InGrid Suche zur Verfügung.

Alle vorgehaltenen WMS Dienste werden in Metadatenobjekte vom Typ "Geodatendienst" (ISO: `hierarchyLevel=service`) transformiert und indexiert.

Die indexierten Daten werden auch für die im MapClient integrierte Suche verwendet.


<div class="mxgraph" style="position:relative;overflow:hidden;width:631px;height:451px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">5Zpbb6M4FIB/TR4TAeb62PQ2q51ZVdvZqfZpZcAQq4CRA206v36OEzsxMW3TFtp0VokUcnCM+c7xuZEJOi1XlxzXi28sJcXEsdLVBJ1NHMd2kQsfQvKwkYSBvxHknKZy0E5wTX8SKbSktKUpWXYGNowVDa27woRVFUmajixjRfcSNc7V9DvBdYILU3pD02YhpbYf7U58ITRfyOuEjryZZfOg5khJhtuima5FcE6cLrGaS97VypJTO3LmByXwtpeqOmv6yVjZEXCy3MGS90vluuRVYsZTwjsikqoxi6YRCE8mzgW8U07vyCzl+H5G2VqELq25ZV3/+2d2vgy/3qS3xY+byx+35OKvr3//c76ZraDVra4GdA6mwBmDS4ijcnVKCmEOStN+ht0QJYkbuLbrBtF0s6qLQ4dv9cNJJW/jpVM6gY9t3/dTD2MrSafhZso7XLQSpqHR5QLX4nBJq7wgJ5yz+wma3y9oQ65rnIhT92D8IFs0ZQHfbDjMOSHVAcuVt3RHeEPUptmihF1FWEka/iBsZnMWWVKVckO5SE5xv7NYL9iIFpqtIvkzLBWWb2fe4YIDSayfXhZkyHK9KMIEB4k7ldavwfuG66Sg4nbhV1dFm08cv4AVzGMOR7k4Mvhy1lYpEZcQ4J7hWre8hh+OATbYA2vL29PAOq4co5P1ByBr2KXUoIb2D4C0MuDBzQmoGqFlw9ktOWUFE1u/YhWMnGe0KPZEuKC58DEJMBReYi5QUXCGJ/JESdNUXKZXJQxGZ4XYCWcLGAe2rjQ7rFY8T25IqRXPNbXiyU2sK0UpalClINPgS1zX4BeEUhJO62Z5gMH/7jpzA/SsztRmG30jIRlQn/LwObig+g0ktukHjtWU61t5gpBMi5SviUwn7tszLwh920ceTGc7voSoE/OsWWTtXqHcCIMCdExX9GiITFnSlmt+r/bjj+rvefPTXcIePK/PQ3TYKQ0Ma3wS1fGzU2e7MVB9/XCyyIod4iOMI5xEoe3INE8HS+ctON+35BZcDJwzOE8bAcCTFxnaO3YZO5EJ2R4rzzA4quXrecalKM0c65SVZVtBdGkog1T2FWFt+HAVr5c5vo6sbgRzkDRzTUdRT5I9RNZhqEguRVPRFeMNht+8xdg7CNH8ARYBqN8hG7CVHev2jnpgjmLvMu4e5pBbCOeq3ksphwAvdgJUgqwVK38h4rXtjpEiO91kAvUAVkViN3kYga/cJx2+z3oORZyW6waNzlB5jK84JsUVW1Kpgpg1jeiIGC6lYUIL65lOlvWmJSToy7nPun2PJK3QjEL2llHYOnyWwJzQDcENhg8hh5ByUdIVgWCaTpXAswWhmrOc47Ik/D90NrWdcFZDITC+c/LDvUJVdQQ0fashur6VbFB9mxXRSVrS14WL36sK8iOZjSs19WzLsSpXQ00vyuHf6PY2rS/D/XHWbDIJdKYynoGBo26gcVVxpvvBnn0xih88xqrT8+Tvnqg6Vf95dECqtHif0uhR/XyCqtJEZybtx4lOdVZngW35kR06KIwiFOxZ4cxzO69jLTlF0P9M2IMZeEAUIt8NgigM3G4jNZrpvCw5+xFSN8uf3yBjl/F4W16+X8buxZHle3YUh66VOFncUxHBQxxR/qvnOKciO85bLvsA1gUV9vq/z++QSt62XW4zmoY90VQ9TB5UiaNEhPF6AijoboDeTORD/I/n23FIsjgLPSd2M+uQhoGWyB2cpB1C9PEurfIX2wrQfMBi9z0EHqIENAj1JXLDPvTVDbGHsE6yX39PZnWjNZ+MtfQlEEdP6uAnA+/H0UwJbkgMgk3guib8jgKfT4NWeQSVDXwkWrN/9+X796sP6fXvJWPaP2qewf9Cb4r2mv3bh7OdYGTyV23XF/CHr7u/R63PaX+bQ+e/AA==</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-iplug-dsc-mapclient/](https://distributions.informationgrid.eu/ingrid-iplug-dsc-mapclient/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-dsc-mapclient-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun das iPlug mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten. 

Das iPlug besitzt eine Administrationsoberfläche über die die angeschlossenen iPlugs eingesehen und verwaltet werden können.

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

Neues Release von [https://distributions.informationgrid.eu/ingrid-iplug-dsc-mapclient/](https://distributions.informationgrid.eu/ingrid-iplug-dsc-mapclient/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-dsc-mapclient BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-dsc-mapclient-NEW-VERSION-installer.jar
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

### Basiskonfiguration

Die Basiskonfiguration für iPlugs kann [hier](iplug_admin_gui.html) eingesehen werden.

### Indexierung von WMS Diensten

Das iPlug benötigt eine Datei in der die Capability URLs der zu indexierenden WMS Dienste hinterlegt sind. Die Daten müssen im XML-Format vorliegen und die Urls müssen mit dem Bezeichner `<capabilitiesUrl></capabilitiesUrl>` eingeschlossen sein. 

In der Regel ist dies das Konfigurationsfile des MapClient 'ingrid_webmap_client_config.xml'.


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

