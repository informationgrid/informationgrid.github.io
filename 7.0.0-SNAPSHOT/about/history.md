---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.0.0. Release Notes älterer Versionen können hier eingesehen werden:
[6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.0.0

Release TT.MM.JJJJ

### Hinweise für die Aktualisierung

#### Codelist-Repository

Die Credentials für die Benutzer werden jetzt nicht mehr aus der `realm.properties` ausgelesen, sondern aus der `config.properties`. Es ist nun möglich, die Benutzerinformation über Umgebungsvariablen zu setzen.
Für die manuelle Migration müssen die Benutzer aus der `realm.properties`-Datei wie folgt übertragen werden:

* Umgebungsvariable: `CREDENTIALS_ADMIN`
  * jedes Credential ist durch ein `,` getrennt
  * Angabe eines Credentials: `username`=>`password`
  * Bsp.: ein Eintrag aus der realm.properties:
    * `admin: my-password,admin` wird überführt in `CREDENTIALS_ADMIN=admin=>my-password`
    * `admin2: MD5:032324252,admin` wird überführt in `CREDENTIALS_ADMIN=admin2=>MD5:032324252`
* Umgebungsvariable: `CREDENTIALS_USER`
  * wie bei `CREDENTIALS_ADMIN`
  * Beispiele:
    * `meier: my-password,user` wird überführt in `CREDENTIALS_USER=meier=>my-password`
    * `meier: password-meier,user` und `schmidt: password-schmidt,user` werden überführt in `CREDENTIALS_USER=meier=>password-meier,schmidt=>password-schmidt`

Die `realm.properties`-Datei wird nicht mehr benötigt und kann gelöscht werden.

#### IGE-NG

In der neuen Version müssen die folgenden Umgebungsvariablen konfiguriert werden:
* KEYCLOAK_BACKEND_USER
* KEYCLOAK_BACKEND_USER_PASSWORD

Hierfür sollte der IGE-Super-Admin Benutzer verwendet werden, der bereits in Keycloak eingerichtet wurde.
Hintergrund ist, dass die Rechte von IGE-NG Benutzern eingeschränkt werden sollen und diese keine Möglichkeit haben sollen, Keycloak Ressourcen direkt zu empfangen oder zu ändern. Stattdessen erfolgt die Kommunikation nur über das Backend, um sich bspw. Benutzer zu holen oder zu verändern.

In bestehenden Installationen muss in der Keycloak-Administration folgendes getätigt werden, um den Benutzern die Rechte zu entziehen:
* im InGrid-Realm die "Realm roles" aufrufen
* Rolle "ige-user" öffnen
  * Assoziierte Rolle `view-users` entfernen
* Rolle "ige-user-manager" öffnen
  * Assoziierte Rollen `manage-realm` und `manage-users` entfernen

In der bereitgestellten Keycloak Version `docker-registry.wemove.com/keycloak:22.0.4-2`, werden die Rollen korrekt angelegt, wenn Keycloak das erste Mal auf einem System aufgesetzt wird. Bitte nur noch Version `22.0.4-2` und größer installieren.

Zuletzt sollte überprüft werden, dass in den Keycloak-Einstellungen der Direktzugriff aktiviert ist. Dazu muss folgendes getan werden:

* im InGrid-Realm die `Clients` aufrufen
* Client `ige-ng-frontend` öffnen
* Prüfen, ob die Checkbox `Direct access grants` aktiviert ist

### Sicherheitsrelevante Änderungen

...

### Wichtige Änderungen

#### InGrid Editor Schnittstellen
InGrid Editor stellt zwei neue Schnittstellen optional bereit. Mit diesen Schnittstellen können Dokumente auch ohne GUI aktualisiert, gelöscht oder hinzugefügt werden. 

Unterstützte Schnittstellen:
- CSW-t nach ISO 19139 (2007)
  - Kann mit dem Profil `csw-t` hinzugefügt werden.
- OGC Records API
  - Kann mit dem Profil `ogc-api` hinzugefügt werden.

Eine ausführliche Dokumentation der Endpunkte ist über das **Swagger-UI** zu erreichen. Es dient als Hilfestellung für Testanfragen und gibt detailierte Auskunft über Anfrage-Parameter und Pfad-Struktur.


### Liste der Änderungen
- [Feature] OGC API Records Schnittstelle mit IGE-NG Schema ([REDMINE-5107](https://redmine.informationgrid.eu/issues/5107))



...

### Komponenten
