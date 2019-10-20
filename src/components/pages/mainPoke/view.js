import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text, View,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import * as api from '../../../api'
import PokeCell from '../../molecules/poke-cell';


class MainPoke extends Component {
  
  
  componentDidMount() {
    this.props.initPokeList();


  }

  _onPokemonTapped = item => {
    this.props.updateItem(item);
    Actions.Detail({
      title: item.name,
    });
  };

  _onEndReached = ({distanceFromEnd}) => {
    const {isFetching, pokemonList, total} = this.props;
    const onEndReached =
      distanceFromEnd > 100 && !isFetching && pokemonList.length < total;
    if (onEndReached) {
      this.props.updatePokeListOffset();
    }
  };

 
  _renderItem = ({item} ) => {

    return (
        
        <PokeCell
          item={item}
          onPokemonPress={item => this._onPokemonTapped(item)}
          
        
        />
        
      )};

  render() {
    const {pokemonList, isFetching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.styleCell}
          data={pokemonList}
          renderItem={this._renderItem}
          keyExtractor={(item,index) => `pokemon-${index}`}
          numColumns={1}
          extraData={this.props}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.initPokeList}
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
