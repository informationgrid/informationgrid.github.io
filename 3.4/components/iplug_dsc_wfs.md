---
layout: default
title: iPlug WFS
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der WFS-iPlug bietet eine Schnittstelle zu WFS (Web Feature Service)-Datenquellen. Die Daten der Datenquelle werden komplett heruntergeladen und indexiert. Die Originaldaten der Datenquelle werden gespeichert und dienen als Datenbasis für die Lieferung von Detaildaten.

Eine Anfrage an das iPlug generiert also KEINE Anfrage an die zugrunde liegende WFS Schnittstelle. Diese Vorgehensweise wurde insbesondere im Hinblick auf eine performante Abfrage des iPlugs gewählt.

Das iPlug fragt die WFS Schnittstelle regelmäßig (z.B. einmal täglich) ab. Die Abfrage-Frequenz kann über die Admin-Oberfläche gesteuert werden. 


<div class="mxgraph" style="position:relative;overflow:hidden;width:531px;height:447px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Vpdb6M6EP01eUwE2Hw9Nv3YrXSvVKkr7eOVAw6xFjByzDbdX7/jME4gzvYrodtb5SFkbIx9zszxjMmEXFabL4o1q39lzstJ4OWbCbmaBIFPCYUvY3nsLEkcdYZCiRw77Q334hdHo4fWVuR8PeiopSy1aIbGTNY1z/TAtpTl8BENK+zwe8N9xkrX+l3keoVWP0r3DV+5KFb4nCTAxaz1ox0j50vWlnq6NUGbaa6YHQtXtfG6n0GAIz+iwQ93j6oHc/olZTUwKL7eg4XrFTgvfMpCqpyrgakU9Y8+cOQayFNSwo3mqtpc8tIQaLmJlowmJMtoTH1K43TajXPz0u47RBWvcXKvHTKII+ZHUZSHjHlZPk26IX+yssXlOxysV6wxl2tRFyW/UEo+TMj8YSU0v29YZpoewF3BttJVCb98uCwU5/ULpotL+smV5tbNd1BCHHBZca0eDctdK4kQfAwBSnCIh56PeXFnW/Xci+B9DBkrdkPv8YILhOw4fMt4STwapinjLM7oFB22h973m3vT/65si0kQlfDs+ULBVWGuHGiVbOucm8ENZs9A2rSqgRtHwBTuHGLq48L6mBK09TG1XJyCqeOSyF0P1FsAaeOAB4szoPYQWmslf/BLWUoTp7Wsoed8KcrywMRKURhByABDE9JzA5UA5brAhkrkuXnMUUok9F6WJgiuVtAP3Nwye15WwhBjEVkJqctKiPHbJ4WOQYplv8dKxZoGJMGQkinR6PULHP6zc0Zj8ixnMfIzeiAR3P2eEvcCJKg5AYldrsAWdsjtUl6uNamr35E/C+Mk8iMSwnB+EB2RntCbpd7+k2AgnBXAwJWiP+6Ouczaaovfm3X8j/w97359STgALzymEAPsLAPndT6E6uNjZ1uHeYX9+deRJWEWZ0lCKKVeluV0F4p7YK83IIk1g7sOBbhLR26NZC4NpmdOSR5hqttscAwt3WVsT2UlNhU/t5gSbxHwiDCWsixN/ADz6j7qYt7ClncKfMp0nEtoF9osMsSHnHtPGuIYpK5r+zZpGB1H13tv6y+meg28S1lVbQ17uhYSaoc3JBPnTxIW22mOz5E3zBsg6h2O0iNFzTlyPYcinEqPojuptJGXU5x9AOFOOt4hB/OtHw+qmSNgjuLvmO28bBtsIYmyBXYuFKRVJhKg9JatmfkrId767hiFSTBM4XYleQ9gW5UPU7YR8MU4GeD7rHJYxEW1PcPqY2gV4x+24OWdXAukYCG1NodGjqRoaVjYjnSxbrpTM4M+jn210tqcrl2YJQY3WV6TmYCceSkgdNQsgzGDm5xpBl/GDlvKTSU2HFKYfGoNoW8QapQsFKsqrv4jV1M/SGYNlF/ji1OUHGzEnsu37dLn29rOyrdbh17klXjbdvG5as8oxRrI0nQkLMc6L3BoelXldKLsdWeNjvwpqbtMglzZjOfMgJPhRkNtSdzXwSNxMYoOfsRaPwzxvidqfXtEPzpAtqB7n4L0j/z8D2p5Fzo3af+Y0Nl3BLPY96LUTwKSpCmJD7xwFtLB56MU+g7s73qEcjrs8QwUkCQkonGcJjEdHl+nsz5eHo7+AVF3y59PkLHjfrwrL/9ixu67JdHXb9/u/kp5b1OHUd5UJge6EyEJz+Rj9i32K0CHn/vXztu23h8IyPVv</div></div>



## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-wfs/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-wfs/)

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
http://localhost:PORT/admin
{% endhighlight %}

Anstelle von `localhost` können Sie auch die IP-Adresse des Computers eingeben. Authentifizieren Sie sich als 'admin' mit dem von Ihnen vergebenen Passwort.


Nach der ersten Installation wird die Administrations-GUI unter

{% highlight text %}
http://localhost:8082/admin
{% endhighlight %}

aufgerufen und die Konfiguration vervollständigt.


## Aktualisierung

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-wfs/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-wfs/) herunterladen.

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



### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Falsche Datenbank Verbindungsparameter 
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs.

Sie müssen nach einer Änderung der Konfiguration das iPlug neu starten

