# Logging tool
This is Logging tool for Node.js Bot Platform. It based on [Winston](https://github.com/winstonjs/winston).

```js
import loggerFactory from 'nbp-logger';
const logger = loggerFactory({
    level: 'debug',
    colorize: true
});
```

You can read more about logging levels on [Winston's documentation page](https://github.com/winstonjs/winston/blob/master/README.md#logging-levels).

```js
logger.info('Some info here');
logger.debug('Debug info');
logger.error('Error here');
```

Please, look at [usage example](https://github.com/evilai/nodejs-bot-platform/blob/master/src/libs/logger.js).