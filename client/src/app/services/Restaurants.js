import axios from 'axios';
import settings from '../config/settings';

const baseUri = '/restaurants';

const RestaurantService = {
  search: async message => {
    const result = await axios({
      method: 'post',
      url: settings.baseUrl + baseUri + '/search',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: { message }
    });

    return result.data
  }
};

export default RestaurantService;