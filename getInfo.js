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
  try {
    let info = await client.getInfo();

    console.log(info);
  } catch (e) {
    console.error(e);
  }

})();
