import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text, View} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import * as api from '../../../api'
import PokeCell from '../../molecules/poke-cell';


class MainPoke extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            pokelist: []
        }        

      }

      componentWillMount() {
        this.fetchPokeList()
       }
     
       fetchPokeList() {
         api.getPokemons().then(res => {
             this.setState({pokelist: res.data.results})
         }).catch(err => {
             console.log("Error al recibir los pokemons")
         })
       }

       _renderItem(item) {
         return <PokeCell item={item} onPress={() => this.props.onPokeTapped(item)}/>
       }

  render() {

    return (
        <FlatList
        data={this.state.pokelist}
        renderItem={({item}) => this._renderItem(item)}
        
        />

    );
  }
}

export default MainPoke;
