---
layout: default
title: InGrid
description: "Indexieren, Recherchieren, Visualisieren, Teilen"
isHome: true
menu:
  - title: "Über InGrid"
    href: "about"
    menu:
      - title: Überblick
        href: about/overview.html
      - title: Was ist neu?
        href: about/history.html
      - title: Funktionen
        href: about/features.html
      - title: Anwendungen
        href: about/applications.html
      - title: Lizensierung
        href: about/license.html
      - title: Glossar
        href: about/glossar.html
      - title: Impressum
        href: about/disclaimer.html
  - title: System
    href: "system"
    menu:
      - title: Architektur
        href: system/architecture.html
      - title: Installation
        href: system/installation.html
      - title: Betrieb
        href: system/operation.html
      - title: Query Syntax
        href: system/querysyntax.html
  - title: Komponenten
    href: "components"
    menu:
      - title: Infrastruktur
        type: header
      - title: iBus
        href: components/ibus.html
      - title: iPlug SNS
        href: components/iplug_sns.html
      - title: Communication Gateway
        href: components/communication_gateway.html
      - title: Codelist Repository
        href: components/codelist_repository.html
      - title: Upgrade Server
        href: components/upgrade_server.html
      - title: Upgrade Client
        href: components/portal.html#upgrade-client
      - title: Portalkomponenten
        type: header
      - title: Portal
        href: components/portal.html
      - title: Webmap Client
        href: components/webmap_client_admin.html
      - title: Metadatenkomponenten
        type: header
      - title: InGrid Editor
        href: components/ige.html
      - title: iPlug IGE / InGrid Catalog
        href: components/iplug_ige.html
      - title: UVP-Portal
        href: components/uvp.html
      - title: Datenanbindung
        type: header
      - title: Allgemeine iPlug-Konfiguration
        href: components/iplug_admin_gui.html
      - title: iPlug DSC
        href: components/iplug_dsc_scripted.html
      - title: iPlug SE (Search Engine)
        href: components/iplug_se.html
      - title: iPlug CSW
        href: components/iplug_dsc_csw.html
      - title: iPlug OpenSearch
        href: components/iplug_opensearch.html
      - title: iPlug WFS
        href: components/iplug_dsc_wfs.html
      - title: iPlug Excel
        href: components/iplug_excel.html
      - title: iPlug XML
        href: components/iplug_xml.html
      - title: iPlug BLP
        href: components/iplug_blp.html
      - title: Schnittstellenkomponenten
        type: header
      - title: Such-Schnittstelle
        href: components/interface_search.html
      - title: CSW Schnittstelle
        href: components/interface_csw.html
      - title: Opensearch Server
        href: components/server_opensearch.html
  - title: Downloads
    href: "downloads.html"
published: true
---

{% include head.html %}

## Einführung

- [Überblick](about/overview.html)
- [Was ist neu?](about/history.html)
- [Funktionen](about/features.html)
- [Anwendungen](about/applications.html)
- [Lizensierung](about/license.html)
- [Glossar](about/glossar.html)
- [Impressum](about/disclaimer.html)

## Systeminformationen

- [Architektur](system/architecture.html)
- [Installation](system/installation.html)
- [Betrieb](system/operation.html)
- [Query-Syntax](system/querysyntax.html)

## Komponenten

### Infrastruktur

- [Elasticsearch](components/elasticsearch.html) - Komponente für die zentrale Indexierung und Suche
- [iBus](components/ibus.html) - Zentrale Komponente der InGrid Kommunikationsschicht
- [iPlug SNS](components/iplug_sns.html) - Schnittstelle zu Thesaurus und Gazetteer
- [Communication Gateway](components/communication_gateway.html) - Leitet InGrid Kommunikation über HTTP um.
- [Codelist Repository](components/codelist_repository.html) - Zentrale Verwaltung von Code-Listen
- [Upgrade Server](components/upgrade_server.html) - Liefert Nachrichten über neue InGrid Komponenten per RSS Feed.
- [Upgrade Client](components/portal.html#upgrade-client) - Im Portal integrierter Client, der über neue InGrid Komponenten benachrichtigt.

### Portalkomponenten

- [Portal](components/portal.html) - zentrale Benutzeroberfläche des InGrid Systems
- [Webmap Client](components/webmap_client_admin.html) - Darstellung von Online Karten

### Metadatenkomponenten

- [InGrid Editor](components/ige.html) - Metadaten Editor
- [iPlug IGE / InGrid Catalog](components/iplug_ige.html) - Anbindung InGrid Catalog
- [UVP Portal](components/uvp.html) - Erfassung und Darstellung von Umweltverträglichkeitsprüfungen, sowie Bauleitplanungsdaten

### Datenanbindung

- [iPlug DSC](components/iplug_dsc_scripted.html) - Indexierung von Datenbankinhalten
- [iPlug SE (Search Engine)](components/iplug_se.html) - Indexierung von Webseiten
- [iPlug CSW](components/iplug_dsc_csw.html) - Indexierung von CSW-Diensten (Catalog Service Web)
- [iPlug OpenSearch](components/iplug_opensearch.html) - Anbindung von externen OpenSearch Schnittstellen
- [iPlug WFS](components/iplug_dsc_wfs.html) - Indexierung von WFS-Diensten (Web Feature Service)
- [iPlug Excel](components/iplug_excel.html) - Indexierung von Excel Dateien
- [iPlug XML](components/iplug_xml.html) - Indexierung vom XML Daten
- [iPlug BLP](components/iplug_blp.html) - Indexierung von Bauleitplanungsdaten aus einer Excel Datei

### Schnittstellenkomponenten

- [OpenSearch Schnittstelle](components/interface_search.html#opensearch-schnittstelle) - Recherchieren über eine OpenSearch Schnittstelle
- [ATOM Download Service](components/interface_search.html#atom-download-service-feed-schnittstelle) - Download von Basisdaten von Geodatendiensten
- [CSW Schnittstelle](components/interface_csw.html) - Recherchieren über eine CSW Schnittstelle (Catalog Service Web)
- [Opensearch Server](components/server_opensearch.html) - Anbindung von Datenbanken über eine OpenSearch Schnittstelle


