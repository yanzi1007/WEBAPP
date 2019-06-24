import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';
import {queryInfo} from '../../api/course';
import Qs from 'qs';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            data:null
        };
    }
    async componentDidMount(){
        //获取courseId，在受路由管控的组件中，属性上会挂载一个location，location中的search就是courseId
        let {location:{search}}=this.props;
        let {courseId=0}=Qs.parse(search.substr(1)) || {};
        //发送请求获取信息
        console.log(courseId)
        let result=await queryInfo(courseId);
        console.log(result)
        if(parseFloat(result.code)===0){
            //更改组件的状态中的data信息，让组件重新渲染，显示最新信息
            this.setState({
                data:result.data
            })
        }
    }

    render(){
        let {data} =this.state;
        if(!data) return '';
        return <div className='baseInfo'>
            <video src='http://txycdn.miaopai.com/stream/b7dOr6N54XZ1vluE2cgnaD-fze42y0zHMtITaA___16_0_1508740329.mp4?ssig=95b45dae3e215e0b7618057fcedbcdf6&time_stamp=1560573184862' 
            controls preload='none' poster={data.pic}/>
            <div className='content'>
                <h3>{data.ame}</h3>
                <p>{data.dec}</p>
                <span>课程价格：{data.price}</span>
                <Button type='danger'>加入购物车</Button>
            </div>
        </div>;
    }
}
export default connect()(Info);