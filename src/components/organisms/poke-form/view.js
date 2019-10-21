import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import styles from './styles';

class PokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      
      
    };
  }

  _onSubmit = () => {
    const {isFetching, pokemonDetail} = this.props;
    const {message} = this.state;
   // if (isFetching) {
     // return;
//    }

    if (!message) {
      Alert.alert('Atención', 'Complete el mensaje');
      return;
    }

    const data = {
      message,
    };

    this.props.submitMessage(data);
    Actions.pop();
  };


  render() {
    const {isFetching} = this.props;
   const {message} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Mensaje:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={message => this.setState({message})}
              placeholder={'Mensaje'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._onSubmit}>
          <Text style={styles.buttonLabel}>{'Envíar'}</Text>
          {isFetching ? (
            <ActivityIndicator
              color={'black'}
              style={styles.activityIndicator}
            />
          ) : null}
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}

export default PokeForm;
