import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@config': `${__dirname}/config`,
  '@routes': `${__dirname}/routes`,
  '@store': `${__dirname}/store`,
});

import configExpress from '@config/express';
import configSessions from '@config/sessions';
import configRoutes from '@config/routes';
import configStaticFiles from '@config/staticFiles';

const [app] = configExpress();
const [sessionParser] = configSessions();
configRoutes(app);
configStaticFiles(app);

const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log(`*~~% axsripoff.com (port ${port}) %~~*`);
});
