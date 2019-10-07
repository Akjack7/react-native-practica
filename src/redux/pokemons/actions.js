import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

export const setFetching = value => {
  const action = {
    type: types.POKE_SET_FETCHING,
    value: value,
  };
  return action;
};

export const updateList = value => {
  return {
    type: types.POKE_UPDATE_LIST,
    value,
  };
};

export const updateItem = value => {
  return {
    type: types.POKE_UPDATE_ITEM,
    value,
  };
};

// FETCH POKE LIST OPT 1 (AWAIT)
export const fetchPokeList = () => {
  return async (dispatch, getState) => {
    try {
      // GET POKE LIST FROM API
      dispatch(setFetching(true));
      const getPokeRes = await api.getPokemons();
      const pokemons = _.get(getPokeRes, 'res.data.results', []);

      console.log("actions pokes", pokemons)
      // DISPATCH ACTION TO UPDATE VALUE IN REDUCER
      dispatch(updateList(pokemons));
    } catch (e) {
      console.log('fetchHousesList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

