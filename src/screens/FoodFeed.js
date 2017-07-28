import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { foods } from '../data';
import { Text, View, ScrollView, Button } from 'react-native';

class FoodFeed extends Component {
  onLearnMore = food => {
    this.props.navigation.navigate('Details', { ...food });
  };

  render() {
    return (
      <View>
        {/* <Button title="Add Item" onPress={() => this.props.navigation.navigate('Item')} /> */}
        {/* <Button title="Add Box" onPress={() => this.props.navigation.navigate('Box')} /> */}

        <ScrollView>
          <List>
            {foods.map(food =>
              <ListItem
                key={food.title}
                roundAvatar
                avatar={{ uri: food.avatar }}
                title={food.title.toUpperCase()}
                subtitle={food.author}
                onPress={() => this.onLearnMore(food)}
              />
            )}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default FoodFeed;
