import {combineReducers} from 'redux';
import todo from './todo';
//通过调用redux中的combineReducers把所有reducer合并
let reducer=combineReducers({
    todo
});
export default reducer;