import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text, View} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import * as api from '../../../api'
import PokeCell from '../../molecules/poke-cell';


class MainPoke extends Component {
  
  componentDidMount() {
    this.props.fetchPokeList();

  }


  _renderItem = ({item}) => (
    
    <PokeCell
      pokemon={item}
     // onHousePress={house => this._onHouseTapped(house)}
    
    />
  );

  render() {
    const {pokemonsList, isFetching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.styleCell}
          data={pokemonsList}
          renderItem={this._renderItem}
          keyExtractor={item => `pokemon-${item.id}`}
          numColumns={2}
          extraData={this.props}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.fetchPokeList}
              tintColor={'white'}
              colors={['white']}
            />
          }
        />
      </SafeAreaView>
    );
  }
  }


export default MainPoke;
