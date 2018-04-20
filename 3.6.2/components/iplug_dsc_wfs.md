---
layout: default
title: iPlug WFS
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der WFS-iPlug bietet eine Schnittstelle zu WFS (Web Feature Service)-Datenquellen. Die Daten der Datenquelle werden komplett heruntergeladen und indexiert. Die Originaldaten der Datenquelle werden gespeichert und dienen als Datenbasis für die Lieferung von Detaildaten.

Eine Anfrage an das iPlug generiert also KEINE Anfrage an die zugrunde liegende WFS Schnittstelle. Diese Vorgehensweise wurde insbesondere im Hinblick auf eine performante Abfrage des iPlugs gewählt.

Das iPlug fragt die WFS Schnittstelle regelmäßig (z.B. einmal täglich) ab. Die Abfrage-Frequenz kann über die Admin-Oberfläche gesteuert werden.

![InGrid Komponente iPlug WFS](../images/ingrid_iplug_wfs.png "InGrid Komponente iPlug WFS")

<figcaption class="figcaption">InGrid Komponente iPlug WFS</figcaption>

## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-dsc-wfs-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun das iPlug mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten.

Das iPlug besitzt eine Administrationsoberfläche über die die angeschlossenen iPlugs eingesehen und verwaltet werden können.

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

Neues Release von [https://distributions.informationgrid.eu/ingrid-iplug-dsc-wfs/](https://distributions.informationgrid.eu/ingrid-iplug-dsc-wfs/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-dsc-wfs BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer.

{% highlight text %}
java -jar ingrid-iplug-dsc-wfs-NEW-VERSION-installer.jar
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


### Indexierung von WFS Diensten

In der Administrationsoberfläche kann mit der Eigenschaft `ServiceUrl` die Service URL eines abzufragenden WFS Dienstes eingetragen werden.


In der Datei webapp/WEB-INF/spring.xml können weitere Einstellungen vorgenommen werden.

**Requesttyp der Anfrage**

Es kann eingestellt werden, ob die Anfrage per GET, POST oder Soap Request erfolgt. Dies kann individuell per Operation eingestellt werden.

- GET -> KVPGetRequest
- POST -> PostRequest
- Soap -> SoapRequest

{% highlight xml %}
<map>
	<entry key="GetCapabilities" value="de.ingrid.iplug.wfs.dsc.wfsclient.impl.PostRequest"/>
	<entry key="DescribeFeatureType" value="de.ingrid.iplug.wfs.dsc.wfsclient.impl.PostRequest"/>
	<entry key="GetFeature" value="de.ingrid.iplug.wfs.dsc.wfsclient.impl.PostRequest"/>
</map>
{% endhighlight %}

**Fetching Strategie**

In folgendem Abschnitt wird eingestellt, mit welcher Strategie das Harvesting der Features mittels GetFeature Operation abläuft.

- `PagingUpdateStrategy`: Die Features eines Feature Typs werden nach und nach geholt, wobei zunächst die Gesamtanzahl der Features abgefragt und dann eine Maximalanzahl per request geholt wird (Paging Mechanismus).<br>Der Parameter maxFeatures bestimmt dabei die maximale Anzahl per Request.<br>Diese Strategie ist weniger speicheraufwendig und sollte angewandt werden, wenn der Service eine Anfrage mit maxFeatures und startIndex unterstützt.
- `DefaultUpdateStrategy`: Die Features eines Feature Typs werden mittels eines Requests geholt, d.h. die gesamte Anzahl der Features wird übertragen.<br>Bei einer hohen Anzahl von Features kann dies sehr speicheraufwendig werden und zu OutOfMemory Exceptions führen.

Bei beiden Strategien kann mit dem requestPause Parameter eingestellt werden, wie lange zwischen den Requests gewartet werden soll (in Millisekunden).

{% highlight xml %}
<bean id="wfsDefaultUpdateStrategy" class="de.ingrid.iplug.wfs.dsc.cache.impl.PagingUpdateStrategy">
	<property name="requestPause" value="100" />
	<property name="maxFeatures" value="1000" />
</bean>
{% endhighlight %}

oder

{% highlight xml %}
<bean id="wfsDefaultUpdateStrategy" class="de.ingrid.iplug.wfs.dsc.cache.impl.DefaultUpdateStrategy">
	<property name="requestPause" value="1000" />
</bean>
{% endhighlight %}

**Mapping Skripte**

Die Skripte zum Mapping in den Index bzw. in die Detaildarstellung werden ebenfalls hier angegeben:

Index (Mapping nach Lucene):

{% highlight xml %}
<bean id="recordMapper" class="de.ingrid.iplug.wfs.dsc.index.mapper.WfsDocumentMapper">
	<property name="mappingScripts">
	  <list>
...
		 <value>classpath:mapping/pegelonline-wfs-1.1.0_to_lucene-igc-1.0.3.js</value>
	  </list>
	</property>
	<property name="compile" value="true"/>
</bean>
{% endhighlight %}

Detaildarstellung (Mapping nach IDF = InGrid? Data Format):

{% highlight xml %}
<bean id="idfMapper" class="de.ingrid.iplug.wfs.dsc.record.mapper.WfsIdfMapper">
	<property name="mappingScripts">
	  <list>
...
		 <value>classpath:mapping/pegelonline-wfs-1.1.0_to_idf-1.0.0.js</value>
	  </list>
	</property>
	<property name="compile" value="true"/>
</bean>
{% endhighlight %}



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

* Falsche Datenbank Verbindungsparameter
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs.
Löschen Sie gegebenenfalls den Cache Ihres Browsers und starten sowohl das Portal als auch das iPlug neu.

Sie müssen nach einer Änderung der Konfiguration das iPlug immer neu starten
