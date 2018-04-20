---
layout: default
sitemap: false
title: Upgrade Server
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Der Upgrade-Server dient der Überwachung von versionierten Komponenten (Programmen).

Seine Aufgabe ist es ein konfiguriertes Verzeichnis zu beobachten und auf Veränderungen zu achten, indem dieses periodisch und rekursiv nach Komponenten durchsucht wird.

Dabei werden die Metainformationen (wie z.B. Versionsnummer oder Komponententyp) erfasst, indexiert und als Service in der Form eines Atom-Feeds zur Verfügung gestellt.

Berücksichtigt werden hierbei nur Archive, welche auf ".jar" oder ".zip" enden und eine sich selbst beschreibende Datei beinhalten (welche sich im Archiv unter "META-INF/MANIFEST.MF" befinden muss). 

Anwendung findet der Upgrade Server z.B. im Portal integrierten [Upgrade Client](portal.html#upgrade-client), der die Versionen einer InGrid Installation automatisch auf Aktualisierungen hin überwacht.


<div class="mxgraph" style="position:relative;overflow:hidden;width:329px;height:228px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">zVfvj5s4EP1r8pEIMOHHx+x2s3e69lpdelfdfXOwAWsNRsbZ7Pav7xjGCSw5bSolUqVIgWczxu/NvDELcl+/PGraVp8U43IR+uxlQT4swjCISAR/FnkdkDSJB6DUguGkE7AV3zmCPqJ7wXg3mWiUkka0UzBXTcNzM8EKJadLtLR04U/ANqdyjn4TzFSIBnF2GviNi7LCddIQN9OZVxeD8YLupfF6CMbscE1dLNzViz/chgFGfkUgSPGRljaTd/quVD0BNO9OZOF+Bb4XrrJTmnE9gThzcypjLIXrRbiBH9PimS+ZpoelUD1EHv0739/++0fx0KUfv+Wkuvvr63+f/3z6R279pyGaFM3TWAbyAKmglYIl7FX9cs+lTQendFzQKCV5HiVREEVJ5g1vtbl0+lEfzRvcxk+GDMkqoLuQZJynbMcinO4/U7lHMr8obSg8E0tY4m6n4aq0V3+3paaMw+R7Kez6sxmzXNBq3zBulw5g+FAJw7ctze3oAcoFsMrUEocVjAhjy2QFyXD3Ci+uDhdsGEl55tpwV3ZHMaAuuaq50a8265ADlwxYkkFKhvvDKOfdnGqU7jFiFDUvj6FPjMMFkn6hAEE6U+DE9JZr2Ne1mS4151BdGOW65EbOEn4NctFeRuTOqOsq2trLTjSl5GutIevepVArQ41Q1qO8zKbrwOktCI3xESQ0jLGjjAiFgpnxSa7AZ8xAviLJsjTLAj8+5xZXpzNIb1v9JEL+XIJmWIAjPpPVbfgMiyQOw3y1i5MkTQIP2buETlH3vXtMmt2zgOb9ke64/KI6gQzulDG2WR4nrKUo7YBRlvY+0rprh9OCJRtjf5i2xJw10VLAuaIQYC16mUNMaJTUUPizeAf/XU2l9BqvkBQawiYEbjf22MG111eEF4Tpsm3Kt/5+XrRLtP7/QllNnYe4I9RIWGcyVzeeN8Ki542E/b15tAc+OAiKzmix2/dizYx94O4CwwfiLD5KBwirnvi9ksoeeRrV2HQphJRvIIrZkAPR9nQ0S5NaMGaXOVu0CmYXtjQhXWDeqI9cWU0ytT2SzNUMnMJjOaMbyImOMZJz/fXzpws0uT7XaIxnlT2bAWAgrA/RdylJO8vLTQqQxMm0U7mY73Qqd2K4pmJo4L+sswbvOit8M3EtqPQYfxaQFWCuwN2G5jnvOs+Imh+99QZarvw3pw7XEsfld6ZLOuwntITb0ydTPzb6lCYPPwA=</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 20 MB Harddrive

* JAVA 1.6
* Cygwin (unter Windows)


## Installation

Download: [https://distributions.informationgrid.eu/ingrid-server-upgrade/](https://distributions.informationgrid.eu/ingrid-server-upgrade/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-server-upgrade-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponente im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten. 

Die Codelist-Repository-Administration wird im Webbrowser unter der folgenden Adresse 

{% highlight text %}
http://localhost:IHR_ADMIN_PORT/admin
{% endhighlight %}

gestartet. Anstelle von localhost können Sie auch die IP-Adresse des Computers eingeben! Authentifizieren Sie sich als `admin` mit dem von Ihnen vergebenen Passwort. 

Ist der Upgrade-Server gestartet beginnt dieser das bei der Installation angegebene Verzeichnis periodisch zu untersuchen.

Jegliche Informationen die dabei gefunden werden, können über den Web-Service des Upgrade-Servers eingesehen werden. 


## Aktualisierung

Neues Release von [https://distributions.informationgrid.eu/ingrid-server-upgrade/](https://distributions.informationgrid.eu/ingrid-server-upgrade/) herunterladen.

Komponente stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-server-upgrade <BACKUP-DIRECTORY>
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-server-upgrade-NEW-VERSION-installer.jar
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

## ATOM Feed

Der Atom-Feed ist lokal über 

{% highlight text %}
http://localhost:PORT/upgrader
{% endhighlight %}

erreichbar sein (`PORT` steht dabei für den während der Installation definierten Port). 

Der Feed stellt alle Informationen bereit, die gefunden werden konnten. Dabei entspricht immer ein Eintrag genau eine Komponente.

Durch ein Klick auf den Namen der Komponente, lässt sich diese über die generierte URL downloaden. Hierfür ist es wichtig, dass die interne Umleitung und die bei der Installation angegebene Externe URL richtig konfiguriert wurden.

Drückt man auf den Link `more details` unterhalb der Komponente, werden alle Informationen die über diese gesammelt werden konnten angezeigt. Die Detail-Ansicht kann sich von Komponente zu Komponente unterscheiden. Sie enthält alle Einträge der Datei "META-INF/MANIFEST.MF", die sich innerhalb des Archivs befindet. 



## FAQ

### Werden auch Unterverzeichnisse des Scanverzeichnises untersucht?

Ja.

### Wie kann man das Scan-/Distributionsverzeichnis ändern?

Bei der Installation kann das Scanverzeichnis direkt angegeben werden, in dem nach Komponenten gesucht werden soll. Soll das Scanverzeichnis geändert werden, so kann man die Installation erneut ausführen und dort das neue Scanverzeichnis angeben. 
Alternativ kann das Startscript angepasst werden. Dazu wird die Variable `INGRID_OPTS` in der Datei `start.sh` angepasst. In der Start-Variable `source` ist das Scanverzeichnis definiert.

{% highlight text %}
-Dsource=/opt/...
{% endhighlight %}

Nach einem Neustart des Upgrade Servers wird das geänderte Verzeichnis neu indexiert und als Feed angeboten.

### Wie kann der Zugang geschützt werden?

Der Update Server kann mit einem Login versehen werden. Dazu muss die Datei `web.xml` angepasst werden.

Die Zugangsdaten werden in der Datei `/jetty/etc/realm.properties` hinterlegt.

{% highlight properties %}
ingrid: MD5:f472032ec7c61b0d8754edd7b7de3cc4,user
Tiga: MD5:07fce7402aaf95f0d2879a96602dbf35,user
{% endhighlight %}


Die Authentifizierung muss in der Datei web.xml konfiguriert werden.

{% highlight xml %}
<security-constraint>
  <web-resource-collection>
    <web-resource-name>Access</web-resource-name>
    <!--<url-pattern>/NOSECURITY/*</url-pattern>-->
    <url-pattern>/*</url-pattern> 
  </web-resource-collection>

  <auth-constraint>
    <role-name>user</role-name>
  </auth-constraint>
</security-constraint>
{% endhighlight %}


Im Portal läuft ein Überwachungsjob, mit welchem auf die neuesten Softwareversionen der Komponenten geprüft wird (Update Client). Hier werden die Konfigurations-Paramter in den `ingrid-portal-apps.properties` über die Einträge `upgrade.server.username` und `upgrade.server.password` benutzt, welche dann für den Login beim Update-Server genommen werden:

{% highlight properties %}
# the url to the Upgrade-Server which holds new distributions
upgrade.server.url=http://dev.informationgrid.eu/update
# login data for the Upgrade-Server; leave empty if none needed
upgrade.server.username=Tiga
upgrade.server.password=#####
{% endhighlight %}

Werden diese Felder leer gelassen, so wird kein Login-Mechanismus verwendet! 

### Wie häufig wird der Inhalt des Softwareverzeichnisses neu eingelesen?

Werden neue Versionen der Software in das Distributionsverzeichnis eingespielt, so werden die Änderungen im Webservice nicht sofort sichtbar. Die Aktualisierung erfolgt einmal in der Stunde. Der Wert kann über die Konfiguration nicht geändert werden.

> Achtung: der ATOM-Feed gibt die Änderung sofort bekannt. Im Webservice tauchen die Änderungen aber erst später auf. 