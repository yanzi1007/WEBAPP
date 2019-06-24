import * as TYPE from '../action-types';
let INIT_STATE={};
export default function course(state=INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));//对传进的state进行深度克隆，以后操作这个深度克隆的
    switch(action.type){

    }
    return state;

};