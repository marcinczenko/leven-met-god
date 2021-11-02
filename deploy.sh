yarn build
tar czvf public-lmg.tar.gz public/
scp public-lmg.tar.gz pi@idbox-1-new.local:~/identity-box/deployments/
ssh pi@idbox-1-new.local /home/pi/identity-box/deploy-lmg.sh
rm public-lmg.tar.gz
