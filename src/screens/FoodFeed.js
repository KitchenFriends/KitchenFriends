import React, { Component } from 'react';
import styled from 'styled-components/native';
import { List, ListItem } from 'react-native-elements';
import { foods } from '../data';
import { Text, View, ScrollView, FlatList, Button } from 'react-native';
import FeedRecipe from '../components/FeedRecipe';

class FoodFeed extends Component {
  onLearnMore = food => {
    this.props.navigation.navigate('Details', { ...food });
  };

  render() {
    return (
      <View>
        {/* <Button title="Add Item" onPress={() => this.props.navigation.navigate('Item')} /> */}
        {/* <Button title="Add Box" onPress={() => this.props.navigation.navigate('Box')} /> */}

          <FlatList
            data={foods}
            renderItem={({item}) => {
              return <FeedRecipe
                key={item.title}
                roundAvatar
                avatar={{ uri: item.avatar }}
                title={item.title.toUpperCase()}
                subtitle={item.author}
                onPress={() => this.onLearnMore(item)}
              />
            }}
          />
      </View>
    );
  }
}

export default FoodFeed;

const Container = styled.View`
 
`