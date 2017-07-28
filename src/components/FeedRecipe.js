import React from 'react';
import styled from 'styled-components/native';
import { View, Image, Text } from 'react-native';

class FeedRecipe extends React.Component {
  render() {
    return (
      <Card>
        <Description>
          <Title>Baked Chicken</Title>
        </Description>
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
  height: 50;
`;

const Title = styled.Text`
  margin-left: 10;
  align-self: center;
`

const FeedImage = styled.Image`
  width: 300;
  height: 350;
`;