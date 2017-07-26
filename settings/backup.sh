prodDir=/home/sos/egrubarm
testDir=/home/gcsomoza/gowork/src/github.com/jmsemira/egrub
if [ -d "$prodDir" ]
then
  cd $prodDir
./egrub -backup
elif [ -d "$testDir" ]
then
  cd $testDir
./egrub -backup
else
  echo "egrub backup shell script not found in"
  echo "$prodDir or"
  echo "$testDir"
fi
