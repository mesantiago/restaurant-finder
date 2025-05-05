interface Config {
  apiKey: string;
  diningCategoryId: string;
}

const config: Config = {
  apiKey: process.env.FOURSQUARE_API_KEY || '',
  diningCategoryId: '63be6904847c3692a84b9bb5',
};

export default config;
