---
layout: default
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


![InGrid Komponente iPlug SNS](../images/ingrid_iplug_sns.png "InGrid Komponente iPlug SNS")

<figcaption class="figcaption">InGrid Komponente iPlug SNS</figcaption>


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

Während der Installation bitte "Update" auswählen und das vorhandene Installationsverzeichnis angeben.

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
| socket/@port                        | Port unter dem der iBus erreichbar ist (Verbindungsaufnahme) |
| socket/@timeout               | Timeout der Socketverbindungen in sec |
| message/@maximumSize                | max. zulässige Größe einer Message in Bytes, die über den iBus versendet werden kann |
| message/@threadCount                | Anzahl der Verbindungen (Threads), die der iBus gleichzeitig aufrecht erhalten kann |
| message/@handleTimeout              | Timeout einer Message in sec (Wie lange wartet der iBus auf die Beantwortung einer Message.) |
| message/@queueSize                  | Message Queue (Wie viele Nachrichten können in der Warteschlange des iBus enthalten sein.) |

### WebService Daten

Geben Sie hier in der Administrationsoberfläche die Konfiguration des SNS WebService an. Die Daten werden in der Datei `conf/plugdescription.xml` abgelegt.

| Eingabefeld                         | Inhalt                                             |
|-------------------------------------|----------------------------------------------------------|
| WebService-URL:                     | http://www.semantic-network.de/service-xtm-2.0/xtm/soap  |
| maximal zu analysierende Wörter:    | 1000  |
| Benutzername: 	                  | "Ihr SNS Zugang" |
| Kennwort:                           | "Ihr SNS Passwort" |
| Sprache:                            | de |


## FAQ



### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Falsche Datenbank Verbindungsparameter 
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs. 
Löschen Sie gegebenenfalls den Cache Ihres Browsers und starten sowohl das Portal als auch das iPlug neu.

Sie müssen nach einer Änderung der Konfiguration das iPlug immer neu starten

