---
layout: default
title: Such-Schnittstelle
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Die Such-Schnittstelle beinhaltet alle Schnittstellen, die Anfragen direkt an die InGrid Recherche stellen. Dabei werden die Anfragen in InGrid Queries transformiert, an den iBus versendet und die Antworten in das jeweils geforderte Format umgewandelt.

Unterstützte Schnittstellen:

- OpenSearch Schnittstelle
- ATOM Download Service

![InGrid Komponente Such-Schnittstelle](../images/ingrid_interface_search.png "InGrid Komponente Such-Schnittstelle")

<figcaption class="figcaption">InGrid Komponente Such-Schnittstelle</figcaption>


## Systemvoraussetzungen

* 256 MB RAM
* 500 MB Harddrive

* JAVA 17
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-interface-search/](https://distributions.informationgrid.eu/ingrid-interface-search/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

```sh
java -jar ingrid-interface-search-VERSION-installer.jar
```

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

```sh
sh start.sh start
```

starten.


## Aktualisierung

Neues Release von [https://distributions.informationgrid.eu/ingrid-interface-search/](https://distributions.informationgrid.eu/ingrid-interface-search/) herunterladen.

Komponente stoppen.

```sh
sh start.sh stop
```

Aktuelles Installationsverzeichnis sichern:

```sh
cp -r /opt/ingrid/ingrid-interface-search BACKUP_DIRECTORY
```


Die Aktualisierung erfolgt über den Installer.

```sh
java -jar ingrid-interface-search-NEW-VERSION-installer.jar
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


## OpenSearch Schnittstelle

Die OpenSearch Schnittstelle basiert auf der OpenSearch Spezifikation [http://www.opensearch.org](http://www.opensearch.org). Sie dient vor allem der Integration der InGrid Suche in andere Systeme.

Die Definition der Schnittstelle wurde erweitert, um die Besonderheiten der Ingrid-Suche abbilden zu können.

Die Schnittstelle wird per HTTP/GET angefragt. Sie hat 2 Methoden:

- Anfordern des OpenSearch descriptors (`descriptor`)
- Absetzen einer Suche (`query`)

Über die query-Methode ist es auch möglich Detailinformationen über den oder die Datensätze zu bekommen. Diese werden dann für jeden Hit in die Antwort (RSS2.0 kompatibles XML-Format) geschrieben.

### Request

Folgende Parameter sind zulässig:

| Methode | Parameter | Beschreibung |
| === | === | === |
| descriptor |   | Keine Parameter, liefert den OpenSearch Descriptor, der die Such-Anfrage Syntax beschreibt |
| query | q | Die Query entspricht dem Query-String im Portal (siehe Beschreibung der [Ingrid-Querysyntax](../system/querysyntax.md)). |
| | p | angeforderte Seite der Suchergebnisse; Standard: 1 |
| | h | Treffer pro Seite; Standard: 10 |
| | t | Timeout für die Such-Anfragen an das InGrid System.<br><br>Dieses Timeout beeinflusst nur die Such-Anfragen an die iPlugs, welche nur einen Teil der Kommunikation darstellen. Die eigentliche Dauer eines OpenSearch Aufrufen ist etwas länger, dennoch kann die Ausführungszeit, evtl. auf Kosten der Ergebnismenge, beeinflusst werden. Das max. Timeout wird über die Einstellung `ibus.search.max.timeout` in der `ingrid-opensearch.properties` gesetzt. Über den Parameter `t` kann kein Timeout definiert werden, was höher als das maximale Timeout ist. Wird der Parameter nicht angegeben, wird als Timeout immer das maximale Timeout verwendet. |
| | xml | Art des Trefferlinks bei Metadatentreffern (Standard: xml=0) <br><br> Bei xml=1 verweisen die Links für Metadatentreffer auf dieselbe Opensearch-Schnittstelle, welche dann die Detailinformation zum jeweiligen Datensatz aufbereitet und ausgibt. <br><br> Bei xml=0 verweisen die Links für Metadatentreffer auf die Detaildarstellung der Portalkomponente. |
| | georss | Geo-Referenzierung mit ausgeben (Standard: georss=0) |
| | ingrid | Zusätzliche InGrid Informationen wie *partner*, *provider* etc. per Ergebnis mit ausgeben (Standard: ingrid=0) |
| | detail | Fügt in die Antwort die Detailinformationen zu jedem Treffer im InGridDataFormat (IDF) hinzu, wenn 'ingrid = 1' und 'xml = 0'; Standard: 0 |
| | uvp | Liefert die Antwort auf die Anfrage im Stil des UVP RSS-Feeds zurück (Standard: uvp=0) |


Bsp:

{% highlight text %}
https://dev.informationgrid.eu/interface-search/opensearch/descriptor
{% endhighlight %}

... liefert den OpenSearch Descriptor, der die Schnittstelle beschreibt.

{% highlight text %}
https://dev.informationgrid.eu/interface-search/opensearch/query?q=wasser+boden+datatype:default+ranking:score&p=1&h=20
{% endhighlight %}

... fordert 20 Ergebnisse aus den 'default' Datenquellen (z.B. iPlug-SE, iPlug-UDK-DB) der ersten Seite für die query "wasser boden" an, sortiert nach Relevanz . Der Link zum Detail von Metadaten verweist auf die Portal-Darstellung (Parameter xml=0 oder nicht angegeben).

{% highlight text %}
https://dev.informationgrid.eu/interface-search/opensearch/query?q=boden+datatype:metadata+ranking:score&p=1&h=20&ingrid=1&xml=1
{% endhighlight %}

... fordert 20 Ergebnisse aus den 'metadata' Datenquellen (z.B. iPlug-UDK-DB) der ersten Seite für die query "boden" an, sortiert nach Relevanz . Zusätzliche InGrid Informationen werden je Ergebnis mit ausgegeben (Parameter ingrid=1 ). Der Link zum Detail von Metadaten verweist auf die OpenSearch-Darstellung (Parameter xml=1 ).

{% highlight text %}
https://uvp.niedersachsen.de/interface-opensearch/query?q=datatype:default+ranking:date&uvp=1
{% endhighlight %}

... fordert die 10 aktuellesten UVP-Datensätze, sortiert nach Änderungsdatum an. Die Ausgabe wird UVP-spezifisch dargestellt und enthält Felder wie "guid", "pubDate", "uvp:latest-phase" und "author".


### Deskriptor-Response

Der Deskriptor der Opensearch-Schnittstelle gibt an, wie die Schnittstelle angefragt werden kann. Als Antwort erhält man eine oder mehrere URLs mit Platzhaltern, mit der man individuelle Anfragen stellen kann. Kommen mehrere URLs in einer Antwort vor, dann werden verschiedene Ausgabetypen unterstützt, wie z.B. rss und atom. Die Platzhalter sind im folgenden aufgeführt:

| Platzhalter | Optional | Beschreibung |
| == | == | ==  |
| {ingridsearch:timeout} | X | Siehe Parameter "t" der Methode "query" |
| {searchTerms} | Siehe Parameter "q" der Methode "query" |
| {geo:box} | X | Angabe von einer BoundingBox mit den Koordinaten "x1 y1 x2 y2" |
| {startPage} | X | Siehe Parameter "p" der Methode "query" |
| {count} | X | Siehe Parameter "h" der Methode "query" |
| {ingridsearch:ingrid} | X | Siehe Parameter "ingrid" der Methode "query" |
| {ingridsearch:detail} | X | Siehe Parameter "detail" der Methode "query" |
| {ingridsearch:xml} | X | Siehe Parameter "xml" der Methode "query" |
| {ingridsearch:georss} | X | Siehe Parameter "georss" der Methode "query" |

Ein Beispiel-Deskriptor sieht folgendermaßen aus:

```xml
<?xml version="1.0" encoding="utf-8"?>
<openSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
     xmlns:georss="http://www.georss.org/georss"
     xmlns:ingridsearch="http://www.portalu.de/opensearch/extension/1.0"
     xmlns:geo="http://a9.com/-/opensearch/extensions/geo/1.0/">
  <ShortName>InGrid OpenSearch</ShortName>
  <Description>Here you can search inside the InGrid-Portal.</Description>
  <Tags>ingrid opensearch web</Tags>
  <Contact>contact@wemove.com</Contact>
  <Url type="application/rss+xml" template="http://harrison.its-technidata.de/opensearch/query?q={searchTerms}+datatype:default+ranking:score&amp;bbox={geo:box?}&amp;p={startPage?}&amp;h={count?}&amp;xml={ingridsearch:xml?}&amp;detail={ingridsearch:detail?}&amp;georss={ingridsearch:georss?}&amp;ingrid={ingridsearch:ingrid?}&amp;format=rss" />
 </OpenSearchDescription>
```

Die Anzufragende URL befindet sich im Attribut `template` des Tags `Url`. Der Typ des Ausgabeformats verbirgt sich hinter `type` und ist in diesem Fall `application/rss+xml`. Ein Fragezeichen `?` in einem Platzhalter bedeutet, dass dieser Parameter optional ist. In diesem Beispiel wird nur verlangt, dass `{searchTerms}` mit einem entsprechenden Wert ersetzt wird. Mehr Informationen über den Deskriptor findet man hier [http://www.opensearch.org/Specifications/OpenSearch/1.1](http://www.opensearch.org/Specifications/OpenSearch/1.1).


### Response

Die Antwort der Schnittstelle erfolgt im RSS2.0 kompatiblen XML-Format. Die Schnittstelle erweitert das RSS2.0 Format um bestimmte Elemente. Das folgende XML Schema beschreibt die Erweiterungen.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" targetNamespace="http://www.wemove.com/ingrid/opensearchextension/0.1/" xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" xmlns:idf="http://www.portalu.de/IDF/1.0" xmlns:ingridsearch="http://www.wemove.com/ingrid/opensearchextension/0.1/">
  <xs:import schemaLocation="ingrid-opensearch.xsd"/>
  <xs:import namespace="http://a9.com/-/spec/opensearch/1.1/" schemaLocation="opensearch.xsd"/>
  <xs:element name="plugid" type="xs:string"/>
  <xs:element name="docid" type="xs:integer"/>
  <xs:element name="altdocid" type="xs:string"/>
  <xs:element name="provider" type="xs:string"/>
  <xs:element name="provider-name" type="xs:string"/>
  <xs:element name="partner" type="xs:string"/>
  <xs:element name="partner-name" type="xs:string"/>
  <xs:element name="source" type="xs:string"/>
  <xs:element name="udk-class" type="xs:integer"/>
  <xs:element name="udk-addr-class" type="xs:integer"/>
  <xs:element name="wms-url" type="xs:anyURI"/>
  <xs:element name="details">
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="idf:html"/>
        <xs:element maxOccurs="unbounded" ref="ingridsearch:detail"/>
        <xs:element ref="ingridsearch:detail-subrecord" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:element name="detail-subrecord">
    <xs:complexType>
      <xs:sequence>
        <xs:element maxOccurs="unbounded" ref="ingridsearch:detail"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:element name="detail">
    <xs:complexType>
      <xs:sequence>
        <xs:element ref="ingridsearch:detail-key"/>
        <xs:element ref="ingridsearch:detail-key-localized" minOccurs="0"/>
        <xs:element ref="ingridsearch:detail-value"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:element name="detail-key" type="xs:string">
  </xs:element>
  <xs:element name="detail-key-localized" type="xs:string">
  </xs:element>
  <xs:element name="detail-value" type="xs:string">
  </xs:element>
</xs:schema>
```

### Request vom MapClient

Die Suche nach Diensten im MapClient erfolgt über die OpenSearch Schnittstelle.
Die Suche nach "Wasser" im MapClient setzt z.B. folgenden
[REST-Request](https://dev.informationgrid.eu/ingrid-webmap-client/rest/search/query?q=Wasser&lang=de&type=services&searchUrl=https://dev.informationgrid.eu/opensearch/query?q={query}+t011_obj_serv_op_connpoint.connect_point:http*+t011_obj_serv.type:view+cache:off+datatype:metadata+ranking:score&ingrid=1&h=100) ab, der folgende [Open Search Query](https://dev.informationgrid.eu/opensearch/query?q=Wasser+t011_obj_serv_op_connpoint.connect_point:http*+t011_obj_serv.type:view+cache:off+datatype:metadata+ranking:score&ingrid=1&h=100) auslöst.

Das Ergebnis liefert Kartendienste mit "Wasser", die im MapClient hinzugefügt werden können.

## ATOM Download Service Feed Schnittstelle

INSPIRE-relevante Daten, welche durch Daten-Metadaten beschrieben sind, müssen über Download-Dienste verfügbar gemacht werden. Wie ein Download Dienst realisiert sein kann, ist in “Technical Guidance for the implementation of INSPIRE Download Services” beschrieben. Diese Umsetzung bezieht sich auf die Spezifikation in Version 3.0.

Die Grundidee dabei ist, dass vom Metadaten-Erfasser im InGridCatalog/IGE Serivce-Metadaten für einen oder mehrere Download-Dienste angelegt werden. Mit diesen Objekten werden Daten-Metadaten als gekoppelte Resourcen verknüpft. Für jeden dieser Download-Service-Metadatensätze wird durch einen Webservice (bzw. eine Service-Fassade) ein solcher Download-Dienst automatisch bereitgestellt. Hierzu wird dynamisch der Service-Feed erzeugt. Dieser entspricht einem Capabilities-Dokument bei OGC-Webservices.

Alle an dieses Dienste-Metadatenobjekt gekoppelten Daten-Metadaten werden im Service-Feed eingetragen. Für jeden Daten-Metadatensatz kann sodann ein Daten-Feed abgerufen werden, dessen URL als entry-Element des Service-Feeds annonciert wird. Im Daten-Feed werden alle Download-Optionen für diesen Datensatz eingetragen.

Folgende Kopplungen können im InGrid Catalog (Editor) angegeben werden:

- Auswahl eines entsprechenden Daten Objektes über "Dargestellte Daten"
- Erstellen eines getRecordByID CSW Requested als "Datendownload" Verweis (Der Verweis wird von der ATOM Schnittstelle automatisch verfolgt.)

Im InGrid Catalog/InGrid Editor kann dies entweder über einen Eintrag in "gekoppelte Daten" im Geodatenservice

Eine weitere Anforderung an die dynamisch generierten Download-Services ist die Bereitstellung eines OpenSearch-Interfaces mit einem fest definierten Satz an Operationen.

### Methoden

Die unterschiedlichen Methoden der Schnittstelle werde über unterschiedliche Zugriffs-Pfade abgebildet:

| Methode | Zugriffspfad | Anmerkungen |
| --- | --- | --- |
|Download Service Feed | dls/service/{service-uuid}?q=<query> | `service-uuid` repräsentiert die UUID eines Metatdatensatzes vom Typ Geodatendienst (ISO: service).<br><br>`query` rerpäsentiert eine Suchanfrage. Es werden nur Datensätze im Service Feed hinterlegt, die über die Suchanfrage gefunden wurden. |
| Dataset Feed | dls/dataset/{service-uuid}/{dataset-uuid} | `service-uuid` repräsentiert die UUID eines Metatdatensatzes vom Typ Geodatendienst.<br><br>`dataset-uuid` repräsentiert eine gekoppelten Datensatz vom Typ Geoinformation Karte (ISO: dataset). Die dataset-uuid kann auch aus einer getRecordById Url bestehen, wenn die Download Daten über eine solche URL im Geodatendienst beschrieben sind.|
| OpenSearch: Generic Search Operation | dls/service/{service-uuid}?q=<query> | Gleiche Funktion, wie Download Service Feed |
| OpenSearch: Describe Spatial Data Set Operation | dls/dataset/{servicefeed-uuid}/?spatial_dataset_identifier_code={inspire_dls:spatial_dataset_identifier_code?}&spatial_dataset_identifier_namespace={inspire_dls:spatial_dataset_identifier_namespace?}&language={language?} | `service-uuid` repräsentiert die UUID eines Metatdatensatzes vom Typ Geodatendienst.<br><br>`inspire_dls:spatial_dataset_identifier_code` repräsentiert den Resource Identifikator der Datenquelle (ohne Namespace)<br><br>`inspire_dls:spatial_dataset_identifier_namespace` repräsentiert den Namespace des Resource Identifikator der Datenquelle<br><br>`language`: Die Sprache des Datensatzes. Momentan wird der Parameter ignoriert, da die Datensätze eines Kataloges immer in einer Sprache vorliegen<br><br>Die Methode liefert einen Dataset ATOM Feed zurück.
|OpenSearch: Get Spatial Data Set Operation | dls/get-dataset/{servicefeed-uuid}/?spatial_dataset_identifier_code={inspire_dls:spatial_dataset_identifier_code?}&spatial_dataset_identifier_namespace={inspire_dls:spatial_dataset_identifier_namespace?}&crs={inspire_dls:crs?}&language={language?} | `service-uuid` repräsentiert die UUID eines Metatdatensatzes vom Typ Geodatendienst.<br><br>`inspire_dls:spatial_dataset_identifier_code` repräsentiert den Resource Identifikator der Datenquelle (ohne Namespace)<br><br>`inspire_dls:spatial_dataset_identifier_namespace` repräsentiert den Namespace des Resource Identifikator der Datenquelle<br><br>`crs` repräsentiert das Referenzsystem des Datensatzes.<br><br>`language`: Die Sprache des Datensatzes. Momentan wird der Parameter ignoriert, da die Datensätze eines Kataloges immer in einer Sprache vorliegen.<br><br>Die Methode liefert direkt zum Datendownload. Falls mehrere Downloads in den Metadaten definiert wurden, wird ein ATOM Feed mit allen Download Links zurückgeliefert. |
| OpenSearch: Description | dls/opensearch-description/{servicefeed-uuid} | `service-uuid` repräsentiert die UUID eines Metatdatensatzes vom Typ Geodatendienst.<br><br>Liefert die OpenSearch? Description für den ATOM Download Service.
| Download Service Feed HTML Client | dls/ | Stellt alle Download Daten über eine HTML Applikation zur Verfügung. |
| Partner-spezifisches Branding des HTML Clients | dls/#?partner={PARTNER ID: bb, be, ni, ...} | Stellt den Client in einer partner-spezifischen Darstellung (Logo, Farben im Kopfbereich) dar und schränkt alle Dienste auf den jeweiligen Partner ein. |
| Partner-spezifisches Branding des HTML Clients und Darstellung eines spezifischen Dienstes | dls/#?serviceId={SERVICE UUID}&partner={PARTNER ID: bb, be, ni, ...} | Stellt den Client in einer partner-spezifischen Darstellung (Logo, Farben im Kopfbereich) dar und zeigt einen bestimmten Dienst an. |
| Partner-spezifisches Branding des HTML Clients und Darstellung eines spezifischen Dienstes, Ausblenden der Diensteauswahl | dls/#?serviceId={SERVICE UUID}&partner={PARTNER ID: bb, be, ni, ...}&serviceOnly | Stellt den Client in einer partner-spezifischen Darstellung (Logo, Farben im Kopfbereich) dar, zeigt einen bestimmten Dienst an und blendet die Diensteauswahl aus. |


### Abbildung der Daten

Im folgenden wird die Abbildung der verwendeten ISO Felder auf die Felder im ATOM Feed Format dokumentiert:

| Methode | ATOM Feed Referenz | ISO 19139 Referenz |
| --- | --- | --- |
| Download Service Feed | `/feed` | Die folgende Pfade beziehen sich auf einen Geodatendienst. |
|  | `/feed/title` | `//gmd:identificationInfo//gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString` |
|  | `/feed/subtitle` | `//gmd:identificationInfo//gmd:abstract/gco:CharacterString` |
|  | `/feed/rights` | Durch `;` getrennte Liste aus folgenden Elementen `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:accessConstraints/*/@codeListValue` und  `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:otherConstraints/gco:CharacterString`|
|  | `/feed/updated` | `//gmd:dateStamp/gco:DateTime | //gmd:dateStamp/gco:Date[not(../gco:DateTime)]`|
|  | `/feed/author` | `//gmd:identificationInfo//gmd:pointOfContact//gmd:organisationName/gco:CharacterString`|
| Download Service Feed (Entries) | `/feed/entry/` | Die folgenden Pfade beziehen sich auf die gekoppelten Geodatensätze. |
|  | `/feed/entry/title` | `//gmd:identificationInfo//gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString`|
|  | `/feed/entry/rights` | Durch `;` getrennte Liste aus folgenden Elementen `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:accessConstraints/*/@codeListValue` und  `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:otherConstraints/gco:CharacterString`|
|  | `/feed/entry/updated` | `//gmd:dateStamp/gco:DateTime | //gmd:dateStamp/gco:Date[not(../gco:DateTime)]`|
|  | `/feed/entry/summary` | `//gmd:identificationInfo//gmd:abstract/gco:CharacterString`|
|  | `/feed/entry/georss:polygon` | Polygon aus der vorhandene Bounding Box: `//gmd:identificationInfo//gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal`, `//gmd:identificationInfo//gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:eastBoundLongitude/gco:Decimal`, `//gmd:identificationInfo//gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal`, `//gmd:identificationInfo//gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal` |
|  | `/feed/entry/category@term` | `//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString|//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor`|
|  | `/feed/entry/category@label` | `//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString`|
|  | `/feed/entry/inspire_dls:spatial_dataset_identifier_code` | Teilstring nach `#` aus `//gmd:identificationInfo//gmd:citation//gmd:identifier/gmd:MD_Identifier/gmd:code/gco:CharacterString|//gmd:identificationInfo//gmd:citation//gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor` ermittelt. Falls der String kein `#` enthält wird der gesamte String verwendet.|
|  | `/feed/entry/inspire_dls:spatial_dataset_identifier_namespace` | Teilstring vor `#` aus `//gmd:identificationInfo//gmd:citation//gmd:identifier/gmd:MD_Identifier/gmd:code/gco:CharacterString|//gmd:identificationInfo//gmd:citation//gmd:identifier/gmd:MD_Identifier/gmd:code/gmx:Anchor` ermittelt. Ist leer, falls der String kein `#` enthält.|

| Methode | ATOM Feed Referenz | ISO 19139 Referenz |
| --- | --- | --- |
| Dataset Feed | `/feed` | Die folgende Pfade beziehen sich auf einen Geodatensatz. |
|  | `/feed/title` | `//gmd:identificationInfo//gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString` |
|  | `/feed/subtitle` | `//gmd:identificationInfo//gmd:abstract/gco:CharacterString` |
|  | `/feed/rights` | Durch `;` getrennte Liste aus folgenden Elementen `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:accessConstraints/*/@codeListValue` und  `//gmd:identificationInfo/*/gmd:resourceConstraints/gmd:otherConstraints/gco:CharacterString` |
|  | `/feed/updated` | `//gmd:dateStamp/gco:DateTime | //gmd:dateStamp/gco:Date[not(../gco:DateTime)]`|
|  | `/feed/author` | `//gmd:identificationInfo//gmd:pointOfContact//gmd:organisationName/gco:CharacterString`|
| Dataset Feed (Entries) | `/feed/entry/` | Die folgenden Pfade beziehen sich auf die Download Ressourcen des Geodatensatzes. Als Download Ressourcen werden alle Ergebnisse aus `//gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine[.//gmd:function/gmd:CI_OnLineFunctionCode/@codeListValue='Download of data' or .//gmd:function/gmd:CI_OnLineFunctionCode/@codeListValue='download' or .//gmd:function/gmd:CI_OnLineFunctionCode/@codeListValue='Datendownload']` verwendet. Die nachfolgenden Pfade beziehen sich auf das `gmd:onLine` Element. |
|  | `/feed/entry/title` | `.//gmd:name//gco:CharacterString`|
|  | `/feed/entry/link@href` | `.//gmd:linkage/gmd:URL`|
|  | `/feed/entry/link@type` | Mime-Type, wird automatisch aus den verlinkten Daten mit Hilfe Apache TIKA ermittelt. Falls unter `.//gmd:applicationProfile/gco:CharacterString` "gml" angegeben ist und der Download als ZIP File erkannt wurde, wird hier `application/x-gmz` eingetragen. |
|  | `/feed/entry/updated` | `.//gmd:name//gco:CharacterString`|
|  | `/feed/entry/category@term` | Hier werde die Daten aus dem Geoadatensatz unter `//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString|//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor` verwendet.|
|  | `/feed/entry/category@label` | Hier werde die Daten aus dem Geoadatensatz unter `//gmd:referenceSystemInfo/gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString` verwendet.|

## Endpoint für DCAT-AP.DE Daten

Für die Weitergabe an GOV.DATA können die Metadaten auch im RDF/XML Format abgegeben werden. 

Die Opensearch-Schnittstelle des Interface-Search wurde dazu um einen Export im RDF/XML erweitert. Der RDF-Export kann über den Parameter format=rdf angesteuert werden.

Bsp: [https://dev.informationgrid.eu/interface-search/opensearch/query?format=rdf](https://dev.informationgrid.eu/interface-search/opensearch/query?format=rdf)

Der Export ist Kompatibel zur DCAT-AP.de Version 1.1. Die Paginierung erfolgt über die PagedCollection aus dem Hydra-Namespace des W3C (https://www.w3.org/ns/hydra/spec/latest/core/) die Einstellmöglichkeiten der Datensätze pro Seite entspricht den Möglichkeiten der Items pro Seite im OpenSearch-Schnittstelle.

Der Export der Opendata-Metadaten erfolgt aus den IDF-Daten auf Basis der [Mapping-Tabelle für GDI-DE, Stand 16.02.2022](../images/20220216_Mapping_ISO_DCAT-AP-DE_konsolidiert_Aenderungen.xlsx).

Lizenzen werden gemäß der Tabelle unter https://www.dcat-ap.de/def/licenses/ (Stand 20210721) auf DCAT-AP.de URIs gemapped. Sollte keine Lizenz URL gefunden werden oder keine Abbildung auf eine URI möglich sein wird eine Default-Lizenz angegeben (Sofern nicht anders konfiguriert http://dcat-ap.de/def/licenses/other-open).

Für die Periodizität werden gängige Bezeichnungen und Codelist-Values auf das Vokabular in http://publications.europa.eu/resource/authority/frequency gemapped. Alle Varianten kürzer als eine Stunde werden auf CONT (Kontinuierlich) abgebildet.

Das Distribution-Format wird entsprechend der Mapping-Übersicht übernommen, sofern das Format im Vokabular unter http://publications.europa.eu/resource/authority/file-type vorkommt. Ein Mapping von abweichenden Bezeichnungen kann über ein JSON-File im Classpath ergänzt werden.

Folgende Eigenschaften können über die Konfiguration `interface-search.properties` eingestellt werden.

| Schlüssel                              | Beschreibung                                                                                                                                      |
| --- | --- | 
| opensearch.dcat.catalog.title          | Katalog-Titel, z.B. `Umweltdatenkatalog Niedersachsen`                                                                                            |
| opensearch.dcat.catalog.description    | Katalog-Beschreibung, z.B. `Das niedersächsiche Umweltportal`                                                                                     |
| opensearch.dcat.contributor_id         | Datenbereitsteller, z.B. `http://dcat-ap.de/def/contributors/NUMIS`                                                                               |
| opensearch.dcat.catalog.publisher.name | Id des Katalog-Herausgeber, z.B. `MU_Niedersachsen`                                                                                               |
| opensearch.dcat.catalog.publisher.url  | Url Katalog-Herausgeber, z.B. `https://numis.niedersachsen.de`                                                                                    |
| opensearch.dcat.basequery              | Basis Filterung für den DCAT-AP.de Export, gilt zusätzlich zu der Abfrage aus dem Query-Parameter `q`. Default: `datatype:metadata (t04_search.searchterm:opendata OR t04_search.searchterm:opendataident)` |

Die Werte müssen mit GOV.DATA abgestimmt werden.


## Konfiguration

### Parameter der Schnittstelle

Wesentliche Parameter sind über das `ingrid-search.properties` im Unterverzeichnis "conf" zu konfigurieren.

{% highlight properties %}
# port of the opensearch interface
server.port=8183

# max. number of returned hits per page for the opensearch interface
opensearch.max.requested.hits=10000

# opensearch descriptor file
opensearch.descriptor.file=conf/descriptor.xml

# interface url displayed in opensearch results
# use this in case of application is behind a reverse-proxy
opensearch.proxy.url=http://dev.informationgrid.eu/search/opensearch

# url to display detailed view of metadata results
# use this in case of providing links to details of metadata results
# only makes sence, if the query has the parameter xml=0
metadata.details.url=http://dev.informationgrid.eu/trefferanzeige

# enable/disable caching during bus queries
enable.caching=false

# max timeout for ibus search queries.
# After timeout milliseconds the ibus must interrupt iplug search processes.
ibus.search.max.timeout=60000

# metadata access URL pattern
# used by the ATOM download service
metadata.access.url=http://dev.informationgrid.eu/csw?REQUEST=GetRecordById&SERVICE=CSW&VERSION=2.0.2&id={uuid}&elementSetName=full

# atom download service access url
atom.download.service.url=http://dev.informationgrid.eu/search/dls

# atom download service feed access url extension pattern
atom.download.service.feed.extension=/service/{servicefeed-uuid}

# atom download service feed list access url extension pattern
atom.download.service.feedlist.extension=/service-list?q={searchTerms}

# atom download dataset feed access url extension pattern
atom.download.dataset.feed.extension=/dataset/{servicefeed-uuid}/{datasetfeed-uuid}

# atom download opensearch definition url extension pattern
atom.download.opensearch.definition.extension=/opensearch-description/{servicefeed-uuid}

# atom download service: opensearch get result url template
atom.download.opensearch.get.results.template=/service/{servicefeed-uuid}?q={searchTerms}

# atom download service: opensearch describe spatial dataset url template
atom.download.opensearch.describe.spatial.dataset.template=/dataset/{servicefeed-uuid}/?spatial_dataset_identifier_code={inspire_dls:spatial_dataset_identifier_code?}&amp;spatial_dataset_identifier_namespace={inspire_dls:spatial_dataset_identifier_namespace?}&amp;language={language?}

# atom download service: opensearch get spatial dataset url template
atom.download.opensearch.get.spatial.dataset.template=/get-dataset/{servicefeed-uuid}/?spatial_dataset_identifier_code={inspire_dls:spatial_dataset_identifier_code?}&amp;spatial_dataset_identifier_namespace={inspire_dls:spatial_dataset_identifier_namespace?}&amp;crs={inspire_dls:crs?}&amp;language={language?}

# atom download service: comma separated supported languages other languages will be ignored
atom.download.opensearch.supported.languages=de

# atom download service: connect timeout for external http calls
atom.url.connect.timeout=1000

# atom download service: read timeout for external http calls
atom.url.read.timeout=1000

# atom download service client source directory
atom.download.service.client.path=client

# opensearch channel title
opensearch.channel.title=

# opensearch channel description
opensearch.channel.description=

# opensearch channel language
opensearch.channel.language=

# opensearch channel copyright
opensearch.channel.copyright=

# opensearch channel link
opensearch.channel.link=
{% endhighlight %}

### Benutzung mit Apache mod_proxy

Um die Schnittstelle über Port 80 erreichen zu können, bietet sich die Verwendung eines proxys an. Dies kann einfach mit dem Apache-Modul `mod_proxy` realisiert werden. Im Apache müssen folgende Module installiert sein:

- mod_proxy
- mod_proxy_connect
- mod_proxy_http

In der Apache Konfiguration muss folgendes eingetragen werden:

```apacheconfig
#
# ProxyEngine
#
ProxyRequests Off
ProxyPass /search http://localhost:8183
ProxyPassReverse /search http://localhost:8183

ProxyPass /opensearch http://localhost:8183/opensearch
ProxyPassReverse /opensearch http://localhost:8183/opensearch
```

Der angegebene Port muss mit dem Port der Schnittstelle übereinstimmen.

Nun ist die Schnittstelle auch über http://SERVER_DOMAIN/search/... erreichbar.

Die Schnittstelle kann sowohl per HTTPS als auch per HTTP benutzt werden. Wichtig ist bei der oben beschriebenen Proxy Weiterleitung, dass Anfragen, die per HTTPS an den Proxy gestellt werden, auch so an die Schnittstelle weitergeleitet werden, dass diese den HTTPS Aufruf erkennt. Die kann durch folgende Ergänzung im der Apache Konfiguration erfolgen:

```apacheconfig
RequestHeader set X-Forwarded-Proto "https"
RequestHeader set X-Forwarded-Port "443"
```


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


### Unter welchen Bedingungen werden die Dienste im ATOM-Feed Client angezeigt?

Folgende Bedingungen müssen erfüllt sein, so dass ein Dienst mit seinen Download-Referenzen angezeigt wird:

*Kopplung mit Geodatensatz*

1. Der anzuzeigende Service muss von der Art "Download-Dienste" sein.
2. Es muss die Option "Als ATOM-Download Dienst bereitstellen" aktiviert sein.
3. Es muss mindestens eine Referenz auf ein Objekt vom Typ "Geodatensatz" vorhanden sein.
4. Dieser Geodatensatz muss mindestens einen Verweis vom Typ "Download" besitzen.
5. Ein angeschlossenes iPlug-DSC muss die Daten des IGC indexiert haben.

*Kopplung mit externem Datensatz* (ab Version 3.5.1)

1. wie oben
2. wie oben
3. Es muss mindestens ein externer Datensatz in den "gekoppelten Daten" hinzugefügt werden
4. Dieser Datensatz muss als URL die Zeichenkette "REQUEST=GetRecordById" enthalten
5. Ein angeschlossenes iPlug-DSC muss die Daten des IGC indexiert haben.

*Direkter Verweis auf externem Datensatz*

1. wie oben
2. wie oben
3. Es muss mindestens ein Verweis vom Typ "Datendownload" hinzugefügt werden
4. Dieser Verweis muss als URL die Zeichenkette "REQUEST=GetRecordById" enthalten
5. Ein angeschlossenes iPlug-DSC muss die Daten des IGC indexiert haben.
