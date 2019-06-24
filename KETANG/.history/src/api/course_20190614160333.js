import axios from './index';
//获取轮播图数据
export function queryBanner(){
    return axios.get('/course/banner');
}
//获取课程列表信息
export function queryList(payload){
    let {limit=10,page=1,type='all'}=payload;
    return axios.get('/course/list',{
        params: {
            limit,
            page,
            type
        }
    });
}