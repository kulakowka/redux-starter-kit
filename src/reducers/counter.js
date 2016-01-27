import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { createAction, handleAction, handleActions } from 'redux-actions';

// export default function counter(state = 0, action) {
//   switch (action.type) {
//   case INCREMENT_COUNTER:
//     return state + 1;
//   case DECREMENT_COUNTER:
//     return state - 1;
//   default:
//     return state;
//   }
// }

// https://github.com/acdlite/redux-actions
const reducer = handleActions({
  INCREMENT_COUNTER: (state, action) => {
    return state + 1 
  },

  DECREMENT_COUNTER: (state, action) => {
    return state - 1 
  }
}, 10);


export default reducer