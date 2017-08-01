import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class Direction extends React.Component {
  state = {
    text:''
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Add Direction`,
    headerRight: <Button title='Done' onPress={()=>navigation.goBack()}/>
  });
      
  render() {
  const { goBack } = this.props.navigation;  

    return (
      <View>                
        <TextInput style={{ height: 40 }} placeholder="Direction" onChangeText={text => this.setState({ text })}  value={this.state.text}/>
        <Button title="Upload Picture" />
        <Button title='Done' onPress={()=>goBack()}/>
      </View>
    );
  }
}

export default Direction;
