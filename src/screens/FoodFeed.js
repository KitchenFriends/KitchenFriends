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
      <Container>
        {/* <Button title="Add Item" onPress={() => this.props.navigation.navigate('Item')} /> */}
        {/* <Button title="Add Box" onPress={() => this.props.navigation.navigate('Box')} /> */}

        {/*<ScrollView>*/}
        {/*<List>*/}
          <FlatList>
            data={foods}
            renderItem={({ item }) => {
              console.log('INSIDE RENDER ITEMS')
            
              return <FeedRecipe 
                key={item.title}
                roundAvatar
                avatar={{ uri: item.avatar }}
                title={item.title.toUpperCase()}
                subtitle={item.author}
                onPress={() => this.onLearnMore(item)}
              />
            }}
            {/*{foods.map(food =>
              <FeedRecipe
                key={food.title}
                roundAvatar
                avatar={{ uri: food.avatar }}
                title={food.title.toUpperCase()}
                subtitle={food.author}
                onPress={() => this.onLearnMore(food)}
              />
            )}*/}
          </FlatList>
        {/*</List>*/}
        {/*</ScrollView>*/}
      </Container>
    );
  }
}

export default FoodFeed;

const Container = styled.View`
  flex: 1;
`