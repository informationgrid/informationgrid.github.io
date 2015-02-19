---
layout: default
title: iPlug CSW
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Das CSW-iPlug bietet eine Schnittstelle zu CSW (Catalog Service Web)-Datenquellen. Die CSW-Datenquelle muss [OGC CSW 2.0.2 AP ISO 1.0](http://www.opengeospatial.org/standards/cat) konform sein. Die Daten der Datenquelle werden komplett heruntergeladen und indexiert. Die Originaldaten der Datenquelle bleiben erhalten und dienen als Datenbasis für die Lieferung von Detaildaten (z.B. für die CSW Schnittstelle).

Eine Anfrage an das iPlug generiert also KEINE Anfrage an die zugrundeliegende CSW Schnittstelle. Diese Vorgehensweise wurde insbesondere im Hinblick auf eine performante Abfrage des iPlugs gewählt.

Das iPlug fragt die CSW Schnittstelle regelmäßig (z.B. einmal täglich) ab. Die Abfrage-Frequenz kann über die Admin-Oberfläche gesteuert werden. 


<div class="mxgraph" style="position:relative;overflow:hidden;width:531px;height:447px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Vpdb+I8E/01XIKS2Pm6LO12t9L7SJW60l4+MokJ1iZxZJy3dH/9jskYEsz2Y5s8RRUXhIkZO+fMHM8YZuS62n1VrNn8I3NezgIv383IzSwIfEoovBnLU2dJ4qgzFErkOOhoeBC/OBo9tLYi59vBQC1lqUUzNGayrnmmB7a1LIdTNKyw7o+Gh4yVrvWHyPUGrX6UHm9846LY4DxJgA+z1U/WR87XrC31fG+Ce+Z2xawvfKqd130MAvT8hAY/PExVD9b0S8pqYFB8ewQLn1fgunCWlVQ5VwNTKeqffeDIFyBPSQlfNFfV7pqXhkDLTbRmNCFZRmPqUxqn887P7WuHHxBVvMbFvdVlEEfMj6IoDxnzsnyedC7/z8oWH9/hYLthjbnciroo+ZVS8nFGlo8boflDwzJz6xHCFWwbXZXwyYfLQnFeo2+uNLch/IonOEIJecBlxbV6Mix3w0mE4GMKUII+H3sx5sWdbdMLL4LfY8hYcXB9xAsuELLz8K3jNfFomKaMszijcwzYHnrXDz/M+PuyLWZBVMLcy5WCq8JcOdAq2dY5N84NZi9A2rSqgS9OgCkMG2Lq44P1MSVo62NquXgPpk5IInc9UO8ApJ0DHgBgQO0htNVK/uTXspQmT2tZw8jlWpTliYmVojCCkAFgJqWXBk4BynWFNyqR52aas5RIGL0uTRLcbGAchLlldlxWwhBzEVkJqctKiPnbJ4VOQYplv8dKxZoGJMGQkinR6O0rAv6zc0Zj8iJnMfIzeSIR3P2eE/cCJKj5IxJYB7CVHY7LHFNrUle/I38RxknkRySEKf0gOiM9obdIveMrwUQYFcDAlaI/7o65zNpqD8qYOn6eUhfcviScgBeeU4gBdpaBcYMPobp87KyLYV1hP344siTM4ixJCKXUy7Kc2iqwB+yXHUhizeBbpwLclSN3RjLXBtORS5InWOq+GpxCSw8V23NViVWkscWUeKuAR4SxlGVp4gdYV/dRF8sWtrz3wKfMwKWE+0KbhwztJCPvSUMcg9QNbd8WDZPj6EbvXf3VdK+Bdy2rqq1hT9dCQu/wF8XE+EXCar/M6TnyhnUDZL3DUXqmqRmj1nMowqX0KLqXSht5eU+wDyA8SMd/UIP5No4H3cwZMCeJd6x2XrcNtlBo2QY7FwpKL5MJ0HrL1qz8jRDvY3eKxiQYlnCHlrwHsO3KhyXbBPhingzwfVE5LOKi2p9h9TG0ivE/tuLlvdwKpGAltTaHRo6kaGlY2Hu62jbdqZlBH33fbLQ2p2tX5hGD2yyvyUJAXb0WkDpqkYHP4DZnmsGbscOWcluJHYd6JZ9bQ+gbhBolC8Wqiqt/yc3cD5JFA+3X9OIUJScbsefybYf0+ba2Ufl2+9CrvBJ/t118rt4zSrEHsjSdScupzgscmt7UOb1T9rqzRkf+lNRdJUFubMUzMuBkuNFQ67Ovg2fyYhIdvMRePwzR9zO9vj2inxwg29B9WEN6nrIL7OVd6Nyi/TKhs78RLGLfi1I/CUiSpiQ+icJFSAevS2n0Hdg/+gjljbDHC1BAkpCIxnGaxHR4fJ0u+nh5mPYXiLrb/nyCih3340N7+YEVu++2RN++f7//kPbelg6T/FKZnOhOhCS8UI/ZX7HfADp8PP7svL/X+wMB+fIb</div></div>



## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-csw/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-csw/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-dsc-csw-VERSION-installer.jar
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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-csw/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-dsc-csw/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-dsc-csw BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-dsc-csw-NEW-VERSION-installer.jar
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

### iPlug spezifische Parameter

Die Konfiguration des iPlugs wird enthält einige CSW-DSC spezifische Parameter, die hier beschrieben werden:

**Service URL**

In der Administrationsoberfläche kann mit der Eigenschaft `ServiceUrl` die Service URL eines abzufragenden WFS Dienstes eingetragen werden.

Es handelt sich per Default hierbei um die URL zum SOAP Interface der Schnittstelle, da die Capabilities über SOAP abgefragt werden.


### Einschränkung der Ergebnisse

Im iPlug kann die Art der Abfragen definiert werden, die verwendet werden, um alle Daten der CSW Schnittstelle zu laden. Per Default wird keine spezifische Abfrage verwendet, so dass die CSW Schnittstelle ohne Constraint in der CSW Anfrage angefragt wird. Es ist aber möglich beliebige Filter für die Anfrage zu definieren, so dass hier der Umfang der CSW Daten gesteuert werden kann oder die Belastung der CSW Schnittstelle eingeschränkt werden kann.

Die Konfiguration wird in der Datei webapp/WEB-INF/spring.xml gehalten. Der folgende Ausschnitt zeigt, wie die Konfiguration festgelegt wird: 

{% highlight xml %}
<!--
  Define the CSW filter queries to query the CSW data source. Duplicates resulting from
  the queries will be detected based on the Identifier and be removed.
  
  To produce one CSW Query without a Constraint element, please remove any <value> elements.
  Many systems support this to get all results from the CSW data source.
 -->
<bean id="cswHarvestFilter" class="org.springframework.beans.factory.config.SetFactoryBean">
  <property name="sourceSet">
    <set>
      <!-- 
      <value>
        <![CDATA[<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
        <ogc:PropertyIsLike escapeChar="\\" singleChar="?" wildCard="*">
        <ogc:PropertyName>Identifier</ogc:PropertyName>
        <ogc:Literal>00*</ogc:Literal>
        </ogc:PropertyIsLike>
        </ogc:Filter>]]>
      </value>
      -->
    </set>
  </property>
</bean>
{% endhighlight %}


### SOAP Header festlegen

In manchen Fällen muss mit den SOAP Anfragen ein SOAP Header mitgeliefert werden, z.B. um Authentifizierungs-Informationen an den abzufragenden Webservice abzugeben.

Dafür muss in der SOAP Request Implementierung eine Pre-Processor Implementierung konfiguriert werden (spring.xml):

{% highlight xml %}
<bean id="soapRequest" class="de.ingrid.iplug.csw.dsc.cswclient.impl.SoapRequest">
<!--
  GeoPortal.WSV specific! This pre processor retrieves a SAML Ticket and adds a SOAP header.  

  <property name="preProcessor" ref="samlTicketSoapRequestPreprocessor" /> 
-->
</bean>
{% endhighlight %}

Mit der zugehörigen Implementierung ist es nun möglich einen entsprechenden SOAP Header als Template anzugeben. Die momentan realisierte Implementierung ermöglicht die Definition eines SOAP Header Templates und eines SAML Ticket Providers, der ein entsprechendes Ticket von einem per URL erreichbaren Authentifizierungsdienstes bezieht. Innerhalb des Templates wird der String `${SAML_TICKET}` durch das bezogenen Ticket ersetzt.

Das SAML Ticket wird für eine bestimmte Dauer gecached, damit ein Verfall des Tickets während des Harvesting verhindert wird. Außerdem wird der Authentifizierungsdienst dadurch entlastet.

{% highlight xml %}
<!-- 
  This pre-processor retrieves a SAML ticket via a provider and adds a SOAP header to every Axis service client.
  
  It is used for the Geoportal.WSV Installation but could be used elsewhere.
-->
<bean id="samlTicketSoapRequestPreprocessor" class="de.ingrid.iplug.csw.dsc.cswclient.impl.SamlTicketSoapRequestPreprocessor">
  <property name="soapHeaderTemplate">
    <value><![CDATA[
	  <tcExt:tcSecurity soapenv:role="http://www.conterra.de/service.csw#component::terraCatalog#catalog" soapenv:mustUnderstand="false" xmlns:tcExt="http://www.conterra.de/catalog/ext" xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope">
        <tcExt:tcSecuredAction>
          <tcExt:action>service.csw::discovery.read</tcExt:action>
        </tcExt:tcSecuredAction>
        <tcExt:samlTicket>${SAML_TICKET}</tcExt:samlTicket>
      </tcExt:tcSecurity>]]>
	</value>
  </property>
  <property name="samlTicketProvider" ref="samlTicketProvider" />
</bean>

<!-- 
  This is a SAML Ticket provider that queries an URL for a SAML Ticket.
  
  The configuration is Geoportal.WSV specific!!!
 -->
<bean id="samlTicketProvider" class="de.ingrid.iplug.csw.dsc.cswclient.impl.SamlTicketProvider">
  <property name="samlTicketRequestUrl" value="http://geokat.wsv.bvbs.bund.de/administration/WAS?VERSION=1.1&amp;REQUEST=GetSAMLResponse&amp;CREDENTIALS=ADD_CRDENTIALS_HERE&amp;METHOD=urn:opengeospatial:authNMethod:OWS:1.0:password" />
  <property name="cacheForSeconds" value="30" />
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

