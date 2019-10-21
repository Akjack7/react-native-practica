import * as types from './types';

const initialState = {
  offset: 0,
  detail: null,
  message: '',
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DETAIL_UPDATE_ITEM:
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

      case types.DETAIL_UPDATE_MESSAGE:
      return {
        ...state,
        message: action.value,
      }; 

    default:
      return state;
  }
};

export default reducer;
