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
  console.log("Desde actions",value)
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



// FETCH POKE OPT 1 (AWAIT)
export const fetchPokeDetail = (url) => {
  return async (dispatch, getState) => {
    try {
      // GET POKE FROM API
      dispatch(setFetching(true));
      const getPokeRes = await api.getPokemon(url);
      const detail = _.get(getPokeRes, 'data', []);
      console.log("getpokeresDetail",detail)
      // DISPATCH ACTION TO UPDATE VALUE IN REDUCER
      dispatch(updateItem(detail));
    } catch (e) {
      console.log('fetchPokemonsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
