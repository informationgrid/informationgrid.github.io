---
layout: default
title: Betrieb
description: "InGrid: Indexieren, Recherchieren, Visualisieren, Teilen"
sitemap: false
---

## Allgemeine Hinweise

Die InGrid Komponenten können jederzeit neu gestartet werden. Laufende Indexierungsprozesse werden aufgeräumt.

## Updates

Die meisten Komponenten können durch den Aufruf des Installers und der entsprechenden “Update” Option einfach aktualisiert werden. Weitere Informationen finden sich in den Dokumentationen der einzelnen Komponenten.

## Backup

TBD

## Überwachung im laufenden Betrieb

TBD

## Hinweise zum Betrieb auf mehreren Servern

TBD

## Linux

Es empfiehlt sich ein Script zu schreiben, was die InGrid Komponenten bei System Reboot sauber beendet und wieder startet.

{% highlight bash %}
#! /bin/sh

### BEGIN INIT INFO
# Provides:             ingrid
# Required-Start:       $all
# Required-Stop:        $remote_fs $syslog
# Default-Start:        2 3 4 5
# Default-Stop:         0 1 6
# Short-Description:    ingrid application
### END INIT INFO

# Start script
# set java home
export INGRID_JAVA_HOME=/usr/lib/jvm/java-8-oracle

# Carry out specific functions when asked to by the system
case "$1" in
start)
echo "Starting ingrid script"
;;
stop)
echo "Stopping ingrid script"
;;
restart)
echo "Restart ingrid script"
;;
status)
echo "Status ingrid script"
;;
esac

su "ingrid" -c /bin/sh /opt/ingrid/ingrid-ibus/start.sh $1
su "ingrid" -c /bin/sh /opt/ingrid/ingrid-iplug-dsc/start.sh $1

# ... add other ingrid components

exit 0
{% endhighlight %}
