---
layout: default
title: Überblick
description: "Indexieren, Recherchieren, Visualisieren, Teilen"
---

## Das Projekt

Die InGrid-Softwarekomponenten werden im Rahmen des Projekts "InGrid - Pflege und Weiterentwicklung der InGrid-Softwarekomponenten zum Betrieb von Internetportalen und Metadatenkatalogen" (VKoopUIS-Projekt Nr. 50) unter dem Dach "Verwaltungskooperation Umweltinformationssysteme" (VKoopUIS) weiter entwickelt.

Beteiligt sind die Partner:

* Niedersächsisches Ministerium für Umwelt, Energie und Klimaschutz (Federführung)
* Bundesanstalt für IT-Dienstleistungen
* Ministerium für Ländliche Entwicklung, Umwelt und Landwirtschaft Brandenburg
* GeoInformation Bremen
* Behörde für Stadtentwicklung und Umwelt Hamburg
* Landesamt für Umwelt, Naturschutz und Geologie Mecklenburg-Vorpommern
* Landesamt für Vermessung, Geoinformation und Landentwicklung Saarland
* Sächsisches Landesamt für Umwelt, Landwirtschaft und Geologie
* Ministerium für Landwirtschaft und Umwelt des Landes Sachsen-Anhalt

Im Rahmen des Projektes wird die Software InGrid gepflegt und weiter entwickelt. InGrid wurde zwischen 2005 und 2014 im Rahmen der Bund/Länder-Verwaltungsvereinbarung UDK/GEIN ("PortalU") entwickelt, u.a. um die Verpflichtungen, die sich aus der Umsetzung der relevanten europäischen und nationalen Gesetzgebungen (z.B. [Umweltinformtionsrichtlinie](http://www.bmub.bund.de/service/publikationen/downloads/details/artikel/umweltinformationsrichtlinie-des-europaeischen-parlaments-und-des-rates-vom-28012003-richtlinie-20034eg/)/[Umweltinformationsgesetze](http://de.wikipedia.org/wiki/Umweltinformationsgesetz), [INSPIRE-Richtlinie](http://inspire.ec.europa.eu/)/[Geodatenzugangsgesetze](http://de.wikipedia.org/wiki/Geodatenzugangsgesetz)) ergeben, zu erfüllen.

Seit dem 01.01.2015 stehen die InGrid-Software-Komponenten unter der [European Union Public License](https://joinup.ec.europa.eu/software/page/eupl) (EUPL).

Sollten Sie Fragen zum Projekt, Interesse an der Nutzung bestimmter InGrid-Komponenten oder an einer Projektmitarbeit haben, wenden Sie sich bitte per E-Mail an vkoopuis AT informationgrid.eu

## InGrid Überblick

Die InGrid-Software stellt modulare Technologien für den Aufbau von Datenportalen zur Verfügung. Sie wurde u.a. entlang der Vorgaben und Empfehlungen der [Geodateninfrastruktur Deutschland](http://www.geoportal.de/) (GDI-DE) entwickelt und eignet sich daher auch zum Aufbau INSPIRE- und GDI-DE-konformer Geodateninfrastrukturen.

<div class="mxgraph" style="position:relative;overflow:hidden;width:343px;height:204px;margin:30px 0 10px 0"><div style="width:1px;height:1px;overflow:hidden;">zZdPT+M8EIc/TY+g/Kc9vkBhl4XD0tVb7dGJp4kXx64chzR8emwybhJyQaqKIrWq85vRjP14xk4X4U15uFdkXzxJCnwRePSwCG8XQeBHYWR+rNJ2yvIq7oRcMYpOvbBhb4Cih2rNKFQjRy0l12w/FjMpBGR6pO0kH6fYk9yF74VNRvhU3TKqC5xykPT6D2B54dL4yaqzVLp1MSjsSM31xYdkbNZcEhcLV3XwMMIKA7RO8FHYEzGa05uU5UhQUPWwcL1svP5UKgpqlBio8ym0tgj/WwR35kMVe4VLqkhzyeSHFN571563+ftrt66Wj1tY59Hvl4eHx+3zPxpkXTTOxMtwG8K1KQUlpUlhR+XhBrgth+NOxyTyw6UfpbvUIxBcdLO6+6r7cX8UCLfUE0PiDr0SXiPMn+LelqYllnCT5TpVZpTb0aatNJRTfVIEStaCgs3pG3NTMA2bPcmstTF9YrRClxzNqU3dzQKUBtc6X1hrD930H8gStGptdXXugYebjq3nr/C56Ws7SlArBnXtNIJ7mx9D92TNAOF+EXQ4Af0MWQHKfE/D15rEsvkWgK6LBgB953N2gHiQDgD+z6qacFYxULXI50oxdNRmQRFvnwHFP4qIamfOyZnyi6I58cOrcMDvlmgQp8FT1hFP0fO28BHKEJ4DfHZ4VxN4T6AJnTPA0IGYBcDlBOAWUiYKwvWJt8j5CMafzr/vJQgkiZMVhTj0/GxF8PVo1L+yEVwS88Yzz/Mv/lSB5zz/zGP/+vphG/ytCdfv</div></div>

Schematische Darstellung eines InGrid-Portals

<br>

InGrid ist modular aufgebaut. Verschiedene Komponenten bilden eine Art "Informationsnetz" (englisch: information grid). In diesem Netz können verschiedene Datenquellen über Schnittstellen angebunden werden. Die Datenquellen werden über einen verteilten Index integriert, der sowohl über das Portal, als auch über verschiedene Schnittstellen verarbeitet werden kann.


Die wichtigste Komponenten von InGrid sind:

* eine nutzerfreundliche, personalisierbare und flexibel konfigurierbare Portaloberfläche,
* der ISO19115/19119-, INSPIRE- und GDI-DE-konforme, web-basierte Datenkatalog "InGridEditor",
* eine Visualisierungskomponente für OGC-konforme Kartendienste ([OGC WMS](http://www.opengeospatial.org/standards/wms)),
* Diverse An- und Abfrageschnittstellen zur Recherche in angeschlossenen Systemen bzw. für den Transfer von Informationen, z.B. eine OGC-, INSPIRE- und GDI-DE-konforme Katalogschnittstelle ([OGC CSW](http://www.opengeospatial.org/standards/cat)) sowie eine OpenSearch-Schnittstelle. Die CSW-Schnittstellen erlaubt es zum Beispiel, Metadaten aus einem InGridCatalog an Portale wie das [Geoportal Deutschland](http://www.geoportal.de/DE/Geoportal), das [GovData-Datenportal für Deutschland](https://www.govdata.de/) oder das [INSPIRE-Geoportal](http://inspire-geoportal.ec.europa.eu/) abzugeben.


