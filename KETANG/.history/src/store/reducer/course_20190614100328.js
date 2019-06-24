import * as TYPE from '../action-types';
let INIT_STATE={bannerData:[]};
export default function course(state=INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));//对传进的state进行深度克隆，以后操作这个深度克隆的
    switch(action.type){
        case TYPE.COURSE_QUERY_BANNER :
            let {code,data}=action.bannerData;
            if(parseFloat(code)===0){
                state.bannerData = data;
            }  
        break;
    }
    return state;
};