import * as TYPES from '../action-types';
import {queryBanner,queryList} from '../../api/course.js';
//用redux-promise中间键自动实现dispatch派发，但promise实例的属性名必须是payload
let course = {
    queryBanner(){
        return {
            type:TYPES.COURSE_QUERY_BANNER,
            payload : queryBanner()
        };
    },
    queryList(payload){
        let {limit=10,page=1,type='all',flag='push'}=payload;
        return async dispatch=>{
            let result =await queryList(
                {
                    limit,
                    page,
                    type
                }
            );
            dispatch({
                type:TYPES.COURSE_QUERY_LIST,
                result
            });
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