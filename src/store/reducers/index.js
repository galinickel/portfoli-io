import { combineReducers } from 'redux';
import currTemplateReducer from './currTemplateReducer.js'

export default combineReducers(
    {
        currTemplate:currTemplateReducer
    }
);