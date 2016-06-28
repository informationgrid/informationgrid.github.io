---
layout: default
sitemap: false
title: Communication Gateway
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines

Das Communication Gateway kann benutzt werden, wenn z.B. der iBus aufgrund von Firewall Einstellungen nicht direkt erreicht werden kann oder eine SSL Verbindung erwünscht ist. Das Gateway kann in verschiedenen Modi betrieben werden.

**1. Eingangsseitig ohne SSL**

Der Datenstrom des Clients ist unverschlüsselt.

**2. Eingangsseitig mit SSL**

Der Datenstrom des Clients ist verschlüsselt. Die Pakete werden dann am Gateway entschlüsselt.

**3. Ausgangsseitig ohne SSL**

Das Gateway sendet die Pakete des Clients unverschlüsselt an den iBus oder ein gegenüber liegendes Gateway weiter.

**4. Ausgangsseitig mit SSL**

Das Gateway verschlüsselt die Pakete des Clients und sendet diese an das nächste Gateway weiter.

Wird das Gateway Ausgangsseitig im SSL Modus betrieben so müssen die Pakete an ein weiteres Gateway (Eingangsseitig SSL-Modus) gesendet werden, da der iBus kein SSL unterstützt.

<div class="mxgraph" style="position:relative;overflow:hidden;width:531px;height:456px;margin:30px 0"><div style="width:1px;height:1px;overflow:hidden;">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</div></div>


## Systemvoraussetzungen

- 64 MB RAM
- 20 MB Harddrive

- JAVA 1.6
- Cygwin (unter Windows)


## Installation

Download: [https://dev.informationgrid.eu/ingrid-distributions/ingrid-communication-gateway/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-communication-gateway/)

Um die Installationsroutine zu starten, doppel-klicken Sie auf das Installationsprogramm oder geben Sie folgenden Befehl auf der Kommandozeile ein:

{% highlight text %}
java -jar ingrid-communication-gateway-VERSION-installer.jar
{% endhighlight %}

Der Installer ist sowohl per graphischer Oberfläche als auch Kommandozeileneingabe ausführbar. Bitte folgen Sie den Anweisungen des Installationsprogrammes. Das Installationsprogramm installiert die Komponnete im gewünschten Verzeichnis und passt die Konfigurationsdateien an.

Sie können nun die Komponente mit

{% highlight text %}
sh start.sh start
{% endhighlight %}

starten. 

## Aktualisierung

Neues Release von [https://dev.informationgrid.eu/ingrid-distributions/ingrid-communication-gateway/](https://dev.informationgrid.eu/ingrid-distributions/ingrid-communication-gateway/) herunterladen.

Komponente stoppen.

{% highlight text %}
sh start.sh stop
{% endhighlight %}

Aktuelles Installationsverzeichnis sichern:

{% highlight text %}
cp -r /opt/ingrid/ingrid-communication-gateway <BACKUP-DIRECTORY>
{% endhighlight %}


Die Aktualisierung erfolgt über den Installer. 

{% highlight text %}
java -jar ingrid-communication-gateway-NEW-VERSION-installer.jar
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


## Konfiguration


Konfiguration

### gateway.properties.template

Diese Datei dient als Schablone für die eigentliche Konfigurationsdatei gateway.properties.

### gateway.properties

| Parameter | Erläuterung |
| == | == |
| ServerPort | Der Port auf dem das Gateway Verbindungen entgegennimmt. |
| TargetIp | An diese IP (iBus oder weiteres Gateway) werden die Kommunikationspakete der Eingehenden Verbindungen weitergereicht. |
| TargetPort | An diesen Port (iBus oder weiteres Gateway) werden die Kommunikationspakete der Eingehenden Verbindungen weitergereicht. |
|  SslInput | true\|false - Bei true werden verschlüsselte Daten als Input erwartet. Bei false werden unverschlüsselte Daten als Input erwartet. |
| SslOutput | true\|false - Bei true werden die eingehenden Daten verschlüsselt weiter gesendet. Bei false werden die eingehenden Daten unverschlüsselt weitergesendet. |
| KeyStore | Pfad zum Keystore in dem der/die privaten Schlüssel gespeichert sind. Diese Schlüssel werden zur Entschlüsselung genutzt. |
| KeyStorePassword | Passwort zum lesen des Keystores. Wird die Einstellung KeyStore leer gelassen, dann werden die von Java mit ausgelieferten KeyStores verwendet. Es werden nur JavaKeystores (JKS) unterstützt. |
| TrustStore | Pfad zum Truststore. In diesem Truststore sind die Zertifikate der Kommunikationspartner gespeichert. Diese werden zum Verschlüsseln der Pakete genutzt.Wird die Einstellung TrustStore leer gelassen, dann werden die von Java mit ausgelieferten TrustStores verwendet. Es werden nur JavaKeystores (JKS) unterstützt. |
| TrustStorePassword | Passwort zum lesen des Truststores. |
| MaxConnections | Maximale Anzahl von parallel eingehenden Kommunikationspartner. |
| HttpProxyIp | Stellt ein Http-Proxy die Verbindungen zum Internet her, wird hier die IP eingetragen. |
| HttpProxyPort | Stellt ein Http-Proxy die Verbindungen zum Internet her, wird hier der Port eingetragen.Werden die beide Einstellungen HttpProxyIp und HttpProxyPort leer gelassen dann wird kein Http-Proxy genutzt. |
| HttpProxyUser | Nutzer Name für das Authentifizieren am Http-Proxy. |
| HttpProxyPassword | Password für das Authentifizieren am Http-Proxy. Werden die beide Einstellungen HttpProxyUser und HttpProxyPassword leer gelassen dann wird keine Authentifierung am Http-Proxy durchgeführt. |



## FAQ

### Server Port wurde kleiner als 1024 gewählt - es kommt zu Problemen.

Wenn der Server-Port des Communication-Gateways kleiner als 1024 gewählt wird, dann muss das Gateway unter Linux als root gestartet werden, ansonsten kommt es zu Zugriffsproblemen.

### Muss die Proxy Angabe immer ausgefüllt sein?

Der Http-Proxy darf nur ausgefüllt werden, wenn der anzuschließende iBus nicht direkt erreichbar ist (nicht im gleichen Netzwerk). Befindet sich der iBus z.B. auf dem selben Computer wie das Gateway selbst, dann muss der Http-Proxy leer sein!

