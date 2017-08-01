import React from 'react';
import { Text, View, TextInput, Button,Slider,Picker } from 'react-native';

class Ingredient extends React.Component {
  state = {
    text:''
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Add Ingredient`,
    
    headerRight: <Button title="Done" onPress={() => navigation.goBack()} />
  });

  render() {
    return (
      <View>
        <TextInput style={{ height: 40 }} placeholder="Ingredient" onChangeText={text => this.setState({ text })}  value={this.state.text}/>
          <Slider/>
          <Picker
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Units" value="units" />
  <Picker.Item label="Oz" value="oz" />
  <Picker.Item label="Grams" value="grams" />
  <Picker.Item label="mL" value="mL" />
</Picker>
      </View>
    );
  }
}

export default Ingredient;
