---
layout: default
title: CSW Schnittstelle
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Die CSW-Schnittstelle bietet Zugang zur InGrid-Suche über die [OGC CSW 2.0.2 AP ISO 1.0](http://www.opengeospatial.org/standards/cat) Schnittstellenspezifikation. Die Komponente bezieht die grundlegenden Daten aus einer oder mehreren Datenquellen. Die Datenquellen werden regelmäßig indexiert. Es wird ein lokaler Index vorgehalten, so dass eine CSW-Anfrage nicht zur Abfrage von den Datenquellen führt. Dies sichert die hohe Performance der Schnittstelle und vermeidet Inkompatibilitäten zwischen der [OGC CSW 2.0.2 AP ISO 1.0](http://www.opengeospatial.org/standards/cat) eigenen Abfragesprache und der InGrid Query.

Die Schnittstelle bietet die Möglichkeit bestimmte Einschränkungen in der Anfrage vorzunehmen, um z.B. ausschließlich Anbieter-spezifische Daten auszuliefern.

![InGrid Komponente CSW Schnittstelle](../images/ingrid_interface_csw.png "InGrid Komponente CSW Schnittstelle")

<figcaption class="figcaption">InGrid Komponente CSW Schnittstelle</figcaption>


Die Entwicklung der Schnittstelle wurde mit der OGC CSW 2.0.2 AP ISO 1.0 [Testsuite der GDI-DE](https://testsuite.gdi-de.org) getestet.

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

* 256 MB RAM
* 500 MB Harddrive

* JAVA 17
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-interface-csw/](https://distributions.informationgrid.eu/ingrid-interface-csw/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

```sh
java -jar ingrid-interface-csw-VERSION-installer.jar
```

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

```sh
sh start.sh start
```

starten.

Die Komponente besitzt eine Administrationsoberfläche.

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

Neues Release von [https://distributions.informationgrid.eu/ingrid-interface-csw/](https://distributions.informationgrid.eu/ingrid-interface-csw/) herunterladen.

Komponente stoppen.

```sh
sh start.sh stop
```

Aktuelles Installationsverzeichnis sichern:

```sh
cp -r /opt/ingrid/ingrid-interface-csw BACKUP_DIRECTORY
```


Die Aktualisierung erfolgt über den Installer.

```sh
java -jar ingrid-interface-csw-NEW-VERSION-installer.jar
```

Während der Installation bitte "Upgrade" auswählen und das Installationsverzeichnis Verzeichnis angeben.

Komponente starten.

```sh
sh start.sh start
```

## Betrieb

```sh
start.sh [start|stop|restart|status]
```

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.

Der Zugang zur allgemeinen CSW-Schnittstelle ist über der folgenden URL erreichbar:

{% highlight text %}
http://<csw-admin-url>/csw
{% endhighlight %}

Für die CSW-T-Schnittstelle, die zusätzlich abgesichert ist (siehe weiter unten), wird hingegen folgende URL benötigt:

{% highlight text %}
http://<csw-admin-url>/csw-t
{% endhighlight %}

## Konfiguration

Die CSW Schnittstelle lässt sich über eine Admin-GUI administrieren, die über den im Installer gesetzten Port erreichbar ist. Hier lassen sich Datenquellen hinzufügen und entfernen, das Scheduling für den Harvesting-Prozess definieren und eine Test-Suche ausführen.

### CSW-T Schnittstelle

Die CSW-T Schnittstelle ermöglicht das Ausführen von Operationen auf einem IGE-iPlug, um Datensätze zu erstellen, zu ändern oder auch zu löschen. Dadurch lassen sich die Datensätze auch ohne den InGrid-Editor verwalten. Jede abgesetzte Transaktion wird entweder komplett oder bei einem Fehler, gar nicht ausgeführt.

#### Login für CSW-T Schnittstelle

Die CSW-T Schnittstelle wird mittels einer "Basic Authentication" für den unbefugten Zugriff abgesichert. Bevor diese verwendet werden kann, müssen die Benutzer erstellt werden, die darauf Zugriff haben sollen. Da die CSW-Schnittstelle unabhängig vom IGE-iPlug läuft, wird hier ein separater Zugang benötigt.

In der Datei `config.override.properties`, werden die Benutzer über die Eigenschaft `cswt.users` konfiguriert. Hier werden die Benutzer und Passwortinformationen kommasepariert angegeben. Dies geschieht nach dem folgenden Format:

```
cswt.users=<user1>::<bcrypt-passwordUser1>,<user2>::<bcrypt-passwordUser2>,...
```

Hierbei muss das Passwort im bcrypt-Format vorliegen. Dieses kann über das Start-Skript generiert werden, so dass es dann in die Konfiguration eingetragen werden kann. Das Kommando dafür lautet:

```
sh start.sh calcPassword <clear-text-password>
```

Nachdem diese Datei verändert wurde, muss die CSW-Schnittstelle neu gestartet werden.

#### CSW-T Communication

Hier wird die Kommunikation zum iBus definiert, an dem sich die anzusprechenden IGE-iPlugs befinden.

| Feld                           | Beschreibung                                             |
|--------------------------------|----------------------------------------------------------|
| Client Proxy ID                | Eindeutige ID des iPlugs  |
| iBus IP	                     | IP Adresse unter der der iBus erreichbar ist  |
| iBus port                      | Port der vom iBus verwendet wird  |
| iBus proxy id                  | Eindeutige ID des iBus  |

Mit dem Klick auf "Save Communication" werden die Einstellungen gespeichert und die CSW-T-Schnittstelle kann verwendet werden, insofern ein Benutzerlogin hierfür erstellt wurde.

#### Verwendung

Um eine CSW-T Anfrage zu stellen, müssen folgende URL-Parameter verwendet werden:

| Parameter     | WERT           | Kommentar                                             |
|---------------|----------------|----------------------------------------------------------|
| SERVICE       | CSW            | Dieser Wert ist unveränderbar.  |
| REQUEST       | Transaction    | Dieser Wert ist unveränderbar.  |
| catalog       | (ige-iplug-id) | Hier wird die ClientID des IGE-iPlugs angegeben, auf dem die Transaktion angewendet werden soll.  |

Eine Beispielanfrage sieht demnach folgendermaßen aus:
> http://(cswt-interface-address)?SERVICE=CSW&REQUEST=Transaction&catalog=/ingrid-group:ige-test

Für den zu übertragenden Inhalt wird im Body der Datensatz im XML-Format hinterlegt. Innerhalb einer Transaktion werden eine beliebige Anzahl von Aktionen unterstützt, die vom Typ: **INSERT**, **UPDATE** und **DELETE** sein müssen.

| Aktion                | Beschreibung                                             |
|-----------------------|----------------------------------------------------------|
| INSERT                | Fügt einen neuen Datensatz ein. Ist ein Datensatz bereits vorhanden, so wird ein Fehler zurückgegeben.  |
| UPDATE	            | Aktualisiert einen bestehenden Datensatz. Falls ein Datensatz nicht existiert, so wird ein Fehler zurückgegeben.  |
| DELETE                | Löscht einen vorhandenen Datensatz. Ist dieser Datensatz nicht vorhanden, so wird ein Fehler zurückgegeben. |

Es können mehrere Aktionen innerhalb einer Transaktion ausgeführt werden. Bei einer erfolgreichen Transaktion wird eine Zusammenfassung der ausgeführten Operationen ausgegeben.

Ein Auszug aus einer INSERT-Aktion sieht folgendermaßen aus:

```xml
<csw:Transaction service="CSW" version="2.0.2" xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-publication.xsd">
    <csw:Insert>
        <gmd:MD_Metadata xmlns:srv="http://www.isotc211.org/2005/srv" xmlns:gts="http://www.isotc211.org/2005/gts" xmlns:gml="http://www.opengis.net/gml" xmlns:gmd="http://www.isotc211.org/2005/gmd"
                         xmlns:gco="http://www.isotc211.org/2005/gco">
            <gmd:fileIdentifier>
                <gco:CharacterString>4915275a-733a-47cd-b1a6-1a3f1e976948</gco:CharacterString>
            </gmd:fileIdentifier>
            <gmd:language>
                <gmd:LanguageCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#LanguageCode"
                                  codeListValue="ger">ger</gmd:LanguageCode>
            </gmd:language>
            <gmd:parentIdentifier>
                <gco:CharacterString>A3E10CDE-45BF-4D95-BA60-0EDE6777XXXX</gco:CharacterString>
            </gmd:parentIdentifier>
            ...
        </gmd:MD_Metadata>
    </csw:Insert>
</csw:Transaction>
```

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

Unter diesem Punkt kann festgelegt werden, wann und mit welcher Regelmäßigkeit das Harvesting durchgeführt werden soll. Die Bedienung entspricht dem im InGrid-System verwendeten Scheduling-Konzept. Siehe auch unter [Scheduling](./iplug_admin_gui.html#scheduling).

### Manually issue harvesting

Hier kann der Harvesting-Prozess manuell angestoßen werden.

### Test-Search

Die Test-Suche erlaubt die Suche im Datenbestand. Als Suchbegriff wird ein Einzelnes Wort (mit `*` als Wildcard), oder ein kompletter GetRecords-Request (XML Format) akzeptiert.

Es werden jeweils nur die ersten 10 Treffer angezeigt. Ein Klick auf ein Suchergebnis öffnet die ISO Daten des Datensatzes.


## FAQ

### Wie kann ich ein Überschreiben der Datei `env.sh` bei einer Aktualisierung verhindern.

In der Datei env.sh können Systemvariablen komponenten-spezifisch angepasst werden (z.B. Proxy oder Heap Einstellungen). Um die Einstellungen nach einer Aktualisierung nicht zu verlieren, muss die Datei `env.sh` nach `user.env.sh` kopiert werden. Die Änderungen in `user.env.sh` werden nicht überschrieben.

### Die Schnittstelle liefert keine Ergebnisse.

Folgende Fehlerquellen können vorliegen:

- Falsche CSW Querysyntax

Bitte überprüfen Sie zunächst das log file.

### Wie können alle Dokumente angefragt werden?

Der Ablauf, um alle Dokumente aus der Schnittstelle zu erhalten, ist wie folgt. Mittels einer GetRecords-Anfrage (GET/POST), werden die ersten Dokumente (ungefiltert) angefragt. Danach verschiebt man mit Hilfe des **startPosition** Parameters den Cursor, um so die nachfolgenden Dokumente zu erhalten. Mit dem Parameter **maxRecords** gibt man an wieviele Dokumente mit einer Anfrage zurückgegeben werden sollen.

In der Antwort erhält man außerdem über den Parameter **numberOfRecordsMatched** die maximale Trefferanzahl, welche für das Ende einer Schleife verwendet werden kann. Dazu eignet sich aber auch der Parameter **numberOfRecordsReturned**, der ebenfalls in der Antwort enthalten ist. Ist dieser Wert kleiner als **maxRecords**, so wurden alle Dokumente geholt.


### Wie kann eine CSW Schnittstelle getestet werden?

Zum Testen eignen sich Tools wie SoapUI oder Postman oder das Firefox-Plugin Poster:

Weblinks:

- SoapUI: [http://www.soapui.org/](http://www.soapui.org/)
- Postman: [https://www.getpostman.com/](https://www.getpostman.com/)
- Poster: [https://addons.mozilla.org/en-US/firefox/addon/2691/](https://addons.mozilla.org/en-US/firefox/addon/2691/)

Requests sind per **GET** und **POST** möglich.
Bei POST kann als **XML**/**SOAP** angefragt werden. Bei SOAP muss zum XML noch der "SOAP Envelope" hinzugefügt werden.
Im folgenden Beispiele für die verschiedenen Varianten:

**GetCapabilities, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?REQUEST=GetCapabilities&SERVICE=CSW
{% endhighlight %}

**GetCapabilities, POST XML**

Der Endpoint für den XML Request ergibt sich aus der Capabilities Antwort. Als Content Type des Requests muss *application/xml* angegeben werden.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetCapabilities xmlns="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2" outputSchema="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" />
```

**GetCapabilities, POST SOAP**

Der Endpoint für den XML Request ergibt sich aus der Capabilities Antwort. Als Content Type des Requests muss *application/soap+xml* angegeben werden.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Body>
        <GetCapabilities xmlns="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2" outputSchema="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" />
    </soapenv:Body>
</soapenv:Envelope>
```

**GetRecords, GET**

Der Endpoint für den GET Request ergibt sich aus der Capabilities Antwort.

{% highlight text %}
https://dev.informationgrid.eu/csw?REQUEST=GetRecords&SERVICE=CSW&elementSetName=full&startPosition=1&maxRecords=10&resultType=results
{% endhighlight %}

Mit Constraints:

{% highlight text %}
http://metaver.de/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputFormat=application/xml&outputSchema=http://www.isotc211.org/2005/gmd&startPosition=1&maxRecords=1&typeNames=gmd:MD_Metadata&elementSetName=full&CONSTRAINTLANGUAGE=Filter&constraint_language_version=1.1.0&constraint=%3Cogc:Filter+xmlns%3Aogc%3D%22http%3A%2F%2Fwww.opengis.net%2Fogc%22%3E%3Cogc:PropertyIsEqualTo%3E%3Cogc:PropertyName%3Eapiso:ResourceIdentifier%3C/ogc:PropertyName%3E%3Cogc:Literal%3E7988c147-7523-45bb-8f18-7f39d0d20541%3C/ogc:Literal%3E%3C/ogc:PropertyIsEqualTo%3E%3C/ogc:Filter%3E
{% endhighlight %}

oder

{% highlight text %}
http://metaver.de/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputFormat=application/xml&startPosition=1&maxRecords=1&typeNames=gmd:MD_Metadata&elementSetName=full&CONSTRAINTLANGUAGE=Filter&constraint_language_version=1.1.0&constraint=<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc"><ogc:PropertyIsEqualTo><ogc:PropertyName>apiso:partner</ogc:PropertyName><ogc:Literal>hb</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter>
{% endhighlight %}


**GetRecords, POST XML**

Der Endpoint für den XML Request ergibt sich aus der Capabilities Antwort. Als Content Type des Requests muss *application/xml* angegeben werden.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetRecords  xmlns="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:apiso="http://www.opengis.net/cat/csw/apiso/1.0" xmlns:ows="http://www.opengis.net/ows" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/"  xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" service="CSW" version="2.0.2" resultType="results" outputFormat="application/xml" outputSchema="http://www.isotc211.org/2005/gmd" startPosition="1" maxRecords="10">
    <Query typeNames="gmd:MD_Metadata">
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
```


**GetRecordById, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?SERVICE=CSW&REQUEST=GetRecordById&VERSION=2.0.2&ID=98E56BC3-20EC-43A7-8270-1352F0A53AD4
{% endhighlight %}

**GetRecordById, POST XML**

Der Endpoint für den XML Request ergibt sich aus der Capabilities Antwort. Als Content Type des Requests muss *application/xml* angegeben werden.

```xml
<GetRecordById xmlns="http://www.opengis.net/cat/csw/2.0.2"
               service="CSW" version="2.0.2"
               outputSchema="http://www.opengis.net/cat/csw/2.0.2"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2" >
    <Id>98E56BC3-20EC-43A7-8270-1352F0A53AD4</Id>
    <ElementSetName>full</ElementSetName>
</GetRecordById>
```

**DescribeRecord, GET**

{% highlight text %}
https://dev.informationgrid.eu/csw?SERVICE=CSW&REQUEST=DescribeRecord&VERSION=2.0.2
{% endhighlight %}


**DescribeRecord, POST XML**

Der Endpoint für den XML Request ergibt sich aus der Capabilities Antwort. Als Content Type des Requests muss *application/xml* angegeben werden.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<DescribeRecord xmlns="http://www.opengis.net/cat/csw/2.0.2"
                xmlns:gmd="http://www.isotc211.org/2005/gmd"
                schemaLanguage="http://www.w3.org/XML/Schema"
                service="CSW" version="2.0.2">
</DescribeRecord>
```


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

Die Einschränkungen auf Partner, Anbieter oder iPlug in der CSW Schnittstelle können über die CSW Anfrage vorgenommen werden.
Beispiel einer *GetRecords* Anfrage mit Filterung nach *iplug* per POST XML. Als Content Type des Requests muss *application/xml* angegeben werden.
Auf die gleiche Art und Weise kann auch per *partner* oder *provider* gefiltert werden.

```xml
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
                xmlns="http://www.opengis.net/cat/csw/2.0.2" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:ogc="http://www.opengis.net/ogc" xmlns:dct="http://purl.org/dc/terms/"
                xmlns:ows="http://www.opengis.net/ows" xmlns:gml="http://www.opengis.net/gml" xmlns:gmd="http://www.isotc211.org/2005/gmd"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="CSW" version="2.0.2"
                maxRecords="10" startPosition="1" resultType="results" outputFormat="application/xml"
                outputSchema="http://www.isotc211.org/2005/gmd"
                xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
    <csw:Query typeNames="gmd:MD_Metadata">
        <csw:ElementSetName typeNames="">full</csw:ElementSetName>
        <Constraint version="1.1.0">
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>iplug</ogc:PropertyName>
                    <ogc:Literal>/ingrid-group:ige-iplug-HH</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
        </Constraint>
    </csw:Query>
</csw:GetRecords>
```

Eine Filterung mehrerer iPlugs ist dann wie folgt möglich:

```xml
    <csw:Query typeNames="gmd:MD_Metadata">
    <csw:ElementSetName typeNames="">full</csw:ElementSetName>
    <Constraint version="1.1.0">
        <ogc:Filter>
            <ogc:Or>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>iplug</ogc:PropertyName>
                    <ogc:Literal>/ingrid-group:ige-iplug-HH</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>iplug</ogc:PropertyName>
                    <ogc:Literal>/ingrid-group:ige-iplug-HB</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Or>
        </ogc:Filter>
    </Constraint>
</csw:Query>
```

**Hinweis**

Um die `GetRecords`-Ergebnisse in einer GET-Anfrage auf einen Partner einzuschränken, braucht man das über das `constraint`-Parameter machen. Die GET Abfrage sieht dann so aus:

{% highlight text %}
http://metaver.de/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputFormat=application/xml&outputSchema=http://www.isotc211.org/2005/gmd&startPosition=1&maxRecords=1&typeNames=gmd:MD_Metadata&elementSetName=full&CONSTRAINTLANGUAGE=Filter&constraint_language_version=1.1.0&constraint=%3Cogc:Filter%20xmlns:ogc=%22http://www.opengis.net/ogc%22%3E%3Cogc:PropertyIsEqualTo%3E%3Cogc:PropertyName%3Epartner%3C/ogc:PropertyName%3E%3Cogc:Literal%3Ehb%3C/ogc:Literal%3E%3C/ogc:PropertyIsEqualTo%3E%3C/ogc:Filter%3E
{% endhighlight %}

oder

{% highlight text %}
http://metaver.de/csw?service=CSW&version=2.0.2&request=GetRecords&resultType=results&outputFormat=application/xml&startPosition=1&maxRecords=1&typeNames=gmd:MD_Metadata&elementSetName=full&CONSTRAINTLANGUAGE=Filter&constraint_language_version=1.1.0&constraint=<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc"><ogc:PropertyIsEqualTo><ogc:PropertyName>apiso:partner</ogc:PropertyName><ogc:Literal>hb</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter>
{% endhighlight %}


### Wie kann ich das Ausgabeformat (outputSchema) der Antwort meiner Anfrage bestimmen?
Standardmäßig ist das Ausgabeformat auf ISO (GMD, http://www.isotc211.org/2005/gmd) eingestellt, wenn bei der Anfrage keine explizite Festlegung erfolgt oder wenn das GMD-Format explizit angefragt wird.
Die Festlegung der Ausgabe des outputSchemas erfolgt über den Parameter `outputSchema` in der Anfrage.
Folgende Angaben werden bei dem `outputSchema`-Parameter unterstützt:
* http://www.isotc211.org/2005/gmd
* http://www.opengis.net/cat/csw/2.0.2

Bei Festlegung des OGC/CSW-Standards (Dublin Core Format) und ISO 19139 (GMD) als Ausgabeformat liefert die Komponente die Ergebnisse in dem entsprechenden Format.
Das DC-Format ist ein Metadatenstandard für allgemeine Zwecke und dient dazu, eine Vielzahl von digitalen Ressourcen im Web zu beschreiben.
Beispiel einer GetRecords-Anfrage mit Ausgabe im OGC Format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetRecords xmlns="http://www.opengis.net/cat/csw/2.0.2" maxRecords="10" outputFormat="text/xml"
            outputSchema="http://www.opengis.net/cat/csw/2.0.2" requestId="csw:1" resultType="results" service="CSW"
            startPosition="1" version="2.0.2">
    <Query typeNames="csw:service,csw:dataset">
        <ElementSetName typeNames="">full</ElementSetName>
        <Constraint version="1.1.0">
            <Filter xmlns="http://www.opengis.net/ogc">
                <PropertyIsEqualTo>
                    <PropertyName>AnyText</PropertyName>
                    <Literal>wasser</Literal>
                </PropertyIsEqualTo>
            </Filter>
        </Constraint>
    </Query>
</GetRecords>
```

Ähnlich kann man die das outputSchema auch in einer HTTTP GET-Anfrage festlegen, in der URL muss der Parameter `outputSchema` mit dem gewünschten URI angegeben werden.
Beispiel einer HTTP GET GetRecords-Anfrage mit OGC/CSW outputSchema:

{% highlight text %}
https://dev.informationgrid.eu/csw?service=CSW&VERSION=2.0.2&typeNames=csw:Record&request=GetRecords&resultType=results&ElementSetName=full&outputSchema=http://www.opengis.net/cat/csw/2.0.2&constraintlanguage=FILTER&CONSTRAINT_LANGUAGE_VERSION=1.1.0&constraint=%20%3Cogc:Filter%20xmlns:ogc=%22http://www.opengis.net/ogc%22%3E%20%3Cogc:PropertyIsEqualTo%3E%20%3Cogc:PropertyName%3Ecsw:AnyText%3C/ogc:PropertyName%3E%20%3Cogc:Literal%3EGeografische%3C/ogc:Literal%3E%20%3C/ogc:PropertyIsEqualTo%3E%20%3C/ogc:Filter%3E
{% endhighlight %}
