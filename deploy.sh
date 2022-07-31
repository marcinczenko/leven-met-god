DEPLOYHOST="idbox-3.local"
if [ -n "$1" ]; then
  DEPLOYHOST=$1
else
  echo "No deployment hostname provided."
fi

echo "Deploying to $DEPLOYHOST"

yarn build
tar czvf public-lmg.tar.gz public/
scp public-lmg.tar.gz idbox@$DEPLOYHOST:~/personal-hosting/deployments/
ssh idbox@$DEPLOYHOST /home/idbox/personal-hosting/deploy-lmg.sh
rm public-lmg.tar.gz
