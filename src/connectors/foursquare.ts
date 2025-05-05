import fsq from '@api/fsq-developers';
import config from '../config/foursquare';
import { PlaceSearchMetadataParam, PlaceSearchResponse200 } from '@api/fsq-developers/types';
import Restaurant from '../interfaces/Restaurant';

export default (key?: string) => {
  // Put initializations here
  fsq.auth(key || config.apiKey);
};

const toRestaurants  = (response: PlaceSearchResponse200): Array<Restaurant> => {
  return response?.results?.map((restaurant): Restaurant => ({
    name: restaurant.name || '',
    address: restaurant?.location?.formatted_address || '',
    categories: restaurant?.categories?.map(category => category.short_name || '') || [],
    isOpen: restaurant?.closed_bucket?.replace(/([A-Z])/g, " $1").trim() || '',
  })) || [];
};

export const findDiningPlaces = async (parameters: PlaceSearchMetadataParam): Promise<Array<Restaurant>> => {
  const result = await fsq.placeSearch({
    categories: config.diningCategoryId,
    ...parameters
  });

  return toRestaurants(result?.data);
};
