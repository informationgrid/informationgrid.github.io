---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.4.0. Release Notes älterer Versionen können hier eingesehen werden:
[7.3.x](/7.3.0/about/history.html), [7.2.x](/7.2.0/about/history.html), [7.1.x](/7.1.0/about/history.html), [7.0.x](/7.0.0/about/history.html), [6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.4.0

Release TT.MM.JJJJ

### Hinweise für die Aktualisierung

#### Keycloak

Mit der Aktualisierung von Keycloak auf die Version 26.0.5 ändert sich auch die Konfiguration. Hierzu ergeben sich die folgenden Änderungen in der `docker-compose.yml`:

* `KEYCLOAK_ADMIN` umbenennen zu `KC_BOOTSTRAP_ADMIN_USERNAME`
* `KEYCLOAK_ADMIN_PASSWORD` umbenennen zu `KC_BOOTSTRAP_ADMIN_PASSWORD`
* `KC_HOSTNAME` bekommt den Wert von `KC_HOSTNAME_URL`
* `KC_HOSTNAME_URL` und `KC_HOSTNAME_STRICT_HTTPS` entfernen
* `KC_PROXY` wird ersetzt durch die beiden Variablen `KC_PROXY_HEADERS` und `KC_HTTP_ENABLED`

Die Konfiguration sollte dann folgendermaßen aussehen:

```
  - KC_BOOTSTRAP_ADMIN_USERNAME=admin
  - KC_BOOTSTRAP_ADMIN_PASSWORD=<password>
  - KC_HTTP_RELATIVE_PATH=/keycloak
  - KC_HOSTNAME=https://<domain>/keycloak
  - KC_HTTP_ENABLED=true
  - KC_PROXY_HEADERS=xforwarded
```


### Sicherheitsrelevante Änderungen

...

### Wichtige Änderungen

### Liste der Änderungen

### Komponenten


