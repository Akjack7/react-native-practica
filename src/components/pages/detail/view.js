import React from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text} from 'react-native';
import {CharacterCell} from '../../molecules';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.fetchPokeDetail();


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
