import {combineReducers} from 'redux';
import course from './course';
import person from './person';
//通过调用redux中的combineReducers把所有reducer合并,
//因为项目中，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分，所以此处需要合并
let reducer=combineReducers({
    course,
    person
});
export default reducer;