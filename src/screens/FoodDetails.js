import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, ScrollView, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import Ingredients from '../components/Ingredients';
import Directions from '../components/Directions';


class FoodDetails extends Component {
  render() {
  
  const { title, author, favs, comments, avatar, spins, servings,ingredients,directions } = this.props.navigation.state.params;

    return (
      <ScrollView>
        {/*<Tile
          imageSrc={{ uri: avatar }}
          featured
          title={title}
          caption={author}
        />*/}
        <Title>{author}'s {title}</Title>
        <View>
          <FoodImage source={{ uri: avatar }} />
        </View>
        <List>
          <ListItem title="Favs" rightTitle={favs} hideChevron />
          <ListItem title="comments" rightTitle={comments} hideChevron />
        </List>

        <Text>Ingredients</Text>
        <Ingredients ingredients={ingredients}/>

        <Text>Directions</Text>
        <Directions directions={directions} />

        {/* <List>
          <ListItem title="Username" rightTitle={ingredients} hideChevron />
        </List>         */}
      </ScrollView>
    );
  }
}

export default FoodDetails;

const FoodImage = styled.Image`
  height: 200;
`;
const Title = styled.Text`
  align-self: center;
`;