---
layout: history
title: News
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Diese Release Notes betreffen ausschließlich die Versionen 7.0.0. Release Notes älterer Versionen können hier eingesehen werden:
[6.3.x](/6.3.0/about/history.html), [6.2.x](/6.2.0/about/history.html), [6.1.x](/6.1.0/about/history.html), [6.0.x](/6.0.0/about/history.html), [5.14.x](/5.14.0/about/history.html), [5.13.x](/5.13.0/about/history.html), [5.12.x](/5.12.0/about/history.html), [5.11.x](/5.11.0/about/history.html), [5.10.x](/5.10.0/about/history.html), [5.9.x](/5.9.0/about/history.html), [5.8.x](/5.8.0/about/history.html), [5.7.x](/5.7.0/about/history.html), [5.6.x](/5.6.0/about/history.html), [5.5.x](/5.5.0/about/history.html), [5.4.x](/5.4.0/about/history.html), [5.3.x](/5.3.0/about/history.html), [5.2.x](/5.2.0/about/history.html), [5.1.x](/5.1.0/about/history.html), [5.0.x](/5.0.0/about/history.html)


## Version 7.0.0

Release 05.01.2024

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


## Wichtige Änderungen

### InGrid Editor

#### InGrid Editor Schnittstellen

InGrid Editor stellt zwei neue Schnittstellen optional bereit. Mit diesen Schnittstellen können Dokumente auch ohne GUI aktualisiert, gelöscht oder hinzugefügt werden. 

Unterstützte Schnittstellen:
* CSW-t nach ISO 19139 (2007)
  * Kann mit dem Profil `csw-t` hinzugefügt werden.
* OGC Records API
  * Kann mit dem Profil `ogc-api` hinzugefügt werden.

Eine ausführliche Dokumentation der Endpunkte ist über das **[Swagger-UI](https://ige-ng.informationgrid.eu/swagger-ui/index.html)** zu erreichen. Es dient als Hilfestellung für Testanfragen und gibt detailierte Auskunft über Anfrage-Parameter und Pfad-Struktur.

([REDMINE-5107](https://redmine.informationgrid.eu/issues/5107))

#### Import für alle Nutzer zugänglich machen 

Die Funktion zum importieren von Dateien in verschiedene Datensätze ist nicht mehr dem Katadmin vorbehalten. Alle Nutzer*innen können nun Dateien importieren.
([REDMINE-4857](https://redmine.informationgrid.eu/issues/4857))

#### Automatisches zuweisen zu einer Gruppe

Beim erstellen eines neuen Nutzers/einer neuen Nutzerin ist die Zuweisung zu einer Gruppe nicht mehr optional. So wird sichergestellt, dass Nutzer*innen eienr Gruppe angehören.
([REDMINE-5669](https://redmine.informationgrid.eu/issues/5669))


### InGrid

#### Hervorhebung der Zugangs-URL

Die Zugangs-URL wird hervorgehoben wenn ein Metadatensatz zu einem Dienst oder einer Anwendung gehört.
Die Ausgabe der Zugangs-URL des Dienstes oder der Anwendung im Portal ist zu finden als "URL des Zugangs" und wird angezeigt in der:
* erweiterten Suchergebnisanzeige an oberster Position der Liste der Verweise/Downloads
* in der Metadaten-Detail-Ausgabe in der Rubrik "Übersicht" ebenfalls an oberster Position


![Portal-Suche: "Hervorhebung Zugangs-URL in der Vorschau"](../images/700_portal_search_preview_show_url.png "Portal-Suche: "Hervorhebung Zugangs-URL in der Vorschau"")
<figcaption class="figcaption">Portal-Suche: "Hervorhebung Zugangs-URL in der Vorschau"</figcaption>

![Portal-Suche: "Hervorhebung Zugangs-URL in der Metadaten Detailansicht"](../images/700_portal_search_detail_show_url.png "Portal-Suche: "Hervorhebung Zugangs-URL in der Metadaten Detailansicht"")
<figcaption class="figcaption">Portal-Suche: "Hervorhebung Zugangs-URL in der Metadaten Detailansicht"</figcaption>

([REDMINE-5410](https://redmine.informationgrid.eu/issues/5410))

#### URL's als Hyperlink anzeigen

URL's im Fliesstext werden automatisch zu einem Hyperlink generiert.

![Portal-Suche: "Zeige URL's als Hyperlink"](../images/700_portal_search_preview_generate_hyperlink.png "Portal-Suche: "Zeige URL's als Hyperlink"")
<figcaption class="figcaption">Portal-Suche: "Zeige URL's als Hyperlink"</figcaption>

([REDMINE-4668](https://redmine.informationgrid.eu/issues/4668))

#### Erweiterung der CSW-Schnittstelle 

Der CSW-Output der CSW-Schnittstelle von InGrid unterstützt zusätzlich zum ISO Schema nun auch das OGC Schena (http://www.opengis.net/cat/csw/2.0.2).

([REDMINE-5223](https://redmine.informationgrid.eu/issues/5223))

### KRZN 

####  Alternativer Karten Client

Metadatensätze erhalten im InGrid Editor des KRZN-Profils ein zusätzliches Feld um einen alternativen Kartenclient angeben zu können. Beim erstellen eines Metadatensatzes kann unter dem Feld "Alternativer Karten Client" ein alternativer Karten Client ausgewählt werden.

![InGrid Editor: "Alternativer Karten Client"](../images/700_ingrid_editor_metadata_alt_map_client.png "InGrid Editor: "Alternativer Karten Client"")
<figcaption class="figcaption">InGrid Editor: "Alternativer Karten Client"</figcaption>

([REDMINE-5192](https://redmine.informationgrid.eu/issues/5192))

### MetaVer

####  Detaillierter CSV export 

INSPIRE SQL-Abfragen geben nun zusätzlich folgende Angaben im CSV- Export aus:
*  Datensatztyp
*  Datensatz-ID
*  Veröffentlichungsstatus (in Bearbeitung, Veröffentlicht)
*  Veröffentlichungsrecht (Internet, Intranet, amtsintern)


([REDMINE-5558](https://redmine.informationgrid.eu/issues/5558))

### Liste der Änderungen


IGE-NG

- [Feature] OGC API Records Schnittstelle mit IGE-NG Schema ([REDMINE-5107](https://redmine.informationgrid.eu/issues/5107))
- [Feature] Status wird über die Importfunktion nicht importiert ([REDMINE-5827](https://redmine.informationgrid.eu/issues/5827))
- [Feature] Benutzer anlegen - Gruppe als Pflichtfeld aufnehmen + anderes Label ([REDMINE-5669](https://redmine.informationgrid.eu/issues/5669))
- [Feature] Fehlermeldung zu unspezifisch ([REDMINE-5525](https://redmine.informationgrid.eu/issues/5525))
- [Feature] Import für alle Nutzer ermöglichen ([REDMINE-4857](https://redmine.informationgrid.eu/issues/4857))
- [Feature] IGE-NG: Repo nach GitHub überführen ([REDMINE-5680](https://redmine.informationgrid.eu/issues/5680))
- [Bug] unklare Fehlermeldung beim Import einer XML Datei  ([REDMINE-5826](https://redmine.informationgrid.eu/issues/5826))
- [Bug] Unklare Fehlmeldung bei XML Import ([REDMINE-5801](https://redmine.informationgrid.eu/issues/5801))
- [Bug] Druckvorschau beeinflusst Hauptformular ([REDMINE-5792](https://redmine.informationgrid.eu/issues/5792))
- [Bug] MD-Admin kann keine Benutzer löschen ([REDMINE-5746](https://redmine.informationgrid.eu/issues/5746))
- [Bug] ARS wird in Nominatim-Suche nicht mehr angezeigt ([REDMINE-5711](https://redmine.informationgrid.eu/issues/5711))
- [Bug] Beim Selektieren mehrerer Datensätze werden die verfügbaren Aktionen nicht korrekt ausgeblendet ([REDMINE-5703](https://redmine.informationgrid.eu/issues/5703))
- [Bug] GDI-Testsuite, Fehler ([REDMINE-5694](https://redmine.informationgrid.eu/issues/5694))
- [Bug] IGE-NG - XML - gmd:MD_DigitalTransferOptions ([REDMINE-5663](https://redmine.informationgrid.eu/issues/5663))
- [Bug] Raumbezug mit WKT wird in der NG Testumgebung nicht angezeigt. ([REDMINE-5641](https://redmine.informationgrid.eu/issues/5641))
- [Bug] Capabilites-Assistent: Schlagworte zuordnen ([REDMINE-5400](https://redmine.informationgrid.eu/issues/5400))
- [Bug] IGE-NG: Portalanzeige Regionalschlüssel anpassen ([REDMINE-5717](https://redmine.informationgrid.eu/issues/5717))

InGrid

- [Feature] Der CSV Export der Suchergebnisse soll die UUID des Datensatzes mit ausgeben ([REDMINE-5829](https://redmine.informationgrid.eu/issues/5829))
- [Feature] Feld "Datenformat" für Verweise wieder einführen ([REDMINE-5744](https://redmine.informationgrid.eu/issues/5744))
- [Feature] Kontexthilfe für ARS einbinden ([REDMINE-5655](https://redmine.informationgrid.eu/issues/5655))
- [Feature] Admin Passwort aus realm.properties ([REDMINE-5637](https://redmine.informationgrid.eu/issues/5637))
- [Feature] PORTAL: Umsetzung für InVeKos ([REDMINE-5507](https://redmine.informationgrid.eu/issues/5507))
- [Feature] Portal: Zugangs-URL von Dienst / Anwendung hervorheben ([REDMINE-5410](https://redmine.informationgrid.eu/issues/5410))
- [Feature] levelDescription mit Klartext befüllen ([REDMINE-5288](https://redmine.informationgrid.eu/issues/5288))
- [Feature] CSW-Schnittstelle soll auch OGC Schema unterstützen ([REDMINE-5223](https://redmine.informationgrid.eu/issues/5223))
- [Feature] URLs in bestimmten Textelementen im Portal automatisch als Verweis anzeigen ([REDMINE-4668](https://redmine.informationgrid.eu/issues/4668))
- [Feature] Umstellung Lizenz auf EUPL Version 1.2 ([REDMINE-1585](https://redmine.informationgrid.eu/issues/1585))
- [Bug] Import in Ordner möglich, an denen man nicht berechtigt ist ([REDMINE-5814](https://redmine.informationgrid.eu/issues/5814))
- [Bug] MVIS - Bei Vergleich Messreihen wird minimaler Wert auf x-Achse dargestellt und ist nicht erkennbar (im Balkendiagramm) ([REDMINE-5790](https://redmine.informationgrid.eu/issues/5790))
- [Bug] Druck - GFI Dialog nicht vollständig ([REDMINE-5789](https://redmine.informationgrid.eu/issues/5789))
- [Bug] Anzeige (Koordinaten) der Raumbezüge unterschiedlich, Nominatim vs. wfs_gnde ([REDMINE-5784](https://redmine.informationgrid.eu/issues/5784))
- [Bug] Webmap Client: Sicherheitsmangel - Reflektion beliebiger Eingaben ([REDMINE-5782](https://redmine.informationgrid.eu/issues/5782))
- [Bug] Webmap Client: Path Traversal Schwachstelle ([REDMINE-5780](https://redmine.informationgrid.eu/issues/5780))
- [Bug] gmd:hierarchyLevel für Datenserien richtig setzen ([REDMINE-5779](https://redmine.informationgrid.eu/issues/5779))
- [Bug] XML URL in Detaildarstellung wird nicht korrekt befüllt ([REDMINE-5763](https://redmine.informationgrid.eu/issues/5763))
- [Bug] Capabilites-Assistent: Fehler bei der Veröffentlichung eines Eintrags zum Demokatalog CSW ([REDMINE-5761](https://redmine.informationgrid.eu/issues/5761))
- [Bug] Interface-CSW fährt nicht hoch wenn pattern-Datei leer ist ([REDMINE-5755](https://redmine.informationgrid.eu/issues/5755))
- [Bug] Aktualisierung sicherheitskritischer Libraries ([REDMINE-5724](https://redmine.informationgrid.eu/issues/5724))
- [Bug] "anchor" im Mapping Skript berücksichtigen ([REDMINE-5596](https://redmine.informationgrid.eu/issues/5596))
- [Bug] Portal: In der Beschreibung von über- und untergeordneten Objekten werden Zeilenumbrüche nicht angezeigt ([REDMINE-5586](https://redmine.informationgrid.eu/issues/5586))

Profil BAW MIS

- [Feature] Portal: Kontakte sollen nicht verlinkt werden ([REDMINE-5271](https://redmine.informationgrid.eu/issues/5271))

Profil BKG

- [Support] AdV-MIS: Testsystem mit UserFlexibilisierung - LogFiles "iplug csw" protokolliert Fehlermeldungen ([REDMINE-5696](https://redmine.informationgrid.eu/issues/5696))

Profil KRZN

- [Feature] Button zum Teilen in den sozialen Netzwerken von allen Seiten entfernen ([REDMINE-5595](https://redmine.informationgrid.eu/issues/5595))
- [Feature] IGE-NG in Kubernetes Umgebung, Keycloak-Abindung ([REDMINE-5570](https://redmine.informationgrid.eu/issues/5570))
- [Feature] Verfügbarkeit > Zugriffsbeschränkungen soll ein Pflichtfeld sein ([REDMINE-5463](https://redmine.informationgrid.eu/issues/5463))
- [Feature] PORTAL: Hilfetexte anzeigen ([REDMINE-5291](https://redmine.informationgrid.eu/issues/5291))
- [Feature] IGE-NG, PORTAL: verschiedene Geofachportale für Kartenansicht aufrufen können ([REDMINE-5192](https://redmine.informationgrid.eu/issues/5192))
- [Feature] IGE-NG: Feld "Produktionsumgebung" hinzufügen ([REDMINE-5191](https://redmine.informationgrid.eu/issues/5191))
- [Feature] IGE-NG, PORTAL: verschiedene Geofachportale für Kartenansicht aufrufen können ([REDMINE-5192](https://redmine.informationgrid.eu/issues/5192))
- [Feature] IGE-NG: Feld "Produktionsumgebung" hinzufügen ([REDMINE-5191](https://redmine.informationgrid.eu/issues/5191))
- [Bug] Geodatensatz kann ohne Pflichtfeld Zugriffsbeschränkungen veröffentlicht werden ([REDMINE-5815](https://redmine.informationgrid.eu/issues/5815))
- [Bug] Metadaten der Gemeindegrenzen können nicht als XML runtergeladen werden. ([REDMINE-5752](https://redmine.informationgrid.eu/issues/5752))
- [Bug] URL-Pflege funktioniert nicht im Geodatenkatalog Niederrhein ([REDMINE-5727](https://redmine.informationgrid.eu/issues/5727))
- [Bug] Fehler JSON-Validierung ([REDMINE-5722](https://redmine.informationgrid.eu/issues/5722))
- [Bug] Fax Icon Farbe korrigieren ([REDMINE-5700](https://redmine.informationgrid.eu/issues/5700))

Profil LUBW

- [Feature] Mapclient: OSM als Kartenhintergrund einbinden, Orthofoto austauschen ([REDMINE-4606](https://redmine.informationgrid.eu/issues/4606))
- [Bug] CSV-Export: Angabe "Zugang geschützt" für Geodatensätze ([REDMINE-5794](https://redmine.informationgrid.eu/issues/5794))
- [Bug] INSPIRE Konformität der Metadatensätze nicht erfüllt ([REDMINE-5702](https://redmine.informationgrid.eu/issues/5702))
- [Bug] Fehlende Vorschaubilder im Editor (und Portal) ([REDMINE-5500](https://redmine.informationgrid.eu/issues/5500))

Profil Schleswig-Holstein

- [Feature] Umsetzung Profil IGE-NG für UP-SH ([REDMINE-5599](https://redmine.informationgrid.eu/issues/5599))

Profil MetaVer

- [Feature] Profil Kommunaler Metadatenkatalog Sachsen-Anhalt: Schalter für für das Anzeigen aller Eingabefelder auf "Aus" ([REDMINE-5619](https://redmine.informationgrid.eu/issues/5619))
- [Feature] Log-in Seite umstellen ([REDMINE-5616](https://redmine.informationgrid.eu/issues/5616))
- [Feature] IGE-NG: Anpassung CSV Export für INSPIRE-relevante MD ([REDMINE-5558](https://redmine.informationgrid.eu/issues/5558))
- [Bug] PORTAL: Menüeintrag "Metadaten" entfernen ([REDMINE-5683](https://redmine.informationgrid.eu/issues/5683))
- [Bug] Systemumgebung wird nicht korrekt ins ISO geschrieben ([REDMINE-5682](https://redmine.informationgrid.eu/issues/5682))

Profil UVP

- [Support] URL für BB ändern ([REDMINE-5804](https://redmine.informationgrid.eu/issues/5804))
- [Feature] Anzeige der "Abgelaufenen Metadaten" im Report ausblenden ([REDMINE-5743](https://redmine.informationgrid.eu/issues/5743))
- [Bug] Ordner dürfen nicht indiziert werden ([REDMINE-5681](https://redmine.informationgrid.eu/issues/5681))
- [Bug] IGE-NG: Nächtlicher Virusscan wird nicht ausgeführt ([REDMINE-5031](https://redmine.informationgrid.eu/issues/5031))

### Komponenten

- CODELIST-REPOSITORY ([download](https://distributions.informationgrid.eu/ingrid-codelist-repository/7.0.0/))
- IBUS ([download](https://distributions.informationgrid.eu/ingrid-ibus/7.0.0/))
- INTERFACE-CSW ([download](https://distributions.informationgrid.eu/ingrid-interface-csw/7.0.0/))
- INTERFACE-SEARCH ([download](https://distributions.informationgrid.eu/ingrid-interface-search/7.0.0/))
- IPLUG-BLP ([download](https://distributions.informationgrid.eu/ingrid-iplug-blp/7.0.0/))
- IPLUG-CSW-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-csw-dsc/7.0.0/))
- IPLUG-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-dsc/7.0.0/))
- IPLUG-EXCEL ([download](https://distributions.informationgrid.eu/ingrid-iplug-excel/7.0.0/))
- IPLUG-IGE ([download](https://distributions.informationgrid.eu/ingrid-iplug-ige/7.0.0/))
- IPLUG-OPENSEARCH ([download](https://distributions.informationgrid.eu/ingrid-iplug-opensearch/7.0.0/))
- IPLUG-SE ([download](https://distributions.informationgrid.eu/ingrid-iplug-se/7.0.0/))
- IPLUG-SNS ([download](https://distributions.informationgrid.eu/ingrid-iplug-sns/7.0.0/))
- IPLUG-WFS-DSC ([download](https://distributions.informationgrid.eu/ingrid-iplug-wfs-dsc/7.0.0/))
- IPLUG-XML ([download](https://distributions.informationgrid.eu/ingrid-iplug-xml/7.0.0/))
- PORTAL ([download](https://distributions.informationgrid.eu/ingrid-portal/7.0.0/))
