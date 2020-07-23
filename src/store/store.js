import React, { createContext, useReducer } from 'react';

const initialState = {};

const store = createContext(initialState);
const { Provider } = store;

const ACTIONS = {
  ACTION_1: 'UPDATE_STATE',
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.ACTION_1:
        return {
          ...state,
          ...action.data,
        };
      default:
        throw new Error('Reducer action not found.');
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, ACTIONS };
