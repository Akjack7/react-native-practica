import * as types from './types';

const initialState = {
  list: [],
  total: 0,
  offset: 0,
  item: null,
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DETAIL_UPDATE_ITEM:
      return {
        ...state,
        item: action.value,
      };

    case types.DETAIL_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
        total: action.total,
      };

    case types.DETAIL_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    case types.DETAIL_UPDATE_OFFSET:
      return {
        ...state,
        offset: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
