DEPLOYHOST="idbox-1-new.local"
if [ -n "$1" ]; then
  DEPLOYHOST=$1
else
  echo "No deployment hostname provided."
fi

echo "Deploying to $DEPLOYHOST"

yarn build
tar czvf public-lmg.tar.gz public/
scp public-lmg.tar.gz pi@$DEPLOYHOST:~/identity-box/deployments/
ssh pi@$DEPLOYHOST /home/pi/identity-box/deploy-lmg.sh
rm public-lmg.tar.gz
