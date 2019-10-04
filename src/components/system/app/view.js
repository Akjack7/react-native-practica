import React from 'react';
import {Text,SafeAreaView} from 'react-native'
import {YellowBox, StatusBar} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  //  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
    StatusBar.setBarStyle('dark-content', false);
  }
  render() {
    return (
        <SafeAreaView>
            <Text>Hola</Text>
        </SafeAreaView>
            
    );
  }
}

export default App;