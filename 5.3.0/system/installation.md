---
layout: default
title: Installation
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeine Hinweise

Für die Installation sollte ein eigener Benutzer (ingrid) angelegt werden. Wird ein abweichender Benutzername verwendet muss dieser in der Systemvariable "INGRID_USER" hinterlegt werden.

Die Installation erfolgt über graphische Installer. Auf GUI-losen Systemen (Linux Server) werden die Installer im Text-Modus ausgeführt. Das folgende Bild zeigt eine Gegenüberstellung von Text-Modus und GUI Modus.

![Gegenüberstellung Installationsmodus Text und GUI](../images/ingrid_installation_gui_text.png "Gegenüberstellung Installationsmodus Text und GUI")

Die Installer bieten die Möglichkeit, Einstellungen aus vorhergehenden Installationen zu übernehmen.
Wenn mehrere Installer aus dem selben Verzeichnis heraus aufgerufen werden, sollte diese Möglichkeit verneint werden, da es ansonsten zu Konflikten zwischen den verschiedenenn Komponenten kommen kann.

Bei der Installation ist auf die nötigen Schreibrechte für die Installationsverzeichnisse zu achten.

Viele Komponenten besitzen eine Administrations GUI, über die die Komponente konfiguriert werden kann. Das InGrid System lässt sich sowohl unter Linux, als auch unter Windows installieren.

Vor einer Installation müssen folgende Fragen beantwortet werden:

### Welche Komponenten sollen installiert werden?

Eine Basis Installation enthält mind. folgende Komponenten:

- [Elasticsearch](../components/elasticsearch.html)
- [iBus](../components/ibus.html)
- [Portal](../components/portal.html)
- [iPlug IGE / InGrid Catalog](../components/iplug_ige.html)
- [Codelist Repository](../components/codelist_repository.html)

Genauere Informationen zur Installation der einzelnen Komponenten können bei der Dokumentation der einzelnen Komponenten eingesehen werden.


### Welche Datenbank wird verwendet?

InGrid unterstützt MySQL, Oracle und PostgreSQL (ab InGrid 4.0.2). Der Einsatz von MySQL oder PostgreSQL ist dabei vorzuziehen, da hier der Installer die Datenbank initial erzeugen und initialisieren kann (Portal und IGE iPlug).

Genauere Informationen können bei der Dokumentation der einzelnen Komponenten eingesehen werden.

### Welche Portal Features sollen installiert werden?

Das Portal wird mit einem optionalen INSPIRE kompatiblen Metadateneditor (IGE - InGrid Editor) ausgeliefert, der die Installation von weiteren Komponenten (IGE iPlug) erforderlich macht. Die Installation des Editiors ist optional.

### Welches Betriebssystem kommt zum Einsatz?

Die empfohlene Plattform ist Linux (Ubuntu/Redhat).

Das System kann auch unter Windows installiert werden. Dies macht jedoch die Installation von CYGWIN erforderlich.

## Systemvoraussetzungen

- JAVA 8 JDK (z.B. OpenJDK)
- Cygwin (unter Windows)
- MySQL, ORACLE oder PostgreSQL (ab InGrid 4.0.2)

### Basisinstallation

Diese Konfiguration wird nur für einfache Systeme ohne hohe Last oder zum Testen empfohlen.

- Dual Core CPU
- 4 GB RAM
- 10 GB Plattenplatz

### Typische Installation

- Quad Core CPU
- 8 GB RAM
- 100 GB Plattenplatz

Beim Einsatz von der Suchmaschine (iPlug-SE) können durch den Crawl Prozess große Datenmengen anfallen. Die Festplattengröße ist entsprechend zu wählen.




