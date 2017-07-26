prodDir=/home/sos/egrubarm
testDir=/home/gcsomoza/gowork/src/github.com/jmsemira/egrub
if [ -d "$prodDir" ]
then
  cd $prodDir
  fileSize=`stat -c %s "$prodDir/oms.db"`
  if [ "$fileSize" -gt "0" ]
  then
    cp -a oms.db oms-backup.db
  fi
elif [ -d "$testDir" ]
then
  cd $testDir
  fileSize=`stat -c %s "$testDir/oms.db"`
  if [ "$fileSize" -gt "0" ]
  then
    cp -a oms.db oms-backup.db
  fi
else
  echo "egrub working directory not found in"
  echo "$prodDir or"
  echo "$testDir"
fi
