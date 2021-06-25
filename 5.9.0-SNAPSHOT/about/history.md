---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.9.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.9.0

Release xx.xx.2021

### Hinweise für die Aktualisierung

Für InGrid-Installationen, muss in den IGE-iPlugs die Konfigurationsdatei angepasst werden,
um die hochgeladenen Vorschaubilder als absolute URLs in dem exportierten ISO-Dokument mit auszugeben.
Hierfür ist folgendes notwendig:

Anpassung der `config.override.properties` Datei:
```properties
# Beispiel für die Metaver-Installation mit direkter Base-URL
document.store.base.url=https://metaver.de/ingrid-portal-mdek-application/rest/document/

# oder über eine zusätzlich im Apache eingerichtete Weiterleitung
document.store.base.url=https://metaver.de/documents/
```

In der `docker-compose.yml` muss das Upload-Verzeichnis herausgemappt werden, um einen Datenverlust zu vermeiden:
```
...
  volumes:
    - ./portal/upload:/tmp/ingrid/upload
```

Zusätzlich kann die Apache-Konfiguration angepasst werden, um den verbesserten Pfad `documents` zu unterstützen:
```
RewriteCond %{REQUEST_URI} !^/documents
...
RewriteRule ^/(.*) /ingrid-portal/$1?lang=de&%{QUERY_STRING} [PT,NC]

# map files
<Directory "<path-to-docker-setup>/portal/upload/documents">
  AllowOverride All
  Options FollowSymlinks
  Satisfy Any
  Require all granted
</Directory>

Alias /documents "<path-to-docker-setup>/portal/upload/documents"
```

Schließlich sollte sichergestellt werden, dass Lese- und Schreibzugriffe auf dem gemappten Verzeichnis
funktionieren.

### Wichtige Änderung

#### Hochladen von Vorschaubildern

Vorschaubilder können jetzt hochgeladen und somit auf dem Server abgelegt werden. Weiterhin ist es auch möglich einen Link
zu einer Bilddatei anzugeben.

### Liste der Änderungen

### Komponenten

