import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

class Search extends React.Component {
  testGet() {
    fetch('http://localhost:3000/')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

//     componentDidMount() {
//     fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(users => this.setState({ users })
//     .then(()=>{console.log('Done!')}));

//   }

  render() {
    return (
      <View>
        <Text>Search</Text>
        <Button
          onPress={() => {
            console.log('here');             
            this.testGet()
          }}
          title="test"
        />
      </View>
    );
  }
}

export default Search;
