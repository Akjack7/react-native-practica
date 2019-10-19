import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { MainPoke } from '../../pages';
import Detail from '../../pages/detail';
import styles, {navBarStyles} from './styles';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="MainPoke" component={MainPoke} initial  {...navBarStyles}/>

      <Scene
        key="Detail"
        component={Detail}
        onRight={() => Actions.Detail()}
        {...navBarStyles}

      />


    </Stack>


  </Router>
);

export default Routes;
