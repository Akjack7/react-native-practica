import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

export const setFetching = value => {
  return {
    type: types.DETAIL_SET_FETCHING,
    value,
  };
};

export const updateList = (list, total) => {
  return {
    type: types.DETAIL_UPDATE_LIST,
    list: list,
    total: total,
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


export const postDetail = data => {
  return async (dispatch, getState) => {
    const house = getState().houses.item;
    if (!house) {
      return;
    }

    try {
      dispatch(setFetching(true));
      const postPokemonRes = await api.postPokemon(data);
      const character = _.get(postPokemonRes, 'data.record', null);
      console.log('postPokemonRes res: ', postPokemonRes);

      // OPT 1:
      // const {total, list} = getState().characters;
      // const newTotal = total + 1;
      // const newList = [...list, postCharacterRes];
      // dispatch(updateList(newList, newTotal));

      // OPT 2:
      dispatch(initDetailList());

      if (character) {
        Actions.pop();
      }
    } catch (e) {
      console.log('postCharacter error: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
