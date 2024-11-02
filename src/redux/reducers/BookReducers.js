import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  books: [],
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return {
        ...state,
        books: payload,
      };
    case ActionTypes.FETCH_BOOKS:
      return {
        ...state,
        books: payload,
      };
    default:
      return state;
  }
};

export const selectedBookReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BOOKS:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_BOOKS:
      return {};
    default:
      return state;
  }
};
