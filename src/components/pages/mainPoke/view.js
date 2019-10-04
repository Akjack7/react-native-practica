import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
//import {HouseCell} from '../../molecules';
//import _ from 'lodash';
import api from '../../../api'


class MainPoke extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            pokelist: []
        }
      }

      componentWillMount() {
        //   this.fetchPokeList()
       }
     
       fetchPokeList() {
         api.getPokemons().then(res => {
             console.log("pokes:", res)
         }).catch(err => {
             console.log("Error al recibir los pokemons")
         })
       }

  render() {

    return (
      <SafeAreaView >
        <Text>Hola</Text>

      </SafeAreaView>
    );
  }
}

export default MainPoke;
