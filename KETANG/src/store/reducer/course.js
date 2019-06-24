import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData: [],
    courseData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },
    courseType: 'all',
    shopCart: {
        unpay: [],
        pay: []
    },
    selectAll:true//全选标志，默认值是true表示全选
    
};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        
        //=>获取轮播图数据
        case TYPES.COURSE_QUERY_BANNER:
            let {code, data} = action;
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;

        //=>获取课程列表信息
        case TYPES.COURSE_QUERY_LIST:
                console.log(action)
            let {result, flag, courseType} = action;
            
            state.courseType = courseType;
            if (parseFloat(result.code) === 0) {
                state.courseData.total = parseFloat(result.total);
                state.courseData.limit = parseFloat(result.limit);
                state.courseData.page = parseFloat(result.page);
                state.courseData.data = flag === 'push' ? state.courseData.data.concat(result.data) : result.data;
            }
            break;

        //=>获取已支付和未支付的购物车信息
        case TYPES.COURSE_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
                //给unpay中的数据都加一个选中的属性check，默认为true是全选中
                state.shopCart.unpay=state.shopCart.unpay.map(item=>{
                    return {...item,check:true};
                })
                state.selectAll=true;
            }
            break;
        case TYPES.COURSE_PAY:
            if (parseFloat(action.result.code) === 0) {  
                state.shopCart.pay = action.result.data;
            }
        break;
        //操作全选和非全选
        case TYPES.COURSE_HANDLE :
            let mode = action.mode;
            if(mode==='all'){
                state.selectAll=!state.selectAll;
                state.shopCart.unpay=state.shopCart.unpay.map((item=>{
                    return {...item,check:state.selectAll};
                }))
            }else{
                let item=state.shopCart.unpay.find(item=>{return parseFloat(item.id)===mode;})
                item.check = !item.check;
                //验证是否所有的课程都选中，如果是，则全选按钮也要选中
                let f=state.shopCart.unpay.find(item=>{
                    return item.check===false;
                });
                f ? state.selectAll=false:state.selectAll=true
            }
            break;
    }
    return state;
};
/*
 *  limit/page/total 每一次从服务器获取信息后都要更新
 *
 *  1.第一次获取数据或者点击加载更多获取其它页的数据，都是把最新获取的这几条数据追加到 courseData.data 中
 *
 *  2.点击筛选的时候，应该是把获取的数据信息，替换 courseData.data
 *
 *  =>DISPATCH派发的时候，还需要传递一个标识：flag=push/replace，代表是追加还是替换，根据标识我们完成对应的操作
 *
 *  3. 在REDUX容器中还需要记录一个信息，当前课程类型：all/react/vue...由此更新标题的信息
 *
 */