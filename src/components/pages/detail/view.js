import React from 'react';
import {SafeAreaView, FlatList, RefreshControl,Text} from 'react-native';
import {CharacterCell} from '../../molecules';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  //  this.props.initCharactersList();
  }

  

  

  
  render() {
    const {detailList, isFetching} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Text>Hola</Text>
      </SafeAreaView>
    );
  }
}

export default Detail;
