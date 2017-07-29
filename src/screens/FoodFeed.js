import React, { Component } from 'react';
import styled from 'styled-components/native';
import { List, ListItem } from 'react-native-elements';
import { foods } from '../data';
import { Text, View, ScrollView, FlatList, Button,TouchableOpacity } from 'react-native';
import FeedRecipe from '../components/FeedRecipe';


class FoodFeed extends Component {
  onLearnMore = food => {
<<<<<<< HEAD
    console.log('hello')
=======
    console.log('ON FUCKING SHIIT')
>>>>>>> Changes view to touchable opacity
    this.props.navigation.navigate('Details', { ...food });
  };

  render() {
    return (
      <View>
          <FlatList
            data={foods}
            renderItem={({item}) => {
              return <View>
                <TouchableOpacity onPress={() => this.onLearnMore(item)} >
                <FeedRecipe
                key={item.title}
                roundAvatar
                avatar={{ uri: item.avatar }}
                title={item.title.toUpperCase()}
                subtitle={item.author}
              />
              </TouchableOpacity>  
              </View>
            }}
          />
      </View>
    );
  }
}

export default FoodFeed;

const Container = styled.View`
 
`