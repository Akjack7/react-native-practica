import * as types from './types';

const initialState = {
  offset: 0,
  detail: null,
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DETAIL_UPDATE_ITEM:
    console.log("Desde reducer",action.value)
      return {
        ...state,
        detail: action.value,
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
