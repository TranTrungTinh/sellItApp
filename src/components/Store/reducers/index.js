import { combineReducers } from 'redux';
import userReducer from './user-reducer'

const reducer = combineReducers({
  User: userReducer
});

export default reducer;