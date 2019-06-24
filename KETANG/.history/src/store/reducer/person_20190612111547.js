import * as TYPE from '../action-types';
let INIT_STATE={baseInfo:null};
export default function person(state=INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));//对传进的state进行深度克隆，以后操作这个深度克隆的
    let payload;
    switch(action.type){
        case TYPE.PERSON_QUERY_BASE:
            payload = action.payload;
            if(parseFloat(payload.code)===0){
                state.baseInfo = payload.data;
            }
            break;
    }
    return state;

};