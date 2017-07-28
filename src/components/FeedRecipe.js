import React from 'react';
import styled from 'styled-components/native';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class FeedRecipe extends React.Component {
  render() {
    return (
      <Card>
        <View  style={{flexDirection: 'row'}}>
          <Description>
            <Title>Baked Chicken</Title>
            <Creator>By Zorra</Creator>
          </Description>
          <View style={{justifyContent: 'flex-end'}}>
          <Icon name="favorite-border" color="red"/>
          </View>
        </View>
        <FeedImage source={require('../../dummyData/media/chicken.png')}/>
      </Card>
    );
  }
} 

export default FeedRecipe;


const Card = styled.View`
  border: solid grey;
  border-radius: 6;
  width: 300;
  height: 450; 
  align-self: center;
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