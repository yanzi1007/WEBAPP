import * as TYPE from '../action-types';
let INIT_STATE={bannerData:[],courseData:{
        total:1,
        limit:10,
        page:1,
        data:[]
    }
};
export default function course(state=INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));//对传进的state进行深度克隆，以后操作这个深度克隆的
    switch(action.type){
        //获取轮播图数据
        case TYPE.COURSE_QUERY_BANNER :
            let {code,data}=action.payload;
            if(parseFloat(code)===0){
                state.bannerData = data;
            }  
        break;
        //获取课程列表信息
        case TYPE.COURSE_QUERY_LIST :
            

    }
    return state;
};