import * as TYPES from '../action-types';
import {queryBanner,queryList,queryShopCart} from '../../api/course.js';
//用redux-promise中间键自动实现dispatch派发，但promise实例的属性名必须是payload
let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            //自己实现第二次dispatch派发
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER,
                bannerData
            });
        }
    }
  ,
    //用redux-thunk中间键自动实现第二次dispatch派发

    
    queryList(payload){
        let {limit=10,page=1,type='all',flag='push'}=payload;
        return async dispatch=>{
            //传给服务器的参数只有limit,page,type，flag是在dispatch派发的时候传给reducer的
            let result =await queryList(
                {
                    limit,
                    page,
                    type
                }
            );
            //dispatch派发时除了要传从服务器获取的结果，还要传flag，然后在redurce里根据传进来的从服务器获取的结果和flag来决定是对数据进行替换还是追加
            dispatch({
                type:TYPES.COURSE_QUERY_LIST,
                result,
                flag,
                courseType:type
            });
        }
    },
    queryUnpay(){
        return async dispatch=>{
            let result = await queryShopCart(0);//传0表示想获得未支付的信息
            dispatch({
                type:TYPES.COURSE_UNPAY,
                result
            })
        } 
    },
    
    queryPay(){
        return async dispatch=>{
            let result = await queryShopCart(1);//传1表示想获得已支付的信息
            dispatch({
                type:TYPES.COURSE_PAY,
                result
            })
        } 

    }
}
//用redux-thunk中间键自动实现第二次dispatch派发，属性名可以自己命名，这里命名为了bannerData
// let course = {
//     queryBanner() {
//         return async dispatch => {
//             let bannerData = await queryBanner();
//             //自己实现第二次dispatch派发
//             dispatch({
//                 type: TYPES.COURSE_QUERY_BANNER,
//                 bannerData
//             });
//         }
//     }
//   }



export default course;