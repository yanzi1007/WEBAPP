import * as TYPES from '../action-types';
let INIT_STATE={bannerData:[],courseData:{
        total:1,
        limit:10,
        page:1,
        data:[],
        courseType:'all',
        shopCart:{
            unpay:[],
            pay:[]
        }
    }
};
export default function course(state=INIT_STATE,action){
    state = JSON.parse(JSON.stringify(state));//对传进的state进行深度克隆，以后操作这个深度克隆的
    switch(action.type){
        //获取轮播图数据
        case TYPES.COURSE_QUERY_BANNER :
            let {code,data}=action.payload;
            if(parseFloat(code)===0){
                state.bannerData = data;
            }  
        break;
        //获取课程列表信息
        case TYPES.COURSE_QUERY_LIST :
            let {result,flag,courseType} = action;
            state.courseType=courseType;
            if(parseFloat(result.code)===0){
                state.courseData.total=parseFloat(result.total); //替换
                state.courseData.limit=parseFloat(result.limit); //替换
                state.courseData.page=parseFloat(result.page); //替换
                if(flag==='push'){ 
                    state.courseData.data.push(...result.data); //追加
                }else{
                    state.courseData.data=result.data; //替换
                }
            }
            break;
        //获取已支付和未支付的购物车信息
        //=>获取已支付和未支付的购物车信息
        case TYPES.COURSE_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
            }
            break;
        case TYPES.COURSE_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.pay = action.result.data;
            }
            break;

    }
    return state;
};
/*1、点击加载更多，是将从服务器获取的数据拼接到courseData.data中，而不是更新，courseData中的limit/page/tatal可以更新
2、点击筛选的时候，把从服务器获取的数据信息，替换掉courseData.data中的数据
3、情况一和情况二说明，不同情况，对courseData.data中的数据的处理方式不同（有的追加，有的是替换），因此
在dispatch派发的时候，还得传递一个标识：flag=push/replace，代表是追加还是替换，在reducer中，根据标识完成对应的操作
4、在redux容器中还需要记录一个信息，就是当前课程的类型：all/react/vue...由此，更新标题的信息
*/