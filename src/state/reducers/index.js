import { combineReducers } from 'redux';
import reducer from './categoriesReducer';
import categoriesReducer from './categoriesReducer';

const reducers = combineReducers({
    category : categoriesReducer
})

export default reducers;