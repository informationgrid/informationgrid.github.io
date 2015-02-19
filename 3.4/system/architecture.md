---
layout: default
title: Architektur
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
---

Die grundlegende Software-Architektur besteht aus Komponenten, die über eine Kommunikationsschicht gekoppelt sind. Zwischen den einzelnen Komponenten können Nachrichten ausgetauscht werden. Jede Komponente kann auf einem unterschiedlichen System installiert werden. Dadurch ergeben sich hochflexible Anwendungsszenarien, die auch hohen Sicherheitsanforderungen genügen.

<div class="mxgraph" style="position:relative;overflow:hidden;width:411px;height:274px;margin:30px 0 30px 0"><div style="width:1px;height:1px;overflow:hidden;">5Zjfj6IwEMf/Gh4vAYqij6u79+Phkk18uOcqFZotlNSy6v71O9WpwBaSu6Cyl30SvtNpO59pp1SPLPPDD0XL7LdMmPBCPzl45NELwyAiEfwY5XhWZvH0LKSKJ9ioFlb8jaHoo1rxhO1aDbWUQvOyLW5kUbCNbmlbKdpDlDS13dfCakOFq/7hic5QDabz2vCT8TTDcWYhBrPTR9tHwra0EvrbSQKbMefU9oVRHXzseoY9H1EIQ+RV0qI1pzcp85ag2K6GhfFynBeOspYqYaolCV68NMGRJ0iekhIczVN+WDJhEmhzc3b73mO98FKsaA3d54A8XqmocOp8Ue0chkpWRcKMT+CRxT7jmq1KujHWPSwz0DKdCzQraOhMA2f2ypRmdi1e4oXFymTOtDqaVJytxEcXXKcknJzf9/VCCGPMVtZYA1MkSxFreum65gAPiKKHI3G4PK7Ay+fPokq9cCpgsMVawVNqnoYBKytVguP1mUWByyywK+/azCIc639jFnxg1rHObsZsgsWluf8+Ny3rYmmRe9JyYD1LpSk0GcImVYwVN9h8l/neA03soPlVaKa2Jugrr6W1GWI4rsiGPQou99y7U61yAHVg7Gc2GbG+x6OdicOYTUes7/EI9X0YrXjE+h67Bd7BAt/L8NSMfaeVfLlcD/rq0L9ACObt0kTmLoTI3oeaEKw2CALeYD4dBB/f7wLBPc9WTEE8oD38xeaBsI3uAFpKIc39q5AngFsuxAeJCp6ai94GMJmr2sJA5HAjfUBDzpPEDNO5JSW03gq5ByWDdvBdYSd31Vx0nZV2AzZTYTfqoFTM+lMBsX31VJCOI/hmqcDbblcqwPmrp6Lra+hKqYDX+j+Zk63x7xp5egc=</div></div>



## Technischer Aufbau

InGrid basiert auf dem Komponenten-Konzept, das im Bereich der Software-Entwicklung bereits seit längerem erfolgreich eingesetzt wird. Bei diesem Konzept werden Arbeitsaufgaben in Teilaufgaben unterteilt und parallel bearbeitet. Dadurch ergibt sich ein erweiterbares, flexibles und damit auch skalierbares System, mit dem hohe Flexibilität und Performanz gewährleistet werden können. InGrid besteht aus unterschiedlichen Modulen. Die wichtigsten sind der Informationsbroker (iBus), die Schnittstellen zu den Datenquellen (iPlugs), standardisierte Schnittstellen zur Portaloberfläche, offene Schnittstellen zur Weitergabe von Informationen an andere Systeme (CSW und OpenSearch), die Portaloberfläche sowie der InGridCatalog.

<div class="mxgraph" style="position:relative;overflow:hidden;width:811px;height:689px;margin:30px 0 30px 0"><div style="width:1px;height:1px;overflow:hidden;">3Zztc9o4E8D/Gj4mY+NXPgZCcp0r11557sldvxlLYE2N5RGmJP3ru4JVkC3aJlNAKMCAWQu9/LRaadcyvWC0fLwXWV1MOKFlr++Rx15w2+v3/TAI4UNKnnaSNIl3goVgBBPtBVP2jaLQQ+maEbpqJWw4LxtWt4U5ryqaNy3ZnJftIupsobLfC6Z5VprSB0aaAqV+PNif+IOyRYHlpH1szKp5UnkQOs/WZXO1FcE5eXqZqbywVY8eZp1izk8oGDxXoWpV6Rvny5ZA0NWeFTaXYbWwkBkXhIqWiBKVpmgaSfCm17+DFxHsK70mIttcM74VBffe0POm//05H6/S9w+TMSn//v/nj58fig+f7vNdbiWrvui9EIxBEwTnUIQ8Wj6OaCm1QXV0PM/CNMjzMAn9MEwGV7ta3b00+TMbQStsxiuzTLwsGYQ+GczInGRz7ypId3l+zco10jR6dCH4usZkVDRU6XZL8bKZSo6of1rLPS4YOJQvaSOepFrskgdJhFqBSoF12ux1MhoEO1mhqaPvY2sy7JXFc9Z7JnCAWF6KCFX0Z4iAUEWozMHvBcNNwRo6rbNcnt2AXQBZ0SyhxO3pOSvLES+5VM2KV/SHaHWEP+g5kyEyS16KDMs6KrIQdUBDNs2LijXNqoGf0qrXj0uowXAm4GghjwykAEPKNW6rRvAvVJGDIeptHx2iIJ9vHyDPSraQdiQHjNISDCVkBvbuBk8sGSGywINdxiH1vOQbkBSQDmqtqnmsvnrWd6OzUhwBel+pkXXUrjJ7yoJyv9Y+hDjOUdfDFFuhAYwjbEiL4OAUCLFBGkI2XK9+D6OAhKcg17GsgYckdTtxSPfiU4DDHtLAvavu5bKo741hogYd+rWZeBXVJ6gQjOcTgPWVZiHYvocQNbC+GsAnB4uGXgd7P5Y/+FiuF+5CDYKXQsV0x53UDKi3U8jlNFDrtajhhyeAGikLj1Ajz5x9zqep2FEa1NH0wT2ocdKFanP4o1OmQf1Q02pKM5EXb4CtsgpW2OJg0dj+O3nvHtQ0uCSFNZ3Q8WO+DaS4jtWqrpqO60jGp9iqAeknWvOVXGRBGcfFO5PFnWE5EIPvZw+uCtBpdCdZBQGypWyfc5rb9QzsLgtUVEIPIJxsAXvGtZZVc+Cb/parQz8MbU5Xvulf/VMvREag7d6UCmi7szb1QCjljGBNH8vAtiqyWh4SvoaQ840QMkA3JExAEJpxGdRb8bWsuj2/NfZQQZTfqiIqOlQ1f+hQFfzjQjV9LDehdiIsSit/BTU5CVTTx5pk9ahk28n/d0b6QlAZHz/9UPdVnnaGuulIuRlO6a74VcPsUDU9KSfXTR2ollf6ph/ldDwlvSS4qiDnI4AdqpGadu1QNf0nN8NU4UVRNR0oV+NUHa6WbcAbuV7V7yxRA6teat90ptykqhb1impklerb8KYAY9ubSg5sBDiwD0BtZzwuU9OZctMX6M5WB3ZhnVFTTQ/LSV+gO1Upc2AHqulgOe0LqK2VlwH3wAUrJ32BDtVITRp2NgOZHpabvoDa0XcZVE0Py1VfoMPVrg1QkR8HL1J1l/+h1YVqYDpVrZnKretUXScgVFv87LA1XauPXDQZ/OgiQ/9BZ0KyG/pXuziNaf6d3KU/l3Qc0cooviiuh/f9bcc6DnrnCHeXUpYJmy7Vzf8+TEByyzdVyTO5dV0aVpbDPXuOIE47m1TsIg4P3E0h11MvwenwLUOv7LPQi68jH7rOw/fO5IiOlH4/THydJj6wxnf0Y1t3x/jXqa89US2O273m8u5N7KK3u28mNNd6b+Jiemx1v1xorvIe7qbuR9ASqxd71DWRwztnnN82e06NTSNC+oNZEJIkpoPgwL2c078c1Ncu01PaVvi6v2F/e077H4dg/B0=</div></div>



### Der iBus

Der iBus ("Information Bus") bildet in einem InGrid-System das zentrale, verbindende Element. Er arbeitet als Verteilungsstation zwischen Datenquellen und Suchanfragen von Menschen (Portaloberfläche) und Maschinen (CSW/OpenSearch). Als solcher nimmt der iBus eine Suchanfrage entgegen, bereitet diese auf und gibt sie an die angeschlossenen Datenquellen weiter. Die Anfrageergebnisse der einzelnen iPlugs (Datenquellen) werden vom iBus eingesammelt und als Ergebnislisten an das anfragende System zurück gegeben.
 
### Die iPlugs

Ein iPlug ("Information Plug") ist ein Schnittstellenadapter, der das Gesamtsystem mit einzelnen Datenquellen verbindet. Die iPlugs werden am iBus registriert. Das System ist flexibel erweiterbar, d.h. neue iPlugs können nachträglich entwickelt und angeschlossen werden, ohne dass das bestehende System geändert werden muss. Die iPlugs können entweder, soweit dies die Gegebenheiten der Infrastruktur zulassen, dezentral direkt beim Datenanbieter oder zentral am iBus installiert werden. Somit kann alternativ zu einer weitgehend zentralen Installation, ein performanteres voll verteiltes System aufgebaut werden. Jede Datenquelle erhält ein eigenes iPlug, so dass die Datenhalter volle Kontrolle über die bereitgestellten Informationen behalten. Die wichtigsten iPlugs werden im Folgenden vorgestellt

**DSC-iPlug**: Über das "Datasource-Client"-iPlug können Datenbanken mit beliebiger Datenstruktur angeschlossen werden. Als Datenbanktypen werden alle per JDBC ansprechbaren Datenbanken unterstützt (JDBC Treiber muss ggf. installiert werden). Mit dem DSC-iPlug werden ein Index sowie eine Ergebnis-Detaildarstellung von Daten aus der angschlossenen Datenbank erstellt. Sowohl die Abbildung in den Index, als auch die Detaildarstellung können über Abbildungs-Skripte selbst definiert werden.

**SE-iPlug**: Die Suchmaschine ("Search-Engine-iPlug") besteht aus einer Such- und einer Indexierungskomponente. Die Suchkomponente hat die Aufgabe zu einer Suchanfrage die zugehörigen Treffer zu liefern. Dazu wird der von der Indexierungskomponente erstellte Index analysiert. Teil der Indexierungskomponente ist außerdem ein leistungsfähiger Web-Crawler. Die indexierten Dokumente werden über den Semantic Network Service (SNS) des Umweltbundesamts zusätzlich mit Metadaten für Thema, Raum und Zeit angereichert. Die Pflege der zu indexierenden Inhalte kann durch Informationsanbieter rollenbasiert dezentral über das Internet vorgenommen werden. Hierfür ist das SE-iPlug mit einer Benutzeroberfläche ausgestattet, über die der Volltextindex sowie Themen-, Messwert- und Serviceseiten gepflegt werden können.

**SNS-iPlug**: Das SNS-iPlug ist eine spezielle Schnittstelle zum Semantic Network Service (www.semantic-network.de) des Umweltbundesamtes. Über das SNS-iPlug werden die für das Portal notwendigen SNS-Informationen für die Umweltchronik, die räumliche und die semantische Suche abgefragt.

**CSW-iPlug**: Das CSW-iPlug stellt eine Schnittstelle zu OGC-konformen CSW-2.0-Schnittstellen zur Verfügung. Über das iPlug können CSW-Datenquellen an ein InGrid-Portal angeschlossen werden.

**Management-iPlug**: Das Management-iPlug stellt Daten aus der Portal Datenbank den InGrid Komponenten zur Verfügung.


Alle indexierten Ergebnisse werden in der Hauptergebnisliste auf der Portaloberfläche angezeigt. Die Ergebnisse, die aufgrund von Schnittstelleneigenschaften von nicht zu indexierenden Datenquellen stammen, erscheinen in der Nebenergebnisliste.

### Offene Schnittstellen

Für die Kommunikation eines InGrid-Portals mit externen Informationssystemen stehen Schnittstellen zur Verfügung, die auf offenen Standards beruhen und HTTP- sowie XML/SOAP-Technologien für den Datenaustausch nutzen. Die wichtigsten Schnittstellen sind hierbei die OpenSearch-Schnittstelle und die CSW-Schnittstelle.

**OpenSearch-Schnittstelle**: Über diese XML-basierte Schnittstelle kann ein InGrid-Portal über einfache http-GET-Requests abgefragt werden. Die Suchergebnisse werden in einem standardisierten XML-Format ausgegeben und können von Zielsystemen anwendungsbezogen analysiert und aufbereitet werden. Es können sowohl Trefferlisten als auch Detailergebnisse recherchiert werden. Die Schnittstelle kann zudem für parametrisierte Suchanfragen an ein InGrid-Portal genutzt werden. Die Ergebnisse einer solchen Anfrage können z.B. in einem eigenen Portal mit individuellem Layout dargestellt werden.

**CSW-Schnittstelle**: Die OGC-konforme CSW-Schnittstelle basiert auf den ISO-Standards 19115, 19119 und 19139. Sie ist für den Austausch von geografischen Metadaten konzipiert und erfüllt die Anforderungen der GDI-DE und von INSPIRE. Über die CSW-Schnittstelle können externe Systeme auf geografische Metadaten eines InGrid-Portals zugreifen. Die Schnittstelle spielt im Rahmen der Geodateninfrastruktur Deutschland (GDI-DE) sowie von INSPIRE eine zentrale Rolle.

**ATOM Download Service**: Der ATOM Download Service stellt eine INSPIRE kompatible Schnittstelle zwischen Metadaten und den darin referenzierten Daten zur Verfügung. Ausgehen von einem Dienst können dazugehörige Datengrundlagen zum Download angeboten werden.

 
### Portal

Das InGrid-Portal bietet einen komfortablen Zugang zu den in InGrid System verwalteten Daten. Zentrale Funktionalität ist die konfigurierbare, facettierte Suche, mit der der InGrid-Datenbestand durchsucht werden kann. Teil des Portal ist ein Kartenclient, mit dem OGC konforme Kartendienste aus den Suchergebnissen angezeigt werden können.

Weitere Funktionalitäten sind:

* Anzeige von verschiedenen RSS Feeds
* Erweiterte Suche (Suchassistent)
* Anzeige umweltrelevanter Ereignisse (Umweltchronik)
* Anbindung an einen Thesaurus
* Einschränkung der Suche über Raum- bzw. Zeitbezüge
* Personalisierung von Aspekten des Portals für angemeldete Benutzer


## Kommunikation

Die Kommunikation zwischen den InGrid-Komponenten basiert auf TCP-Sockets. Der iBus startet einen Kommunikations-Socket zu dem sich andere Komponenten verbinden können. Über eine etablierte Verbindung erfolgt die weitere Kommunikation.

Dies ermöglicht, dass iPlugs und Schnittstellen hinter Firewalls versteckt werden können. Es muss keine von außen erreichbare Verbindung existieren, so dass keine sicherheitskritischen Verbindungen zu den Komponenten benötigt werden. Die einzige von außen erreichbare Komponente ist der iBus. Firewalls zwischen iPlugs/Schnittstellen und dem iBus müssen nur eine ausgehende TCP-Verbindung zum iBus erlauben. Dies ermöglicht den Einsatz von iPlugs/Schnittstellen in Bereichen mit hohen IT-Sicherheitsanforderungen.

<div class="mxgraph" style="position:relative;overflow:hidden;width:429px;height:456px;margin:30px 0 30px 0"><div style="width:1px;height:1px;overflow:hidden;">7VlZj9s2EP41fqyhy9fj7mbVPqTAAn5o+1TQEi0RoUWBomNvfn1mpKElWnLs1kcTpIYBiyOe3zfDOTwKXzb7XzUr899VyuUo8NL9KPwwCgI/CiP4Qcl7I5nPpo0g0yKlTq1gKb5wEnok3YqUV05Ho5Q0onSFiSoKnhhHtlbSXaJkmZ2+FSwTJvvSP0RqcpL600X74jcuspzWmQd0mMq82zlSvmZbaX6pRfAOX2+YnYtOtfeaZhhMGsE7CfzosFTh7OmLUhtHoHnVgkXnFbQvWmWldMq1I5Ki+NQFLnwF8rRSMBCfNvsXLpFAy00zLD7x9oCX5oWz9KkBC9rGZya3tPcegLtcGL4sWYLtHWjVKHzOzUZCy4fHymj16UAPSlJW5RwXwMZaSPmipMJjF6rgtB7Xhlud7G+6hQL0mKsNN/odWSKSpqTDpMLhYt60d62OhPZkeUc9Am/WCBlBnh3mbjGCB4JpGLI5zXFTyO6B0sKqMvWeEiJdlDzS7i5Kvk/wXoUS7fdHQymah5ehZMddAxJB0sFIPG+rHk5abYv0YFBnUNPQcRiDAaROwhJNyKSs8szpuB1Y/DnpSRcWq2TXwOITBR1cPixhlCfe5DYbBVMJiz2vNDxl+HQdYOVWlzDwBpjN6exWlRY0RRcze+/fGrOI+PnRMLPXNGE28R6I2YT0t2t/3zVaE+8ILf+BaNmLsYPWkmvYPMgAoLOQwRlR3rvgnQvdveNHQbiuPyBnUmQYgSUAH8ZQzwibgFDxiV5sRJriWoNsKOi9lmoHkhz6cRhAO7zKe0Q+XeHW5Gd972GxdwORG/BBoe4QH08/LR8EinVbk37Mczc+yGN+K+Kpclbio9jUiU8XfAvfR7bi8k1VwgiFMK6UMZhp9PA1CoGsZ3qqyibVgqSlkSCuxmBKBqoQwzdJC28sIClbC7i49DiBOYM4ZYbBD8oh7IjXzCTASRCHeOy10HzHpPx7tdXFuCyy49D+IQFa5LuRSGQT0W6ARkh3KbWyayi1DrxDaUyg/CTm5GIfWh1/gDkt+tbDUygOUFNpk6tMFUy+ttLn1i2jJXS44Hth/kTxOFgsqP0Xvht74NegXcD2mg4T28T3OA0v0ieta3CJRJDEwCO9d80A4DxiHmiO4xA+tO4b1wLgqAsBBBSe7NscARBqq2vObeLQp01zyYz47E41RAINfVMCFmnDCxt4E93B7CgRbLZAo7pVhTMTHRJ0O5FhOuOmNxHAzPActluJHZp8qKs1hxNfpki0l8Ho7VhNWqoTyapKJA7bribVikJ69M/04ELO705wj5dLCY6mVASxE9my2RmC/w19/SD9+3Kr4Xm3qjlnZSlhmXr1IEZnGsRBtA/gdPFHvDkLUWRDTvYClXyMH565lAcDRTc8Tc8X3KCYZGstNzLhCwzV815eINk67RgIv//CiGfHZYYjb3vxLX000aGGcAcj7ucq9P9AbQ/eWqPdeBBCcQ0uHam2qUw/kymgOA6blBDvYK3rHokOiW4flJ3VzhtUNO1/IPZutkWDRxQJFv3iuEO0UcM0H5P4P7sn2J3a9MeyO5AO3YpdaLb/RDVW3/6nGL5+BQ==</div></div>




In manchen IT-Umgebungen ist es nicht möglich bzw. nicht erlaubt TCP-Verbindungen freizuschalten. Für dieses Szenario wird ein HTTP/HTTPS Kommunikations-Gateway bereitgestellt. Mit Hilfe des Gateways ist es möglich, die TCP-Kommunikation über eine HTTP/HTTPS Kommunikation zu transportieren.

<div class="mxgraph" style="position:relative;overflow:hidden;width:531px;height:456px;margin:30px 0 30px 0"><div style="width:1px;height:1px;overflow:hidden;">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</div></div>



Um die Sicherheit der Kommunikation zwischen den Komponenten zu erhöhen, kann die TCP-Kommunikation zwischen den Komponenten und dem iBus über das Public-Key-Verfahren abgesichert werden. Eine Kommunikation zwischen Komponente und iBus kann dann nur erfolgen, wenn am iBus der Public-Key der jeweiligen Komponente bekannt ist.



## Verwendete Open Source Software für InGrid

Bei der Umsetzung von InGrid wurden als Basis ausschließlich Open-Source-Technologien verwendet. InGrid selbst wird unter der freien  European Union Public Licence (EUPL) [Link einfügen] entwickelt. Eine Nutzung der Software ist damit grundsätzlich ohne weitere Lizenzkosten möglich. InGrid wird von einem Projektkonsortium gepflegt und weiter entwickelt. Mehr Informationen zur Projektorganisation finden sie ... [Verweis auf entsprechenden Menüpunkt]

| Name                | Description            |
|---------------------|------------------------|
| Portaloberfläche  | [Jetspeed (Apache Lizenz, Apache Software Foundation)](http://portals.apache.org/jetspeed-2/)  |
| Suchmaschine  | [Nutch (Apache Lizenz, ASF) &  Lucene (Apache Lizenz, ASF)](https://nutch.apache.org/) |
| Kartenviewer  | [OpenLayers (BSD 2-Clause License)](http://openlayers.org/)  |
| Indexierung von Datenbanken  | [Lucene (Apache Lizenz, ASF)](https://lucene.apache.org/) |
| Unterstützte Datenbanken  | [MySQL](https://www.mysql.com/), [Oracle](http://www.oracle.com/) |

