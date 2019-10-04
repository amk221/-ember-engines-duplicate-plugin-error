/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'bar',

  lazyLoading: Object.freeze({
    enabled: false
  }),

  isDevelopingAddon() {
    return true;
  }
});
