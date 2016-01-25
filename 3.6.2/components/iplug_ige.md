---
layout: default
title: iPlug IGE / InGrid Catalog
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Ein IGE iPlug kapselt einen InGridCatalog(IGC) und regelt alle Zugriffe auf diesen Katalog. Es bildet also das Backend der Metadaten Erfassung und stellt sämtliche Schnittstellen zur Erfassung, Bearbeitung und Recherche eines spezifischen Kataloges zur Verfügung.

Seit der Version 3.6.2 wurde die Funktionalität eines DSC-iPlugs integriert und ist somit auch mit dem iBus verbunden. Dadurch erhielt das IGE-iPlug zusätzlich die Aufgabe der Indexierung der Daten und die Suche über den iBus. Die Installation separater DSC-iPlugs ist somit nicht mehr notwendig.
Darüber hinaus werden die Daten sofort beim Veröffentlichen im Index aktualisert und es muss keine vollständige Indexierung mehr ausgeführt werden.

Die Erstellung eines IGC mittels Migration von UDK Daten erfolgt mit dem UDK - IGC Importer .

Bei einem Update des iPlugs wird eine automatische Datenbankmigration ausgeführt.

Der erstellte IGC wird dann mit dem IGE iPlug an die Erfassung (InGridEditor) im Portal angebunden.

![InGrid Komponente iPlug IGE](../images/ingrid_ige_iplug.png "InGrid Komponente iPlug IGE")

<figcaption class="figcaption">InGrid Komponente iPlug IGE</figcaption>



## Systemvoraussetzungen

* 256 MB RAM
* 1 GB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-ige-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Mit dem Installer kann eine Neuinstallation des iPlugs als auch ein Update einer bestehenden Installation ausgeführt werden.

Bei einer Neuinstallation installiert das Installationsprogramm das iPlug im gewünschten Verzeichnis und passt die Konfigurationsdateien an.
Bei einem Update wird die bestehende Installation auf den neuesten Stand gebracht, die Kommunikations bzw. Datenbankparameter bleiben dabei unverändert.

Sowohl bei Neuinstallation als auch beim Update eines iPlugs wird die zugehörige InGrid Katalog-Datenbank automatisch mit erzeugt (wenn noch nicht vorhanden) bzw. aktualisiert !

> **ORACLE:** Nur für Oracle muss die Katalog-Datenbank existieren, also separat angelegt werden, falls ein neuer Katalog erzeugt werden soll. Es reicht aus, die Datenbank zu erzeugen und das initiale Schema zu importieren (ingrid-igc-schema_102.sql).

Für MySQL wird die Katalog-Datenbank automatisch erzeugt, wenn diese noch nicht vorhanden ist. Vorgabe für den Installer ist hier also immer entweder gar keine existierende Katalog-Datenbank oder eine existierende Katalog-Datenbank, die dann aber schon das Katalog-Schema beinhalten muss (z.B. initiale Tabellen importiert aus ingrid-igc-schema_102.sql).

> ACHTUNG: Da der Installer automatisch einen bestehenden Katalog migriert, sollte vor Aufruf des Installers ein BACKUP des bestehenden Katalogs erfolgen !!!

> Außerdem sollte die Ausgabe des Installers bzgl. der Katalog-Migration beachtet werden! Alle Ausgaben der Katalog-Migration finden sich im Verzeichnis des iPlugs in der Datei importer_TIMESTAMP_log.log

Nach der Installation/Migration kann das iPlug mit

  sh start.sh start

gestartet werden.


Sie können nun das iPlug mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten.

## Aktualisierung

Ein neues Release kann von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/) heruntergeladen werden.

iPlug stoppen:

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-ige <BACKUP-DIRECTORY>
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer:

{% highlight text %}
java -jar ingrid-iplug-ige-NEW-VERSION-installer.jar
{% endhighlight %}

Während der Installation bitte "Update" auswählen und das Installationsverzeichnis der vorherigen Installation angeben.

iPlug starten:

{% highlight text %}
sh start.sh start
{% endhighlight %}

## Betrieb

{% highlight text %}
start.sh [start|stop|restart|status]
{% endhighlight %}

Die LOG Ausgaben finden sich in der Datei `log.log` und `console.log`.


## Konfiguration

Im folgenden werden die Konfigurationsdateien des IGE-iPlug nochmals näher beschrieben. Diese sind bereits entsprechend der Eingabe im Installationsprozess konfiguriert.

Durch die Integration des DSC-iPlugs, ist auch die Administration über den Webbrowser hinzugefügt worden. Über den im Installer angegebenen Port ist die Administrationsseite abrufbar. Siehe dazu auch die [DSC-iPlug-Dokumentation](iplug_dsc_scripted.md).

### IGE-iBus

> Achtung: Der MDEK-iBus oder IGE-iBus ist ein zweiter, separater iBus mit dem sich der IGE-iPlug verbindet. Es handelt sich nicht um den iBus den die DSCs ansprechen. Das IGE-iPlug benötigt einen anderen TCP-PORT als die DSC-iPlugs um sich mit dem IGE-iBus zu verbinden.

Definiert ist der IGE-iBus Port in der Datei

{% highlight text %}
~/ingrid-portal/APACHE_TOMCAT/webapps/ingrid-portal-mdek-application/WEB-INF/classes/communication.xml
{% endhighlight %}

Der Pfad kann je nach Installation variieren.

Die Datei hat u.a. folgenden Inhalt:

{% highlight xml %}
<server name="/ingrid-group:ige-ibus">
    <socket port="11000" timeout="10" />
    <messages maximumSize="3145728" threadCount="100" />
</server>
{% endhighlight %}

Der socket-Port ist der TCP-Port, der vom iPlug IGE aus angesprochen wird.

Der Pfad der communication.xml kann sich je nach Installation ändern, sollte jedoch in jedem Fall im tomcat-Verzeichnis unter webapps/ingrid-portal-mdek-application/WEB-INF/classes liegen.

## InGrid Communication

Die Einstellungen zur InGrid Communication wird in der Datei

{% highlight text %}
conf/config.override.properties
{% endhighlight %}

vorgenommen.

Unter dem Schlüssel "communications.ige" werden die Parameter kommasepariert nach dem Format "<client-name>,<ip>,<port>" hinterlegt, zum Beispiel:

{% highlight text %}
communications.ige=/ingrid-group:ige-ibus,127.0.0.1,11000
{% endhighlight %}

Hier wird der PeerName des IGE-iPlugs fest gelegt, mit dem dieser in der IGE-iBus Umgebung angesprochen werden kann ("client name", muss eindeutig sein). Unter IGE-iBus wird hier das Frontend der Metadaten-Erfassungskomponente verstanden (InGridEditor), bei dem sich das IGE-iPlug anmeldet und danach über die Oberfläche bearbeitet werden kann. Das Frontend kapselt einen IGE-iBus ("server") an dem sich die IGE-iPlugs bekannt machen. Die Verbindung zum IGE-iBus wird über dessen eindeutige Bezeichnung und der Verbindungsadresse hergestellt. Nach der Anmeldung arbeitet die Erfasserin dann auf dem Ihr zugewiesenen IGE-iPlug.

{% highlight xml %}
 ...
 <client name="/ingrid-group:ige-iplug-bund">
   <connections>
     <server name="/ingrid-group:ige-ibus">
       <socket port="11000" ... ip="192.168.64.104" />
 ...
{% endhighlight %}


## Datenbank

{% highlight text %}
conf/config.override.properties
{% endhighlight %}

Hier sind die Verbindungs-Einstellungen zum InGridCatalog in der Datenbank vorzunehmen.

Beispielhaft könnte dies für MySQL wie folgt aussehen. Wichtig ist, dass der MySQLInnoDBDialect eingestellt und die Datenbank auf InnoDB umgestellt ist, damit Transaktionen unterstützt werden (s. UDK - IGC Importer).

{% highlight properties %}
iplug.database.driver=com.mysql.jdbc.Driver
iplug.database.url=jdbc:mysql://localhost/igc_database
iplug.database.username=root
iplug.database.password=3895073
iplug.database.schema=
iplug.database.dialect=org.hibernate.dialect.MySQLInnoDBDialect
{% endhighlight %}


## FAQ

### Wie kann ich ein Überschreiben der Datei `env.sh` bei einer Aktualisierung verhindern.

In der Datei env.sh können Systemvariablen komponenten-spezifisch angepasst werden (z.B. Proxy oder Heap Einstellungen). Um die Einstellungen nach einer Aktualisierung nicht zu verlieren, muss die Datei `env.sh` nach `user.env.sh` kopiert werden. Die Änderungen in `user.env.sh` werden nicht überschrieben.
