import app from './app';
import config from './config';
import initializeOpenAi from './connectors/openai';
import initializeFoursquare from './connectors/foursquare';

initializeOpenAi();
initializeFoursquare();

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});