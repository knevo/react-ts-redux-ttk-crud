import app from './server'
import { logger } from './services/logger.service';

const port = process.env.PORT || 3030;

app.listen(port, () => {
  logger.info('Server is running on port: ' + port)
});
