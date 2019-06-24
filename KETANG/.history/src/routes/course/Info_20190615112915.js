import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className='baseInfo'>
            <video src='E:\Project\KeTang\src\static\video\SeeYouAgain.mp4' controls preload='none'/>
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