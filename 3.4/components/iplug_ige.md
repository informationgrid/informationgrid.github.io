---
layout: default
title: iPlug IGE / InGrid Catalog
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

 Ein IGE iPlug kapselt einen InGridCatalog(IGC) und regelt alle Zugriffe auf diesen Katalog. Es bildet also das Backend der Metadaten Erfassung und stellt sämtliche Schnittstellen zur Erfassung, Bearbeitung und Recherche eines spezifischen Kataloges zur Verfügung.

Die Erstellung eines IGC mittels Migration von UDK Daten erfolgt mit dem UDK - IGC Importer .

Bei einem Update des iPlugs wird eine automatische Datenbankmigration ausgeführt.

Der erstellte IGC wird dann mit dem IGE iPlug an die Erfassung (InGridEditor) im Portal angebunden. 

<div class="mxgraph" style="position:relative;overflow:hidden;width:388px;height:381px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">7Vpdj9o4FP01SLsPRUlsQngcGMp2d7uqdtqt9tFgh1g1MTJmgP76XsM1SSZZzYx2MqG0EhLJsfHHOefa1wk9MlntZ4ats/eaC9WLAr7vkdteFIWUUPhyyOGEJMP4BCyN5FipAO7kV4FggOhWcrGpVLRaKyvXVXCh81wsbAVLtap2sWZL33wB3C2YqqOfJbcZomE8Kgp+E3KZYT9JhJPZ2INvg4uUbZV9c4SgzBWvmG8LZ7UPTrdRnJyAgweG567yypi+ar2qAEZsCrJwvhLHhb3MteHCVCDBfZ3MWkfhTS96Cx9u5L3oc8N2famPEJkF4yC4+/ePdLpJ/vzMPw3oX//c7P6e7j9+Iu9PrSmZfynLQKZgBaM1dOGuVvuJUM4OXuk4ZTQhiwUd0pDS4ejNaVRvn1r9rI8ROU7jmU1GZBCyeURGQiR8zilWD+6Z2iKZ7/KZs2YUTIErbeDil3ez6a+9KFbQ53gOSLx0VzXpjd7mXLieQijeZdKKuzVbuNIdRAdgmV0pLNZQIq2LigFoP567/h+fHTJwL4wVPsbOzEMQCr0S1hycxbyhcIYYf1GC97vC4ARGcMSykrdjxBgKvDw3XdALF8hwM9uUz+M0DVnK4hGHmwa2ayRuMrZ2l4sDuOto38eYLKir0fIUNv+bugTXLqRuQOvUDbCb1pnzwjf4dMIsU3pZN+gtWPRR0wJhDi/xubFGfxETrcD85DbXOdQcp1KpBxBTcukWqQUQfNTJ0S9hNb3BgpXk3HXTKKCG2qnSO0AyqCfgBzi4l1YR20AVY7+zlFXEVbisoo+JF1UR7f59+J+MyOX4H4fy0//PV7G6AXTqf1xQyyrOpu4HH9S2QcD/t8O2ti/4dBAZpQ2M+kWn9bgYXAOjZOjT4AtgFFP6p6zRXG/nStwY48J4zKWBE4jULvQ3eusG3plFR+gLJPSc4ZWzvoakr5WgH14BoTSo5oKdEorBclWE0qZzyWsRiuv5VYV8p4T69bvE6O+3Y2jnZzoW4v7iZfLp2SPpmJfuZWWqnyo/Tj78gJpUU2Ti84pONGnvjPjgoVMLTA4GuNlfxCOTH+LM2L6k1Y260/Nj+PoHyFdgmGKEX8LpJ6wfKFvOhV6B4PNblgtI3v3+f80Ed5t71s+b32Hu2bpkoweSdZqH1k+0l56Htq5PUn3I2G1OWj8g9/v9i9Yn1bnFfxNE3l0v+wDjwYvVpl27SSCKG+wzBILb4qX6saz0Zwsy/QY=</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 1 GB Harddrive

* JAVA 1.6
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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-ige/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-ige <BACKUP-DIRECTORY>
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-ige-NEW-VERSION-installer.jar
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

Im folgenden werden die Konfigurationsdateien des IGE-iPlug nochmals näher beschrieben. Diese sind bereits entsprechend der Eingabe im Installationsprozess konfiguriert.

Ein IGE-iPlug besitzt keine `plugdescription.xml` , da dieses nicht in die PortalU Suche eingebunden ist, sondern der Erfassung dient.

### IGE-iBus

> Achtung: Der MDEK-Ibus oder IGE-iBus ist ein zweiter IBUS. Es handelt sich nicht um den IBUS den die DSCs ansprechen. Der MDEK-IPLUG benötigt einen anderen TCP-PORT als die DSC-Iplugs um sich mit dem IBUS zu verbinden.

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
conf/communication.xml
{% endhighlight %}

vorgenommen.

Hier wird der PeerName des IGE-iPlugs fest gelegt, mit dem dieser in der IGE-iBus Umgebung angesprochen werden kann ("client name", muss eindeutig sein). Unter IGE-iBus wird hier das Frontend der Metadaten-Erfassungskomponente verstanden (InGridEditor), bei dem sich das IGE-iPlug anmeldet und danach über die Oberfläche bearbeitet werden kann. Das Frontend kapselt einen IGE-iBus ("server") an dem sich die IGE-iPlugs bekannt machen. Die Verbindung zum IGE-iBus wird über dessen eindeitige Bezeichnung und der Verbindungsadresse hergestellt. Nach der Anmeldung arbeitet die Erfasserin dann auf dem Ihr zugewiesenen IGE-iPlug.

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
conf/default-datasource.properties
{% endhighlight %}

Hier sind die Verbindungs-Einstellungen zum InGridCatalog in der Datenbank vorzunehmen.

Beispielhaft könnte dies für MySQL wie folgt aussehen. Wichtig ist, dass der MySQLInnoDBDialect eingestellt und die Datenbank auf InnoDB umgestellt ist, damit Transaktionen unterstützt werden (s. UDK - IGC Importer).

{% highlight properties %}
# MYSQL settings
hibernate.driverClass=com.mysql.jdbc.Driver
hibernate.user=root
hibernate.password=3895073
hibernate.dialect=org.hibernate.dialect.MySQLInnoDBDialect
 
# InGrid catalogue database
hibernate.jdbcUrl=jdbc:mysql://localhost/igc_database
{% endhighlight %}




