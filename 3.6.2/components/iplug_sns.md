---
layout: default
title: iPlug SNS
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der SNS-iPlug bietet eine Schnittstelle zum [Semantischen Netzwerk Service (SNS) des Umweltbundesamtes](http://sns.uba.de/umthes/).

Der Semantische Netzwerk Service bietet folgende Dienste:

- Umwelt Thesarus (UMTHES)
- Gazetteer
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
| client/@name                        | Eindeutige ID des iPlugs  |
| server/@name                        | Eindeutige ID des InGrid iBus  |
| socket/@port                        | Port unter dem der iBus erreichbar ist (Verbindungsaufnahme) |
| socket/@timeout                     | Timeout der Socketverbindungen in sec |
| message/@maximumSize                | max. zulässige Größe einer Message in Bytes, die über den iBus versendet werden kann |
| message/@threadCount                | Anzahl der Verbindungen (Threads), die der iBus gleichzeitig aufrecht erhalten kann |
| message/@handleTimeout              | Timeout einer Message in sec (Wie lange wartet der iBus auf die Beantwortung einer Message.) |
| message/@queueSize                  | Message Queue (Wie viele Nachrichten können in der Warteschlange des iBus enthalten sein.) |

### WebService Daten

In der Datei sns.properties können die Einstellung für den SNS vorgenommen werden.

| Eingabefeld                               | Inhalt                                             |
|-------------------------------------------|----------------------------------------------------|
| Thesaurus-URL (sns.serviceURL.thesaurus): | http://sns.uba.de/umthes  |
| Chronik-URL (sns.serviceURL.chronicle):   | http://sns.uba.de/chronik  |
| Gazetteer-URL (sns.serviceURL.gazetteer): | http://sns.uba.de/gazetteer  |
| Sprache (sns.language):                   | de |


## FAQ

### Wie kann ich ein Überschreiben der Datei `env.sh` bei einer Aktualisierung verhindern.

In der Datei env.sh können Systemvariablen komponenten-spezifisch angepasst werden (z.B. Proxy oder Heap Einstellungen). Um die Einstellungen nach einer Aktualisierung nicht zu verlieren, muss die Datei `env.sh` nach `user.env.sh` kopiert werden. Die Änderungen in `user.env.sh` werden nicht überschrieben.

### Mein System verwendet einen Proxy für HTTP(S) Zugriffe. Wie kann ich die Proxy-Konfiguration einstellen?

Bitte in der Datei env.user.sh folgendes zusätzlich eintragen:

{% highlight text %}
-Dhttp.proxyHost=yourProxyURL -Dhttp.proxyPort=proxyPortNumber -Dhttp.proxyUser=someUserName -Dhttp.proxyPassword=somePassword -Dhttps.proxyHost=yourProxyURL -Dhttps.proxyPort=proxyPortNumber -Dhttps.proxyUser=someUserName -Dhttps.proxyPassword=somePassword -http.nonProxyHosts=localhost|127.*|[::1]
{% endhighlight %}

User und Passwort müssen nicht unbedingt angegeben werden.

Achtung: Die Trennung mit dem pipe Symbol muss unter Windows/cygwin escaped werden:

{% highlight text %}-http.nonProxyHosts=localhost^|127.*^|[::1]{% endhighlight %}


### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Falsche SNS WebService Verbindungsparameter
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs.
Löschen Sie gegebenenfalls den Cache Ihres Browsers und starten sowohl das Portal als auch das iPlug neu.

Sie müssen nach einer Änderung der Konfiguration das iPlug immer neu starten


### Es kommen keine Ergebnisse vom SNS (SSL-Problem)

Mit der Umstellung des SNS-Dienstes nach HTTPS wird ein zusätzliches Zertifikat in Java benötigt, um die Anfragen absetzen zu können. Ab der Version 3.6.2 sollten die URLs zu den Diensten in der Datei "sns.properties" bereits mit "https" beginnen. Dies betrifft die Schlüssel "sns.serviceURL.[chronicle|thesaurus|gazetteer]". Bei vorherigen Versionen muss dies manuell umgestellt werden.

Als nächstes muss das Zertifikat "Let’s Encrypt Authority X3" von https://letsencrypt.org/certificates/ heruntergeladen werden. Dies kann mittels folgendermaßen geschehen:

`wget https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem`

Dieses Zertifikat wird dann mittels des keytool-Kommandos in Java importiert. Hierbei ist es wichtig, dass man die Javaversion aktualisiert, die auch zum Starten der Komponente verwendet wird.

`sudo <path-to-jdk>/jre/bin/keytool -trustcacerts -keystore <path-to-jdk>/jre/lib/security/cacerts -importcert -file lets-encrypt-x3-cross-signed.pem`

Hierbei wird der aktuelle "keystore" mit dem neuen Zertifikat aktualisiert. Wenn der keystore noch nicht existiert, so wird zusätzlich nach einem neuen Passwort nachgefragt. Falls der keystore schon existiert, so wird stattdessen nach dem dazugehörigen Passwort gefragt. Dieses ist standardmäßig "**changeit**".

Nach einem Neustart des SNS-iPlugs, sollte der SNS wieder Ergebnisse liefern.
