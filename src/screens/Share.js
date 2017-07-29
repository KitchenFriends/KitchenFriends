import React from 'react';
import { Text,TextInput,View,Button } from 'react-native';

class Share extends React.Component {
  state = {
    text: ''
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
        <Button title='Add Ingredient'/>

        <Text>Directions</Text>
        <Button title='Add Directions'/>
      </View>
    );
  }
}

export default Share;
