yarn build
tar czvf public-lmg.tar.gz public/
scp public-lmg.tar.gz pi@idbox-1.local:~/
ssh pi@idbox-1.local /home/pi/deploy-lmg.sh
rm public-lmg.tar.gz
