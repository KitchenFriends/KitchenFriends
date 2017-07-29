import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FoodFeed from '../screens/FoodFeed'
import FoodDetails from '../screens/FoodDetails'

import Home from '../screens/Home';
import Search from '../screens/Search';
import Cook from '../screens/Cook';
import Share from '../screens/Share'


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
    Feed: {
      screen: CardStack,
      navigationOptions: {
        tabBarlabel: 'Feed',
        tabBarIcon: ({ tintColor }) => <Icon name="local-dining" size={30} color={tintColor} />
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarlabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor} />
      }
    },
    Share: {
      screen: Share,
      navigationOptions: {
        tabBarlabel: 'Share',
        tabBarIcon: ({ tintColor }) => <Icon name="add" size={30} color={tintColor} />
      }
    },
    Profile: {
      screen: CardStack,
      navigationOptions: {
        tabBarlabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />
      }
    }
  },

  {
    swipeEnabled: true,
    animationEnabled: true
  }
);
