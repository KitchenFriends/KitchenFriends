import React from 'react';
import { View, Text } from 'react-native';

class Directions extends React.Component {

  renderDirections() {
    const directionStepsArr = Object.keys(this.props.directions);
    const directions = this.props.directions;
    return directionStepsArr.map(step => (
      <Text>{step} {directions[step]}</Text>
    ))
  }

  render() {
    return(
      <View>
        {this.renderDirections()}
      </View>
    );
  }
}


// "directions": {
//         "1": "cook chicken",
//         "2": "add salad", 
//         "3": "add pesto", 
//         "4": "add mix", 
//     },
export default Directions;