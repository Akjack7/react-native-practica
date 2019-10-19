import React from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text} from 'react-native';
import styles from './styles';
import _ from 'lodash';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.props.setPokemon(this.props.pokemon.url);
  }
  
  componentDidMount() {
   
  }

  
  render() {
    const {pokemon, isFetching} = this.props;
    console.log(pokemon)
    return (
      <SafeAreaView style={styles.container}>
        <Text>{pokemon.url}</Text>
      </SafeAreaView>
    );
  }
}

export default Detail;
