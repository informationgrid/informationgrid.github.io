---
layout: default
title: CSW Schnittstelle
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Die CSW-Schnittstelle bietet Zugang zur InGrid-Suche über die [OGC CSW 2.0.2 AP ISO 1.0](http://www.opengeospatial.org/standards/cat) Schnittstellenspezifikation. Die Komponente bezieht die grundlegenden Daten aus einer oder mehreren Datenquellen. Die Datenquellen werden regelmäßig indexiert. Es wird ein lokaler Index vorgehalten, so dass eine CSW-Anfrage nicht zur Abfrage von den Datenquellen führt. Dies sichert die hohe Performance der Schnittstelle und vermeidet Inkompatibilitäten zwischen der [OGC CSW 2.0.2 AP ISO 1.0](http://www.opengeospatial.org/standards/cat) eigenen Abfragesprache und der InGrid Query.

Die Schnittstelle bietet die Möglichkeit bestimmte Einschränkungen in der Anfrage vorzunehmen, um z.B. ausschließlich Anbieter-spezifische Daten auszuliefern. 

<div class="mxgraph" style="position:relative;overflow:hidden;width:736px;height:626px;margin:30px 0 30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Zrbbts4E4CfxpcRdD5cxmmSv9hut/jdotu9WdAiJROVRIGWm6RP36E8jKhDN2kjO05gw5aHNEl9MxzNjLTwLsrba0nqzZ+CsmLh2vR24b1ZuK7jez58KcndXhJH4V6QS06xUydY8e8MhTZKd5yyba9jI0TR8LovTEVVsbTpyTJR9KeoSa6H7wSrlBRj6WdOmw1KnTDpGv7HeL7BeWIXT2bb3OkxKMvIrmjOWhG0qeaS6LHwrG7t/U/P9/aCOxQ4IQpqUvXW9F2IsieQbNvBwvPluC6cZS0kZbInYlT32TSNQni+cK/gTSX/xiwqyY3FRSvyru2lba++/JFdbuN3nz9e/+P+v3jvf/n4npBPn/ajFbz6aqrBuwRTkELAFOqovL1ghTIHrekwI37spakf+Y7vR8nZflVXj+1+rx/JKjyNXxwyizLP9oMkIYxEqY+97W+k2CFLvtxtR0qVYldRpsZwFt7yZsMbtqpJqlpvwO5BtmnKApul6rgU0M4bZfWBnoTJhumN8Ygz6ZDC7mKiZI28U7aDphOjceHG8iP8fWNYboj2uTGMNsTlENRcfj90xw0OEN3jMOI0BsaL1WcQvK0aJjMF6klE652s4Y8HoYg0kKLn45gGRU9vnrkphm4UEtBRSANC7JSeebj5DY4jcDmQq3+KAt0gWevuuMwnIErsPqLARZduIAodK4jiELxXAFM67pTdBbaV2MYLV/wUgH5i03WY0iyJo9hdhxPbeeGGBSxguZZwlKujWUzxCPs7CHrYQ3u8vxMUzW2YI654Oq+Bqz/wm8/KFed5FfYaDuzVeUauYz/KPxS7HERvVjDaEPHb6lpFo659QRpSCOj3UpUQDZSgLyDPoQS8TLwKp6GhnYJxo4onjLsNul4o4kD74VMw3XFaxyhkivhTyGYjclGR4rKTLjuskMuZCNktb/5GsTr+oo4tN1A/K1jpfZv6YTSOiatF/CJvOAmxk61y/+MC1BCZMxxnus9Yb5IVpIGssbegeaOOcdjRJhQVLHWkn6KAkoDSw3ZDaiVMC7FTidgDBn4Qd+FhwQBt2QnHIbNr40XKNGbHRsubl+PP0rPzDypHW/0Fn44FNgbpQ1mDUlX2AON1yduDPgXgKbnBlRQ8VyWMFCCqIsRSIeZQaznHhpJT2m6cKQUJ6J0V4gYkG+jH4A/LOzhNJTm8t7dRXag+N8JpzNRaa6qX4sRP117gBCmsNIvsNCVRNJnSDOBri6diB5o7l7KlRLmETJALxRp8gFr4Q3uhBxb0raY8gqsPppJuFPUzyPnxTmU2Lxyvl6BpngDeRxQ0NN4tr/IO70M1NtGAn2rhnyWHhOlreLrMpisqBkwfvb0J0ztEWILzGDTfCfCoIJrKaShQ+B3PvW2k+MouRCFU7bgSlXLSGS+KgWh+D38IBYa6XKUVqIv5ZvkK/bapQP8Au2EqI3ru8t6Ij77zYvAJJgx8Dm8xKoA+AlDnjdNd2Z70Q74il6y1Lrxf8riQYVJ1Y4gmpEENFNO0vk3NXgIdIZwImmdjOCM4fa2yIoikEieGSnyS+ENbtALfeIXj69ipQJ8q5J0s9MjyXceLvdCPIri06Fu0CD2xTFq2Lus9O/ThOY7LIF0ZT5TlroJLURsinEb20gYoR6gA+kN3PtZfEh3ncjdOOw8U/GFmeIhUZeCR4G7Y0cK/IU4MUn6tnqoB87J99sHEqE36HVmz4oPYcmS6Fk2jHjYY2XwjlCLakc639f5pC4Ufx37Tf6QgpZVncYhYMg6hqLSgtqAeNIAKO3wpOdxmvyr5LYP7nvRMCwLlSq9qKXJJypLJf0HHjhtbdZUfYfdEIW4NfTtYj2moW98xNtWtZXOqexzsn9OS/547e10hfRT373J48URgcKSQXkfLRykg6Eh2UEgw/KF2TzMD13nG/VMS49q89nhPzBHgZ/cAUdtmPFjmXf4A</div></div>


Die Entwicklung der Schnittstelle wurde mit der OGC CSW 2.0.2 AP ISO 1.0 [Testsuite der GDI-DE](http://testsuite.gdi-de.org/gdi/) getestet.

Die Schnittstelle bildet Daten aus dem InGrid Catalog Datenraum wie folgt ab:

| InGrid Catalog Typ | ISO hierarchyLevel | ISO "hierarchyLevelName"
| == | == | == |
| Geodatendienst | service | service |
| Geo-Information/Karte | dataset |  |
| Dienst/Anwendung/Informationssystem | application | application |
| Dokument/Bericht/Literatur | nonGeographicDataset | document |
| Vorhaben/Projekt/Programm | nonGeographicDataset | project |
| Datensammlung/Datenbank | nonGeographicDataset | database |
| Organisationseinheit/Fachaufgabe | nonGeographicDataset | job |


## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-csw/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-csw/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-interface-csw-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten. 

Die Komponente besitzt eine Administrationsoberfläche.

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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-csw/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-interface-csw/) herunterladen.

Komponente stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-interface-csw BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-interface-csw-NEW-VERSION-installer.jar
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

## Konfiguration

Die CSW Schnittstelle lässt sich über eine Admin-GUI administrieren. Hier lassen sich Datenquellen hinzufügen und entfernen, das Scheduling für den Harvesting-Prozess definieren und eine Test-Suche ausführen.

### Manage Harvester

Unter diesem Punkt können die Datenquellen der CSW Schnittstelle verwaltet werden. Je nach Harvester-Typ ist die Oberfläche unterschiedlich:

**InGrid iBus harvester**

Mit dem InGrid iBus harvester, können iPlugs aus eine InGrid System in der CSW Schnittstelle indexiert werden. Die iPlugs müssen das IDF Format unterstützen und im IDF Format ISO Daten liefern.

Ablauf:

- Mit der Angabe der Kommunikations-Daten für den iBus werden alle iPlugs, die am iBus abgeschlossen sind gelistet 
- ein oder mehrere iPlugs können aktiviert werden
- Bestimmte Eigenschaften, wie die abzusetzende InGrid?-Query und Abfrage-Paraneter können in der Detailansicht des iPlugs editiert werden 

**GDI-DE test data harvester**

Dieser Harvester dient ausschließlich zu Testzwecken. Testdaten werden indexiert, die für den Test gegen die GDI-DE Testsuite erforderlich sind. Der Harvester sollte im LIVE Betrieb nicht aktiviert werden.

### Control Scheduler

Unter diesem Punkt kann festgelegt werden, wann und mit welcher Regelmäßigkeit das Harvesting durchgeführt werden soll. Die Bedienung entspricht dem im InGrid-System verwendeten Scheduling-Konzept. Siehe auch unter Scheduling.

### Manually issue harvesting

Hier kann der Harvesting-Prozess manuell angestoßen werden.

### Test-Search

Die Test-Suche erlaubt die Suche im Datenbestand. Als Suchbegriff wird ein Einzelnes Wort (mit `*` als Wildcard), oder ein kompletter GetRecords-Request (XML Format) akzeptiert.

Es werden jeweils nur die ersten 10 Treffer angezeigt. Ein Klick auf ein Suchergebnis öffnet die ISO Daten des Datensatzes. 


## FAQ

### Die Schnittstelle liefert keine Ergebnisse.

Folgende Fehlerquellen können vorliegen:

- Falsche CSW Querysyntax 

Bitte überprüfen Sie zunächst das log file.

### Wie kann eine CSW Schnittstelle getestet werden?

Zum Testen eignen sich Tools wie SoapUI oder das Firefox-Plugin Poster:

Weblinks:

- SoapUI: [http://www.soapui.org/](http://www.soapui.org/)
- Poster: [https://addons.mozilla.org/en-US/firefox/addon/2691/](https://addons.mozilla.org/en-US/firefox/addon/2691/)
 

**GetCapabilities, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?REQUEST=GetCapabilities&SERVICE=CSW
{% endhighlight %}

**GetCapabilities, SOAP**

Der Endpoint für den SOAP Request ergibt sich aus der Capabilities Antwort.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<GetCapabilities xmlns="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2" outputSchema="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" />
{% endhighlight %}

**GetRecords, SOAP**

Der Endpoint für den SOAP Request ergibt sich aus der Capabilities Antwort.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<GetRecords  xmlns="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:apiso="http://www.opengis.net/cat/csw/apiso/1.0" xmlns:ows="http://www.opengis.net/ows" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/"  xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2" resultType="results" outputFormat="application/xml" outputSchema="http://www.isotc211.org/2005/gmd" startPosition="1" maxRecords="10">
  <Query typeNames="gmd:MD_Metadata,csw:service">
    <ElementSetName typeNames="">full</ElementSetName>
    <Constraint version="1.1.0">
       <ogc:Filter>
          <ogc:PropertyIsLike escapeChar="\" singleChar="?" wildCard="*">
             <ogc:PropertyName>AnyText</ogc:PropertyName>
             <ogc:Literal>wasser</ogc:Literal>
          </ogc:PropertyIsLike>
       </ogc:Filter>
    </Constraint>
  </Query>
</GetRecords>
{% endhighlight %}


**GetRecordById, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?SERVICE=CSW&REQUEST=GetRecordById&VERSION=2.0.2&ID=98E56BC3-20EC-43A7-8270-1352F0A53AD4
{% endhighlight %}

**GetRecordById, SOAP**

Der Endpoint für den SOAP Request ergibt sich aus der Capabilities Antwort.

{% highlight xml %}
<GetRecordById xmlns="http://www.opengis.net/cat/csw/2.0.2" 
service="CSW" version="2.0.2" 
outputSchema="http://www.opengis.net/cat/csw/2.0.2" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" >
   <Id>98E56BC3-20EC-43A7-8270-1352F0A53AD4</Id>
   <ElementSetName>full</ElementSetName>
</GetRecordById>
{% endhighlight %}

**DescribeRecord, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?SERVICE=CSW&REQUEST=DescribeRecord&VERSION=2.0.2
{% endhighlight %}

 
**DescribeRecord, SOAP**

Der Endpoint für den SOAP Request ergibt sich aus der Capabilities Antwort.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<DescribeRecord xmlns="http://www.opengis.net/cat/csw/2.0.2" 
xmlns:gmd="http://www.isotc211.org/2005/gmd" 
schemaLanguage="http://www.w3.org/XML/Schema" 
service="CSW" version="2.0.2">
</DescribeRecord>
{% endhighlight %}


### Die Queryeinschränkungen PropertyEqualsTo und PropertyIsLike angewendet auf den Titel liefern gleiche Ergebnismengen, bzw. Suche nach exakten Titel ist nicht möglich.

Die Anfrage wird umgesetzt in eine "title:" Lucene Query (z.B. "title:wasser"), die tatsächlich alle Titel zurück gibt, die den Literal enthalten.

Eine Query auf exakte Übereinstimmung ist im Feld title nicht zu formulieren, weil das Feld im Index tokenized vorliegt. Das macht auch Sinn, damit Teile des Titels durch Anfragen gefunden werden. Dies ist der Grund, dass `PropertyEquals` und `PropertyIsLike` in diesem Fall gleiche Ergebnismengen zurückliefern.

Der Unterschied zwischen `PropertyEqualsTo` zu `PropertyIsLike` wird bei `title:*` klar. In diesem Fall werden auch zusammengesetzte Worte im Titel, die mit dem Literal beginnen gefunden.

### Partner-spezifische Auslieferung von Capabilities Dokumenten.

Über einen Query-Parameter `partner` kann die partner-spezifische Auslieferung von Capability Dokumenten gesteuert werden. Für jeden Partner muss dazu ein File im `conf` Verzeichnis mit entsprechender Kennung erzeugt werden:

{% highlight text %}
INSTALL_DIRECTORY/conf/csw_capabilities_<partner>.xml
{% endhighlight %}

Bsp:

{% highlight text %}
conf/csw_capabilities_test.xml
{% endhighlight %}

kann über die URL

{% highlight text %}
http://dev.informationgrid.eu/csw?REQUEST=GetCapabilities&SERVICE=CSW&partner=test 
{% endhighlight %}

abgerufen werden. Existiert keine Datei mit entsprechender Erweiterung, wird die Standard-Capabilities `conf/csw_capabilities.xml` ausgeliefert

### Einschränkung der Ergebnismenge auf Partner, Anbieter oder iPlug.

Die Einschränkung auf Partner, Anbieter oder iPlug in der CSW Schnittstelle kann über die CSW Service URL vorgenommen werden.

Dazu wird der Service URL per GET Parameter die entsprechende Einschränkung mitgegeben.

z.B. liefert

{% highlight text %}
http://dev.informationgrid.eu/csw202?partner=ni
{% endhighlight %}

ausschließlich Ergebnisse des Partners "ni" zurück. Weitere gültige Parameter sind

- `provider` Filterung nach einem bestimmten Anbieter(kürzel)
- `iplug`  Filterung nach einer bestimmten iPlug-ID

Bei entsprechender Konfiguration eines vorgeschalteten Web-Servers (URL-rewrite) kann die Einschränkung auch in den Pfad integriert werden. Die Service-URL könnte dann auch so aussehen:

{% highlight text %}
http://dev.informationgrid.eu/csw/partner/bund
{% endhighlight %}

Konfigurationsbeispiel Apache Konfiguration:

{% highlight text %}
RewriteEngine on
# Die folgende Regel schreibt die Anfragen an csw um und leitet sie wie
# einen Proxy-Request an 8083:csw weiter:

RewriteRule ^/csw/partner/(.*)$ http://127.0.0.1:8083/csw?partner\=$1 [P]
RewriteRule ^/csw/provider/(.*)$ http://127.0.0.1:8083/csw?provider\=$1 [P]
{% endhighlight %}

Die Einschränkungen können auch direkt in der CSW Anfrage formuliert werden. Intern ist es tatsächlich so, dass die Einschränkungen in der URL in eine Einschränkung innerhalb der Filter-Query der CSW Anfrage umgesetzt werden.
 