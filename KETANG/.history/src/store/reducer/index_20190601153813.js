import {combineReducers} from 'redux';
import course from './course';
import person from './person';
//通过调用redux中的combineReducers把所有reducer合并
let reducer=combineReducers({
    course,
    person
});
export default reducer;