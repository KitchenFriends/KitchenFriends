import React, { Component } from 'react';
import styled from 'styled-components/native';
import { List, ListItem, Icon } from 'react-native-elements';
import { foods } from '../data';
import { Text, View, ScrollView, FlatList, Button,TouchableOpacity } from 'react-native';


class FoodFeed extends Component {
  onLearnMore = food => {
    this.props.navigation.navigate('Details', { ...food });
  };

  render() {
    return (
      <View>
          <FlatList
            data={foods}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity onPress={() => this.onLearnMore(item)} >
                  <Card>
                    <View style={{flexDirection: 'row'}}>
                    <Description>
                      <Title>{item.title}</Title>
                      <Creator>{item.author}</Creator>
                    </Description>
                    <Icon name="favorite-border" color="red" />
                    </View>
                    <FeedImage source={{ uri: item.avatar}} />
                  </Card>
                </TouchableOpacity>  
              </View>
            )}
          />
      </View>
    );
  }
}


export default FoodFeed;


const Card = styled.View`
  border: solid grey;
  border-radius: 6;
  width: 300;
  height: 450; 
  align-self: center;
  margin-bottom: 10;
`;

const Description = styled.View`
  display: flex;
  flex-direction: column;
  height: 50;
  justify-content: flex-start;
`;

const Title = styled.Text`
  padding-left: 10;
  padding-top: 13;
`;

const Creator = styled.Text`
  padding-left: 10;
`;

const FeedImage = styled.Image`
  width: 300;
  height: 350;
`;