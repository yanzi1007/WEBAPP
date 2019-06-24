import * as TYPES from '../action-types';
import {queryInfo} from '../../api/person';
//action除了要把行为标识传给reducer，还要把获取的信息传给reducer,reducer根据是否从服务器获取的信息来修改容器中的状态信息
let person = {
        queryBaseInfo(){
        return {
            type:TYPES.PERSON_QUERY_BASE,
            payload : queryInfo()
        };
    }
}
export default person;