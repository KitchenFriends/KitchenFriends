import React from 'react';
import { View, Text } from 'react-native';

class Ingredients extends React.Component {
 
  renderIngredients() {
    return this.props.ingredients.map(ingredient => (
      <View>
        <Text>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</Text>
      </View>  
    ))
  }

  render() {
    return(
      <View>
        {this.renderIngredients()}
      </View>
    );
  }
}


// "ingredients": [
//       {"ingredient": "chicken","amount":2, "unit": "lbs"},
//       {"ingredient": "salad","amount":3, "unit": "oz"},
//       {"ingredient": "pesto","amount":1, "unit": "g"},                
//     ]


export default Ingredients;