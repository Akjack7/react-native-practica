import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

const LIMIT = 20
export const setFetching = value => {
  const action = {
    type: types.POKE_SET_FETCHING,
    value: value,
  };
  return action;
};

export const updateList = (list, total) => {
  return {
    type: types.POKE_UPDATE_LIST,
    list: list,
    total: total
  };
};

export const updatePokeListOffset = () => {
  return async (dispatch, getState) => {
    const {offset} = getState().pokemons;
    const newOffset = offset + LIMIT;
    dispatch(updateOffset(newOffset));
    dispatch(fetchPokeList());
  };
};

export const updateItem = value => {
  return {
    type: types.POKE_UPDATE_ITEM,
    value,
  };
};

export const updateOffset = value => {
  return {
    type: types.POKE_UPDATE_OFFSET,
    value,
  };
};

export const initPokeList = () => {
  return async dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchPokeList());
  };
};

// FETCH POKE LIST OPT 1 (AWAIT)
export const fetchPokeList = () => {
  return async (dispatch, getState) => {
    try {
      // GET POKE LIST FROM API
      dispatch(setFetching(true));
      const {offset, list} = getState().pokemons;

      const params = {offset: offset, limit: LIMIT};
      const getPokeRes = await api.getPokemons(params);
      
      console.log("newList", getState().pokemons)
      // ALL REDUCER LIST ELEMENTS + NEW LIMIT (20) ELEMENTS
      const newList = [...list, ..._.get(getPokeRes, 'data.results', [])];
      
      const total = parseInt(_.get(getPokeRes, 'data.count', 0));
      // DISPATCH ACTION TO UPDATE VALUE IN REDUCER
      dispatch(updateList(newList,total));
    } catch (e) {
      console.log('fetchPokemonsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

