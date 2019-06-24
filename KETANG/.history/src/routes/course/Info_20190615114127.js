import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='baseInfo'>
            <video src='http://txycdn.miaopai.com/stream/b7dOr6N54XZ1vluE2cgnaD-fze42y0zHMtITaA___16_0_1508740329.mp4?ssig=95b45dae3e215e0b7618057fcedbcdf6&time_stamp=1560573184862' 
            controls preload='none'/>
            <div className='content'>
                <h3>课程名称</h3>
                <p>课程描述</p>
                <span>课程价格：</span>
                <Button type='danger'>立即购买</Button>
            </div>
        </div>;
    }
}
export default connect()(Info);