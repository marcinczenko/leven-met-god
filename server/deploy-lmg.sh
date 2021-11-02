(cd identity-box/deployments && tar xzvf public-lmg.tar.gz)
(cd identity-box/deployments && rm -rf lmg.czenko.info)
(cd identity-box/deployments && mv public lmg.czenko.info && rm -rf public-lmg.tar.gz)
