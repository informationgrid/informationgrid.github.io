---
layout: default
title: iPlug Excel
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Das iPlug dient dem Indexieren von Excel Daten. Excel Dateien können komfortabel in einen Index abgebildet werden.

<div class="mxgraph" style="position:relative;overflow:hidden;width:434px;height:447px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Vpdb+I6EP01PILiOJ+PpR97r3SvVKkP9/HKJCZYm8SRcbZ0f/2OYQwOSZd+kC6teCAZO459znjmjGFCr6vNN8Wa1b8y5+XE9/LNhN5MfJ8ENIAvY3naWZI42hkKJXLsdDA8iJ8cjR5aW5HzdaejlrLUoukaM1nXPNMd21KW3Vc0rLDDHwwPGSv71v9ErldoJVF6aPiLi2KF70l8XMxaP9kxcr5kbamnWxO0meaK2bFwVRtvd0vtAE9oIOH+VXVnTj+lrDoGxdcHsHC9AueFb1lIlXPVMZWi/u4CR2+BPCUlPGiuqs01Lw2BlptoyYKEZlkQByQI4nS6G+fupd33iCpe4+ReO6QfR4xEUZSHjHlZPk12Q/5gZYvL73GwXrHGXK5FXZT8Sin5OKHzx5XQ/KFhmWl6BHcF20pXJdwRuHyC90K/0/PFNf3gSnPr53ssYSNwWXGtngzNu9bAQ/RxDwQUh3g8OFkU70wrx70oPsaQsWI/8gEvuEDIhuFbxkvqBWGaMs7iLJiivzno3W6y7Z4V92VbTPyohLfPFwquCnPVA1fJts65Gd6gdgLUplUNPDgGqDFGFgsqwaU5oBKKNhfV6Ayo9pwS2XNg/RtA2vTAg8UZUB2E1lrJ7/xaltLs1FrW0HO+FGV5ZGKlKExIyABDs6nnBioBsesKGyqR5+Y1g5RI6L007k1vVtCPwwPI7HlZCUPcjchKGPRZCXEHu6QEY5Bi2XdYqVjTQFAwpGRKNHr9Aof/6pwFMT3JWYz8jL6RKOa/34X3AkJQ8w4k9mqBLeyQ26W8PNakAwGczMI4iUhEQxiO+NFA6Am9WeodPgluhLMC6PdD0bP5MZdZW23xe3Mcf5a/0+7nhoQj8MKhCNHBzjJwXudDqC4fO9vaFRb29o8jS72FzyPKWMqyNCE+ajwXWDFvIfi+R1so03EuoV1oA0CILzl3dOxi7Kd9kIlNX+cOjz0c7fRdnfHNVFK+dy2rqq0hu2gh6zeltfOnq8V2muNz5HUzmE/RzR2O0gGBfQ7V0aMIp+JQdC+VZvDMe5y9A+GoxcqRGiDWjzu6egDMUfwd8+7LAnIL6dwWe7lQkODNToAyULZm5q+EeOu7Y0hkvysm6ADAtkDsiocR8MV90sH3ZOSwiItqe57iYmgjxj9swct7uRZIwUJqbQ4weiFFS8PCdqSrdbM7wTHo49g3K63NSc+VWaJ/l+U1nQlQb0sBW0fNMhjTv8uZZvBl7JBS7iqx4ZBM86k1hMQg1ChZKFZVXP1Pb6bET2YNFALjB6coOar+7WmAw7ft4vJtbWflu18RXeWVeFu6+FpVUJSiGrc0DWzLsSrXHk2v0vDvDHuF4ltQj8KfknqnJOiNVTxnBpx2E01gizM3Dg7si1Hi4CVWnWGIz/2m6rTHxaMDZEuLjymNnuXnE1SVfej6ov0yocNWOouJF6Uk8WmSpjQ+8sJZGHQ+l1pymqT/mWCPZxABaUKjII7TJA66B6npzMXLw9EvEPV++fMFFDvm4315+XGKPVykXhSSdJEEXuYvFwMVkf0B506U8EvpZ1RyA7nyNIPPxy/LhY1YNoJ9gJLr0TVUYD0vLF4sGt4H0JE/DymvsYRFD6BRkqN7PHLCuYYZu0Bd0ZvoKPltBOSGZYX9wXtYVngY5i4P9Vfltz+P+pGqsH/HGVQVxK7lo1GH28N/ULZtzr+J6O0v</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 50 MB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-excel-VERSION-installer.jar
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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-excel/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-excel BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-excel-NEW-VERSION-installer.jar
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

### Indexierung von Excel Dateien

#### Mapping

Im Bereich `Excel Daten Mapping` können die zu indexierenden Excel Dateien verwaltet werden.

![Excel Dateien - Übersicht](../images/iplug_excel_mapping.png "Excel Dateien - Übersicht")

Um eine neue Datei zu mappen, drücken Sie den Button `Neue Excel Datei mappen`.

Existieren bereits gemappte Dateien bzw. Sheets gibt es folgende Möglichkeiten die Einstellungen zu überarbeiten:

- `Löschen`: löscht ein gemapptes Sheet wieder
- `Bearbeiten`: öffnet das Mapping des Sheets, damit man diese bearbeiten kann 
- `Weiteres Sheet`: um ein weiteres Sheet der selben Excel-Datei zu mappen
- `Datei aktualisieren`: für den Fall, dass sich der Inhalt der originalen Datei geändert hat 

#### Datei auswählen 

Um eine neue Excel Datei zu mappen, wählen Sie diese einfach aus und bestätigen Sie mit `Upload`.

![Excel Datei Öffnen](../images/iplug_excel_file.png "Excel Datei Öffnen")

#### Sheet auswählen 

Falls ihre Datei mehrere Sheets (Tabellen) besitzt, gelangen sie nach dem hochladen der Excel Datei zu einer Vorschau, in welcher Sie wählen können, welches Sheet sie zum Mapping hinzufügen wollen.

Wählen Sie hierzu einfach das gewünsche Sheet aus und drücken Sie dann auf Weiter .

![Sheet auswählen](../images/iplug_excel_choose_sheet.png "Sheet auswählen")


#### Sheet Einstellungen vornehmen

Es können bestimmte Grundeinstellungen für das Sheets vorgenommen.

Ein Sheet kann in zwei verschiedene Weisen aufgebaut sein:

- eine Zeile (ROW) enthält ein Dokument
- eine Spalte (COLUMN) enthält ein Dokument 

![Sheet Einstellungen](../images/iplug_excel_cheet_properties.png "Sheet Einstellungen")

Weiterhin besteht die Möglichkeit anzugeben, dass die erste Zeile/Spalte eines Sheets die Überschriften der einzelnen Felder enthält.

Auch eine benutzerdefinierte Beschreibung der Daten kann angegeben werden.

In diesem Beispiel entspricht ein Dokument einer Spalte - also einer COLUMN - und die erste Spalte enthält die Überschriften.

#### Felder indexieren

Ist die Einstellung des Sheet abgeschlossen, findet man sich in der Abbildungsübersicht wieder.

Hier hat man die Möglichkeit neue Felder zur Abbildung hinzuzufügen bzw. wieder zu entfernen, den globalen Bereich einzustellen, einzelne Dokumente auszuschließen und Filter zu Feldern hinzuzufügen bzw. wieder zu entfernen.

![Abbildungsübersicht eines Sheets](../images/iplug_excel_field_mapping.png "Abbildungsübersicht eines Sheets")

Um ein Feld zu mappen, genügt es in der entsprechenden Zeile/Spalte auf den dazugehörigen `Indizieren`-Link zu klicken.

Man findet sich daraufhin in einer Übersicht wieder, in der man die genauen Einstellungen des Feldes vornehmen kann.

![Feld Hinzufügen](../images/iplug_excel_add_index.png "Feld Hinzufügen")

Man kann entweder einer der vorgegebenen Feldnamen auswählen, oder aber einen eigenen Angeben.

> Achtung: es muss je Sheet genau einmal `title` und `summary` gemapped werden!

Ein evtl. vorhandener begrifflicher Raumbezug kann durch das Abbilden auf das Indexfeld `location` für das InGrid-System durchsuchbar gemacht werden.

Zudem ist es möglich die Wertigkeit dieses Feldes über das Eingabefeld `Relative Wertigkeit` zu ändern (der Wert "5" ist normal, höhere Werte stehen für höhere Wertigkeit).

Es gibt vier verschiedene Feldtypen :

- `TEXT` : für Text aller Art.
- `KEYWORD` : ebenfalls Text, jedoch ein Schlüsselbegriff (meistens nur ein Wort).
- `NUMBER` : Zahlen aller Art (ganze und Fließkommazahlen).
- `BOOLEAN` : Werte für wahr ( *true* ) und falsch ( *false* ). 

Näheres zum Mapping der verschiedenen Feldtypen in den Index siehe XML-iPlug. 

Ein Beispiel, wie ein fertig abgebildetes Sheet aussehen könnte:

![Beispiel](../images/iplug_excel_field_mapping_sample.png "Beispiel")


#### Bereich definieren 

Ein Sheet kann viele Daten beinhalten und dadurch auch sehr unübersichtlich werden.

Aus diesem Grund ist es möglich einen globalen Bereich zu definieren, um unwichtigen Inhalt aus dem Mappingvorgang auszuschließen. Der ausgeschlossene Bereich erscheint weder in der Vorschau, noch im Mapping. Jedoch werden Elemente die außerhalb des globalen Bereichs liegen auch nicht indexiert.

Den globalen Bereich kann man jederzeit verändern und auch wieder entfernen.

![Bereich definieren](../images/iplug_excel_range.png "Bereich definieren")

Will man hingegen nur einzelne Dokumente (d.h. Zeilen/Spalten) ausschließen, kann man dies über den Link `Einzelne Zeile/Spalte ausschließen` tun.

Entschließt man sich dazu, den ausgeschlossenen Datensatz wieder hinzuzufügen, kann man dies durch ein Klick auf das 'X' erreichen.

![Datensatz ausschließen](../images/iplug_excel_exclude.png "Datensatz ausschließen")


#### Filter hinzufügen 

Manchmal ist es nicht gewollt, dass alle Datensätze im Index erscheinen aus diesem Grund ist das definieren von Filtern möglich.

Sobald man ein Feld zum Mapping hinzugefügt hat, hat man die Möglichkeit einen oder mehrere Filter auf dieses Feld anzuwenden.

![Filter hinzufügen](../images/iplug_excel_filter.png "Filter hinzufügen")

Dabei gibt es sechs verschiedene Filter :

- `GREATER_THAN` : lässt nur Felder zu, deren Wert größer als der Wert ist.
- `LOWER_THAN` : lässt nur Felder zu, deren Wert kleiner als der Wert ist.
- `CONTAINS` : lässt nur Felder zu, die den Wert enhalten.
- `NOT_CONTAIN` : lässt nur Felder zu, die den Wert nicht enhalten.
- `EQUAL` : lässt nur Felder zu, die dem Wert gleichen.
- `NOT_EQUAL` : lässt nur Felder zu, die dem Wert nicht gleichen. 

Der Wert ist hierbei frei wählbar und kann sowohl eine Zahl als auch eine Zeichenkette sein.

> ACHTUNG : wird ein Feld eines Elements durch einen Filter gefiltert, erscheint nicht nur das Feld sondern der gesamte Eintrag nicht im Index!

Ob ein Datensatz gefiltert wird oder nicht, kann man an der Färbung der jeweiligen Zeile/Spalte erkennen.

Ist diese grün, erfüllt das Dokument alle Filter und wird auch im Index erscheinen. Ist es rötlich gefärbt, erfüllt es mindestens einen Filter nicht.

![Gefilterte Dokumente](../images/iplug_excel_filter.png "Gefilterte Dokumente")


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
