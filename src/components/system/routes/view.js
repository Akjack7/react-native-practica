import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {MainPoke } from '../../pages';
//import styles, {navBarStyles} from './styles';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="MainPoke" component={MainPoke} initial />

      
    </Stack>
  </Router>
);

export default Routes;
