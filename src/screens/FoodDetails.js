import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class FeedDetails extends Component {
  render() {
const { title, author, favs, comments, avatar, spins, servings,ingredients,directions } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: avatar }}
          featured
          title={title}
          caption={author}
        />

        <List>
          <ListItem title="Favs" rightTitle={favs} hideChevron />
          <ListItem title="comments" rightTitle={comments} hideChevron />
        </List>

        {/* <List>
          <ListItem title="Username" rightTitle={ingredients} hideChevron />
        </List>         */}
      </ScrollView>
    );
  }
}

export default FeedDetails;
