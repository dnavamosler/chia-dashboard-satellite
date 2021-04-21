const config = require('./lib/service/config');
const firstRunWizard = require('./lib/service/first-run-wizard');
const statsCollection = require('./lib/service/stats-collection');
const logger = require('./lib/service/logger');
const chiaDashboardUpdater = require('./lib/service/chia-dashboard-updater');

(async () => {
  await config.init();
  if (!config.configExists) {
    await firstRunWizard.run();
  }
  chiaDashboardUpdater.init();
  await statsCollection.init();
  logger.log({ level: 'info', msg: 'Chia-Dashboard-Satellite initialized' });
})();