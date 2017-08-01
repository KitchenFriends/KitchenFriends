import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import FoodFeed from '../screens/FoodFeed'
import FoodDetails from '../screens/FoodDetails'

import Home from '../screens/Home'; //not used
import Search from '../screens/Search';
import User from '../screens/User'; 
import Share from '../screens/Share'

//ShareStack
import Ingredient from '../screens/Ingredient'
import Direction from '../screens/Direction'


export const CardStack = StackNavigator({
  Card: {
    screen: FoodFeed
  },
  Details: {
    screen: FoodDetails
  }  
});

export const ShareStack = StackNavigator({
  Home: {
    screen: Share
  },
  Ingredients : {
    screen: Ingredient
  },
  Directions : {
    screen: Direction,
    title:'OP',
    headerTitle: 'Test',
    navigationOptions: ({navigation}) => ({      
      headerBackTitle: 'Testing'
    }),
  },
    
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
      screen: ShareStack,
      navigationOptions: {
        tabBarlabel: 'Share',
        tabBarIcon: ({ tintColor }) => <Icon name="add" size={30} color={tintColor} />
      }
    },
    Profile: {
      screen: User,
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
