import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

export const setFetching = value => {
  return {
    type: types.DETAIL_SET_FETCHING,
    value,
  };
};


export const updateItem = value => {
  return {
    type: types.DETAIL_UPDATE_ITEM,
    value,
  };
};

export const updateOffset = value => {
  return {
    type: types.DETAIL_UPDATE_OFFSET,
    value,
  };
};

export const initDetailList = () => {
  return async dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchDetailList());
  };
};


// FETCH POKE OPT 1 (AWAIT)
export const fetchPokeDetail = () => {
  return async (dispatch, getState) => {
    try {
      // GET POKE FROM API
      dispatch(setFetching(true));
      const getPokeRes = await api.getPokemon("https://pokeapi.co/api/v2/pokemon/1/");
      console.log("getpokeresDetail",getPokeRes)
      const pokemon = _.get(getPokeRes, '', []);
 
      // DISPATCH ACTION TO UPDATE VALUE IN REDUCER
      dispatch(updateItem(pokemon));
    } catch (e) {
      console.log('fetchPokemonsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
