#!/bin/bash
cd /home/sos/egrubarm
if [ -f "egrub" ]
then
  cp egrub egrub-bak
else
  if [ -f "egrub-bak" ]
  then
    cp egrub-bak egrub
  fi
fi
exec /home/sos/egrubarm/egrub
