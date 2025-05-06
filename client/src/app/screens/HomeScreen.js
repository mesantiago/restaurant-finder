import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchBox from '../components/SearchBox';
import RestaurantService from '../services/Restaurants';

function HomeScreen () {
  const [errorMessage, changeMessage] = React.useState('');
  const [restaurants, changeRestaurants] = React.useState([]);

  const onSearch = async (searchText) => {
    changeMessage('');
    RestaurantService.search(searchText)
      .then(data => {
        changeRestaurants(data);
      })
      .catch(error => {
        changeMessage(error?.data?.message || error.message);
      });
  };

  const toDetailRow = (name, value) => value ? (
    <View style={styles.detail}>
      <View style={styles.detailName}>{name}:</View>
      <View style={styles.detailValue}>{value}</View>
    </View>
  ) : null;

  const restaurantList = (restaurants || [])
    .map((restaurant) => (
      <View style={styles.restaurantCard}>
        <Text style={styles.restaurantIsOpen}>Open now: {restaurant.isOpen}</Text>
        <Text style={styles.restaurantName}>{restaurant.name}{restaurant.rating ? (<Text> - <Text style={styles.restaurantRating}>{restaurant.rating} ★</Text></Text>) : null}</Text>
        <View style={styles.restaurantDetails}>
          {toDetailRow('Opening Hours', restaurant.hours)}
          {toDetailRow('Address', restaurant.address)}
          {toDetailRow('Email', restaurant.email)}
          {toDetailRow('Tel', restaurant.tel)}
          {toDetailRow('Price Classification', restaurant.priceClassification)}
          {toDetailRow('Description', restaurant.description)}
        </View>
        <View style={styles.restaurantCategories}>
          {restaurant.categories.map(category => (
            <View style={styles.restaurantCategory}>
              {category}
            </View>
          ))}
        </View>
      </View>
    ));

  return (
    <Screen>
      <View style={styles.home}>
        <SearchBox onSubmit={onSearch} />
        <View style={styles.messageContainer}>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
        <View style={styles.restaurantsList}>
          {restaurantList}
        </View>
      </View>
    </Screen>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    alignItems: 'center'
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  error: {
    color: colors.error
  },
  restaurantsList: {
    width: '500px',
    maxWidth: '80%'
  },
  restaurantCard: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 3,
    marginTop: 3
  },
  restaurantName: {
    color: 'white',
    fontSize: '15pt',
    fontWeight: 'bold'
  },
  restaurantCategories: {
    flexDirection: 'row-reverse',
  },
  restaurantCategory: {
    padding: '5px',
    marginRight: '5px',
    backgroundColor: colors.secondaryButton,
    fontSize: '9pt',
    borderRadius: '5px'
  },
  restaurantIsOpen: {
    fontSize: '9pt',
    fontWeight: 'bold',
    color: colors.defaultButton,
    textAlign: 'right'
  },
  restaurantDetails: {
    marginTop: '20px',
    marginBottom: '20px',
    color: 'white',
    fontSize: '9pt'
  },
  restaurantRating: {
    color: colors.tertiaryButton
  },
  detail: {
    flexDirection: 'row',
    marginBottom: '10px'
  },
  detailName: {
    flex: 0.3,
    fontWeight: 'bold'
  },
  detailValue: {
    flex: 0.7
  }
});