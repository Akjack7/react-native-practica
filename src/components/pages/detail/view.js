import React from 'react';
import { SafeAreaView, FlatList, RefreshControl, Text, Image, View } from 'react-native';
import styles from './styles';
import _ from 'lodash';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.props.setPokemon(this.props.pokemon.url)
  }

  componentDidMount() {

  }


  render() {
    const { pokemon, isFetching, pokemonDetail } = this.props;
    const image = _.get(pokemonDetail, 'detail.sprites.front_default')
    const weight = _.get(pokemonDetail, 'detail.weight')
    const abilities = _.get(pokemonDetail, 'detail.abilities')
    console.log("pokeDataPintar", image)
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
        />
        <Text style={styles.text}>
          Weight: {weight}
        </Text>
        <Text style={styles.abilitiesTitle}>Abilities:</Text>
        <FlatList
          style={styles.abilities}
          data={abilities}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
              <Text
                style={styles.abilities}
              >
                {item.ability.name}
              </Text>
            </View>
          )}
        >

        </FlatList>
      </SafeAreaView>
    );
  }
}

export default Detail;
