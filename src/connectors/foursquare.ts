import fsq from '@api/fsq-developers';
import config from '../config/foursquare';
import { PlaceSearchMetadataParam, PlaceSearchResponse200 } from '@api/fsq-developers/types';
import Restaurant from '../interfaces/Restaurant';

export default (key?: string) => {
  // Put initializations here
  fsq.auth(key || config.apiKey);
};

const toPriceClassification = (price: number) : string => ({
  1: 'Cheap',
  2: 'Moderate',
  3: 'Expensive',
  4: 'Very Expensive'
}[price] || 'Not Available');

const toRestaurants  = (response: PlaceSearchResponse200): Array<Restaurant> => {
  return response?.results?.map((restaurant): Restaurant => ({
    name: restaurant.name || '',
    description: restaurant.description || '',
    tel: restaurant.tel || '',
    email: restaurant.email || '',
    website: restaurant.website || '',
    hours: restaurant.hours?.display || '',
    rating: restaurant.rating || 0,
    priceClassification: toPriceClassification(restaurant.price || 0),
    address: restaurant?.location?.formatted_address || '',
    categories: restaurant?.categories?.map(category => category.short_name || '') || [],
    isOpen: restaurant?.closed_bucket?.replace(/([A-Z])/g, " $1").trim() || '',
  })) || [];
};

export const findDiningPlaces = async (parameters: PlaceSearchMetadataParam) => {
  const result = await fsq.placeSearch({
    categories: config.diningCategoryId,
    fields: 'name,location,categories,closed_bucket,description,tel,email,website,hours,rating,price',
    ...parameters
  });

  return toRestaurants(result?.data);
};
