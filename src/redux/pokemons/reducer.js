import * as types from './types';

const initialState = {
  list: [],
  item: null,
  isFetching: false,
  total: 0,
  offset: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.POKE_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
        total: action.total,
      };
    case types.POKE_UPDATE_ITEM:
      return {
        ...state,
        item: action.value,
      };

    case types.POKE_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

      case types.POKE_UPDATE_OFFSET:
      return {
        ...state,
        offset: action.value,
      }; 

    default:
      return state;
  }
  
};

export default reducer;
