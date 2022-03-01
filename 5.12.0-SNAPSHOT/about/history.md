---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.11.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)

## Version 5.12.0

Release TT.MM.JJJJ

### Hinweise für die Aktualisierung

#### Hinzufügen des neuen errorPatterns in den Konfigurationsdateien (Antivirus Scan)
Es gibt ein neues errorPattern für die Erkennung von Fehlern, die während des Virusscans auftreten, aber keine Exception werfen (z.B. fehlerhafter Zugriff auf Dateien).
Das neue errorPattern muss in der Properties des VirusScanValidators aufgenommen werden. Die Properties befinden sich normalerweise in der `mdek.override.properties`-Datei.

Beispiel:
  ```
  "virusscan":{
      "impl":"de.ingrid.mdek.upload.storage.validate.impl.VirusScanValidator",
      "properties":{
          "command":"\\\\path\\\\to\\\\sophos\\\\savscan -f -all -archive -mime %FILE%",
          "virusPattern":"(?m)^>>> Virus '([^']+)' found in file (.+)$",
          "cleanPattern":"(?m)^No viruses were discovered.$",
          "errorPattern":"(?m)^\\d* error(s\\b|\\b) ((\\was\\b)|(\\were\\b)) encountered.$"\,
          "timeout": "60"
      }
  }
  ```

### Kritische Änderung

...

### Wichtige Änderungen

...

### Liste der Änderungen

- [Feature] [PORTAL] Verbesserung des Fehlerbenachrichtigung des Virusscans ([REDMINE-1797](https://redmine.informationgrid.eu/issues/1797))

