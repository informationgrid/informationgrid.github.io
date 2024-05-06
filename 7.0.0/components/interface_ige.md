---
layout: default
title: InGrid Editor Schnittstelle
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Allgemeines
Dieser Abschnitt beschreibt optionale API Endpunkte von dem InGrid Editor und die Authentifizierung der Schnittstelle.

Unterstützte Schnittstellen:
* CSW-t nach ISO 19139 (2007)
* OGC Records API

## Konfiguration
Mit dem Profil `csw-t` kann der IGE-NG um eine schreibende CSW-t Schnittstelle (POST Methode) für INSERT, UPDATE & DELETE erweitert werden. 

Mit dem Profil `ogc-api` kann der IGE-NG um eine schreibende OGC konforme Schnittstelle erweitert werden. 


## Endpunkte im Überblick
Eine ausführliche Dokumentation der Endpunkte ist über das **Swagger-UI** zu erreichen. Es dient als Hilfestellung für Testanfragen und gibt detailierte Auskunft über Anfrage-Parameter und Pfad-Struktur.

* https://ige-ng.informationgrid.eu/swagger-ui/index.html

    Um einen API-Endpunkt über die Swagger-Benutzeroberfläche zu testen, müssen Sie den zuständigen Server auswählen (Dropdown-Menü "Server") und ein gültiges Bearer-Token eingeben (Schaltfläche "Authorise").

### CSW-t Transaction

| Method | Type | Description |
|--------|------|-------------|
| POST   | CSW-t | INSERT, UPDATE & DELETE transaction <br> Endpoint:  `/api/cswt` <br> Example: `../api/cswt?SERVICE=CSW&REQUEST=Transaction&catalog=CATALOG_ID` |

### OGC Records APIs

| Method | Type | Description |
|--------|------|-------------|
| GET | Landing Page | Get general information about OGC API Records <br>Endpoint: `/api/ogc` |
| GET | Conformance | Get conformance class of OGC API Records <br>Endpoint: `/api/ogc/conformance` |
| GET | Collections | Get multiple collections <br>Endpoint: `/api/ogc/collections` |
| GET | Collection | Get collection by collection-ID <br>Endpoint: `/api/ogc/collections/{collectionId}` |
| GET | Records | Get multiple records of a collection <br>Endpoint: `/api/ogc/collections/{collectionId}/items` |
| GET | Record | Get record by record-ID <br>Endpoint: `/api/ogc/collections/{collectionId}/items/{recordId}` |
| POST | Records | Insert multiple records into a collection <br>Endpoint: `/api/ogc/collections/{collectionId}/items` |
| PUT | Record | Replace/update an existing resource in a collection with a replacement resource with the same resource identifier. <br>Endpoint: `/api/ogc/collections/{collectionId}/items/{recordId}` |
| DELETE | Record | Delete a record by record-ID <br>Endpoint: `/api/ogc/collections/{collectionId}/items/{recordId}` |

> **NOTE:** Collection verweist auf einen Katalog. Record verweist auf ein Dokument (dataset, address).

## Authentifizierung

Alle APIs sind mit OAuth 2.0 über Keycloak gesichert. Um mit Endpunkten zu interagieren, muss zunächst ein Bearer-Token erstellt werden und in der Anfrage mit übergeben werden.

Überblick über die erforderlichen Variablen und Berechtigungsnachweise:

| Variable | Description |
|----------|-------------|
| *$KEYCLOAK_HOST* | Keycloak Host e.g. `https://keycloak.informationgrid.eu` |
| *$REALM* | Legen Sie den Keycloak-Realm fest, der eine Reihe von Benutzern, Anmeldeinformationen, Rollen und Gruppen verwaltet (e.g. "InGrid"). |
| *$CLIENTID* | Keycloak client ID  (e.g. "ige-ng-frontend") |
| *$USERNAME* | Benutzername (InGird Editor Login) |
| *$PASSWORD* | Passwort (InGrid Editor Login) |
| Grant type | Type: Password Credential |
| Access Token URL | `KEYCLOAK_HOST`/realms/`$REALM`/protocol/openid-connect/token |
| Refresh Token URL | `KEYCLOAK_HOST`/realms/`$REALM`/protocol/openid-connect/token |

> **_NOTE:_** Zugangstokens sind 1 Minute lang gültig. Nach Ablauf der Gültigkeitsdauer muss das Token mit einem Refresh-Token aufgefrischt werden.

### Token anfragen
In diesem Abschnitt wird beschrieben, wie Sie Zugangstoken und Refresh-Token via *cURL* erhalten können.

Ersetzen Sie folgende Variable und führen Sie cURL aus: `$KEYCLOAK_HOST`, `$REALM`, `$USERNAME`, `$PASSWORD`, `$CLIENTID`
```
curl -X POST
    $KEYCLOAK_HOST/realms/$REALM/protocol/openid-connect/token
    -H 'Content-Type: application/x-www-form-urlencoded'
    -d username=$USERNAME
    -d password=$PASSWORD
    -d grant_type=password
    -d client_id=$CLIENTID
```

Die Antwort ist ein JSON-Objekt, das unter anderem **Access-Token** und **Refresh-Token** enthält. Beispiel einer Antwort:
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInZGMZvcm1hdGlvbmdyaWQuZXUvcmVhbG1zL3JpZCIs...",
    "expires_in": 60,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6I...",
    "token_type": "Bearer",
    "not-before-policy": 1632732926,
    "session_state": "1afef5ee-272c-4c4a-a181-3da38b432bac",
    "scope": "email profile"
}
```

Das `access_token` ist für 60 Sekunden gültig und kann mit dem `refresh_token` aktualisiert werden. Beispiel: 
```
curl -X POST
    $KEYCLOAK_HOST/realms/$REALM/protocol/openid-connect/token
    -H 'Content-Type: application/x-www-form-urlencoded'
    -d grant_type=refresh_token
    -d client_id=$CLIENTID
    -d refresh_token=$REFRESH_TOKEN_FROM_PREVIOUS_CURL
```

Die Antword ist ein JSON-Object mit einem neuen `access_token`:
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia...",
    "expires_in": 60,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwi...",
    "token_type": "Bearer",
    "not-before-policy": 1632732926,
    "session_state": "c9c4c5e3-7f94-41f4-8a2c-c8e4c6d66a73",
    "scope": "email profile"
}
```

## Betrieb
Sobald Sie einen gültigen `access_token` erhalten haben (siehe "Authentifizierung"), können Sie die Schnittstellen aufrufen. Dazu müssen Sie den `access_token` als Bearer-Token in den Header beifügen.

### OGC Records API Request
Beispiel für eine cURL-Anfrage für die OGC-Landing Page:
```
curl --location 'https://ige-ng.informationgrid.eu/api/ogc'
     --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInZGMZvcm1hdGlvbmdyaWQuZXUvcmVhbG1zL3JpZCIs...'
```

Beispiel für eine OGC API Antwort:
```
{
    "title": "OGC API Records",
    "description": "Access to InGrid via OGC API for Records."
}
```

### CSW-t POST Request
Mit der CSW-t Schnittstelle können mehrere Dokument-Anfragen transaktional verarbeitet werden. Darunter zählen Insert, Update und Delete Anfragen. Im Folgenden sehen Sie ein Beispiel für eine cURL POST Request:

```
curl --location 'https://ige-ng.informationgrid.eu/api/cswt?SERVICE=CSW&REQUEST=Transaction&catalog=my-ingrid' 
--header 'Content-Type: application/xml' 
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInZGMZvcm1hdGlvbmdyaWQuZXUvcmVhbG1zL3JpZCIs...' 
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<csw:Transaction service="CSW" version="2.0.2"
    xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:gmd="http://www.isotc211.org/2005/gmd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-publication.xsd">

    <csw:Insert>
        <!-- ein vollständiges Dokument im Format ISO 19139 (2007)-->
    </csw:Insert>
    
    <csw:Update>
        <!-- ein vollständiges Dokument im Format ISO 19139 (2007) -->
        <csw:Constraint version="2.0.0">
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>apiso:identifier</ogc:PropertyName>
                    <ogc:Literal>18c19e21-6931-4c8c-931e-79beefbfa7b2</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
        </csw:Constraint>
    </csw:Update>
    
    <csw:Delete>
        <csw:Constraint version="2.0.0">
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>apsio:identifier</ogc:PropertyName>
                    <ogc:Literal>E6D08246-2B08-4551-8B99-8F75CCBBAD45</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
        </csw:Constraint>
    </csw:Delete>

</csw:Transaction>'
```
In dem Tag `<csw:Transaction>` können mehrere Dokument-Anfragen gesammelt werden.
* Klammern Sie ein Dokument mit `<csw:Insert>`, um es als neues Dokument hinzuzufügen.
* Klammern Sie ein Dokument mit `<csw:Update>`, um ein bestehendes Dokument zu aktualisieren. 
* Klammern Sie eine Dokument-Id mit `<csw:Delete>`, um ein bestehendes Dokument zu löschen.

Mehr Informationen bzgl. ISO 19139 (2007) konformen Transaktionen und deren Struktur finden Sie unter dem Kapitel "CSW Schnittstelle".
