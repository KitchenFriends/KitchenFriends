import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import UserDetail from '../screens/UserDetail';

import FoodFeed from '../screens/FoodFeed'
import FoodDetails from '../screens/FoodDetails'
import FeedRecipe from '../components/FeedRecipe';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Cook from '../screens/Cook';

export const FeedStack = StackNavigator({
  Feed: {
    screen: FoodFeed
  },
  Details: {
    screen: UserDetail
  }  
});

export const CardStack = StackNavigator({
  Card: {
    screen: FoodFeed
  },
  Details: {
    screen: FoodDetails
  }  
});

export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarlabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarlabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={25} color={tintColor} />
      }
    },
    Add: {
      screen: FeedStack,
      navigationOptions: {
        tabBarlabel: 'Add',
        tabBarIcon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />
      }
    },
    Cook: {
      screen: CardStack,
      navigationOptions: {
        tabBarlabel: 'Cook',
        tabBarIcon: ({ tintColor }) => <Icon name="local-dining" size={25} color={tintColor} />
      }
    }
  },

  {
    swipeEnabled: true,
    animationEnabled: true
  }
);
