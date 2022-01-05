---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 5.10.x. Release Notes älterer Versionen können hier eingesehen werden:
[5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html), [4.6.x](/4.6.0/about/history.html), [4.5.x](/4.5.0/about/history.html)

## Version 5.11.0

Release xx.xx.xxxx

### Hinweise für die Aktualisierung

#### Anpassung der DB-URLs

Mit der Aktualisierung der MySQL Datenbank werden viele Warnungen im Log angezeigt:

> WARN: Establishing SSL connection without server's identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.

Um diese zu vermeiden, müssen alle DB-URLs mit dem Parameter "useSSL=false" ergänzt werden. Daraus ergibt sich bspw. folgender Eintrag in einer config.override.properties-Datei eines IGE-iPlugs:

`iplug.database.url=jdbc\:mysql\://mysql\:3306/igc_test?useSSL=false`

Folgende Orte müssen überprüft werden, insofern diese überschrieben werden:
* config.override.properties (iPlug-IGE)
* default-datasource.properties (Portal -> MDEK-Application)
* Umgebungsvariablen in docker-compose.yml
    * DB_URL_PORTAL
    * DB_URL_MDEK

#### Anpassung des SQL-Modus

Seit MySQL Version 5.7.5 wird der SQL-Modus "ONLY_FULL_GROUP_BY" standardmäßig aktiviert. Dies kann zu Problemen führen,
insbesondere wenn HQL-Queries ausgeführt werden. Um diesen Modus wieder zu entfernen, muss im docker-compose.yml der
command-Befehl mit dem Parameter `sql-mode` ergänzt werden.

Beispiel:
```
mysql:
    image: mysql:5.7
    command: docker-entrypoint.sh mysqld --character-set-server=utf8 --lower-case-table-names=1 --collation-server=utf8_unicode_ci --sql_mode="STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION"
```

### Wichtige Änderungen

### Kritische Änderungen

Die Opendata Kategorien wurden an den GovData Standard angepasst. Da hiefrür eine Migration nötig ist, müssen das Portal, Ige-iPlug und Codelist-repository gemeinsam aktualisiert werden.

### Liste der Änderungen
