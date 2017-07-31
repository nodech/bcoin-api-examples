
'use strict';

const defaults = require('./lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get coins by Address
 */
(async () => {
  let hash, index;

  //vars
  hash='4692772a73ea834c836915089acf97f2c790380a2b8fd32f82729da72545d8c5';
  index=0;

  /**
      curl $url/coin/$hash/$index
   *  ---
      bcoin cli coin $hash $index
   */

  try {
    let coins = await client.getCoin(hash, index);

    console.log(coins);
  } catch (e) {
    console.error(e);
  }
})();
