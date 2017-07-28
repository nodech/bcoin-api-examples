'use strict';

const defaults = require('./lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get coins by Address
 */
(async () => {
  /**
   *  vars:
        address=n3BmXQPa1dKi3zEyCdCGNHTuE5GLdmw1Tr
   */

  /**
      curl $url/coin/address/$address
   *  ---
      bcoin cli coin $address
   */

  let coins = await client.getCoinsByAddress('n3BmXQPa1dKi3zEyCdCGNHTuE5GLdmw1Tr');

  console.log(coins);
})();
