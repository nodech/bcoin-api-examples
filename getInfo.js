'use strict';

const defaults = require('./lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Node Info
 */
(async () => {
  /**
     curl $url/
   * ---
     bcoin cli info
   */
  let info = await client.getInfo();

  console.log(info);
})();
