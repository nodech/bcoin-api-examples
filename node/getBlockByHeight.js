'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Block by Height
 */
(async () => {
  let blockHeight;

  //vars
  blockHeight=1500;

  /**
     curl $url/block/$blockHeight
   * ---
     bcoin cli block $blockHeight
   */
  try {
    const block = await client.getBlock(blockHeight);

    console.log(block);
  } catch (e) {
    console.error(e);
  }

})();
