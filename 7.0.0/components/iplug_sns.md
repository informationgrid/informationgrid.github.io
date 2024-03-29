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

* 256 MB RAM
* 500 MB Harddrive

* JAVA 17
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-iplug-sns/](https://distributions.informationgrid.eu/ingrid-iplug-sns/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

```sh
java -jar ingrid-iplug-sns-VERSION-installer.jar
```

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun das iPlug mit

```sh
sh start.sh start
```

starten.

Das iPlug besitzt eine Administrationsoberfläche über die die Eigenschaften des iPlugs eingesehen und verwaltet werden können. Geben Sie als `PORT` den bei der Installation angegebenen Port für die Administration an.

{% highlight text %}
http://localhost:PORT
{% endhighlight %}

Anstelle von `localhost` können Sie auch die IP-Adresse des Computers eingeben. Authentifizieren Sie sich als 'admin' mit dem von Ihnen vergebenen Passwort.



Nach der ersten Installation wird die Administrations-GUI unter

{% highlight text %}
http://localhost:8082/step1/
{% endhighlight %}

aufgerufen und die Konfiguration vervollständigt. Nach der Konfiguration beenden Sie die Administrationsoberfläche mit `CTRL-C`. Sie können nun das iPlug mit

```sh
sh start.sh start
```

starten.


## Aktualisierung

Neues Release von [https://distributions.informationgrid.eu/ingrid-iplug-sns/](https://distributions.informationgrid.eu/ingrid-iplug-sns/) herunterladen.

iPlug stoppen.

```sh
sh start.sh stop
```

Aktuelles Installationsverzeichnis sichern:

```sh
cp -r /opt/ingrid/ingrid-iplug-sns BACKUP_DIRECTORY
```


Die Aktualisierung erfolgt über den Installer.

```sh
java -jar ingrid-iplug-sns-NEW-VERSION-installer.jar
```

Während der Installation bitte "Update" auswählen und das vorhandene Installationsverzeichnis angeben.

iPlug starten.

```sh
sh start.sh start
```

## Betrieb

```sh
start.sh [start|stop|restart|status]
```

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.


## Konfiguration


### InGrid Communication


Die Datei `conf/communication.xml` enthält die Konfigurationen der InGrid Kommunikationsschicht.

```xml
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
```

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

### Service Provider

In der Datei `conf/spring/external-services.xml` können die verschiedenen Service Provider für **Thesaurus**, **Gazetteer**, **Chronik** und **Klassifizierung** eingestellt werden.

Als **Thesaurus** stehen im Moment *SNS (UMTHES)* oder *GEMET* zur Verfügung.<br>
Als **Gazetteer** *SNS* oder ein *WFS vom geodatenzentrum*.<br>
Für die Ermittlung von zeitlichen Ereignissen (**Chronik**) und der **Klassifizierung** von Texten/Web-Seiten steht nur der *SNS* zur Verfügung.

In der Datei müssen die entsprechenden Zeilen für die einzelnen Services aktiviert/kommentiert werden.

```xml

    <!-- Gazetteer from SNS -->
	<!-- <bean id="gazetteerService" class="de.ingrid.external.sns.SNSService" /> -->
    <!-- Gazetteer from WFS -->
	<bean id="gazetteerService" class="de.ingrid.external.wfs.WFSService" />

    <!-- UMTHES Thesaurus from SNS -->
	<bean id="thesaurusService" class="de.ingrid.external.sns.SNSService" />
	<!-- GEMET Thesaurus -->
    <!-- <bean id="thesaurusService" class="de.ingrid.external.gemet.GEMETService" /> -->

	<bean id="fullClassifyService" class="de.ingrid.external.sns.SNSService" />
    <bean id="chronicleService" class="de.ingrid.external.sns.SNSService" />
```

#### Konfiguration SNS Service Provider

In der Datei sns.properties können die Einstellung für den SNS vorgenommen werden, wenn dieser Service Provider ausgewählt wurde.

| Eigenschaft                               | Standard Wert                                      | Kommentar |
|-------------------------------------------|----------------------------------------------------| ------|
| sns.serviceURL.thesaurus | http://sns.uba.de/umthes  | Thesaurus-URL |
| sns.serviceURL.chronicle   | http://sns.uba.de/chronik  | Chronik-URL |
| sns.serviceURL.gazetteer | http://sns.uba.de/gazetteer  | Gazetteer-URL |
| sns.language                  | de | Sprache |
| sns.timeout                   | 30000 | Timeout bei Anfragen in Millisekunden |

#### Konfiguration GEMET Thesaurus Service Provider

In der Datei gemet.properties können die Einstellung für den GEMET Service vorgenommen werden, wenn dieser Service Provider ausgewählt wurde.

| Eigenschaft                               | Standard Wert                                             | Kommentar |
|-------------------------------------------|----------------------------------------------------| ----------|
| service.url | http://www.eionet.europa.eu/gemet  | URL des GEMET Service |
| service.analyzeMaxWords | 100  | Wie viele Wörter sollen bei der Suche nach Deskriptoren analysiert werden ?<br> z.B. wenn aus der Beschreibung eines Metadatensatzes Deskriptoren extrahiert werden. |
| service.ignorePassedMatchingType | false | Bei der Eingabe von Stichwörtern, wie sollen Deskriptoren gefunden werden ?<br> *true*=Es wird immer nach Deskriptoren gesucht, die die Stichwörter **enthalten**, d.h. ein maximales Ergebnis<br>*false*=Die Art der Suche wird vom Aufrufer bestimmt, also z.B. Stichwort **enthalten**, **am Anfang** oder **Exakt**<br><br>Sollte auf **false** gesetzt werden, damit der Aufrufer immer abhängig vom Kontext korrekt nach Deskriptoren sucht ! Nur zu Testzwecken zu ändern !|
| service.request.rdf                  | false | Manche Anfragen an den Service können auch mit RDF Antwort (*true*) ausgeführt werden, der Standard ist jedoch JSON (*false*) ?<br><br>Sollte auf **false** gesetzt werden, nur zu Testzwecken zu ändern ! |
| service.alternateLanguage                  | | Wird vom Service ein **einzelner(!)** Deskriptor angefragt (getTerm), so kann der Deskriptor-Name in einer zweiten Sprache geliefert werden. Wird hier z.B. "en" eingetragen, so wird der Deskriptor zusätzlich auch in Englisch geliefert und kann im Katalog abgelegt werden. Beim Mapping nach ISO XML wird das Schlagwort dann auch zusätzlich in Englisch lokalisiert.<br>Wird hier nichts eingetragen, so wird der Deskriptor nur in der Basissprache geholt und ohne zusätzliche Lokalisierung nach ISO abgebildet (Default).<br><br>Kann im IGE Frontend auf "**en**" (damit englische Lokalisierung des Deskriptors nach ISO abgebildet werden kann) und im SNS-iPlug auf "" gesetzt werden (keine englische Lokalisierung nötig für "Ähnliche Begriffe"). |


#### Konfiguration WFS Gazetteer Service Provider

Die Konfiguration liegt per Default in der Library ingrid-external-service-wfs (siehe https://github.com/informationgrid/ingrid-external-service-wfs/blob/master/src/main/resources/wfs.properties). Die Konfigurationsdatei kann aber im ./conf Verzeichnis erzeugt werden und überschreibt dann die interne Konfiguration.

Beispiel:

wfs.properties

```text
url=http://sg.geodatenzentrum.de/wfs_gnde
properties=gn:nnid,gn:beschreibung,gn:ags,gn:box,gn:hatEndonym/gn:Endonym/gn:name,gn:hatEndonym/gn:Endonym/gn:hatSprache/gn:Sprache/gn:sprache,gn:hatObjektart/gn:Objektart/gn:schluessel,gn:hatObjektart/gn:Objektart/gn:objektart
objectTypes=AX_Gemeinde,AX_Bundesland,AX_Regierungsbezirk,AX_KreisRegion,AX_Nationalstaat,AX_Landschaft,AX_StehendesGewaesser,AX_Meer,AX_Insel,AX_SchutzgebietNachNaturUmweltOderBodenschutzrecht

# every objectType must be defined here for correct translation
gazetteer.de.44006=Stehendes Gewässer
gazetteer.de.44007=Meer
gazetteer.de.71007=Schutzgebiet
gazetteer.de.73001=Nationalstaat
gazetteer.de.73002=Bundesland
gazetteer.de.73004=Kreis
gazetteer.de.73005=Gemeinde
gazetteer.de.74001=Landschaft
gazetteer.de.74004=Insel

# keys to map id to localization in portal and IGE
map.id.key.44006=lakeType
map.id.key.44007=seaType
map.id.key.71007=protectedAreaType
map.id.key.73001=nationType
map.id.key.73002=use2Type
map.id.key.73004=use4Type
map.id.key.73005=use6Type
map.id.key.74001=landscapeType
map.id.key.74004=islandType
```



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

Mit der Umstellung des SNS-Dienstes nach HTTPS wird ein zusätzliches Zertifikat in Java benötigt, um die Anfragen absetzen zu können. Ab der Version 3.6.2 sollten die URLs zu den Diensten in der Datei "sns.properties" bereits mit "https" beginnen. Dies betrifft die Schlüssel "sns.serviceURL.\[chronicle\|thesaurus\|gazetteer\]". Bei vorherigen Versionen muss dies manuell umgestellt werden.

Wird ein Java 8 Update kleiner als Version 101 verwendet, muss zusätzlich noch ein Zertifikat hinzugefügt werden. Hierbei muss das Zertifikat "Let’s Encrypt Authority X3" von https://letsencrypt.org/certificates/ heruntergeladen werden. Dies kann folgendermaßen geschehen:

`wget https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem`

Dieses Zertifikat wird dann mittels des keytool-Kommandos in Java importiert. Hierbei ist es wichtig, dass man die Javaversion aktualisiert, die auch zum Starten der Komponente verwendet wird.

`sudo <path-to-jdk>/jre/bin/keytool -trustcacerts -keystore <path-to-jdk>/jre/lib/security/cacerts -importcert -file lets-encrypt-x3-cross-signed.pem`

Hierbei wird der aktuelle "keystore" mit dem neuen Zertifikat aktualisiert. Wenn der keystore noch nicht existiert, so wird zusätzlich nach einem neuen Passwort nachgefragt. Falls der keystore schon existiert, so wird stattdessen nach dem dazugehörigen Passwort gefragt. Dieses ist standardmäßig "**changeit**".

Nach einem Neustart des SNS-iPlugs, sollte der SNS wieder Ergebnisse liefern.
