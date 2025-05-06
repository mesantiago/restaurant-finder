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

  const restaurantList = (restaurants || [])
    .map((restaurant) => (
      <View style={styles.restaurantCard}>
        <Text style={styles.restaurantIsOpen}>Open now: {restaurant.isOpen}</Text>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.restaurantCategories}>
          {restaurant.categories.map(category => (
            <View style={styles.restaurantCategory}>
              <Text>{category}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.restaurantAddress}>Address: {restaurant.address}</Text>
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
  restaurantList: {
    width: '500px',
    maxWidth: '100%'
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
  },
  restaurantIsOpen: {
    fontSize: '8pt',
    fontWeight: 'bold',
    color: colors.defaultButton,
    textAlign: 'right'
  },
  restaurantAddress: {
    marginTop: '20px',
    marginBottom: '20px'
  }
});