import React from 'react';
import { Text, View } from 'react-native';
import FeedRecipe from '../components/FeedRecipe';

class Home extends React.Component {
  render() {
    return (
      
        <View>
            <Text>Home!</Text>
            <FeedRecipe />
        </View>      
    );
  }
}

export default Home;
