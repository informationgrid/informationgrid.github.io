---
layout: default
title: iPlug SE (Search Engine)
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Das iPlug dient dem Indexieren von Webseiten. Die zu indexierenden Webseiten werden über eine komfortable Administration gepflegt. Die Webseiten werden zeitgesteuert über einen Crawler heruntergeladen, analysiert und indexiert. Dabei kommt für den Web Crawler die OpenSource Software [Apache Nutch](https://nutch.apache.org/) zum Einsatz. Für die Indexierung und Suche wird [Elastic Search](http://www.elasticsearch.org/) verwendet.

![InGrid Komponente iPlug SE (Search Engine)](../images/ingrid_iplug_se.png "InGrid Komponente iPlug SE (Search Engine)")

<figcaption class="figcaption">InGrid Komponente iPlug SE (Search Engine)</figcaption>

Es können mehrere Instanzen mit jeweils unterschiedlicher Konfiguration und unterschiedlichen URL Räumen, die durch Limit und Exclude URL Muster definiert werden, konfiguriert werden. Jede Instanz kann unabhängig gestartet und indexiert werden.

Über eine mächtige Metadaten Funktionalität können bestimmten URL Räumen Metadaten mitgegeben werden. Diese werden mit indexiert und können in der Suche verwendet werden.


Ein Indexierungsdurchlauf besteht aus mehreren Phasen:

| Inject URLs | Start-, Limit- und Exclude URLs werden exportiert und in Nutch-Datenbanken importiert. |
| Filter CrawlDB | Die vorhandene Nutch CrawlDB wird gegen die Limit- und Exclude URLs gefiltert. |
| Generate URLs | Aus der Nutch CrawlDB werden URLs für den Crawl ausgewählt. |
| Fetch | Die URLs werden heruntergeladen. |
| Update CrawlDB | Die Nutch CrawlDB wird mit den neu ermittelten Outlinks der heruntergeladenen Seiten aktualisiert. |
| Update Metadata | Die neuen URLs werden mit den Metadaten aus der URL Raum Definition aktualisiert. |
| Create Host Statistics | Eine Host Statistik wird erzeugt (Anzahl URLs pro Host). | 
| Create Url Report | Ein Statusreport für Start-URLs wird erzeugt. | 
| Merge Segments | Vorhandene Segmente werden zu einem Segment konsolidiert. | 
| Filter Segments | Vorhandene Segmente werden gegen die CrawlDB gefiltert. Daten von gelöschten URL Räumen werden entfernt. | 
| Webgraph | Ein Webgraph wird anhand der Verlinkung der einzelnen URLs erstellt. Der Webgraph gibt Auskunft, wie stark URLs miteinander vernetzt sind. Diese Information geht in die Ermittlung eines Webseiten-Scores bei der Indexierung ein. | 
| Update LinkDB | Die Nutch LinkDB wird aktualisiert. | 
| Deduplication | Anhand von einem Fingerprint werden Duplikate von Webseiten identifiziert und markiert. | 
| Index | Der Index wird aktualisiert. | 
| Cleanup Index | Duplikate werden aus dem Index entfernt. |
| Cleanup Crawl | Temp. Dateien werden gelöscht. |


## Systemvoraussetzungen

* 512 MB RAM
* 10 GB Harddrive

* JAVA 1.7
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-se-VERSION-installer.jar
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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-se/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-se BACKUP_DIRECTORY
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-se-NEW-VERSION-installer.jar
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


### DB - Einstellungen

Hier sind verschiedene Parameter hinterlegt:

| Parameter | Beschreibung |
| === | === |
| Datenbankpfad | Dies ist der Pfad, wo die dateibasierte [H2 Datenbank](http://www.h2database.com) abgelegt werden soll, in der sich die gepflegten URLs befinden. |
| Instanzenpfad | Dieser Pfad gibt an, wo die Einstellungen und Indexe der gesammelten Webseiten abgelegt werden sollen. |
| ElasticSearch Port | Dieser Port wird für die Kommunikation mit dem Index verwendet. **Achtung: Das integrierte Elastic Search benötigt für Clusterfunctionalität auch den Port 9300.** |


![SE iPlug Einstellungen](../images/iplug_se_parameter.png "SE iPlug Einstellungen")

<figcaption class="figcaption">SE iPlug Einstellungen</figcaption>

### SE Instanzen

Es können mehrere Instanzen mit jeweils unterschiedlicher Konfiguration und unterschiedlichen URL Räumen, die durch Limit und Exclude URL Muster definiert werden, konfiguriert werden. Jede Instanz kann unabhängig gestartet und indexiert werden.

In der Übersicht können Instanzen erstellt, kopiert, gelöscht und aktiviert/deaktiviert werden.

![SE iPlug Instanzen - Übersicht](../images/iplug_se_instances.png "SE iPlug Instanzen - Übersicht")

<figcaption class="figcaption">SE iPlug Instanzen - Übersicht</figcaption>

#### Instanzen - URL Pflege

Die URL Pflege erlaubt das Verwalten von URL Räumen, die indexiert werden sollen. URL Räume sind durch 3 Parameter spezifiziert:


| Start-URL | Einstiegs-URL in den URL Raum |
| Limit URL Muster | Ein oder mehrere URL Muster, die nicht verlassen werden dürfen | 
| Exclude URL Muster | Ein oder mehrere URL Muster, die innerhalb des URL Raumes ausgeschlossen sind |

Ein URl Muster ist hier immer entweder 

- ein rechts-trunkiertes Muster

  ```http://www.domain.com/pfad```

  das alle URLs beginnend mit dem Muster inkludiert
  
- oder ein regulärer Ausdruck

  ```/http://www.domain.com/[Reguärer Ausdruck]/```

  der alle URL inkludiert, die dem regulären Ausdruck entsprechen. Es ist hier darauf zu achten, dass der reguläre Ausdruck sich immer nur auf den Pfad bezieht. Alle URL Muster müssen zwingend mit einer Domain beginnen.

> Änderungen am URL Raum werden im Index erst nach einem weiteren Indexierungsdurchgang sichtbar.
  
  
Auf der Übersichtsseite wird die Liste aller URL Räume angezeigt. Diese kann über einen URL Filter oder die Angabe von bestimmten Metadaten eingeschränkt werden. 

![SE iPlug URL Pflege - Übersicht](../images/iplug_se_url_maintenance.png "SE iPlug URL Pflege - Übersicht")

<figcaption class="figcaption">SE iPlug URL Pflege - Übersicht</figcaption>

Für jeden URL Raum wird ein Status angegeben, der sich aufg die Start URL bezieht. Hier kann eingesehen werden, wann die URL zuletzt überprüft wurde und welchen Status diese hat. Folgende Status existieren:

| Status | Erläuterung |
| === | === |
| db_fetched | URL wurde erfolgreich geladen. |
| db_redir_temp | Es wurde ein temporärer Redirect erkannt.| 
| db_redir_perm | Es wurde ein permanenter Redirect erkannt. |
| db_unfetched | Die URL wurde zur Überprüfung vorgemerkt, aber noch nicht geladen. |
| db_gone | Beim Laden der URL wurde ein Fehler festgestellt. Die URL wurde als nicht mehr existierend klassifiziert. |
| db_notmodified | Die URL wurde geladen, es wurde aber keine Änderungen festgestellt. |

Für jeden URL Raum stehen folgende Aktionen zur Verfügung:

**URL Raum Editieren**

Die Parameter des URL Raumes können editiert werden. Die angezeigten Metadaten zeigen die Default-Einstellungen und können pro Instanz festgelegt werden.

![SE iPlug URL Pflege - URL Raum editeren](../images/iplug_se_url_maintenance_edit.png "SE iPlug URL Pflege - URL Raum editeren")

<figcaption class="figcaption">SE iPlug URL Pflege - URL Raum editeren</figcaption>


**Als Template verwenden**

Der URL Raum wird als Template für einen neuen Eintrag erhalten. Alle Metadaten bleiben erhalten.

**Url Testen**

Die Start-URL wird unter realen Bedingungen getestet. Dies bedeutet, dass der Crawl Prozess für die URL durchlaufen wird. Das Ergebnis wird angezeigt und hilft Probleme, wie z.B. Auswirkungen einer vorhandenen `robots.txt` zu analysieren.

![SE iPlug URL Pflege - URL Testen](../images/iplug_se_url_maintenance_test.png "SE iPlug URL Pflege - URL Testen")

<figcaption class="figcaption">SE iPlug URL Pflege - URL Testen</figcaption>


#### Instanzen - Management

Im Management Bereich kann ein Indexierungsdurchlauf manuell gestartet werden. Die `Tiefe` gibt dabei an wie viele Segmente für den Durchlauf erzeugt werden. Die `Anzahl der URLs` gibt die Anzahl der URLs pro Segment an. In der voreingestellten Konfiguration wird für `Tiefe` immer 1 angegeben.

Im Statusbereich kann der Fortschritt des Crawls verfolgt werden. Hier wird auch der Status des letzten Durchlaufes angezeigt.

Die Host Statistik liefert Informationen über die Anzahl der 

- bekannten (in der CrawlDB vermerkten)
- analysierten (in einem Durchlauf analysierten und ggf. indexierten)

URLs. Das `Ratio` liefert einen schnellen Überblick über das Verhältnis von analysierten zu bekannten URLs ein sehr niedriger Wert deutet auf Problem beim Indexieren einer Domain hin.

![SE iPlug Instanzen - Management](../images/iplug_se_management.png "SE iPlug Instanzen - Management")

<figcaption class="figcaption">SE iPlug Instanzen - Management</figcaption>


#### Instanzen - Konfiguration Nutch

Nutch Konfigurationswerte können hier komfortable geändert werden. Die Änderungen werden sofort gespeichert und werden sofort beim nä. Schritt des Indexierungsablaufs angewendet!

![SE iPlug Instanzen - Nutch Konfiguration](../images/iplug_se_config_nutch.png "SE iPlug Instanzen - Nutch Konfiguration")

<figcaption class="figcaption">SE iPlug Instanzen - Nutch Konfiguration</figcaption>


Die Anzahl der einstellbaren Parameter ist sehr groß. Daher werden hier nur ausgewählte Parameter sowie sinnvolle Szenarien dokumentiert.

**Allgemeine Parameter**

Diese allgemeinen Parameter gelten für alle Szenarien und sollten bei der Einrichtung von der Webseiten Indexierung beachtet werden.

| Eigenschaft | Wert | Erläuterung |
| === | === | === |
| http.agent.url | +http://www.portalu.de | URL mit der sich der Crawler bei den Webseiten präsentiert. |
| http.agent.email | crawler@portalu.de | Email mit der sich der Crawler bei den Webseiten präsentiert. |
| http.proxy.host | | Der Proxy Server, falls der Zugriff auf die Webseiten über einen Proxy Server erfolgt. Wenn leer, wird kein Proxy verwendet. |
| fetcher.server.delay | 2.0 | Pause zwischen Requests auf den gleichen Server. Dieser Wert kann durch die robots.txt des Servers überschrieben werden. |
| fetcher.max.crawl.delay | -1 | Max. Pause zwischen Requests auf den gleichen Server. Wenn der Wert in der robots.txt ist größer als dieser Wert ist, wird der Server ignoriert. <b><b>**Achtung:** Ein hoher Wert in der robots.txt kann bedeuten, dass das Laden der URLs von dem Server sehr lange dauert. Bitte über *URL Testen* in der Url Pflege testen. |


**Adaptiver Indexierungsablauf (Default)**

Für jede geänderte Seite wird der Zeitpunkt der erneuten Überprüfung adaptiv berechnet. Seiten, die sich oft ändern werden dadurch automatisch öfter überprüft, Seiten, die sich wenig ändern werden weniger oft überprüft.

| Eigenschaft | Wert | Erläuterung |
| === | === | === |
| db.fetch.schedule.class | org.apache.nutch.crawl.AdaptiveFetchSchedule | Berechnet das Fetch Intervall in Abhängigkeit von der Änderungsrate |
| db.fetch.interval.default | 86400 | Default Fetch Intervall in sec. Dies entspricht 24h und wird für alle neuen URLs verwendet. Dies gilt auch für URLS mit dem Status `db_gone`.|
| db.fetch.interval.max | 7776000 | Max. Fetch Intervall in sec. Dies entspricht 9 Tage, d.h. alle Seiten werden mind. alle 9 Tage zur Überprüfung ausgewählt. |
| db.fetch.schedule.adaptive.min_interval | 60 | Min. Fetch Intervall in sec. Seiten die sich sehr oft ändern werden alle 60 sec zur Überprüfung ausgewählt. Da der Indexierungsvorgang i.d.R länger dauert, werden sich oft ändernde URLs in jedem Durchlauf zur Überprüfung vorgesehen. |
| db.fetch.schedule.adaptive.max_interval | 31536000 | Max. Fetch Intervall für den adaptiven Prozess. Ist auf `db.fetch.interval.max` überschrieben. |


**Nicht-Adaptiver Indexierungsablauf**

Alle URLs bekommen das gleiche Fetch Intervall zugewiesen. Diese Konfiguration kann angewendet werden, wenn immer alle URLs, unabhängig von deren Änderungsrate, überprüft werden sollen.

| Eigenschaft | Wert | Erläuterung |
| === | === | === |
| db.fetch.schedule.class | org.apache.nutch.crawl.DefaultFetchSchedule | Das Fetchintervall für URLs entspricht immer dem Wert `db.fetch.interval.default`. |
| db.fetch.interval.default | 86400 | Default Fetch Intervall in sec. Dies entspricht 24h und wird für alle URLs verwendet. |
| db.fetch.interval.max | 7776000 | Max. Fetch Intervall in sec. Dies entspricht 9 Tage. Dies gilt hier nur für URLS mit dem Status `db_gone`. |


**Indexierung einzelner URLs (z.B. Katalog Crawl)**

Es werden nur die Start-URls indexiert.

| Eigenschaft | Wert | Erläuterung |
| === | === | === |
| db.fetch.schedule.class | org.apache.nutch.crawl.DefaultFetchSchedule | Das Fetchintervall für URLs entspricht immer dem Wert `db.fetch.interval.default`. |
| db.fetch.interval.default | 3600 | Default Fetch Intervall in sec. Dies entspricht 1h und wird für alle URLs verwendet. |
| db.fetch.interval.max | 7776000 | Max. Fetch Intervall in sec. Dies entspricht 9 Tage. Dies gilt hier nur für URLS mit dem Status `db_gone`. |
| db.max.outlinks.per.page | 0 | Es werden keine Outlinks aus den Webseiten extrahiert. Die Verlinkungen der Seiten werden dadurch nicht verfolgt. |

#### Instanzen - Konfiguration Metadaten


> **Achtung, bitte vorsichtig sein!**

Dieser Bereich erlaubt die Konfiguration der Metadaten innerhalb einer Instanz. Die Definition der Metadaten erfolgt im JSON Format.

![SE iPlug Instanzen - Metadaten Konfiguration](../images/iplug_se_config_metadata.png "SE iPlug Instanzen - Metadaten Konfiguration")

<figcaption class="figcaption">SE iPlug Instanzen - Metadaten Konfiguration</figcaption>


Jedes Metadatum ist durch folgende Eigenschafte definiert.

| Eigenschaft | Erläuterung |
| === | === |
| id | Die ID des Metadatums. Dieser Wert wird auch als Name des Indexfeldes bei der Indexierung verwendet. |
| label | Beschriftung des Metadatums in der Oberfläche. |
| type | Element-Typ des Metadatums in der Oberfläche <br><br>`select` - Selectbox (default)<br>`grouped` - Selectbox mit Gruppierung  |
| isMultiple: true | Mehrfachauswahl in Select Boxen ist möglich. |
| children | Enthält den Wertebereich des Metadatums |

Jeder Wert kann über folgende Eigenschaften beschrieben werden:

| Eigenschaft | Erläuterung |
| === | === |
| id | Der Wert des Metadatum Wertes. Dieser Wert wird bei der Indexierung verwendet. Wird bei Gruppenüberschriften (`type=grouped`) nicht angegeben. |
| label | Beschriftung des Wertes in der Oberfläche. Bei `type=grouped` wird der Wert als Gruppenüberschrift verwendet. |
| children | Nur bei `type=grouped`. Enthält den Wertebereich einer Gruppe mit den Eigenschaften `id` und `label`. |


#### Instanzen - Zeitplanung

Hier kann die regelmäßige Ausführung des Indexierungslaufes eingestellt werden.

![SE iPlug Instanzen - Zeitplanung](../images/iplug_se_scheduling.png "SE iPlug Instanzen - Zeitplanung")

<figcaption class="figcaption">SE iPlug Instanzen - Zeitplanung</figcaption>

Die Zeitsteuerung kann über unterschiedliche Weise eingestellt werden. Die Verwendung von [CRON Mustern](https://de.wikipedia.org/wiki/Cron) ist möglich.

*Crawl Tiefe* steht dabei für die Anzahl der Segmente. Hier sollte in der Regel immer 1 ausgewählt werden.

*Seiten pro Segment* definiert wie viele Seiten maximal pro Segment selektiert werden sollen.


#### Instanzen - Suche

Hier kann der Index der Instanz getestet werden. Diese Suche funktioniert, selbst wenn die Instanz noch nicht zur Suche freigegeben wurde.

![SE iPlug Instanzen - Suche](../images/iplug_se_search.png "SE iPlug Instanzen - Suche")

<figcaption class="figcaption">SE iPlug Instanzen - Suche</figcaption>




## FAQ

### Ein URL Raum wird nicht indexiert, die Start URL hat einen Redirect Status.

Es kann sein, dass die URL zu der weitergeleitet wird, nicht mehr Teil des definierten URL Raumes ist. Bitte die URL im Browser aufrufen und den URL Raum auf Basis der Weiterleitungs-URL neu erstellen.

### Wie wird der Score der Suchergebnisse ermittelt?

Die Ermittlung des Scores hängt von vielen Faktoren ab. ElasticSearch bietet die Möglichkeit, die [Scorebildung zu erläutern](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-explain.html).


### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Falsche Datenbank Verbindungsparameter 
* Keine Verbindung zum iBus
* iPlug Management funktioniert nicht

Bitte analysieren Sie das log file des iPlugs.

Sie müssen nach einer Änderung der Konfiguration das iPlug neu starten

