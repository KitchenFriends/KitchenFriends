import React from 'react';
import { Text,TextInput,View,Button } from 'react-native';

class Share extends React.Component {
  state = {
    text: ''
  };

  addIngredient = food => {
    this.props.navigation.navigate('Ingredients');
  };

  addDirections = food => {
    this.props.navigation.navigate('Directions');
  };

  render() {
    return (
      <View>
        <Text>This is the share page</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter Title"
          onChangeText={text => this.setState({ text })}
        />
        <Button title='upload photo'/>
        
        <Text>Ingredients</Text>
        <Button title='Add Ingredient' onPress={()=>this.addIngredient()}/>
        <Text>Directions</Text>
        <Button title='Add Direction' onPress={()=>this.addDirections()}/>
      </View>
    );
  }
}

export default Share;
