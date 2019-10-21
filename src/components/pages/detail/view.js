import React from 'react';
import { SafeAreaView, FlatList, RefreshControl, Text, Image, View , ScrollView} from 'react-native';
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
    const { pokemon, isFetching, pokemonDetail, message } = this.props;
    const image = _.get(pokemonDetail, 'detail.sprites.front_default')
    const weight = _.get(pokemonDetail, 'detail.weight')
    const abilities = _.get(pokemonDetail, 'detail.abilities')
    const comment = _.get(message,'message')


    
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
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

        <Text style={styles.messageTitle}>Comentarios:</Text>
        <Text style={styles.comment}>{comment}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Detail;
