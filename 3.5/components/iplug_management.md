---
layout: default
title: iPlug Management
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Das Management-iPlug dient als Schnittstelle zwischen den Komponenten des Systems (iBus, iPlugs) und der Portal-Datenbank. In der Datenbank liegen Informationen, die von den iPlugs und deren Administrationsschnittstellen genutzt werden, z.B.:

- Informationen über Partner/Anbieter
- CodeListen
- Anmeldeinformationen

<div class="mxgraph" style="position:relative;overflow:hidden;width:692px;height:241px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">5Vrfb6M4EP5r8tgIML/y2DRt9+52peq6Uu+eTk7sEF8BI0PaZv/6HcM4gZhtu1dIu7okUmBw7OGbmW/GQybkInu6VrTYfJGMpxPPYU8Tsph4nusTH760ZNdI4ihsBIkSDAcdBLfiG0ehg9KtYLzsDKykTCtRdIUrmed8VXVka5l2lyhoYqY/CG5XNLWld4JVG5S64exw4RMXyQbXiT28mbLamTkYX9NtWp3VIrimL2fUzIV39eQ0px7BmXcocGP8SUHzjk7fpMw6AsXLA1h4vwL1wlWWUjGuOiLOzJhNVWkIzyfeFXyYEg98yhR9nApZi8i1M3ec27//WF+W8ec7Sq7uPv/FtvTu3qP/Js1sqcjv22Ygl+AKSkpYQh9lTxc81e5gLB2uqR+T1cqPfNf3o9lZo9XVa4fv7aN4jrfxs1N6UUjdMAxZQKmzYmdxM+UDTbcIpmXRckMLfViKPEn5uVLycULmjxtR8duCrvSlR3B+kG2qLIUzFw53sG49TsIQUWnvD9AGD1xV3ATIK+7oAC1EGZcZr9RO+1AznJgIwwAjXtScPx48OEY33bR8l6A2FA2Y7Gc+wAcHiGA/mutoTRw/mM0op9HKR+zbYIr5trQAVXKbM67n0Ei9AKTSA0dH0TeRjCi6MbFQDAzSbRjDEWBEVVowfqE5UE+m7w5+dpNuIQDDFFSYLxUcJfrobTAXW1XAD08ALXExxFrQuoafhobWinfbRX8Y76sd8FtNoB8m2L3oKNjdHjfFZUaH0nbTG6kqCr85ds0FreiSluBeLzotgKXlLXDLSsl7fiFTqVNZLnMYOV+LND0S0VQkOmeuANzaaBp6Acn9HC9kgjG9TK81JYxe10ZcbGAchx+gckNbEOcwFuwjGkxKbQv6Y1iQ4NrPRUMCNFL8EAksu+jSDEc134BQFARdhBybL0J3GkRx6IYkgCVdL+xJcIEznTmtN2r8FgA9Erh0CUUb5zFbsr6EZ0LgLVzcYZE9u4zhjMarnsl6o1GzBSbez2uomckteJwpxZhQ4INC6iAv5VZr/nEYO+4ythfY5RnpYWyjzaAIoyothH9fzGGaFzl4eG59t/rYi2wD9BEuQe8b1ADIbO0CuSnmBijdxodyv3ffMzOet6CMcEM7OlugFW0oR6mLxwc3Mjv/58BF/xkdXDRiC9zf8mvdsNEZP8u2OcR+Tbj/paAbnkzWMq9MNQidC6d+abVq9Uc3XeB1KxbYKdpp1EGHHbqos9OoTTLj5dETIewfVc0A+ftlUdfe+PzyAMfORwLY5vZfH+BZN3e+L8B21/NCd+5FqftLf/JClqKSepFhk2mieM3X43fz0IMQbN8Q7fvsa+xsOkyPWcmqycJkcTbT+e5k+IZHtUqMDtWuqXvgHaLnbMFr7NiC99PXrzfvUoicygCBmXZvANvBezc1oxjgJzbuIqsfwbWtYED/TJc8vdHM07j0UlaVfuZlWaWSGv56pvOyaB76ae/HuRfdJ1srlpOpgD7Vum7mTqF+1c+7oCMJX1oOzyeuMvHEoR3Gzowg0E3qq0LJRNEs4+ofCDHXi6dFnpzAvKHZfO73Aj171p6NlpENa17UZUz6csF/Txg94VEP1uuhr55nPeNEj92DPWeZgK3V/6wzbjl9OFpnHE4PT6nra61/L5DL7w==</div></div>


## Systemvoraussetzungen

* 64 MB RAM
* 1 GB Harddrive

* JAVA 1.6
* Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-iplug-management-VERSION-installer.jar
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

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-iplug-management/) herunterladen.

iPlug stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-iplug-management <BACKUP-DIRECTORY>
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-iplug-management-NEW-VERSION-installer.jar
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


### Datenbank-Konfiguration

In der Datei `conf/repository_database.xml` werden die Parameter der Portal-Datenbank angegeben. Der Konfiguration über den Installer unterstützt ausschließlich MySQL Datenbanken. Wenn Sie keine MySQL Datenbank als Portaldatenbank verwenden, müssen Sie diese Datei manuell anpassen.

Die Anpassungen müssen im folgenden Abschnitt vorgenommen werden:

{% highlight xml %}
<jdbc-connection-descriptor
	   jcd-alias="databaseMySQL"
	   default-connection="true"
	   platform="MySQL"
	   jdbc-level="2.0"
	   driver="com.mysql.jdbc.Driver"
	   protocol="jdbc"
	   subprotocol="mysql"
	   dbalias="//localhost/ingrid-portal"
	   username="dbUsername"
	   password="dbPassword"
	   useAutoCommit="1"
>
 {% endhighlight %}

Die Konfiguration ist hier für eine MYSQL-Datenbank wiedergegeben worden. Wenn eine andere Datenbank eingesetzt werden soll, muss der JDBC-Treiber in das /lib Verzeichnis kopiert und die Konfiguration angepasst werden. 

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


## Schnittstellen



### authenticate

Diese Schnittstellenmethode erlaubt es, den iBus-Benutzer in der Portal-Datenbank zu authentifizieren und dessen Berechtigungen zu "erfahren". Anwendung findet diese Methode z.B. in der Administrationsoberfläche des iPlug-SE, da hier verschiedene Möglichkeiten der Administration in Abhängigkeit von Benutzerrechten und zugeordneten Partnern/Anbietern dargestellt werden müssen.

**Schnittstellenaufruf:**

|Query-Parameter | Wert | Beschreibung|
| == | == | == |
|digest | | kodiertes oder unkodiertes Passwort des Benutzers|
|datatype | "management" | stellt sicher, dass das Management-iPlug angesprochen wird
management_request_type | "0" | Identifiziert die Schnittstellenmethode (authenticate)|
|login | | Name des Benutzers|

**QueryString:** 

`datatype:management login:<user_name> digest:<codiertes oder uncodiertes passwort des Benutzers> management_request_type:0`

**Ergebnisse:** 

Für jede Berechtigung (Permission) des Benutzers wird ein Ingrid-Hit erzeugt und zurückgegeben. Innerhalb des Hits sind folgende Eigenschaften definiert:

|Eigenschaft | Typ | Beschreibung |
| == | == | == |
|provider | String[] | Liste mit Anbieter-Kürzeln, für die diese Berechtigung zutrifft|
|authenticated | Boolean | true, wenn Benutzer über user_name und digest authentifiziert werden konnte|
|permission | String | Name der Berechtigung, z.B. admin.portal.partner.provider.index|
|partner | String[] | Liste mit Partner-Kürzeln, für die diese Berechtigung zutrifft|



### getPartner

Diese Schnittstellenmethode gibt eine zentral in der Datenbank administrierte Liste aller Partner und deren Anbieter zurück.

**Schnittstellenaufruf:**

|Query-Parameter | Wert | Beschreibung|
| == | == | == |
|datatype | "management" | stellt sicher, dass das Management-iPlug angesprochen wird
management_request_type | "1" | Identifiziert die Schnittstellenmethode (getPartner)|


**QueryString:**

`datatype:management management_request_type:1`

**Ergebnisse:**

Die Liste der Partner und deren Anbieter können über folgende Struktur (unter Eigenschaft `partner` im Suchergebnis) ermittelt werden:


{% highlight text %}
{ partner: [
	{ partnerid="bund", 
	name="Bund", 
	providers= [ 
		{ providerid="bu_bfn", name="Name des Providers", url="URL des providers"} , 
		{providerid="bu_bfn", name="Name des Providers", url="URL des providers"}
	]},
	{ partnerid="ni", 
	name="Niedersachsen", 
	providers= [ 
		{ providerid="bu_bfn", name="Name des Providers", url="URL des providers"} , 
		{providerid="bu_bfn", name="Name des Providers", url="URL des providers"}
	]}
  ]
}
{% endhighlight %}

### getProvidersAsList

Diese Schnittstellenmethode gibt eine zentral in der Datenbank administrierte Liste der Anbieter zurück.

**Schnittstellenaufruf:**

|Query-Parameter | Wert | Beschreibung|
| == | == | == |
|datatype | "management" | stellt sicher, dass das Management-iPlug angesprochen wird
management_request_type | "2" | Identifiziert die Schnittstellenmethode (getProvidersAsList)|

**QueryString:**

`datatype:management management_request_type:2`

**Ergebnisse:**

Die Liste der Anbieterkann über folgende Struktur (unter Eigenschaft `provider` im Suchergebnis) ermittelt werden:


Die Liste der Anbieter wird über die folgende Abfrage erstellt:

{% highlight text %}
{ provider: [
		{ providerid="bu_bfn", name="Name des Providers", url="URL des providers"} , 
		{providerid="bu_bfn", name="Name des Providers", url="URL des providers"}
	]
}
{% endhighlight %}


### getCodelists

Anfrage des Codelist-Repositories und Lieferung aller Codelisten ab einem gesetzten Zeitstempel.

**Schnittstellenaufruf:**

|Query-Parameter | Wert | Beschreibung|
| == | == | == |
|datatype | "management" | stellt sicher, dass das Management-iPlug angesprochen wird|
|management_request_type | "3" | Identifiziert die Schnittstellenmethode (getCodelists)|
|lastModified | long | der Zeitstempel, um ältere Codelisten zu ignorieren|



## FAQ

### Die iPlug Administration funktioniert nicht, es können keine Partner/Anbieter ausgewählt werden.


Mögliche Ursachen:

* Keine Datenbankverbindung
* Falsche Datenbank Verbindungsparameter 
* Keine Verbindung zum iBus
* Sie versuchen sich mit einem Benutzer anzumelden, der keine entsprechenden Rechte besitzt. Bitte richten Sie im Portal einen Benutzer mit den Rechten portal-admin ein! 

Bitte analysieren Sie das log file des iPlugs.

Sie müssen nach einer Änderung der Konfiguration das iPlug neu starten
